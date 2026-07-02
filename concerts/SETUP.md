# Concerts Radar — human-only setup (@needs-human)

The code is complete and tested against fixtures, but every credential below
requires a one-time human signup/OAuth. Until the secrets exist, the daily scan
**no-ops with a clear log** — nothing breaks.

## 1. Spotify (@needs-human)
1. Create an app at <https://developer.spotify.com/dashboard>.
2. Add redirect URI exactly: `http://127.0.0.1:8888/callback`.
   (Scopes `user-follow-read user-top-read` are requested at auth time.)
3. Run locally, once:
   ```sh
   cd concerts
   SPOTIFY_CLIENT_ID=<client id> npm run auth
   ```
   Browser opens → approve → the script prints `SPOTIFY_CLIENT_ID` and
   `SPOTIFY_REFRESH_TOKEN`. This is a **public PKCE client**: no client secret
   exists or is needed anywhere.

## 2. Ticketmaster (@needs-human)
Register a free **Discovery API** key at <https://developer.ticketmaster.com>
→ `TICKETMASTER_API_KEY`. (Limits: 5 req/s, 5000/day — the scanner sleeps
between calls.)

## 3. Bandsintown
No signup: pick any string as `BANDSINTOWN_APP_ID` (e.g. `fcarraustewart-concert-radar`).

## 4. Resend (email) (@needs-human)
1. Free account at <https://resend.com> → API key → `RESEND_API_KEY`.
2. Verify a from-address/domain; set `ALERT_FROM` (optional, defaults to
   `Concert Radar <onboarding@resend.dev>` which only delivers to your own
   Resend account email) and `ALERT_EMAIL=hello@mentalista.com`.

## 5. Songkick (optional)
Keys are approval-gated. If granted, add `SONGKICK_API_KEY`; without it the
source skips cleanly.

## 6. GitHub repo secrets (@needs-human)
Repo → Settings → Secrets and variables → Actions → add:

| Secret | Required |
|---|---|
| `SPOTIFY_CLIENT_ID` | yes |
| `SPOTIFY_REFRESH_TOKEN` | yes |
| `TICKETMASTER_API_KEY` | yes |
| `RESEND_API_KEY` | yes (for email) |
| `ALERT_EMAIL` | yes (for email) |
| `BANDSINTOWN_APP_ID` | recommended |
| `ALERT_FROM` | optional |
| `SONGKICK_API_KEY` | optional |

## 7. Done
Merge the PR. `concerts-scan.yml` runs daily at 08:00 Europe/Paris (and via
*Run workflow*), scans, emails new Paris shows, and commits the refreshed
`_data/concerts.json` + `concerts/state/seen.json` to `main` — the widget on
`/demos/` updates on the next Pages build.

## Local commands
```sh
cd concerts
npm test                                  # unit tests, no network
CONCERTS_MOCK=1 npm run scan:dry          # full pipeline on fixtures, prints digest
npm run scan:dry                          # dry-run against real APIs (needs env vars)
npm run scan                              # real scan: writes files, sends email
```
