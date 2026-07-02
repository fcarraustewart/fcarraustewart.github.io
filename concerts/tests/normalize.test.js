import { describe, it, expect } from "vitest";
import { normalize, slugify, venueKey } from "../src/normalize.js";
import { fixture } from "./helpers.js";

describe("slugify / venueKey", () => {
  it("strips accents, case, punctuation", () => {
    expect(slugify("Le Zénith")).toBe("le-zenith");
    expect(slugify("  Daft  Punk! ")).toBe("daft-punk");
  });

  it("venueKey ignores articles and the word paris so cross-source names collide", () => {
    expect(venueKey("Accor Arena Paris")).toBe(venueKey("Accor Arena"));
    expect(venueKey("Le Trianon")).toBe(venueKey("Trianon"));
    expect(venueKey("Zénith Paris - La Villette")).toBe(venueKey("zenith villette"));
  });
});

describe("normalize: ticketmaster", () => {
  const tm = fixture("ticketmaster_events.json")._embedded.events[0];

  it("maps a TM event to the canonical shape with a Paris-local ISO date", () => {
    const ev = normalize({ source: "ticketmaster", artist: "Justice", raw: tm });
    expect(ev).toMatchObject({
      artist: "Justice",
      venue: "Accor Arena",
      city: "Paris",
      source: "ticketmaster",
      url: expect.stringContaining("ticketmaster"),
    });
    // localDate+localTime are already Europe/Paris; March = CET (+01:00)
    expect(ev.date).toBe("2027-03-12T20:00:00+01:00");
    expect(ev.key).toBe(`justice|2027-03-12|${venueKey("Accor Arena")}`);
  });

  it("returns null instead of throwing on malformed payloads", () => {
    expect(normalize({ source: "ticketmaster", artist: "X", raw: {} })).toBeNull();
    expect(normalize({ source: "ticketmaster", artist: "X", raw: { dates: {} } })).toBeNull();
    expect(normalize({ source: "ticketmaster", artist: "X", raw: null })).toBeNull();
  });
});

describe("normalize: bandsintown", () => {
  const [paris, london] = fixture("bandsintown_events.json");

  it("maps a BIT event; naive datetime is treated as venue-local Paris time", () => {
    const ev = normalize({ source: "bandsintown", artist: "Justice", raw: paris });
    expect(ev.city).toBe("Paris");
    expect(ev.venue).toBe("Accor Arena Paris");
    expect(ev.date).toBe("2027-03-12T20:00:00+01:00");
    // same physical show as the TM fixture → same dedupe key
    const tmEv = normalize({
      source: "ticketmaster",
      artist: "Justice",
      raw: fixture("ticketmaster_events.json")._embedded.events[0],
    });
    expect(ev.key).toBe(tmEv.key);
  });

  it("keeps non-Paris events' city so match/filter can drop them", () => {
    const ev = normalize({ source: "bandsintown", artist: "Justice", raw: london });
    expect(ev.city).toBe("London");
  });

  it("summer dates get the CEST offset", () => {
    const ev = normalize({
      source: "bandsintown",
      artist: "Justice",
      raw: { ...paris, datetime: "2027-07-01T21:00:00" },
    });
    expect(ev.date).toBe("2027-07-01T21:00:00+02:00");
  });

  it("returns null on missing datetime or venue", () => {
    expect(normalize({ source: "bandsintown", artist: "X", raw: { venue: {} } })).toBeNull();
    expect(normalize({ source: "bandsintown", artist: "X", raw: {} })).toBeNull();
  });
});

describe("normalize: songkick", () => {
  const sk = fixture("songkick_events.json").resultsPage.results.event[0];

  it("maps a Songkick event", () => {
    const ev = normalize({ source: "songkick", artist: "Justice", raw: sk });
    expect(ev).toMatchObject({ artist: "Justice", venue: "Le Trianon", city: "Paris", source: "songkick" });
    expect(ev.date).toBe("2027-05-20T19:30:00+02:00");
  });

  it("returns null on malformed payload", () => {
    expect(normalize({ source: "songkick", artist: "X", raw: {} })).toBeNull();
  });
});

describe("normalize: unknown source", () => {
  it("returns null", () => {
    expect(normalize({ source: "dice", artist: "X", raw: {} })).toBeNull();
  });
});
