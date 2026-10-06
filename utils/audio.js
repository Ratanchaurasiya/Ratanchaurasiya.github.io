// Audio and Web Speech synthesizer utility for sound effects & voice reader

class SoundManager {
  constructor() {
    this.enabled = false;
    this.audioCtx = null;
    this.isClient = typeof window !== "undefined";
    if (this.isClient) {
      try {
        const saved = localStorage.getItem("ratan_sound_enabled");
        if (saved !== null) {
          this.enabled = saved === "true";
        }
      } catch (e) {
        // LocalStorage blocked
      }
    }
  }

  getEnabled() {
    return this.enabled;
  }

  async setEnabled(val) {
    this.enabled = !!val;
    if (this.isClient) {
      try {
        localStorage.setItem("ratan_sound_enabled", this.enabled ? "true" : "false");
      } catch (e) {}
      if (this.enabled) {
        this.initAudio();
        this.playSuccess();
        this.speak("Voice enabled");
      } else {
        if ("speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }
      }
    }
  }

  initAudio() {
    if (!this.isClient) return;
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  playTone(freq = 440, type = "sine", duration = 0.08, gain = 0.08) {
    if (!this.enabled || !this.isClient) return;
    try {
      this.initAudio();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gainNode = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gainNode.gain.setValueAtTime(gain, this.audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  playClick() {
    this.playTone(600, "triangle", 0.04, 0.05);
  }

  playOpen() {
    if (!this.enabled || !this.isClient) return;
    this.playTone(400, "sine", 0.06, 0.05);
    setTimeout(() => this.playTone(600, "sine", 0.08, 0.05), 50);
  }

  playSuccess() {
    if (!this.enabled || !this.isClient) return;
    this.playTone(523.25, "sine", 0.08, 0.06); // C5
    setTimeout(() => this.playTone(659.25, "sine", 0.08, 0.06), 70); // E5
    setTimeout(() => this.playTone(783.99, "sine", 0.12, 0.06), 140); // G5
  }

  speak(text) {
    if (!this.enabled || !this.isClient || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 0.8;
      window.speechSynthesis.speak(utterance);
    } catch (e) {}
  }

  speakHover(text) {
    if (!this.enabled || !this.isClient || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.1;
      utterance.pitch = 1.05;
      utterance.volume = 0.6;
      window.speechSynthesis.speak(utterance);
    } catch (e) {}
  }
}

export const soundManager = new SoundManager();
export default soundManager;
