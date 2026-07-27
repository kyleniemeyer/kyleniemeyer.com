<script lang="ts">
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';

    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<a class="skip" href="#content">Skip to content</a>

<Nav />

<main id="content">
    {@render children?.()}
</main>

<Footer />

<style>
    main {
        max-width: var(--wide);
        margin: 0 auto;
        padding: calc(var(--step) * 2) var(--gutter) 0 var(--gutter);
    }

    /*
		Prose defaults to a comfortable measure; anything that should run wider
		(card grids, galleries) opts out with class="wide".
	*/
    main :global(> :not(.wide)) {
        max-width: var(--measure);
    }

    .skip {
        position: absolute;
        left: -9999px;
        top: 0;
        background-color: var(--paper-raised);
        color: var(--ink);
        padding: 0.6rem 1rem;
        border: 1px solid var(--accent);
        border-radius: var(--radius);
        z-index: 20;
    }

    .skip:focus {
        left: 0.5rem;
        top: 0.5rem;
    }

    @media only screen and (max-width: 640px) {
        main {
            padding: calc(var(--step) * 1.5) 1rem 0 1rem;
        }
    }
</style>
