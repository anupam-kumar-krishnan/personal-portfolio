"use client";
import { useEffect, useRef, useCallback } from "react";

let sharedCtx: AudioContext | null = null;
let sharedBufferPromise: Promise<AudioBuffer> | null = null;

function getAudioContext() {
  if (!sharedCtx) {
    const AudioContextClass =
      window.AudioContext || (window as any).webkitAudioContext;
    sharedCtx = new AudioContextClass();
  }
  return sharedCtx;
}

function getAudioBuffer() {
  if (!sharedBufferPromise) {
    const ctx = getAudioContext();
    sharedBufferPromise = fetch("/sound/click-sound.wav")
      .then((res) => res.arrayBuffer())
      .then((data) => ctx.decodeAudioData(data));
  }
  return sharedBufferPromise;
}

export function useClickSound() {
  const bufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    getAudioBuffer()
      .then((buffer) => {
        bufferRef.current = buffer;
      })
      .catch((err) => {
        console.warn("Failed to load click sound:", err);
      });
  }, []);

  const playClickSound = useCallback(() => {
    const ctx = getAudioContext();
    const buffer = bufferRef.current;
    if (!buffer) return;

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
  }, []);

  return playClickSound;
}
