import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FeatureCard } from "@/components/FeatureCard";
import { Reveal } from "@/components/Reveal";
import { featureGroups } from "@/lib/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Orza features as shipped: Spaces, tree tabs, split tabs, Veil, adblock, Library, Reader, and more — all from the live macOS app.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-edge">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(232,255,61,0.07),transparent)]"
        />
        <div className="relative mx-auto max-w-[var(--max)] px-[var(--pad)] pt-16 pb-12 sm:pt-20">
          <Reveal>
            <p className="mb-3 text-xs font-bold tracking-[0.18em] text-ink-dim uppercase">
              Capabilities
            </p>
            <h1 className="mark max-w-2xl text-4xl tracking-tight text-ink sm:text-5xl">
              Features as shipped
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-mute">
              Grouped from Orza Settings, menus, and chrome. Shortcuts shown where
              the app defines them.
            </p>
          </Reveal>
        </div>
      </section>

      {featureGroups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={gi > 0 ? "border-t border-edge" : undefined}
        >
          <div className="mx-auto max-w-[var(--max)] px-[var(--pad)] py-16 sm:py-20">
            <Reveal>
              <div className="mb-8 max-w-2xl">
                <h2 className="mark text-2xl tracking-tight text-ink sm:text-3xl">
                  {group.title}
                </h2>
                <p className="mt-2 text-sm text-ink-mute sm:text-base">
                  {group.lede}
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((feature, i) => (
                <Reveal key={feature.id} delay={i * 0.03}>
                  <FeatureCard feature={feature} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="border-t border-edge">
        <CtaBand />
      </div>
    </>
  );
}
