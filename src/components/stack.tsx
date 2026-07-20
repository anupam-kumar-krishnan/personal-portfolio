import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiRadixui,
  SiFramer,
  SiExpo,
  SiNodedotjs,
  SiBun,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiNginx,
  SiClaude,
  SiGooglegemini,
  SiOpenai,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiJira,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";
import { FileText } from "lucide-react";
import type { ReactNode } from "react";
import SectionHeading from "./section-heading";

// PostHog's mark is inherently multi-color (blue/red/yellow bars + dark
// hedgehog silhouette), so it can't be represented with a single
// currentColor swap like the other icons. Render it as a true multi-color
// SVG and use a CSS grayscale filter for the muted state instead.
function PostHogLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="20" width="7" height="12" rx="2" fill="#1D4AFF" />
      <rect x="9" y="14" width="7" height="18" rx="2" fill="#F54E00" />
      <rect x="18" y="8" width="7" height="24" rx="2" fill="#F9BD2B" />
      <path d="M27 32 L27 4 L40 20 Z" fill="#151515" />
    </svg>
  );
}

// The official Figma mark is five filled shapes in distinct brand colors
// (not an outline), so — like PostHog and Python — render the real
// multicolor glyph and grayscale-toggle it instead of a currentColor swap.
function FigmaLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 38 57"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#1ABCFE"
        d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
      />
      <path
        fill="#0ACF83"
        d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
      />
      <path
        fill="#FF7262"
        d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
      />
      <path
        fill="#F24E1E"
        d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
      />
      <path
        fill="#A259FF"
        d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
      />
    </svg>
  );
}

// The official Python mark is two interlocking snakes in distinct blue and
// yellow, so — like PostHog and Figma — render the real two-tone glyph and
// grayscale-toggle it instead of a currentColor swap.
function PythonLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#3776AB"
        d="M11.914 0c-.926 0-1.813.08-2.594.222-2.294.412-2.712 1.271-2.712 2.856v2.093h5.424v.687H8.6H4.598c-1.595 0-2.99.958-3.427 2.782-.502 2.09-.524 3.393 0 5.574.39 1.622 1.32 2.782 2.916 2.782h1.887v-2.508c0-1.813 1.568-3.415 3.427-3.415h5.417c1.526 0 2.744-1.257 2.744-2.79V3.078c0-1.489-1.255-2.606-2.744-2.856C13.888.078 12.9 0 11.914 0zM9.117 1.734c.582 0 1.058.483 1.058 1.078 0 .594-.476 1.073-1.058 1.073-.584 0-1.058-.479-1.058-1.073 0-.595.474-1.078 1.058-1.078z"
      />
      <path
        fill="#FFD43B"
        d="M18.096 6.858v2.437c0 1.892-1.603 3.484-3.427 3.484H9.252c-1.503 0-2.744 1.286-2.744 2.79v5.226c0 1.489 1.294 2.365 2.744 2.79 1.734.508 3.397.6 5.417 0 1.365-.395 2.744-1.19 2.744-2.79v-2.093h-5.417v-.687h5.417 2.712c1.595 0 2.19-1.113 2.744-2.782.573-1.72.548-3.375 0-5.574-.393-1.582-1.147-2.782-2.744-2.782h-2.02zm-3.05 13.42c.584 0 1.058.479 1.058 1.073 0 .595-.474 1.078-1.058 1.078-.582 0-1.058-.483-1.058-1.078 0-.594.476-1.073 1.058-1.073z"
      />
    </svg>
  );
}

type Tech = {
  name: string;
  icon: ReactNode;
  color?: string; // brand hex, revealed on hover (single-color icons)
  multicolor?: boolean; // true = icon is already full color, just toggle grayscale
  alwaysColor?: boolean; // true = render permanently in brand color, no gray/hover toggle (small brand marks that only read correctly in their real color)
};

type Category = {
  number: string;
  label: string;
  items: Tech[];
};

const iconClass = "h-3.5 w-3.5";

const categories: Category[] = [
  {
    number: "01",
    label: "Language",
    items: [
      {
        name: "C++",
        icon: <SiCplusplus className={iconClass} />,
        color: "#00599C",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className={iconClass} />,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className={iconClass} />,
        color: "#3178C6",
      },
      {
        name: "Python",
        icon: <PythonLogo className={iconClass} />,
        multicolor: true,
      },
    ],
  },
  {
    number: "02",
    label: "Frontend",
    items: [
      {
        name: "React",
        icon: <SiReact className={iconClass} />,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className={iconClass} />,
        color: "#000000",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className={iconClass} />,
        color: "#06B6D4",
      },
      {
        name: "shadcn/ui",
        icon: <SiShadcnui className={iconClass} />,
        color: "#000000",
      },
      {
        name: "Motion",
        icon: <SiFramer className={iconClass} />,
        color: "#FFF312",
      },
    ],
  },
  {
    number: "03",
    label: "Backend & Database",
    items: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className={iconClass} />,
        color: "#339933",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className={iconClass} />,
        color: "#336791",
        alwaysColor: true,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className={iconClass} />,
        color: "#47A248",
      },
      {
        name: "Redis",
        icon: <SiRedis className={iconClass} />,
        color: "#DC382D",
      },
    ],
  },
  {
    number: "04",
    label: "Workflow & AI",
    items: [
      {
        name: "Claude",
        icon: <SiClaude className={iconClass} />,
        color: "#D97757",
      },
      {
        name: "ChatGPT",
        icon: <SiOpenai className={iconClass} />,
        color: "#74AA9C",
      },
      { name: "Git", icon: <SiGit className={iconClass} />, color: "#F05032" },
      {
        name: "GitHub",
        icon: <SiGithub className={iconClass} />,
        color: "#181717",
      },
      {
        name: "Docker",
        icon: <SiDocker className={iconClass} />,
        color: "#2496ED",
      },
      {
        name: "Vercel",
        icon: <SiVercel className={iconClass} />,
        color: "#000000",
      },
    ],
  },
  {
    number: "05",
    label: "Analytics",
    items: [
      {
        name: "PostHog",
        icon: <PostHogLogo className={iconClass} />,
        multicolor: true,
      },
    ],
  },
  {
    number: "06",
    label: "Design",
    items: [
      {
        name: "Figma",
        icon: <FigmaLogo className={iconClass} />,
        multicolor: true,
      },
    ],
  },
  {
    number: "07",
    label: "Others",
    items: [
      {
        name: "Jira",
        icon: <SiJira className={iconClass} />,
        color: "#0052CC",
      },
      {
        name: "Postman",
        icon: <SiPostman className={iconClass} />,
        color: "#FF6C37",
      },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="mx-auto w-full pl-5 divide-y divide-neutral-100 dark:divide-neutral-800  border-y border-neutral-100 shadow-section-inset dark:border-neutral-800">
      <SectionHeading
        className="w-fit mt-4 pt-0.5 pb-0.5 mb-5 pl-0.5 pr-0.5 bg-neutral-100 text-neutral-700 dark:bg-[#262727] dark:text-white rounded-md"
        delay={0.4}
      >
        &nbsp;What I build with
      </SectionHeading>
      {categories.map((category) => (
        <div
          key={category.number}
          className="grid grid-cols-1 items-stretch gap-2 py-5 sm:gap-6 sm:[grid-template-columns:140px_1fr]"
        >
          <div className="flex items-baseline gap-2 self-stretch border-neutral-100 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500 sm:border-r sm:pr-4">
            <span className="tabular-nums">{category.number}</span>
            <span>{category.label}</span>
          </div>

          <div className="flex flex-wrap gap-2 sm:pl-2">
            {category.items.map((item) => (
              <span
                key={item.name}
                className="group inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-sm text-black dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
                style={
                  item.color ? { ["--brand" as string]: item.color } : undefined
                }
              >
                {item.multicolor ? (
                  <span className="grayscale transition-all duration-200 group-hover:grayscale-0">
                    {item.icon}
                  </span>
                ) : item.alwaysColor ? (
                  <span className="text-[var(--brand)]">{item.icon}</span>
                ) : (
                  <span className="text-neutral-600 transition-colors duration-200 group-hover:text-[var(--brand)] dark:text-neutral-300">
                    {item.icon}
                  </span>
                )}
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
