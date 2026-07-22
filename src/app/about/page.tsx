import { Container } from "@/components/container";
import { Inter } from "next/font/google";
import { Projects } from "@/components/projects";
import { LandingBlogs } from "@/components/landing-blogs";
import { DraggableCardDemo as Collage } from "@/components/collage";
import { Timeline } from "@/components/timeline";
import Heading from "@/components/heading";
import Subheading from "@/components/sub-heading";
import SectionHeading from "@/components/section-heading";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-8 md:pt-20 md:pb-10">
        <div className="absolute right-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
        <div className="absolute left-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed" />
        <Heading>About Me</Heading>

        <Subheading className="max-w-4xl">
          Software Development Engineer with 3 years of professional experience
          building scalable SaaS and enterprise software, AI-powered products,
          and production systems. Experienced in designing modern frontend
          architectures using React.js, Next.js, TypeScript, Redux, Tailwind
          CSS, and Node.js, while collaborating with cross-functional teams to
          deliver high-quality software.
          <br />
          <br /> When I'm not coding, I'm usually building side projects like
          Snappy UI, writing about the latest in AI tools and frontend
          engineering on my blog, or digging into how new AI models actually
          change the way we build software. <br />
          <br /> Currently open to frontend and full-stack roles, especially
          ones working on AI-driven products.
        </Subheading>
        <SectionHeading className="bg-neutral-100 text-neutral-700 ml-4 mt-5 pt-1 pb-1 pl-0.5 pr-0.5 dark:bg-[#262727] dark:text-white rounded-md">
          Travelling and exploring new places
        </SectionHeading>
        <Collage />
        <Timeline />
      </Container>
    </div>
  );
}
