import { ArrowRight } from "lucide-react";
import { getTagColor } from "@/lib/tagUtils";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import type { Project } from "./projectsData";

interface ProjectsCardProps {
  project: Project;
}

export default function ProjectsCard({ project }: ProjectsCardProps) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="flex flex-col group-hover:shadow-black/20 group-hover:shadow-xl transition-shadow duration-200 overflow-hidden h-full cursor-pointer">
        <div className="w-full h-64 overflow-hidden">
          <img
            src={project.imgUrl}
            alt={`${project.title} image`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-6 flex-1">
          <CardHeader className="p-0">
            <CardTitle>
              <p className="text-lg">{project.title}</p>
            </CardTitle>
            <CardDescription className="text-xs">
              {project.description}
            </CardDescription>
          </CardHeader>

          <div className="flex flex-wrap gap-2 pt-3">
            {project.tags?.map((tag, index) => {
              const color = getTagColor(tag);
              return (
                <span
                  key={index}
                  className={`px-2 py-1 text-xs rounded-md bg-secondary/15 ${color.text}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          <div className="flex gap-3 pt-3 mt-auto">
            {project.viewUrl && (
              <a
                href={project.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline glow group/link"
              >
                View project{" "}
                <ArrowRight className="size-3 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-xs text-secondary/60 hover:text-secondary transition-colors duration-200 group/link"
            >
              GitHub{" "}
              <ArrowRight className="size-3 transition-transform duration-200 group-hover/link:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Card>
    </a>
  );
}
