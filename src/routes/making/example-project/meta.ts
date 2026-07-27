import type { ProjectMeta } from '$lib/project';

/*
    This folder is the template for a project. Copy it, rename the folder to the
    slug you want in the URL, and edit these two files. Delete this example once
    you have real projects — or set `draft: true` to keep it around unlisted.
*/
export const meta: ProjectMeta = {
    title: 'Example project',
    year: new Date().getFullYear(),
    blurb: 'Copy this folder to start a new project writeup.',
    // cover: '/images/making/example-project/cover.jpg',
    // coverAlt: 'Describe the photo for people who cannot see it.',
    tags: ['template'],
};
