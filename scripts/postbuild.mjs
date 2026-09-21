import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";
import { NOT_FOUND, PAGES, SITE, abs, imageFor, jsonLd, ogType } from "../src/site.js";
import { alternatePaths, localizedPath } from "../src/i18n.js";
import { ABOUT_COPY } from "../src/about-copy.js";
import { productFor } from "../src/products.js";
import { docCatalog } from "../src/docs-catalog.js";
import { ARTICLES, ARTICLE_LABELS } from "../src/articles.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const contentDir = path.join(root, "src", "content");

marked.setOptions({ gfm: true, breaks: false });

function strip(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/g, "")
    .replace(/<meta name="description"[^>]*>/g, "")
    .replace(/<meta name="theme-color"[^>]*>/g, "")
    .replace(/<meta name="msapplication-TileColor"[^>]*>/g, "")
    .replace(/<meta name="color-scheme"[^>]*>/g, "")
    .replace(/<meta name="robots"[^>]*>/g, "")
    .replace(/<meta name="author"[^>]*>/g, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "")
    .replace(/<link rel="canonical"[^>]*>/g, "")
    .replace(/<link rel="alternate"[^>]*>/g, "")
    .replace(/<link rel="image_src"[^>]*>/g, "")
    .replace(/<meta property="og:[^"]+"[^>]*>/g, "")
    .replace(/<meta name="twitter:[^"]+"[^>]*>/g, "");
}

function inject(html, page) {
  const url = abs(page.path);
  const image = imageFor(page);
  const robots = page.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";
  const language = page.lang === "en" ? "en" : page.lang === "ca" ? "ca" : "es";
  const localeByLanguage = { es: SITE.locale, en: SITE.localeAlt, ca: SITE.localeCa };
  const localeAlternates = Object.entries(localeByLanguage)
    .filter(([code]) => code !== language)
    .map(([, locale]) => `    <meta property="og:locale:alternate" content="${locale}" />`)
    .join("\n");
  const alternate = alternatePaths(page.path);
  const markdownHref = markdownSource(page);
  const markdownAlternate = markdownHref
    ? `\n    <link rel="alternate" type="text/markdown" href="${abs(markdownHref)}" />`
    : "";
  html = strip(html);
  const block = `
    <title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}" />
    <meta name="theme-color" content="${SITE.theme}" />
    <meta name="msapplication-TileColor" content="${SITE.theme}" />
    <meta name="color-scheme" content="dark" />
    <meta name="robots" content="${robots}" />
    <meta name="author" content="${esc(SITE.author)}" />
    <script type="application/ld+json">${JSON.stringify(jsonLd(page))}</script>
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="es" href="${abs(alternate.es)}" />
    <link rel="alternate" hreflang="en" href="${abs(alternate.en)}" />
    <link rel="alternate" hreflang="ca" href="${abs(alternate.ca)}" />
    <link rel="alternate" hreflang="x-default" href="${abs(alternate.es)}" />
    <link rel="image_src" href="${image.url}" />
    <meta property="og:type" content="${ogType(page)}" />
    <meta property="og:site_name" content="${esc(SITE.name)}" />
    <meta property="og:locale" content="${localeByLanguage[language]}" />
${localeAlternates}
    <meta property="og:title" content="${esc(page.title)}" />
    <meta property="og:description" content="${esc(page.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image.url}" />
    <meta property="og:image:url" content="${image.url}" />
    <meta property="og:image:secure_url" content="${image.url}" />
    <meta property="og:image:type" content="${image.type}" />
    <meta property="og:image:width" content="${image.width}" />
    <meta property="og:image:height" content="${image.height}" />
    <meta property="og:image:alt" content="${esc(image.alt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(page.title)}" />
    <meta name="twitter:description" content="${esc(page.description)}" />
    <meta name="twitter:image" content="${image.url}" />
    <meta name="twitter:image:alt" content="${esc(image.alt)}" />${markdownAlternate}
${page.datePublished ? `    <meta property="article:published_time" content="${page.datePublished}" />
    <meta property="article:modified_time" content="${page.dateModified || page.datePublished}" />
    <meta property="article:section" content="${esc(page.section || "echoAI")}" />` : ""}
`;

  html = html
    .replace(/<html lang="[^"]*">/, `<html lang="${language}">`)
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta name="description"[^>]*>/, "")
    .replace(/<meta name="theme-color"[^>]*>/, "")
    .replace("</head>", `${block}</head>`);
  return html.replace('<div id="root"></div>', `<div id="root">${staticBody(page)}</div>`);
}

function pageLanguage(page) {
  return page.lang === "en" ? "en" : page.lang === "ca" ? "ca" : "es";
}

function contentPath(page) {
  return page.path.replace(/^\/(?:en|ca)(?=\/|$)/, "");
}

function markdownSource(page) {
  const local = contentPath(page);
  if (local.startsWith("/docs/")) return `/raw/${pageLanguage(page)}/${local.slice(6)}.md`;
  if (local.startsWith("/articulos/")) return `/raw/${pageLanguage(page)}/${local.slice(1)}.md`;
  return null;
}

function markdownFile(page) {
  const local = contentPath(page);
  if (!local.startsWith("/docs/") && !local.startsWith("/articulos/")) return null;
  const isArticle = local.startsWith("/articulos/");
  let slug = local.replace(/^\/(?:docs|articulos)\//, "");
  if (slug === "prisma/resumen") slug = "prisma/overview";
  const language = pageLanguage(page);
  return path.join(contentDir, language === "es" ? "" : language, isArticle ? "articles" : "", `${slug}.md`);
}

function staticBody(page) {
  const language = pageLanguage(page);
  const file = markdownFile(page);
  let body = "";
  if (file && fs.existsSync(file)) {
    body = marked.parse(fs.readFileSync(file, "utf8"));
    const article = ARTICLES.find((entry) => contentPath(page) === `/articulos/${entry.slug}`);
    if (article?.featured) body = `<div class="article-featured-meta"><span class="featured-badge">${ARTICLE_LABELS[language].featured}</span>${article.status ? `<span>${esc(article.status[language])}</span>` : ""}</div>${body}`;
  } else if (page.product) {
    body = productBody(productFor(page.product), language);
  } else if (contentPath(page) === "/contact") {
    body = `<h1>${language === "en" ? "Contact" : language === "ca" ? "Contacte" : "Contacto"}</h1><p><a href="mailto:${SITE.email}">${SITE.email}</a></p><p><a href="${SITE.discord}">discord.gg/rxlabs</a></p>`;
  } else if (page.path.replace(/^\/(?:en|ca)(?=\/|$)/, "") === "/about") {
    const copy = ABOUT_COPY[language];
    body = `<h1>RxLabs®</h1><p>${esc(copy.intro)}</p><p>${esc(copy.status)}</p><p>${esc(copy.lines)}</p><p><strong>echOS</strong> — ${esc(copy.echos)}</p><p><strong>PRISMA</strong> — ${esc(copy.prisma)}</p><p><strong>echoAI</strong> — ${esc(copy.echoai)}</p><p>knightsys@proton.me</p>`;
  } else if (page.path.replace(/^\/(?:en|ca)(?=\/|$)/, "") === "/docs") {
    const docs = PAGES.filter((entry) => entry.lang === language && entry.path.includes("/docs/") && !entry.noindex);
    body = `<h1>${language === "en" ? "Documentation" : language === "ca" ? "Documentació" : "Documentación"}</h1><ul>${docs.map((entry) => `<li><a href="${entry.path}">${esc(entry.title)}</a><p>${esc(entry.description)}</p></li>`).join("")}</ul>`;
  } else if (page.path.replace(/^\/(?:en|ca)(?=\/|$)/, "") === "/articulos") {
    const label = language === "en" ? "Articles" : language === "ca" ? "Articles" : "Artículos";
    const articles = PAGES.filter((entry) => entry.lang === language && entry.article);
    body = `<h1>${label}</h1>${ARTICLES.filter((entry) => entry.featured).map((entry) => featuredBody(entry, language)).join("")}<ul>${articles.filter((entry) => !ARTICLES.some((article) => article.featured && entry.path === localizedPath(`/articulos/${article.slug}`, language))).map((entry) => `<li><a href="${entry.path}">${esc(entry.title)}</a><p>${esc(entry.description)}</p></li>`).join("")}</ul>`;
  } else if ((contentPath(page) || "/") === "/") {
    const article = ARTICLES.find((entry) => entry.featured);
    body = `<h1>RxLabs®</h1>${article ? featuredBody(article, language) : ""}<ul>${["echos", "prisma", "echoai"].map((slug) => `<li><a href="${localizedPath(`/${slug}`, language)}">${esc(productFor(slug).name)}</a></li>`).join("")}</ul>`;
  } else {
    return "";
  }
  return `<main class="page static-page"><div class="docs is-side-hidden"><article class="docs-body static-doc-body">${body}</article></div></main>`;
}

function featuredBody(article, language) {
  const labels = ARTICLE_LABELS[language];
  return `<a class="featured-story" href="${localizedPath(`/articulos/${article.slug}`, language)}"><div class="featured-story-meta"><span class="featured-badge">${labels.featured}</span><time datetime="${article.date}">${article.date}</time>${article.status ? `<span>${esc(article.status[language])}</span>` : ""}</div><div class="featured-story-copy"><h2>${esc(article.title[language])}</h2><p>${esc(article.summary[language])}</p><span class="featured-story-read">${labels.read} ↗</span></div></a>`;
}

function productBody(product, language) {
  const copy = product.copy[language];
  const hero = product.media[0];
  const docs = docCatalog(language).filter((doc) => product.docs.includes(doc.id));
  return [
    `<p>${esc(copy.kicker)}</p>`,
    `<h1>${esc(product.name)}</h1>`,
    `<p>${esc(copy.lead)}</p>`,
    `<figure><img src="${hero.src}" width="${hero.width}" height="${hero.height}" alt="${esc(hero.alt[language])}" /><figcaption>${esc(hero.caption[language])}</figcaption></figure>`,
    `<ul>${copy.facts.map(([value, label]) => `<li><strong>${esc(value)}</strong> — ${esc(label)}</li>`).join("")}</ul>`,
    copy.campaign
      ? `<h2>${esc(copy.campaign.title)}</h2>${copy.campaign.body.map((line) => `<p>${esc(line)}</p>`).join("")}<p><a href="${localizedPath(`/docs/${copy.campaign.doc}`, language)}">${esc(copy.campaign.link)}</a></p>`
      : "",
    ...copy.sections.map((section) => `<h2>${esc(section.title)}</h2>${section.body.map((line) => `<p>${esc(line)}</p>`).join("")}`),
    `<ul>${copy.limits.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>`,
    `<ul>${docs.map((doc) => `<li><a href="${localizedPath(`/docs/${doc.id}`, language)}">${esc(doc.title)}</a></li>`).join("")}</ul>`,
  ].join("");
}

// Width and height are declared by hand in the page data; read the real file
// so a replaced image cannot ship with stale og:image dimensions.
function imageSize(file) {
  const data = fs.readFileSync(file);
  if (data.subarray(1, 4).toString("latin1") === "PNG") {
    return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
  }
  if (data.subarray(0, 3).toString("latin1") === "GIF") {
    return { width: data.readUInt16LE(6), height: data.readUInt16LE(8) };
  }
  if (data[0] === 0xff && data[1] === 0xd8) {
    let i = 2;
    while (i < data.length) {
      if (data[i] !== 0xff) { i += 1; continue; }
      const marker = data[i + 1];
      if (marker >= 0xc0 && marker <= 0xc3) {
        return { width: data.readUInt16BE(i + 7), height: data.readUInt16BE(i + 5) };
      }
      i += 2 + data.readUInt16BE(i + 2);
    }
  }
  return null;
}

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

for (const page of PAGES) {
  const image = imageFor(page);
  const imagePath = path.join(root, "public", new URL(image.url).pathname.replace(/^\//, ""));
  if (!fs.existsSync(imagePath)) {
    throw new Error(`Missing Open Graph image for ${page.path}: ${imagePath}`);
  }
  const size = imageSize(imagePath);
  if (!size || size.width !== image.width || size.height !== image.height) {
    throw new Error(`Open Graph image size mismatch for ${page.path}: declared ${image.width}x${image.height}, file ${size ? `${size.width}x${size.height}` : "unreadable"}`);
  }
  const html = inject(template, page);
  if (page.path === "/") {
    fs.writeFileSync(path.join(dist, "index.html"), html);
    continue;
  }
  const dir = path.join(dist, page.path.replace(/^\//, ""));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

fs.writeFileSync(path.join(dist, "404.html"), inject(template, NOT_FOUND));

console.log(`og: wrote ${PAGES.length} html shells`);
