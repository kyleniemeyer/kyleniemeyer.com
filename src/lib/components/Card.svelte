<script lang="ts">
    import { asset } from '$app/paths';

    interface Props {
        href: string;
        title: string;
        /** Path under static/, e.g. "/images/making/table/cover.webp". */
        image?: string;
        imageAlt?: string;
        /** Small line above the title — a year, a category. */
        eyebrow?: string;
        children?: import('svelte').Snippet;
    }

    let { href, title, image, imageAlt, eyebrow, children }: Props = $props();

    let external = $derived(
        href.startsWith('http://') || href.startsWith('https://'),
    );
</script>

<a
    class="card"
    {href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
>
    {#if image}
        <div class="frame">
            <img src={asset(image)} alt={imageAlt ?? ''} loading="lazy" />
        </div>
    {/if}
    <div class="body">
        {#if eyebrow}<div class="eyebrow">{eyebrow}</div>{/if}
        <h3>{title}{#if external}<span class="arrow"> ↗</span>{/if}</h3>
        <div class="blurb">{@render children?.()}</div>
    </div>
</a>

<style>
    .card {
        display: flex;
        flex-direction: column;
        background-color: var(--paper-raised);
        border: 1px solid var(--rule);
        border-radius: var(--radius);
        overflow: hidden;
        text-decoration: none;
        color: inherit;
        transition:
            border-color 0.14s ease,
            transform 0.14s ease;
    }

    .card:hover {
        border-color: var(--accent);
        transform: translateY(-2px);
    }

    .frame {
        aspect-ratio: 4 / 3;
        background-color: var(--paper-sunken);
        overflow: hidden;
    }

    .frame img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .body {
        padding: 1rem 1.1rem 1.15rem 1.1rem;
    }

    h3 {
        margin: 0 0 0.35rem 0;
        font-size: 1.125rem;
    }

    .card:hover h3 {
        color: var(--accent);
    }

    .arrow {
        color: var(--ink-faint);
        font-size: 0.85em;
    }

    .blurb {
        font-size: var(--size-small);
        color: var(--ink-soft);
        line-height: 1.5;
    }

    /* Blurbs are usually a bare sentence; drop the trailing paragraph gap. */
    .blurb :global(p:last-child) {
        margin-bottom: 0;
    }
</style>
