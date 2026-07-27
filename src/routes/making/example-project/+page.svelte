<script lang="ts">
    import Title from '$lib/components/Title.svelte';
    import ProjectHeader from '$lib/components/ProjectHeader.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
    import Todo from '$lib/components/Todo.svelte';
    import type { Photo } from '$lib/project';
    import { meta } from './meta';

    /*
        Put photos in static/images/making/example-project/ and list them here.
        Every photo needs alt text; captions are optional.
    */
    const photos: Photo[] = [
        // {
        //     src: '/images/making/example-project/glue-up.jpg',
        //     alt: 'Panels clamped together during glue-up.',
        //     caption: 'Never enough clamps.',
        // },
    ];
</script>

<Title text={meta.title} description={meta.blurb} />

<ProjectHeader {meta} />

<Todo>
    The writeup. What you built, what it's made of, how it went, and what you'd
    do differently. Write it as ordinary paragraphs right here — this is a normal
    Svelte page, so anything you can write in HTML works.
</Todo>

<Gallery {photos} />

<p class="back"><a href="/making">← All projects</a></p>

<style>
    .back {
        margin-top: calc(var(--step) * 2);
        padding-top: var(--step);
        border-top: 1px solid var(--rule);
        font-size: var(--size-small);
    }
</style>
