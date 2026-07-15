import { Reveal } from "@/components/shared/motion";
import { BrandLogo } from "@/components/brand/brand-logo";
import { SITE_LOCATION } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="section-padding border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="flex justify-center lg:justify-start">
            <BrandLogo size="xl" animated className="brand-glow" />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Handcrafted in Middle Georgia · {SITE_LOCATION}
          </p>
          <h2 className="mt-4 font-display text-5xl leading-none tracking-wide text-cream sm:text-6xl">
            MADE FOR YOUR
            <br />
            PASSIONS.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every piece is handmade and designed to be a one-of-one collectible
            — sports teams, anime, business logos, cartoons, and custom artwork
            you can hang or walk on.
          </p>
          <p className="mt-4 text-muted-foreground">
            Made by hand. Made to last. DM to see past work or start your custom
            order today.
          </p>
          <p className="mt-6 font-script text-2xl text-gold">
            — Stubbs&apos; Rugz
          </p>
        </Reveal>
      </div>
    </section>
  );
}
