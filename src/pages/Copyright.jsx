import { SITE } from "../site.js";
import { COPYRIGHT, COPYRIGHT_UPDATED } from "../copyright.js";

export default function Copyright({ language = "es" }) {
  const copy = COPYRIGHT[language];

  return (
    <main className="page">
      <article className="sheet rights">
        <h1>{copy.title}</h1>
        <p className="rights-notice">{copy.notice}</p>
        <p>{copy.lead}</p>
        <p className="meta">
          {copy.updatedLabel}: <time dateTime={COPYRIGHT_UPDATED}>{COPYRIGHT_UPDATED}</time>
        </p>

        {copy.sections.map((section) => (
          <section key={section.heading} className="rights-section">
            <h2>{section.heading}</h2>
            {(section.body || []).map((line) => <p key={line}>{line}</p>)}
            {section.list && (
              <ul>
                {section.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
            {(section.after || []).map((line) => <p key={line}>{line}</p>)}
          </section>
        ))}

        <p className="rights-mail">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </article>
    </main>
  );
}
