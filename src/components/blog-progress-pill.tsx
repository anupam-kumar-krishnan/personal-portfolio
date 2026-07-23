"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressPill({
  title,
  targetId,
  footerSelector = "footer",
}: {
  title: string;
  targetId: string;
  footerSelector?: string;
}) {
  const [progress, setProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState(title);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const headings = Array.from(
      target.querySelectorAll<HTMLElement>("h1, h2, h3"),
    );

    // Consider a heading "active" once it scrolls above this offset
    // from the top of the viewport (tweak to taste).
    const ACTIVE_OFFSET = 120;

    // Start fading the pill out once the footer is this far (px) from
    // entering the viewport, and be fully hidden by the time it arrives.
    const FADE_ZONE = 160;

    const handleScroll = () => {
      const rect = target.getBoundingClientRect();
      const elementHeight = target.scrollHeight;
      const viewportHeight = window.innerHeight;

      const scrolledIntoView = -rect.top;
      const scrollableDistance = elementHeight - viewportHeight;

      const pct =
        scrollableDistance > 0
          ? (scrolledIntoView / scrollableDistance) * 100
          : 0;

      setProgress(Math.min(100, Math.max(0, pct)));

      // Walk headings top-to-bottom; the last one that's already
      // scrolled past ACTIVE_OFFSET is the "current" section.
      let current = title;
      for (const heading of headings) {
        const headingTop = heading.getBoundingClientRect().top;
        if (headingTop <= ACTIVE_OFFSET) {
          current = heading.textContent?.trim() || current;
        } else {
          break;
        }
      }
      setActiveHeading(current);

      // Fade out as the footer approaches the bottom of the viewport,
      // fully hidden once it's within FADE_ZONE px of appearing.
      const footer = document.querySelector<HTMLElement>(footerSelector);
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const distanceToFooter = footerTop - viewportHeight;
        // distanceToFooter > 0 => footer still below viewport, fully visible pill
        // distanceToFooter <= -FADE_ZONE => footer fully in view, pill hidden
        const fadeProgress = Math.min(
          1,
          Math.max(0, -distanceToFooter / FADE_ZONE),
        );
        setOpacity(1 - fadeProgress);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [targetId, title, footerSelector]);

  const radius = 9;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-opacity duration-150 ease-out"
      style={{ opacity, pointerEvents: opacity === 0 ? "none" : "auto" }}
    >
      <div className="flex items-center gap-2.5 rounded-full bg-black/90 px-4 py-2.5 shadow-lg backdrop-blur-sm dark:bg-black">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
        <span className="w-48 truncate text-sm font-medium text-white sm:w-64">
          {activeHeading}
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="shrink-0 -rotate-90"
        >
          <circle
            cx="12"
            cy="12"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2.5"
          />
          <circle
            cx="12"
            cy="12"
            r={radius}
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 100ms linear" }}
          />
        </svg>
      </div>
    </div>
  );
}
