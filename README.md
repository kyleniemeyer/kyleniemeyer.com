# kyleniemeyer.com

My personal site: professional background, consulting, book collecting, and
woodworking. Hosted on GitHub Pages at <https://kyleniemeyer.com>.

Separate from my research group site at
<https://niemeyer-research-group.github.io>, which covers research, students,
publications, and teaching.

Built with SvelteKit and `adapter-static` — the whole site prerenders to plain
HTML, so there's no server.

## Working on it

```sh
npm install
npm run dev      # live-reloading dev server
npm run build    # prerender into build/
npm run preview  # serve build/ exactly as it will be deployed
npm run check    # TypeScript and Svelte diagnostics
```

Requires Node 24 (pinned in `package.json`).

## Adding a DIY/woodworking project

Each project is a single file, `src/routes/making/<slug>.svelte`. The filename
becomes the URL, and both the index and the project page pick up new files
automatically — there's no list to update anywhere.

1. Copy `src/routes/making/_template.svelte` to
   `src/routes/making/your-project-name.svelte`.
2. Edit `meta` in the `<script module>` block at the top — title, year,
   one-sentence blurb, cover image, tags. This drives the card on the index
   page and the header on the project page.
3. Put photos in `static/images/making/your-project-name/`.
4. Write the rest of the file: the photo list for the gallery, then ordinary
   paragraphs. Every photo needs `alt` text.

The page title, header, and "All projects" link are added by the shared route
in `src/routes/making/[slug]/`, so project files don't repeat them. Files whose
names start with `_` are ignored.

Set `draft: true` in `meta` to build a page but keep it off the index.

## Preparing photos

Phone photos are far too big to post as-is. `scripts/prep-photos.sh` shrinks
them and converts them to WebP in one step. The first argument is the folder
under `static/images/` to write into:

```sh
scripts/prep-photos.sh making/shower-rebuild ~/Downloads/house-projects/*.png
scripts/prep-photos.sh books ~/Desktop/shelf.heic
```

The first writes `static/images/making/shower-rebuild/<name>.webp` for each
photo, referenced in pages as `/images/making/shower-rebuild/<name>.webp`. Each
is upright, at most 1600px on the long edge, sRGB, and with all metadata removed,
including GPS location. Names are lowercased, with spaces turned into hyphens.
It reads HEIC, JPEG, and PNG, and leaves existing files alone unless `FORCE=1`.
`SIZE=2000` or `QUALITY=85` adjust the output.

Needs macOS and `cwebp` (`brew install webp`).

For a project that's still underway, set `inProgress: true` and make `year` the
year it started. It shows as "2024–present" and sorts to the top of the index.
For a dated progress log, use the `Timeline` component with a list of
milestones (see `main-suite-addition` for an example). To post an update,
append a milestone.

## Content still to fill in

Placeholders are marked with the `Todo` component so they're loud on the page
and easy to find:

```sh
grep -rn "Todo" src/routes
```

Also outstanding: **photos** for the books page and each project.

## The LibraryThing widget

The books page embeds a LibraryThing widget. It's configured by a single value —
`LIBRARYTHING_WIDGET_SRC` in `src/routes/books/+page.svelte`, the script `src`
URL from <https://www.librarything.com/widget> (sign in first).

That URL carries both `userid` and a `theID` hash. LibraryThing's script fills in
a div whose `id` must equal `theID`, so `LibraryThing.svelte` parses the hash
back out of the URL and builds the div itself — you never have to paste the hash
twice. To swap in a different widget, replace the whole URL and nothing else.

Because the site is prerendered to static HTML, the embed script is appended at
runtime in `onMount`; script tags in prerendered markup wouldn't execute. If the
script is blocked, fails, or JavaScript is off, the page falls back to a plain
link to the LibraryThing profile named by `LIBRARYTHING_USER` in
`src/lib/site.ts`.

## Design

The look is defined almost entirely by custom properties at the top of
`static/css/global.css` — colors, fonts, spacing, and measure. Retune it there
without touching any component. Dark mode follows the reader's system setting.

Type is Fraunces (display) and Inter (body), loaded from Google Fonts.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy-site.yml`, which builds and
publishes `build/` to the `gh-pages` branch. Pull requests build but don't
deploy.

`static/CNAME` holds the custom domain and is copied into the build, so the
domain survives every deploy.
