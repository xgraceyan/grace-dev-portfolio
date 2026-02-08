import Experience from "./Experience";
import ExtraAbout from "./ExtraAbout";
import FeaturedProjects from "./FeaturedProjects";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Experience />
      <FeaturedProjects />
      <ExtraAbout />
    </div>
  );
}
