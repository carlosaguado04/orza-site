"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { downloadUrl } from "@/lib/features";
import { InteractiveChrome } from "./InteractiveChrome";

const line = "A Mac browser you’ll keep.";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const wordScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative z-10 min-h-[100svh] overflow-hidden pt-[calc(var(--nav-h)+1.5rem)] pb-16"
    >
      <div className="mx-auto max-w-[var(--max)] px-[var(--pad)]">
        <motion.div
          style={reduce ? undefined : { y: titleY, opacity: titleOpacity }}
          className="relative"
        >
          <motion.h1
            className="display relative max-w-[18ch] text-[clamp(3.4rem,11vw,8.5rem)] text-ink"
            style={reduce ? undefined : { scale: wordScale }}
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          >
            <span className="block">
              Orza
              <span className="acid-text">.</span>
            </span>
            <span className="mt-2 block max-w-[14ch] text-[clamp(1.65rem,4.6vw,3.35rem)] leading-[1.05] tracking-[-0.04em] text-ink">
              {reduce
                ? line
                : line.split(" ").map((word, i) => (
                    <motion.span
                      key={`${word}-${i}`}
                      className="mr-[0.28em] inline-block"
                      initial={{ opacity: 0, y: "0.55em" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.28 + i * 0.06,
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed text-ink-mute sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          >
            Spaces, tree tabs, and split panes when work gets dense. Veil when
            it shouldn’t leave a trace. Shield when the page gets loud. Built
            for macOS.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-acid px-7 py-3.5 text-sm font-bold text-void transition-transform duration-[var(--dur)] ease-[var(--ease-out)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-0" />
              <span className="relative">Download Orza</span>
            </a>
            <Link
              href="/features"
              className="inline-flex items-center justify-center rounded-full border border-edge-strong bg-void-lift/70 px-7 py-3.5 text-sm font-bold text-ink backdrop-blur-md transition-colors duration-[var(--dur)] ease-[var(--ease-out)] hover:border-acid/45"
            >
              Tour features
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-16 sm:mt-24">
          <InteractiveChrome />
        </div>
      </div>
    </section>
  );
}
