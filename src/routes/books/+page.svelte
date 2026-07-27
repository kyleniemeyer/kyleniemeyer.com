<script lang="ts">
    import Title from '$lib/components/Title.svelte';
    import Section from '$lib/components/Section.svelte';
    import LibraryThing from '$lib/components/LibraryThing.svelte';
    import Todo from '$lib/components/Todo.svelte';

    /*
        Paste the script URL from LibraryThing's widget builder here
        (https://www.librarything.com/widget — sign in first), and set
        LIBRARYTHING_USER in src/lib/site.ts. Until then the widget area
        renders a plain link to LibraryThing instead.
    */
    const LIBRARYTHING_WIDGET_SRC: string | undefined = undefined;
</script>

<Title
    text="Books"
    description="On collecting books — what I look for, how the collection came together, and my catalog."
/>

<h1>Books</h1>

<p class="lede">
    I collect books. This page is about what I look for and how the collection
    came together.
</p>

<Todo>
    A few paragraphs on how you got into collecting and what draws you to it.
</Todo>

<Section id="collecting" header="What I collect">
    <Todo>
        What the collection actually focuses on — subjects, periods, presses,
        editions, bindings, or whatever the organizing thread is. This is the
        section a fellow collector would read first.
    </Todo>
</Section>

<Section id="favorites" header="A few favorites">
    <Todo>
        Two or three individual books worth singling out, with a sentence each on
        why. Add photos with the &lt;Figure&gt; component:
        <code>&lt;Figure src="/images/books/name.jpg" alt="…" caption="…" /&gt;</code>
        — put the image files in <code>static/images/books/</code>.
    </Todo>
</Section>

<Section id="catalog" header="The catalog">
    <p>
        The whole collection is cataloged on LibraryThing, which is more current
        and more complete than anything I'd maintain by hand here.
    </p>

    <LibraryThing src={LIBRARYTHING_WIDGET_SRC} />
</Section>
