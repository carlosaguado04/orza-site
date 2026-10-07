"use client";

import Link from "next/link";
import { featureGroups } from "@/lib/features";
import { Reveal } from "./Reveal";

const pick = [
  "spaces",
  "tree-tabs",
  "split-tabs",
  "veil",
  "adblock",
  "library",
  "media",
  "hide-chrome",
  "go",
  "reader",
  "restore",
  "favorites",
];

export function FeatureBento() {
  const items = featureGroups
    .flatMap((g) => g.items)
    .filter((f) => pick.includes(f.id));

  return (
    <section className="relative z-10 border-t border-edge py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--max)] px-[var(--pad)]">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.22em] text-ink-dim uppercase">
                Features
              </p>
              <h2 className="display max-w-[14ch] text-[clamp(2.2rem,5vw,4.2rem)] text-ink">
                What Orza does.
              </h2>
              <p className="mt-4 max-w-lg text-ink-mute">
                Spaces, tree tabs, split, Veil, Shield, Library — and more.
              </p>
            </div>
            <Link
              href="/features"
              className="text-sm font-bold text-ink-mute transition-colors hover:text-acid"
            >
              See all →
            </Link>
          </div>
        </Reveal>

        <div className="grid auto-rows-[minmax(160px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((feature, i) => {
            const wide = i === 0 || i === 5 || i === 8;
            return (
              <Reveal
                key={feature.id}
                delay={(i % 6) * 0.04}
                className={wide ? "sm:col-span-2 lg:col-span-1" : undefined}
              >
                <article
                  className={`surface group relative flex h-full flex-col justify-between overflow-hidden p-6 ${
                    wide ? "min-h-[200px] lg:min-h-[220px]" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(232,255,61,0.08),transparent_45%)]" />
                  <div className="relative flex items-start justify-between gap-3">
                    <h3
                      className={`font-bold tracking-tight text-ink ${
                        wide ? "text-xl sm:text-2xl" : "text-lg"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    {feature.shortcut ? (
                      <span className="kbd shrink-0">{feature.shortcut}</span>
                    ) : null}
                  </div>
                  <p className="relative mt-4 text-sm leading-relaxed text-ink-mute">
                    {feature.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
