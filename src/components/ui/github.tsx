import { GitHubContributions } from "@/components/github-contributions";
import { getCachedContributions } from "@/lib/get-cached-contributions";
import SectionHeading from "../section-heading";

const GITHUB_USERNAME = "anupam-kumar-krishnan";
const GITHUB_PROFILE_URL = "https://github.com/anupam-kumar-krishnan";

export default async function GitHubContributionsDemo() {
  // Resolve contributions server-side so the page can be prerendered reliably
  const contributions = await getCachedContributions(GITHUB_USERNAME);

  return (
    <>
      <SectionHeading
        delay={0.2}
        className="bg-neutral-100 w-fit mt-10 ml-4 text-center pt-0.5 pb-0.5 pl-0.5 pr-0.5 text-neutral-700 text-sm sm:text:sm dark:bg-[#262727] dark:text-white rounded-md"
      >
        GitHub Activity
      </SectionHeading>
      <GitHubContributions
        contributions={contributions}
        githubProfileUrl={GITHUB_PROFILE_URL}
        className="mt-7"
      />
    </>
  );
}
