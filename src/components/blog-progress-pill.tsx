"use client";

import { useEffect, useRef, useState } from "react";

type HeadingItem = {
  id: string;
  text: string;
  element: HTMLElement;
};

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
  const [activeIndex, setActiveIndex] = useState(-1);
  const [opacity, setOpacity] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const [headingItems, setHeadingItems] = useState<HeadingItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Slide transition state for the pill's heading text ---
  const [displayedHeading, setDisplayedHeading] = useState(title);
  const [outgoingHeading, setOutgoingHeading] = useState<string | null>(null);
  const previousHeadingRef = useRef(title);

  useEffect(() => {
    if (activeHeading !== previousHeadingRef.current) {
      setOutgoingHeading(previousHeadingRef.current);
      setDisplayedHeading(activeHeading);
      previousHeadingRef.current = activeHeading;

      const t = setTimeout(() => setOutgoingHeading(null), 240);
      return () => clearTimeout(t);
    }
  }, [activeHeading]);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const headings = Array.from(
      target.querySelectorAll<HTMLElement>("h1, h2, h3"),
    );

    setHeadingItems(
      headings.map((el, i) => ({
        id: `${targetId}-heading-${i}`,
        text: el.textContent?.trim() || "",
        element: el,
      })),
    );

    const ACTIVE_OFFSET = 120;
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

      let current = title;
      let currentIdx = -1;
      headings.forEach((heading, i) => {
        const headingTop = heading.getBoundingClientRect().top;
        if (headingTop <= ACTIVE_OFFSET) {
          current = heading.textContent?.trim() || current;
          currentIdx = i;
        }
      });

      // If we've hit (or nearly hit) the bottom of the page, the last
      // heading may never cross ACTIVE_OFFSET on its own — force it active.
      const NEAR_BOTTOM_TOLERANCE = 4;
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - NEAR_BOTTOM_TOLERANCE;

      if (scrolledToBottom && headings.length > 0) {
        current = headings[headings.length - 1].textContent?.trim() || current;
        currentIdx = headings.length - 1;
      }

      setActiveHeading(current);
      setActiveIndex(currentIdx);

      const footer = document.querySelector<HTMLElement>(footerSelector);
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const distanceToFooter = footerTop - viewportHeight;
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

  useEffect(() => {
    if (!expanded) return;

    const handlePointer = (e: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setExpanded(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };

    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [expanded]);

  const handleSelectHeading = (item: HeadingItem) => {
    const NAVBAR_HEIGHT = 88; // set this to your navbar's actual height in px
    const extraBreathingRoom = 16;

    const top =
      item.element.getBoundingClientRect().top +
      window.scrollY -
      NAVBAR_HEIGHT -
      extraBreathingRoom;

    window.scrollTo({ top, behavior: "smooth" });
    setExpanded(false);
  };

  const radius = 9;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-opacity duration-150 ease-out"
      style={{ opacity, pointerEvents: opacity === 0 ? "none" : "auto" }}
    >
      {/* Single shape: width itself animates between collapsed and expanded */}
      <div
        className={`flex flex-col items-stretch overflow-hidden rounded-3xl bg-black/90 shadow-lg backdrop-blur-sm transition-[width] duration-200 ease-out dark:bg-black ${
          expanded ? "w-[26rem] sm:w-[30rem]" : "w-64 sm:w-72"
        }`}
      >
        {/* Table of contents — height animates open/closed */}
        <div
          className="grid transition-[grid-template-rows] duration-200 ease-out"
          style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="px-2 pb-1 pt-3">
              <div className="px-2.5 pb-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">
                Table of Contents
              </div>
              <div className="toc-scroll max-h-64 overflow-y-auto pr-1">
                {headingItems.map((item, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectHeading(item)}
                      className={`mb-1 flex w-full items-center justify-between gap-2 rounded-full px-3.5 py-2.5 text-left text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/50 hover:bg-white/5 hover:text-white/80"
                      }`}
                    >
                      <span className="min-w-0 flex-1 truncate">
                        {item.text}
                      </span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Pill row — bottom of the same shape */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-2.5 px-4 py-2.5"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />

          {/* Sliding heading text: clipped viewport, old + new stacked and animated */}
          <span className="relative h-5 min-w-0 flex-1 overflow-hidden">
            {outgoingHeading && (
              <span
                key={`out-${outgoingHeading}`}
                className="slide-out-up absolute inset-0 truncate text-left text-sm font-medium text-white"
              >
                {outgoingHeading}
              </span>
            )}
            <span
              key={`in-${displayedHeading}`}
              className="slide-in-up absolute inset-0 truncate text-left text-sm font-medium text-white"
            >
              {displayedHeading}
            </span>
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
        </button>
      </div>

      <style jsx>{`
        .toc-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
        }
        .toc-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .toc-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .toc-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.25);
          border-radius: 9999px;
        }
        .toc-scroll::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }

        @keyframes slideInUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideOutUp {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        .slide-in-up {
          animation: slideInUp 220ms ease-out forwards;
        }
        .slide-out-up {
          animation: slideOutUp 220ms ease-out forwards;
        }
      `}</style>
    </div>
  );
}
