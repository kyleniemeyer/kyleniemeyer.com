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

Each project is a folder under `src/routes/making/`. The folder name becomes the
URL, and the index page picks up new folders automatically — there's no list to
update anywhere.

1. Copy `src/routes/making/example-project/` to
   `src/routes/making/your-project-name/`.
2. Edit `meta.ts` — title, year, one-sentence blurb, cover image, tags. This
   drives the card on the index page.
3. Put photos in `static/images/making/your-project-name/`.
4. Write the page in `+page.svelte`: ordinary paragraphs, plus the photo list at
   the top of the file for the gallery. Every photo needs `alt` text.

Set `draft: true` in `meta.ts` to build a page but keep it off the index.

Delete `example-project` once you have real projects in place.

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
