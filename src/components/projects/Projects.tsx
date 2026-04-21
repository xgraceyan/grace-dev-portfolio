import { useState, useMemo } from "react";
import { getTagColor } from "@/lib/tagUtils";
import ProjectsCard from "./ProjectsCard";
import { projects } from "./projectsData";

const tagFrequency = projects
  .flatMap((p) => p.tags)
  .reduce<Record<string, number>>((acc, tag) => {
    acc[tag] = (acc[tag] ?? 0) + 1;
    return acc;
  }, {});

const allTags = Object.keys(tagFrequency).sort(
  (a, b) => tagFrequency[b] - tagFrequency[a]
);

export default function Projects() {
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  function toggleTag(tag: string) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  }

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query));

      const matchesTags =
        activeTags.size === 0 || project.tags.some((t) => activeTags.has(t));

      return matchesSearch && matchesTags;
    });
  }, [search, activeTags]);

  return (
    <div className="flex flex-col gap-8 pb-16">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-3xl">Projects</h2>
        <p className="text-secondary font-light text-sm">
          {filtered.length} of {projects.length} projects
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Search projects or technologies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-secondary/20 bg-secondary/5 px-4 py-2.5 text-sm text-foreground placeholder:text-secondary/40 focus:border-primary/50 focus:outline-none transition-colors duration-200"
        />

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const color = getTagColor(tag);
            const isActive = activeTags.has(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 text-xs rounded-md transition-all duration-200 cursor-pointer ${
                  isActive
                    ? `${color.text} bg-secondary/20 border border-current/30 [filter:drop-shadow(0_0_6px_currentColor)]`
                    : "text-secondary/50 bg-secondary/5 border border-transparent hover:text-secondary/80 hover:bg-secondary/15"
                }`}
              >
                {tag}
              </button>
            );
          })}
          {activeTags.size > 0 && (
            <button
              onClick={() => setActiveTags(new Set())}
              className="px-3 py-1 text-xs rounded-md text-secondary/40 hover:text-secondary/70 transition-colors duration-200 cursor-pointer"
            >
              clear all
            </button>
          )}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 py-24 text-secondary/40">
          <p className="text-lg font-semibold">No projects found</p>
          <p className="text-sm">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
