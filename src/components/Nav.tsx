"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { downloadUrl } from "@/lib/features";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-[color-mix(in_srgb,var(--void)_86%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex h-[var(--nav-h)] max-w-[var(--max)] items-center justify-between px-[var(--pad)]">
        <Link href="/" className="mark text-[1.15rem] tracking-tight text-ink">
          Orza
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors duration-[var(--dur)] ease-[var(--ease-out)] ${
                  active
                    ? "bg-void-raised text-ink"
                    : "text-ink-mute hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-full bg-acid px-3.5 py-1.5 text-sm font-bold text-void transition-transform duration-[var(--dur)] ease-[var(--ease-out)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}
