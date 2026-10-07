import type { Feature } from "@/lib/features";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="surface group flex h-full flex-col gap-3 p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold tracking-tight text-ink sm:text-lg">
          {feature.title}
        </h3>
        {feature.shortcut ? (
          <span className="kbd shrink-0">{feature.shortcut}</span>
        ) : null}
      </div>
      <p className="text-sm leading-relaxed text-ink-mute">{feature.body}</p>
    </article>
  );
}
