import { describe, it, expect } from "vitest";
import { buildConcertsData } from "../src/render.js";

const later = {
  artist: "Vitalic",
  date: "2027-04-01T20:00:00+02:00",
  venue: "La Cigale",
  city: "Paris",
  url: "https://example.com/v",
  source: "bandsintown",
  sources: ["bandsintown"],
  key: "vitalic|2027-04-01|cigale",
};
const sooner = {
  artist: "Justice",
  date: "2027-03-12T20:00:00+01:00",
  venue: "Accor Arena",
  city: "Paris",
  url: "https://www.ticketmaster.fr/x",
  source: "ticketmaster",
  sources: ["ticketmaster"],
  key: "justice|2027-03-12|accor-arena",
};

describe("buildConcertsData", () => {
  it("sorts ascending by date and stamps generated_at", () => {
    const data = buildConcertsData([later, sooner], "2026-07-02T08:00:00+02:00");
    expect(data.generated_at).toBe("2026-07-02T08:00:00+02:00");
    expect(data.count).toBe(2);
    expect(data.events.map((e) => e.artist)).toEqual(["Justice", "Vitalic"]);
    // display-friendly fields for Liquid
    expect(data.events[0].date_display).toMatch(/12 Mar 2027/);
    expect(data.events[0].sources).toEqual(["ticketmaster"]);
  });

  it("empty list is valid", () => {
    const data = buildConcertsData([], "2026-07-02T08:00:00+02:00");
    expect(data.count).toBe(0);
    expect(data.events).toEqual([]);
  });
});
