import { Link } from "react-router-dom";
import { ARTICLE_LABELS } from "../articles.js";
import { localizedPath } from "../i18n.js";

export default function FeaturedArticle({ article, language = "es", home = false, pinned = false, media = null }) {
  if (!article) return null;
  const labels = ARTICLE_LABELS[language];
  return (
    <Link className={`featured-story${home ? " featured-story-home" : ""}${pinned ? " featured-story-pinned" : ""}`} to={localizedPath(`/articulos/${article.slug}`, language)}>
      {media && (
        <span className="featured-story-media">
          <img src={media.src} width={media.width} height={media.height} alt={media.alt} decoding="async" fetchPriority="high" />
        </span>
      )}
      <div className="featured-story-content">
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
      </div>
    </Link>
  );
}
