import { Reveal } from "@/components/shared/motion";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-cream sm:text-6xl">
            FROM IDEA TO RUG
          </h2>
        </Reveal>

        <div className="scrollbar-hide mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08} className="shrink-0">
              <div className="w-[280px] snap-start sm:w-[320px]">
                <div className="border border-border bg-surface p-6 transition-colors hover:border-gold/50">
                  <span className="font-display text-4xl text-gold">{step.step}</span>
                  <h3 className="mt-4 font-display text-2xl tracking-wide text-cream">
                    {step.title.toUpperCase()}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
