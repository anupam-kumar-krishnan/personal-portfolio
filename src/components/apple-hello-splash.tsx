"use client";

import { useCallback, useState } from "react";
import { AppleHelloEffectEnglish } from "@/components/apple-hello-effect-english";

export function AppleHelloSplash() {
  const [isVisible, setIsVisible] = useState(true);

  const handleComplete = useCallback(() => {
    window.requestAnimationFrame(() => {
      setIsVisible(false);
    });
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-white text-black dark:bg-neutral-950">
      <div className="flex flex-col items-center gap-6 px-6 py-8 text-center">
        <AppleHelloEffectEnglish
          className="max-w-full text-black dark:text-white"
          onAnimationComplete={handleComplete}
        />
      </div>
    </div>
  );
}
