import { useEffect, useState } from "react";
import { SITE } from "../site.js";

const GUILD = "1548594195416096828";
const WIDGET_JSON = `https://discord.com/api/guilds/${GUILD}/widget.json`;
const WIDGET_FRAME = `https://discord.com/widget?id=${GUILD}&theme=dark`;

const COPY = {
  es: {
    title: "Contacto",
    intro: "Escríbenos para colaborar, investigar con el laboratorio o preguntar por cualquiera de sus líneas. La conversación del día a día está en Discord.",
    mail: "Correo",
    mailNote: "Colaboraciones, prensa e investigación.",
    discordNote: "Comunidad de RxLabs®: avances, preguntas y conversación abierta.",
    join: "Unirse al servidor",
    online: (n) => `${n} en línea ahora`,
    widget: "Widget del servidor de Discord de RxLabs®",
  },
  en: {
    title: "Contact",
    intro: "Write to us to collaborate, to research with the laboratory or to ask about any of its lines. Day-to-day conversation happens on Discord.",
    mail: "Email",
    mailNote: "Collaborations, press and research.",
    discordNote: "The RxLabs® community: progress, questions and open conversation.",
    join: "Join the server",
    online: (n) => `${n} online now`,
    widget: "RxLabs® Discord server widget",
  },
  ca: {
    title: "Contacte",
    intro: "Escriu-nos per col·laborar, investigar amb el laboratori o preguntar per qualsevol de les seves línies. La conversa del dia a dia és a Discord.",
    mail: "Correu",
    mailNote: "Col·laboracions, premsa i recerca.",
    discordNote: "Comunitat de RxLabs®: avenços, preguntes i conversa oberta.",
    join: "Uneix-te al servidor",
    online: (n) => `${n} en línia ara`,
    widget: "Widget del servidor de Discord de RxLabs®",
  },
};

// widget.json answers 403 while the server widget is disabled in Discord.
// The embed is only shown once it answers, so visitors never see Discord's
// own "widget disabled" frame.
function useDiscordWidget() {
  const [widget, setWidget] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch(WIDGET_JSON, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => setWidget(data?.id ? data : null))
      .catch(() => {});
    return () => controller.abort();
  }, []);
  return widget;
}

export default function Contact({ language = "es" }) {
  const copy = COPY[language];
  const widget = useDiscordWidget();

  return (
    <main className="page">
      <article className="sheet contact">
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>

        <div className="contact-grid">
          <section className="contact-card">
            <span className="bench-kicker">{copy.mail}</span>
            <a className="mail" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <p>{copy.mailNote}</p>
          </section>

          <div className="contact-discord">
            <section className="contact-card is-discord">
              <span className="bench-kicker">Discord</span>
              <strong>{widget?.name || "RxLabs®"}</strong>
              <p>{copy.discordNote}</p>
              <p className="contact-invite">discord.gg/rxlabs</p>
              {Number.isFinite(widget?.presence_count) && (
                <p className="contact-online">
                  <i aria-hidden="true" />
                  {copy.online(widget.presence_count)}
                </p>
              )}
              <a className="contact-button" href={SITE.discord} target="_blank" rel="noopener">
                {copy.join} ↗
              </a>
            </section>
            {widget && (
              <div className="discord-widget">
                <iframe
                  src={WIDGET_FRAME}
                  title={copy.widget}
                  width="350"
                  height="500"
                  allowtransparency="true"
                  frameBorder="0"
                  loading="lazy"
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                />
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
