# Building a new demo widget — generic guide

Reference doc for adding another interactive item to `/demos/`, generalized
from how the **Paris Concert Radar** (`concerts/`, see `concerts/PROMPT.md`
for the original build log) and the **BLE heart-rate widget**
(`_includes/three-widget3.html` + `ui/`) actually shipped. Read this before
starting a new one; hand `PROMPT_TEMPLATE.md` in this folder to a fresh Claude
Code session to execute it.

**Correction vs. `concerts/PROMPT.md`:** that file's original architecture
sketch proposed a dedicated `_tabs/concerts.html` nav tab. What actually
shipped is simpler and is now the standard: **one `_tabs/demos.md`... actually
`_posts/2025/2025-09-02-demos.md` (page, permalink `/demos/`) with one
`{% include <name>-widget.html %}` section per demo.** Don't create a new tab
per widget — add a section to the existing Demos page instead.

## Step 0 — pick the pattern

Three proven shapes exist in this repo. Pick the lightest one that fits;
don't reach for Pattern C unless the widget genuinely needs external data or
to contact you outside the browser session.

| Pattern | Example | Use when | Backend |
|---|---|---|---|
| **A — self-contained static widget** | `assets/widgets/wine-taste-diagram.html` | Pure client-side interactivity (React/D3/canvas), no live data, no secrets | None — one inlined HTML file |
| **B — live device/sensor widget** | `_includes/three-widget3.html` + `ui/` (Web Bluetooth HRM → Three.js) | Needs a browser API (Web Bluetooth, WebGL, mic/camera) with a user gesture in a secure context | None — runs entirely client-side at view time |
| **C — external API + GitHub Actions cron** | `concerts/` | Needs to poll an external API/service on a schedule and/or notify you (email) outside of a page view | Node job under a top-level module dir, triggered by `.github/workflows/*.yml`, writes `_data/<name>.json` |

This guide focuses on **Pattern C** (the concerts case — "interacts with me,
GitHub Actions and stuff") since it's the most involved; A and B are called
out inline where they diverge.

## Step 1 — orient (same for all patterns)

1. Read `CLAUDE.md` in full. Non-negotiables that bite hardest:
   - `Gemfile.lock` is gitignored → CI floats the newest Chirpy gem. Run
     `tools/test.sh` before claiming the site builds; don't vendor theme
     partials.
   - htmlproofer runs `--disable-external` → **no external `<script src>`**
     in anything shipped. Pattern A/C widgets must be self-contained or pure
     Liquid; Pattern B may load its own committed bundle
     (`assets/three-app/...`) but not a CDN.
   - Git identity: `origin` is the `github-personal` SSH alias. Every `gh`
     call needs `--repo fcarraustewart/fcarraustewart.github.io`.
   - Never touch `.github/workflows/pages-deploy.yml`.
2. Work on a branch (`feat/<name>-widget`), never push straight to `main`.
   Open a PR when green; the user merges.

## Step 2 — scaffold (Pattern C)

Run the scaffold script instead of hand-creating files:

```sh
tools/new-demo-widget.sh <name> [--cron]
```

`--cron` also generates the secret-gated scan workflow; omit it for a widget
that only needs a test-only CI gate (e.g. it's triggered manually or writes
data another way). It creates:

```
<name>/
├── package.json          # type: module, vitest, scripts: test / scan / scan:dry
├── src/
│   └── main.js            # orchestrator stub, supports --dry-run
├── tests/
│   └── fixtures/           # saved sample payloads, no live network in tests
├── state/                  # committed ledger dir (e.g. seen.json), if the
│                            # widget needs to dedupe/diff across runs
└── SETUP.md                # @needs-human checklist template
.github/workflows/
├── <name>-test.yml          # unconditional: npm ci && npm test (+ mock dry-run)
└── <name>-scan.yml          # only if --cron: secret-gated, no-ops cleanly if unset
```

After running it, the script prints the remaining manual steps (below) —
it does not touch `_config.yml`, `.gitignore`, or the Demos page, since those
edits are small and easy to get wrong via sed.

## Step 3 — methodology: TDD, source isolation, dry-run

Same order that worked for `concerts/`:

1. For every pure module (normalize/dedupe/match/diff/render), **write the
   vitest test first against a saved fixture**, watch it fail, implement
   until green.
2. Network code is tested with an injected `fetch`-shaped mock returning
   fixtures — never hit the real network in `npm test`.
3. If the widget pulls from more than one source, isolate them behind a
   common interface (`src/sources/source.js` in `concerts/` is the model) so
   one source throwing doesn't kill the run — log what was skipped, don't
   silently drop it.
4. `src/main.js` supports `--dry-run` (no write, no notify, just prints what
   it would do) and a `<NAME>_MOCK=1` env flag that forces fixture-backed
   fetches for a fast, network-free end-to-end smoke test. `concerts/` sets
   the precedent: `CONCERTS_MOCK=1 npm run scan:dry` runs instantly;
   a real (non-mock) run against live APIs is expected to take minutes, not
   a hang — don't "fix" that by adding timeouts/retries that weren't asked
   for.

## Step 4 — GitHub Actions

Two workflows, not one:

- **`<name>-test.yml`** — runs on push/PR touching `<name>/**`. No secrets,
  no network: `npm ci && npm test`, plus the mock dry-run as an extra smoke
  check. This is the CI gate for the PR.
- **`<name>-scan.yml`** (only if the widget runs on a schedule / needs
  secrets) — `schedule:` cron + `workflow_dispatch`. Gate the entire job
  behind a `HAS_SECRETS` env check computed from `secrets.X != ''` for every
  *required* secret, and make the "secrets missing" case an
  `::notice::`-logged no-op, never a failure — this lets the PR merge before
  any human sets up credentials. On success, commit `_data/<name>.json` (and
  any `state/` ledger) back to `main` with a bot identity, using
  `git diff --cached --quiet` to skip the commit if nothing changed.

Copy `.github/workflows/concerts-scan.yml` and `.github/workflows/concerts-test.yml`
as the templates; `tools/new-demo-widget.sh` does this substitution for you.

## Step 5 — Jekyll integration

1. `_data/<name>.json` — machine-written by the cron (or, for Pattern A/B,
   this step doesn't exist).
2. `_includes/<name>-widget.html` — pure Liquid rendering of
   `site.data.<name>`, readable with JavaScript disabled. Any interactivity
   (client-side filter, etc.) is a small inline `<script>` appended after the
   server-rendered markup, same as `_includes/concerts-widget.html`. Handle
   the empty/no-data case explicitly (don't let `site.data.<name>` being nil
   render a broken table).
3. Add one section to `_posts/2025/2025-09-02-demos.md`:
   ```markdown
   ## <Widget title>

   <one paragraph: what it does, what powers it>

   {% include <name>-widget.html %}
   ```
   Append the widget's stack to that post's `tags:` front matter (free-form,
   no registration needed — same as any Chirpy tag/category).
4. `_config.yml` → add `<name>/` to the top-level `exclude:` list so Jekyll
   never tries to build the Node module directory into `_site/`. Verify with
   `tools/test.sh` that nothing from `<name>/` leaks into the built site.
5. If `<name>/package-lock.json` needs to be committed for reproducible
   `npm ci` in CI (it does, if there's a scan workflow), add the same
   `.gitignore` exception `concerts/package-lock.json` already has:
   ```
   !<name>/package-lock.json
   ```

### Pattern A/B differences

- **Pattern A**: no `_data`, no workflows. Build the self-contained
  `assets/widgets/<name>.html` (inline React/D3 + component, no external
  `<script src>`), confirm it lands at `_site/assets/widgets/<name>.html`
  after a build, then embed with an `<iframe src="/assets/widgets/<name>.html">`
  at a **fixed height** matching the widget's content — not a Jekyll
  `_includes` partial (kramdown mangles inline widget markup; the iframe
  isolates CSS).
- **Pattern B**: build in `ui/` (if it needs React/Three.js) and commit the
  Vite build output, or write a small standalone module loaded from
  `_includes/<name>-widget.html` if it's simple enough not to need a bundler.
  Web Bluetooth/getUserMedia require a secure context + user gesture — this
  cannot be faked in `tools/test.sh`; note in the PR that browser testing was
  manual.

## Step 6 — human-only setup (`@needs-human`)

If the widget needs any API key/OAuth token you (the agent) cannot mint,
write `<name>/SETUP.md` listing each credential, where to get it, and which
GitHub **repository** secret it becomes (Settings → Secrets and variables →
Actions → Repository secrets). Never hardcode a real email address, API key,
or webhook URL anywhere in code, fixtures, or docs — reference the secret
name only. Repeat the checklist in the PR description.

## Definition of Done (paste evidence into the PR)

- [ ] `cd <name> && npm test` — all green, no network.
- [ ] `<NAME>_MOCK=1 node src/main.js --dry-run` runs end-to-end on fixtures.
- [ ] `tools/test.sh` passes (prod build + htmlproofer) with the new section
      on `/demos/` rendering a committed sample `_data/<name>.json`, and
      **nothing from `<name>/` leaks into `_site/`**.
- [ ] `<name>-test.yml` is green on the PR.
- [ ] (if cron) `<name>-scan.yml` exists, is `workflow_dispatch`-able, and
      no-ops with a clear log when required secrets are unset.
- [ ] `<name>/SETUP.md` written if any credential is human-only.

## Don't

- Don't create a new `_tabs/*.html` page per widget — extend `/demos/`.
- Don't vendor theme partials/assets to work around a gem-version issue.
- Don't add an external CDN `<script src>` to any shipped page.
- Don't let one flaky source/artifact crash the whole run — isolate and log.
- Don't push to `main`, merge your own PR, or edit `pages-deploy.yml`.
- Don't hardcode a real email address, API key, or personal identifier —
  reference the GitHub secret name instead (`concerts/` shipped with a
  hardcoded alert address once and had to be fixed — see git history for
  `fix(concerts): stop hardcoding a real alert email anywhere in the repo`).
