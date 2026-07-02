// Source interface — every event source exports a factory returning:
//   { name: string, enabled: boolean,
//     fetchEventsForArtist(artist: {id, name}) → Promise<RawEvent[]> }
// where RawEvent = { source, artist, raw } and `raw` is the untouched API doc
// (normalize.js turns it canonical). A disabled source (missing key) must
// return [] without touching the network so it can be skipped cleanly.
//
// TODO: DICE has no public API — do not scrape it. If one ever ships, add
// sources/dice.js implementing this same interface.

export async function getJson(fetchImpl, url, label) {
  const res = await fetchImpl(url);
  if (!res.ok) throw new Error(`${label}: HTTP ${res.status}`);
  return res.json();
}

export const defaultSleep = (ms) => new Promise((r) => setTimeout(r, ms));
