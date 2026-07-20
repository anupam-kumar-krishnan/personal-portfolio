import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-4xl bg-white dark:bg-[#171717] relative",
        className,
      )}
    >
      <div
        className="absolute right-0 inset-y-0 w-8 border-l border-r border-[var(--edge-border)] 
        bg-[repeating-linear-gradient(315deg,var(--edge-pattern)_0,var(--edge-pattern)_1px,transparent_0,transparent_50%)]
        bg-[length:10px_10px] bg-fixed"
      />
      <div
        className="absolute left-0 inset-y-0 w-8 border-l border-r border-[var(--edge-border)] 
        bg-[repeating-linear-gradient(315deg,var(--edge-pattern)_0,var(--edge-pattern)_1px,transparent_0,transparent_50%)]
        bg-[length:10px_10px] bg-fixed"
      />
      {children}
    </div>
  );
};
