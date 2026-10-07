"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { downloadUrl } from "@/lib/features";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
];

export function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-[border-color,background] duration-[400ms] ${
        scrolled
          ? "border-b border-edge bg-[color-mix(in_srgb,var(--void)_82%,transparent)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--nav-h)] max-w-[var(--max)] items-center justify-between px-[var(--pad)]">
        <Link href="/" className="mark text-[1.2rem] tracking-tight text-ink">
          Orza<span className="text-acid">.</span>
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
            className="ml-1 rounded-full bg-acid px-3.5 py-1.5 text-sm font-bold text-void transition-transform duration-[var(--dur)] ease-[var(--ease-out)] hover:scale-[1.03] active:scale-[0.98]"
          >
            Download
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
