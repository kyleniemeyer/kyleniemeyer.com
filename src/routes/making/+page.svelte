<script lang="ts">
    import Title from '$lib/components/Title.svelte';
    import Card from '$lib/components/Card.svelte';
    import CardGrid from '$lib/components/CardGrid.svelte';
    import { projectDates } from '$lib/project';

    /*
        Projects are gathered in +page.server.ts from the <slug>.svelte files in
        this folder. Add a file, and it shows up — there's no list to update.
        See the README for the full recipe.
    */
    let { data } = $props();
</script>

<Title
    text="Making"
    description="DIY and woodworking projects by Kyle Niemeyer, with photos and build notes."
/>

<h1>Making</h1>

<p class="lede">
    DIY projects, woodworking, and other things I build when I'm away from a keyboard.
    Notes and photos, mistakes included.
</p>

{#if data.projects.length > 0}
    <div class="wide">
        <CardGrid>
            {#each data.projects as project (project.slug)}
                <Card
                    href={`/making/${project.slug}`}
                    title={project.title}
                    eyebrow={projectDates(project)}
                    image={project.cover}
                    imageAlt={project.coverAlt ?? ''}
                >
                    {project.blurb}
                </Card>
            {/each}
        </CardGrid>
    </div>
{:else}
    <p>Nothing posted yet. Check back.</p>
{/if}
