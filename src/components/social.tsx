import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SectionHeading from "@/components/section-heading";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anupamkkrishnan/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/anupam-kumar-krishnan",
    icon: FaGithub,
  },
  {
    name: "X",
    href: "https://x.com/anupamkkrishnan",
    icon: FaXTwitter,
  },
];

export default function SocialLinks() {
  return (
    <>
      <SectionHeading
        delay={0.2}
        className="bg-neutral-100 w-fit mt-10 ml-4 text-center pt-0.5 pb-0.5 pl-0.5 pr-0.5 text-neutral-700 text-sm sm:text:sm dark:bg-[#262727] dark:text-white rounded-md"
      >
        Social Links
      </SectionHeading>
      <div className="mt-8 ml-5 flex flex-wrap items-center justify-start gap-3">
        {socials.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            title={name}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
          >
            <Icon className="h-6 w-6" />
            <span className="sr-only">{name}</span>
          </a>
        ))}
      </div>
    </>
  );
}
