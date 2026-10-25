import { error } from '@sveltejs/kit';
import { slugFromPath, type ProjectModule } from '$lib/project';
import type { EntryGenerator, PageLoad } from './$types';

/*
    One route serves every project file in the folder above. Imports are lazy,
    so each page loads only its own writeup.
*/
const projects = import.meta.glob<ProjectModule>([
    '../*.svelte',
    '!../+*.svelte',
    '!../_*.svelte',
]);

const bySlug = new Map(
    Object.entries(projects).map(([path, load]) => [slugFromPath(path), load]),
);

/* Prerender every project, including drafts that the index doesn't link to. */
export const entries: EntryGenerator = () =>
    [...bySlug.keys()].map((slug) => ({ slug }));

export const load: PageLoad = async ({ params }) => {
    const loadProject = bySlug.get(params.slug);
    if (!loadProject) error(404, 'No such project');

    const project = await loadProject();
    return { meta: project.meta, Writeup: project.default };
};
