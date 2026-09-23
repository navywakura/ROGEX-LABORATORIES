// The sound of the channel, synthesised on the fly.
//
// Nothing here is a file: the room tone, the incoming blip, the notification
// and the static are built from oscillators and noise, so the page stays
// silent until the reader opens the channel and weighs nothing extra.
//
// Browsers only allow audio after a gesture, so start() is called from the
// click that opens the session and never before.

const ROOM_GAIN = 0.032;
const BLIP_GAIN = 0.085;

function noiseBuffer(ctx, seconds) {
  const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
  return buffer;
}

export class Channel {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.room = null;
    this.muted = false;
  }

  // The context is created on the opening gesture; every later call reuses it.
  start() {
    if (this.ctx) {
      if (this.ctx.state === "suspended") this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 1;
    this.master.connect(this.ctx.destination);
    this.#room();
  }

  // Two detuned low oscillators plus filtered noise: the hum of a machine
  // that is on and listening. A slow LFO keeps it from sounding like a tone.
  #room() {
    const ctx = this.ctx;
    const room = ctx.createGain();
    room.gain.value = 0;
    room.connect(this.master);
    room.gain.linearRampToValueAtTime(ROOM_GAIN, ctx.currentTime + 6);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 160;
    filter.connect(room);

    for (const frequency of [48, 55.5]) {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = frequency;
      const gain = ctx.createGain();
      gain.gain.value = 0.5;
      osc.connect(gain).connect(filter);
      osc.start();
    }

    const hiss = ctx.createBufferSource();
    hiss.buffer = noiseBuffer(ctx, 4);
    hiss.loop = true;
    const hissFilter = ctx.createBiquadFilter();
    hissFilter.type = "bandpass";
    hissFilter.frequency.value = 420;
    hissFilter.Q.value = 0.6;
    const hissGain = ctx.createGain();
    hissGain.gain.value = 0.022;
    hiss.connect(hissFilter).connect(hissGain).connect(room);
    hiss.start();

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.02;
    lfo.connect(lfoGain).connect(room.gain);
    lfo.start();

    this.room = room;
  }

  setMuted(muted) {
    this.muted = muted;
    if (!this.master) return;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setTargetAtTime(muted ? 0 : 1, now, 0.08);
  }

  #tone({ from, to, duration = 0.12, type = "sine", gain = BLIP_GAIN, delay = 0 }) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const at = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(from, at);
    osc.frequency.exponentialRampToValueAtTime(Math.max(to, 1), at + duration);
    const envelope = ctx.createGain();
    envelope.gain.setValueAtTime(0, at);
    envelope.gain.linearRampToValueAtTime(gain, at + 0.008);
    envelope.gain.exponentialRampToValueAtTime(0.0001, at + duration);
    osc.connect(envelope).connect(this.master);
    osc.start(at);
    osc.stop(at + duration + 0.02);
  }

  // A message from K lands: short, dry, slightly downward.
  receive() {
    this.#tone({ from: 268, to: 184, duration: 0.14, type: "triangle", gain: 0.1 });
  }

  // The reader answers: upward, so the two directions never sound alike.
  send() {
    this.#tone({ from: 150, to: 248, duration: 0.16, type: "sine", gain: 0.085 });
  }

  // A new block of the conversation opens.
  notify() {
    this.#tone({ from: 232, to: 232, duration: 0.2, type: "sine", gain: 0.075 });
    this.#tone({ from: 348, to: 348, duration: 0.26, type: "sine", gain: 0.06, delay: 0.17 });
  }

  // Something breaks: a burst of band-passed noise sweeping downward.
  static_(duration = 0.7) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const at = ctx.currentTime;
    const source = ctx.createBufferSource();
    source.buffer = noiseBuffer(ctx, duration);
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = 1.4;
    filter.frequency.setValueAtTime(1100, at);
    filter.frequency.exponentialRampToValueAtTime(70, at + duration);
    const envelope = ctx.createGain();
    envelope.gain.setValueAtTime(0.0001, at);
    envelope.gain.linearRampToValueAtTime(0.09, at + 0.04);
    envelope.gain.exponentialRampToValueAtTime(0.0001, at + duration);
    source.connect(filter).connect(envelope).connect(this.master);
    source.start(at);
    source.stop(at + duration);
  }

  // The uppercase block: the same blip, lower and harder.
  shout() {
    this.#tone({ from: 116, to: 68, duration: 0.15, type: "square", gain: 0.055 });
  }

  close() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    if (this.room) this.room.gain.setTargetAtTime(0, ctx.currentTime, 0.4);
    setTimeout(() => ctx.close().catch(() => {}), 1200);
    this.ctx = null;
    this.room = null;
    this.master = null;
  }
}
