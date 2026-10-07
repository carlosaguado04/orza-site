"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

/** Interactive illustrative chrome. */
export function InteractiveChrome() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.92, 1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const split = useTransform(scrollYProgress, [0.2, 0.55], [0, 1]);
  const veil = useTransform(scrollYProgress, [0.45, 0.75], [0, 0.55]);
  const paneW = useTransform(split, (v) => `${50 + v * 0}%`);
  const pane2Opacity = split;

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 120, damping: 18 });
  const smy = useSpring(my, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(smy, [0, 1], [8, -8]);
  const rotateY = useTransform(smx, [0, 1], [-10, 10]);
  const glareX = useTransform(smx, (v) => `${v * 100}%`);
  const glareY = useTransform(smy, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(232,255,61,0.12), transparent 55%)`;

  const onMove = (e: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-5xl [perspective:1400px]">
      <p className="mb-4 text-center text-[0.7rem] font-bold tracking-[0.22em] text-ink-dim uppercase">
        Scroll to split · Veil washes in
      </p>
      <motion.div
        className="relative overflow-hidden rounded-[1.35rem] border border-edge bg-void-lift shadow-[0_50px_120px_-40px_rgba(0,0,0,0.95),0_0_80px_-40px_rgba(232,255,61,0.25)]"
        style={
          reduce
            ? undefined
            : {
                scale,
                y,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        initial={reduce ? false : { opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
      >
        {!reduce && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 mix-blend-screen"
            style={{ background: glare }}
          />
        )}
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(ellipse_at_center,rgba(232,255,61,0.08),transparent_60%)]"
          style={{ opacity: veil }}
        />

        <div className="relative z-10 flex items-center gap-2 border-b border-edge px-4 py-3">
          <span className="size-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="size-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <span className="size-2.5 rounded-full" style={{ background: "#28c840" }} />
          <div className="ml-3 flex h-8 flex-1 items-center rounded-full border border-edge bg-void-raised px-3.5">
            <span className="text-xs text-ink-dim">Press ⌘L to start</span>
          </div>
          <span className="kbd hidden sm:inline-flex">⌘S</span>
        </div>

        <div className="relative z-10 grid min-h-[300px] grid-cols-[10.5rem_1fr] sm:min-h-[380px] sm:grid-cols-[13.5rem_1fr]">
          <aside className="flex flex-col gap-3 border-r border-edge bg-void p-3">
            <div className="space-y-1.5">
              <div className="text-[0.65rem] font-bold tracking-wider text-ink-dim uppercase">
                Spaces
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Work", "Play", "Veil"].map((s, i) => (
                  <div
                    key={s}
                    className={`rounded-md px-2 py-1 text-[0.65rem] font-bold ${
                      i === 0
                        ? "border border-acid/40 bg-acid-soft text-acid"
                        : "border border-edge bg-void-raised text-ink-mute"
                    }`}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-[0.65rem] font-bold tracking-wider text-ink-dim uppercase">
                Tabs
              </div>
              {[
                { label: "orza", nest: 0, active: true },
                { label: "docs", nest: 1, active: false },
                { label: "issue", nest: 1, active: false },
                { label: "music", nest: 0, active: false },
              ].map((t) => (
                <div
                  key={t.label}
                  className={`flex items-center gap-2 rounded-md px-1.5 py-1.5 ${
                    t.active ? "bg-void-raised" : ""
                  }`}
                  style={{ paddingLeft: `${0.35 + t.nest * 0.75}rem` }}
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      t.active ? "bg-acid" : "bg-ink-dim"
                    }`}
                  />
                  <span className="text-[0.7rem] text-ink-mute">{t.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto rounded-xl border border-edge bg-void-lift p-2.5">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[0.65rem] text-ink-dim">Now Playing</span>
                <span className="size-1.5 animate-pulse rounded-full bg-acid" />
              </div>
              <div className="h-1 w-full overflow-hidden rounded bg-edge">
                <div className="h-full w-2/5 rounded bg-acid/70" />
              </div>
            </div>
          </aside>

          <div className="relative flex overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(232,255,61,0.05),transparent_50%),linear-gradient(180deg,var(--void-lift),var(--void))]">
            <motion.div
              className="relative flex-1 border-r border-edge/60 p-6 sm:p-9"
              style={reduce ? undefined : { width: paneW, flex: "none" }}
            >
              <div className="grain" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-edge px-2.5 py-1 text-[0.65rem] font-bold tracking-wider text-ink-dim uppercase">
                  Page
                </div>
                <div className="h-9 w-[78%] max-w-md rounded-lg bg-ink/10" />
                <div className="space-y-2 pt-1">
                  <div className="h-2 w-full max-w-lg rounded bg-edge" />
                  <div className="h-2 w-5/6 max-w-md rounded bg-edge" />
                  <div className="h-2 w-4/6 max-w-sm rounded bg-edge" />
                </div>
                <div className="mt-6 grid max-w-sm grid-cols-2 gap-3">
                  <div className="h-20 rounded-xl border border-edge bg-void-raised/70" />
                  <div className="h-20 rounded-xl border border-edge bg-void-raised/70" />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative hidden w-1/2 flex-1 border-l border-acid/20 bg-void p-6 sm:block sm:p-9"
              style={{ opacity: reduce ? 1 : pane2Opacity }}
            >
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="kbd">⌘\</span>
                <span className="text-[0.7rem] text-ink-mute">Split</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded bg-edge-strong" />
                <div className="h-2 w-4/5 rounded bg-edge" />
                <div className="h-2 w-3/5 rounded bg-edge" />
              </div>
              <div className="mt-8 h-28 rounded-xl border border-dashed border-acid/25 bg-acid-soft/40" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
