import { getJson } from "./sources/source.js";

// Public PKCE client: refresh with client_id only, NO client secret / Basic auth.
export async function getAccessToken({ clientId, refreshToken, fetchImpl = fetch }) {
  const res = await fetchImpl("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
    }).toString(),
  });
  if (!res.ok) throw new Error(`spotify token refresh: HTTP ${res.status} — ${await res.text()}`);
  const json = await res.json();
  if (!json.access_token) throw new Error("spotify token refresh: no access_token in response");
  return json.access_token;
}

// Followed artists (cursor-paged) ∪ top artists, unique by id → [{id, name}].
export async function listArtists({ accessToken, fetchImpl = fetch }) {
  const byId = new Map();
  const get = (url) =>
    fetchImpl(url, { headers: { Authorization: `Bearer ${accessToken}` } }).then((res) => {
      if (!res.ok) throw new Error(`spotify ${url}: HTTP ${res.status}`);
      return res.json();
    });

  let after = null;
  do {
    const url =
      "https://api.spotify.com/v1/me/following?type=artist&limit=50" +
      (after ? `&after=${encodeURIComponent(after)}` : "");
    const json = await get(url);
    for (const a of json?.artists?.items ?? []) byId.set(a.id, { id: a.id, name: a.name });
    after = json?.artists?.cursors?.after ?? null;
  } while (after);

  const top = await get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term");
  for (const a of top?.items ?? []) byId.set(a.id, { id: a.id, name: a.name });

  return [...byId.values()];
}
