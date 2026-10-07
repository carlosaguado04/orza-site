import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FeatureCard } from "@/components/FeatureCard";
import { Reveal } from "@/components/Reveal";
import { featureGroups } from "@/lib/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Orza features: Spaces, tree tabs, split tabs, Veil, Shield, Library, Reader, and more.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-[calc(var(--nav-h)+3rem)] pb-16">
        <div className="mx-auto max-w-[var(--max)] px-[var(--pad)]">
          <Reveal>
            <h1 className="display max-w-[12ch] text-[clamp(3rem,9vw,6.5rem)] text-ink">
              Features.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-mute">
              Spaces, tree tabs, split, Veil, Shield, Library — shortcuts where
              they matter.
            </p>
          </Reveal>
        </div>
      </section>

      {featureGroups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className="relative z-10 border-t border-edge"
        >
          <div className="mx-auto max-w-[var(--max)] px-[var(--pad)] py-20 sm:py-24">
            <Reveal>
              <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-2 text-xs font-bold tracking-[0.2em] text-acid uppercase">
                    {String(gi + 1).padStart(2, "0")}
                  </p>
                  <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-ink">
                    {group.title}
                  </h2>
                  <p className="mt-3 text-base text-ink-mute">{group.lede}</p>
                </div>
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

      <div className="relative z-10 border-t border-edge">
        <CtaBand />
      </div>
    </>
  );
}
