import React from "react";
import { getBlogs } from "@/utils/mdx";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { CalendarDays } from "lucide-react";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="">
      <SectionHeading
        className="w-fit ml-5 mt-5 pt-0.5 pb-0.5 mb-5 pl-0.5 pr-0.5 bg-neutral-100 text-neutral-700 dark:bg-[#262727] dark:text-white rounded-md"
        delay={0.4}
      >
        &nbsp;I love writing things down
      </SectionHeading>

      <div className="flex flex-col gap-8 px-4 pb-8">
        {allBlogs.slice(0, 3).map((blog, idx) => (
          <Link key={blog.title} href={`/blog/${blog.slug}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-primary text-base font-bold tracking-tight">
                {blog.title}
              </h2>
              <p className="text-secondary text-sm md:text-sm flex gap-1.5">
                <CalendarDays className="h-4.5 w-4.5" />
                <span>
                  {new Date(blog.date || "").toLocaleDateString("en-us", {
                    // weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </p>
            </div>
            <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm sm:pb-5">
              {truncate(blog.description || "", 120)}
            </p>
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pb-7">
                {blog.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[10px] text-secondary bg-[#dfdddd] dark:bg-white/5 rounded-sm px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
