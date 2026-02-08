import { getTagColor } from "@/lib/tagUtils";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import type { Project } from "./Projects";

interface ProjectsCardProps {
  project: Project;
}

export default function ProjectsCard({ project }: ProjectsCardProps) {
  return (
    <Card
      className="flex flex-col hover:shadow-black/20 hover:shadow-xl hover:cursor-pointer transition-shadow duration-200 overflow-hidden"
      key={project.id}
    >
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
          {/* <CardContent>

          </CardContent> */}
        </CardHeader>
        <div className="flex flex-wrap gap-2 pt-4 mt-auto">
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
      </div>
    </Card>
  );
}
