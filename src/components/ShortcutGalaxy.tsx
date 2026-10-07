"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const shortcuts = [
  { keys: "⌘\\", label: "Split tabs" },
  { keys: "⌘⇧N", label: "Veil" },
  { keys: "⌘S", label: "Hide Chrome" },
  { keys: "⌘L", label: "Go…" },
  { keys: "⌘⇧L", label: "Library" },
];

export function ShortcutGalaxy() {
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 overflow-hidden border-t border-edge py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--max)] px-[var(--pad)]">
        <Reveal>
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-ink-dim uppercase">
            Shortcuts
          </p>
          <h2 className="display max-w-[12ch] text-[clamp(2.4rem,6vw,5rem)] text-ink">
            Shortcuts that stick.
          </h2>
          <p className="mt-4 max-w-lg text-ink-mute">
            Split, Veil, Hide Chrome, Go, Library — at your fingertips.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shortcuts.map((s, i) => (
            <Reveal key={s.keys} delay={i * 0.05}>
              <motion.div
                className="surface group relative flex min-h-[140px] flex-col justify-between overflow-hidden p-6"
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="pointer-events-none absolute -right-6 -top-6 size-28 rounded-full bg-acid/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <span className="display text-[clamp(1.8rem,3vw,2.6rem)] text-acid">
                  {s.keys}
                </span>
                <span className="text-sm font-bold tracking-wide text-ink-mute uppercase">
                  {s.label}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
