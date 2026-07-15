import { Reveal } from "@/components/shared/motion";
import { WHY_CHOOSE } from "@/lib/constants";

export function WhyChooseSection() {
  return (
    <section className="section-padding border-t border-border bg-background">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Why Stubbs&apos;
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-cream sm:text-6xl">
            BUILT DIFFERENT
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {WHY_CHOOSE.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full bg-background p-6 sm:p-8">
                <h3 className="font-display text-xl tracking-wide text-gold">
                  {item.title.toUpperCase()}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
