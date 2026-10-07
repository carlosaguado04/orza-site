"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        duration: 1.15,
        smoothWheel: true,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  );
}
