<script lang="ts">
    import Gallery from '$lib/components/Gallery.svelte';
    import type { Milestone } from '$lib/project';

    /**
     * A dated progress log for a long-running project. Entries render in the
     * order given, so list them oldest first and append as work goes on.
     */
    interface Props {
        milestones: Milestone[];
    }

    let { milestones }: Props = $props();
</script>

<ol class="timeline">
    {#each milestones as milestone (milestone.date + milestone.title)}
        <li>
            <div class="eyebrow">{milestone.date}</div>
            <h3>{milestone.title}</h3>
            {#if milestone.note}<p>{milestone.note}</p>{/if}
            {#if milestone.photos}<Gallery photos={milestone.photos} min="12rem" />{/if}
        </li>
    {/each}
</ol>

<style>
    .timeline {
        list-style: none;
        margin: calc(var(--step) * 1.5) 0;
        padding: 0;
    }

    li {
        position: relative;
        padding: 0 0 calc(var(--step) * 1.25) 1.5rem;
        border-left: 1px solid var(--rule);
    }

    li:last-child {
        padding-bottom: 0;
    }

    /* The dot on the rule, lined up with the date. */
    li::before {
        content: '';
        position: absolute;
        left: calc(-0.3rem - 0.5px);
        top: 0.3rem;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        background-color: var(--accent);
    }

    h3 {
        margin: 0 0 0.4rem 0;
    }

    p {
        margin-bottom: 0;
    }
</style>
