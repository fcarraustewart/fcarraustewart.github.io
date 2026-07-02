import { describe, it, expect } from "vitest";
import { runScan } from "../src/main.js";
import { createMockFetch } from "../src/mock.js";

const NOW = new Date("2026-07-02T06:00:00Z");

function memIO(seen = {}) {
  const io = {
    written: {},
    readSeen: async () => seen,
    writeSeen: async (data) => { io.written.seen = data; },
    writeData: async (data) => { io.written.data = data; },
  };
  return io;
}

function baseEnv(extra = {}) {
  return {
    CONCERTS_MOCK: "1",
    SPOTIFY_CLIENT_ID: "cid",
    SPOTIFY_REFRESH_TOKEN: "rt",
    TICKETMASTER_API_KEY: "tk",
    BANDSINTOWN_APP_ID: "bit",
    RESEND_API_KEY: "rk",
    ALERT_EMAIL: "alerts@example.com",
    ...extra,
  };
}

describe("runScan end-to-end on mock data", () => {
  it("dedupes TM+BIT duplicate, writes sorted data, emails only new events", async () => {
    const io = memIO({});
    const sent = [];
    const logs = [];
    const result = await runScan({
      env: baseEnv(),
      now: NOW,
      io,
      log: (m) => logs.push(m),
      sendEmailImpl: async (msg) => sent.push(msg),
    });
    // TM fixture + BIT fixture describe the SAME Justice/Accor Arena show → 1 event,
    // plus songkick is skipped (no key) — mock set yields exactly that one.
    expect(result.upcoming).toHaveLength(1);
    const ev = result.upcoming[0];
    expect(ev.artist).toBe("Justice");
    expect(ev.sources).toEqual(["ticketmaster", "bandsintown"]);
    expect(io.written.data.events).toHaveLength(1);
    expect(io.written.seen[ev.key]).toBeTruthy();
    expect(sent).toHaveLength(1);
    expect(sent[0].html).toContain("Justice");
  });

  it("event already in seen.json → no email, still listed in data", async () => {
    const probe = await runScan({ env: baseEnv(), now: NOW, io: memIO({}), log: () => {}, sendEmailImpl: async () => {} });
    const key = probe.upcoming[0].key;
    const io = memIO({ [key]: { firstSeen: "2026-06-01T08:00:00+02:00" } });
    const sent = [];
    const result = await runScan({ env: baseEnv(), now: NOW, io, log: () => {}, sendEmailImpl: async (m) => sent.push(m) });
    expect(sent).toHaveLength(0);
    expect(result.newEvents).toHaveLength(0);
    expect(io.written.data.events).toHaveLength(1);
  });

  it("dry-run: no writes, no email", async () => {
    const io = memIO({});
    const sent = [];
    await runScan({ env: baseEnv(), now: NOW, io, dryRun: true, log: () => {}, sendEmailImpl: async (m) => sent.push(m) });
    expect(io.written.data).toBeUndefined();
    expect(io.written.seen).toBeUndefined();
    expect(sent).toHaveLength(0);
  });

  it("one source throwing does not kill the run — others still produce results", async () => {
    const mock = createMockFetch();
    const explosive = async (url, opts) => {
      if (String(url).includes("ticketmaster")) throw new Error("TM is down");
      return mock(url, opts);
    };
    const io = memIO({});
    const logs = [];
    const result = await runScan({
      env: baseEnv(),
      now: NOW,
      io,
      fetchImpl: explosive,
      log: (m) => logs.push(String(m)),
      sendEmailImpl: async () => {},
    });
    // bandsintown still delivers the Justice Paris show
    expect(result.upcoming).toHaveLength(1);
    expect(result.upcoming[0].sources).toEqual(["bandsintown"]);
    expect(logs.some((l) => l.includes("ticketmaster") && l.toLowerCase().includes("skip"))).toBe(true);
  });

  it("empty artist list → empty data, no email, no crash", async () => {
    const mock = createMockFetch();
    const noArtists = async (url, opts) => {
      const s = String(url);
      if (s.includes("/v1/me/following"))
        return { ok: true, status: 200, json: async () => ({ artists: { items: [], cursors: { after: null } } }) };
      if (s.includes("/v1/me/top/artists"))
        return { ok: true, status: 200, json: async () => ({ items: [] }) };
      return mock(url, opts);
    };
    const io = memIO({});
    const sent = [];
    const result = await runScan({ env: baseEnv(), now: NOW, io, fetchImpl: noArtists, log: () => {}, sendEmailImpl: async (m) => sent.push(m) });
    expect(result.upcoming).toEqual([]);
    expect(io.written.data.events).toEqual([]);
    expect(sent).toHaveLength(0);
  });

  it("missing required secrets (non-mock) → clean skip, exit result flags it", async () => {
    const result = await runScan({ env: {}, now: NOW, io: memIO({}), log: () => {}, sendEmailImpl: async () => {} });
    expect(result.skipped).toBe(true);
  });
});
