import Link from "next/link";
import { BrowserChrome } from "@/components/BrowserChrome";
import { CtaBand } from "@/components/CtaBand";
import { FeatureCard } from "@/components/FeatureCard";
import { Reveal } from "@/components/Reveal";
import { downloadUrl, featureGroups } from "@/lib/features";

const highlights = featureGroups
  .flatMap((g) => g.items)
  .filter((f) =>
    ["spaces", "tree-tabs", "split-tabs", "veil", "adblock", "hide-chrome"].includes(
      f.id,
    ),
  );

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(232,255,61,0.09),transparent)]"
        />
        <div className="grain" />
        <div className="relative mx-auto max-w-[var(--max)] px-[var(--pad)] pt-16 pb-12 sm:pt-24 sm:pb-16">
          <Reveal>
            <p className="mb-4 text-xs font-bold tracking-[0.18em] text-ink-dim uppercase">
              Acidity Studio · macOS
            </p>
            <h1 className="mark max-w-3xl text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Orza is a Mac browser you’ll keep.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-mute sm:text-lg">
              Stock AppKit chrome. Spaces, tree tabs, and split panes when work
              gets dense. Veil when it shouldn’t leave a trace. Built for macOS —
              nothing we don’t ship.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-acid px-6 py-3 text-sm font-bold text-void transition-transform duration-[var(--dur)] ease-[var(--ease-out)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Download
              </a>
              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-full border border-edge-strong bg-void-lift px-6 py-3 text-sm font-bold text-ink transition-colors duration-[var(--dur)] ease-[var(--ease-out)] hover:border-acid/40"
              >
                Features
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 sm:mt-20">
            <BrowserChrome />
          </div>
        </div>
      </section>

      <section className="border-t border-edge">
        <div className="mx-auto max-w-[var(--max)] px-[var(--pad)] py-20 sm:py-24">
          <Reveal>
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="mark text-2xl tracking-tight text-ink sm:text-3xl">
                  What it actually does
                </h2>
                <p className="mt-2 max-w-lg text-sm text-ink-mute sm:text-base">
                  Highlights from the live app — Settings, menus, and chrome.
                  No passkeys, no AI, no fake sync.
                </p>
              </div>
              <Link
                href="/features"
                className="text-sm font-bold text-ink-mute transition-colors hover:text-acid"
              >
                All features →
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((feature, i) => (
              <Reveal key={feature.id} delay={i * 0.04}>
                <FeatureCard feature={feature} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-edge">
        <div className="mx-auto grid max-w-[var(--max)] gap-10 px-[var(--pad)] py-20 sm:grid-cols-3 sm:py-24">
          {[
            {
              t: "Native chrome",
              d: "AppKit menus, materials, and system appearance — Light, Dark, or Auto.",
            },
            {
              t: "Signed builds",
              d: "Developer ID signed for macOS. Public downloads on GitHub Releases.",
            },
            {
              t: "Exacting scope",
              d: "Every line on this site maps to something in Orza. Nothing invented for the landing page.",
            },
          ].map((item, i) => (
            <Reveal key={item.t} delay={i * 0.05}>
              <div className="space-y-2">
                <h3 className="text-sm font-bold tracking-wide text-acid uppercase">
                  {item.t}
                </h3>
                <p className="text-sm leading-relaxed text-ink-mute">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
