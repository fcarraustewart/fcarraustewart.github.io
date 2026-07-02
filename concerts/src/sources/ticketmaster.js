import { getJson, defaultSleep } from "./source.js";
import { slugify } from "../normalize.js";

const BASE = "https://app.ticketmaster.com/discovery/v2";

// Discovery API v2: resolve artist → attractionId, then Paris music events.
// Rate limits: 5 req/s, 5000/day — hence the sleep between calls.
export function createTicketmasterSource({ apiKey, fetchImpl = fetch, sleep = defaultSleep }) {
  const enabled = Boolean(apiKey);
  return {
    name: "ticketmaster",
    enabled,
    async fetchEventsForArtist(artist) {
      if (!enabled) return [];
      await sleep(250);
      const aUrl =
        `${BASE}/attractions.json?keyword=${encodeURIComponent(artist.name)}` +
        `&classificationName=music&apikey=${apiKey}`;
      const aJson = await getJson(fetchImpl, aUrl, "ticketmaster attractions");
      const attractions = aJson?._embedded?.attractions ?? [];
      const wanted = slugify(artist.name);
      const attraction = attractions.find((a) => slugify(a.name) === wanted);
      if (!attraction) return [];
      await sleep(250);
      const eUrl =
        `${BASE}/events.json?attractionId=${encodeURIComponent(attraction.id)}` +
        `&city=Paris&countryCode=FR&classificationName=music&size=50&apikey=${apiKey}`;
      const eJson = await getJson(fetchImpl, eUrl, "ticketmaster events");
      return (eJson?._embedded?.events ?? []).map((raw) => ({
        source: "ticketmaster",
        artist: artist.name,
        raw,
      }));
    },
  };
}
