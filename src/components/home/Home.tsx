import Experience from "./Experience";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Experience />
    </div>
  );
}
