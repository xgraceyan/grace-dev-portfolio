import { projects, type Project } from "../projects/Projects";
import ProjectsCard from "../projects/ProjectsCard";

export default function FeaturedProjects() {
  const featuredProjects: Project[] = projects.slice(0, 3);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-3xl">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        {featuredProjects.map((project) => (
          <ProjectsCard project={project} />
        ))}
      </div>
    </div>
  );
}
