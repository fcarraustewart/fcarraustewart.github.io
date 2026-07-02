#!/usr/bin/env node
// One-time LOCAL Spotify PKCE bootstrap — run on your machine, never in CI.
//   SPOTIFY_CLIENT_ID=<your app client id> node scripts/auth_bootstrap.mjs
// Opens the browser, completes the PKCE flow on http://127.0.0.1:8888/callback,
// prints the SPOTIFY_REFRESH_TOKEN to paste into GitHub repo secrets.
import { createServer } from "node:http";
import { randomBytes, createHash } from "node:crypto";
import { execFile } from "node:child_process";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const REDIRECT_URI = "http://127.0.0.1:8888/callback";
const SCOPES = "user-follow-read user-top-read";

if (!CLIENT_ID) {
  console.error("Set SPOTIFY_CLIENT_ID first (create the app at https://developer.spotify.com/dashboard,");
  console.error(`add redirect URI ${REDIRECT_URI}, scopes are requested at auth time).`);
  process.exit(1);
}

const b64url = (buf) => buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const verifier = b64url(randomBytes(64));
const challenge = b64url(createHash("sha256").update(verifier).digest());
const state = b64url(randomBytes(16));

const authUrl = new URL("https://accounts.spotify.com/authorize");
authUrl.search = new URLSearchParams({
  response_type: "code",
  client_id: CLIENT_ID,
  scope: SCOPES,
  redirect_uri: REDIRECT_URI,
  state,
  code_challenge_method: "S256",
  code_challenge: challenge,
}).toString();

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:8888`);
  if (url.pathname !== "/callback") {
    res.writeHead(404).end();
    return;
  }
  const err = url.searchParams.get("error");
  const code = url.searchParams.get("code");
  if (err || !code || url.searchParams.get("state") !== state) {
    res.writeHead(400, { "Content-Type": "text/plain" }).end(`Auth failed: ${err ?? "bad state/code"}`);
    console.error(`Auth failed: ${err ?? "bad state/code"}`);
    process.exit(1);
  }
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      code_verifier: verifier,
    }).toString(),
  });
  const json = await tokenRes.json();
  if (!tokenRes.ok || !json.refresh_token) {
    res.writeHead(500, { "Content-Type": "text/plain" }).end("Token exchange failed — see terminal.");
    console.error("Token exchange failed:", JSON.stringify(json, null, 2));
    process.exit(1);
  }
  res.writeHead(200, { "Content-Type": "text/html" }).end("<h2>Done — go back to the terminal.</h2>");
  console.log("\nAdd these as GitHub repo secrets:\n");
  console.log(`  SPOTIFY_CLIENT_ID=${CLIENT_ID}`);
  console.log(`  SPOTIFY_REFRESH_TOKEN=${json.refresh_token}\n`);
  server.close();
  process.exit(0);
});

server.listen(8888, "127.0.0.1", () => {
  console.log("Waiting for Spotify callback on", REDIRECT_URI);
  console.log("If the browser does not open, visit:\n\n" + authUrl.href + "\n");
  execFile(process.platform === "darwin" ? "open" : "xdg-open", [authUrl.href], () => {});
});
