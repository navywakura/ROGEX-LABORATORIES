import { ABOUT_COPY } from "../about-copy.js";

export default function About({ language = "es" }) {
  const copy = ABOUT_COPY[language];
  return (
    <main className="page">
      <article className="sheet">
        <h1>RxLabs®</h1>
        <p>
          {copy.intro}
        </p>
        <p>
          {copy.lines}
        </p>
        <p>
          <strong>echOS</strong> — {copy.echos}
        </p>
        <p>
          <strong>PRISMA</strong> — {copy.prisma}
        </p>
        <p>
          <strong>echoAI</strong> — {copy.echoai}
        </p>
        <p className="meta">knightsys@proton.me</p>
      </article>
    </main>
  );
}
