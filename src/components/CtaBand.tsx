"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { downloadUrl } from "@/lib/features";

export function CtaBand() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.94, 1, 1.02]);
  const glow = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  return (
    <section ref={ref} className="relative z-10 px-[var(--pad)] py-20 sm:py-28">
      <motion.div
        className="relative mx-auto max-w-[var(--max)] overflow-hidden rounded-[2rem] border border-acid/30 bg-void-lift px-6 py-16 sm:px-14 sm:py-24"
        style={reduce ? undefined : { scale }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--bloom-a),transparent_60%)]"
          style={{ opacity: glow }}
        />
        <div className="grain" />
        <div className="relative text-center">
          <h2 className="display mx-auto max-w-[12ch] text-[clamp(2.6rem,7vw,5.5rem)] text-ink">
            Install Orza on your Mac.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-ink-mute">
            Free download for macOS.
          </p>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-acid mt-10 px-8 py-4 text-sm"
          >
            Get Orza
          </a>
        </div>
      </motion.div>
    </section>
  );
}
