// seen.json is the first-seen ledger: { [event.key]: {firstSeen, artist, date, venue} }

export function findNew(events, seen) {
  const ledger = seen ?? {};
  return events.filter((ev) => !ledger[ev.key]);
}

export function updateSeen(seen, newEvents, nowIso) {
  const out = { ...(seen ?? {}) };
  for (const ev of newEvents) {
    out[ev.key] = { firstSeen: nowIso, artist: ev.artist, date: ev.date, venue: ev.venue };
  }
  return out;
}
