import { Container } from "@/components/container";
import { Inter } from "next/font/google";
import { Projects } from "@/components/projects";
import { LandingBlogs } from "@/components/landing-blogs";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/sub-heading";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-10 md:pt-20 md:pb-10">
        <Heading>Anupam Kumar Krishnan</Heading>
        <Subheading>
          I'm a Software Engineer with a passion for building scalable and
          efficient systems with expertise in Frontend Development.
        </Subheading>
        <Projects />
        <LandingBlogs />
      </Container>
    </div>
  );
}
