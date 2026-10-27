<script lang="ts">
    import { asset } from '$app/paths';
    import Title from '$lib/components/Title.svelte';
    import Card from '$lib/components/Card.svelte';
    import CardGrid from '$lib/components/CardGrid.svelte';
    import { RESEARCH_GROUP_URL } from '$lib/site';
</script>

<Title
    description="Kyle Niemeyer is a professor of mechanical engineering at Oregon State University. Personal site: consulting, book collecting, and woodworking."
/>

<div class="hero">
    <img
        class="portrait"
        src={asset('/images/portrait.webp')}
        alt="Portrait of Kyle E. Niemeyer"
    />
    <div class="intro">
        <h1>Kyle E. Niemeyer</h1>
        <p class="lede">
            Engineer and professor. Also a collector of books and an
            intermittent maker of things.
        </p>
    </div>
</div>

<p>
    I'm a Professor of Mechanical Engineering at <a
        href="https://oregonstate.edu"
        target="_blank"
        rel="noreferrer">Oregon State University</a
    >, where I also serve as Associate Head for Academic Affairs in the 
    <a
        href="https://engineering.oregonstate.edu/MIME"
        target="_blank"
        rel="noreferrer">School of Mechanical, Industrial, and Manufacturing Engineering</a
    >. My research group uses computational modeling to study fluid 
    flows&mdash;combustion, chemical kinetics, numerical methods, and parallel 
    computing&mdash;and I spend a good deal of energy on open science and research
    software.
</p>

<p>
    This is my personal site. Everything about my research, students,
    publications, and teaching lives on the <a
        href={RESEARCH_GROUP_URL}
        target="_blank"
        rel="noreferrer">Niemeyer Research Group site</a
    >. What's here is the rest: a fuller <a href="/about">professional
    picture</a>, the <a href="/consulting">consulting</a> I do in a personal
    capacity, and the things I do when I'm not doing any of that.
</p>

<div class="wide">
    <h2 class="section-head">Elsewhere on this site</h2>
    <CardGrid>
        <Card href="/about" title="About" eyebrow="Professional">
            Bio, academic lineage, and how I got here.
        </Card>
        <Card href="/consulting" title="Consulting" eyebrow="Professional">
            Modeling and simulation, scientific software, and technical review,
            through Niemeyer Consulting LLC.
        </Card>
        <Card href="/books" title="Books" eyebrow="Personal">
            What I collect and why, plus my catalog.
        </Card>
        <Card href="/making" title="Making" eyebrow="Personal">
            DIY and woodworking projects, with pictures and notes.
        </Card>
    </CardGrid>
</div>

<style>
    .hero {
        display: flex;
        align-items: center;
        gap: 1.75rem;
        margin-bottom: calc(var(--step) * 1.75);
    }

    .portrait {
        flex: 0 0 9.5rem;
        width: 9.5rem;
        height: 9.5rem;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid var(--rule);
    }

    .intro h1 {
        margin-bottom: 0.5rem;
    }

    .intro .lede {
        margin-bottom: 0;
    }

    .section-head {
        border-bottom: 1px solid var(--rule);
        padding-bottom: 0.4rem;
    }

    @media only screen and (max-width: 560px) {
        .hero {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
        }

        .portrait {
            flex-basis: auto;
            width: 7.5rem;
            height: 7.5rem;
        }
    }
</style>
