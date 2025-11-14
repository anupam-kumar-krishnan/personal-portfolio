import { Container } from "@/components/container";
import { Projects } from "@/components/projects";
import { Heading } from "@/components/heading";
import Subheading from "@/components/sub-heading";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-8 md:pt-20 md:pb-10">
        <div className="absolute right-0 top-0 h-full w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="absolute left-0 top-0 h-full w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <Heading>Projects</Heading>
        <Subheading>
          I&apos;m a passionate Software Engineer dedicated to crafting elegant
          solutions for complex problems. With exertise in frontend, I enjoy
          building user-centric applications that make a difference. When I'm
          not coding, you can find me exploring new technologies, making side
          projects or sharing knowledge through technical writing.
        </Subheading>
        <Projects />
      </Container>
    </div>
  );
}
