import { CtaBand } from "@/components/CtaBand";
import { FeatureBento } from "@/components/FeatureBento";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { PinnedStories } from "@/components/PinnedStories";
import { ShortcutGalaxy } from "@/components/ShortcutGalaxy";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <PinnedStories />
      <ShortcutGalaxy />
      <FeatureBento />

      <section className="relative z-10 border-t border-edge">
        <div className="mx-auto grid max-w-[var(--max)] gap-10 px-[var(--pad)] py-24 sm:grid-cols-3 sm:py-28">
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
            <Reveal key={item.t} delay={i * 0.06}>
              <div className="space-y-3">
                <p className="text-xs font-bold tracking-[0.2em] text-acid uppercase">
                  {item.t}
                </p>
                <p className="text-base leading-relaxed text-ink-mute">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
