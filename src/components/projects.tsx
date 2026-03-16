"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Project, projects as defaultProjects } from "@/constants/projects";
import SectionHeading from "./section-heading";
import { FaGlobe, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
  SiOpenai,
  SiNodedotjs,
  SiMongodb,
  SiShadcnui,
  SiReactrouter,
} from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { IconType } from "react-icons";
import { RiBearSmileFill } from "react-icons/ri";
import { GiPalmTree } from "react-icons/gi";
import { BiLogoPostgresql } from "react-icons/bi";

const iconMap: Record<string, IconType> = {
  react: SiReact,
  tailwind: SiTailwindcss,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  motion: SiFramer,
  openai: SiOpenai,
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
  shadcn: SiShadcnui,
  reactrouter: SiReactrouter,
  puterjs: LuBrainCircuit,
  zustand: RiBearSmileFill,
  tanstack: GiPalmTree,
  postgresql: BiLogoPostgresql,
};

const iconColors: Record<string, string> = {
  react: "#61DAFB",
  tailwind: "#06B6D4",
  nextjs: "#000000",
  typescript: "#3178C6",
  motion: "#FEF42A",
  openai: "#10A37F",
  nodejs: "#539E43",
  mongodb: "#47A248",
  shadcn: "#000000",
  reactrouter: "#f14747",
  puterjs: "#000000",
  zustand: "#736359",
  tanstack: "#569f10",
  postgresql: "#386d94",
};

const TechBadge = ({
  iconKey,
  name,
  index,
}: {
  iconKey: string;
  name: string;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[iconKey];

  if (!Icon) return null;

  return (
    <motion.div
      style={{
        zIndex: hovered ? 10 : 4 - index,
        marginLeft: index === 0 ? 0 : "-8px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        marginLeft: hovered
          ? index === 0
            ? 0
            : "2px"
          : index === 0
            ? 0
            : "-8px",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative"
    >
      <motion.div
        animate={{ width: hovered ? "auto" : "26px" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex items-center gap-1.5 h-[26px] min-w-[26px] rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm overflow-hidden px-1.5"
      >
        <Icon
          className="shrink-0 text-[13px]"
          style={{ color: iconColors[iconKey] ?? "#888" }}
        />
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.15 }}
              className="text-[11px] font-medium text-neutral-600 dark:text-neutral-300 whitespace-nowrap pr-1"
            >
              {name}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export const Projects = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  return (
    <div className="my-4 border-y border-neutral-100 shadow-section-inset">
      <SectionHeading
        delay={0.2}
        className="bg-neutral-100 w-fit mt-10 ml-4 text-center pt-0.5 pb-0.5 pl-0.5 pr-0.5 text-neutral-700 text-sm sm:text:sm"
      >
        I love building things
      </SectionHeading>
      <div className="grid grid-cols-1 gap-15 py-8 md:grid-cols-3 px-4">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeInOut" }}
            key={project.title}
            className="group relative h-80 mb-4"
          >
            <div>
              <Image
                src={project.src}
                alt={project.title}
                height={540}
                width={400}
                className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <h2 className="z-20 mt-2 font-semibold tracking-tight text-neutral-500 dark:text-neutral-400">
                {project.title}
              </h2>
              <p className="mt-2 max-w-xs text-sm text-neutral-500 dark:text-neutral-400 pb-4">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                {/* Overlapping tech badges */}
                <div className="flex items-center">
                  {project.stack?.map((tech, i) => (
                    <TechBadge
                      key={tech.name}
                      iconKey={tech.icon}
                      name={tech.name}
                      index={i}
                    />
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live site"
                    >
                      <FaGlobe className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition h-4 w-4" />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
