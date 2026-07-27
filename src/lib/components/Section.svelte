<script lang="ts">
    /**
     * A linkable <h2> section heading. Hovering reveals an anchor link so any
     * section can be linked to directly, e.g. /about#lineage.
     */
    interface Props {
        id: string;
        header: string;
        children?: import('svelte').Snippet;
    }

    let { id, header, children }: Props = $props();
</script>

<h2 {id}>
    {header}<a class="anchor" href={`#${id}`} aria-label={`Link to ${header}`}
        >#</a
    >
</h2>
{@render children?.()}

<style>
    h2 {
        border-bottom: 1px solid var(--rule);
        padding-bottom: 0.4rem;
    }

    .anchor {
        margin-left: 0.4em;
        color: var(--ink-faint);
        text-decoration: none;
        opacity: 0;
        font-family: var(--font-body);
        font-weight: 400;
        transition: opacity 0.12s ease;
    }

    h2:hover .anchor,
    .anchor:focus-visible {
        opacity: 1;
    }
</style>
