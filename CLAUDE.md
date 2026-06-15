# fcarraustewart.github.io — Project Instructions

Personal tech blog of Felipe Carrau Stewart (firmware engineer), served at
`https://fcarraustewart.github.io`. It is a **Chirpy** Jekyll site **plus** a
separate Vite/React/Three.js app whose build artifact is embedded into the home
page. Two toolchains live in one repo — know which one you're touching.

## The two build systems (this is the thing to understand first)

1. **Jekyll site (Ruby/Bundler)** — the blog itself. The Chirpy theme is pulled
   from the **`jekyll-theme-chirpy` gem** (see `Gemfile`), NOT vendored. So most
   theme files (`_sass`, most of `_layouts`/`_includes`) are *not* in this repo;
   run `bundle info --path jekyll-theme-chirpy` to find them. Only overrides live
   here.

2. **`ui/` — Vite + React 19 + Three.js app.** Its own `package.json`,
   `node_modules`, ESLint, Vite config. `vite.config.js` builds
   `ui/src/main.jsx → ParticleVessel.jsx` and writes the bundle to
   **`../assets/three-app/particlevessel.js`** (forced stable filename). That
   committed bundle is what the live site loads — Jekyll never runs Vite.

The blog **consumes the UI build output as a committed static asset.** Editing
`ui/src/*` does nothing to the published site until you rebuild and commit
`assets/three-app/particlevessel.js`.

## ⚠️ Known-broken state (verified 2026-06-15 — fix before trusting CI)

Both pipelines have live failures from a clean checkout:

1. **`ui/` is NOT in `_config.yml`'s `exclude:` list.** Jekyll therefore copies
   the whole `ui/` tree — *including `node_modules/`* — into `_site/`, and the
   leftover Vite-starter `ui/index.html` (refs `/vite.svg`, `/src/main.jsx`)
   makes **htmlproofer fail with 2 errors**. CI runs the same htmlproofer, so the
   Pages deploy is red/bloated. **Fix:** add `ui` and `node_modules` to
   `exclude:` in `_config.yml`.

2. **`npm run build` fails from a clean install.** `ui/src/FilteredDataChart.jsx`
   imports **`recharts`**, which was never added to `ui/package.json` (confirmed
   via git history). The committed `particlevessel.js` was built with an ad-hoc
   local install. **Fix:** `cd ui && npm install recharts` (persists it to
   `package.json`).

3. **`npm run lint` has 4 pre-existing errors** (`__dirname` undefined in
   `vite.config.js`, unused vars, a constant-`??` in `ParticleVessel.jsx`).

Until #1 and #2 are fixed, `tools/test.sh` and `npm run build` will not pass.

## Common tasks

### Blog content / theme work (Jekyll)
```sh
bundle install            # first time
tools/run.sh              # bundle exec jekyll s -l  → http://127.0.0.1:4000
tools/run.sh -p           # production env (JEKYLL_ENV=production)
tools/test.sh             # production build + htmlproofer (mirrors CI)
```
Local Ruby is 3.4.x; **CI uses Ruby 3.3** (`.github/workflows/pages-deploy.yml`).
If a build passes locally but you suspect a version issue, that's the gap.

### Three.js / React app (`ui/`)
```sh
cd ui
npm install
npm run dev               # vite dev server — standalone, NOT the blog
npm run build             # → writes assets/three-app/particlevessel.js
npm run lint
```
**`emptyOutDir: true`** in `ui/vite.config.js` means `npm run build` **wipes
`assets/three-app/` first** — including `vite.svg`. Don't put anything precious
in that dir; it is a pure build-output sink. After building, commit the updated
`particlevessel.js` so the change reaches the site.

## How the Three.js app reaches the page (the embed path)

- `index.html` → `layout: home` → `_layouts/home.html` (a **local override** of
  the theme's home layout) which renders a `<div id="three-root">` and includes
  `_includes/custom-head.html`.
- `_includes/custom-head.html` adds **another** `#three-root` div and the
  `<script type="module" src="/assets/three-app/particlevessel.js">` tag.
- `particlevessel.js` calls `ReactDOM.createRoot(document.getElementById("three-root"))`.

Gotcha: there are currently **two `#three-root` divs** (one in the layout, one in
the include); `getElementById` binds to the first. If the canvas renders in the
wrong place or twice, that duplication is why — fix the markup, don't fight it in JS.

`ui/src/App.jsx` is the **leftover Vite starter template** (Vite+React logo demo)
and is NOT in the render path. The real entry is `main.jsx → ParticleVessel`.
Don't mistake `App.jsx` for the app.

## Web Bluetooth ↔ firmware link

`ui/src/useBLE.js` uses the Web Bluetooth API to connect to devices with name
prefix **`"M0"`** — i.e. the **M0X firmware board** (`~/mentalista/M0X`, the
nRF5340 project). The particle vessel can be driven by live HRM/BLE data from
that board. Web Bluetooth requires a secure context (https or localhost) and a
user gesture; it won't work over plain `http://0.0.0.0`.

## Deployment

Push to `main` (or `master`) → GitHub Actions
(`.github/workflows/pages-deploy.yml`) builds with Jekyll, runs htmlproofer
(`--disable-external`), and deploys to GitHub Pages. **There is no Vite step in
CI** — it serves the committed `assets/three-app/` bundle as-is. Paths in
`.gitignore`, `README.md`, `LICENSE` are ignored by the workflow trigger.

`tools/test.sh` reproduces the CI build+proof locally; run it before pushing if
you changed links, images, or front matter.

## Authoring posts

Posts live in `_posts/YYYY/` named `YYYY-MM-DD-slug.md`. Front matter convention
(see existing posts):
```yaml
---
title: "..."
date: 2024-11-26 08:00:00 - 0000
categories: [Firmware]          # Chirpy: max 2, first is parent
tags: [C, C++, Zephyr]          # lowercase-ish, free-form
image:
    path: /assets/img/headers/<name>.webp
    lqip: data:image/webp;base64,...   # low-quality placeholder, base64 inline
pin: false
description: ...
---
```
Images are **`.webp` with an inline base64 LQIP** placeholder. `_config.yml`
permalinks: posts → `/posts/:title/`, tabs → `/:title/`. Tabs (nav pages) are in
`_tabs/` with an `order:` field.

## Branches

- `main` — published site.
- `chirpy` — pristine theme/starter baseline (upstream sync reference). Don't
  develop features there; treat it as the clean-room copy to diff against when
  isolating "did I break it, or did the theme."

## Don't

- Don't edit files under `assets/three-app/` by hand — regenerate via `npm run build`.
- Don't hand-edit `assets/lib/` — it's the `chirpy-static-assets` git submodule
  (`.gitmodules`).
- Don't commit `_site/`, `vendor/`, `.jekyll-cache/`, `Gemfile.lock`, or
  `ui/node_modules/` (all gitignored).
- Don't expect `ui/` changes to appear on the site without rebuilding **and**
  committing the bundle.
