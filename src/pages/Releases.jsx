import { marked } from "marked";

// One Markdown page per language: downloads, checksums and the install guide.
const SOURCES = import.meta.glob("../content/**/releases/index.md", { query: "?raw", import: "default", eager: true });

function sourceFor(language) {
  return SOURCES[`../content/${language === "es" ? "" : language + "/"}releases/index.md`] || "";
}

export default function Releases({ language = "es" }) {
  return (
    <main className="page">
      <article className="sheet article-sheet releases">
        <div className="article-body" dangerouslySetInnerHTML={{ __html: marked.parse(sourceFor(language)) }} />
      </article>
    </main>
  );
}
