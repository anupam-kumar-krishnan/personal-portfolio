"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Container } from "../container";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

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
        className="fixed inset-x-0 top-0 z-50 mx-auto backdrop-blur-sm hidden md:flex max-w-4xl items-center justify-between px-3 py-2 rounded-4xl bg-white/80"
      >
        <Link href="/">
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
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Mobile nav - hidden on desktop */}
      <div className="fixed inset-x-0 top-0 z-50 md:hidden bg-white/80 backdrop-blur-sm border-b border-neutral-200">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/">
            <Image
              className="h-10 w-10 rounded-full"
              src="/avatar.webp"
              alt="Avatar"
              height="100"
              width="100"
            />
          </Link>

          <motion.div
            animate={
              menuOpen ? { rotate: 90, scale: 1.1 } : { rotate: 0, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
            >
              {menuOpen ? (
                // X icon
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
                // Hamburger icon
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
            </button>
          </motion.div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col px-4 pb-4 gap-1 bg-white/80"
          >
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm px-2 py-2 rounded-md hover:bg-neutral-100 text-neutral-700"
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
