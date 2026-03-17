"use client";

import { useState, useEffect } from "react";

type Category = "All" | "Interactive" | "Layout" | "Menu" | "CTA" | "Bento";

interface ComponentItem {
  id: number;
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  previewHref: string;
}

const COMPONENTS: ComponentItem[] = [
  {
    id: 1,
    title: "Pill Navbar",
    description:
      "Animated navbar with a sliding pill indicator that morphs smoothly on scroll.",
    category: "Interactive",
    previewHref: "https://x.com/kuma19028/status/2032690688492482758?s=20",
  },
  {
    id: 6,
    title: "Bento Grid",
    description: "Feature section using an asymmetric bento grid layout.",
    category: "Bento",
    previewHref: "https://x.com/kuma19028/status/2031276629675356221?s=20",
  },
  {
    id: 7,
    title: "Dark Bento Grid",
    description: "Bento grid feature section rendered in a sleek black theme.",
    category: "Bento",
    previewHref: "https://x.com/kuma19028/status/2033048660129493471?s=20",
  },
  {
    id: 4,
    title: "Floating Menu",
    description: "Floating menu with choreographed spring animation on click.",
    category: "Menu",
    previewHref: "https://x.com/kuma19028/status/2031979581063016876?s=20",
  },
  {
    id: 5,
    title: "CTA Section",
    description:
      "Call-to-action section with kinetic entrance animations and bold typography.",
    category: "CTA",
    previewHref: "https://x.com/kuma19028/status/2031578020688085095?s=20",
  },
  {
    id: 2,
    title: "Flip Cards",
    description: "3D flip animation with animated black hole rings on hover.",
    category: "Interactive",
    previewHref: "https://x.com/kuma19028/status/2032304971291771279?s=20",
  },
  {
    id: 3,
    title: "Hero Section",
    description: "Full-bleed hero with subtle hover and border animation.",
    category: "Layout",
    previewHref: "https://x.com/kuma19028/status/2033440123220811879?s=20",
  },
];

const FILTERS: Category[] = [
  "All",
  "Interactive",
  "Layout",
  "Menu",
  "CTA",
  "Bento",
];

const KEYFRAMES = `
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');
  * { font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif; }

  @keyframes nav-morph {
    0%, 30%  { width: 94%; border-radius: 0px; }
    45%, 70% { width: 60%; border-radius: 9999px; }
    85%,100% { width: 94%; border-radius: 0px; }
  }
  .anim-nav { animation: nav-morph 4s ease-in-out infinite; }

  @keyframes card-flip {
    0%, 35%  { transform: rotateY(0deg); }
    50%, 85% { transform: rotateY(180deg); }
    100%     { transform: rotateY(0deg); }
  }
  .flip-wrap  { position: relative; }
  .flip-inner { position: relative; transform-style: preserve-3d; animation: card-flip 4s ease-in-out infinite; }
  .flip-face  { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
  .flip-back  { transform: rotateY(180deg); }

  @keyframes type-out {
    0%        { width: 0ch; }
    50%, 80%  { width: 15ch; }
    90%, 100% { width: 0ch; }
  }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  .anim-typewriter { overflow: hidden; white-space: nowrap; animation: type-out 3.5s steps(15) infinite; }
  .anim-cursor     { animation: blink 0.7s step-end infinite; }

  @keyframes bento-pulse {
    0%   { opacity: 0.25; transform: scale(0.93); }
    100% { opacity: 1;    transform: scale(1); }
  }
  .bp-1 { animation: bento-pulse 1.2s ease-out 0s    infinite alternate; }
  .bp-2 { animation: bento-pulse 1.2s ease-out 0.3s  infinite alternate; }
  .bp-3 { animation: bento-pulse 1.2s ease-out 0.6s  infinite alternate; }
  .bd-1 { animation: bento-pulse 1.4s ease-out 0s    infinite alternate; }
  .bd-2 { animation: bento-pulse 1.4s ease-out 0.35s infinite alternate; }
  .bd-3 { animation: bento-pulse 1.4s ease-out 0.7s  infinite alternate; }
  .bd-4 { animation: bento-pulse 1.4s ease-out 1.05s infinite alternate; }

  @keyframes ring-out {
    0%   { transform: scale(1);   opacity: 0.5; }
    100% { transform: scale(1.9); opacity: 0; }
  }
  .anim-ring { animation: ring-out 1.6s ease-out infinite; }

  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  .anim-shimmer {
    background: linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 35%, #fff 50%, #0a0a0a 65%, #0a0a0a 100%);
    background-size: 200% auto;
    animation: shimmer 2.4s linear infinite;
  }
`;

function DiamondIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect
        x="7"
        y="0.5"
        width="9"
        height="9"
        rx="0.5"
        transform="rotate(45 7 0.5)"
        fill="#0a0a0a"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 1200 1227" fill="white">
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.828Z" />
    </svg>
  );
}

function NavPillThumb() {
  return (
    <div className="flex items-center justify-center w-full py-5 px-3">
      <div className="anim-nav flex items-center justify-between bg-white border border-neutral-200 px-4 py-2.5 gap-3">
        <div className="shrink-0">
          <DiamondIcon />
        </div>
        <div className="flex items-center gap-3 flex-1">
          {["Home", "Work", "Blog"].map((l) => (
            <span
              key={l}
              className="text-[10px] text-neutral-400 leading-none whitespace-nowrap"
            >
              {l}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[9px] text-neutral-600 border border-neutral-300 rounded px-2.5 py-[5px] leading-none whitespace-nowrap">
            Sign in
          </span>
          <span className="text-[9px] text-white bg-neutral-900 rounded px-2.5 py-[5px] leading-none whitespace-nowrap">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}

function FlipCardsThumb() {
  const cards = [
    { bullets: ["Design", "Layout", "Motion"] },
    { bullets: ["React", "Tailwind", "TypeScript"] },
    { bullets: ["Animate", "Deploy", "Scale"] },
  ];
  return (
    <div
      className="flex items-stretch justify-center gap-2 w-full px-3 py-4"
      style={{ minHeight: 130 }}
    >
      {cards.map((card, i) => (
        <div
          key={i}
          className="flip-wrap flex-1"
          style={{ perspective: "600px" }}
        >
          <div
            className="flip-inner w-full"
            style={{ animationDelay: `${i * 1.4}s`, minHeight: 120 }}
          >
            <div className="flip-face absolute inset-0 rounded-lg border border-neutral-200 bg-white flex flex-col justify-center px-2 gap-2">
              {card.bullets.map((b) => (
                <div key={b} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
                  <span className="text-[9px] text-neutral-600 leading-none font-medium">
                    {b}
                  </span>
                </div>
              ))}
            </div>
            <div className="flip-face flip-back absolute inset-0 rounded-lg bg-neutral-900 flex flex-col justify-center px-2 gap-2">
              {card.bullets.map((b) => (
                <div key={b} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-neutral-600 shrink-0" />
                  <span className="text-[9px] text-neutral-300 leading-none font-medium">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroThumb() {
  return (
    <div className="flex flex-col w-full h-full" style={{ minHeight: 110 }}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-100">
        <DiamondIcon size={10} />
        <div className="flex items-center gap-2">
          {["Home", "Work", "Blog"].map((l) => (
            <span key={l} className="text-[7px] text-neutral-400 leading-none">
              {l}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[7px] text-neutral-600 border border-neutral-300 rounded-[3px] px-1.5 py-[3px] leading-none">
            Sign in
          </span>
          <span className="text-[7px] text-white bg-neutral-900 rounded-[3px] px-1.5 py-[3px] leading-none">
            Sign up
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center flex-1 px-3 py-3 gap-1.5">
        <div className="flex items-center gap-1">
          <span className="anim-typewriter text-[10px] font-semibold text-neutral-900 leading-tight">
            Build faster UI
          </span>
          <span className="anim-cursor text-[10px] font-semibold text-neutral-900">
            |
          </span>
        </div>
        <span className="text-[7px] text-neutral-400 leading-relaxed">
          Craft beautiful interfaces with reusable components.
        </span>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[7px] text-white bg-neutral-900 rounded-[3px] px-2 py-[3px] leading-none">
            Get Started
          </span>
          <span className="text-[7px] text-neutral-700 border border-neutral-300 rounded-[3px] px-2 py-[3px] leading-none">
            Learn More
          </span>
        </div>
      </div>
    </div>
  );
}

function FloatingMenuThumb() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const cycle = () => {
      setOpen(true);
      setTimeout(() => setOpen(false), 2000);
    };
    const init = setTimeout(() => {
      cycle();
      const iv = setInterval(cycle, 4000);
      return () => clearInterval(iv);
    }, 4000);
    return () => clearTimeout(init);
  }, []);
  const popStyle = (delay = false): React.CSSProperties => ({
    width: open ? 30 : 0,
    height: open ? 30 : 0,
    opacity: open ? 1 : 0,
    transform: open ? "scale(1)" : "scale(0.5)",
    transitionDelay: delay && open ? "0.08s" : "0s",
    borderRadius: "50%",
    background: "#f3f4f6",
    border: "1px solid #e5e7eb",
    flexShrink: 0,
  });
  return (
    <div
      className="flex items-center justify-center w-full"
      style={{ minHeight: 106 }}
    >
      <div className="flex items-center gap-3">
        <div
          className="transition-all duration-500 ease-out overflow-hidden flex items-center justify-center"
          style={popStyle()}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#374151">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M19 11H13V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
          </svg>
        </div>
        <div
          className="transition-all duration-500 ease-out overflow-hidden flex items-center justify-center"
          style={popStyle(true)}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#374151"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="6" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CTAThumb() {
  return (
    <div className="flex items-center justify-center w-full py-5 px-5">
      <div
        className="border border-neutral-200 rounded-lg px-4 py-4 flex flex-col items-start gap-2 bg-white"
        style={{ width: "55%" }}
      >
        <span className="text-[14px] font-bold text-neutral-900 leading-tight tracking-tight">
          Ship UI faster.
        </span>
        <span className="text-[8px] text-neutral-400 leading-relaxed">
          Handcrafted components with smooth animations.
        </span>
        <div
          className="flex items-center mt-1 bg-neutral-900 px-3 py-[12px]"
          style={{ borderRadius: 3 }}
        >
          <span className="text-[9px] text-white font-medium leading-none whitespace-nowrap">
            Get Started
          </span>
        </div>
      </div>
    </div>
  );
}

function BentoThumb() {
  return (
    <div
      className="flex items-center justify-center w-full"
      style={{ minHeight: 106 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 5,
          width: 80,
          height: 56,
        }}
      >
        <div
          className="bp-1"
          style={{ gridRow: "span 2", background: "#0a0a0a", borderRadius: 4 }}
        />
        <div
          className="bp-2"
          style={{ background: "#e5e5e5", borderRadius: 4 }}
        />
        <div
          className="bp-3"
          style={{ background: "#f3f3f3", borderRadius: 4 }}
        />
      </div>
    </div>
  );
}

function DarkBentoThumb() {
  return (
    <div
      className="flex items-center justify-center w-full"
      style={{ minHeight: 106 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 5,
          width: 90,
          height: 56,
        }}
      >
        <div
          className="bd-1"
          style={{ gridColumn: "span 2", background: "#333", borderRadius: 4 }}
        />
        <div className="bd-2" style={{ background: "#555", borderRadius: 4 }} />
        <div className="bd-3" style={{ background: "#222", borderRadius: 4 }} />
        <div
          className="bd-4"
          style={{
            gridColumn: "span 2",
            background: "#1a1a1a",
            borderRadius: 4,
          }}
        />
      </div>
    </div>
  );
}

function Thumbnail({ id }: { id: number }) {
  switch (id) {
    case 1:
      return <NavPillThumb />;
    case 2:
      return <FlipCardsThumb />;
    case 3:
      return <HeroThumb />;
    case 4:
      return <FloatingMenuThumb />;
    case 5:
      return <CTAThumb />;
    case 6:
      return <BentoThumb />;
    case 7:
      return <DarkBentoThumb />;
    default:
      return null;
  }
}

function PulseButton() {
  return (
    <div className="relative flex items-center justify-center w-9 h-9">
      <div className="anim-ring absolute w-9 h-9 rounded-full bg-neutral-900" />
      <div className="relative z-10 w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M19 11H13V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
        </svg>
      </div>
    </div>
  );
}

function CardCell({
  component,
  hovered,
  onEnter,
  onLeave,
  gridArea,
}: {
  component: ComponentItem;
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
  gridArea?: string;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`flex flex-col cursor-pointer transition-colors duration-150 ${hovered ? "bg-neutral-50" : "bg-white"}`}
      style={gridArea ? { gridArea } : undefined}
    >
      <div className="w-full bg-neutral-50 border-b border-neutral-100 flex items-center justify-center overflow-hidden">
        <Thumbnail id={component.id} />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[11px] text-neutral-400 mb-1">
          No. {String(component.id).padStart(2, "0")}
        </p>
        <h2 className="text-[14px] font-medium text-neutral-900 tracking-tight mb-1.5 leading-snug">
          {component.title}
        </h2>
        <p className="text-[12px] text-neutral-500 leading-relaxed flex-1 mb-4">
          {component.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-500">
            {component.category}
          </span>
          <a
            href={component.previewHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[12px] flex items-center gap-1 transition-colors duration-150 no-underline ${hovered ? "text-neutral-900" : "text-neutral-400"}`}
          >
            Preview
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M1.5 8.5L8.5 1.5M8.5 1.5H4M8.5 1.5V6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

export default function DailyComponents() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const isFiltered = activeFilter !== "All";
  const filtered = isFiltered
    ? COMPONENTS.filter((c) => c.category === activeFilter)
    : COMPONENTS;

  return (
    <>
      <style>{KEYFRAMES}</style>

      <div className="relative z-10 bg-white min-h-screen text-neutral-900">
        {/* px-16 keeps content clear of the w-8 hash strips on each side */}
        <div className="max-w-[700px] mx-auto relative px-16 pb-20">
          {/* Hash borders — same pattern as home page, absolute inside relative parent */}
          <div className="absolute left-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
          <div className="absolute right-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />

          {/* Header */}
          <div className="pt-14 pb-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-[26px] sm:text-[30px] font-bold tracking-[-0.8px] leading-[1.15] text-neutral-900">
                  My Components Lab
                </h1>
                <p className="text-[14px] text-neutral-500 leading-relaxed mt-2 max-w-[42ch]">
                  A set of handcrafted UI components built daily. Click any card
                  to preview.
                </p>
              </div>
              <span className="text-[11px] font-medium text-neutral-500 bg-neutral-100 rounded-full px-3 py-1 shrink-0 mt-1 whitespace-nowrap">
                {COMPONENTS.length} components
              </span>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap mb-5">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-[12px] px-3 py-1 rounded-full border transition-all duration-150 cursor-pointer ${
                  activeFilter === f
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          {isFiltered ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-200 rounded-xl overflow-hidden border border-neutral-200">
              {filtered.map((c) => (
                <CardCell
                  key={c.id}
                  component={c}
                  hovered={hoveredId === c.id}
                  onEnter={() => setHoveredId(c.id)}
                  onLeave={() => setHoveredId(null)}
                />
              ))}
            </div>
          ) : isMobile ? (
            /* ── Mobile: single column, all cards full width ── */
            <div className="rounded-xl overflow-hidden border border-neutral-200 flex flex-col gap-px bg-neutral-200">
              {[1, 6, 7, 4, 5, 2, 3].map((id) => (
                <CardCell
                  key={id}
                  component={COMPONENTS.find((c) => c.id === id)!}
                  hovered={hoveredId === id}
                  onEnter={() => setHoveredId(id)}
                  onLeave={() => setHoveredId(null)}
                />
              ))}
              <div className="bg-white flex flex-col items-center justify-center gap-3 py-14">
                <PulseButton />
                <p className="text-[14px] font-medium text-neutral-900">
                  More coming soon
                </p>
              </div>
            </div>
          ) : (
            /* ── Desktop: bento layout — untouched ── */
            <div
              className="rounded-xl overflow-hidden border border-neutral-200"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1px",
                background: "#e5e5e5",
              }}
            >
              <CardCell
                component={COMPONENTS.find((c) => c.id === 1)!}
                hovered={hoveredId === 1}
                onEnter={() => setHoveredId(1)}
                onLeave={() => setHoveredId(null)}
                gridArea="1 / 1 / 2 / 5"
              />
              <CardCell
                component={COMPONENTS.find((c) => c.id === 6)!}
                hovered={hoveredId === 6}
                onEnter={() => setHoveredId(6)}
                onLeave={() => setHoveredId(null)}
                gridArea="2 / 1 / 3 / 2"
              />
              <CardCell
                component={COMPONENTS.find((c) => c.id === 7)!}
                hovered={hoveredId === 7}
                onEnter={() => setHoveredId(7)}
                onLeave={() => setHoveredId(null)}
                gridArea="2 / 2 / 3 / 3"
              />
              <CardCell
                component={COMPONENTS.find((c) => c.id === 4)!}
                hovered={hoveredId === 4}
                onEnter={() => setHoveredId(4)}
                onLeave={() => setHoveredId(null)}
                gridArea="2 / 3 / 3 / 5"
              />
              <CardCell
                component={COMPONENTS.find((c) => c.id === 5)!}
                hovered={hoveredId === 5}
                onEnter={() => setHoveredId(5)}
                onLeave={() => setHoveredId(null)}
                gridArea="3 / 1 / 4 / 5"
              />
              <CardCell
                component={COMPONENTS.find((c) => c.id === 2)!}
                hovered={hoveredId === 2}
                onEnter={() => setHoveredId(2)}
                onLeave={() => setHoveredId(null)}
                gridArea="4 / 1 / 5 / 3"
              />
              <CardCell
                component={COMPONENTS.find((c) => c.id === 3)!}
                hovered={hoveredId === 3}
                onEnter={() => setHoveredId(3)}
                onLeave={() => setHoveredId(null)}
                gridArea="4 / 3 / 5 / 5"
              />
              <div
                className="bg-white flex flex-col items-center justify-center gap-3 py-14"
                style={{ gridArea: "5 / 1 / 6 / 5" }}
              >
                <PulseButton />
                <p className="text-[14px] font-medium text-neutral-900">
                  More coming soon
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-[12px] text-neutral-400">
              Follow the journey — @kuma19028
            </span>
            <a
              href="https://x.com/kuma19028"
              target="_blank"
              rel="noopener noreferrer"
              className="anim-shimmer relative inline-flex items-center rounded-full no-underline"
              style={{ padding: "1.5px" }}
            >
              <span className="flex items-center gap-2 bg-neutral-900 rounded-full px-[18px] py-[7px] text-[12px] font-medium text-white whitespace-nowrap">
                <XIcon />
                Follow on X
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
