/**
 * Metadata for one making/DIY project.
 *
 * Each project lives in its own folder under `src/routes/making/`, containing:
 *
 *   src/routes/making/<slug>/
 *     meta.ts        — exports `meta` (this shape); drives the index card
 *     +page.svelte   — the writeup and photos
 *
 * The index page discovers these automatically, and the URL slug comes from the
 * folder name, so there is no list to keep in sync and no way for a card and
 * its page to disagree.
 */
export interface ProjectMeta {
    /** Shown on the card and as the page heading. */
    title: string;
    /** Year finished. Used to sort the index, newest first. */
    year: number;
    /** One sentence for the index card. */
    blurb: string;
    /** Cover image path under static/, e.g. "/images/making/<slug>/cover.jpg". */
    cover?: string;
    /** Alt text for the cover image. */
    coverAlt?: string;
    /** Free-form labels, e.g. ["walnut", "hand tools"]. */
    tags?: string[];
    /** Set true to build the page but leave it off the index. */
    draft?: boolean;
}

/** A project's metadata plus the slug derived from its folder name. */
export interface Project extends ProjectMeta {
    slug: string;
}

/** One photo in a project gallery. */
export interface Photo {
    /** Path under static/, e.g. "/images/making/<slug>/glue-up.jpg". */
    src: string;
    /** Describe the image for people who can't see it. Required. */
    alt: string;
    caption?: string;
}

/**
 * Collect every project defined under src/routes/making/ and sort it newest
 * first. Called by the making index page.
 */
export function loadProjects(
    modules: Record<string, { meta: ProjectMeta }>,
): Project[] {
    return Object.entries(modules)
        .map(([path, module]) => {
            // "./shaker-side-table/meta.ts" -> "shaker-side-table"
            const slug = path.split('/')[1];
            return { ...module.meta, slug };
        })
        .filter((project) => !project.draft)
        .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}
