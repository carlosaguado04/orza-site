"use client";

import { useTheme, type ThemePreference } from "@/providers/ThemeProvider";

const LABELS: Record<ThemePreference, string> = {
  system: "Auto",
  light: "Light",
  dark: "Dark",
};

export function ThemeToggle() {
  const { preference, cycle } = useTheme();

  return (
    <button
      type="button"
      onClick={cycle}
      className="rounded-full border border-edge-strong bg-void-lift/80 px-3 py-1.5 text-xs font-bold tracking-wide text-ink-mute uppercase transition-colors duration-[var(--dur)] ease-[var(--ease-out)] hover:border-acid/40 hover:text-ink"
      aria-label={`Theme: ${LABELS[preference]}. Click to change.`}
      title="Cycles Auto → Light → Dark"
    >
      {LABELS[preference]}
    </button>
  );
}
