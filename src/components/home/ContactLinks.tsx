import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { PDFViewerDialog } from "../utils/PDFViewer";
import useIsMobile from "@/hooks/useIsMobile";
import { RESUME_DRIVE_ID } from "@/lib/constants";

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

export default function ContactLinks() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col gap-4">
      <PDFViewerDialog
        buttonLabel="Resume"
        fileLabel="Resume.pdf"
        fileId={RESUME_DRIVE_ID}
        width={isMobile ? 400 : 800}
      />
      <div>
        {isMobile ? (
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <GitHubLink /> / <LinkedInLink />
            </div>
            <EmailLink />
          </div>
        ) : (
          <div className="flex flex-row gap-2 text-sm md:gap-6 md:text-lg">
            <GitHubLink /> / <LinkedInLink /> / <EmailLink />
          </div>
        )}
      </div>
    </div>
  );
}
