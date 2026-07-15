import { Reveal } from "@/components/shared/motion";
import { BrandMascot } from "@/components/brand/brand-mascot";
import { SITE_LOCATION } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="section-padding border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="flex justify-center lg:justify-start">
            <BrandMascot size="xl" animated className="brand-glow" />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue">
            Custom Tufting Studio · {SITE_LOCATION}
          </p>
          <h2 className="mt-4 font-display text-5xl leading-none tracking-wide text-cream sm:text-6xl">
            MORE THAN
            <br />
            FLOOR DÉCOR.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every piece is handmade and designed to be a one-of-one collectible
            — something you hang, flex, and keep forever. We transform your
            ideas into tufted artwork with bold craftsmanship and premium yarn.
          </p>
          <p className="mt-4 text-muted-foreground">
            Sports teams, automotive mats, pop culture icons, die-cut logos, and
            fully custom shapes. If you can dream it, we can tuft it.
          </p>
          <p className="mt-6 font-script text-2xl text-gold">
            — Stubbs&apos; Rugs
          </p>
        </Reveal>
      </div>
    </section>
  );
}
