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
    src: "/projects/snappyui-project.png",
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
    title: "Baarish - Rain Jukebox",
    src: "/projects/baarish-project.png",
    githubUrl: "https://github.com/anupam-kumar-krishnan/rain-jukebox",
    description:
      "A music player streaming audio via YouTube IFrame API — hidden video, clean audio-player UI.",
    stack: [
      { icon: "nextjs", name: "Next JS" },
      { icon: "tailwind", name: "Tailwind CSS" },
    ],
  },
  {
    title: "Framerly",
    src: "/projects/framerly-project.png",
    githubUrl: "https://github.com/anupam-kumar-krishnan/framerly",
    liveUrl: "https://framerly-shot.vercel.app/",
    description:
      "Framerly gives polished and beautiful image, ready for your landing page, deck, or tweet.",
    stack: [
      { icon: "nextjs", name: "Next JS" },
      { icon: "tailwind", name: "Tailwind CSS" },
      { icon: "motion", name: "Motion" },
    ],
  },
  {
    title: "Portfolio",
    src: "/projects/portfolio-project.png",
    githubUrl: "https://github.com/anupam-kumar-krishnan/personal-portfolio",
    description:
      "Portfolio Website to showcase my Work, Experience, and Technical skills as a Software Developer.",
    stack: [
      { icon: "nextjs", name: "Next JS" },
      { icon: "tailwind", name: "Tailwind CSS" },
      { icon: "motion", name: "Motion" },
    ],
  },
  {
    title: "AI Resume Reviewer",
    src: "/projects/airesumereviewer-project.png",
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
      "API Testing Tool which manage REST APIs and WebSocket connections efficiently.",
    stack: [
      { icon: "nextjs", name: "Next JS" },
      { icon: "postgresql", name: "PostgreSQL" },
      { icon: "tanstack", name: "TanStack" },
      { icon: "shadcn", name: "Shadcn/UI" },
      { icon: "tailwind", name: "Tailwind CSS" },
      { icon: "betterauth", name: "Better Auth" },
    ],
  },
];
