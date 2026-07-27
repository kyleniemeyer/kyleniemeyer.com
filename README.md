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

Also outstanding:

- **LibraryThing widget.** Sign in at <https://www.librarything.com/widget>,
  build a widget, and copy the `src` URL out of the snippet it gives you into
  `LIBRARYTHING_WIDGET_SRC` in `src/routes/books/+page.svelte`. Set
  `LIBRARYTHING_USER` in `src/lib/site.ts` too — it drives the fallback link
  shown when the widget is blocked or hasn't loaded.
- **Photos** for the books page and each project.

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

DNS lives at DreamHost: apex A records point at the GitHub Pages addresses
(185.199.108–111.153).
