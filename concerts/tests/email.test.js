import { describe, it, expect } from "vitest";
import { renderDigest, sendEmail } from "../src/email.js";
import { fetchStub } from "./helpers.js";

const events = [
  {
    artist: "Justice",
    date: "2027-03-12T20:00:00+01:00",
    venue: "Accor Arena",
    city: "Paris",
    url: "https://www.ticketmaster.fr/x",
    source: "ticketmaster",
    sources: ["ticketmaster", "bandsintown"],
    key: "justice|2027-03-12|accor-arena",
  },
];

describe("renderDigest", () => {
  it("renders artist, venue, human date, tickets link and sources", () => {
    const { subject, html } = renderDigest(events);
    expect(subject).toContain("1 new Paris concert");
    expect(html).toContain("Justice");
    expect(html).toContain("Accor Arena");
    expect(html).toContain("https://www.ticketmaster.fr/x");
    expect(html).toContain("ticketmaster");
    expect(html).toContain("2027");
  });

  it("escapes HTML in event fields", () => {
    const { html } = renderDigest([{ ...events[0], artist: "<script>x</script>" }]);
    expect(html).not.toContain("<script>x</script>");
    expect(html).toContain("&lt;script&gt;");
  });
});

describe("sendEmail", () => {
  it("POSTs the digest to the Resend API with auth header", async () => {
    const f = fetchStub([["api.resend.com/emails", { id: "re_123" }]]);
    await sendEmail({
      apiKey: "re_test",
      from: "radar@example.com",
      to: "alerts@example.com",
      subject: "s",
      html: "<p>x</p>",
      fetchImpl: f,
    });
    expect(f.calls).toHaveLength(1);
    const { url, opts } = f.calls[0];
    expect(url).toContain("api.resend.com/emails");
    expect(opts.method).toBe("POST");
    expect(opts.headers.Authorization).toBe("Bearer re_test");
    const body = JSON.parse(opts.body);
    expect(body.to).toEqual(["alerts@example.com"]);
    expect(body.subject).toBe("s");
  });

  it("throws with the API error text on non-2xx", async () => {
    const f = fetchStub([["api.resend.com", { message: "nope" }]], { status: 422 });
    await expect(
      sendEmail({ apiKey: "k", from: "a@b.c", to: "d@e.f", subject: "s", html: "x", fetchImpl: f })
    ).rejects.toThrow(/422/);
  });
});
