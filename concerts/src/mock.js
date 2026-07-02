// Fixture-backed fetch mock — used by unit tests and by `CONCERTS_MOCK=1`
// (e.g. `npm run scan:dry`) so the whole pipeline runs end-to-end offline.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const fixture = (name) => JSON.parse(readFileSync(join(here, "..", "tests", "fixtures", name), "utf8"));

function respond(body, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
    text: async () => JSON.stringify(body),
  };
}

export function createMockFetch() {
  return async (url) => {
    const s = String(url);
    if (s.includes("accounts.spotify.com/api/token")) return respond({ access_token: "mock_access_token" });
    if (s.includes("/v1/me/following")) return respond(fixture("spotify_following.json"));
    if (s.includes("/v1/me/top/artists")) return respond(fixture("spotify_top.json"));
    if (s.includes("/discovery/v2/attractions.json")) {
      // only Justice resolves; other artists have no attraction
      return respond(s.includes("keyword=Justice") ? fixture("ticketmaster_attractions.json") : { _embedded: { attractions: [] } });
    }
    if (s.includes("/discovery/v2/events.json")) return respond(fixture("ticketmaster_events.json"));
    if (s.includes("rest.bandsintown.com/artists/")) {
      return respond(s.includes("/artists/Justice/") ? fixture("bandsintown_events.json") : []);
    }
    if (s.includes("api.songkick.com")) return respond(fixture("songkick_events.json"));
    if (s.includes("api.resend.com")) return respond({ id: "mock_email_id" });
    return respond({ error: `mock fetch: unrouted URL ${s}` }, 404);
  };
}
