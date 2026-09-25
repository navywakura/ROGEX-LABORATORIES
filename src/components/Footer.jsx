import { Link } from "react-router-dom";
import { SITE } from "../site.js";
import { localizedPath } from "../i18n.js";
import { LAB_COPY } from "../about-copy.js";
import { docCatalog } from "../docs-catalog.js";
import { ARTICLES } from "../articles.js";
import { PRODUCTS } from "../products.js";

const WWW = SITE.url.replace(/\/$/, "");

const COPY = {
  es: {
    map: "Mapa del sitio",
    home: "Inicio",
    about: "Qué es RxLabs®",
    contact: "Contacto",
    docs: "Documentación",
    articles: "Artículos",
    allArticles: "Todos los artículos",
    releases: "Releases (descargas)",
    overview: "Presentación",
    soon: "Próximamente",
    futureProjects: "Futuros proyectos",
    futureResearch: "Futuras investigaciones",
    locked: "Bloqueado: se abrirá más adelante",
    story: "RxLabs S.T.",
    fuga: "La fuga",
    rights: "Derechos de autor",
  },
  en: {
    map: "Site map",
    home: "Home",
    about: "About RxLabs®",
    contact: "Contact",
    docs: "Documentation",
    articles: "Articles",
    allArticles: "All articles",
    releases: "Releases (downloads)",
    overview: "Introduction",
    soon: "Coming later",
    futureProjects: "Future projects",
    futureResearch: "Future research",
    locked: "Locked: it will open later",
    story: "RxLabs S.T.",
    fuga: "The escape",
    rights: "Copyright",
  },
  ca: {
    map: "Mapa del lloc",
    home: "Inici",
    about: "Què és RxLabs®",
    contact: "Contacte",
    docs: "Documentació",
    articles: "Articles",
    allArticles: "Tots els articles",
    releases: "Releases (descàrregues)",
    overview: "Presentació",
    soon: "Més endavant",
    futureProjects: "Futurs projectes",
    futureResearch: "Futures investigacions",
    locked: "Bloquejat: s'obrirà més endavant",
    story: "RxLabs S.T.",
    fuga: "La fuga",
    rights: "Drets d'autor",
  },
};

function Lock() {
  return (
    <svg className="footer-lock" viewBox="0 0 16 16" width="11" height="11" aria-hidden="true">
      <rect x="3" y="7" width="10" height="7" rx="1" />
      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
    </svg>
  );
}

export default function Footer({ language = "es", docsHost = false }) {
  const ui = COPY[language];
  const lab = LAB_COPY[language];
  const docs = docCatalog(language);
  const labDocs = docs.filter((doc) => doc.groupKey === "lab");

  // The docs host only serves documentation, so every footer link points
  // back to the main site there, like the navigation bar does.
  const go = (to, label) => {
    const target = localizedPath(to, language);
    if (docsHost) return <a href={`${WWW}${target}`}>{label}</a>;
    return <Link to={target}>{label}</Link>;
  };

  const column = (title, items) => (
    <div className="footer-col">
      <h2>{title}</h2>
      <ul>
        {items.map(([key, node]) => <li key={key}>{node}</li>)}
      </ul>
    </div>
  );

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>RxLabs®</strong>
          <p>{lab.mission}</p>
          <p className="footer-nonprofit">{lab.nonprofit}</p>
          <p>{lab.future}</p>
        </div>

        <nav className="footer-map" aria-label={ui.map}>
          {column("RxLabs®", [
            ["home", go("/", ui.home)],
            ["about", go("/about", ui.about)],
            ["contact", go("/contact", ui.contact)],
            ["docs", go("/docs", ui.docs)],
            ["releases", go("/echoai", ui.releases)],
            ...labDocs.map((doc) => [doc.id, go(`/docs/${doc.id}`, doc.title)]),
            ["discord", <a href={SITE.discord} target="_blank" rel="noopener">Discord ↗</a>],
          ])}
          {PRODUCTS.map((product) => (
            <div key={product.slug} className="footer-col">
              <h2>{product.name}</h2>
              <ul>
                <li>{go(`/${product.slug}`, ui.overview)}</li>
                {docs
                  .filter((doc) => doc.groupKey === product.slug)
                  .map((doc) => <li key={doc.id}>{go(`/docs/${doc.id}`, doc.title)}</li>)}
              </ul>
            </div>
          ))}
          {column(ui.articles, [
            ["all", go("/articulos", ui.allArticles)],
            ...ARTICLES.map((entry) => [entry.slug, go(`/articulos/${entry.slug}`, entry.title[language])]),
          ])}
          {column(ui.story, [
            ["fuga", go("/lafuga", ui.fuga)],
            ["rights", go("/derechos_de_autor", ui.rights)],
          ])}
          <div className="footer-col">
            <h2>{ui.soon}</h2>
            <ul>
              <li>
                <a role="link" aria-disabled="true" className="footer-locked" title={ui.locked}>
                  <Lock />
                  {ui.futureProjects}
                </a>
              </li>
              <li>
                <a role="link" aria-disabled="true" className="footer-locked" title={ui.locked}>
                  <Lock />
                  {ui.futureResearch}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="footer-base">
          <span>© 2026 RxLabs® · Girona</span>
          {go("/derechos_de_autor", ui.rights)}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={SITE.discord} target="_blank" rel="noopener">discord.gg/rxlabs</a>
          <a href={language === "es" ? "/llms.txt" : `/${language}/llms.txt`}>llms.txt</a>
          <a href="/sitemap.xml">sitemap.xml</a>
        </div>
      </div>
    </footer>
  );
}
