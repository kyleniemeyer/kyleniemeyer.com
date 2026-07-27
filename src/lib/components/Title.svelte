<script lang="ts">
    interface Props {
        /** Page name, appended after the site name. Omit on the home page. */
        text?: string;
        /** One-sentence page summary, used for search results and link previews. */
        description?: string;
    }

    let { text, description }: Props = $props();

    let title = $derived(
        text ? `Kyle Niemeyer — ${text}` : 'Kyle Niemeyer',
    );
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    {#if description}
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
    {/if}
</svelte:head>
