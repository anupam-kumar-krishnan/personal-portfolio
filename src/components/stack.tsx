import {
  SiTypescript,
  SiJavascript,
  SiPython,
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
  SiFigma,
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

type Tech = {
  name: string;
  icon: ReactNode;
  color?: string; // brand hex, revealed on hover (single-color icons)
  multicolor?: boolean; // true = icon is already full color, just toggle grayscale
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
        icon: <SiPython className={iconClass} />,
        color: "#3776AB",
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
        color: "#4169E1",
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
        icon: <SiFigma className={iconClass} />,
        color: "#F24E1E",
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
    <div className="mx-auto w-full pl-5 divide-y divide-neutral-100 dark:divide-neutral-800  border-y border-neutral-100 shadow-section-inset">
      <SectionHeading
        className="w-fit mt-4 pt-0.5 pb-0.5 mb-5 pl-0.5 pr-0.5 bg-neutral-100 text-neutral-700 dark:bg-[#262727] dark:text-white rounded-md"
        delay={0.4}
      >
        &nbsp;What I build with
      </SectionHeading>
      {categories.map((category) => (
        <div
          key={category.number}
          className="grid items-stretch gap-6 py-5"
          style={{ gridTemplateColumns: "140px 1fr" }}
        >
          <div className="flex items-baseline gap-2 self-stretch border-r border-neutral-100 pr-4 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
            <span className="tabular-nums">{category.number}</span>
            <span>{category.label}</span>
          </div>

          <div className="flex flex-wrap gap-2 pl-2">
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
