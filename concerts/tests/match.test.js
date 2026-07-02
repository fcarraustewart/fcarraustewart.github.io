import { describe, it, expect } from "vitest";
import { matchArtists } from "../src/match.js";

const evJustice = { artist: "Justice", key: "a" };
const evAccented = { artist: "Sébastien Tellier", key: "b" };
const evUnknown = { artist: "Random Band", key: "c" };

describe("matchArtists", () => {
  it("keeps only events whose artist is in my Spotify set (accent/case-insensitive)", () => {
    const mine = [{ id: "1", name: "justice" }, { id: "2", name: "Sebastien Tellier" }];
    const out = matchArtists([evJustice, evAccented, evUnknown], mine);
    expect(out.map((e) => e.artist)).toEqual(["Justice", "Sébastien Tellier"]);
  });

  it("empty artist list → no events", () => {
    expect(matchArtists([evJustice], [])).toEqual([]);
  });

  it("empty events → empty", () => {
    expect(matchArtists([], [{ id: "1", name: "Justice" }])).toEqual([]);
  });
});
