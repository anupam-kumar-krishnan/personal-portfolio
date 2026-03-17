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

        <div className="pt-8 flex justify-start pl-5 pb-5">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-500 opacity-75" />
              <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-600" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-transparent" />
            </span>
            <span className="text-xs font-medium text-gray-800 whitespace-nowrap">
              Open To Work
            </span>
          </div>
        </div>

        <Heading>Anupam Kumar Krishnan</Heading>
        <Subheading>
          Frontend Engineer Who Crafts Fast, Scalable UIs.
          <br /> Ex-IBM · Ships Components Daily · Writes about the Web.
        </Subheading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Work />
      </Container>
    </div>
  );
}
