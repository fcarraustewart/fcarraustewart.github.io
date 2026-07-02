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

## ⚠️ The #1 footgun: gem version drift breaks CI silently

**`Gemfile.lock` is gitignored.** So GitHub Actions resolves the *newest* gem
matching `Gemfile` (`jekyll-theme-chirpy "~> 7.1"`) on **every** run. Your local
build and CI can therefore run **different theme versions** — a green local build
proves nothing about CI. (Real incident, 2026-06-15: local was 7.3.1, CI floated
to 7.5.0.)

This bites hardest with **stale vendored theme files**. The Chirpy *starter* is
only meant to vendor `_config.yml`, `_plugins`, `_tabs`, and `index.html`. This
repo had also vendored **`assets/feed.xml`** (from "Chirpy init"), which
hard-coded `{% include post-description.html %}`. Chirpy 7.5.0 removed that
include, so the vendored file referenced something the gem no longer ships and
**the production build died** (`Could not locate the included file
'post-description.html'`). The theme already ships its own version-matched
`feed.xml`, so the override was redundant — it was **deleted** (commit removing
`assets/feed.xml`). The fix is durable: with no override, whatever gem version CI
resolves provides a matching feed.

**Rules that follow from this:**
- **Do NOT vendor theme partials/assets** (`feed.xml`, `_includes/*` that the gem
  owns, layouts, JS) unless you intend to maintain them across theme upgrades.
  Every vendored theme file is a future version-drift landmine.
- **To truly reproduce CI before pushing**, match its gem version:
  `bundle update jekyll-theme-chirpy && tools/test.sh`. `Gemfile.lock` is
  gitignored, so this only changes your local resolution.
- **Recommended hardening (not yet done):** un-ignore and commit `Gemfile.lock`
  so local and CI pin the exact same gem set; upgrade the theme deliberately via
  `bundle update`. Until then, CI can break with zero content changes whenever a
  new Chirpy release lands.

## Known rough edges (not blocking, verified 2026-06-16)

- **`npm run lint` (`ui/`) reports ~4 errors** (`__dirname` undefined in
  `vite.config.js`, unused vars, a constant-`??` in `ParticleVessel.jsx`). Lint is
  not part of CI, so this doesn't gate deploys — but don't expect a clean lint.
- **`browserconfig.xml` references `mstile-150x150.png`, which doesn't exist.**
  Harmless: Chirpy 7.5.0's `favicons.html` no longer loads `browserconfig.xml`,
  so nothing requests the missing tile.
- The earlier `ui/`-leaks-into-`_site` htmlproofer failure and the missing-
  `recharts` build failure were **both fixed upstream** (`ui/index.html`,
  `ui/src/`, `ui/vite.svg` are now in `_config.yml` `exclude:`; `recharts` is now
  a declared dependency).

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

## Concerts radar (`concerts/`) — real (non-mock) runs are slow, this is expected

`concerts/src/main.js` (the Paris Concert Radar scanner, see `concerts/PROMPT.md`
and `concerts/SETUP.md`) fetches per-artist, per-source, **sequentially**, with a
250ms sleep between calls to respect Ticketmaster's 5 req/s limit. Each artist
costs up to 2 Ticketmaster calls (attraction lookup + events) plus 1 Bandsintown
call. For a real Spotify library (`listArtists()` merges followed ∪ top — a
power-user account can easily return 400+ artists), that's 1000+ sequential
calls: **a real `npm run scan:dry` / `npm run scan` can take 5-15 minutes.** This
is not a hang — `ps aux | grep "node src/main.js"` will show the process alive
with low but nonzero CPU time (mostly sleeping, not spinning).

- Env vars must be **exported** to reach the child `node` process — a bare
  `SPOTIFY_CLIENT_ID=xxx` on its own line sets a shell variable, not an exported
  one, and the next command (`npm run scan:dry`) won't see it. Either `export`
  each var, or prefix them inline on the same command line as `npm run`.
- For fast iteration while developing, use `CONCERTS_MOCK=1 npm run scan:dry`
  (fixture-backed fetch, no network, completes instantly) instead of hitting the
  real APIs. Only run a real (non-mock) scan occasionally to sanity-check
  against live data — every real run also burns Ticketmaster's 5000/day quota.

### Repo secrets the daily cron needs

`concerts-scan.yml` reads these as **repository** secrets (not personal-account
secrets, not org secrets) — add them at
**Settings → Secrets and variables → Actions → Repository secrets → New
repository secret** (repo-level, works the same on a public repo: Actions
secrets are always encrypted, never shown again after saving, and masked out of
logs). The workflow no-ops with a clear log line if the three required ones are
unset, so adding them is safe/reversible — no partial-config failure mode.

| Secret | Required? | Where it comes from |
|---|---|---|
| `SPOTIFY_CLIENT_ID` | **required** | developer.spotify.com app dashboard (public PKCE client, no secret) |
| `SPOTIFY_REFRESH_TOKEN` | **required** | printed once by `SPOTIFY_CLIENT_ID=... npm run auth` (local PKCE bootstrap, `concerts/scripts/auth_bootstrap.mjs`) |
| `TICKETMASTER_API_KEY` | **required** | Consumer Key from a free app at developer.ticketmaster.com |
| `BANDSINTOWN_APP_ID` | recommended | any string, no signup (e.g. `radar`) |
| `RESEND_API_KEY` | needed for email | resend.com free API key |
| `ALERT_EMAIL` | needed for email | `philstewart0@gmail.com` — **never** `hello@mentalista.com` |
| `ALERT_FROM` | optional | only if a custom Resend from-domain is verified; otherwise defaults to `onboarding@resend.dev` |
| `SONGKICK_API_KEY` | optional | approval-gated; source cleanly no-ops without it |

Full step-by-step for obtaining each value is in `concerts/SETUP.md`. After
adding the three required secrets, trigger a real end-to-end test without
waiting for the daily 06:00 UTC cron: **Actions tab → "Concerts: daily scan" →
Run workflow** (dropdown lets you pick the branch).

## Deployment

Push to `main` (or `master`) → GitHub Actions
(`.github/workflows/pages-deploy.yml`) builds with Jekyll, runs htmlproofer
(`--disable-external`), and deploys to GitHub Pages. **There is no Vite step in
CI** — it serves the committed `assets/three-app/` bundle as-is. Paths in
`.gitignore`, `README.md`, `LICENSE` are ignored by the workflow trigger.

`tools/test.sh` reproduces the CI build+proof locally; run it before pushing if
you changed links, images, or front matter. (But see the gem-drift warning above:
to match CI exactly, `bundle update jekyll-theme-chirpy` first.)

**Git identity:** `origin` is set to the SSH alias
`git@github-personal:fcarraustewart/fcarraustewart.github.io.git` (key
`~/.ssh/id_ed25519_personal`, defined in `~/.ssh/config`), so pushes use the
personal GitHub identity rather than the default `github.com` key.

## Favicons / site icons (the browser-tab mini-icon)

All site icons live in **`assets/img/favicons/`** and are set to the owner's
**profile picture** (the GitHub avatar from `_config.yml`'s `avatar:` field).
Chirpy 7.5.0's `_includes/favicons.html` (in the gem) loads exactly these:

| File | Used for |
|------|----------|
| `favicon-96x96.png` | **the browser-tab mini-icon** (`rel="icon"` 96×96) |
| `favicon.svg`       | vector-capable browsers (`rel="icon"` svg) |
| `favicon.ico`       | legacy `rel="shortcut icon"` (multi-res 48/32/16) |
| `apple-touch-icon.png` (180×180) | iOS home-screen |
| `site.webmanifest` → `web-app-manifest-192x192.png`, `-512x512.png` | PWA install icons |

`browserconfig.xml` / `mstile-150x150.png` are **not** loaded by 7.5.0 — ignore them.

**Regenerate the whole set from a source image** (needs ImageMagick `magick`):
```sh
cd assets/img/favicons
curl -sL "https://avatars.githubusercontent.com/u/39782345?s=512&v=4" -o /tmp/p.png
magick /tmp/p.png -resize 512x512^ -gravity center -extent 512x512 -strip /tmp/b.png
magick /tmp/b.png -resize 96x96   -strip favicon-96x96.png
magick /tmp/b.png -resize 180x180 -strip apple-touch-icon.png
magick /tmp/b.png -resize 192x192 -strip web-app-manifest-192x192.png
cp /tmp/b.png web-app-manifest-512x512.png
magick /tmp/b.png -define icon:auto-resize=48,32,16 favicon.ico
# favicon.svg = a data-URI PNG wrapper (NOT a true vector). Keep it small:
magick /tmp/b.png -resize 256x256 -strip /tmp/i.png
printf '%s' "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"256\" height=\"256\" viewBox=\"0 0 256 256\"><image width=\"256\" height=\"256\" href=\"data:image/png;base64,$(base64 -i /tmp/i.png | tr -d '\n')\"/></svg>" > favicon.svg
```
Gotchas baked into this:
- **`favicon.svg` is a raster wrapped in SVG**, not a true vector. Keep the
  embedded PNG ≤256 px — a previous version was a **12 MB** SVG. SVG-preferring
  browsers use this, so update it whenever you change the icon or they'll show the
  *old* one.
- **`site.webmanifest` is a Liquid-processed file** (has `layout: compress` front
  matter). It must reference the icon filenames that actually exist
  (`web-app-manifest-*.png`). It previously pointed at `android-chrome-*.png`
  (a different generator's naming) that were never present → broken PWA icons.
  Keep manifest filenames and the files on disk in sync.

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

Posts are **not all tech**: categories/tags are free-form, so non-tech posts are
fine (e.g. `categories: [Wine]`, `tags: [winemaking, dataviz, ui-ux]`). A new
category/tag needs no registration — the Binacle generator and Chirpy's tag/category
pages are created on the next build (a `Wine` hub + `winemaking` page just appeared
that way). The header image is **optional** (the VexRiscv post has none).

### Embedding an interactive widget in a post (the proven pattern)

To drop a *fully interactive* JS/React thing into a post (done for the red-wine
taste map, `_posts/2026/2026-06-18-the-taste-space-of-red-wine.md`):

1. **Self-contained widget → `assets/widgets/<name>.html`.** Inline *everything*
   (React + ReactDOM UMD + the transpiled component) into one HTML file with **no
   external `<script src>`**. Reasons: htmlproofer runs `--disable-external` so it
   won't catch a broken CDN, and a CDN dep isn't PWA-cached/offline-robust. A
   ~150 KB self-contained file is the right tradeoff.
2. **It's served as-is.** A `.html` in `assets/` with **no YAML front matter** is
   copied verbatim by Jekyll (static file) — no `_config.yml` change needed. Confirm
   it lands at `_site/assets/widgets/<name>.html` after a build.
3. **Embed via `<iframe>`, not inline HTML.** kramdown will mangle raw inline
   markup and the widget's dark CSS would collide with the theme; an iframe isolates
   both. Markdown allows the raw `<iframe>` block:
   ```html
   <iframe src="/assets/widgets/<name>.html" loading="lazy"
     style="width:100%; max-width:560px; height:1000px; border:0; margin:1rem auto; display:block;"></iframe>
   ```
   The iframe height is **fixed** — set it to the widget's content height. The
   red-wine widget's inner React sets `minHeight:100vh`; the host HTML overrides it
   to `auto` so it sizes to content inside the frame.

**Transpiling a Claude artifact (JSX) to a runnable widget** — artifacts are JSX
React components, not plain HTML. To get one: pull the `/public/artifacts/<id>`
page with `curl` + a normal User-Agent (the `/share/` page is behind Cloudflare and
blocks headless/scripted clients), then extract the component source from the
Next.js `self.__next_f.push([1,"…import { useState }…"])` chunk (JSON-string-escaped;
`json.loads('"'+raw+'"')` to unescape). Then strip `import`/`export default`,
prepend `const {useState}=React;`, append a `ReactDOM.createRoot(...).render(...)`,
and transpile with **classic** JSX so it calls the global `React`:
```sh
npx --yes esbuild entry.jsx --loader:.jsx=jsx --jsx=transform --outfile=entry.js
```

### Header image rendered from a widget

The red-wine header (`assets/img/headers/wine-taste-space.webp`) was generated from
the widget itself, not a separate asset — handy when the post *is* the visual:
```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --force-device-scale-factor=2 --window-size=600,620 --virtual-time-budget=6000 \
  --screenshot=/tmp/shot.png "file://$PWD/assets/widgets/<name>.html"
magick /tmp/shot.png -crop 1200x1095+0+0 +repage -resize 1160x600 \
  -background "#0e0b07" -gravity center -extent 1200x630 -strip assets/img/headers/<name>.webp
# inline LQIP: tiny webp → base64 data-URI for the post front matter
magick assets/img/headers/<name>.webp -resize 20x -quality 30 /tmp/lqip.webp
printf 'data:image/webp;base64,%s\n' "$(base64 -i /tmp/lqip.webp | tr -d '\n')"
```
(`cat`-ing a `data:image/...` URI into a terminal may render it as an image instead
of text — read it from the file or inject it into front matter via a script.)

## Binacle: tech-stack graph + Obsidian sync

Two cooperating pieces let you author in Obsidian and navigate posts as a graph.

### The `/binacle/` graph landing page

A force-directed graph (Obsidian-style) for navigating **tech stacks → dev
blogs**. Nodes: posts (purple, click to open), categories (red hubs), tags
(blue stacks). It **auto-grows** — tag a new post and it appears; no manual
upkeep. Pieces:

| File | Role |
|------|------|
| `_plugins/binacle-graph.rb` | Jekyll **generator** — at build time, walks `site.posts` and builds `{nodes, links}` from each post's `categories:`/`tags:`. Exposes `site.data.binacle_graph`. Logs `Binacle: graph built (N nodes, M edges)`. |
| `binacle/graph-data.json` | One-line Liquid file: `{{ site.data.binacle_graph \| jsonify }}` → served at `/binacle/graph-data.json`. |
| `binacle/graph.js` | Vanilla renderer (no bundler). Fetches the JSON, draws with the `ForceGraph` UMD global, post-click navigates, hub-click focuses a neighbourhood. |
| `_tabs/binacle.html` | The nav tab (`order: 5`, compass icon) at `/binacle/`. Loads `force-graph` from CDN + `binacle/graph.js`. |

Why this split: **custom `_plugins` DO run here** because CI builds via GitHub
*Actions* (`bundle exec jekyll b`), not the legacy Pages gem sandbox — confirmed
by the pre-existing `_plugins/posts-lastmod-hook.rb`. The page is a Chirpy *tab*
(in `_tabs/`) because the sidebar nav only iterates `site.tabs`; a page in the
`binacle/` source folder alone would not appear in nav and would collide on the
`/binacle/` permalink. So: **page = `_tabs/binacle.html`; data + renderer live in
the `binacle/` folder.**

`force-graph` is loaded from **CDN** (external → htmlproofer `--disable-external`
ignores it; not PWA-cached). To make it offline-robust, vendor the UMD build into
`binacle/` and point the `<script>` at it.

### Obsidian → posts (`tools/obsidian-sync.rb`)

Authoring stays in Obsidian (`~/Documents/Obsidian Vault`, override with
`VAULT=`); this script converts opted-in notes into Chirpy posts. **Opt in with
`publish: true`** in a note's YAML front matter. It then:

- maps front matter (`title`, `date`→file mtime fallback, `categories`, `tags`,
  `description`, `pin`, `image`, …) into Jekyll post front matter;
- rewrites `[[Target|Alias]]` → `[Alias](/posts/<slug>/)` **if** Target is also a
  published note, else to plain text; `![[img.png]]` → a copied image under
  `assets/img/obsidian/`;
- writes `_posts/<year>/<date>-<slug>.md`, stamping `obsidian_source:` so re-runs
  overwrite cleanly and **only managed posts are ever touched** (hand-written
  posts without that key are never modified).

```sh
tools/obsidian-sync.rb --dry-run     # preview, write nothing
tools/obsidian-sync.rb               # sync vault -> _posts/
tools/obsidian-sync.rb --prune       # also delete managed posts whose note is gone/unpublished
VAULT="/other/vault" tools/obsidian-sync.rb
```

Workflow: edit notes in Obsidian → `tools/obsidian-sync.rb` → `tools/run.sh` to
preview → commit the generated posts. The graph picks them up automatically on
the next build. The vault itself is **not** a git submodule and is not synced
back; only the published posts live in this repo.

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
