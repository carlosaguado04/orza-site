import Link from "next/link";
import { downloadUrl, studioUrl } from "@/lib/features";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-edge">
      <div className="mx-auto flex max-w-[var(--max)] flex-col gap-8 px-[var(--pad)] py-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="mark text-lg text-ink">Orza</p>
          <p className="max-w-sm text-sm leading-relaxed text-ink-mute">
            A macOS browser from{" "}
            <a
              href={studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-edge-strong underline-offset-4 transition-colors hover:decoration-acid"
            >
              Acidity Studio
            </a>
            . Stock AppKit chrome. Developer ID signed.
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
            Releases
          </a>
          <a
            href={studioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            Acidity Studio
          </a>
        </div>
      </div>
      <div className="border-t border-edge">
        <p className="mx-auto max-w-[var(--max)] px-[var(--pad)] py-5 text-xs text-ink-dim">
          © 2026 Acidity Studio. Orza is for macOS.
        </p>
      </div>
    </footer>
  );
}
