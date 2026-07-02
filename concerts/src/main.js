// Orchestrator. CLI: node src/main.js [--dry-run]
//   CONCERTS_MOCK=1 forces the fixture-backed fetch mock (no network, no secrets).
// Exposed as runScan(deps) for tests — all IO is injectable.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { getAccessToken, listArtists } from "./spotify.js";
import { createTicketmasterSource } from "./sources/ticketmaster.js";
import { createBandsintownSource } from "./sources/bandsintown.js";
import { createSongkickSource } from "./sources/songkick.js";
import { normalize, toParisISO } from "./normalize.js";
import { matchArtists } from "./match.js";
import { dedupe } from "./dedupe.js";
import { findNew, updateSeen } from "./diff.js";
import { renderDigest, sendEmail } from "./email.js";
import { buildConcertsData } from "./render.js";
import { createMockFetch } from "./mock.js";
import { defaultSleep } from "./sources/source.js";

const REQUIRED_SECRETS = ["SPOTIFY_CLIENT_ID", "SPOTIFY_REFRESH_TOKEN", "TICKETMASTER_API_KEY"];

export async function runScan({
  env = process.env,
  now = new Date(),
  io,
  log = console.log,
  dryRun = false,
  fetchImpl,
  sendEmailImpl,
  sleep,
} = {}) {
  const mock = env.CONCERTS_MOCK === "1";
  if (mock) {
    // fixtures need no real creds; SONGKICK stays opt-in so the clean-skip path shows
    env = {
      SPOTIFY_CLIENT_ID: "mock",
      SPOTIFY_REFRESH_TOKEN: "mock",
      TICKETMASTER_API_KEY: "mock",
      BANDSINTOWN_APP_ID: "mock",
      ...env,
    };
  }
  if (!mock) {
    const missing = REQUIRED_SECRETS.filter((k) => !env[k]);
    if (missing.length) {
      log(`Concerts scan SKIPPED — missing required secrets: ${missing.join(", ")}. ` +
        "Set them as repo secrets (see concerts/SETUP.md) or run with CONCERTS_MOCK=1.");
      return { skipped: true, missing };
    }
  }
  const f = fetchImpl ?? (mock ? createMockFetch() : fetch);
  const slp = sleep ?? (mock ? async () => {} : defaultSleep);
  if (mock) log("CONCERTS_MOCK=1 — fixture-backed fetch, no network calls");

  const accessToken = await getAccessToken({
    clientId: env.SPOTIFY_CLIENT_ID,
    refreshToken: env.SPOTIFY_REFRESH_TOKEN,
    fetchImpl: f,
  });
  const artists = await listArtists({ accessToken, fetchImpl: f });
  log(`Spotify artists (followed ∪ top): ${artists.length}`);

  const sources = [
    createTicketmasterSource({ apiKey: env.TICKETMASTER_API_KEY, fetchImpl: f, sleep: slp }),
    createBandsintownSource({ appId: env.BANDSINTOWN_APP_ID, fetchImpl: f, sleep: slp }),
    createSongkickSource({ apiKey: env.SONGKICK_API_KEY, fetchImpl: f, sleep: slp }),
  ];

  const raws = [];
  for (const src of sources) {
    if (!src.enabled) {
      log(`source ${src.name}: no key configured — skipped cleanly`);
      continue;
    }
    let found = 0;
    let failed = 0;
    for (const artist of artists) {
      try {
        const r = await src.fetchEventsForArtist(artist);
        raws.push(...r);
        found += r.length;
      } catch (err) {
        failed += 1;
        log(`source ${src.name}: skipped artist "${artist.name}" — ${err.message}`);
      }
    }
    log(`source ${src.name}: ${found} raw events, ${failed} artists skipped`);
  }

  const parisEvents = raws
    .map(normalize)
    .filter(Boolean)
    .filter((ev) => ev.city === "Paris");
  const mine = matchArtists(parisEvents, artists);
  const merged = dedupe(mine);
  const upcoming = merged
    .filter((ev) => new Date(ev.date) >= now)
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));

  const nowIso = toParisISO(now);
  const data = buildConcertsData(upcoming, nowIso);
  const seen = (await io.readSeen()) ?? {};
  const newEvents = findNew(upcoming, seen);
  log(`upcoming Paris events: ${upcoming.length} (${newEvents.length} new)`);

  if (dryRun) {
    log("--dry-run: would write _data/concerts.json:");
    log(JSON.stringify(data, null, 2));
    if (newEvents.length) {
      const digest = renderDigest(newEvents);
      log(`--dry-run: would email "${digest.subject}" to ${env.ALERT_EMAIL ?? "<ALERT_EMAIL unset>"}:`);
      log(digest.html);
    } else {
      log("--dry-run: no new events, no email would be sent");
    }
    return { upcoming, newEvents, data, dryRun: true };
  }

  await io.writeData(data);
  if (newEvents.length) {
    const digest = renderDigest(newEvents);
    const send =
      sendEmailImpl ??
      ((msg) =>
        sendEmail({
          apiKey: env.RESEND_API_KEY,
          from: env.ALERT_FROM || "Concert Radar <onboarding@resend.dev>",
          to: env.ALERT_EMAIL,
          fetchImpl: f,
          ...msg,
        }));
    if (!sendEmailImpl && (!env.RESEND_API_KEY || !env.ALERT_EMAIL)) {
      log("RESEND_API_KEY / ALERT_EMAIL unset — email step skipped (events still recorded)");
    } else {
      await send({ subject: digest.subject, html: digest.html });
      log(`emailed digest: ${digest.subject}`);
    }
  }
  await io.writeSeen(updateSeen(seen, newEvents, nowIso));
  return { upcoming, newEvents, data };
}

// ---- CLI ----
const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, "..", "..");
const SEEN_PATH = join(repoRoot, "concerts", "state", "seen.json");
const DATA_PATH = join(repoRoot, "_data", "concerts.json");

function fileIO() {
  return {
    readSeen: async () => {
      try {
        return JSON.parse(await readFile(SEEN_PATH, "utf8"));
      } catch {
        return {};
      }
    },
    writeSeen: async (data) => {
      await mkdir(dirname(SEEN_PATH), { recursive: true });
      await writeFile(SEEN_PATH, JSON.stringify(data, null, 2) + "\n");
    },
    writeData: async (data) => {
      await mkdir(dirname(DATA_PATH), { recursive: true });
      await writeFile(DATA_PATH, JSON.stringify(data, null, 2) + "\n");
    },
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dryRun = process.argv.includes("--dry-run");
  runScan({ io: fileIO(), dryRun })
    .then((r) => {
      if (r.skipped) process.exit(0);
      console.log(dryRun ? "dry-run complete" : "scan complete");
    })
    .catch((err) => {
      console.error(`scan failed: ${err.stack ?? err}`);
      process.exit(1);
    });
}
