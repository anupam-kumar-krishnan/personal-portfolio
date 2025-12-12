import { Container } from "@/components/container";
import { Metadata } from "next";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

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
    frontmatter: { title: string; image?: string };
  };

  console.log(frontmatter);

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <div className="absolute right-0 top-0 h-full w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="absolute left-0 top-0 h-full w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        {frontmatter.image && (
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="max-h-96 w-full border border-neutral-200 shadow-2xl rounded-2xl max-w-2xl mx-auto mb-20 object-cover"
          />
        )}
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
