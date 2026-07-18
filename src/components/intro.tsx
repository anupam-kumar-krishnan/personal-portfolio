import { LocalTime } from "@/components/local-time";
import { Briefcase, MapPin, Clock3, Mail, Mars } from "lucide-react";

export default function Home() {
  return (
    <div className="mt-5 border border-neutral-200 p-1.5 dark:border-neutral-800">
      <div className="bg-gray-50 p-5 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.2)] backdrop-blur-sm dark:bg-neutral-950/50 font-mono">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-3 rounded-r-full border-r border-neutral-100/40 bg-transparent dark:border-neutral-900/30" />
                <span className="grid place-items-center rounded-xl border border-neutral-200 p-1 dark:border-neutral-800">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                    <Briefcase
                      className="h-5 w-5 text-neutral-700"
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              </span>
              <div>
                <p className=" text-neutral-500">
                  Software Development Engineer
                </p>
                <p className=" text-neutral-900 dark:text-white">Prev @Nexly</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-3 rounded-r-full border-r border-neutral-100/40 bg-transparent dark:border-neutral-900/30" />
                <span className="grid place-items-center rounded-xl border border-neutral-200 p-1 dark:border-neutral-800">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                    <MapPin
                      className="h-5 w-5 text-neutral-700"
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              </span>
              <div>
                <p className=" text-neutral-500">Location</p>
                <p className=" text-neutral-900 dark:text-white">
                  Pune, Maharashtra
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-3 rounded-r-full border-r border-neutral-100/40 bg-transparent dark:border-neutral-900/30" />
                <span className="grid place-items-center rounded-xl border border-neutral-200 p-1 dark:border-neutral-800">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                    <Mars
                      className="h-5 w-5 text-neutral-700"
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              </span>

              <div>
                <p className="text-neutral-500">Pronouns</p>
                <p className="text-neutral-900 dark:text-neutral-400">he/him</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-3 rounded-r-full border-r border-neutral-100/40 bg-transparent dark:border-neutral-900/30" />
                <span className="grid place-items-center rounded-xl border border-neutral-200 p-1 dark:border-neutral-800">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                    <Clock3
                      className="h-5 w-5 text-neutral-700"
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              </span>
              <div>
                <p className=" text-neutral-500">Local time</p>
                <p className=" text-neutral-900 dark:text-white">
                  <LocalTime />
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-3 rounded-r-full border-r border-neutral-100/40 bg-transparent dark:border-neutral-900/30" />
                <span className="grid place-items-center rounded-xl border border-neutral-200 p-1 dark:border-neutral-800">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                    <Mail
                      className="h-5 w-5 text-neutral-700"
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              </span>

              <div className="min-w-0">
                <p className=" text-neutral-500">Email</p>
                <p className=" text-neutral-900 dark:text-neutral-400 break-all">
                  anupamk.krishnan@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
