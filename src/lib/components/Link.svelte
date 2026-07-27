<script lang="ts">
    import { page } from '$app/state';

    interface Props {
        /** An internal route ("/books") or a full external URL. */
        to: string;
        /** Optional fragment to append, e.g. id="collection" -> /books#collection */
        id?: string;
        /** Force the "you are here" styling. */
        active?: boolean;
        /** Opt out of "you are here" detection. */
        plain?: boolean;
        newTab?: boolean;
        children?: import('svelte').Snippet;
    }

    let {
        to,
        id,
        active = false,
        plain = false,
        newTab = false,
        children,
    }: Props = $props();

    function isExternal(url: string): boolean {
        return (
            url.startsWith('http://') ||
            url.startsWith('https://') ||
            url.startsWith('mailto:')
        );
    }

    function resolveRoute(route: string): string {
        const base = import.meta.env.BASE_URL.replace(/\/$/, '');
        return base + (route || '/');
    }

    let isCurrentRoute = $derived(
        !plain &&
            !newTab &&
            !isExternal(to) &&
            to !== '' &&
            to === page.route.id &&
            // Still render a real anchor when linking to an id on the current page.
            !id,
    );
</script>

{#if isCurrentRoute}
    <span class="at" aria-current="page">{@render children?.()}</span>
{:else if isExternal(to)}
    <a
        href={to}
        target={to.startsWith('mailto:') ? undefined : '_blank'}
        rel={to.startsWith('mailto:') ? undefined : 'noreferrer'}
        >{@render children?.()}</a
    >
{:else}
    <a
        href={`${to === '' ? page.url.pathname : resolveRoute(to)}${id ? `#${id}` : ''}`}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noreferrer' : undefined}
        class={active ? 'at' : ''}>{@render children?.()}</a
    >
{/if}

<style>
    .at {
        background-color: var(--accent-soft);
        border-radius: var(--radius);
    }
</style>
