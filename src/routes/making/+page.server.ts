import { loadProjects, type ProjectMeta } from '$lib/project';
import type { PageServerLoad } from './$types';

/*
    Every project file in this folder (anything but +page.* and _*.svelte) is
    picked up here automatically. This runs at build time, so only the metadata
    reaches the browser, not every project's writeup.
*/
export const load: PageServerLoad = () => ({
    projects: loadProjects(
        import.meta.glob<ProjectMeta>(
            ['./*.svelte', '!./+*.svelte', '!./_*.svelte'],
            { eager: true, import: 'meta' },
        ),
    ),
});
