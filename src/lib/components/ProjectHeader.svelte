<script lang="ts">
    import type { ProjectMeta } from '$lib/project';

    interface Props {
        meta: ProjectMeta;
    }

    let { meta }: Props = $props();
</script>

<div class="eyebrow">
    <a href="/making">Making</a> · {meta.year}
</div>

<h1>{meta.title}</h1>

<p class="lede">{meta.blurb}</p>

{#if meta.tags && meta.tags.length > 0}
    <p class="tags">
        {#each meta.tags as tag (tag)}<mark>{tag}</mark>{/each}
    </p>
{/if}

<style>
    .eyebrow a {
        color: inherit;
        text-decoration: none;
    }

    .eyebrow a:hover {
        color: var(--accent);
    }

    h1 {
        margin-bottom: 0.6rem;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
        margin-bottom: calc(var(--step) * 1.5);
    }

    .tags mark {
        font-size: var(--size-tiny);
    }
</style>
