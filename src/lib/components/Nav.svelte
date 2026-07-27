<script lang="ts">
    import { page } from '$app/state';
    import { RESEARCH_GROUP_URL } from '$lib/site';

    const links: { href: string; label: string }[] = [
        { href: '/about', label: 'About' },
        { href: '/consulting', label: 'Consulting' },
        { href: '/books', label: 'Books' },
        { href: '/making', label: 'Making' },
        { href: '/contact', label: 'Contact' },
    ];

    /**
     * Highlight a nav item on its own page and on anything beneath it, so
     * /making/some-project still marks "Making" as current.
     */
    function isCurrent(href: string, pathname: string): boolean {
        const path = pathname.replace(/\/$/, '') || '/';
        return path === href || path.startsWith(`${href}/`);
    }
</script>

<header>
    <div class="bar">
        <a class="wordmark" href="/">Kyle Niemeyer</a>

        <nav aria-label="Main">
            {#each links as link (link.href)}
                <a
                    href={link.href}
                    class:current={isCurrent(link.href, page.url.pathname)}
                    aria-current={isCurrent(link.href, page.url.pathname)
                        ? 'page'
                        : undefined}>{link.label}</a
                >
            {/each}
            <a
                class="offsite"
                href={RESEARCH_GROUP_URL}
                target="_blank"
                rel="noreferrer">Research group ↗</a
            >
        </nav>
    </div>
</header>

<style>
    header {
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: color-mix(in srgb, var(--paper) 88%, transparent);
        backdrop-filter: blur(8px);
        border-bottom: 1px solid var(--rule);
    }

    .bar {
        max-width: var(--wide);
        margin: 0 auto;
        padding: 0.85rem var(--gutter);
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        gap: 0.5rem 1.5rem;
    }

    .wordmark {
        font-family: var(--font-display);
        font-variation-settings: 'opsz' 40;
        font-weight: var(--weight-display);
        font-size: 1.2rem;
        letter-spacing: -0.015em;
        color: var(--ink);
        text-decoration: none;
        white-space: nowrap;
    }

    .wordmark:hover {
        color: var(--accent);
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 0.15rem 0.35rem;
        font-size: var(--size-small);
    }

    nav a {
        color: var(--ink-soft);
        text-decoration: none;
        padding: 0.2rem 0.55rem;
        border-radius: var(--radius);
        white-space: nowrap;
    }

    nav a:hover {
        color: var(--accent);
        background-color: var(--paper-sunken);
    }

    nav a.current {
        color: var(--ink);
        background-color: var(--accent-soft);
        font-weight: var(--weight-bold);
    }

    /* Set the outbound link apart — it leaves this site. */
    .offsite {
        margin-left: 0.35rem;
        padding-left: 0.75rem;
        border-left: 1px solid var(--rule);
        color: var(--ink-faint);
    }

    @media only screen and (max-width: 640px) {
        .bar {
            padding: 0.75rem 1rem;
        }

        nav {
            width: 100%;
        }

        nav a {
            padding-left: 0;
            padding-right: 0.9rem;
        }

        .offsite {
            margin-left: 0;
            padding-left: 0;
            border-left: none;
        }
    }
</style>
