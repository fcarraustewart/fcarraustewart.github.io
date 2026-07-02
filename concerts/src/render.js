// Builds the object serialized to _data/concerts.json — the full upcoming
// Paris list the Jekyll widget renders server-side.

export function formatParisDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return String(iso);
  const date = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(d);
  return time === "00:00" ? date : `${date} · ${time}`;
}

export function buildConcertsData(events, generatedAtIso) {
  const sorted = [...events].sort((a, b) => String(a.date).localeCompare(String(b.date)));
  return {
    generated_at: generatedAtIso,
    city: "Paris",
    count: sorted.length,
    events: sorted.map((ev) => ({
      artist: ev.artist,
      date: ev.date,
      date_display: formatParisDate(ev.date),
      venue: ev.venue,
      city: ev.city,
      url: ev.url,
      sources: ev.sources ?? [ev.source],
      key: ev.key,
    })),
  };
}
