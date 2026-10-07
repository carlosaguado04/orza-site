"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Illustrative sidebar + page chrome — not a product screenshot. */
export function BrowserChrome() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <p className="mb-3 text-center text-xs tracking-wide text-ink-dim uppercase">
        Illustrative chrome
      </p>
      <motion.div
        className="overflow-hidden rounded-2xl border border-edge bg-void-lift shadow-[0_40px_80px_-40px_rgba(0,0,0,0.85)]"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <div className="flex items-center gap-2 border-b border-edge px-4 py-3">
          <span className="size-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="size-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <span className="size-2.5 rounded-full" style={{ background: "#28c840" }} />
          <div className="ml-3 flex h-7 flex-1 items-center rounded-full border border-edge bg-void-raised px-3">
            <span className="text-xs text-ink-dim">Press ⌘L to start</span>
          </div>
        </div>
        <div className="grid min-h-[280px] grid-cols-[11rem_1fr] sm:min-h-[340px] sm:grid-cols-[13rem_1fr]">
          <aside className="flex flex-col gap-3 border-r border-edge bg-void p-3">
            <div className="space-y-1.5">
              <div className="h-2 w-16 rounded bg-edge-strong" />
              <div className="h-8 rounded-lg border border-edge bg-void-raised px-2 py-1.5">
                <div className="h-full w-3/4 rounded bg-acid-soft" />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-10 rounded bg-edge" />
              {[72, 54, 63, 40].map((w, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-md px-1.5 py-1"
                  style={{ paddingLeft: i === 2 ? "1rem" : undefined }}
                >
                  <span className="size-1.5 rounded-full bg-ink-dim" />
                  <span
                    className="h-1.5 rounded bg-edge-strong"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-auto rounded-lg border border-edge bg-void-lift p-2">
              <div className="mb-1.5 h-1.5 w-14 rounded bg-edge-strong" />
              <div className="h-1 w-full rounded bg-edge" />
              <p className="mt-1.5 text-[0.65rem] text-ink-dim">Now Playing</p>
            </div>
          </aside>
          <div className="relative bg-[radial-gradient(ellipse_at_top,rgba(232,255,61,0.06),transparent_55%),linear-gradient(180deg,var(--void-lift),var(--void))] p-6 sm:p-10">
            <div className="grain" />
            <div className="relative space-y-4">
              <div className="h-3 w-24 rounded bg-edge-strong" />
              <div className="h-8 w-3/4 max-w-md rounded bg-ink/10" />
              <div className="space-y-2 pt-2">
                <div className="h-2 w-full max-w-lg rounded bg-edge" />
                <div className="h-2 w-5/6 max-w-md rounded bg-edge" />
                <div className="h-2 w-4/6 max-w-sm rounded bg-edge" />
              </div>
              <div className="mt-8 grid max-w-md grid-cols-2 gap-3">
                <div className="h-20 rounded-xl border border-edge bg-void-raised/80" />
                <div className="h-20 rounded-xl border border-edge bg-void-raised/80" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
