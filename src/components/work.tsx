import React from "react";
import { getBlogs } from "@/utils/mdx";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

export const Work = async () => {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="">
      <SectionHeading
        className="w-fit ml-5 pt-0.5 pb-0.5 mb-5 pl-0.5 pr-0.5 bg-neutral-100 text-neutral-700"
        delay={0.4}
      >
        Worked at Reputed Firm
      </SectionHeading>

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
              className="absolute w-20 h-16 right-10 -mt-8 sm:w-30 sm:h-22"
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
          <p className="flex gap-1.5">
            <FaHtml5 className="w-5 h-5 text-orange-500" />
            <FaCss3Alt className="w-5 h-5 text-blue-500" />
            <FaJs className="w-5 h-5 text-yellow-500" />
            <FaReact className="w-5 h-5 text-sky-400" />
            <SiRedux className="w-5 h-5 text-purple-500" />
            <SiTailwindcss className="w-5 h-5 text-sky-300" />
            <RiNextjsLine className="w-5 h-5" />
          </p>
        </div>
      </div>
    </div>
  );
};
