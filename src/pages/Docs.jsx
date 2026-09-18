import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { marked } from "marked";
import EchoResults from "./EchoResults.jsx";
import { docCatalog } from "../docs-catalog.js";

marked.setOptions({ gfm: true, breaks: false });

const SOURCES = import.meta.glob(
  ["../content/{lab,echoai,echos,prisma}/*.md", "../content/{en,ca}/{lab,echoai,echos,prisma}/*.md"],
  { query: "?raw", import: "default", eager: true },
);
const FILES = { "prisma/resumen": "prisma/overview" };

function catalogFor(language) {
  const prefix = language === "es" ? "" : `${language}/`;
  return docCatalog(language).map((doc) => ({
    ...doc,
    src: SOURCES[`../content/${prefix}${FILES[doc.id] || doc.id}.md`] || "",
  }));
}

const CATALOGS = { es: catalogFor("es"), en: catalogFor("en"), ca: catalogFor("ca") };

function groups(catalog) {
  const out = [];
  for (const d of catalog) {
    const last = out[out.length - 1];
    if (!last || last.name !== d.group) out.push({ name: d.group, items: [d] });
    else last.items.push(d);
  }
  return out;
}

export default function Docs({ language = "es" }) {
  const loc = useLocation();
  const nav = useNavigate();
  const [sideOpen, setSideOpen] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(min-width: 861px)").matches;
  });
  const docsHost = typeof window !== "undefined"
    && ["docs.rxlabs.org", "docs.rogexlaboratories.com"].includes(window.location.hostname);
  const catalog = CATALOGS[language] || CATALOGS.es;

  const slug = useMemo(() => {
    let p = loc.pathname.replace(/\/+$/, "");
    p = p.replace(/^\/(?:en|ca)(?=\/|$)/, "");
    if (!docsHost) p = p.replace(/^\/docs/, "");
    p = p.replace(/^\//, "");
    const alias = {
      "prisma/social": "prisma/resumen",
      "prisma/overview": "prisma/resumen",
      "prisma/technical": "prisma/tecnico",
    };
    if (alias[p]) p = alias[p];
    return p || catalog[0].id;
  }, [loc.pathname, docsHost, catalog]);

  const doc = catalog.find((d) => d.id === slug) || catalog[0];
  const html = useMemo(() => marked.parse(doc.src || ""), [doc]);

  const open = (id) => {
    const prefix = language === "es" ? "" : `/${language}`;
    nav(docsHost ? `${prefix}/${id}` : `${prefix}/docs/${id}`);
    if (typeof window !== "undefined"
      && window.matchMedia("(max-width: 860px)").matches) {
      setSideOpen(false);
    }
  };

  return (
    <main className="page">
      <div className={`docs${sideOpen ? "" : " is-side-hidden"}`}>
        <div className="docs-toolbar">
          <button
            type="button"
            className="docs-toggle"
            aria-controls="docs-index"
            aria-expanded={sideOpen}
            onClick={() => setSideOpen((value) => !value)}
          >
            {sideOpen
              ? language === "en" ? "Hide index" : language === "ca" ? "Amaga l'índex" : "Ocultar índice"
              : language === "en" ? "Show index" : language === "ca" ? "Mostra l'índex" : "Mostrar índice"}
          </button>
        </div>
        <aside id="docs-index" className="docs-side" hidden={!sideOpen}>
          {groups(catalog).map((g) => (
            <div key={g.name}>
              <h2>{g.name}</h2>
              {g.items.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className={d.id === doc.id ? "is-on" : ""}
                  onClick={() => open(d.id)}
                >
                  {d.title}
                </button>
              ))}
            </div>
          ))}
        </aside>
        {doc.id === "echoai/resultados" ? (
          <EchoResults language={language} />
        ) : (
          <article
            className="docs-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </main>
  );
}
