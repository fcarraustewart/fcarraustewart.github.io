import { formatParisDate } from "./render.js";

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderDigest(newEvents) {
  const n = newEvents.length;
  const subject = `🎫 ${n} new Paris concert${n === 1 ? "" : "s"} from your Spotify artists`;
  const rows = newEvents
    .map(
      (ev) => `
      <tr>
        <td style="padding:8px 12px;font-weight:600">${esc(ev.artist)}</td>
        <td style="padding:8px 12px;white-space:nowrap">${esc(formatParisDate(ev.date))}</td>
        <td style="padding:8px 12px">${esc(ev.venue)}</td>
        <td style="padding:8px 12px"><a href="${esc(ev.url)}">Tickets</a></td>
        <td style="padding:8px 12px;color:#888;font-size:12px">${esc((ev.sources ?? [ev.source]).join(" + "))}</td>
      </tr>`
    )
    .join("");
  const html = `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,sans-serif;color:#222">
  <h2 style="margin-bottom:4px">Paris Concert Radar</h2>
  <p style="margin-top:0;color:#666">${n} new show${n === 1 ? "" : "s"} announced for artists you follow.</p>
  <table style="border-collapse:collapse;background:#fafafa;border-radius:8px">
    <thead><tr style="text-align:left;color:#888;font-size:12px">
      <th style="padding:8px 12px">Artist</th><th style="padding:8px 12px">Date</th>
      <th style="padding:8px 12px">Venue</th><th style="padding:8px 12px"></th>
      <th style="padding:8px 12px">Found by</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>
  <p style="color:#aaa;font-size:12px">fcarraustewart.github.io/demos — concerts radar</p>
</body></html>`;
  return { subject, html };
}

export async function sendEmail({ apiKey, from, to, subject, html, fetchImpl = fetch }) {
  const res = await fetchImpl("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [to], subject, html }),
  });
  if (!res.ok) {
    throw new Error(`Resend API error: HTTP ${res.status} — ${await res.text()}`);
  }
  return res.json();
}
