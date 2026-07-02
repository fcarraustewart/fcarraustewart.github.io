# Build: "Paris Concert Radar" — Spotify-artist gig alerts, on my Jekyll site + a GitHub Actions cron

> This file is the operator manual for an autonomous Claude Code session. Launch a
> `claude` session **from the repo root** (`~/fcarraustewart.github.io`) and feed it
> this prompt. Decisions already locked in: **single-user (just me), GitHub Actions
> cron backend, email-first** notifications.

You are an autonomous Claude Code session working in `~/fcarraustewart.github.io`
(my personal Chirpy/Jekyll site). Build a single-user system that emails me when
artists I follow/top on Spotify announce concerts in Paris, and shows the current
Paris lineup as a page on the site.

## STEP 0 — Orient before touching anything
1. Read `CLAUDE.md` in this repo IN FULL. It is authoritative. In particular obey:
   - The **gem-drift footgun**: `Gemfile.lock` is gitignored; CI floats the Chirpy
     gem. Don't vendor theme partials. Before claiming the site builds, run
     `tools/test.sh` (prod build + htmlproofer, mirrors CI).
   - htmlproofer runs `--disable-external` ⇒ **no external `<script src>`** in any
     page I ship; widgets must be self-contained (the Binacle/red-wine pattern).
   - The **`_data` + `_tabs` pattern** (Binacle): a generator/data file exposes
     `site.data.*`, a `_tabs/*.html` page renders it. Reuse this exactly.
   - Git identity: `origin` is the SSH alias `git@github-personal:...`. `gh` cannot
     infer the repo from the alias — every `gh` call needs
     `--repo fcarraustewart/fcarraustewart.github.io` (or `export GH_REPO=...`).
   - Don't commit `_site/`, `vendor/`, `.jekyll-cache/`, `Gemfile.lock`, `node_modules`.
2. Work on a branch `feat/concerts-radar` (this prompt is committed there already).
   NEVER push to `main`. When green, push the branch and open a PR with
   `gh ... --repo fcarraustewart/fcarraustewart.github.io`. I merge. (Do NOT touch
   `.github/workflows/pages-deploy.yml`.)

## Hard truths you must design around (do not fight these)
- **GitHub Pages is static.** The site cannot run a scanner, hold secrets, or send
  email. The site is the *frontend only*; all scanning/notifying lives in a Node
  job run by GitHub Actions cron in THIS repo under `concerts/`.
- **Spotify has NO public concerts/events API.** You can only read my *artists*:
  `GET /v1/me/following?type=artist` and `GET /v1/me/top/artists`. Do not attempt to
  "scan Spotify events" — it doesn't exist as an API.
- **Event sources, in priority order (build behind a common `Source` interface so
  sources are pluggable and individually skippable):**
  1. **Ticketmaster Discovery API v2** (free key, primary). Resolve each artist to an
     `attractionId` via `/discovery/v2/attractions.json?keyword=`, then
     `/discovery/v2/events.json?attractionId=...&city=Paris&countryCode=FR&classificationName=music`.
     Respect 5 req/s, 5000/day.
  2. **Bandsintown** (free `app_id`, secondary): `GET https://rest.bandsintown.com/artists/{name}/events?app_id=...`,
     keep events where `venue.city == "Paris"`.
  3. **Songkick** (OPTIONAL, only if `SONGKICK_API_KEY` secret is present — key is
     approval-gated): artist calendar + Paris metro `28909`. If no key, skip cleanly.
  4. **DICE**: NO public API. Do NOT scrape it. Leave a `// TODO: DICE has no public
     API` stub behind the `Source` interface and move on.
- **Refresh tokens / API keys cannot be minted by you.** They require a one-time human
  OAuth + dashboard signups. Build everything around them with fixtures/mocks, and
  emit a `SETUP.md` + `@needs-human` checklist (see "Human-only setup"). Do not block.

## Architecture to build
```
fcarraustewart.github.io/
├── _tabs/concerts.html            ← NEW nav tab "Concerts" (order: 6, music icon).
│                                     Renders site.data.concerts server-side (Liquid).
│                                     Optional progressive-enhancement JS for
│                                     client-side filter (self-contained, inline).
├── _data/concerts.json            ← Machine-written by the cron: current upcoming
│                                     Paris shows for my artists, sorted by date.
├── concerts/                      ← The scanner (separate Node toolchain; excluded
│   │                                from Jekyll build via _config.yml `exclude:`).
│   ├── package.json               ← type:module, deps: undici(or native fetch),
│   │                                vitest. Scripts: test, scan, scan:dry, auth.
│   ├── src/
│   │   ├── spotify.js             ← getAccessToken(refreshToken) [PKCE public client,
│   │   │                            client_id only], listArtists() → {id,name}[]
│   │   ├── sources/
│   │   │   ├── source.js          ← interface: fetchEventsForArtist(artist) → RawEvent[]
│   │   │   ├── ticketmaster.js
│   │   │   ├── bandsintown.js
│   │   │   └── songkick.js        ← no-op if key absent
│   │   ├── normalize.js           ← RawEvent → canonical Event
│   │   │                            {artist, date(ISO), venue, city, url, source, key}
│   │   ├── dedupe.js              ← cross-source merge (artist+date+venue fuzzy key)
│   │   ├── match.js              ← keep events whose artist ∈ my Spotify set
│   │   ├── diff.js              ← new = canonical \ seen(state/seen.json)
│   │   ├── email.js              ← render HTML digest; send via Resend API
│   │   ├── render.js            ← write _data/concerts.json (full upcoming list)
│   │   └── main.js              ← orchestrate; supports --dry-run (no email, no write)
│   ├── state/seen.json           ← committed; first-seen ledger keyed by canonical key
│   ├── scripts/auth_bootstrap.mjs ← LOCAL one-time PKCE flow → prints refresh token
│   ├── tests/
│   │   ├── fixtures/             ← saved real-ish JSON for each source + spotify
│   │   └── *.test.js            ← vitest unit tests (NO network)
│   └── SETUP.md                  ← the human-only checklist (below)
└── .github/workflows/
    ├── concerts-scan.yml         ← schedule: cron daily 08:00 Europe/Paris +
    │                               workflow_dispatch. Runs scan with secrets,
    │                               commits _data/concerts.json + state/seen.json
    │                               to main. Gated: skip with a clear log if
    │                               required secrets are unset.
    └── concerts-test.yml         ← on PR/push touching concerts/**: npm ci + npm test
                                    (NO secrets needed — pure logic gate).
```
Also: add `concerts/node_modules` to `.gitignore`; add `concerts` and
`concerts/node_modules` to `_config.yml` `exclude:` so Jekyll never tries to build it
(verify nothing from `concerts/` leaks into `_site/` — that previously broke htmlproofer).

## Methodology — TEST-DRIVEN, in this order
For every pure module (`normalize`, `dedupe`, `match`, `diff`, `email` render,
`render` json): **write the vitest test first against a saved fixture, watch it fail,
then implement until green.** Network code (`spotify`, each `source`) is tested by
injecting a `fetch`-shaped mock that returns fixtures — never hit the real network in
unit tests. Capture 1–2 real-ish fixtures per source by hand-writing trimmed sample
JSON from each API's public docs (don't invent fields; match documented shapes).

Definition of Done (all must hold; paste evidence into the PR):
- [ ] `cd concerts && npm test` — all green, no network. Cover: empty artist list,
      artist with 0 Paris events, same event from 2 sources deduped to 1, an event
      already in `seen.json` not re-notified, a brand-new event flagged + emailed,
      malformed/missing fields in a source payload don't crash the run (source isolated:
      one source throwing still lets others produce results).
- [ ] `node src/main.js --dry-run` runs end-to-end on **mock** data (env flag forces
      the fetch mock) and prints the digest + the `_data/concerts.json` it *would* write.
- [ ] `tools/test.sh` passes (Jekyll prod build + htmlproofer) with the new tab and a
      committed sample `_data/concerts.json`; the Concerts tab renders the sample shows
      server-side and appears in the sidebar nav. No external `<script src>`.
- [ ] `concerts-test.yml` is green on the PR.
- [ ] `concerts-scan.yml` exists, is `workflow_dispatch`-able, and **no-ops with a
      clear log** when `SPOTIFY_REFRESH_TOKEN` / `TICKETMASTER_API_KEY` / `RESEND_API_KEY`
      are unset (so it can't fail the repo before I add secrets).
- [ ] `concerts/SETUP.md` written; PR description repeats the `@needs-human` steps.

## Human-only setup (you CANNOT do this — document it, tag `@needs-human`, don't block)
Write these as `concerts/SETUP.md` and as the PR's "Before this works" section:
1. **Spotify**: create an app at developer.spotify.com, scopes `user-follow-read
   user-top-read`, redirect URI `http://127.0.0.1:8888/callback`. Run
   `node concerts/scripts/auth_bootstrap.mjs` locally once → it opens the browser,
   completes PKCE, prints `SPOTIFY_CLIENT_ID` + `SPOTIFY_REFRESH_TOKEN`.
2. **Ticketmaster**: register a free Discovery API key.
3. **Bandsintown**: pick any `app_id` string (free, no signup needed beyond that).
4. **Resend** (or Mailgun): free API key + a verified from-address; set `ALERT_EMAIL`
   as a GitHub repo secret (not hardcoded anywhere in this repo).
5. Add all of the above as **GitHub repo secrets**; optionally `SONGKICK_API_KEY`.
6. Merge the PR. The daily cron then scans and emails; the site shows the lineup.

## Constraints / Don't
- Don't push to `main`; don't merge your own PR; don't edit `pages-deploy.yml`.
- Don't scrape DICE or Spotify event pages. Don't store secrets in code or fixtures.
- Don't add an external CDN `<script src>` to any shipped page.
- Don't let the scanner crash the whole run because one source/artist failed — isolate
  and continue; log what was skipped (no silent truncation).
- Keep the Concerts tab readable with JavaScript disabled (Liquid renders the data).
- Convert all event times to Europe/Paris; sort ascending; show artist, date, venue, a
  "tickets" link, and which source found it.

Start by reading `CLAUDE.md`, then propose a short build plan (file list + test list)
before writing code. Then execute it TDD, module by module, ending at the DoD checklist.
