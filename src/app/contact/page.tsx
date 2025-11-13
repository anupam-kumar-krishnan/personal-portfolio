import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { Subheading } from "@/components/sub-heading";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <Heading>Contact Me</Heading>
        <Subheading>
          I'm open to freelancing offers. Reach out to me to inquire more about
          my work.
        </Subheading>
        <ContactForm />
      </Container>
    </div>
  );
}
