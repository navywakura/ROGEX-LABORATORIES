import { Link } from "react-router-dom";
import { localizedPath } from "../i18n.js";
import { PRODUCTS, PRODUCT_DATE, productFor } from "../products.js";
import { docCatalog } from "../docs-catalog.js";
import { ARTICLES } from "../articles.js";
import { ECHOAI_BRAND } from "../identity.js";

const COPY = {
  es: {
    video: "Demostración",
    gallery: "Galería",
    limits: "Límites publicados",
    docs: "Documentación",
    articles: "Artículos",
    others: "Otras líneas",
    log: "Registro serie",
    open: "Abrir imagen",
  },
  en: {
    video: "Demonstration",
    gallery: "Gallery",
    limits: "Published limits",
    docs: "Documentation",
    articles: "Articles",
    others: "Other lines",
    log: "Serial log",
    open: "Open image",
  },
  ca: {
    video: "Demostració",
    gallery: "Galeria",
    limits: "Límits publicats",
    docs: "Documentació",
    articles: "Articles",
    others: "Altres línies",
    log: "Registre sèrie",
    open: "Obre la imatge",
  },
};

function Figure({ media, language, ui, hero = false }) {
  return (
    <figure className={`product-figure${hero ? " is-hero" : ""}`}>
      <a href={media.src} target="_blank" rel="noopener" aria-label={`${ui.open}: ${media.alt[language]}`}>
        <img
          src={media.src}
          width={media.width}
          height={media.height}
          alt={media.alt[language]}
          loading={hero ? "eager" : "lazy"}
          decoding="async"
        />
      </a>
      <figcaption>
        {media.caption[language]}
        {media.log && (
          <>
            {" "}
            <a href={media.log}>{ui.log}</a>
          </>
        )}
      </figcaption>
    </figure>
  );
}

export default function Product({ slug, language = "es" }) {
  const product = productFor(slug);
  const copy = product.copy[language];
  const ui = COPY[language];
  const updated = product.updated || PRODUCT_DATE;
  const [hero, ...gallery] = product.media;
  const docs = docCatalog(language).filter((doc) => product.docs.includes(doc.id));
  const articles = ARTICLES.filter((entry) => product.articles.includes(entry.slug));
  const others = PRODUCTS.filter((entry) => entry.slug !== slug);

  return (
    <main className="page">
      <article className="sheet product">
        <header className="product-head">
          <span className="bench-kicker">{copy.kicker}</span>
          {slug === "echoai" && <img className="echoai-agent-mark" src={`${ECHOAI_BRAND}/echoai-256.png`} width="96" height="96" alt="echoAI" decoding="async" />}
          <h1>{product.name}</h1>
          <p className="product-lead">{copy.lead}</p>
          <p className="product-meta">
            <time dateTime={updated}>{updated.split("-").reverse().join(" · ")}</time>
            <span aria-hidden="true">·</span>
            <span>{copy.status}</span>
          </p>
        </header>

        <Figure media={hero} language={language} ui={ui} hero />

        <dl className="product-facts">
          {copy.facts.map(([value, label]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        {copy.campaign && (
          <aside className="product-campaign" aria-labelledby={`${slug}-campaign`}>
            <span className="bench-kicker">{copy.campaign.kicker}</span>
            <h2 id={`${slug}-campaign`}>{copy.campaign.title}</h2>
            {copy.campaign.body.map((line) => <p key={line}>{line}</p>)}
            <p className="product-campaign-status">{copy.campaign.status}</p>
            <Link className="product-campaign-link" to={localizedPath(`/docs/${copy.campaign.doc}`, language)}>
              {copy.campaign.link} →
            </Link>
          </aside>
        )}

        {copy.flow && (
          <pre className="product-flow"><code>{copy.flow}</code></pre>
        )}

        {copy.sections.map((section) => (
          <section key={section.title} className="product-section">
            <h2>{section.title}</h2>
            {section.body.map((line) => <p key={line}>{line}</p>)}
          </section>
        ))}

        {product.video && (
          <section className="product-section">
            <h2>{ui.video}</h2>
            <figure className="echo2-video">
              <video controls preload="metadata" playsInline poster={product.video.poster}>
                <source src={product.video.src} type="video/mp4" />
              </video>
              <figcaption>{product.video.caption[language]}</figcaption>
            </figure>
          </section>
        )}

        {gallery.length > 0 && (
          <section className="product-section">
            <h2>{ui.gallery}</h2>
            <div className="product-gallery">
              {gallery.map((media) => (
                <Figure key={media.src} media={media} language={language} ui={ui} />
              ))}
            </div>
          </section>
        )}

        <section className="product-section product-limits">
          <h2>{ui.limits}</h2>
          <ul>
            {copy.limits.map((line) => <li key={line}>{line}</li>)}
          </ul>
        </section>

        <section className="product-section product-links">
          <div>
            <h2>{ui.docs}</h2>
            <ul>
              {docs.map((doc) => (
                <li key={doc.id}>
                  <Link to={localizedPath(`/docs/${doc.id}`, language)}>{doc.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {articles.length > 0 && (
            <div>
              <h2>{ui.articles}</h2>
              <ul>
                {articles.map((entry) => (
                  <li key={entry.slug}>
                    <Link to={localizedPath(`/articulos/${entry.slug}`, language)}>{entry.title[language]}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <nav className="product-next" aria-label={ui.others}>
          <span className="bench-kicker">{ui.others}</span>
          <div>
            {others.map((entry) => (
              <Link key={entry.slug} to={localizedPath(`/${entry.slug}`, language)}>
                {entry.name} →
              </Link>
            ))}
          </div>
        </nav>
      </article>
    </main>
  );
}
