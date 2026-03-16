export type TechStack = {
  icon: string; // just a string key now
  name: string;
};

export type Project = {
  title: string;
  src: string;
  githubUrl: string;
  liveUrl?: string;
  description: string;
  stack: TechStack[];
};

export const projects: Project[] = [
  {
    title: "Snappy UI Library",
    src: "/projects/project-snappy-ui.png",
    githubUrl: "https://github.com/anupam-kumar-krishnan/snappy-ui",
    liveUrl: "https://snappy-ui-six.vercel.app/",
    description:
      "A UI Library consisting of 25+ re-usable components having subtle animation.",
    stack: [
      { icon: "nextjs", name: "Next JS" },
      { icon: "react", name: "React JS" },
      { icon: "tailwind", name: "Tailwind CSS" },
      { icon: "motion", name: "Motion" },
      { icon: "shadcn", name: "Shadcn/UI" },
    ],
  },
  {
    title: "AI Resume Reviewer",
    src: "/projects/project-resume-reviewer.png",
    githubUrl: "https://github.com/anupam-kumar-krishnan/resume-reviewer",
    liveUrl: "https://resume-reviewer-alpha.vercel.app/",
    description:
      "An AI Resume Reviewer to upload resume, and let AI instantly evaluate and provide feedback.",
    stack: [
      { icon: "react", name: "React JS" },
      { icon: "reactrouter", name: "React Router" },
      { icon: "tailwind", name: "Tailwind CSS" },
      { icon: "puterjs", name: "Puter JS" },
    ],
  },
  {
    title: "Reqon",
    src: "/projects/project-reqon.png",
    githubUrl: "https://github.com/anupam-kumar-krishnan/reqon",
    description:
      "A API Testing Tool which manage REST APIs and WebSocket connections efficiently.",
    stack: [
      { icon: "nextjs", name: "Next JS" },
      { icon: "postgresql", name: "PostgreSQL" },
      { icon: "tanstack", name: "TanStack" },
      { icon: "shadcn", name: "Shadcn/UI" },
      { icon: "tailwind", name: "Tailwind CSS" },
      { icon: "betterauth", name: "Better Auth" },
    ],
  },
  {
    title: "CodeBits",
    src: "/projects/project-codebits.png",
    githubUrl: "https://github.com/anupam-kumar-krishnan/codebits",
    liveUrl: "https://code-snippet-brown.vercel.app/",
    description:
      "A Tool to create customizable, shareable code snippets with auto language detection, theming, font options, dark mode, and export as image or SVG.",
    stack: [
      { icon: "react", name: "React JS" },
      { icon: "tailwind", name: "Tailwind CSS" },
      { icon: "shadcn", name: "Shadcn/UI" },
      { icon: "zustand", name: "Zustand" },
    ],
  },
];
