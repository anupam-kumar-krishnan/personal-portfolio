"use client";
import React from "react";
import { motion } from "motion/react";

export const Heading = ({
  as: Tag = "h1",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      <Tag className="text-primary text-2xl font-bold tracking-tighter drop-shadow-lg md:text-4xl">
        {children}
      </Tag>
    </motion.div>
  );
};

export default Heading;
