import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { identityFor } from "../src/identity.js";
import { ARTICLES, articleMediaFromSource } from "../src/articles.js";
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
const source = (slug) => fs.readFileSync(path.join(root, "src", "content", "articles", `${slug}.md`), "utf8");
const featured = ARTICLES.find((a) => a.slug === "echo4-continuidad-dream-a-identidad");
const gui4 = ARTICLES.find((a) => a.slug === "gui4-como-visualizar-las-grabaciones");
const textOnly = ARTICLES.find((a) => a.slug === "echo4-dream-rsi-historia-compartida");
assert.equal(articleMediaFromSource(featured, "es", source(featured.slug)).src, "/media/echoai/brand/echoai-256.png");
assert.equal(articleMediaFromSource(gui4, "es", source(gui4.slug)).src, "/media/gui4/gui4-casos-evidencia-1-poster.jpg");
assert.equal(articleMediaFromSource(textOnly, "es", source(textOnly.slug)), null);

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
for (const prefix of ["", "en/", "ca/"]) {
  const html = fs.readFileSync(path.join(root, "dist", prefix, "articulos", "index.html"), "utf8");
  assert.match(html, /class="articles-pinned"/);
  assert.match(html, /class="articles-masonry"/);
  assert.equal((html.match(/class="featured-badge"/g) || []).length, 1);
  assert.equal((html.match(/class="article-card(?: |")/g) || []).length, ARTICLES.length - 1);
  assert.ok(html.indexOf("featured-story-pinned") < html.indexOf("articles-masonry"));
}
for (const lang of ["es", "en", "ca"]) {
  const file = path.join(root, "public", "raw", lang, "articulos/echo4-continuidad-dream-a-identidad.md");
  assert.match(fs.readFileSync(file, "utf8"), /dream1_green=false/);
}
console.log(`identity: ${checked} route/build checks passed; masonry media extraction; 3 article exports; one pinned article`);
