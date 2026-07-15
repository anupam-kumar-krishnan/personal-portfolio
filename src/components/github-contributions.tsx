"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Activity } from "@/components/contribution-graph";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/contribution-graph";

export function GitHubContributions({
  contributions,
  githubProfileUrl,
  className,
}: {
  contributions: Activity[];
  githubProfileUrl: string;
  className?: string;
}) {
  const [data, setData] = useState<Activity[]>(contributions ?? []);
  const [loading, setLoading] = useState(data.length === 0);

  useEffect(() => {
    let mounted = true;

    const username = githubProfileUrl.split("/").filter(Boolean).pop() || "";

    if (!username) return;

    // If we already have data, skip fetch
    if (data.length > 0) {
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(`/api/github-contributions?user=${encodeURIComponent(username)}`)
      .then((res) => res.json())
      .then((json) => {
        if (!mounted) return;
        if (Array.isArray(json?.contributions)) {
          setData(json.contributions);
        }
      })
      .catch(() => {
        /* ignore */
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [githubProfileUrl]);

  if (loading && data.length === 0) {
    return (
      <div className="flex h-40.5 w-full items-center justify-center">
        <Spinner className="text-muted-foreground" />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-6">
        <div className="text-sm text-muted-foreground mb-2">
          No contributions available
        </div>
        <a
          className="text-primary underline"
          href={githubProfileUrl}
          target="_blank"
          rel="noopener"
        >
          View profile on GitHub
        </a>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <ContributionGraph
        className={cn("mx-auto py-2", className)}
        data={data}
        blockSize={11}
        blockMargin={3}
        blockRadius={2}
      >
        <ContributionGraphCalendar
          className="no-scrollbar px-2"
          title="GitHub Contributions"
        >
          {({ activity, dayIndex, weekIndex }) => (
            <Tooltip>
              <TooltipTrigger asChild>
                <g>
                  <ContributionGraphBlock
                    activity={activity}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                </g>
              </TooltipTrigger>
              <TooltipContent className="font-sans">
                <p>
                  {activity.count} contribution{activity.count > 1 ? "s" : null}{" "}
                  on {format(new Date(activity.date), "dd.MM.yyyy")}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter className="px-2">
          <ContributionGraphTotalCount>
            {({ totalCount }) => (
              <div className="text-muted-foreground">
                {totalCount.toLocaleString("en")} contributions in past 365 days
                on{" "}
                <a
                  className="text-foreground link-underline"
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
                .
              </div>
            )}
          </ContributionGraphTotalCount>

          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>
    </TooltipProvider>
  );
}

export function GitHubContributionsFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <Spinner className="text-muted-foreground" />
    </div>
  );
}
