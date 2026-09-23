// The voice that reads part two out loud.
//
// Part one is typed: K is at a keyboard somewhere. Part two is not typed,
// it is spoken — so those lines are read by the browser's own speech
// synthesis with the pitch dropped far below where the voice was recorded.
// A female voice at pitch 0.4 does not sound like a woman and does not
// sound like a machine either, which is the point: it should sound like
// something using a voice rather than having one.
//
// Voices are whatever the reader's system happens to ship, so every step
// here degrades quietly: no voice, no speech, and the session goes on.

const FEMALE = /female|woman|mujer|femen|dona|monica|mónica|paulina|helena|sabina|samantha|victoria|karen|moira|tessa|zira|lucia|lucía|conchita|penelope|penélope|marta|alba|nuria/i;
const MALE = /male|hombre|man\b|jorge|diego|carlos|pablo|enrique|daniel|david|alex|fred|thomas|xavier/i;

const PITCH = 0.4;
const RATE = 0.72;

function speech() {
  return typeof window !== "undefined" && window.speechSynthesis ? window.speechSynthesis : null;
}

export class Voice {
  constructor() {
    this.muted = false;
    this.voice = null;
    this.language = null;
    this.supported = null;
    const api = speech();
    if (!api) return;
    // Chrome populates the list asynchronously, so ask twice.
    this.refresh = () => { this.voice = null; };
    api.addEventListener?.("voiceschanged", this.refresh);
  }

  // Plenty of systems ship no speech voices at all, and a browser with
  // none still accepts an utterance and then never reports it finished.
  // Ask once, up front, so a silent machine never stalls the session.
  async prime() {
    const api = speech();
    if (!api) {
      this.supported = false;
      return false;
    }
    if (!api.getVoices().length) {
      await new Promise((resolve) => {
        const settle = () => {
          clearTimeout(timer);
          api.removeEventListener?.("voiceschanged", settle);
          resolve();
        };
        const timer = setTimeout(settle, 1500);
        api.addEventListener?.("voiceschanged", settle);
      });
    }
    this.supported = api.getVoices().length > 0;
    return this.supported;
  }

  // Prefer a female voice in the reader's language. Catalan is rarely
  // installed, so it falls back to Spanish before giving up.
  #pick(language) {
    const api = speech();
    if (!api) return null;
    if (this.voice && this.language === language) return this.voice;
    const all = api.getVoices();
    if (!all.length) return null;
    const wanted = language === "ca" ? ["ca", "es"] : [language];
    let pool = [];
    for (const code of wanted) {
      pool = all.filter((v) => (v.lang || "").toLowerCase().startsWith(code));
      if (pool.length) break;
    }
    if (!pool.length) pool = all;
    const chosen =
      pool.find((v) => FEMALE.test(v.name)) ||
      pool.find((v) => !MALE.test(v.name)) ||
      pool[0];
    this.voice = chosen || null;
    this.language = language;
    return this.voice;
  }

  setMuted(muted) {
    this.muted = muted;
    if (muted) this.cancel();
  }

  // Resolves when the line has been said, or straight away when it cannot
  // be said at all, so the conversation never stalls waiting for a voice.
  speak(text, language) {
    const api = speech();
    if (!api || this.muted || this.supported === false) return Promise.resolve(false);
    const voice = this.#pick(language);
    return new Promise((resolve) => {
      let settled = false;
      const done = (spoken) => {
        if (settled) return;
        settled = true;
        clearTimeout(guard);
        resolve(spoken);
      };
      let utterance;
      try {
        utterance = new SpeechSynthesisUtterance(text);
      } catch {
        return done(false);
      }
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = language === "ca" ? "ca-ES" : language === "en" ? "en-GB" : "es-ES";
      }
      utterance.pitch = PITCH;
      utterance.rate = RATE;
      utterance.volume = 1;
      utterance.onend = () => done(true);
      utterance.onerror = () => done(false);
      // Chrome drops onend on long utterances; never wait past the time the
      // line could plausibly take to say.
      const guard = setTimeout(() => done(false), 2500 + text.length * 110);
      api.speak(utterance);
    });
  }

  cancel() {
    speech()?.cancel();
  }

  destroy() {
    this.cancel();
    if (this.refresh) speech()?.removeEventListener?.("voiceschanged", this.refresh);
  }
}
