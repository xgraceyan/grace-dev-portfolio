import { useEffect, useRef } from "react";

export default function ActiveBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glowElement = glowRef.current;
    if (!glowElement) {
      return;
    }

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let currentX = pointerX;
    let currentY = pointerY;
    let animationFrameId = 0;

    const updateGlow = () => {
      currentX += (pointerX - currentX) * 0.12;
      currentY += (pointerY - currentY) * 0.12;
      glowElement.style.setProperty("--cursor-x", `${currentX}px`);
      glowElement.style.setProperty("--cursor-y", `${currentY}px`);
      animationFrameId = window.requestAnimationFrame(updateGlow);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove);
    animationFrameId = window.requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="active-bg pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div className="active-bg-dot-waves absolute inset-0" />
      <div className="active-bg-ambient-glows absolute inset-0">
        <span className="active-bg-ambient-glow active-bg-ambient-glow-1" />
        <span className="active-bg-ambient-glow active-bg-ambient-glow-2" />
        <span className="active-bg-ambient-glow active-bg-ambient-glow-3" />
        <span className="active-bg-ambient-glow active-bg-ambient-glow-4" />
      </div>
      <div ref={glowRef} className="active-bg-cursor-glow absolute inset-0" />
      <div className="active-bg-vignette absolute inset-0" />
    </div>
  );
}
