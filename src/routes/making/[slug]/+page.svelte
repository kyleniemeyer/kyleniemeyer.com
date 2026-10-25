<script lang="ts">
    import Title from '$lib/components/Title.svelte';
    import ProjectHeader from '$lib/components/ProjectHeader.svelte';

    /* The page frame shared by every project; the writeup comes from its file. */
    let { data } = $props();
</script>

<Title text={data.meta.title} description={data.meta.blurb} />

<ProjectHeader meta={data.meta} />

<data.Writeup />

<p class="back"><a href="/making">← All projects</a></p>

<style>
    .back {
        margin-top: calc(var(--step) * 2);
        padding-top: var(--step);
        border-top: 1px solid var(--rule);
        font-size: var(--size-small);
    }
</style>
