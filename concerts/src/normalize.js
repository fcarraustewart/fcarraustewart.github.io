// RawEvent {source, artist, raw} → canonical Event
// {artist, date (Europe/Paris ISO), venue, city, url, source, key} — or null if unusable.

export function slugify(s) {
  return String(s ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Venue names differ across sources ("Accor Arena" vs "Accor Arena Paris",
// "Le Trianon" vs "Trianon"); drop articles and the city word so they collide.
const VENUE_NOISE = new Set(["le", "la", "les", "l", "the", "de", "du", "des", "d", "paris"]);

export function venueKey(name) {
  return slugify(name)
    .split("-")
    .filter((t) => t && !VENUE_NOISE.has(t))
    .join("-");
}

export function parisOffsetOf(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Paris",
    timeZoneName: "longOffset",
  }).formatToParts(date);
  const tz = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT";
  const m = tz.match(/GMT([+-]\d{2}:\d{2})/);
  return m ? m[1] : "+00:00";
}

// "2027-03-12" (+ optional "20:00:00") already expressed in Paris local time → full ISO.
export function parisISOFromLocal(dateStr, timeStr) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr ?? "")) return null;
  const time = /^\d{2}:\d{2}(:\d{2})?$/.test(timeStr ?? "") ? timeStr.padEnd(8, ":00").slice(0, 8) : "00:00:00";
  // probe at UTC noon of that day: DST switches happen at night, noon is safe
  const offset = parisOffsetOf(new Date(`${dateStr}T12:00:00Z`));
  return `${dateStr}T${time}${offset}`;
}

// Absolute instant (Date or UTC ISO string) → Paris-local ISO.
export function toParisISO(instant) {
  const d = instant instanceof Date ? instant : new Date(instant);
  if (Number.isNaN(d.getTime())) return null;
  const s = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
    .format(d)
    .replace(" ", "T");
  return `${s}${parisOffsetOf(d)}`;
}

export function eventKey(artist, dateIso, venue) {
  return `${slugify(artist)}|${String(dateIso).slice(0, 10)}|${venueKey(venue)}`;
}

function build(artist, source, dateIso, venue, city, url) {
  if (!artist || !dateIso || !venue) return null;
  return {
    artist,
    date: dateIso,
    venue,
    city: city ?? "",
    url: url ?? "",
    source,
    key: eventKey(artist, dateIso, venue),
  };
}

const normalizers = {
  ticketmaster({ artist, raw }) {
    const start = raw?.dates?.start;
    const venue = raw?._embedded?.venues?.[0];
    if (!start || !venue?.name) return null;
    const dateIso = start.localDate
      ? parisISOFromLocal(start.localDate, start.localTime)
      : start.dateTime
        ? toParisISO(start.dateTime)
        : null;
    return build(artist, "ticketmaster", dateIso, venue.name, venue.city?.name, raw.url);
  },

  bandsintown({ artist, raw }) {
    const dt = raw?.datetime;
    const venue = raw?.venue;
    if (!dt || !venue?.name) return null;
    // BIT datetimes are naive venue-local strings
    const [dateStr, timeStr] = String(dt).split("T");
    const dateIso = parisISOFromLocal(dateStr, timeStr);
    const url = raw.offers?.find((o) => o.type === "Tickets")?.url || raw.url;
    return build(artist, "bandsintown", dateIso, venue.name, venue.city, url);
  },

  songkick({ artist, raw }) {
    const start = raw?.start;
    const venue = raw?.venue;
    if (!start?.date || !venue?.displayName) return null;
    const dateIso = parisISOFromLocal(start.date, start.time);
    return build(artist, "songkick", dateIso, venue.displayName, venue.metroArea?.displayName, raw.uri);
  },
};

export function normalize(rawEvent) {
  const fn = normalizers[rawEvent?.source];
  if (!fn) return null;
  try {
    return fn(rawEvent);
  } catch {
    return null; // malformed payloads must never crash the run
  }
}
