<script lang="ts">
    import { asset } from '$app/paths';
    import type { Photo } from '$lib/project';

    interface Props {
        photos: Photo[];
        /** Smallest a photo may get before the grid drops a column. */
        min?: string;
    }

    let { photos, min = '16rem' }: Props = $props();
</script>

{#if photos.length > 0}
    <div class="gallery" style={`--photo-min: ${min}`}>
        {#each photos as photo (photo.src)}
            <figure>
                <img src={asset(photo.src)} alt={photo.alt} loading="lazy" />
                {#if photo.caption}<figcaption>{photo.caption}</figcaption>{/if}
            </figure>
        {/each}
    </div>
{/if}

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(
            auto-fill,
            minmax(min(var(--photo-min), 100%), 1fr)
        );
        gap: 1.25rem;
        margin: calc(var(--step) * 1.5) 0;
    }

    figure {
        margin: 0;
    }

    img {
        width: 100%;
        border-radius: var(--radius);
        border: 1px solid var(--rule);
    }

    figcaption {
        margin-top: 0.45rem;
        font-size: var(--size-tiny);
        color: var(--ink-faint);
        line-height: 1.5;
    }
</style>
