"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const SectionHeading = ({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "relative px-4 text-neutral-400 font-normal w-fit pt-4 text-xs md:text-sm pb-4",
        className
      )}
    >
      <span className="absolute -top-px -left-px w-1.5 h-1.5 bg-neutral-300 rounded-full"></span>
      <span className="absolute -top-px -right-px w-1.5 h-1.5 bg-neutral-300 rounded-full"></span>
      <span className="absolute -bottom-px -left-px w-1.5 h-1.5 bg-neutral-300 rounded-full"></span>
      <span className="absolute -bottom-px -right-px w-1.5 h-1.5 bg-neutral-300 rounded-full"></span>
      {children.split(" ").map((word, idx) => (
        <motion.span
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(2px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: delay + idx * 0.05,
            duration: 0.3,
            ease: "easeInOut",
          }}
          key={word + idx}
          viewport={{
            once: true,
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
};

export default SectionHeading;
