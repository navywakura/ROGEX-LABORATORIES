import { Link, useLocation } from "react-router-dom";
import { marked } from "marked";
import { basePath, localizedPath } from "../i18n.js";
import { ARTICLES, ARTICLE_LABELS } from "../articles.js";
import FeaturedArticle from "../components/FeaturedArticle.jsx";
import NotFound from "./NotFound.jsx";

const COPY = {
  es: { title: "Artículos", intro: "Notas de laboratorio escritas desde el código, los bancos y los informes.", read: "Leer artículo" },
  en: { title: "Articles", intro: "Laboratory notes written from the code, the test banks and the reports.", read: "Read article" },
  ca: { title: "Articles", intro: "Notes de laboratori escrites des del codi, els bancs i els informes.", read: "Llegir article" },
};
const SOURCES = import.meta.glob("../content/**/articles/*.md", { query: "?raw", import: "default", eager: true });

export default function Articles({ language = "es" }) {
  const location = useLocation();
  const copy = COPY[language];
  const path = basePath(location.pathname);
  const article = ARTICLES.find((entry) => path === `/articulos/${entry.slug}`);

  if (article) {
    const source = SOURCES[`../content/${language === "es" ? "" : language + "/"}articles/${article.slug}.md`];
    return (
      <main className="page">
        <article className="sheet article-sheet">
          {article.featured && <div className="article-featured-meta"><span className="featured-badge">{ARTICLE_LABELS[language].featured}</span>{article.status && <span>{article.status[language]}</span>}</div>}
          <div className="article-body" dangerouslySetInnerHTML={{ __html: marked.parse(source) }} />
        </article>
      </main>
    );
  }
  if (path !== "/articulos") return <NotFound language={language} />;

  return (
    <main className="page">
      <section className="sheet articles-index">
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
        {ARTICLES.map((entry) => (
          entry.featured ? <FeaturedArticle key={entry.slug} article={entry} language={language} /> :
          <Link key={entry.slug} className="article-card" to={localizedPath(`/articulos/${entry.slug}`, language)}>
            <time dateTime={entry.date}>{entry.date.split("-").reverse().join(" · ")}</time>
            <strong>{entry.title[language]}</strong>
            <p>{entry.summary[language]}</p>
            <small>{copy.read} →</small>
          </Link>
        ))}
      </section>
    </main>
  );
}
