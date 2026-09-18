import { Link } from "react-router-dom";
import { SITE } from "../site.js";
import { basePath, localizedPath } from "../i18n.js";

const WWW = SITE.url.replace(/\/$/, "");

const LABELS = {
  es: { contact: "Contacto", about: "RxLabs®", docs: "Docs", articles: "Artículos" },
  en: { contact: "Contact", about: "RxLabs®", docs: "Docs", articles: "Articles" },
  ca: { contact: "Contacte", about: "RxLabs®", docs: "Docs", articles: "Articles" },
};

export default function Nav({ path, docsHost = false, language = "es" }) {
  const labels = LABELS[language];
  const here = (basePath(path) || "/").replace(/\/$/, "") || "/";
  const local = (to) => localizedPath(to, language);
  const on = (to) => {
    if (docsHost) return to === "/docs";
    if (to === "/") return here === "/";
    return here === to || here.startsWith(`${to}/`);
  };
  const item = (to, label) => {
    const target = local(to);
    const href = `${WWW}${target}`;
    const cls = on(to) ? "is-active" : "";
    if (docsHost || to === "/docs") {
      return (
        <a href={href} className={cls}>
          {label}
        </a>
      );
    }
    return <Link to={target} className={cls}>{label}</Link>;
  };

  const languageItem = (targetLanguage, label) => {
    const target = localizedPath(path, targetLanguage);
    const props = {
      className: `lang-option${language === targetLanguage ? " is-current" : ""}`,
      lang: targetLanguage,
      hrefLang: targetLanguage,
      "aria-label": label,
      "aria-current": language === targetLanguage ? "true" : undefined,
      title: label,
    };
    return docsHost ? <a href={target} {...props}>{targetLanguage.toUpperCase()}</a>
      : <Link to={target} {...props}>{targetLanguage.toUpperCase()}</Link>;
  };

  return (
    <nav className="nav" aria-label="RxLabs">
      <div className="nav-cluster nav-primary">
        {item("/contact", labels.contact)}
        {item("/about", labels.about)}
        {item("/docs", labels.docs)}
        {item("/articulos", labels.articles)}
      </div>
      <div className="nav-cluster nav-products">
        {item("/echos", "echOS")}
        {item("/prisma", "PRISMA")}
        {item("/echoai", "echoAI")}
        {item("/", "Home")}
        <span className="lang-switch" role="group" aria-label={language === "en" ? "Language" : language === "ca" ? "Idioma" : "Idioma"}>
          {languageItem("es", "Español")}
          {languageItem("en", "English")}
          {languageItem("ca", "Català")}
        </span>
      </div>
    </nav>
  );
}
