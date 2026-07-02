// Cross-source merge: events sharing a fuzzy key (artist+date+venue, see
// normalize.eventKey) collapse to one, primary = highest-priority source.

const PRIORITY = { ticketmaster: 0, bandsintown: 1, songkick: 2 };
const rank = (s) => PRIORITY[s] ?? 99;

export function dedupe(events) {
  const groups = new Map();
  for (const ev of events) {
    if (!groups.has(ev.key)) groups.set(ev.key, []);
    groups.get(ev.key).push(ev);
  }
  const out = [];
  for (const group of groups.values()) {
    group.sort((a, b) => rank(a.source) - rank(b.source));
    const sources = [...new Set(group.map((e) => e.source))];
    out.push({ ...group[0], sources });
  }
  return out;
}
