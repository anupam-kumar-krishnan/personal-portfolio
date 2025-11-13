import { Container } from "@/components/container";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { getBlogs, getSingleBlog, getBlogFrontMatterBySlug } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import Heading from "@/components/heading";
import Subheading from "@/components/sub-heading";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const frontmatter = await getBlogFrontMatterBySlug(params.slug);

  if (!frontmatter) {
    return {
      title: "All Blogs",
    };
  }
  return {
    title: frontmatter.title + " Anupam Kumar Krishnan",
    description: frontmatter.description,
  };
}

export default async function BlogsPage() {
  const allBlogs = await getBlogs();
  console.log("allBlogs", allBlogs);

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-10 md:pt-20 md:pb-10">
        <Heading>All Blogs</Heading>
        <Subheading>
          I'm a Software Engineer with a passion for building scalable and
          efficient systems with expertise in Frontend Development.
        </Subheading>
        <div className="flex flex-col gap-4 py-10">
          {allBlogs.map((blog, idx) => (
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
              <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
