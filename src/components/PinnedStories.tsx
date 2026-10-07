"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

type Story = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  shortcut?: string;
  visual: "spaces" | "split" | "veil" | "chrome";
};

const stories: Story[] = [
  {
    id: "spaces",
    kicker: "01 — Tabs & Spaces",
    title: "Spaces that stay out of the way.",
    body: "Toggle Spaces and switch from the sidebar when you want separate contexts without extra windows. Nest tabs under the page that opened them — hierarchy stays visible.",
    visual: "spaces",
  },
  {
    id: "split",
    kicker: "02 — Split",
    title: "Two panes. One focus.",
    body: "Split the current view. Close only the focused pane with ⌘W — the other side stays put. Dense research without a second window.",
    shortcut: "⌘\\",
    visual: "split",
  },
  {
    id: "veil",
    kicker: "03 — Veil",
    title: "Private when it matters.",
    body: "Veil opens a private window that does not read or write browsing history. Pair it with adblock and popup blocking when a session should stay quiet.",
    shortcut: "⌘⇧N",
    visual: "veil",
  },
  {
    id: "chrome",
    kicker: "04 — Chrome",
    title: "Hide the chrome. Keep the Mac.",
    body: "Put the chrome away with Hide Chrome when you want the page alone. Optional Now Playing lives in the sidebar when you want it.",
    shortcut: "⌘S",
    visual: "chrome",
  },
];

function SpacesVisual({
  progress,
  reduce,
}: {
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const y = useTransform(progress, [0, 1], [30, -30]);
  const glow = useTransform(progress, [0, 0.5, 1], [0.2, 0.7, 0.35]);
  const x0 = useTransform(progress, [0, 1], [18, 0]);
  const x1 = useTransform(progress, [0, 1], [28, 0]);
  const x2 = useTransform(progress, [0, 1], [38, 0]);
  const o0 = useTransform(progress, [0, 0.25], [0.35, 1]);
  const o1 = useTransform(progress, [0.1, 0.35], [0.35, 1]);
  const o2 = useTransform(progress, [0.2, 0.45], [0.35, 1]);
  const xs = [x0, x1, x2];
  const os = [o0, o1, o2];

  return (
    <motion.div
      className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-edge bg-void p-5 sm:p-7"
      style={reduce ? undefined : { y }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_30%_20%,var(--bloom-a),transparent_55%)]"
        style={{ opacity: glow }}
      />
      <div className="relative grid h-full grid-cols-[38%_1fr] gap-3">
        <div className="flex flex-col gap-2 rounded-xl border border-edge bg-void-lift p-3">
          {["Work", "Play", "Research"].map((s, i) => (
            <motion.div
              key={s}
              className={`rounded-lg px-3 py-2 text-sm font-bold ${
                i === 0
                  ? "border border-acid/50 bg-acid-soft text-acid"
                  : "border border-edge text-ink-mute"
              }`}
              style={reduce ? undefined : { x: xs[i], opacity: os[i] }}
            >
              {s}
            </motion.div>
          ))}
          <div className="mt-auto space-y-1.5 pt-4">
            {[0, 1, 1, 0].map((nest, i) => (
              <div
                key={i}
                className="h-2 rounded bg-edge-strong"
                style={{ marginLeft: nest * 12, width: `${70 - i * 8}%` }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-edge bg-void-raised/60 p-4">
          <div className="mb-4 h-3 w-24 rounded bg-edge" />
          <div className="h-8 w-4/5 rounded-lg bg-ink/10" />
          <div className="mt-6 space-y-2">
            <div className="h-2 w-full rounded bg-edge" />
            <div className="h-2 w-5/6 rounded bg-edge" />
            <div className="h-2 w-2/3 rounded bg-edge" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SplitVisual({
  progress,
  reduce,
}: {
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const y = useTransform(progress, [0, 1], [30, -30]);
  const left = useTransform(progress, [0, 0.6], [100, 50]);
  const width = useTransform(left, (v) => `${v}%`);
  const rightOpacity = useTransform(progress, [0.15, 0.5], [0, 1]);

  return (
    <motion.div
      className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-edge bg-void"
      style={reduce ? undefined : { y }}
    >
      <div className="flex h-full">
        <motion.div
          className="border-r border-acid/30 bg-void-lift p-5"
          style={reduce ? { width: "50%" } : { width }}
        >
          <span className="kbd">Focus</span>
          <div className="mt-6 h-6 w-3/4 rounded bg-ink/10" />
          <div className="mt-4 space-y-2">
            <div className="h-2 w-full rounded bg-edge" />
            <div className="h-2 w-4/5 rounded bg-edge" />
          </div>
        </motion.div>
        <motion.div
          className="flex-1 bg-void p-5"
          style={{ opacity: reduce ? 1 : rightOpacity }}
        >
          <span className="kbd">⌘\</span>
          <div className="mt-6 h-28 rounded-xl border border-dashed border-acid/30 bg-acid-soft/30" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function VeilVisual({
  progress,
  reduce,
}: {
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const y = useTransform(progress, [0, 1], [30, -30]);
  const glow = useTransform(progress, [0, 0.5, 1], [0.2, 0.7, 0.35]);
  const scale = useTransform(progress, [0, 1], [0.7, 1.05]);

  return (
    <motion.div
      className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-edge bg-void p-6"
      style={reduce ? undefined : { y }}
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--bloom-a),transparent_60%)]"
        style={{ opacity: glow }}
      />
      <div className="relative flex h-full flex-col items-center justify-center text-center">
        <motion.div
          className="mb-4 size-20 rounded-full border border-acid/40 bg-acid-soft shadow-[0_0_60px_var(--acid-glow)]"
          style={reduce ? undefined : { scale }}
        />
        <p className="display text-3xl text-ink sm:text-4xl">Veil</p>
        <p className="mt-2 max-w-xs text-sm text-ink-mute">
          No history read. No history written.
        </p>
        <span className="kbd mt-5">⌘⇧N</span>
      </div>
    </motion.div>
  );
}

function ChromeVisual({
  progress,
  reduce,
}: {
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const y = useTransform(progress, [0, 1], [30, -30]);
  const barOpacity = useTransform(progress, [0.2, 0.7], [1, 0.15]);
  const barY = useTransform(progress, [0.2, 0.7], [0, -24]);

  return (
    <motion.div
      className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-edge bg-void-lift"
      style={reduce ? undefined : { y }}
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-12 border-b border-edge bg-void"
        style={
          reduce
            ? { opacity: 0.35 }
            : { opacity: barOpacity, y: barY }
        }
      />
      <div className="flex h-full items-end p-6 sm:p-8">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-acid uppercase">
            Hide Chrome
          </p>
          <p className="mt-2 display text-3xl text-ink sm:text-4xl">Page first.</p>
          <span className="kbd mt-4 inline-flex">⌘S</span>
        </div>
      </div>
    </motion.div>
  );
}

function StoryVisual({
  kind,
  progress,
}: {
  kind: Story["visual"];
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  if (kind === "spaces") return <SpacesVisual progress={progress} reduce={reduce} />;
  if (kind === "split") return <SplitVisual progress={progress} reduce={reduce} />;
  if (kind === "veil") return <VeilVisual progress={progress} reduce={reduce} />;
  return <ChromeVisual progress={progress} reduce={reduce} />;
}

function Chapter({ story, index }: { story: Story; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bloom = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <div
      ref={ref}
      className="relative grid min-h-[110vh] items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16"
    >
      <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
        <p className="mb-3 text-xs font-bold tracking-[0.2em] text-acid uppercase">
          {story.kicker}
        </p>
        <h2 className="display text-[clamp(2rem,4.5vw,3.6rem)] text-ink">
          {story.title}
        </h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink-mute">
          {story.body}
        </p>
        {story.shortcut ? (
          <p className="mt-6">
            <span className="kbd text-sm">{story.shortcut}</span>
          </p>
        ) : null}
      </div>
      <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
        <StoryVisual kind={story.visual} progress={scrollYProgress} />
      </div>
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--bloom-c),transparent_65%)]"
          style={{ opacity: bloom }}
        />
      )}
    </div>
  );
}

export function PinnedStories() {
  return (
    <section className="relative z-10 border-t border-edge">
      <div className="mx-auto max-w-[var(--max)] px-[var(--pad)]">
        <div className="sticky top-[calc(var(--nav-h)+0.5rem)] z-20 -mx-[var(--pad)] border-b border-edge/60 bg-[color-mix(in_srgb,var(--void)_78%,transparent)] px-[var(--pad)] py-4 backdrop-blur-xl">
          <p className="text-xs font-bold tracking-[0.2em] text-ink-dim uppercase">
            Highlights
          </p>
        </div>
        {stories.map((story, i) => (
          <Chapter key={story.id} story={story} index={i} />
        ))}
      </div>
    </section>
  );
}
