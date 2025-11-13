import { Container } from "@/components/container";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import { promises as fs } from "fs";
import path from "path";

import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import { option } from "motion/react-client";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "All blogs - Anupam",
  description: "All my general wisdom and thoughts",
};

export default async function SingleBlogPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = params.slug;

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
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="max-h-96 w-full border border-neutral-200 shadow-2xl rounded-2xl max-w-2xl mx-auto mb-20 object-cover"
        />
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
