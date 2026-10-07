"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function AmbientBg() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-void transition-colors duration-300" />

      <motion.div
        className="bloom absolute -top-[20%] left-1/2 h-[70vw] w-[70vw] -translate-x-1/2 rounded-full"
        style={{
          y: reduce ? 0 : y1,
          background:
            "radial-gradient(circle, var(--bloom-a) 0%, color-mix(in srgb, var(--bloom-a) 25%, transparent) 38%, transparent 68%)",
        }}
      />
      <motion.div
        className="bloom absolute top-[35%] -left-[15%] h-[45vw] w-[45vw] rounded-full"
        style={{
          y: reduce ? 0 : y2,
          animationDelay: "-4s",
          background:
            "radial-gradient(circle, var(--bloom-b) 0%, transparent 62%)",
        }}
      />
      <div
        className="bloom absolute top-[60%] right-[-10%] h-[40vw] w-[40vw] rounded-full"
        style={{
          animationDelay: "-8s",
          background:
            "radial-gradient(circle, var(--bloom-c) 0%, transparent 60%)",
        }}
      />

      <motion.div
        className="absolute top-[18%] right-[8%] hidden h-[28vw] w-[28vw] md:block"
        style={{ rotate: reduce ? 0 : rotate }}
      >
        <div className="orbit absolute inset-0 rounded-full border border-edge" />
        <div
          className="orbit absolute inset-[12%] rounded-full border border-edge"
          style={{ animationDuration: "42s", animationDirection: "reverse" }}
        />
        <div className="absolute inset-[28%] rounded-full border border-dashed border-acid/25" />
        <span className="dot-acid absolute top-0 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <span className="absolute bottom-[18%] left-[8%] size-1.5 rounded-full bg-ink-dim" />
      </motion.div>

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.2]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="web" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--web-line)" stopOpacity="0.55" />
            <stop offset="50%" stopColor="var(--web-line)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--web-fade)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <g stroke="url(#web)" strokeWidth="0.6" fill="none">
          <path className="pulse-line" d="M5% 18% L28% 32% L48% 22% L72% 40% L94% 28%" />
          <path
            className="pulse-line"
            style={{ animationDelay: "1.2s" }}
            d="M8% 72% L30% 58% L52% 68% L78% 52% L96% 66%"
          />
          <path
            className="pulse-line"
            style={{ animationDelay: "2.1s" }}
            d="M18% 8% L22% 48% L40% 88%"
          />
          <path
            className="pulse-line"
            style={{ animationDelay: "0.6s" }}
            d="M82% 12% L70% 46% L86% 90%"
          />
        </g>
        <g fill="var(--web-node)">
          <circle cx="28%" cy="32%" r="1.6" opacity="0.7" />
          <circle cx="48%" cy="22%" r="1.2" opacity="0.5" />
          <circle cx="72%" cy="40%" r="1.8" opacity="0.65" />
          <circle cx="52%" cy="68%" r="1.3" opacity="0.45" />
        </g>
      </svg>

      <div className="grain" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,color-mix(in_srgb,var(--void)_35%,transparent)_70%,var(--void)_100%)]" />
    </div>
  );
}
