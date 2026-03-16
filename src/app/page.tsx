import { Container } from "@/components/container";
import { Inter } from "next/font/google";
import { Projects } from "@/components/projects";
import { LandingBlogs } from "@/components/landing-blogs";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/sub-heading";
import { projects } from "@/constants/projects";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <div
          className="absolute right-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] 
  bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
  bg-[length:10px_10px] bg-fixed"
        ></div>

        <div
          className="absolute left-0 top-0 h-full w-8 border-l border-r border-[var(--pattern-fg)] 
  bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
  bg-[length:10px_10px] bg-fixed"
        ></div>
        <Heading>Anupam Kumar Krishnan</Heading>
        <Subheading>
          I&apos;m a Software Engineer with a passion for building scalable and
          efficient systems with expertise in Frontend Development.
        </Subheading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Work />
      </Container>
    </div>
  );
}
