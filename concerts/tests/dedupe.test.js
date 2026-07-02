import { describe, it, expect } from "vitest";
import { dedupe } from "../src/dedupe.js";

const tm = {
  artist: "Justice",
  date: "2027-03-12T20:00:00+01:00",
  venue: "Accor Arena",
  city: "Paris",
  url: "https://www.ticketmaster.fr/x",
  source: "ticketmaster",
  key: "justice|2027-03-12|accor-arena",
};
const bit = {
  ...tm,
  venue: "Accor Arena Paris",
  url: "https://www.bandsintown.com/e/1",
  source: "bandsintown",
};
const other = {
  artist: "Vitalic",
  date: "2027-04-01T20:00:00+02:00",
  venue: "La Cigale",
  city: "Paris",
  url: "https://example.com/v",
  source: "bandsintown",
  key: "vitalic|2027-04-01|cigale",
};

describe("dedupe", () => {
  it("merges the same event from 2 sources into 1, recording both sources", () => {
    const out = dedupe([bit, tm, other]);
    expect(out).toHaveLength(2);
    const justice = out.find((e) => e.artist === "Justice");
    expect(justice.sources).toEqual(["ticketmaster", "bandsintown"]);
    // ticketmaster wins as primary (source priority), so its URL is kept
    expect(justice.source).toBe("ticketmaster");
    expect(justice.url).toContain("ticketmaster");
  });

  it("passes distinct events through untouched", () => {
    const out = dedupe([tm, other]);
    expect(out).toHaveLength(2);
    expect(out.find((e) => e.artist === "Vitalic").sources).toEqual(["bandsintown"]);
  });

  it("handles empty input", () => {
    expect(dedupe([])).toEqual([]);
  });
});
