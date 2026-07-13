import React from "react";
import { getBlogs } from "@/utils/mdx";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiJest,
  SiPrisma,
  SiSupabase,
  SiPostgresql,
  SiResend,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const techStack = [
  {
    icon: <FaHtml5 className="w-4 h-4" />,
    label: "HTML5",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    icon: <FaCss3Alt className="w-4 h-4" />,
    label: "CSS3",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: <FaJs className="w-4 h-4" />,
    label: "JavaScript",
    color: "text-yellow-500",
    bg: "bg-yellow-100",
    border: "border-yellow-200",
  },
  {
    icon: <FaReact className="w-4 h-4" />,
    label: "React.js",
    color: "text-sky-400",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    icon: <SiJest className="w-4 h-4" />,
    label: "Jest",
    color: "text-[#c13a13]",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    icon: <SiRedux className="w-4 h-4" />,
    label: "Redux",
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: <SiTailwindcss className="w-4 h-4" />,
    label: "Tailwind CSS",
    color: "text-cyan-400",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
  },
  {
    icon: <RiNextjsLine className="w-4 h-4" />,
    label: "Next.js",
    color: "text-neutral-800",
    bg: "bg-neutral-100",
    border: "border-neutral-300",
  },
];

const TechBadge = ({
  icon,
  label,
  color,
  bg,
  border,
}: (typeof techStack)[0]) => (
  <div
    className={`
      group relative flex items-center justify-center
      w-8 h-8 rounded-full border ${border} ${bg}
      -ml-2 first:ml-0
      cursor-pointer
      transition-all duration-300 ease-out
      hover:w-auto hover:rounded-full hover:px-2.5 hover:z-10
      hover:shadow-md
      z-0 hover:scale-105
    `}
    style={{ minWidth: "2rem" }}
  >
    <span className={`${color} flex-shrink-0`}>{icon}</span>
    <span
      className={`
        ${color} text-xs font-medium
        max-w-0 overflow-hidden whitespace-nowrap
        transition-all duration-300 ease-out
        group-hover:max-w-[80px] group-hover:ml-1.5
      `}
    >
      {label}
    </span>
  </div>
);

const techStack2 = [
  {
    icon: <FaReact className="w-4 h-4" />,
    label: "React.js",
    color: "text-sky-400",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    icon: <RiNextjsLine className="w-4 h-4" />,
    label: "Next.js",
    color: "text-neutral-800",
    bg: "bg-neutral-100",
    border: "border-neutral-300",
  },
  {
    icon: <SiTailwindcss className="w-4 h-4" />,
    label: "Tailwind CSS",
    color: "text-cyan-400",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
  },
  {
    icon: <SiJest className="w-4 h-4" />,
    label: "Jest",
    color: "text-[#c13a13]",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    icon: <SiRedux className="w-4 h-4" />,
    label: "Redux",
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: <SiPrisma className="w-4 h-4" />,
    label: "Prisma",
    color: "text-green-500",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: <SiSupabase className="w-4 h-4" />,
    label: "Supabase",
    color: "text-green-500",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: <SiPostgresql className="w-4 h-4" />,
    label: "PostgreSQL",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: <SiResend className="w-4 h-4" />,
    label: "Resend",
    color: "text-grey-500",
    bg: "bg-grey-50",
    border: "border-grey-200",
  },
];

const TechBadge2 = ({
  icon,
  label,
  color,
  bg,
  border,
}: (typeof techStack)[0]) => (
  <div
    className={`
      group relative flex items-center justify-center
      w-8 h-8 rounded-full border ${border} ${bg}
      -ml-2 first:ml-0
      cursor-pointer
      transition-all duration-300 ease-out
      hover:w-auto hover:rounded-full hover:px-2.5 hover:z-10
      hover:shadow-md
      z-0 hover:scale-105
    `}
    style={{ minWidth: "2rem" }}
  >
    <span className={`${color} flex-shrink-0`}>{icon}</span>
    <span
      className={`
        ${color} text-xs font-medium
        max-w-0 overflow-hidden whitespace-nowrap
        transition-all duration-300 ease-out
        group-hover:max-w-[80px] group-hover:ml-1.5
      `}
    >
      {label}
    </span>
  </div>
);

export const Work = async () => {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="pt-4 border-y border-neutral-100 shadow-section-inset">
      <SectionHeading
        className={
          "w-fit ml-5 mb-5 bg-neutral-100 text-neutral-700 dark:bg-[#262727] dark:text-white rounded-md px-3 py-1"
        }
        delay={0.4}
      >
        Worked at Reputed Firm
      </SectionHeading>

      <div className="flex flex-col gap-2 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-primary text-base font-bold tracking-tight">
            Nexly Pvt. Ltd.
          </h2>
          <p className="text-secondary text-sm md:text-sm absolute left-50">
            Apr 2026 - June 2026
          </p>
          <p className="text-secondary text-sm md:text-sm">
            {/* <img
              src="https://www.freepnglogos.com/uploads/ibm-logo-png/ibm-logo-png-transparent-svg-vector-bie-supply-3.png"
              className="absolute hidden lg:block right-10 -mt-8 sm:w-30 sm:h-22"
            /> */}
          </p>
        </div>
        <p className="text-secondary max-w-xl text-sm md:text-sm sm:pb-3">
          Built{" "}
          <Link
            href="https://www.architechiq.com/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-neutral-400 underline-offset-2 transition-colors hover:text-primary"
          >
            ArchitechIQ
          </Link>
          , an AI-assisted System Design platform with an interactive design
          canvas, live AI interview scenarios, and automated performance
          scorecards to evaluate candidate solutions.
        </p>
        <p className="text-secondary max-w-xl text-sm md:text-sm sm:pb-3">
          Engineered an AI-powered{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            className="underline decoration-neutral-400 underline-offset-2 transition-colors hover:text-primary"
            href="https://www.resumebanao.com/"
          >
            Resume Builder SaaS
          </Link>{" "}
          featuring secure authentication, REST API integration, ATS resume
          analysis, Razorpay payment integration, and AI-driven resume
          enhancement.
        </p>
        <div className="pb-5">
          <div className="flex items-center pl-2">
            {techStack2.map((tech, i) => (
              <TechBadge2 key={i} {...tech} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-primary text-base font-bold tracking-tight">
            IBM India Pvt. Ltd.
          </h2>
          <p className="text-secondary text-sm md:text-sm absolute left-50">
            Mar 2023 - Aug 2025
          </p>
          <p className="text-secondary text-sm md:text-sm">
            <img
              src="https://www.freepnglogos.com/uploads/ibm-logo-png/ibm-logo-png-transparent-svg-vector-bie-supply-3.png"
              className="absolute hidden lg:block right-10 -mt-8 sm:w-30 sm:h-22"
            />
          </p>
        </div>
        <p className="text-secondary max-w-xl text-sm md:text-sm sm:pb-3">
          Wrote clean and reusable components, reducing code duplication by 25%
          and improving maintainability.
        </p>
        <p className="text-secondary max-w-xl text-sm md:text-sm sm:pb-3">
          Ensured seamless cross-device compatibility across major platforms,
          improving accessibility score by 15%.
        </p>
        <div className="pb-5">
          <div className="flex items-center pl-2">
            {techStack.map((tech, i) => (
              <TechBadge key={i} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
