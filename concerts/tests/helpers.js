import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));

export function fixture(name) {
  return JSON.parse(readFileSync(join(here, "fixtures", name), "utf8"));
}

// fetch-shaped mock: routes is [[substring, body], ...]; first substring match wins.
export function fetchStub(routes, { status = 200 } = {}) {
  const calls = [];
  const fn = async (url, opts = {}) => {
    calls.push({ url: String(url), opts });
    for (const [needle, body] of routes) {
      if (String(url).includes(needle)) {
        return {
          ok: status >= 200 && status < 300,
          status,
          json: async () => (typeof body === "function" ? body(url) : body),
          text: async () => JSON.stringify(typeof body === "function" ? body(url) : body),
        };
      }
    }
    return { ok: false, status: 404, json: async () => ({}), text: async () => "not found" };
  };
  fn.calls = calls;
  return fn;
}
