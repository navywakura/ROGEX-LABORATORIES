import { useLocation } from "react-router-dom";
import { marked } from "marked";
import { basePath } from "../i18n.js";
import { ARTICLES, ARTICLE_LABELS, LATEST_SLUG, articleMediaFromSource } from "../articles.js";
import ArticleCard from "../components/ArticleCard.jsx";
import FeaturedArticle from "../components/FeaturedArticle.jsx";
import NotFound from "./NotFound.jsx";

const COPY = {
  es: { title: "Artículos", intro: "Notas de laboratorio escritas desde el código, los bancos y los informes.", read: "Leer artículo" },
  en: { title: "Articles", intro: "Laboratory notes written from the code, the test banks and the reports.", read: "Read article" },
  ca: { title: "Articles", intro: "Notes de laboratori escrites des del codi, els bancs i els informes.", read: "Llegir article" },
};
const SOURCES = import.meta.glob("../content/**/articles/*.md", { query: "?raw", import: "default", eager: true });

function sourceFor(article, language) {
  return SOURCES[`../content/${language === "es" ? "" : language + "/"}articles/${article.slug}.md`] || "";
}

export default function Articles({ language = "es" }) {
  const location = useLocation();
  const copy = COPY[language];
  const path = basePath(location.pathname);
  const article = ARTICLES.find((entry) => path === `/articulos/${entry.slug}`);

  if (article) {
    const source = sourceFor(article, language);
    return (
      <main className="page">
        <article className="sheet article-sheet">
          {article.slug === LATEST_SLUG && !article.featured && <div className="article-featured-meta"><span className="latest-badge">{ARTICLE_LABELS[language].latest}</span>{article.status && <span>{article.status[language]}</span>}</div>}
          {article.featured && <div className="article-featured-meta"><span className="featured-badge">{ARTICLE_LABELS[language].featured}</span>{article.status && <span>{article.status[language]}</span>}</div>}
          <div className="article-body" dangerouslySetInnerHTML={{ __html: marked.parse(source) }} />
        </article>
      </main>
    );
  }
  if (path !== "/articulos") return <NotFound language={language} />;
  const pinned = ARTICLES.filter((entry) => entry.featured);
  const articles = ARTICLES.filter((entry) => !entry.featured);

  return (
    <main className="page">
      <section className="sheet articles-index">
        <h1>{copy.title}</h1>
        <p className="articles-intro">{copy.intro}</p>
        <div className="articles-pinned">
          {pinned.map((entry) => (
            <FeaturedArticle
              key={entry.slug}
              article={entry}
              language={language}
              pinned
              media={articleMediaFromSource(entry, language, sourceFor(entry, language))}
            />
          ))}
        </div>
        <div className="articles-masonry">
          {articles.map((entry) => (
            <ArticleCard
              key={entry.slug}
              article={entry}
              language={language}
              media={articleMediaFromSource(entry, language, sourceFor(entry, language))}
              readLabel={copy.read}
              latestLabel={entry.slug === LATEST_SLUG ? ARTICLE_LABELS[language].latest : null}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
