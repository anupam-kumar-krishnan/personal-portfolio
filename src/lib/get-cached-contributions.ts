import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/contribution-graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export const getCachedContributions = unstable_cache(
  async (username: string) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

    try {
      const res = await fetch(
        `${process.env.GITHUB_CONTRIBUTIONS_API_URL || `https://github-contributions-api.jogruber.de`}/v4/${username}?y=last`,
        { signal: controller.signal },
      );

      if (!res.ok) {
        return [];
      }

      const data = (await res.json()) as GitHubContributionsResponse;
      return data.contributions ?? [];
    } catch (err) {
      // On network errors/timeouts return an empty list so prerender doesn't fail
      return [];
    } finally {
      clearTimeout(timeout);
    }
  },
  ["github-contributions"],
  { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
);
