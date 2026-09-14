import { Link, useLocation } from "react-router-dom";
import { marked } from "marked";
import { basePath, localizedPath } from "../i18n.js";
import esArticle from "../content/articles/echo3-a-mitad.md?raw";
import enArticle from "../content/en/articles/echo3-a-mitad.md?raw";
import caArticle from "../content/ca/articles/echo3-a-mitad.md?raw";

const COPY = {
  es: { title: "Artículos", intro: "Notas de laboratorio escritas desde el código, los bancos y los informes.", read: "Leer artículo" },
  en: { title: "Articles", intro: "Laboratory notes written from the code, the test banks and the reports.", read: "Read article" },
  ca: { title: "Articles", intro: "Notes de laboratori escrites des del codi, els bancs i els informes.", read: "Llegir article" },
};

const SOURCE = { es: esArticle, en: enArticle, ca: caArticle };

export default function Articles({ language = "es" }) {
  const location = useLocation();
  const copy = COPY[language];
  const articlePath = localizedPath("/articulos/echo3-a-mitad", language);
  const isArticle = basePath(location.pathname) === "/articulos/echo3-a-mitad";

  if (isArticle) {
    return (
      <main className="page">
        <article className="sheet article-sheet" dangerouslySetInnerHTML={{ __html: marked.parse(SOURCE[language]) }} />
      </main>
    );
  }

  return (
    <main className="page">
      <section className="sheet articles-index">
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
        <Link className="article-card" to={articlePath}>
          <span>14 · 09 · 2026</span>
          <strong>ECHO-3 · 8 / 15</strong>
          <small>{copy.read} →</small>
        </Link>
      </section>
    </main>
  );
}
