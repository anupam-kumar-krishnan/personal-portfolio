"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Project, projects as defaultProjects } from "@/constants/projects";
import SectionHeading from "./section-heading";
import { IconType } from "react-icons";
import { FaGlobe, FaGithub } from "react-icons/fa";

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
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
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

              <div className="z-10 gap-1.5 flex text-sm tracking-tight text-neutral-500 dark:text-neutral-400 absolute right-0">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                  >
                    <div className="flex gap-1">
                      <FaGithub className="text-xl hover:text-black transition h-4 w-4" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
