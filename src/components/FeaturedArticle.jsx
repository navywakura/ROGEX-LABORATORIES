import { Link } from "react-router-dom";
import { ARTICLE_LABELS } from "../articles.js";
import { localizedPath } from "../i18n.js";

export default function FeaturedArticle({ article, language = "es", home = false }) {
  if (!article) return null;
  const labels = ARTICLE_LABELS[language];
  return (
    <Link className={`featured-story${home ? " featured-story-home" : ""}`} to={localizedPath(`/articulos/${article.slug}`, language)}>
      <div className="featured-story-meta">
        <span className="featured-badge">{labels.featured}</span>
        <time dateTime={article.date}>{article.date.split("-").reverse().join(" · ")}</time>
        {article.status && <span>{article.status[language]}</span>}
      </div>
      <div className="featured-story-copy">
        <h2>{article.title[language]}</h2>
        <p>{article.summary[language]}</p>
        <span className="featured-story-read">{labels.read} <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
