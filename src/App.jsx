import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Head from "./components/Head.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Docs from "./pages/Docs.jsx";
import Articles from "./pages/Articles.jsx";
import Product from "./pages/Product.jsx";
import LaFuga from "./pages/LaFuga.jsx";
import Copyright from "./pages/Copyright.jsx";
import Releases from "./pages/Releases.jsx";
import { basePath, languageForPath } from "./i18n.js";

function isDocsHost() {
  if (typeof window === "undefined") return false;
  return ["docs.rxlabs.org", "docs.rogexlaboratories.com"].includes(window.location.hostname);
}

export default function App() {
  const loc = useLocation();
  const docsHost = isDocsHost();
  const language = languageForPath(loc.pathname);
  // "La fuga" is not a page of the site: it is a private channel. The
  // navigation bar and the footer would give the screen away as a web page,
  // so it carries its own exits instead.
  const immersive = (basePath(loc.pathname).replace(/\/$/, "") || "/") === "/lafuga";

  // Client-side navigation keeps the scroll offset; footer links would
  // otherwise open the next page already scrolled to its bottom.
  useEffect(() => {
    if (!loc.hash) window.scrollTo(0, 0);
  }, [loc.pathname, loc.hash]);

  if (docsHost) {
    return (
      <>
        <Head />
        <Nav path={loc.pathname} docsHost language={language} />
        <Routes>
          <Route path="/*" element={<Docs language={language} />} />
        </Routes>
        <Footer language={language} docsHost />
        <Analytics />
      </>
    );
  }

  return (
    <>
      <Head />
      {!immersive && <Nav path={loc.pathname} language={language} />}
      <Routes>
        <Route path="/" element={<Home language="es" />} />
        <Route path="/en" element={<Home language="en" />} />
        <Route path="/ca" element={<Home language="ca" />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/en/home" element={<Navigate to="/en" replace />} />
        <Route path="/ca/home" element={<Navigate to="/ca" replace />} />
        <Route path="/about" element={<About language="es" />} />
        <Route path="/en/about" element={<About language="en" />} />
        <Route path="/ca/about" element={<About language="ca" />} />
        <Route path="/contact" element={<Contact language="es" />} />
        <Route path="/en/contact" element={<Contact language="en" />} />
        <Route path="/ca/contact" element={<Contact language="ca" />} />
        <Route path="/articulos" element={<Articles language="es" />} />
        <Route path="/articulos/:slug" element={<Articles language="es" />} />
        <Route path="/en/articulos" element={<Articles language="en" />} />
        <Route path="/en/articulos/:slug" element={<Articles language="en" />} />
        <Route path="/ca/articulos" element={<Articles language="ca" />} />
        <Route path="/ca/articulos/:slug" element={<Articles language="ca" />} />
        <Route path="/docs/prisma/social" element={<Navigate to="/docs/prisma/resumen" replace />} />
        <Route path="/docs/prisma/overview" element={<Navigate to="/docs/prisma/resumen" replace />} />
        <Route path="/docs/prisma/technical" element={<Navigate to="/docs/prisma/tecnico" replace />} />
        <Route path="/en/docs/prisma/social" element={<Navigate to="/en/docs/prisma/resumen" replace />} />
        <Route path="/en/docs/prisma/overview" element={<Navigate to="/en/docs/prisma/resumen" replace />} />
        <Route path="/en/docs/prisma/technical" element={<Navigate to="/en/docs/prisma/tecnico" replace />} />
        <Route path="/ca/docs/prisma/social" element={<Navigate to="/ca/docs/prisma/resumen" replace />} />
        <Route path="/ca/docs/prisma/overview" element={<Navigate to="/ca/docs/prisma/resumen" replace />} />
        <Route path="/ca/docs/prisma/technical" element={<Navigate to="/ca/docs/prisma/tecnico" replace />} />
        <Route path="/docs/*" element={<Docs language="es" />} />
        <Route path="/en/docs/*" element={<Docs language="en" />} />
        <Route path="/ca/docs/*" element={<Docs language="ca" />} />
        <Route path="/echos" element={<Product slug="echos" language="es" />} />
        <Route path="/en/echos" element={<Product slug="echos" language="en" />} />
        <Route path="/ca/echos" element={<Product slug="echos" language="ca" />} />
        <Route path="/prisma" element={<Product slug="prisma" language="es" />} />
        <Route path="/en/prisma" element={<Product slug="prisma" language="en" />} />
        <Route path="/ca/prisma" element={<Product slug="prisma" language="ca" />} />
        <Route path="/echoai" element={<Product slug="echoai" language="es" />} />
        <Route path="/en/echoai" element={<Product slug="echoai" language="en" />} />
        <Route path="/ca/echoai" element={<Product slug="echoai" language="ca" />} />
        <Route path="/echo" element={<Navigate to="/echos" replace />} />
        <Route path="/en/echo" element={<Navigate to="/en/echos" replace />} />
        <Route path="/ca/echo" element={<Navigate to="/ca/echos" replace />} />
        <Route path="/lafuga" element={<LaFuga language="es" />} />
        <Route path="/en/lafuga" element={<LaFuga language="en" />} />
        <Route path="/ca/lafuga" element={<LaFuga language="ca" />} />
        <Route path="/releases" element={<Releases language="es" />} />
        <Route path="/en/releases" element={<Releases language="en" />} />
        <Route path="/ca/releases" element={<Releases language="ca" />} />
        <Route path="/derechos_de_autor" element={<Copyright language="es" />} />
        <Route path="/en/derechos_de_autor" element={<Copyright language="en" />} />
        <Route path="/ca/derechos_de_autor" element={<Copyright language="ca" />} />
        <Route path="*" element={<NotFound language={language} />} />
      </Routes>
      {!immersive && <Footer language={language} />}
      <Analytics />
    </>
  );
}
