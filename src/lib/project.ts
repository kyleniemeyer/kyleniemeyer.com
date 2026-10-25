import type { Component } from 'svelte';

/**
 * Metadata for one making/DIY project.
 *
 * Each project is a single file, `src/routes/making/<slug>.svelte`, which
 * exports `meta` (this shape) from a `<script module>` block and holds the
 * writeup and photos as its markup. Files starting with `_` are ignored.
 *
 * The index page and the shared `[slug]` route both discover these files
 * automatically, and the URL slug comes from the filename, so there is no list
 * to keep in sync and no way for a card and its page to disagree.
 */
export interface ProjectMeta {
    /** Shown on the card and as the page heading. */
    title: string;
    /**
     * Year finished, or year started if `inProgress`. Used to sort the index,
     * newest first.
     */
    year: number;
    /** Still underway. Shown as "<year>–present" and listed first. */
    inProgress?: boolean;
    /** One sentence for the index card. */
    blurb: string;
    /** Cover image path under static/, e.g. "/images/making/<slug>/cover.webp". */
    cover?: string;
    /** Alt text for the cover image. */
    coverAlt?: string;
    /** Free-form labels, e.g. ["walnut", "hand tools"]. */
    tags?: string[];
    /** Set true to build the page but leave it off the index. */
    draft?: boolean;
}

/** A project's metadata plus the slug derived from its filename. */
export interface Project extends ProjectMeta {
    slug: string;
}

/** What a project file exports: its metadata and the writeup component. */
export interface ProjectModule {
    meta: ProjectMeta;
    default: Component;
}

/** "../shaker-side-table.svelte" -> "shaker-side-table" */
export function slugFromPath(path: string): string {
    return path.split('/').pop()!.replace(/\.svelte$/, '');
}

/** One photo in a project gallery. */
export interface Photo {
    /** Path under static/, e.g. "/images/making/<slug>/glue-up.webp". */
    src: string;
    /** Describe the image for people who can't see it. Required. */
    alt: string;
    caption?: string;
}

/** A dated entry in a long-running project's progress log. */
export interface Milestone {
    /** Free-form, e.g. "August 2024". */
    date: string;
    title: string;
    /** A sentence or two on what got done. */
    note?: string;
    photos?: Photo[];
}

/** The year label shown on cards and project headers, e.g. "2024–present". */
export function projectDates(meta: ProjectMeta): string {
    return meta.inProgress ? `${meta.year}–present` : String(meta.year);
}

/**
 * Collect every project's metadata, keyed by file path, and sort it newest
 * first. Called by the making index page.
 */
export function loadProjects(metas: Record<string, ProjectMeta>): Project[] {
    return Object.entries(metas)
        .map(([path, meta]) => ({ ...meta, slug: slugFromPath(path) }))
        .filter((project) => !project.draft)
        .sort(
            (a, b) =>
                Number(!!b.inProgress) - Number(!!a.inProgress) ||
                b.year - a.year ||
                a.title.localeCompare(b.title),
        );
}
