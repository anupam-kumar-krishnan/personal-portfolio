export type Project = {
  title: string;
  src: string;
  href: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Snappy UI Library",
    src: "/projects/snappy-ui.png",
    href: "https://github.com/anupam-kumar-krishnan/snappy-ui",
    description:
      "A UI Library consisting of 25+ re-usable components having subtle animation",
  },
  {
    title: "AI Resume Reviewer",
    src: "/projects/resume-reviewer.png",
    href: "https://resume-reviewer-alpha.vercel.app/",
    description:
      "An AI Resume Reviewer to upload resume, and let AI instantly evaluate and provide feedback.",
  },
  {
    title: "Reqon",
    src: "/projects/reqon.png",
    href: "https://github.com/anupam-kumar-krishnan/reqon",
    description:
      "A Modern API Testing Tool which manage REST APIs and WebSocket connections efficiently.",
  },
  {
    title: "CodeBits",
    src: "/projects/code-snippet.png",
    href: "#",
    description:
      "A Tool to create customizable, shareable code snippets with auto language detection, theming, font options, dark mode, and export as image or SVG.",
  },
];
