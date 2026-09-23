import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { localizedPath } from "../i18n.js";
import { Channel } from "../lafuga-audio.js";
import { CLOSING, COVER, INTRUSIONS, script } from "../lafuga-script.js";

const UI = {
  es: {
    channel: "canal_privado",
    peer: "K",
    boot: [
      "estableciendo sesión…",
      "cifrado: desconocido",
      "par: K — origen no verificable",
      "este canal no guarda registro.",
    ],
    warn: "Contiene sonido. Se lee mejor con auriculares, a oscuras y sin nadie cerca.",
    open: "abrir_canal",
    plain: "leer sin sesión",
    typing: "K está escribiendo…",
    mute: "silencio",
    unmute: "sonido",
    exit: "cerrar canal",
    away: "K te está esperando",
    ended: "la sesión terminó.",
    disconnected: "K se desconectó.",
    again: "abrir de nuevo",
    rights: "derechos de autor",
    home: "RxLabs®",
    live: "en línea",
    offline: "desconectado",
    reading: "transcripción completa",
  },
  en: {
    channel: "private_channel",
    peer: "K",
    boot: [
      "establishing session…",
      "encryption: unknown",
      "peer: K — origin unverifiable",
      "this channel keeps no log.",
    ],
    warn: "Contains sound. Best read with headphones, in the dark, with nobody near you.",
    open: "open_channel",
    plain: "read without the session",
    typing: "K is typing…",
    mute: "mute",
    unmute: "sound",
    exit: "close channel",
    away: "K is waiting for you",
    ended: "the session ended.",
    disconnected: "K disconnected.",
    again: "open it again",
    rights: "copyright",
    home: "RxLabs®",
    live: "online",
    offline: "disconnected",
    reading: "full transcript",
  },
  ca: {
    channel: "canal_privat",
    peer: "K",
    boot: [
      "establint sessió…",
      "xifratge: desconegut",
      "parell: K — origen no verificable",
      "aquest canal no desa cap registre.",
    ],
    warn: "Conté so. Es llegeix millor amb auriculars, a les fosques i sense ningú a prop.",
    open: "obrir_canal",
    plain: "llegir sense sessió",
    typing: "K està escrivint…",
    mute: "silenci",
    unmute: "so",
    exit: "tancar canal",
    away: "K t'està esperant",
    ended: "la sessió s'ha acabat.",
    disconnected: "K s'ha desconnectat.",
    again: "obrir de nou",
    rights: "drets d'autor",
    home: "RxLabs®",
    live: "en línia",
    offline: "desconnectat",
    reading: "transcripció completa",
  },
};

// K types at a human speed: long lines take longer, but nothing waits
// forever and nothing arrives instantly.
function typingTime(text, shout) {
  const base = shout ? 14 : 26;
  return Math.min(2600, Math.max(shout ? 320 : 620, text.length * base));
}

function gapAfter(line) {
  if (line.fx === "shout") return 180;
  return 340 + Math.min(900, line.text.length * 6);
}

export default function LaFuga({ language = "es" }) {
  const ui = UI[language];
  const cover = COVER[language];
  const closing = CLOSING[language];
  const blocks = useMemo(() => script(language), [language]);

  const [phase, setPhase] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return "boot";
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "plain" : "boot";
  });
  const [feed, setFeed] = useState([]);
  const [typing, setTyping] = useState(false);
  const [phantom, setPhantom] = useState(false);
  const [gesture, setGesture] = useState(null);
  const [muted, setMuted] = useState(false);
  const [glitch, setGlitch] = useState(false);

  const channelRef = useRef(null);
  const cancelRef = useRef({ cancelled: false });
  const speedRef = useRef(1);
  const awayRef = useRef(0);
  const stickRef = useRef(true);
  const bottomRef = useRef(null);
  const gestureRef = useRef(null);

  const audio = () => channelRef.current;

  // Every pause is measured with requestAnimationFrame, which the browser
  // stops while the tab is hidden. Leaving the page really does freeze the
  // conversation, so K is telling the truth when it says it noticed.
  const wait = useCallback((ms) => {
    return new Promise((resolve) => {
      let progress = 0;
      let last = performance.now();
      const step = (now) => {
        if (cancelRef.current.cancelled) return resolve();
        progress += Math.min(now - last, 120) * speedRef.current;
        last = now;
        if (progress >= ms) return resolve();
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, []);

  const push = useCallback((entry) => {
    setFeed((current) => [...current, { key: `${current.length}-${entry.id || entry.kind}`, ...entry }]);
  }, []);

  // Scrolling down tells the session the reader is ahead of it, so the
  // current pause shortens instead of being skipped: K keeps its rhythm.
  useEffect(() => {
    if (phase !== "live") return undefined;
    let timer = 0;
    const hurry = () => {
      speedRef.current = 4;
      clearTimeout(timer);
      timer = setTimeout(() => { speedRef.current = 1; }, 700);
    };
    const onWheel = (event) => { if (event.deltaY > 0) hurry(); };
    const onKey = (event) => {
      if ([" ", "ArrowDown", "PageDown", "End"].includes(event.key)) hurry();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchmove", hurry, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      speedRef.current = 1;
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", hurry);
      window.removeEventListener("keydown", onKey);
    };
  }, [phase]);

  // The reader decides whether the view follows K. Scrolling up to reread
  // stops the feed from dragging the viewport back down.
  useEffect(() => {
    const onScroll = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
      stickRef.current = distance < 140;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (stickRef.current) bottomRef.current?.scrollIntoView({ block: "end" });
  }, [feed, typing, gesture]);

  // What K notices: the title of the tab changes while the reader is away,
  // and the absence is counted for the line that claims to have seen it.
  useEffect(() => {
    if (phase !== "live") return undefined;
    const title = document.title;
    const onVisibility = () => {
      if (document.hidden) {
        awayRef.current += 1;
        document.title = ui.away;
      } else {
        document.title = title;
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      document.title = title;
    };
  }, [phase, ui.away]);

  // A typing indicator that leads to no message, for a reader who has gone
  // quiet. It is the cheapest thing on the page and the one that lands.
  useEffect(() => {
    if (phase !== "live") return undefined;
    let idle = 0;
    let show = 0;
    const arm = () => {
      clearTimeout(idle);
      idle = setTimeout(() => {
        setPhantom(true);
        show = setTimeout(() => setPhantom(false), 3600);
      }, 24000);
    };
    const events = ["mousemove", "wheel", "keydown", "touchstart", "click"];
    for (const name of events) window.addEventListener(name, arm, { passive: true });
    arm();
    return () => {
      clearTimeout(idle);
      clearTimeout(show);
      setPhantom(false);
      for (const name of events) window.removeEventListener(name, arm);
    };
  }, [phase]);

  const awaitGesture = useCallback(async (copy) => {
    const answered = await new Promise((resolve) => {
      gestureRef.current = resolve;
      setGesture(copy);
      setTimeout(() => {
        if (gestureRef.current === resolve) {
          gestureRef.current = null;
          resolve(false);
        }
      }, 14000);
    });
    setGesture(null);
    gestureRef.current = null;
    if (answered) {
      audio()?.send();
      push({ kind: "self", text: copy.sent });
      await wait(900);
    } else {
      await wait(1600);
      push({ kind: "sys", text: copy.refuse });
      await wait(900);
    }
  }, [push, wait]);

  const run = useCallback(async (token) => {
    for (const block of blocks) {
      if (token.cancelled) return;
      push({ kind: "time", time: block.time, speaker: block.speaker });
      audio()?.notify();
      await wait(1500);
      for (const line of block.lines) {
        if (token.cancelled) return;
        const shout = line.fx === "shout";

        if (line.fx === "gesture") {
          setTyping(true);
          await wait(typingTime(line.text, false));
          setTyping(false);
          push({ kind: "msg", speaker: block.speaker, text: line.text, fx: line.fx });
          audio()?.receive();
          await awaitGesture(INTRUSIONS.gesture[language]);
          continue;
        }

        if (line.fx === "seen" && awayRef.current > 0) {
          for (const extra of INTRUSIONS.seen[language]) {
            if (token.cancelled) return;
            setTyping(true);
            await wait(typingTime(extra, false));
            setTyping(false);
            push({ kind: "msg", speaker: block.speaker, text: extra, fx: "seen" });
            audio()?.receive();
            await wait(500);
          }
        }

        setTyping(true);
        await wait(typingTime(line.text, shout));
        setTyping(false);
        push({ kind: "msg", speaker: block.speaker, text: line.text, fx: line.fx });

        if (line.fx === "static") {
          audio()?.static_(1.1);
          setGlitch(true);
        } else if (shout) {
          audio()?.shout();
        } else {
          audio()?.receive();
        }

        if (line.fx === "glitch") {
          audio()?.static_(0.35);
          setGlitch(true);
          setTimeout(() => setGlitch(false), 700);
        }

        await wait(gapAfter(line) + (line.pause || 0));
      }
    }
    if (!token.cancelled) {
      await wait(2400);
      setGlitch(false);
      setPhase("ended");
    }
  }, [awaitGesture, blocks, language, push, wait]);

  const open = () => {
    cancelRef.current.cancelled = true;
    channelRef.current?.close();
    channelRef.current = new Channel();
    channelRef.current.setMuted(muted);
    channelRef.current.start();
    setFeed([]);
    setPhase("live");
  };

  useEffect(() => {
    if (phase !== "live") return undefined;
    const token = { cancelled: false };
    cancelRef.current = token;
    run(token);
    return () => {
      token.cancelled = true;
    };
  }, [phase, run]);

  useEffect(() => () => {
    cancelRef.current.cancelled = true;
    channelRef.current?.close();
  }, []);

  const toggleMute = () => {
    setMuted((current) => {
      channelRef.current?.setMuted(!current);
      return !current;
    });
  };

  const toPlain = () => {
    cancelRef.current.cancelled = true;
    channelRef.current?.close();
    channelRef.current = null;
    setPhase("plain");
  };

  const close = () => {
    cancelRef.current.cancelled = true;
    channelRef.current?.close();
    channelRef.current = null;
    setPhase("ended");
  };

  const languageLinks = (
    <span className="fuga-langs">
      {["es", "en", "ca"].map((code) => (
        <Link
          key={code}
          to={localizedPath("/lafuga", code)}
          className={code === language ? "is-current" : ""}
          hrefLang={code}
        >
          {code}
        </Link>
      ))}
    </span>
  );

  const rights = (
    <Link className="fuga-rights" to={localizedPath("/derechos_de_autor", language)}>
      © RxLabs S.T. — {ui.rights}
    </Link>
  );

  if (phase === "plain") {
    return (
      <main className={`fuga fuga-plain`}>
        <header className="fuga-bar">
          <span className="fuga-channel">{ui.channel}</span>
          {languageLinks}
        </header>
        <div className="fuga-sheet">
          <h1>{cover.title}</h1>
          <p className="fuga-sub">{cover.subtitle}</p>
          <p className="fuga-lead">{cover.lead}</p>
          <p className="fuga-note">{cover.note} · {cover.author}</p>
          <p className="fuga-note">{ui.reading}</p>
          <button type="button" className="fuga-quiet" onClick={open}>{ui.open}</button>
          {blocks.map((block) => (
            <section key={block.id} className="fuga-plain-block">
              <h2>{block.speaker} — {block.time}</h2>
              {block.lines.map((line) => <p key={line.id}>{line.text}</p>)}
            </section>
          ))}
          <p className="fuga-end">{closing.end}</p>
          <p className="fuga-note">{closing.book}</p>
          <p className="fuga-note">{closing.author}</p>
          {rights}
          <Link className="fuga-exit" to={localizedPath("/", language)}>{ui.home}</Link>
        </div>
      </main>
    );
  }

  if (phase === "boot") {
    return (
      <main className="fuga fuga-boot">
        <header className="fuga-bar">
          <span className="fuga-channel">{ui.channel}</span>
          {languageLinks}
        </header>
        <div className="fuga-boot-inner">
          <h1 className="fuga-title">{cover.title}</h1>
          <p className="fuga-sub">{cover.subtitle}</p>
          <p className="fuga-lead">{cover.lead}</p>
          <ol className="fuga-boot-log">
            {ui.boot.map((line, index) => (
              <li key={line} style={{ animationDelay: `${0.25 + index * 0.55}s` }}>{line}</li>
            ))}
          </ol>
          <p className="fuga-warn">{ui.warn}</p>
          <button type="button" className="fuga-open" onClick={open}>{ui.open}</button>
          <button type="button" className="fuga-quiet" onClick={() => setPhase("plain")}>{ui.plain}</button>
          <p className="fuga-note">{cover.note} · {cover.author}</p>
          {rights}
        </div>
      </main>
    );
  }

  return (
    <main className={`fuga fuga-live${glitch ? " is-glitch" : ""}`}>
      <header className="fuga-bar">
        <span className="fuga-channel">{ui.channel}</span>
        <span className={`fuga-peer${phase === "ended" ? " is-gone" : ""}`}>
          <i aria-hidden="true" />
          {ui.peer} · {phase === "ended" ? ui.offline : ui.live}
        </span>
        <button type="button" className="fuga-mute" onClick={toggleMute} aria-pressed={muted}>
          {muted ? ui.unmute : ui.mute}
        </button>
      </header>

      <div className="fuga-log" aria-live="polite">
        {feed.map((entry) => {
          if (entry.kind === "time") {
            return (
              <p key={entry.key} className="fuga-stamp">
                {entry.speaker} — {entry.time}
              </p>
            );
          }
          if (entry.kind === "self") {
            return <p key={entry.key} className="fuga-msg is-self">{entry.text}</p>;
          }
          if (entry.kind === "sys") {
            return <p key={entry.key} className="fuga-sys">{entry.text}</p>;
          }
          return (
            <p key={entry.key} className={`fuga-msg is-${entry.speaker.toLowerCase()}${entry.fx ? ` fx-${entry.fx}` : ""}`}>
              {entry.text}
            </p>
          );
        })}

        {(typing || phantom) && (
          <p className="fuga-typing">{ui.typing}</p>
        )}

        {gesture && (
          <button type="button" className="fuga-gesture" onClick={() => gestureRef.current?.(true)}>
            {gesture.prompt}
          </button>
        )}

        {phase === "ended" && (
          <div className="fuga-close">
            <p className="fuga-end">{closing.end}</p>
            <p className="fuga-sys">{ui.disconnected}</p>
            <p className="fuga-sys">{ui.ended}</p>
            <p className="fuga-note">{closing.book}</p>
            <p className="fuga-note">{closing.author}</p>
            <div className="fuga-close-actions">
              <button type="button" className="fuga-quiet" onClick={toPlain}>{ui.reading}</button>
              <button type="button" className="fuga-quiet" onClick={open}>{ui.again}</button>
            </div>
            {rights}
            <Link className="fuga-exit" to={localizedPath("/", language)}>{ui.home}</Link>
          </div>
        )}

        <div ref={bottomRef} className="fuga-bottom" />
      </div>

      {phase === "live" && (
        <footer className="fuga-foot">
          {languageLinks}
          <button type="button" className="fuga-exit-button" onClick={close}>{ui.exit}</button>
        </footer>
      )}
    </main>
  );
}
