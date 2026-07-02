import { getJson, defaultSleep } from "./source.js";

// Bandsintown public API: any app_id string works; response is a JSON array
// (an object means "artist not found" / error — treat as no events).
export function createBandsintownSource({ appId, fetchImpl = fetch, sleep = defaultSleep }) {
  const enabled = Boolean(appId);
  return {
    name: "bandsintown",
    enabled,
    async fetchEventsForArtist(artist) {
      if (!enabled) return [];
      await sleep(250);
      const url =
        `https://rest.bandsintown.com/artists/${encodeURIComponent(artist.name)}` +
        `/events?app_id=${encodeURIComponent(appId)}`;
      const json = await getJson(fetchImpl, url, "bandsintown events");
      if (!Array.isArray(json)) return [];
      return json
        .filter((ev) => ev?.venue?.city === "Paris")
        .map((raw) => ({ source: "bandsintown", artist: artist.name, raw }));
    },
  };
}
