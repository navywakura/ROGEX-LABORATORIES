import { Link } from "react-router-dom";
import { ABOUT_COPY } from "../about-copy.js";
import { localizedPath } from "../i18n.js";

export default function About({ language = "es" }) {
  const copy = ABOUT_COPY[language];
  const product = (slug, name) => (
    <strong>
      <Link to={localizedPath(`/${slug}`, language)}>{name}</Link>
    </strong>
  );
  return (
    <main className="page">
      <article className="sheet about">
        <h1>RxLabs®</h1>
        <p>{copy.intro}</p>
        <p className="about-status">{copy.status}</p>
        <p>{copy.lines}</p>
        <p>
          {product("echos", "echOS")} — {copy.echos}
        </p>
        <p>
          {product("prisma", "PRISMA")} — {copy.prisma}
        </p>
        <p>
          {product("echoai", "echoAI")} — {copy.echoai}
        </p>
        <p className="meta">knightsys@proton.me</p>
      </article>
    </main>
  );
}
