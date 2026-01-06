import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <h1>
        Hello! I'm{" "}
        <Link
          to="/"
          className="relative font-bold text-primary hover:[filter:drop-shadow(0_0_20px_var(--primary))] border-b-4 border-transparent hover:border-primary transition-all duration-200"
        >
          Grace Yan
        </Link>
      </h1>
      <div className="flex flex-col gap-4">
        <p>
          I'm a <strong>Computer Science</strong> student at the{" "}
          <a href="https://uci.edu" target="_blank" className="link">
            University of California, Irvine
          </a>
          , interested in <strong>full-stack development.</strong> Currently,
          I'm working on{" "}
          <a href="https://antalmanac.com" target="_blank" className="link">
            AntAlmanac
          </a>
          , a course planning app assisting over 15,000 Anteaters monthly. I'm
          also developing internal tools for{" "}
          <a href="https://clchc.org" target="_blank" className="link">
            Celebrating Life Community Health Center
          </a>
          , a nonprofit dedicated to giving quality health care.
        </p>
        <p>
          This summer, I will be working at{" "}
          <a href="https://lumafield.com" target="_blank" className="link">
            Lumafield
          </a>{" "}
          as a <strong>software engineering intern</strong> in their San
          Francisco office!
        </p>
      </div>
    </div>
  );
}
