import { Container } from "@/components/container";
import { getBlogs } from "@/utils/mdx"; // remove unused imports
import Link from "next/link";
import Heading from "@/components/heading";
import Subheading from "@/components/sub-heading";

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
        <div className="absolute right-0 top-0 h-full w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="absolute left-0 top-0 h-full w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <Heading>All Blogs</Heading>
        <Subheading className="pb-8">
          I&apos;m a Software Engineer with a passion for building scalable and
          efficient systems with expertise in Frontend Development.
        </Subheading>
        <div className="flex flex-col gap-8 py-10 shadow-section-inset">
          {allBlogs.map((blog) => (
            <Link key={blog.title} href={`/blog/${blog.slug}`}>
              <div className="flex items-center justify-between px-4">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm md:text-sm px-4">
                  {new Date(blog.date || "").toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm pb-7 px-4">
                {truncate(blog.description || "", 175)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
