import { Container } from "@/components/container";
import { getBlogs } from "@/utils/mdx"; // remove unused imports
import Link from "next/link";
import Heading from "@/components/heading";
import Subheading from "@/components/sub-heading";
import { CalendarDays } from "lucide-react";

export const metadata = {
  title: "All Blogs | Anupam Kumar Krishnan",
  description: "A collection of blogs by Anupam Kumar Krishnan.",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-8 md:pt-20 md:pb-10">
        <div className="absolute right-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
        <div className="absolute left-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
        <Heading>All Blogs</Heading>
        <Subheading className="pb-8">
          A collection of thoughts on current trend, how-tos, and lessons on
          building software in Tech.
        </Subheading>
        <div className="flex flex-col gap-8 py-10 shadow-section-inset">
          {allBlogs.map((blog) => (
            <Link key={blog.title} href={`/blog/${blog.slug}`}>
              <div className="flex items-center justify-between px-4">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm md:text-sm px-4 flex gap-1.5">
                  <CalendarDays className="h-4.5 w-4.5" />
                  <span>
                    {new Date(blog.date || "").toLocaleDateString("en-us", {
                      // weekday: "long",
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
      </Container>
    </div>
  );
}
