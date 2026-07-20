import { LocalTime } from "@/components/local-time";
import {
  Briefcase,
  MapPin,
  Clock3,
  Mail,
  CalendarDays,
  FileUser,
} from "lucide-react";

export default function Home() {
  return (
    <div className="mt-5 border border-neutral-200 p-1.5 dark:border-neutral-800">
      <div className="bg-gray-50 p-5 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.2)] backdrop-blur-sm dark:bg-neutral-950/50 font-mono">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-3 rounded-r-full border-r border-neutral-100/40 bg-transparent dark:border-neutral-900/30" />
                <span className="grid place-items-center rounded-xl border border-neutral-200 p-0.5 sm:p-1 dark:border-neutral-800">
                  <span className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-lg bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-200">
                    <Briefcase
                      className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-700"
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              </span>
              <div>
                <p className="max-sm:text-xs text-neutral-500">Experience</p>
                <p className="max-sm:text-xs text-neutral-900 dark:text-white">
                  3 Years (IBM • Nexly)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-3 rounded-r-full border-r border-neutral-100/40 bg-transparent dark:border-neutral-900/30" />
                <span className="grid place-items-center rounded-xl border border-neutral-200 p-0.5 sm:p-1 dark:border-neutral-800">
                  <span className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-lg bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-200">
                    <MapPin
                      className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-700"
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              </span>
              <div>
                <p className="max-sm:text-xs text-neutral-500">Location</p>
                <p className="max-sm:text-xs text-neutral-900 dark:text-white">
                  Pune, Maharashtra
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-3 rounded-r-full border-r border-neutral-100/40 bg-transparent dark:border-neutral-900/30" />
                <span className="grid place-items-center rounded-xl border border-neutral-200 p-0.5 sm:p-1 dark:border-neutral-800">
                  <span className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-lg bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-200">
                    <CalendarDays
                      className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-700"
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              </span>

              <div>
                <p className="max-sm:text-xs text-neutral-500">Availability</p>
                <p className="max-sm:text-xs text-neutral-900 dark:text-white">
                  Available to Join Immediately
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-3 rounded-r-full border-r border-neutral-100/40 bg-transparent dark:border-neutral-900/30" />
                <span className="grid place-items-center rounded-xl border border-neutral-200 p-0.5 sm:p-1 dark:border-neutral-800">
                  <span className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-lg bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-200">
                    <Clock3
                      className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-700"
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              </span>
              <div>
                <p className="max-sm:text-xs text-neutral-500">Local time</p>
                <p className="max-sm:text-xs text-neutral-900 dark:text-white">
                  <LocalTime />
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-3 rounded-r-full border-r border-neutral-100/40 bg-transparent dark:border-neutral-900/30" />
                <span className="grid place-items-center rounded-xl border border-neutral-200 p-0.5 sm:p-1 dark:border-neutral-800">
                  <span className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-lg bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-200">
                    <Mail
                      className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-700"
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              </span>

              <div className="min-w-0">
                <p className="max-sm:text-xs text-neutral-500">Email</p>
                <p className="max-sm:text-xs text-neutral-900 dark:text-neutral-400 break-all">
                  <a
                    href="mailto:anupamk.krishnan@gmail.com"
                    className="text-neutral-900 dark:text-neutral-400 break-all hover:underline"
                  >
                    anupamk.krishnan@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-3 rounded-r-full border-r border-neutral-100/40 bg-transparent dark:border-neutral-900/30" />
                <span className="grid place-items-center rounded-xl border border-neutral-200 p-0.5 sm:p-1 dark:border-neutral-800">
                  <span className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-lg bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-200">
                    <FileUser
                      className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-700"
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              </span>

              <div className="min-w-0">
                <p className="max-sm:text-xs text-neutral-500">Resume</p>
                <p className="max-sm:text-xs text-neutral-900 dark:text-neutral-400 break-all">
                  <a
                    href="/resume/Anupam-Kr-Krishnan-3-YOE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-400 hover:underline"
                  >
                    Anupam Kr. Krishnan.pdf
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
