import React from "react";
import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import SectionHeading from "@/components/section-heading";

export const LandingBlogs = async () => {
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
        I love writing things down
      </SectionHeading>

      <div className="flex flex-col gap-8 px-4">
        {allBlogs.slice(0, 3).map((blog, idx) => (
          <Link key={blog.title} href={`/blog/${blog.slug}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-primary text-base font-bold tracking-tight">
                {blog.title}
              </h2>
              <p className="text-secondary text-sm md:text-sm">
                {new Date(blog.date || "").toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm sm:pb-5">
              {truncate(blog.description || "", 120)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
