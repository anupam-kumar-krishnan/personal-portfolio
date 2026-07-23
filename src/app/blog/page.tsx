import { Container } from "@/components/container";
import { getBlogs } from "@/utils/mdx";
import Heading from "@/components/heading";
import Subheading from "@/components/sub-heading";
import BlogList from "@/components/blog-list";

export const metadata = {
  title: "All Blogs | Anupam Kumar Krishnan",
  description: "A collection of blogs by Anupam Kumar Krishnan.",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-8 md:pt-20 md:pb-10">
        <div className="absolute right-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
        <div className="absolute left-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
        <Heading>Blog</Heading>
        <Subheading className="pb-8">
          A collection of thoughts on current trend, how-tos, and lessons on
          building software in Tech.
        </Subheading>
        <BlogList blogs={allBlogs} />
      </Container>
    </div>
  );
}
