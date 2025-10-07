import { Container } from "@/components/container";
import { Inter } from "next/font/google";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-10 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          Anupam Kumar Krishnan
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I'm a Software Engineer with a passion for building scalable and
          efficient systems with expertise in Frontend Development.
        </p>
        <Projects />
      </Container>
    </div>
  );
}
