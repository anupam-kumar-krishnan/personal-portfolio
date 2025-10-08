import { Container } from "@/components/container";
import { Inter } from "next/font/google";
import { Projects } from "@/components/projects";
import { LandingBlogs } from "@/components/landing-blogs";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-10 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          About Me
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I'm a passionate Software Engineer dedicated to crafting elegant
          solutions for complex problems. With exertise in frontend, I enjoy
          building user-centric applications that make a difference. When I'm
          not coding, you can find me exploring new technologies, making side
          projects or sharing knowledge through technical writing.
        </p>
      </Container>
    </div>
  );
}
