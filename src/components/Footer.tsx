import Link from "next/link";
import { downloadUrl, studioUrl } from "@/lib/features";

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-edge">
      <div className="mx-auto flex max-w-[var(--max)] flex-col gap-10 px-[var(--pad)] py-14 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-4">
          <p className="display text-4xl text-ink sm:text-5xl">
            Orza<span className="text-acid">.</span>
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-ink-mute">
            A macOS browser.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-mute">
          <Link href="/features" className="hover:text-ink">
            Features
          </Link>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            Download
          </a>
        </div>
      </div>
      <div className="border-t border-edge">
        <p className="mx-auto max-w-[var(--max)] px-[var(--pad)] py-5 text-xs text-ink-dim">
          © 2026{" "}
          <a
            href={studioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink-mute"
          >
            Acidity Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
