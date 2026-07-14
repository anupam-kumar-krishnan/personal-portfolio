import { GitHubContributions } from "@/components/github-contributions";
import { getCachedContributions } from "@/lib/get-cached-contributions";

const GITHUB_USERNAME = "anupam-kumar-krishnan";
const GITHUB_PROFILE_URL = "https://github.com/anupam-kumar-krishnan";

export default async function GitHubContributionsDemo() {
  // Resolve contributions server-side so the page can be prerendered reliably
  const contributions = await getCachedContributions(GITHUB_USERNAME);

  return (
    <GitHubContributions
      contributions={contributions}
      githubProfileUrl={GITHUB_PROFILE_URL}
    />
  );
}
