"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

type Blog = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
};

const truncate = (str: string, length: number) => {
  return str.length > length ? str.substring(0, length) + "..." : str;
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const [activeTag, setActiveTag] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  // Derive tag list + counts from the blogs themselves, so it's
  // always in sync with whatever tags actually exist on posts.
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    blogs.forEach((blog) => {
      blog.tags?.forEach((tag) => {
        counts.set(tag, (counts.get(tag) || 0) + 1);
      });
    });

    return [
      { name: "All", count: blogs.length },
      ...Array.from(counts.entries())
        .sort((a, b) => b[1] - a[1]) // most-used tags first
        .map(([name, count]) => ({ name, count })),
    ];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    if (activeTag === "All") return blogs;
    return blogs.filter((blog) => blog.tags?.includes(activeTag));
  }, [blogs, activeTag]);

  const updateFades = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftFade(el.scrollLeft > 4);
    setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateFades();
    window.addEventListener("resize", updateFades);
    return () => window.removeEventListener("resize", updateFades);
  }, [categories]);

  return (
    <>
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={updateFades}
          className="flex flex-nowrap items-center gap-2 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((cat) => {
            const isActive = activeTag === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveTag(cat.name)}
                className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-[#dfdddd] text-secondary hover:bg-neutral-300 dark:bg-white/5 dark:hover:bg-white/10"
                }`}
              >
                {cat.name}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    isActive
                      ? "bg-white/20 dark:bg-black/10"
                      : "bg-white/60 dark:bg-white/10"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {showLeftFade && (
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white via-white/70 to-transparent backdrop-blur-[2px] dark:from-neutral-950 dark:via-neutral-950/70" />
        )}
        {showRightFade && (
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white via-white/70 to-transparent backdrop-blur-[2px] dark:from-neutral-950 dark:via-neutral-950/70" />
        )}
      </div>

      <div className="flex flex-col gap-8 py-10 shadow-section-inset">
        {filteredBlogs.map((blog) => (
          <Link key={blog.title} href={`/blog/${blog.slug}`}>
            <div className="flex items-center justify-between px-4">
              <h2 className="text-primary text-base font-bold tracking-tight">
                {blog.title}
              </h2>
              <p className="text-secondary text-sm md:text-sm px-4 flex gap-1.5">
                <CalendarDays className="h-4.5 w-4.5" />
                <span>
                  {new Date(blog.date || "").toLocaleDateString("en-us", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </p>
            </div>
            <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm pb-3 px-4">
              {truncate(blog.description || "", 175)}
            </p>
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 px-4 pb-7">
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
    </>
  );
}
