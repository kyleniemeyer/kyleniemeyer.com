<script lang="ts">
    import Title from '$lib/components/Title.svelte';
    import Section from '$lib/components/Section.svelte';
    import LibraryThing from '$lib/components/LibraryThing.svelte';
    import Todo from '$lib/components/Todo.svelte';
    import Figure from '$lib/components/Figure.svelte';
    import External from '$lib/components/External.svelte';

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

<p>
    I have always loved reading and collecting physical books, for as long as I can remember.
    This probably started with some old Hardy Boys hardbacks my father gave me, 
    but really took off when I bought a well-used paperback copy of <i>Champions of the Force</i>
    from a local library.
</p>

<Figure src="/images/books/book-champions-of-the-force.png" 
alt="cover of Champions of the Force book" 
caption="My ragged old copy of Champions of the Force" 
/>

<p>
    For the uninitiated, this is from the <i>Star Wars</i> Expanded Universe of books
    (which Lucasfilm has since renamed "<i>Star Wars Legends</i>" and declared non-canon).
    Even though this was the third book in a trilogy where I hadn't read the first two books,
    the story hooked me, and led to my life-long love of science fiction,
    and speculative fiction more broadly. 
</p>

<p>
    (Of course, I also have similarly old and well-read paperback copies of <i>The Hobbit</i> 
    and <i>Lord of the Rings</i> of a similar vintage, which led to my similar love of fantasy.)
</p>

<p>
    Over time, my library grew as I bought more books to read (and reread—many 
    times in a few cases). This started out as paperbacks, then I began to buy hardbacks 
    when possible, even upgrading some of my earlier books.
</p>

<p>
    Then, a few years ago, I discovered <External to="https://www.foliosociety.com/usa/">
    The Folio Society</External> and <External to="https://subterraneanpress.com">
    Subterranean Press</External>, which make illustrated, sewn, cloth-bound editions of 
    books, meant to last. Subterranean Press in particular focuses on speculative fiction, 
    and releases limited copies of each edition; I have a lot of books from them.
    These were my gateway into the world of fine-press books.
</p>

<Section id="collecting" header="What I collect">
    <p>
        While I still buy the occasional trade hardback edition, most books I add to my collection
        these days come from publishers of genre fiction, limited-edition books like 
        Subterranean Press, <External to="https://www.centipedepress.com">Centipede Press</External>,
        and <External to="https://grimoakpress.com">Grim Oak Press</External>,
        and fine-press publishers like 
        <External to="https://conversationtreepress.com">Conversation Tree Press</External>,
        <External to="https://curiousking.co.uk">Curious King</External>,
        <External to="https://www.noreplypress.com">No Reply Press</External> (based out of Portland!),
        and <External to="https://suntup.press">Suntup Editions</External>.
    </p>
    <p>
        My book collection mostly focuses on speculative fiction: 
        science fiction, fantasy, and some gothic horror / weird fiction. 
        (If you aren't familiar with weird fiction, think Mary Shelley, 
        Edgar Allen Poe, and H. P. Lovecraft.) Beyond these genres, I tend 
        to collect all of the books made by my favorite fine presses.
        Broadly, I also collect some science books, literature, and books on crafting 
        (woodworking, DIY home projects and building, bookbinding).
    </p>
</Section>

<!-- <Section id="favorites" header="A few favorites">
    <Todo>
        Two or three individual books worth singling out, with a sentence each on
        why. Add photos with the &lt;Figure&gt; component:
        <code>&lt;Figure src="/images/books/name.jpg" alt="…" caption="…" /&gt;</code>
        — put the image files in <code>static/images/books/</code>.
    </Todo>
</Section> -->

<Section id="fine-press" header="Fine press books">
    <p>
        There's no official definition of "fine press," but the presses whose books I collect
        converge on roughly the same concept: a book made as an object worth keeping,
        rather than a cheap, mass-produced container for the text. In practice that means 
        type and layout chosen with care, commissioned artwork, sewn and often hand bindings, 
        archival papers, and materials like European bookcloth, hand-marbled paper, and 
        leather—all in a small numbered edition that isn't reprinted. 
        Conversation Tree Press puts it as "letterpress printing, hand binding, fine materials, 
        and a harmonious design."
    </p>

    <p>
        Many of these books are letterpress printed, where inked type is pressed into
        the sheet and leaves a faint texture you can feel on the page. That's my
        preference, and some presses do nothing else: No Reply Press prints every
        edition on a hand-operated press and binds each copy by hand, without using any
        electricity at all. But letterpress isn't the whole definition; some fine-press
        books are printed using offset lithography, particularly for longer books. 
        The craft is in the whole object, not just the press it went through.
    </p>
    
    <p>
        For me, the draw of these books is the hand-made nature, and the human craft
        that goes into them. I'm also a sucker for handmade marbled paper used on 
        covers and for endpapers.
    </p>

    <LibraryThing
        widget={FINE_PRESS}
        title="Fine press books from my LibraryThing"
    />
</Section>

<Section id="catalog" header="The whole catalog">
    <p>
        My whole collection is cataloged on LibraryThing, which is more current and more
        complete than anything I'd maintain by hand here:
    </p>

    <LibraryThing
        widget={WHOLE_COLLECTION}
        title="Books from my LibraryThing"
    />
</Section>
