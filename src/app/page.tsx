import { Container } from "@/components/container";
import { Projects } from "@/components/projects";
import { LandingBlogs } from "@/components/landing-blogs";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/sub-heading";
import { projects } from "@/constants/projects";
import { Work } from "@/components/work";
import Github from "@/components/ui/github";
import { SpotlightLogo } from "@/components/spotlight-logo";
import Intro from "@/components/intro";
import SocialLinks from "@/components/social";
import Stack from "@/components/stack";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-start justify-start">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        {/* <div
          className="absolute right-0 inset-y-0 w-8 border-l border-r border-[var(--edge-border)] 
  bg-[repeating-linear-gradient(315deg,var(--edge-border)_0,var(--edge-border)_1px,transparent_0,transparent_50%)]
  bg-[length:10px_10px] bg-fixed"
        />
        <div
          className="absolute left-0 inset-y-0 w-8 border-l border-r border-[var(--edge-border)] 
  bg-[repeating-linear-gradient(315deg,var(--edge-border)_0,var(--edge-border)_1px,transparent_0,transparent_50%)]
  bg-[length:10px_10px] bg-fixed"
        /> */}
        {/* <SpotlightLogo /> */}
        <div className="pt-8 flex justify-start pl-5 pb-5 gap-3">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-300 dark:border-gray-700 rounded-full px-4 py-1.5 dark:bg-neutral-900">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-500 opacity-75" />
              <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-600" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-transparent" />
            </span>
            <span className="text-xs font-medium text-gray-800 whitespace-nowrap dark:text-white">
              Open To Work
            </span>
          </div>
        </div>
        <Heading>Anupam Kumar Krishnan</Heading>
        <Subheading>
          Frontend Engineer with 3 Years of Experience building <br /> scalable
          React, Next.js and TypeScript applications.
        </Subheading>
        {/* <div className="flex flex-wrap gap-3 pl-5 pt-6 pb-2">
          <a
            href="mailto:anupamk.krishnan@gmail.com"
            className="inline-flex items-center gap-2 bg-primary hover:bg-gray-800 transition-colors duration-200 text-white rounded-sm px-5 py-2.5 text-sm font-medium"
          >
            Hire Me
          </a>
          <a
            href="https://drive.google.com/file/d/1LSz7N6CQu0tcG-xW5rQYHarRaSx0sYgK/view?usp=sharing"
            target="_blank"
            download
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-800 border border-gray-300 rounded-sm px-5 py-2.5 text-sm font-medium"
          >
            View Resume
          </a>
        </div> */}

        <Intro />
        <SocialLinks />
        <Github />
        <Projects projects={projects.slice(0, 3)} />
        <Work />
        <Stack />
        <LandingBlogs />
      </Container>
    </div>
  );
}
