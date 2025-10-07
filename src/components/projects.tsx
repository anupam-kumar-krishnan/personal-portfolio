"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export const Projects = () => {
  const projects = [
    {
      title: "UI Library",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
      href: "#",
      description:
        "A UI Library consisting of 25+ re-usable components having suttle animation",
    },
    {
      title: "Resume Reviewer",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/animated-testimonials.webp",
      href: "#",
      description:
        "A UI Library consisting of 25+ re-usable components having suttle animation",
    },
    {
      title: "Code Snippet",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/apple-cards-carousel.png",
      href: "#",
      description:
        "A UI Library consisting of 25+ re-usable components having suttle animation",
    },
    {
      title: "iSad",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/apple-cards-carousel.png",
      href: "#",
      description:
        "A UI Library consisting of 25+ re-usable components having suttle animation",
    },
  ];
  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love building web apps and products that can impact millions of lives
      </p>
      <div className="grid grid-cols-1 gap-15 py-4 md:grid-cols-2">
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
            className="group relative h-72 mb-4"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                height={300}
                width={300}
                className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <h2 className="z-20 mt-2 font-semibold tracking-tight text-neutral-500 dark:text-neutral-400">
                {project.title}
              </h2>
              <p className="mt-2 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
