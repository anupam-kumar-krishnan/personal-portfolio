import { Container } from "@/components/container";
import { Metadata } from "next";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";
import ReadingProgressPill from "@/components/blog-progress-pill";
import Link from "next/link";
import { Undo2 } from "lucide-react";
import BlogMeta from "@/components/date-share-blog";

export const metadata: Metadata = {
  title: "All blogs - Anupam",
  description: "All my general wisdom and thoughts",
};

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  // ✅ FIXED: Await params in Next.js 15
  const { slug } = await params;

  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog as {
    content: React.ReactElement;
    frontmatter: { title: string; image?: string; date: string };
  };

  console.log(frontmatter);

  return (
    <div className="min-h-screen flex items-start justify-start">
      <ReadingProgressPill title={frontmatter.title} targetId="blog-content" />
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <div className="absolute right-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
        <div className="absolute left-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
        <Link
          href="/blog"
          className="ml-4 md:ml-18 mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
        >
          <Undo2 className="h-4 w-4" />
          Back to Blog
        </Link>
        {frontmatter.image && (
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="max-h-96 w-full border border-neutral-200 shadow-2xl rounded-2xl max-w-2xl mx-auto mb-20 object-cover"
          />
        )}

        <div id="blog-content" className="prose dark:prose-invert mx-auto">
          <BlogMeta
            date={frontmatter.date}
            title={frontmatter.title}
            url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`}
          />

          {content}
        </div>
      </Container>
    </div>
  );
}
