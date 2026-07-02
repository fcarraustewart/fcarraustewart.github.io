import { getJson, defaultSleep } from "./source.js";
import { slugify } from "../normalize.js";

const BASE = "https://api.songkick.com/api/3.0";
const PARIS_METRO_ID = 28909;

// OPTIONAL source — Songkick keys are approval-gated. Without a key this is a
// clean no-op (enabled: false) so the pipeline skips it without logging errors.
export function createSongkickSource({ apiKey, fetchImpl = fetch, sleep = defaultSleep }) {
  const enabled = Boolean(apiKey);
  return {
    name: "songkick",
    enabled,
    async fetchEventsForArtist(artist) {
      if (!enabled) return [];
      await sleep(250);
      const sUrl = `${BASE}/search/artists.json?apikey=${apiKey}&query=${encodeURIComponent(artist.name)}`;
      const sJson = await getJson(fetchImpl, sUrl, "songkick artist search");
      const candidates = sJson?.resultsPage?.results?.artist ?? [];
      const wanted = slugify(artist.name);
      const match = candidates.find((a) => slugify(a.displayName) === wanted) ?? candidates[0];
      if (!match) return [];
      await sleep(250);
      const cUrl = `${BASE}/artists/${match.id}/calendar.json?apikey=${apiKey}`;
      const cJson = await getJson(fetchImpl, cUrl, "songkick calendar");
      const events = cJson?.resultsPage?.results?.event ?? [];
      return events
        .filter((ev) => ev?.venue?.metroArea?.id === PARIS_METRO_ID)
        .map((raw) => ({ source: "songkick", artist: artist.name, raw }));
    },
  };
}
