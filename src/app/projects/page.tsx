import { Container } from "@/components/container";
import { Projects } from "@/components/projects";
import { Heading } from "@/components/heading";
import Subheading from "@/components/sub-heading";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-10 md:pt-20 md:pb-10">
        <Heading>Projects</Heading>
        <Subheading>
          I'm a passionate Software Engineer dedicated to crafting elegant
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
