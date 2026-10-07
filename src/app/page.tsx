import { CtaBand } from "@/components/CtaBand";
import { FeatureBento } from "@/components/FeatureBento";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { PinnedStories } from "@/components/PinnedStories";
import { ShortcutGalaxy } from "@/components/ShortcutGalaxy";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <PinnedStories />
      <ShortcutGalaxy />
      <FeatureBento />
      <CtaBand />
    </>
  );
}
