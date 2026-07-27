<script lang="ts">
    import { RESEARCH_GROUP_URL, SOCIAL } from '$lib/site';
</script>

<footer>
    <div class="inner">
        <p class="links">
            <a href={RESEARCH_GROUP_URL} target="_blank" rel="noreferrer"
                >Niemeyer Research Group</a
            >
            <span class="dot">·</span>
            <a href={SOCIAL.github} target="_blank" rel="noreferrer">GitHub</a>
            <span class="dot">·</span>
            <a href={SOCIAL.bluesky} target="_blank" rel="noreferrer">Bluesky</a
            >
            <span class="dot">·</span>
            <a href={SOCIAL.mastodon} target="_blank" rel="noreferrer"
                >Mastodon</a
            >
        </p>
        <p class="fine">
            © {new Date().getFullYear()} Kyle E. Niemeyer. Views here are my own
            and do not represent Oregon State University.
        </p>
    </div>
</footer>

<style>
    footer {
        border-top: 1px solid var(--rule);
        margin-top: calc(var(--step) * 4);
        padding: var(--step) 0 calc(var(--step) * 2) 0;
    }

    .inner {
        max-width: var(--wide);
        margin: 0 auto;
        padding: 0 var(--gutter);
    }

    .links {
        font-size: var(--size-small);
        margin-bottom: 0.4rem;
    }

    .links a {
        color: var(--ink-soft);
        text-decoration: none;
    }

    .links a:hover {
        color: var(--accent);
        text-decoration: underline;
    }

    .dot {
        color: var(--ink-faint);
        margin: 0 0.3rem;
    }

    .fine {
        font-size: var(--size-tiny);
        color: var(--ink-faint);
        margin-bottom: 0;
        max-width: var(--measure);
    }

    @media only screen and (max-width: 640px) {
        .inner {
            padding: 0 1rem;
        }
    }
</style>
