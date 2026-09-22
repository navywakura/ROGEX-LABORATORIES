import { Link } from "react-router-dom";
import { localizedPath } from "../i18n.js";

export default function ArticleCard({ article, language = "es", media, readLabel }) {
  return (
    <Link className={`article-card${media ? " article-card-has-media" : ""}`} to={localizedPath(`/articulos/${article.slug}`, language)}>
      {media && (
        <span className="article-card-media">
          <img
            src={media.src}
            width={media.width}
            height={media.height}
            alt={media.alt}
            loading="lazy"
            decoding="async"
          />
        </span>
      )}
      <div className="article-card-copy">
        <time dateTime={article.date}>{article.date.split("-").reverse().join(" · ")}</time>
        <strong>{article.title[language]}</strong>
        <p>{article.summary[language]}</p>
        <small>{readLabel} <span aria-hidden="true">→</span></small>
      </div>
    </Link>
  );
}
