"use client";

import { useReducedMotion } from "framer-motion";

const ITEMS = [
  "Spaces",
  "Tree tabs",
  "Split ⌘\\",
  "Veil ⌘⇧N",
  "Adblock / Shield",
  "Library",
  "Media player",
  "Hide Chrome ⌘S",
  "Go ⌘L",
  "Reader",
  "Restore session",
  "Favorites",
];

export function Marquee() {
  const reduce = useReducedMotion();
  const row = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-label="Feature ticker"
      className="relative z-10 border-y border-edge bg-void-lift/40 py-5 backdrop-blur-md"
    >
      <div className="overflow-hidden">
        <div
          className={`flex gap-10 whitespace-nowrap px-4 ${
            reduce ? "" : "marquee-track"
          }`}
        >
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-10 text-[clamp(1.4rem,3.2vw,2.4rem)] font-bold tracking-[-0.04em] text-ink"
            >
              {item}
              <span className="inline-block size-2 rounded-full bg-acid shadow-[0_0_12px_var(--acid-glow)]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
