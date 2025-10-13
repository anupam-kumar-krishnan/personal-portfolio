"use client";
import React, { useRef } from "react";
import { useInView, motion } from "motion/react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { FaCheckCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";

type Data = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title: "Left IBM",
          description: "Left IBM for Self Betterment",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Promoted in IBM",
          description: "Promoted to System Engineer",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Joined IBM",
          description: "Joined IBM India as an Associate System Engineer",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Graduated",
          description:
            "Completed my Graduation in Computer Engineering from D. Y. Patil College of Engineering, Akurdi, Pune",
        },
      ],
    },
    {
      title: "2018",
      content: [
        {
          title: "Joined College",
          description:
            "Joined D. Y. Patil College of Engineering, Akurdi, Pune for Bachelor of Engineering in Computer.",
        },
      ],
    },
  ];
  return (
    <div ref={ref} className="py-10">
      <p className="text-secondary max-w-lg pb-5 text-sm md:text-sm">
        Timeline
      </p>
      {data.map((year, index) => (
        <div key={year.title} className="mb-4">
          <motion.h2
            animate={{
              filter: inView ? "blur(0px)" : "blur(10px)",
              opacity: inView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * index,
            }}
            className="font-bold text-black"
          >
            {year.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {year.content.map((item, idx) => (
              <div key={item.title} className="pl-4">
                <Step isInView={inView} idx={idx}>
                  <motion.h3
                    animate={{
                      opacity: inView ? 1 : 0,
                      y: inView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * idx,
                    }}
                    className="text-neutral-600"
                  >
                    {item.title}
                  </motion.h3>
                </Step>
                {item.description && (
                  <p className="pt-1 text-sm text-neutral-400">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children: React.ReactNode;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * idx,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 pl-4 h-4 w-4 text-neutral-500" />
      {children}
    </motion.div>
  );
};
