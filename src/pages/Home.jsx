import Carousel from "../components/Carousel.jsx";
import FeaturedArticle from "../components/FeaturedArticle.jsx";
import { ARTICLES } from "../articles.js";
import { localizedPath } from "../i18n.js";

const ECHOS = [
  "/media/echos3/00-chooser.png",
  "/media/echos3/08-robot.png",
  "/media/echos3/12-px4.png",
];

const PRISMA = [
  "/media/prisma/01.png",
  "/media/prisma/02.png",
  "/media/prisma/03.png",
];

export default function Home({ language = "es" }) {
  return (
    <main className="home">
      <FeaturedArticle article={ARTICLES.find((entry) => entry.featured)} language={language} home />
      <Carousel slides={ECHOS} label="echOS" to={localizedPath("/echos", language)} />
      <Carousel slides={PRISMA} label="PRISMA" to={localizedPath("/prisma", language)} />
      <Carousel gif="/media/echoai/board.gif" label="echoAI" to={localizedPath("/echoai", language)} />
    </main>
  );
}
