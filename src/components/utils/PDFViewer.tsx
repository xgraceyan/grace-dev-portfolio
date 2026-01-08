import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconFileDescription } from "@tabler/icons-react";

interface PDFViewerProps {
  fileId: string;
}

interface PDFViewerDialogProps extends PDFViewerProps {
  buttonLabel: string;
  fileLabel: string;
  width?: number;
}

export function PDFViewer({ fileId }: PDFViewerProps) {
  const src = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <iframe
      src={src}
      allow="autoplay"
      className="w-full h-full"
      style={{ border: "none", display: "block" }}
    ></iframe>
  );
}

export function PDFViewerDialog({
  fileId,
  buttonLabel,
  fileLabel,
  width,
}: PDFViewerDialogProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="link"
            size="link"
            className="nav-link glow text-primary text-lg flex flex-row items-center gap-2"
          >
            <IconFileDescription size={36} /> {buttonLabel}
          </Button>
        </DialogTrigger>
        <DialogContent
          className="flex flex-col h-[90vh] overflow-hidden"
          style={{
            width: width && width + 50,
            maxWidth: "100%",
            padding: 25,
          }}
        >
          <DialogHeader className="shrink-0">
            <DialogTitle>{fileLabel}</DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-auto min-h-0">
            <PDFViewer fileId={fileId} />
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
