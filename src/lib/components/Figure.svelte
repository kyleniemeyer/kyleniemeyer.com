<script lang="ts">
    import { asset } from '$app/paths';

    interface Props {
        /** Path under static/, e.g. "/images/books/shelf.jpg". */
        src: string;
        /** Describe the image for people who can't see it. Required. */
        alt: string;
        /** Visible caption below the image. */
        caption?: string;
        /** Let the figure break out past the prose measure. */
        wide?: boolean;
    }

    let { src, alt, caption, wide = false }: Props = $props();
</script>

<figure class:wide>
    <img src={asset(src)} {alt} loading="lazy" />
    {#if caption}<figcaption>{caption}</figcaption>{/if}
</figure>

<style>
    figure {
        margin: calc(var(--step) * 1.5) 0;
    }

    img {
        width: 100%;
        border-radius: var(--radius);
        border: 1px solid var(--rule);
    }

    figcaption {
        margin-top: 0.5rem;
        font-size: var(--size-tiny);
        color: var(--ink-faint);
        line-height: 1.5;
    }

    @media only screen and (min-width: 1024px) {
        .wide {
            width: var(--wide);
            max-width: calc(100vw - 2 * var(--gutter));
            margin-left: calc((var(--measure) - var(--wide)) / 2);
        }
    }
</style>
