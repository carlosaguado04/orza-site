import { downloadUrl } from "@/lib/features";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <Reveal>
      <section className="mx-auto max-w-[var(--max)] px-[var(--pad)] py-20 sm:py-28">
        <div className="surface relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16">
          <div className="grain" />
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl space-y-3">
              <h2 className="mark text-2xl tracking-tight text-ink sm:text-3xl">
                Install Orza on your Mac
              </h2>
              <p className="text-sm leading-relaxed text-ink-mute sm:text-base">
                Public builds live on GitHub Releases. Developer ID signed
                (Team ID P3RR8U6LX6).
              </p>
            </div>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-acid px-6 py-3 text-sm font-bold text-void transition-transform duration-[var(--dur)] ease-[var(--ease-out)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Orza
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
