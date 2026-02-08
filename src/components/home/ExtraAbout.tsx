import { Card } from "@/components/ui/card";
import WindowFrame from "@/components/ui/window/WindowFrame";
import { MapPin } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface CarouselImage {
  imgUrl: string;
  fileName: string;
}

const CAROUSEL_IMAGES: CarouselImage[] = [
  { imgUrl: "/images/chongqing.jpg", fileName: "Chongqing.jpg" },
  { imgUrl: "/images/kunming.jpg", fileName: "Kunming.jpg" },
  { imgUrl: "/images/san_diego.jpg", fileName: "San_Diego.jpg" },
  { imgUrl: "/images/kyoto.jpg", fileName: "Kyoto.jpg" },
  { imgUrl: "/images/zhangjiajie.jpg", fileName: "Zhangjiajie.jpg" },
];

function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % CAROUSEL_IMAGES.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <WindowFrame
      title={CAROUSEL_IMAGES[index].fileName}
      showCloseButton={false}
      className="w-full"
    >
      <div className="relative w-full overflow-hidden">
        <div className="aspect-[3/2] relative">
          {CAROUSEL_IMAGES.map((item, i) => (
            <img
              key={item.imgUrl}
              src={item.imgUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))}
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-4 bg-primary" : "w-1.5 bg-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </WindowFrame>
  );
}

function AboutText() {
  return (
    <Card className="p-4 flex flex-col gap-2 h-full justify-center text-md text-foreground/90 font-light">
      <p className="text-lg">
        Besides coding and schoolwork, I like to do a lot of other things in my
        spare time:
      </p>
      <ul className="list-disc ps-8 flex flex-col gap-2 text-md">
        <li>I travel and take photos on my Canon DSLR (see left)</li>
        <li>
          <a
            href="https://www.behance.net/grace_yan_0809"
            className="link"
            target="_blank"
          >
            Graphic design
          </a>{" "}
          is my passion
        </li>
        <li>
          I play{" "}
          <a
            href="https://steamcommunity.com/profiles/76561199078411884/"
            className="link"
            target="_blank"
          >
            video games
          </a>
          . All-time favorite: Red Dead Redemption 2
        </li>
        <li>
          I play the{" "}
          <a
            href="https://www.youtube.com/@graceyan0809/videos"
            className="link"
            target="_blank"
          >
            flute
          </a>{" "}
          (and piccolo), and toured Eastern Europe in an orchestra.
        </li>
        <li>
          I frequent Haidilao Hotpot, and can eat 10 plates of beef in one
          sitting.
        </li>
      </ul>
    </Card>
  );
}

const DEFAULT_PRIMARY = "#c792ea";

function getStoredPrimary(): string {
  if (typeof document === "undefined") return DEFAULT_PRIMARY;
  const stored = document.documentElement.style
    .getPropertyValue("--primary")
    .trim();
  if (stored) return stored;
  return DEFAULT_PRIMARY;
}

function ColorPicker() {
  const [primaryColor, setPrimaryColor] = useState(getStoredPrimary);

  const applyPrimary = useCallback((hex: string) => {
    document.documentElement.style.setProperty("--primary", hex);
    document.documentElement.style.setProperty("--accent-foreground", hex);
    setPrimaryColor(hex);
  }, []);

  return (
    <Card className="p-4 flex flex-1 flex-col gap-4 items-center justify-center min-h-0">
      <label className="text-sm font-medium shrink-0">Color</label>
      <input
        type="color"
        value={primaryColor}
        onChange={(e) => applyPrimary(e.target.value)}
        className="color-picker-circle w-10 h-10 rounded-full border border-foreground/30 cursor-pointer bg-transparent shrink-0"
      />
    </Card>
  );
}

function LocationBlock() {
  return (
    <Card className="p-4 flex flex-1 flex-col gap-2 items-center justify-center text-center min-h-0">
      <MapPin className="size-7 text-primary shrink-0" />
      <div className="flex flex-col text-sm">
        <span>San Jose, CA</span>
        <span>Irvine, CA</span>
      </div>
    </Card>
  );
}

export default function ExtraAbout() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-3xl">More About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_5fr_1fr] gap-4 items-start">
        <div className="min-w-0 w-full">
          <Carousel />
        </div>
        <AboutText />
        <div className="flex flex-col gap-4 lg:min-w-0 lg:min-h-0 lg:self-stretch lg:h-full">
          <ColorPicker />
          <LocationBlock />
        </div>
      </div>
    </div>
  );
}
