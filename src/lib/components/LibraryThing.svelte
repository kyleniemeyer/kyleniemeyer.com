<script lang="ts">
    import { onMount } from 'svelte';
    import { LIBRARYTHING_USER } from '$lib/site';

    interface Props {
        /**
         * The script URL from LibraryThing's widget builder
         * (https://www.librarything.com/widget — you must be signed in).
         *
         * Their builder hands you a snippet containing a script tag with a
         * `src` attribute pointing at librarything.com. Copy just that URL out
         * of the snippet and pass it here, or set a default in
         * `src/routes/books/+page.svelte`.
         *
         * Until this is set, the component renders the fallback link below
         * instead — the page stays presentable either way.
         */
        src?: string;
        /** Height reserved for the widget so the page doesn't jump as it loads. */
        minHeight?: string;
    }

    let { src, minHeight = '20rem' }: Props = $props();

    let container: HTMLDivElement | undefined = $state();
    let failed = $state(false);

    let profileUrl = $derived(
        LIBRARYTHING_USER
            ? `https://www.librarything.com/profile/${LIBRARYTHING_USER}`
            : 'https://www.librarything.com',
    );

    onMount(() => {
        if (!src || !container) return;

        /*
			The site is prerendered to static HTML, and Svelte does not execute
			<script> tags injected through {@html}. So build a real script
			element at runtime and append it — this is the only reliable way to
			run a third-party embed here.
		*/
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = src;
        script.onerror = () => (failed = true);
        container.appendChild(script);

        return () => script.remove();
    });
</script>

<div class="widget">
    {#if src}
        <div bind:this={container} style={`min-height: ${minHeight}`}></div>
    {/if}

    {#if !src || failed}
        <!--
			Shown when the widget isn't configured yet, fails to load, or is
			blocked by a script blocker or no-JS browser.
		-->
        <p class="fallback">
            My catalog lives on
            <a href={profileUrl} target="_blank" rel="noreferrer">LibraryThing</a
            >.
        </p>
    {/if}
</div>

{#if src}
    <!--
		Only needed when the widget IS configured: without JS the embed never
		runs. When it isn't configured the fallback above already covers it.
	-->
    <noscript>
        <p class="fallback">
            My catalog lives on
            <a href={profileUrl} target="_blank" rel="noreferrer">LibraryThing</a
            >.
        </p>
    </noscript>
{/if}

<style>
    .widget {
        margin: calc(var(--step) * 1.5) 0;
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
