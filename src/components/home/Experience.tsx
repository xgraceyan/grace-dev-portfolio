import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Key } from "react";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  dates: string;
  description: React.ReactNode;
  imgUrl: string;
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  key: Key;
}

function ExperienceCard({ experience, key }: ExperienceCardProps) {
  return (
    <Card
      className="flex flex-row hover:shadow-black/20 hover:shadow-xl hover:cursor-pointer transition-shadow duration-200"
      key={key}
    >
      <div className="flex-shrink-0 flex justify-center items-center ps-6">
        <img
          src={experience.imgUrl}
          alt={`${experience.company} logo`}
          className="w-18 md:w-24 object-contain rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <CardHeader>
          <CardTitle>
            <p className="text-lg">{experience.company}</p>
          </CardTitle>
          <CardDescription>{experience.position}</CardDescription>
          <CardAction className="text-sm">{experience.dates}</CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-xs">{experience.description}</p>
        </CardContent>
      </div>
    </Card>
  );
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Commit the Change",
      position: "Full-Stack Developer",
      dates: "Oct 2025 - Present",
      description: (
        <p>
          Writing code for non-profit organizations. Currently developing
          internal tools for{" "}
          <a href="https://clchc.org" target="_blank" className="link inline">
            Celebrating Life Community Health Center
          </a>{" "}
          to help their mission of delivering free, quality healthcare.
        </p>
      ),
      imgUrl: "./logos/ctc.jpg",
    },
    {
      id: 2,
      company: "ICS Student Council",
      position: "Software Developer",
      dates: "Nov 2024 - Present",
      description: (
        <p>
          Developing and maintaining{" "}
          <a
            href="https://antalmanac.com"
            target="_blank"
            className="link inline"
          >
            AntAlmanac
          </a>
          , a course planning and exploration tool assisting over 15,000 monthly
          UC Irvine students schedule their classes.
        </p>
      ),
      imgUrl: "./logos/icssc.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold">Experience</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {experiences.map((exp) => (
          <ExperienceCard experience={exp} key={exp.id} />
        ))}
      </div>
    </div>
  );
}
