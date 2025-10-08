import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

type FrontMatter = {
  title: string;
  description: string;
  date: string;
  image: string;
};

export const getSingleBlog = async (slug: string) => {
  try {
    const filePath = path.join(process.cwd(), "src/data", `${slug}.mdx`);
    const singleBlog = await fs.readFile(filePath, "utf-8");

    if (!singleBlog) return null;

    const { content, frontmatter } = await compileMDX<{ title: string }>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (error) {
    console.error(`Error reading blog file for slug "${slug}"`, error);
    return null;
  }
};

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "src/data"));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontmatter = await getBlogFrontMatterBySlug(slug);
      return { slug, ...frontmatter };
    })
  );

  return allBlogs;
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
  try {
    const filePath = path.join(process.cwd(), "src/data", `${slug}.mdx`);
    const singleBlog = await fs.readFile(filePath, "utf-8");

    const { frontmatter } = await compileMDX<FrontMatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return frontmatter;
  } catch (error) {
    console.error(`Error reading frontmatter for slug "${slug}"`, error);
    return null;
  }
};
