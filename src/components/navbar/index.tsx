"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Container } from "../container";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

export const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "My Lab", href: "/mycomponentlab" },
    { title: "Contact", href: "/contact" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  const y = useTransform(scrollY, [0, 100], [0, 15]);
  const width = useTransform(scrollY, [0, 100], ["52%", "45%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // Web Audio API refs — decode once on mount, play from memory on every click
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    const AudioContextClass =
      window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContextClass();
    audioCtxRef.current = ctx;

    fetch("/sound/click-sound.wav")
      .then((res) => res.arrayBuffer())
      .then((data) => ctx.decodeAudioData(data))
      .then((buffer) => {
        audioBufferRef.current = buffer;
      })
      .catch((err) => {
        console.warn("Failed to load click sound:", err);
      });

    return () => {
      ctx.close();
    };
  }, []);

  const playClickSound = () => {
    const ctx = audioCtxRef.current;
    const buffer = audioBufferRef.current;
    if (!ctx || !buffer) return;

    // Resume context if browser suspended it before first gesture
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
  };

  return (
    <Container className="pt-20 md:pt-0">
      {/* Desktop nav - hidden on mobile */}
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width,
          y,
        }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="fixed inset-x-0 top-0 z-50 mx-auto backdrop-blur-sm hidden md:flex max-w-4xl items-center justify-between px-3 py-2 rounded-4xl bg-white/80 dark:bg-neutral-900/80"
      >
        <Link href="/" onClick={playClickSound}>
          <Image
            className="h-10 w-10 rounded-full"
            src="/avatar.webp"
            alt="Avatar"
            height="100"
            width="100"
          />
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item, idx) => (
            <Link
              className="text-sm relative px-2 py-1"
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={playClickSound}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10 text-neutral-700 dark:text-neutral-200">
                {item.title}
              </span>
            </Link>
          ))}

          {/* Wrapper div lets us play sound via bubbling without editing AnimatedThemeToggler */}
          <div onClick={playClickSound} className="ml-2">
            <AnimatedThemeToggler className="p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800" />
          </div>
        </div>
      </motion.nav>

      {/* Mobile nav - hidden on desktop */}
      <div className="fixed inset-x-0 top-0 z-50 md:hidden bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" onClick={playClickSound}>
            <Image
              className="h-10 w-10 rounded-full"
              src="/avatar.webp"
              alt="Avatar"
              height="100"
              width="100"
            />
          </Link>

          <div className="flex items-center gap-2">
            <div onClick={playClickSound}>
              <AnimatedThemeToggler className="p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800" />
            </div>

            <motion.button
              onClick={() => {
                playClickSound();
                setMenuOpen(!menuOpen);
              }}
              animate={
                menuOpen ? { rotate: 90, scale: 1.1 } : { rotate: 0, scale: 1 }
              }
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="p-2 rounded-md text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col px-4 pb-4 gap-1 bg-white/80 dark:bg-neutral-900/80"
          >
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => {
                  playClickSound();
                  setMenuOpen(false);
                }}
                className="text-sm px-2 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </Container>
  );
};
