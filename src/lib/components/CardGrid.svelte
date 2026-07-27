<script lang="ts">
    interface Props {
        /** Smallest a card may get before the grid drops a column. */
        min?: string;
        children?: import('svelte').Snippet;
    }

    let { min = '15rem', children }: Props = $props();
</script>

<div class="grid" style={`--card-min: ${min}`}>
    {@render children?.()}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(
            auto-fill,
            minmax(min(var(--card-min), 100%), 1fr)
        );
        gap: 1.25rem;
        margin-bottom: var(--step);
    }
</style>
