"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  FileText,
  FolderGit2,
  Compass,
  Search,
  ExternalLink,
  Clock,
  X,
} from "lucide-react";
import { useClickSound } from "@/hooks/use-click-sound";
import { projects } from "@/constants/projects";

type Post = { slug: string; title: string; excerpt: string; date: string };

const pages = [
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "My Lab", href: "/mycomponentlab" },
  { title: "Contact", href: "/contact" },
];

const RECENT_SEARCHES_KEY = "cmdk-recent-searches";
const MAX_RECENT = 5;

function useRecentSearches() {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (stored) setRecentSearches(JSON.parse(stored));
    } catch {
      // ignore malformed/inaccessible storage
    }
  }, []);

  const addRecentSearch = useCallback((term: string) => {
    const trimmed = term.trim();
    if (!trimmed) return;
    setRecentSearches((prev) => {
      const updated = [
        trimmed,
        ...prev.filter((q) => q.toLowerCase() !== trimmed.toLowerCase()),
      ].slice(0, MAX_RECENT);
      try {
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      } catch {
        // storage may be unavailable (private mode, quota, etc.)
      }
      return updated;
    });
  }, []);

  const removeRecentSearch = useCallback((term: string) => {
    setRecentSearches((prev) => {
      const updated = prev.filter((q) => q !== term);
      try {
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  }, []);

  const clearRecentSearches = useCallback(() => {
    try {
      localStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch {
      // ignore
    }
    setRecentSearches([]);
  }, []);

  return {
    recentSearches,
    addRecentSearch,
    removeRecentSearch,
    clearRecentSearches,
  };
}

export function CommandPalette({ posts }: { posts: Post[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const playClickSound = useClickSound();
  const {
    recentSearches,
    addRecentSearch,
    removeRecentSearch,
    clearRecentSearches,
  } = useRecentSearches();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        playClickSound();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    const openFromButton = () => {
      setOpen(true);
    };

    document.addEventListener("keydown", down);
    document.addEventListener("open-command-palette", openFromButton);

    return () => {
      document.removeEventListener("keydown", down);
      document.removeEventListener("open-command-palette", openFromButton);
    };
  }, [open, playClickSound]);

  // Internal navigation (pages, blog posts)
  const goTo = useCallback(
    (href: string) => {
      playClickSound();
      if (query.trim()) addRecentSearch(query);
      setOpen(false);
      setQuery("");
      router.push(href);
    },
    [router, playClickSound, query, addRecentSearch],
  );

  // External navigation (projects — liveUrl, fallback githubUrl)
  const openExternal = useCallback(
    (url: string) => {
      playClickSound();
      if (query.trim()) addRecentSearch(query);
      setOpen(false);
      setQuery("");
      window.open(url, "_blank", "noopener,noreferrer");
    },
    [playClickSound, query, addRecentSearch],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 backdrop-blur-sm pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      <Command
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
        onClick={(e) => e.stopPropagation()}
        shouldFilter={true}
      >
        <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3 dark:border-neutral-800">
          <Search className="h-4 w-4 text-neutral-400" />
          <Command.Input
            value={query}
            onValueChange={setQuery}
            autoFocus
            placeholder="Search pages, projects, blog posts..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400 text-neutral-800 dark:text-neutral-100"
          />
          <kbd className="hidden sm:inline-block rounded border border-neutral-200 px-1.5 py-0.5 text-xs text-neutral-400 dark:border-neutral-700">
            Esc
          </kbd>
        </div>

        <Command.List className="max-h-[60vh] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-neutral-400">
            No results found.
          </Command.Empty>

          {query.length === 0 && recentSearches.length > 0 && (
            <Command.Group className="px-2 py-1">
              <div className="flex items-center justify-between px-2 pb-1">
                <span className="text-xs font-medium text-neutral-400">
                  Recent
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearRecentSearches();
                  }}
                  className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                >
                  Clear
                </button>
              </div>
              {recentSearches.map((term) => (
                <Command.Item
                  key={term}
                  value={`recent-${term}`}
                  onSelect={() => setQuery(term)}
                  className="group flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-neutral-700 aria-selected:bg-neutral-100 dark:text-neutral-200 dark:aria-selected:bg-neutral-800 cursor-pointer"
                >
                  <Clock className="h-4 w-4 shrink-0 text-neutral-400" />
                  <span className="flex-1 truncate">{term}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeRecentSearch(term);
                    }}
                    className="opacity-0 group-aria-selected:opacity-100 hover:text-neutral-600 dark:hover:text-neutral-200"
                    aria-label={`Remove "${term}" from recent searches`}
                  >
                    <X className="h-3.5 w-3.5 text-neutral-400" />
                  </button>
                </Command.Item>
              ))}
            </Command.Group>
          )}

          <Command.Group
            heading="Pages"
            className="px-2 py-1 text-xs font-medium text-neutral-400 [&_[cmdk-group-heading]]:mb-1"
          >
            {pages.map((page) => (
              <Command.Item
                key={page.href}
                value={page.title}
                onSelect={() => goTo(page.href)}
                className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-neutral-700 aria-selected:bg-neutral-100 dark:text-neutral-200 dark:aria-selected:bg-neutral-800 cursor-pointer"
              >
                <Compass className="h-4 w-4 text-neutral-400" />
                {page.title}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group
            heading="Projects"
            className="px-2 py-1 text-xs font-medium text-neutral-400 [&_[cmdk-group-heading]]:mb-1"
          >
            {projects.map((project) => (
              <Command.Item
                key={project.title}
                value={`${project.title} ${project.description}`}
                onSelect={() =>
                  openExternal(project.liveUrl ?? project.githubUrl)
                }
                className="flex items-start gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-neutral-100 dark:aria-selected:bg-neutral-800 cursor-pointer"
              >
                <FolderGit2 className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                <div className="flex-1">
                  <div className="text-neutral-700 dark:text-neutral-200">
                    {project.title}
                  </div>
                  <div className="line-clamp-1 text-xs text-neutral-400">
                    {project.description}
                  </div>
                </div>
                <ExternalLink className="mt-0.5 h-3 w-3 shrink-0 text-neutral-300" />
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group
            heading="Blog"
            className="px-2 py-1 text-xs font-medium text-neutral-400 [&_[cmdk-group-heading]]:mb-1"
          >
            {posts.map((post) => (
              <Command.Item
                key={post.slug}
                value={`${post.title} ${post.excerpt}`}
                onSelect={() => goTo(`/blog/${post.slug}`)}
                className="flex items-start gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-neutral-100 dark:aria-selected:bg-neutral-800 cursor-pointer"
              >
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                <div>
                  <div className="text-neutral-700 dark:text-neutral-200">
                    {post.title}
                  </div>
                  <div className="line-clamp-1 text-xs text-neutral-400">
                    {post.excerpt}
                  </div>
                </div>
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
