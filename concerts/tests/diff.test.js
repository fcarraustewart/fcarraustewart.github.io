import { describe, it, expect } from "vitest";
import { findNew, updateSeen } from "../src/diff.js";

const a = { artist: "Justice", date: "2027-03-12T20:00:00+01:00", key: "justice|2027-03-12|accor-arena" };
const b = { artist: "Vitalic", date: "2027-04-01T20:00:00+02:00", key: "vitalic|2027-04-01|cigale" };

describe("findNew", () => {
  it("an event already in seen.json is NOT re-notified", () => {
    const seen = { [a.key]: { firstSeen: "2026-06-01T08:00:00+02:00" } };
    expect(findNew([a, b], seen)).toEqual([b]);
  });

  it("brand-new events are flagged", () => {
    expect(findNew([a], {})).toEqual([a]);
  });

  it("tolerates a missing/empty ledger", () => {
    expect(findNew([a], undefined)).toEqual([a]);
  });
});

describe("updateSeen", () => {
  it("adds new keys with firstSeen and keeps existing entries", () => {
    const seen = { [a.key]: { firstSeen: "2026-06-01T08:00:00+02:00", artist: "Justice" } };
    const out = updateSeen(seen, [b], "2026-07-02T08:00:00+02:00");
    expect(out[a.key].firstSeen).toBe("2026-06-01T08:00:00+02:00");
    expect(out[b.key]).toMatchObject({ firstSeen: "2026-07-02T08:00:00+02:00", artist: "Vitalic" });
  });
});
