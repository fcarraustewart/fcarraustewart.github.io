import { describe, it, expect } from "vitest";
import { createTicketmasterSource } from "../src/sources/ticketmaster.js";
import { createBandsintownSource } from "../src/sources/bandsintown.js";
import { createSongkickSource } from "../src/sources/songkick.js";
import { getAccessToken, listArtists } from "../src/spotify.js";
import { fixture, fetchStub } from "./helpers.js";

const noSleep = async () => {};
const artist = { id: "sp1", name: "Justice" };

describe("ticketmaster source", () => {
  it("resolves attraction then fetches Paris events", async () => {
    const f = fetchStub([
      ["/discovery/v2/attractions.json", fixture("ticketmaster_attractions.json")],
      ["/discovery/v2/events.json", fixture("ticketmaster_events.json")],
    ]);
    const src = createTicketmasterSource({ apiKey: "tm_key", fetchImpl: f, sleep: noSleep });
    const raws = await src.fetchEventsForArtist(artist);
    expect(raws).toHaveLength(1);
    expect(raws[0]).toMatchObject({ source: "ticketmaster", artist: "Justice" });
    expect(raws[0].raw.name).toBe("Justice");
    const eventsCall = f.calls.find((c) => c.url.includes("events.json"));
    expect(eventsCall.url).toContain("attractionId=K8vZ917GtG0");
    expect(eventsCall.url).toContain("city=Paris");
    expect(eventsCall.url).toContain("countryCode=FR");
    expect(eventsCall.url).toContain("classificationName=music");
  });

  it("artist with no attraction match → 0 events, no events call", async () => {
    const f = fetchStub([["/attractions.json", { _embedded: { attractions: [] } }]]);
    const src = createTicketmasterSource({ apiKey: "k", fetchImpl: f, sleep: noSleep });
    expect(await src.fetchEventsForArtist(artist)).toEqual([]);
    expect(f.calls.some((c) => c.url.includes("events.json"))).toBe(false);
  });

  it("no apiKey → disabled, returns [] without network", async () => {
    const f = fetchStub([]);
    const src = createTicketmasterSource({ apiKey: undefined, fetchImpl: f, sleep: noSleep });
    expect(src.enabled).toBe(false);
    expect(await src.fetchEventsForArtist(artist)).toEqual([]);
    expect(f.calls).toHaveLength(0);
  });
});

describe("bandsintown source", () => {
  it("fetches artist events and keeps only Paris", async () => {
    const f = fetchStub([["rest.bandsintown.com/artists/Justice/events", fixture("bandsintown_events.json")]]);
    const src = createBandsintownSource({ appId: "fixture", fetchImpl: f, sleep: noSleep });
    const raws = await src.fetchEventsForArtist(artist);
    expect(raws).toHaveLength(1);
    expect(raws[0].raw.venue.city).toBe("Paris");
  });

  it("non-array payload (BIT error object) → []", async () => {
    const f = fetchStub([["rest.bandsintown.com", { errorMessage: "Not found" }]]);
    const src = createBandsintownSource({ appId: "x", fetchImpl: f, sleep: noSleep });
    expect(await src.fetchEventsForArtist(artist)).toEqual([]);
  });
});

describe("songkick source", () => {
  it("no key → clean no-op", async () => {
    const src = createSongkickSource({ apiKey: undefined, fetchImpl: fetchStub([]), sleep: noSleep });
    expect(src.enabled).toBe(false);
    expect(await src.fetchEventsForArtist(artist)).toEqual([]);
  });

  it("with key → returns Paris-metro events", async () => {
    const f = fetchStub([
      ["/search/artists.json", { resultsPage: { results: { artist: [{ id: 217758, displayName: "Justice" }] } } }],
      ["/artists/217758/calendar.json", fixture("songkick_events.json")],
    ]);
    const src = createSongkickSource({ apiKey: "sk", fetchImpl: f, sleep: noSleep });
    const raws = await src.fetchEventsForArtist(artist);
    expect(raws).toHaveLength(1);
    expect(raws[0].raw.venue.displayName).toBe("Le Trianon");
  });
});

describe("spotify", () => {
  it("getAccessToken exchanges the refresh token (public PKCE client, no secret)", async () => {
    const f = fetchStub([["accounts.spotify.com/api/token", { access_token: "at_1", token_type: "Bearer" }]]);
    const token = await getAccessToken({ clientId: "cid", refreshToken: "rt", fetchImpl: f });
    expect(token).toBe("at_1");
    const { opts } = f.calls[0];
    const body = new URLSearchParams(opts.body);
    expect(body.get("grant_type")).toBe("refresh_token");
    expect(body.get("client_id")).toBe("cid");
    expect(opts.headers.Authorization).toBeUndefined();
  });

  it("listArtists merges followed + top artists, unique by id", async () => {
    const f = fetchStub([
      ["/v1/me/following", fixture("spotify_following.json")],
      ["/v1/me/top/artists", fixture("spotify_top.json")],
    ]);
    const artists = await listArtists({ accessToken: "at", fetchImpl: f });
    expect(artists.map((a) => a.name).sort()).toEqual(["Daft Punk", "Justice", "Vitalic"]);
  });
});
