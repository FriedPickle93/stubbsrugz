import Link from "next/link";
import { Reveal } from "@/components/shared/motion";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { QUOTE_CTA } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid items-center gap-10 border border-border bg-background p-8 sm:p-12 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                Ready?
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-cream sm:text-5xl">
                LET&apos;S TUFT YOUR VISION.
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Send your idea, size, and references — we&apos;ll respond with
                next steps and a personalized quote.
              </p>
              <Button variant="gold" size="lg" className="mt-8" asChild>
                <Link href="/contact">{QUOTE_CTA}</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="brand-glow rounded-full border border-gold/20 bg-surface p-4">
                <BrandLogo size="lg" animated />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
