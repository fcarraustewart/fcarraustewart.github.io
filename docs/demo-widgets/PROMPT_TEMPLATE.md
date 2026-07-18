# Build: "{{WIDGET_TITLE}}" — a new demo widget on my Jekyll site

> Operator manual for an autonomous Claude Code session. Launch a `claude`
> session **from the repo root** (`~/fcarraustewart.github.io`) and feed it
> this prompt, filled in. This is the generic template — the concrete example
> that proved this shape out is `concerts/PROMPT.md` (Paris Concert Radar).
> Read `docs/demo-widgets/GUIDE.md` alongside this file; it has the full
> rationale, this file is the copy-pasteable operator script.

Fill in before sending:

- `{{WIDGET_TITLE}}` — human-readable name, e.g. "Paris Concert Radar"
- `{{WIDGET_SLUG}}` — short lowercase name for dirs/files, e.g. `concerts`
- `{{ONE_LINE_GOAL}}` — what it does for you in one sentence
- `{{PATTERN}}` — A (self-contained static), B (live device/sensor), or C
  (external API + GitHub Actions cron). Default to reading
  `docs/demo-widgets/GUIDE.md` Step 0 to pick if unsure.
- `{{DATA_SOURCES}}` — external APIs/services involved, or "none" for A/B
- `{{NOTIFY}}` — does it need to contact you outside a page view (email,
  etc.)? If yes, name the channel and confirm it's addressed via a GitHub
  secret, never hardcoded.
- `{{BRANCH_NAME}}` — e.g. `feat/{{WIDGET_SLUG}}-widget`

---

You are an autonomous Claude Code session working in `~/fcarraustewart.github.io`
(my personal Chirpy/Jekyll site). Build: {{ONE_LINE_GOAL}}

## STEP 0 — Orient before touching anything

1. Read `CLAUDE.md` in this repo IN FULL — it is authoritative. Also read
   `docs/demo-widgets/GUIDE.md`, which generalizes how the existing demo
   widgets (`concerts/`, the BLE heart-rate widget) were actually built and
   shipped. In particular obey:
   - The gem-drift footgun: `Gemfile.lock` is gitignored; CI floats the
     Chirpy gem. Don't vendor theme partials. Run `tools/test.sh` (prod
     build + htmlproofer, mirrors CI) before claiming the site builds.
   - htmlproofer runs `--disable-external` ⇒ no external `<script src>` in
     any page shipped.
   - New demo widgets extend the existing **`/demos/` page**
     (`_posts/2025/2025-09-02-demos.md`) with a new `{% include
     {{WIDGET_SLUG}}-widget.html %}` section — do **not** create a new
     `_tabs/*.html` page for it.
   - Git identity: `origin` is the SSH alias `git@github-personal:...`. `gh`
     cannot infer the repo from the alias — every `gh` call needs
     `--repo fcarraustewart/fcarraustewart.github.io`.
   - Don't commit `_site/`, `vendor/`, `.jekyll-cache/`, `Gemfile.lock`,
     `node_modules`.
2. Work on branch `{{BRANCH_NAME}}`. NEVER push to `main`. When green, push
   the branch and open a PR with
   `gh ... --repo fcarraustewart/fcarraustewart.github.io`. I merge. Do NOT
   touch `.github/workflows/pages-deploy.yml`.
3. Confirm which pattern this is ({{PATTERN}}) against
   `docs/demo-widgets/GUIDE.md` Step 0's table before writing any code. If it
   turns out to be a different pattern than assumed above, say so and
   proceed with the matching steps in the guide instead of forcing this one.

## Hard truths to design around (Pattern C only — external API/cron widgets)

- GitHub Pages is static: it cannot run a scanner, hold secrets, or send
  email/notifications. The site is frontend-only; all polling/notifying runs
  as a Node job under `{{WIDGET_SLUG}}/`, triggered by GitHub Actions cron in
  this repo.
- Data sources: {{DATA_SOURCES}}. For each, check whether it has a real
  public API before assuming — don't invent an API that doesn't exist
  (`concerts/` hit this with "Spotify concerts API," which doesn't exist;
  Spotify only exposes *followed/top artists*, and events come from
  Ticketmaster/Bandsintown/Songkick instead). If a source has no public API
  and can only be scraped, leave a `// TODO: <source> has no public API` stub
  behind a common `Source` interface and move on — don't scrape it.
- Credentials/refresh tokens cannot be minted by the agent. Build everything
  around them with fixtures/mocks, and emit a `SETUP.md` +
  `@needs-human` checklist. Do not block on missing secrets — the cron
  workflow must no-op cleanly instead.

## Architecture to build

Use `tools/new-demo-widget.sh {{WIDGET_SLUG}}{{CRON_FLAG}}` to scaffold the
skeleton described in `docs/demo-widgets/GUIDE.md` Step 2, then fill it in:

```
{{WIDGET_SLUG}}/
├── package.json           # type: module, vitest, scripts: test/scan/scan:dry
├── src/
│   ├── main.js             # orchestrator; supports --dry-run
│   ├── sources/            # one file per external source behind a common interface
│   ├── normalize.js        # RawEvent → canonical shape
│   ├── dedupe.js            # cross-source merge, if >1 source
│   ├── diff.js              # new = canonical \ seen(state/seen.json), if stateful
│   └── notify.js            # if {{NOTIFY}} — render + send, secret-driven address only
├── state/                  # committed ledger, if diffing across runs
├── tests/
│   ├── fixtures/            # saved sample payloads per source
│   └── *.test.js            # vitest, no network
└── SETUP.md                 # @needs-human checklist
.github/workflows/
├── {{WIDGET_SLUG}}-test.yml   # push/PR on {{WIDGET_SLUG}}/**: npm ci + npm test, no secrets
└── {{WIDGET_SLUG}}-scan.yml   # only if {{PATTERN}} == C and it's scheduled: cron +
                                 # workflow_dispatch, secret-gated no-op, commits
                                 # _data/{{WIDGET_SLUG}}.json + state/ back to main
```

Also: add `{{WIDGET_SLUG}}` to `_config.yml` `exclude:`; if its
`package-lock.json` must be committed for reproducible CI, add the
`.gitignore` exception (see `!concerts/package-lock.json` for the pattern).

## Methodology — TEST-DRIVEN, in this order

For every pure module: **write the vitest test first against a saved
fixture, watch it fail, then implement until green.** Network code is tested
by injecting a `fetch`-shaped mock returning fixtures — never hit the real
network in unit tests. Capture 1-2 real-ish fixtures per source by hand
writing trimmed sample JSON matching each API's documented shape (don't
invent fields).

## Definition of Done (paste evidence into the PR)

- [ ] `cd {{WIDGET_SLUG}} && npm test` — all green, no network. Cover: empty
      input, zero-result case, duplicate merged, already-seen not
      re-notified (if stateful), a genuinely new item flagged, malformed
      input from one source doesn't crash the run (source isolated).
- [ ] `{{WIDGET_SLUG_UPPER}}_MOCK=1 node src/main.js --dry-run` runs
      end-to-end on fixtures and prints what it would write/send.
- [ ] `tools/test.sh` passes with the new `/demos/` section rendering a
      committed sample `_data/{{WIDGET_SLUG}}.json` (if applicable); no
      external `<script src>`; nothing from `{{WIDGET_SLUG}}/` leaks into
      `_site/`.
- [ ] `{{WIDGET_SLUG}}-test.yml` is green on the PR.
- [ ] (if cron) `{{WIDGET_SLUG}}-scan.yml` exists, is
      `workflow_dispatch`-able, and no-ops with a clear log when required
      secrets are unset.
- [ ] `{{WIDGET_SLUG}}/SETUP.md` written if any credential is human-only; PR
      description repeats the `@needs-human` steps.

## Constraints / Don't

- Don't push to `main`; don't merge your own PR; don't edit
  `pages-deploy.yml`.
- Don't scrape a source that has no public API. Don't store secrets in code
  or fixtures. Don't hardcode a real email/personal identifier anywhere —
  reference the GitHub secret name only.
- Don't add an external CDN `<script src>` to any shipped page.
- Don't let the job crash entirely because one source/item failed — isolate,
  continue, and log what was skipped (no silent truncation).
- Keep the widget readable with JavaScript disabled if it renders
  server-side data (Pattern C) — JS is progressive enhancement only.

Start by reading `CLAUDE.md` and `docs/demo-widgets/GUIDE.md`, then propose a
short build plan (file list + test list) before writing code. Then execute
it TDD, module by module, ending at the Definition of Done checklist.
