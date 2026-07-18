#!/usr/bin/env bash
#
# Scaffold a new "demo widget" module (Pattern C from
# docs/demo-widgets/GUIDE.md: an external-API/cron-driven widget, modeled on
# concerts/). Creates the Node module dir + test-only GitHub Actions
# workflow, and optionally the secret-gated cron workflow.
#
# This script only creates files under <name>/ and .github/workflows/. It
# does NOT touch _config.yml, .gitignore, or the Demos page — those are a
# few lines each and easy to get wrong via sed; the script prints what to
# add by hand instead.
#
# Usage: tools/new-demo-widget.sh <name> [--cron]

set -eu

usage() {
  echo "Usage: $0 <name> [--cron]"
  echo
  echo "  <name>   lowercase, hyphen-free slug, e.g. 'concerts'"
  echo "  --cron   also generate the secret-gated scheduled scan workflow"
}

if [[ $# -lt 1 ]]; then
  usage
  exit 1
fi

NAME="$1"
shift || true

WITH_CRON=0
while (($#)); do
  case "$1" in
  --cron)
    WITH_CRON=1
    shift
    ;;
  -h | --help)
    usage
    exit 0
    ;;
  *)
    usage
    exit 1
    ;;
  esac
done

if [[ ! $NAME =~ ^[a-z][a-z0-9]*$ ]]; then
  echo "error: <name> must be lowercase letters/digits only (no hyphens/underscores), got: $NAME" >&2
  exit 1
fi

NAME_UPPER="$(printf '%s' "$NAME" | tr '[:lower:]' '[:upper:]')"

if [[ -e $NAME ]]; then
  echo "error: $NAME/ already exists — refusing to overwrite" >&2
  exit 1
fi

mkdir -p "$NAME/src/sources" "$NAME/tests/fixtures" "$NAME/state"

cat >"$NAME/package.json" <<EOF
{
  "name": "$NAME-widget",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "description": "TODO: one-line description of what this widget does",
  "scripts": {
    "test": "vitest run",
    "scan": "node src/main.js",
    "scan:dry": "node src/main.js --dry-run"
  },
  "engines": {
    "node": ">=20"
  },
  "devDependencies": {
    "vitest": "^3.2.0"
  }
}
EOF

cat >"$NAME/src/main.js" <<EOF
// Orchestrator for the $NAME widget. Supports:
//   --dry-run          skip writes/notifications, just print what would happen
//   ${NAME_UPPER}_MOCK=1   force fixture-backed fetches instead of the real network
//
// TODO: wire up src/sources/*, normalize/dedupe/diff modules, and the
// _data/$NAME.json writer, following the shape of concerts/src/main.js.

const dryRun = process.argv.includes("--dry-run");
const mock = process.env.${NAME_UPPER}_MOCK === "1";

async function main() {
  // TODO: fetch from src/sources/*, normalize, dedupe, diff against
  // state/seen.json (if stateful), write _data/$NAME.json, notify if needed.
  console.log(\`$NAME: dryRun=\${dryRun} mock=\${mock} — nothing implemented yet\`);
}

main();
EOF

cat >"$NAME/tests/example.test.js" <<EOF
import { describe, it, expect } from "vitest";

describe("$NAME", () => {
  it("has a test harness wired up", () => {
    expect(true).toBe(true);
  });
});
EOF

touch "$NAME/state/.gitkeep"

cat >"$NAME/SETUP.md" <<EOF
# $NAME widget — human-only setup (@needs-human)

TODO: list each credential this widget needs, where to get it, and which
GitHub **repository** secret name it becomes (Settings → Secrets and
variables → Actions → Repository secrets). Never put a real value in this
file — reference the secret name only.

| Secret | Required? | Where it comes from |
|---|---|---|
| TODO | TODO | TODO |

## Local commands
\`\`\`sh
cd $NAME
npm test                        # unit tests, no network
${NAME_UPPER}_MOCK=1 npm run scan:dry   # full pipeline on fixtures
npm run scan:dry                 # dry-run against real APIs (needs env vars)
npm run scan                     # real run: writes files, sends notifications
\`\`\`
EOF

mkdir -p .github/workflows

cat >".github/workflows/$NAME-test.yml" <<EOF
# Pure logic gate for the $NAME widget — no secrets, no network in tests.
name: "$NAME: tests"

on:
  push:
    paths: ["$NAME/**", ".github/workflows/$NAME-test.yml"]
  pull_request:
    paths: ["$NAME/**", ".github/workflows/$NAME-test.yml"]

jobs:
  test:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: $NAME
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
          cache-dependency-path: $NAME/package-lock.json
      - run: npm ci
      - run: npm test
      - name: Mock end-to-end dry-run
        run: ${NAME_UPPER}_MOCK=1 node src/main.js --dry-run
EOF

if [[ $WITH_CRON -eq 1 ]]; then
  cat >".github/workflows/$NAME-scan.yml" <<EOF
# Scheduled $NAME scan. Requires repo secrets (see $NAME/SETUP.md); until
# they exist this workflow no-ops with a clear notice instead of failing.
name: "$NAME: scan"

on:
  schedule:
    # TODO: pick a cron schedule (GitHub cron is UTC-only).
    - cron: "0 6 * * *"
  workflow_dispatch:

permissions:
  contents: write

concurrency:
  group: $NAME-scan
  cancel-in-progress: false

jobs:
  scan:
    runs-on: ubuntu-latest
    env:
      # TODO: list every REQUIRED secret here; keep this check in sync with SETUP.md.
      HAS_SECRETS: \${{ secrets.TODO_REQUIRED_SECRET != '' }}
    steps:
      - name: Gate — secrets not configured yet
        if: env.HAS_SECRETS != 'true'
        run: |
          echo "::notice title=$NAME scan skipped::Required secrets are not set. See $NAME/SETUP.md."

      - uses: actions/checkout@v4
        if: env.HAS_SECRETS == 'true'
        with:
          ref: main

      - uses: actions/setup-node@v4
        if: env.HAS_SECRETS == 'true'
        with:
          node-version: 22
          cache: npm
          cache-dependency-path: $NAME/package-lock.json

      - name: Install
        if: env.HAS_SECRETS == 'true'
        working-directory: $NAME
        run: npm ci

      - name: Scan
        if: env.HAS_SECRETS == 'true'
        working-directory: $NAME
        env:
          TODO_REQUIRED_SECRET: \${{ secrets.TODO_REQUIRED_SECRET }}
        run: node src/main.js

      - name: Commit refreshed data
        if: env.HAS_SECRETS == 'true'
        run: |
          git config user.name "$NAME-widget[bot]"
          git config user.email "actions@users.noreply.github.com"
          git add _data/$NAME.json $NAME/state
          if git diff --cached --quiet; then
            echo "No changes."
          else
            git commit -m "chore($NAME): refresh data (\$(date -u +%F))"
            git push origin main
          fi
EOF
fi

echo "Scaffolded $NAME/ and .github/workflows/$NAME-test.yml$( ((WITH_CRON)) && echo " + $NAME-scan.yml" )."
echo
echo "Remaining manual steps (see docs/demo-widgets/GUIDE.md Step 5):"
echo "  1. Add '$NAME/' to the exclude: list in _config.yml."
echo "  2. If $NAME/package-lock.json must be committed for CI, add to .gitignore:"
echo "       !$NAME/package-lock.json"
echo "  3. Create _includes/$NAME-widget.html (pure Liquid over site.data.$NAME)."
echo "  4. Add a '## <title>' section + {% include $NAME-widget.html %} to"
echo "     _posts/2025/2025-09-02-demos.md, and append the stack to its tags:."
echo "  5. cd $NAME && npm install"
