import { Link } from "react-router-dom";
import WindowFrame from "../ui/window/WindowFrame";
import { Separator } from "@/components/ui/separator";
import ContactButtons from "./ContactLinks";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8">
      <div className="flex flex-col gap-8 font-semibold">
        <h1>
          Hello! I'm{" "}
          <Link
            to="/"
            className="relative font-bold text-primary hover:[filter:drop-shadow(0_0_20px_var(--primary))] border-b-4 border-transparent hover:border-primary transition-all duration-200"
          >
            Grace Yan
          </Link>
        </h1>
        <div className="flex flex-col gap-4 font-light">
          <p>
            I'm a <span className="font-bold">Computer Science</span> student at
            the{" "}
            <span className="font-bold">University of California, Irvine</span>,
            interested in{" "}
            <span className="font-bold">full-stack development.</span>{" "}
            Currently, I'm working on{" "}
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
            as a <span className="font-bold">software engineering intern</span>{" "}
            in their San Francisco office!
          </p>
        </div>

        <div className="w-3/4">
          <Separator className="opacity-20" />
        </div>

        <ContactButtons />
      </div>

      <WindowFrame
        title="me.jpg"
        className="inline-flex"
        showCloseButton={true}
      >
        <img
          src="me.jpg"
          className="w-[300px] md:w-[1000px] max-w-full h-auto"
        />
      </WindowFrame>
    </div>
  );
}
