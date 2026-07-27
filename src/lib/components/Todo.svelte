<script lang="ts">
    /**
     * A deliberately loud placeholder for content that still needs writing.
     *
     * These are meant to be impossible to miss and easy to find:
     *   grep -rn "Todo" src/routes
     * Delete each one as you fill in the real content.
     */
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<p class="todo">
    <strong>To write:</strong>
    {@render children?.()}
</p>

<style>
    .todo {
        padding: 0.85rem 1.1rem;
        border: 1px dashed var(--accent);
        border-radius: var(--radius);
        background-color: var(--accent-soft);
        font-size: var(--size-small);
        color: var(--ink-soft);
    }

    .todo strong {
        color: var(--accent);
    }
</style>
