import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileDescription,
  IconMail,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function GitHubLink() {
  return (
    <Link
      to="https://github.com/xgraceyan"
      className="nav-link glow flex flex-row items-center gap-2"
      target="_blank"
    >
      <IconBrandGithub /> GitHub
    </Link>
  );
}

export function LinkedInLink() {
  return (
    <Link
      to="https://linkedin.com/in/grace-yan89"
      className="nav-link glow flex flex-row items-center gap-2"
      target="_blank"
    >
      <IconBrandLinkedin /> LinkedIn
    </Link>
  );
}

export function EmailLink() {
  return (
    <Link
      to="mailto:xgraceyan@gmail.com"
      className="nav-link glow flex flex-row items-center gap-2"
      target="_blank"
    >
      <IconMail /> xgraceyan@gmail.com
    </Link>
  );
}

export function ResumeLink() {
  return (
    <Link
      to="https://drive.google.com/file/d/152H52lGPIvvRxQNgV6UbhZG7wV3Junhx/view?usp=drive_link"
      className="nav-link glow text-primary flex flex-row items-center gap-2"
      target="_blank"
    >
      <IconFileDescription /> Resume
    </Link>
  );
}

export default function ContactLinks() {
  return (
    <div className="flex flex-col gap-8">
      <ResumeLink />
      <div className="flex flex-row gap-2 text-sm md:gap-6 md:text-lg">
        <GitHubLink /> / <LinkedInLink /> / <EmailLink />
      </div>
    </div>
  );
}
