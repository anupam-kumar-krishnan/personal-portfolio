"use client";

import { useEffect, useRef, useState } from "react";
import type {
  SoundAsset,
  UseSoundOptions,
  UseSoundReturn,
} from "./sound-types";

/**
 * Minimal client-side hook to play a provided `SoundAsset` using an
 * HTMLAudioElement. Returns a play function and simple controls.
 */
export function useSound(
  sound: SoundAsset,
  options: UseSoundOptions = {},
): UseSoundReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio(sound.dataUri);
    audio.preload = "auto";
    audio.volume = typeof options.volume === "number" ? options.volume : 1;
    audio.playbackRate =
      typeof options.playbackRate === "number" ? options.playbackRate : 1;

    const onPlay = () => {
      setIsPlaying(true);
      options.onPlay?.();
    };

    const onEnded = () => {
      setIsPlaying(false);
      options.onEnd?.();
    };

    const onPause = () => {
      setIsPlaying(false);
      options.onPause?.();
    };

    const onLoadedMeta = () => {
      setDuration(Number.isFinite(audio.duration) ? audio.duration : null);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("loadedmetadata", onLoadedMeta);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("loadedmetadata", onLoadedMeta);
      audio.pause();
      audioRef.current = null;
    };
  }, [sound.dataUri]);

  const play = (overrides?: { volume?: number; playbackRate?: number }) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (options.soundEnabled === false) return;

    if (overrides?.volume !== undefined) audio.volume = overrides.volume;
    if (overrides?.playbackRate !== undefined)
      audio.playbackRate = overrides.playbackRate;

    if (options.interrupt) {
      audio.pause();
      audio.currentTime = 0;
    }

    // Attempt to play; browsers may reject without user gesture.
    void audio.play().catch(() => {});
  };

  const stop = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    options.onStop?.();
  };

  const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    options.onPause?.();
  };

  const controls = {
    stop,
    pause,
    isPlaying,
    duration,
    sound,
  };

  return [play, controls] as const;
}
