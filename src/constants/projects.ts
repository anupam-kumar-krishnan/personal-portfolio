export type Project = {
  title: string;
  src: string;
  githubUrl: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Snappy UI Library",
    src: "/projects/project-snappy-ui.png",
    githubUrl: "https://github.com/anupam-kumar-krishnan/snappy-ui",
    description:
      "A UI Library consisting of 25+ re-usable components having subtle animation.",
  },
  {
    title: "AI Resume Reviewer",
    src: "/projects/project-resume-reviewer.png",
    githubUrl: "https://github.com/anupam-kumar-krishnan/resume-reviewer",
    description:
      "An AI Resume Reviewer to upload resume, and let AI instantly evaluate and provide feedback.",
  },
  {
    title: "Reqon",
    src: "/projects/project-reqon.png",
    githubUrl: "https://github.com/anupam-kumar-krishnan/reqon",
    description:
      "A API Testing Tool which manage REST APIs and WebSocket connections efficiently.",
  },
  {
    title: "CodeBits",
    src: "/projects/project-codebits.png",
    githubUrl: "https://github.com/anupam-kumar-krishnan/codebits",
    description:
      "A Tool to create customizable, shareable code snippets with auto language detection, theming, font options, dark mode, and export as image or SVG.",
  },
];
