<script lang="ts">
    import { onMount } from 'svelte';
    import { asset } from '$app/paths';
    import { LIBRARYTHING_USER } from '$lib/site';

    interface Props {
        /**
         * The widget's `theID` value, from the snippet LibraryThing's builder
         * gives you at https://www.librarything.com/widget (sign in first).
         * It looks like "w0af845f5a111d891b299867a9c3edeed".
         *
         * Everything else about the widget — which books, how many, what size —
         * is configured on their side and travels with this id, so adding a
         * second widget here is just a second id.
         */
        widget: string;
        /** LibraryThing account the widget belongs to. */
        user?: string;
        /** Describes this widget for screen readers and search engines. */
        title?: string;
    }

    let {
        widget,
        user = LIBRARYTHING_USER,
        title = 'Books from my LibraryThing',
    }: Props = $props();

    let frame: HTMLIFrameElement | undefined = $state();
    /* Rough starting size; replaced by real measurements once loaded. */
    let height = $state(300);
    /* undefined until measured, so the frame starts full-width to measure in. */
    let width: number | undefined = $state();
    let failed = $state(false);

    let profileUrl = $derived(
        `https://www.librarything.com/profile/${user}`,
    );

    /*
        See static/librarything-widget.html for why the widget is hosted in its
        own page rather than embedded directly.
    */
    let src = $derived(
        `${asset('/librarything-widget.html')}?user=${encodeURIComponent(user)}&id=${encodeURIComponent(widget)}`,
    );

    /*
        The iframe is same-origin, so its content can be measured directly and
        the frame resized to fit — no fixed dimensions to keep in step with
        whatever is configured on LibraryThing's side.

        Never measure documentElement: it stretches to fill the iframe, so it
        just reports back the size we already set and the frame could never
        resize itself.
    */
    function measure(doc: Document) {
        const measuredHeight = doc.body?.scrollHeight ?? 0;
        if (measuredHeight > 0) height = measuredHeight;

        /*
            Width comes from the widget element itself, found by id. The body
            is block-level and fills the frame, so measuring that would be
            circular the same way documentElement is.
        */
        const measuredWidth = doc.getElementById(widget)?.offsetWidth ?? 0;
        if (measuredWidth > 0) width = measuredWidth;
    }

    onMount(() => {
        let observer: ResizeObserver | undefined;
        let poll: ReturnType<typeof setInterval> | undefined;

        function setup() {
            try {
                const doc = frame?.contentDocument;
                const body = doc?.body;
                if (!doc || !body) return;

                /*
                    A fresh iframe starts out on about:blank, whose document is
                    thrown away once the real one loads. So re-attach on every
                    call rather than assuming the first document is the final
                    one — otherwise we'd sit measuring a discarded body.
                */
                observer?.disconnect();
                observer = undefined;

                measure(doc);

                /*
                    The widget fills itself in well after the load event, and
                    keeps growing as covers arrive, so watch the body rather
                    than measuring only once.
                */
                if (typeof ResizeObserver !== 'undefined') {
                    observer = new ResizeObserver(() => measure(doc));
                    observer.observe(body);
                }

                /*
                    The observer alone isn't enough: it stops reporting while
                    the widget is still growing (measured settling at 127px when
                    the finished widget was 273px, i.e. visibly clipped). So
                    also re-measure on a timer for a short while, then stop.
                */
                clearInterval(poll);
                let ticks = 0;
                poll = setInterval(() => {
                    measure(doc);
                    if (++ticks >= 40) clearInterval(poll);
                }, 500);
            } catch {
                // Nothing readable to measure; the default height still applies.
            }
        }

        /*
            This page is prerendered, so the iframe can finish loading before
            Svelte hydrates and attaches a load listener — in which case the
            load event never reaches us. Check for that case up front, and also
            listen, since which one wins depends on timing and cache state.
        */
        if (frame?.contentDocument?.readyState === 'complete') setup();
        frame?.addEventListener('load', setup);

        return () => {
            observer?.disconnect();
            clearInterval(poll);
            frame?.removeEventListener('load', setup);
        };
    });
</script>

{#if failed}
    <p class="fallback">
        My catalog lives on
        <a href={profileUrl} target="_blank" rel="noreferrer">LibraryThing</a>.
    </p>
{:else}
    <div class="widget">
        <iframe
            bind:this={frame}
            {src}
            {title}
            style={`height: ${height}px${width ? `; width: ${width}px` : ''}`}
            onerror={() => (failed = true)}
        ></iframe>
    </div>
{/if}

<noscript>
    <p class="fallback">
        My catalog lives on
        <a href={profileUrl} target="_blank" rel="noreferrer">LibraryThing</a>.
    </p>
</noscript>

<style>
    .widget {
        margin: calc(var(--step) * 1.5) 0;
    }

    iframe {
        display: block;
        /*
            Starts full-width so the widget has room to lay out at its natural
            size, then the measured width is applied inline. max-width keeps it
            inside the column on narrow screens.
        */
        width: 100%;
        max-width: 100%;
        border: 0;
    }

    .fallback {
        padding: 1rem 1.15rem;
        background-color: var(--paper-sunken);
        border: 1px solid var(--rule);
        border-radius: var(--radius);
        font-size: var(--size-small);
        color: var(--ink-soft);
        margin-bottom: 0;
    }
</style>
