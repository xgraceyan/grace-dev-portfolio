import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface WindowFrameProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function WindowFrame({
  title,
  children,
  className,
}: WindowFrameProps) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleClose = () => {
    setDeleting(true);

    setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => setVisible(false), 200);
    }, 2000);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        `inline-flex flex-col rounded-xl border bg-background shadow-lg overflow-hidden transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`,
        className
      )}
    >
      <div className="flex items-center justify-between h-10 px-3 border-b bg-muted/15 w-full">
        <span
          className={`text-sm text-white truncate ${
            deleting ? "animate-[pulse_0.75s_linear_infinite]" : ""
          }`}
        >
          {deleting ? "closing :(" : title}
        </span>

        <X className="hover:cursor-pointer" onClick={handleClose} />
      </div>

      <div className="">{children}</div>
    </div>
  );
}
