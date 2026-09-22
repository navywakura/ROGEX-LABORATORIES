import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { identityFor } from "../src/identity.js";
import { ARTICLES } from "../src/articles.js";
import { PAGES, NOT_FOUND } from "../src/site.js";
import { docsPagePath } from "../src/i18n.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
let checked = 0;
for (const prefix of ["", "/en", "/ca"]) {
  for (const route of ["/echoai", "/echoai/", "/docs/echoai/echo4", "/articulos", ...ARTICLES.map((a) => `/articulos/${a.slug}`)]) {
    assert.ok(identityFor(prefix + route).every((a) => a.href.startsWith("/media/echoai/brand/")), prefix + route);
    checked++;
  }
  for (const route of ["/", "/echos", "/prisma", "/about", "/contact", "/docs", "/docs/prisma/resumen", "/404", "/echoaix", "/articulos-extra"]) {
    assert.equal(identityFor(prefix + route)[0].href, "/favicon.svg", prefix + route);
    checked++;
  }
}
assert.match(identityFor(docsPagePath("/en/echoai/echo4", true))[0].href, /echoai/);
assert.equal(ARTICLES.filter((a) => a.featured).length, 1);
assert.equal(ARTICLES.find((a) => a.featured).slug, "echo4-continuidad-dream-a-identidad");

// Validate the build, not only the routing helper. Covers first request/no JS.
for (const page of [...PAGES, NOT_FOUND]) {
  const htmlPath = page === NOT_FOUND ? "404.html" : page.path === "/" ? "index.html" : `${page.path.slice(1)}/index.html`;
  const html = fs.readFileSync(path.join(root, "dist", htmlPath), "utf8");
  const icons = [...html.matchAll(/<link\s+[^>]*rel="(?:icon|apple-touch-icon)"[^>]*>/g)].map(([tag]) => tag);
  const expected = identityFor(page.path);
  assert.equal(icons.length, expected.length, page.path);
  for (const attrs of expected) {
    assert.ok(icons.some((tag) => Object.entries(attrs).every(([key, value]) => tag.includes(`${key}="${value}"`))), page.path);
    assert.ok(fs.existsSync(path.join(root, "dist", attrs.href)), attrs.href);
  }
  checked++;
}
for (const lang of ["es", "en", "ca"]) {
  const file = path.join(root, "public", "raw", lang, "articulos/echo4-continuidad-dream-a-identidad.md");
  assert.match(fs.readFileSync(file, "utf8"), /dream1_green=false/);
}
console.log(`identity: ${checked} route/build checks passed; 3 article exports; one featured article`);
