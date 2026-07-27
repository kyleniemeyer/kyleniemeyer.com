<script lang="ts">
    import Title from '$lib/components/Title.svelte';
    import Section from '$lib/components/Section.svelte';
    import LibraryThing from '$lib/components/LibraryThing.svelte';
    import Todo from '$lib/components/Todo.svelte';

    /*
        Each widget is identified by the `theID` value from its snippet at
        https://www.librarything.com/widget (sign in first). Build a widget
        there, paste its id here, and drop in another <LibraryThing> — nothing
        else needs to change.
    */
    const WHOLE_COLLECTION = 'w0af845f5a111d891b299867a9c3edeed';
    const FINE_PRESS = 'w3efd22dcbaf3bb3dc683a08b3e6e2d5f';
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
    A few paragraphs on how I got into collecting and what draws me to it.
</Todo>

<Section id="collecting" header="What I collect">
    <Todo>
        What my collection actually focuses on: subjects, periods, presses,
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

<Section id="fine-press" header="Fine press books">
    <Todo>
        What draws me to fine press books: presses I follow, what makes an
        edition worth having, how this part of the collection differs from the
        rest.
    </Todo>

    <LibraryThing
        widget={FINE_PRESS}
        title="Fine press books from my LibraryThing"
    />
</Section>

<Section id="catalog" header="The whole catalog">
    <p>
        Everything is cataloged on LibraryThing, which is more current and more
        complete than anything I'd maintain by hand here:
    </p>

    <LibraryThing
        widget={WHOLE_COLLECTION}
        title="Books from my LibraryThing"
    />
</Section>
