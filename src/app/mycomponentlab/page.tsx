"use client";

import { useState, useEffect } from "react";

type Category =
  | "All"
  | "Interactive"
  | "Layout"
  | "Menu"
  | "CTA"
  | "Bento"
  | "Card"
  | "Feature";

interface ComponentItem {
  id: number;
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  previewHref: string;
}

// id = display number (No. 01, No. 02 …)
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
    id: 2,
    title: "Bento Grid",
    description: "Feature section using an asymmetric bento grid layout.",
    category: "Bento",
    previewHref: "https://x.com/kuma19028/status/2031276629675356221?s=20",
  },
  {
    id: 3,
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
    id: 6,
    title: "Flip Cards",
    description: "3D flip animation with animated black hole rings on hover.",
    category: "Interactive",
    previewHref: "https://x.com/kuma19028/status/2032304971291771279?s=20",
  },
  {
    id: 7,
    title: "Hero Section",
    description: "Full-bleed hero with subtle hover and border animation.",
    category: "Layout",
    previewHref: "https://x.com/kuma19028/status/2033440123220811879?s=20",
  },
  {
    id: 8,
    title: "Reactive Card",
    description:
      "3D tilt cards that feel alive — shape shifts and card lifts on hover, all buttery smooth.",
    category: "Card",
    previewHref: "https://x.com/kuma19028/status/2034532585473462571?s=20",
  },
  {
    id: 9,
    title: "Feature Section",
    description:
      "Clean feature section with a 2x3 card grid, illustrated UI thumbnails and smooth animations.",
    category: "Feature",
    previewHref: "https://x.com/kuma19028/status/2034180092809908322",
  },
];

const FILTERS: Category[] = [
  "All",
  "Interactive",
  "Layout",
  "Menu",
  "CTA",
  "Bento",
  "Card",
  "Feature",
];

const KEYFRAMES = `
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');
  * { font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif; }

  @keyframes nav-morph {
    0%, 30%  { width: min(92%, 380px); border-radius: 0px; }
    45%, 70% { width: min(55%, 220px); border-radius: 9999px; }
    85%,100% { width: min(92%, 380px); border-radius: 0px; }
  }
  .anim-nav { animation: nav-morph 4s ease-in-out infinite; box-sizing: border-box; }

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

  @keyframes shape-triangle-rock {
    0%, 100% { transform: rotate(-6deg) translateY(0px); }
    50%      { transform: rotate(6deg)  translateY(-3px); }
  }
  @keyframes shape-orb-pulse {
    0%, 100% { transform: scale(1); }
    50%      { transform: scale(1.08); }
  }
  @keyframes shape-diamond-rock {
    0%, 100% { transform: rotate(0deg) translateY(0px); }
    30%      { transform: rotate(-8deg) translateY(-2px); }
    70%      { transform: rotate(8deg)  translateY(-2px); }
  }
  .shape-triangle { animation: shape-triangle-rock 2.4s ease-in-out infinite; transform-origin: center bottom; }
  .shape-orb      { animation: shape-orb-pulse 2s ease-in-out infinite; }
  .shape-diamond  { animation: shape-diamond-rock 2.6s ease-in-out infinite; transform-origin: center center; }

  @keyframes feature-fade {
    0%   { opacity: 0.3; transform: translateY(3px); }
    100% { opacity: 1;   transform: translateY(0px); }
  }
  .feat-1 { animation: feature-fade 1.6s ease-out 0s    infinite alternate; }
  .feat-2 { animation: feature-fade 1.6s ease-out 0.25s infinite alternate; }
  .feat-3 { animation: feature-fade 1.6s ease-out 0.5s  infinite alternate; }
  .feat-4 { animation: feature-fade 1.6s ease-out 0.75s infinite alternate; }
  .feat-5 { animation: feature-fade 1.6s ease-out 1.0s  infinite alternate; }
  .feat-6 { animation: feature-fade 1.6s ease-out 1.25s infinite alternate; }
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

// ── id 1 ─────────────────────────────────────────────────────────────────────
function NavPillThumb() {
  return (
    <div className="flex items-center justify-center w-full py-5 px-4 overflow-hidden">
      <div
        className="anim-nav flex items-center bg-white border border-neutral-200 px-3 py-2.5"
        style={{ maxWidth: "100%", minWidth: 0, gap: 8 }}
      >
        <div className="shrink-0">
          <DiamondIcon size={12} />
        </div>
        <div className="flex items-center shrink-0" style={{ gap: 10 }}>
          {["Home", "Blog"].map((l) => (
            <span
              key={l}
              className="text-[10px] text-neutral-400 leading-none whitespace-nowrap"
            >
              {l}
            </span>
          ))}
        </div>
        <div className="flex-1" />
        <div className="flex items-center shrink-0" style={{ gap: 6 }}>
          <span className="text-[9px] text-neutral-600 border border-neutral-300 rounded px-2 py-[7px] leading-none whitespace-nowrap hidden md:block">
            Sign in
          </span>
          <span className="text-[9px] text-white bg-neutral-900 rounded px-2 py-[7px] leading-none whitespace-nowrap">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}

// ── id 2 ─────────────────────────────────────────────────────────────────────
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

// ── id 3 ─────────────────────────────────────────────────────────────────────
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

// ── id 4 ─────────────────────────────────────────────────────────────────────
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

// ── id 5 ─────────────────────────────────────────────────────────────────────
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
        <span className="text-[10px] text-neutral-400 leading-relaxed">
          Handcrafted components with smooth animations.
        </span>
        <div
          className="flex items-center mt-1 bg-neutral-900 px-3 py-[7px]"
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

// ── id 6 ─────────────────────────────────────────────────────────────────────
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

// ── id 7 ─────────────────────────────────────────────────────────────────────
function HeroThumb() {
  return (
    <div className="flex flex-col w-full h-full" style={{ minHeight: 152 }}>
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
          <span className="text-[7px] text-neutral-600 border border-neutral-300 rounded-[3px] px-1.5 py-[6px] leading-none">
            Sign in
          </span>
          <span className="text-[7px] text-white bg-neutral-900 rounded-[3px] px-1.5 py-[6px] leading-none">
            Sign up
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center flex-1 px-3 py-4 gap-1.5">
        <div className="flex items-center gap-1">
          <span className="anim-typewriter text-[10px] font-semibold text-neutral-900 leading-tight">
            Build UI Fastest ever
          </span>
          <span className="anim-cursor text-[10px] font-semibold text-neutral-900">
            |
          </span>
        </div>
        <span className="text-[7px] text-neutral-400 leading-relaxed">
          Craft beautiful interfaces with reusable components.
        </span>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[7px] text-white bg-neutral-900 rounded-[3px] px-2 py-[6px] leading-none">
            Get Started
          </span>
          <span className="text-[7px] text-neutral-700 border border-neutral-300 rounded-[3px] px-2 py-[6px] leading-none">
            Learn More
          </span>
        </div>
      </div>
    </div>
  );
}

// ── id 8 ─────────────────────────────────────────────────────────────────────
function ReactiveCardThumb() {
  const cards = [
    {
      label: "Emerald",
      id: "#3214",
      shape: (
        <svg
          className="shape-triangle"
          width="32"
          height="28"
          viewBox="0 0 32 28"
          fill="none"
        >
          <polygon points="16,2 30,26 2,26" fill="url(#eg2)" />
          <polygon points="16,2 30,26 16,18" fill="rgba(0,0,0,0.15)" />
          <defs>
            <linearGradient
              id="eg2"
              x1="16"
              y1="2"
              x2="16"
              y2="26"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#a3a3a3" />
              <stop offset="100%" stopColor="#171717" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      label: "Amethyst",
      id: "#1466",
      shape: (
        <div
          className="shape-orb"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="10" fill="url(#ag2)" />
            <ellipse
              cx="16"
              cy="16"
              rx="15"
              ry="5.5"
              stroke="#737373"
              strokeWidth="1"
              fill="none"
              opacity="0.8"
            />
            <defs>
              <radialGradient id="ag2" cx="38%" cy="32%" r="60%">
                <stop offset="0%" stopColor="#d4d4d4" />
                <stop offset="100%" stopColor="#404040" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      label: "Ruby",
      id: "#438",
      shape: (
        <svg
          className="shape-diamond"
          width="30"
          height="32"
          viewBox="0 0 30 32"
          fill="none"
        >
          <polygon points="15,2 28,15 15,30 2,15" fill="url(#rg2)" />
          <polygon points="15,2 28,15 15,17" fill="rgba(0,0,0,0.2)" />
          <defs>
            <linearGradient
              id="rg2"
              x1="2"
              y1="2"
              x2="28"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#e5e5e5" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];
  return (
    <div
      className="flex flex-col items-center justify-center w-full px-4 py-4"
      style={{ minHeight: 192, background: "#fff" }}
    >
      <div className="flex items-center justify-center gap-2.5 w-full">
        {cards.map((card) => (
          <div
            key={card.label}
            className="flex flex-col rounded-sm overflow-hidden"
            style={{
              width: 66,
              height: 108,
              border: "1px solid #e5e5e5",
              background: "#fff",
              boxShadow:
                "0 1px 4px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="flex items-center justify-center flex-1"
              style={{
                background: "#f5f5f5",
                borderBottom: "1px solid #e5e5e5",
                overflow: "hidden",
              }}
            >
              {card.shape}
            </div>
            <div className="px-2 py-1.5 flex flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <span
                  style={{
                    fontSize: 7,
                    color: "#737373",
                    letterSpacing: "0.04em",
                    fontWeight: 500,
                  }}
                >
                  SPACE
                </span>
                <span
                  style={{ fontSize: 6.5, color: "#0a0a0a", fontWeight: 600 }}
                >
                  ◆
                </span>
              </div>
              <span
                style={{
                  fontSize: 8,
                  color: "#171717",
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                {card.label}
              </span>
              <span style={{ fontSize: 6.5, color: "#a3a3a3" }}>{card.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── id 9 ─────────────────────────────────────────────────────────────────────
function FeatureSectionThumb() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full px-4 py-4"
      style={{ minHeight: 140, background: "#f5f5f5" }}
    >
      <div className="flex flex-col items-center mb-3 gap-0.5">
        <span
          style={{
            fontSize: 6,
            color: "#737373",
            fontWeight: 600,
            letterSpacing: "0.08em",
          }}
        >
          ✦ FEATURES
        </span>
        <span
          style={{
            fontSize: 10,
            fontWeight: 800,
            color: "#0a0a0a",
            letterSpacing: "-0.03em",
          }}
        >
          Magic Tools
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 4,
          width: "100%",
        }}
      >
        <div
          className="feat-1"
          style={{
            background: "#fff",
            borderRadius: 5,
            border: "0.5px solid #e5e5e5",
            padding: "6px 6px 5px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 1.5,
              height: 18,
              marginBottom: 4,
            }}
          >
            {[10, 14, 8, 16, 12, 18, 14].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: h,
                  borderRadius: 1,
                  background: i === 5 ? "#0a0a0a" : "#d4d4d4",
                }}
              />
            ))}
          </div>
          <span style={{ fontSize: 6, color: "#404040", fontWeight: 600 }}>
            Dashboard
          </span>
        </div>
        <div
          className="feat-2"
          style={{
            background: "#fff",
            borderRadius: 5,
            border: "0.5px solid #e5e5e5",
            padding: "6px 6px 5px",
          }}
        >
          <div style={{ marginBottom: 4 }}>
            <div
              style={{
                background: "#0a0a0a",
                borderRadius: 3,
                height: 14,
                width: "100%",
                display: "flex",
                alignItems: "center",
                paddingLeft: 4,
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 1,
                  background: "rgba(255,255,255,0.5)",
                }}
              />
            </div>
          </div>
          <span style={{ fontSize: 6, color: "#404040", fontWeight: 600 }}>
            Payments
          </span>
        </div>
        <div
          className="feat-3"
          style={{
            background: "#fff",
            borderRadius: 5,
            border: "0.5px solid #e5e5e5",
            padding: "6px 6px 5px",
          }}
        >
          <div style={{ marginBottom: 4 }}>
            <div
              style={{
                border: "0.5px solid #d4d4d4",
                borderRadius: 2,
                padding: "2px 3px",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              {[100, 75, 88].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: 1.5,
                    borderRadius: 1,
                    background: i === 2 ? "#0a0a0a" : "#d4d4d4",
                    width: `${w}%`,
                  }}
                />
              ))}
            </div>
          </div>
          <span style={{ fontSize: 6, color: "#404040", fontWeight: 600 }}>
            Export
          </span>
        </div>
        <div
          className="feat-4"
          style={{
            background: "#fff",
            borderRadius: 5,
            border: "0.5px solid #e5e5e5",
            padding: "6px 6px 5px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 18,
              marginBottom: 4,
            }}
          >
            <div style={{ position: "relative", width: 24, height: 18 }}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#0a0a0a",
                }}
              />
              {(
                [
                  [10, 4],
                  [-10, 4],
                  [0, -7],
                  [0, 7],
                ] as [number, number][]
              ).map(([x, y], i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: "translate(-50%,-50%)",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#d4d4d4",
                    border: "0.5px solid #a3a3a3",
                  }}
                />
              ))}
            </div>
          </div>
          <span style={{ fontSize: 6, color: "#404040", fontWeight: 600 }}>
            Multilingual
          </span>
        </div>
        <div
          className="feat-5"
          style={{
            background: "#fff",
            borderRadius: 5,
            border: "0.5px solid #e5e5e5",
            padding: "6px 6px 5px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 18,
              marginBottom: 4,
            }}
          >
            <div style={{ display: "flex" }}>
              {["#0a0a0a", "#525252", "#a3a3a3", "#d4d4d4"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: c,
                    marginLeft: i === 0 ? 0 : -3,
                    border: "1px solid #fff",
                  }}
                />
              ))}
            </div>
          </div>
          <span style={{ fontSize: 6, color: "#404040", fontWeight: 600 }}>
            Affiliates
          </span>
        </div>
        <div
          className="feat-6"
          style={{
            background: "#fff",
            borderRadius: 5,
            border: "0.5px solid #e5e5e5",
            padding: "6px 6px 5px",
          }}
        >
          <div style={{ marginBottom: 4 }}>
            <div
              style={{
                background: "#f5f5f5",
                border: "0.5px solid #d4d4d4",
                borderRadius: 3,
                padding: "2px 4px",
              }}
            >
              <div
                style={{
                  height: 1.5,
                  background: "#0a0a0a",
                  borderRadius: 1,
                  width: "80%",
                  marginBottom: 1.5,
                }}
              />
              <div
                style={{
                  height: 1.5,
                  background: "#d4d4d4",
                  borderRadius: 1,
                  width: "55%",
                }}
              />
            </div>
          </div>
          <span style={{ fontSize: 6, color: "#0a0a0a", fontWeight: 700 }}>
            Support
          </span>
        </div>
      </div>
    </div>
  );
}

// Thumbnail switch — id matches display number directly
function Thumbnail({ id }: { id: number }) {
  switch (id) {
    case 1:
      return <NavPillThumb />;
    case 2:
      return <BentoThumb />;
    case 3:
      return <DarkBentoThumb />;
    case 4:
      return <FloatingMenuThumb />;
    case 5:
      return <CTAThumb />;
    case 6:
      return <FlipCardsThumb />;
    case 7:
      return <HeroThumb />;
    case 8:
      return <ReactiveCardThumb />;
    case 9:
      return <FeatureSectionThumb />;
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
        <div className="max-w-4xl mx-auto relative px-16 pb-20">
          <div className="absolute left-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
          <div className="absolute right-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />

          <div className="pt-20 pb-8">
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
            <div className="rounded-xl overflow-hidden border border-neutral-200 flex flex-col gap-px bg-neutral-200">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
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
                  More Coming Soon
                </p>
              </div>
            </div>
          ) : (
            <div
              className="rounded-xl overflow-hidden border border-neutral-200"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1px",
                background: "#e5e5e5",
              }}
            >
              {/* Row 1 — No.01 Pill Navbar */}
              <CardCell
                component={COMPONENTS.find((c) => c.id === 1)!}
                hovered={hoveredId === 1}
                onEnter={() => setHoveredId(1)}
                onLeave={() => setHoveredId(null)}
                gridArea="1 / 1 / 2 / 5"
              />
              {/* Row 2 — No.02 Bento / No.03 Dark Bento / No.04 Floating Menu */}
              <CardCell
                component={COMPONENTS.find((c) => c.id === 2)!}
                hovered={hoveredId === 2}
                onEnter={() => setHoveredId(2)}
                onLeave={() => setHoveredId(null)}
                gridArea="2 / 1 / 3 / 2"
              />
              <CardCell
                component={COMPONENTS.find((c) => c.id === 3)!}
                hovered={hoveredId === 3}
                onEnter={() => setHoveredId(3)}
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
              {/* Row 3 — No.05 CTA Section */}
              <CardCell
                component={COMPONENTS.find((c) => c.id === 5)!}
                hovered={hoveredId === 5}
                onEnter={() => setHoveredId(5)}
                onLeave={() => setHoveredId(null)}
                gridArea="3 / 1 / 4 / 5"
              />
              {/* Row 4 — No.06 Flip Cards / No.07 Hero Section */}
              <CardCell
                component={COMPONENTS.find((c) => c.id === 6)!}
                hovered={hoveredId === 6}
                onEnter={() => setHoveredId(6)}
                onLeave={() => setHoveredId(null)}
                gridArea="4 / 1 / 5 / 3"
              />
              <CardCell
                component={COMPONENTS.find((c) => c.id === 7)!}
                hovered={hoveredId === 7}
                onEnter={() => setHoveredId(7)}
                onLeave={() => setHoveredId(null)}
                gridArea="4 / 3 / 5 / 5"
              />
              {/* Row 5 — No.08 Reactive Card / No.09 Feature Section */}
              <CardCell
                component={COMPONENTS.find((c) => c.id === 8)!}
                hovered={hoveredId === 8}
                onEnter={() => setHoveredId(8)}
                onLeave={() => setHoveredId(null)}
                gridArea="5 / 1 / 6 / 3"
              />
              <CardCell
                component={COMPONENTS.find((c) => c.id === 9)!}
                hovered={hoveredId === 9}
                onEnter={() => setHoveredId(9)}
                onLeave={() => setHoveredId(null)}
                gridArea="5 / 3 / 6 / 5"
              />
              {/* Row 6 — More coming soon */}
              <div
                className="bg-white flex flex-col items-center justify-center gap-3 py-14"
                style={{ gridArea: "6 / 1 / 7 / 5" }}
              >
                <PulseButton />
                <p className="text-[14px] font-medium text-neutral-900">
                  More Coming Soon
                </p>
              </div>
            </div>
          )}

          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-[12px] text-neutral-400">
              Follow the Journey — @kuma19028
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
