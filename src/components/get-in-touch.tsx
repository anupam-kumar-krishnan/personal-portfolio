"use client";
import { useState, FormEvent } from "react";
import SectionHeading from "./section-heading";

type Status = "idle" | "loading" | "success" | "error";

export default function GetInTouch() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New enquiry from portfolio site",
          from_name: "Get In Touch form",
          email,
          message: `New enquiry submitted. Reply-to email: ${email}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="w-full bg-white text-neutral-400 px-4 py-4 sm:px-6 dark:bg-[#171717] border-neutral-100 shadow-section-inset dark:border-neutral-800">
      {/* Eyebrow badge */}
      <SectionHeading
        delay={0.2}
        className="bg-neutral-100 w-fit mt-10 text-center pt-0.5 pb-0.5 pl-0.5 pr-0.5 text-neutral-700 text-sm sm:text:sm dark:bg-[#262727] dark:text-white rounded-md"
      >
        Get In Touch
      </SectionHeading>

      {/* Description */}
      <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/45 sm:text-sx">
        I'm currently looking for new opportunities. Whether you have a question
        or want to say hi, hit that button.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-5 flex w-sm md:w-lg flex-col gap-2 rounded-xl p-1.5 sm:flex-row sm:items-center bg-neutral-100 border border-neutral-200 dark:bg-[#1a1a1a] dark:border-white/[0.08]"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          aria-label="Your email"
          disabled={status === "loading"}
          className="w-full flex-1 rounded-lg bg-transparent px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 dark:text-white/90 dark:placeholder-white/40 dark:focus-visible:ring-white/20 sm:text-base disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 sm:w-auto bg-gradient-to-b from-neutral-700 to-neutral-900 border border-neutral-900 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_4px_12px_rgba(0,0,0,0.35)] dark:from-white/[0.14] dark:to-white/[0.04] dark:border-white/[0.16] dark:shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_4px_12px_rgba(0,0,0,0.4)] dark:text-white/95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send Enquiry"}
        </button>
      </form>

      {/* Status message */}
      {status === "success" && (
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          Thanks! Your enquiry has been sent — I'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
