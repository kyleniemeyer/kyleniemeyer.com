<!--
    Template for a project. Copy this file to <slug>.svelte in this folder; the
    filename becomes the URL (/making/<slug>). Files starting with an underscore,
    like this one, are ignored.

    The page title, header, and back link come from [slug]/+page.svelte, so
    this file only needs the metadata and the writeup.
-->
<script module lang="ts">
    import type { ProjectMeta } from '$lib/project';

    export const meta: ProjectMeta = {
        title: 'Example project',
        year: 2026,
        blurb: 'One sentence for the index card.',
        // cover: '/images/making/example-project/cover.jpg',
        // coverAlt: 'Describe the photo for people who cannot see it.',
        tags: ['template'],
        // inProgress: true,
        // draft: true,
    };
</script>

<script lang="ts">
    import Gallery from '$lib/components/Gallery.svelte';
    import Todo from '$lib/components/Todo.svelte';
    import type { Photo } from '$lib/project';

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

<Todo>
    The writeup. What you built, what it's made of, how it went, and what you'd
    do differently. Write it as ordinary paragraphs right here — this is a normal
    Svelte component, so anything you can write in HTML works.
</Todo>

<Gallery {photos} />
