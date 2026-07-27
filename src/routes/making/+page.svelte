<script lang="ts">
    import Title from '$lib/components/Title.svelte';
    import Card from '$lib/components/Card.svelte';
    import CardGrid from '$lib/components/CardGrid.svelte';
    import { loadProjects, type ProjectMeta } from '$lib/project';

    /*
        Every project folder under src/routes/making/ that exports a `meta` is
        picked up here automatically. Add a folder, and it shows up — there's no
        list to update. See the README for the full recipe.
    */
    const projects = loadProjects(
        import.meta.glob<{ meta: ProjectMeta }>('./*/meta.ts', { eager: true }),
    );
</script>

<Title
    text="Making"
    description="Woodworking and DIY projects by Kyle Niemeyer, with photos and build notes."
/>

<h1>Making</h1>

<p class="lede">
    Woodworking and other things I build when I'm away from a keyboard. Notes and
    photos, mistakes included.
</p>

{#if projects.length > 0}
    <div class="wide">
        <CardGrid>
            {#each projects as project (project.slug)}
                <Card
                    href={`/making/${project.slug}`}
                    title={project.title}
                    eyebrow={String(project.year)}
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
