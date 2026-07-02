import { slugify } from "./normalize.js";

// Keep only events whose artist is in my Spotify set (accent/case-insensitive).
export function matchArtists(events, spotifyArtists) {
  const mine = new Set(spotifyArtists.map((a) => slugify(a.name)));
  return events.filter((ev) => mine.has(slugify(ev.artist)));
}
