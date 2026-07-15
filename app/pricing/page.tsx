import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/shared/motion";
import { BrandMascot } from "@/components/brand/brand-mascot";
import { Button } from "@/components/ui/button";
import {
  GET_QUOTE_CTA,
  PRICING_TIERS,
  STUDIO_POLICIES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Custom tufted rug pricing from Stubbs' Rugs — 2 ft through 5 ft, plus design fee and deposit details.",
};

export default function PricingPage() {
  return (
    <div className="section-padding mx-auto max-w-7xl pt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Investment
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-wide text-cream sm:text-7xl">
            EVERY RUG IS CUSTOM.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Pricing depends on size and design complexity. These ranges from our
            studio menu help you plan — your final quote is always personalized.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="hidden lg:block">
          <BrandMascot size="lg" animated />
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PRICING_TIERS.map((tier, i) => (
          <Reveal key={tier.size} delay={i * 0.08}>
            <div className="flex h-full flex-col border border-border bg-surface p-8 transition-colors hover:border-blue/40">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue">
                {tier.size}
              </p>
              <p className="mt-4 font-display text-3xl tracking-wide text-cream">
                {tier.price.toUpperCase()}
              </p>
              <p className="mt-4 flex-1 text-sm text-muted-foreground">
                {tier.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="grid gap-4 border border-border bg-surface p-8 sm:grid-cols-2 lg:grid-cols-4">
          {STUDIO_POLICIES.map((policy) => (
            <div key={policy.label}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                {policy.label}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{policy.value}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16 border border-border bg-surface p-8 sm:p-12">
        <h2 className="font-display text-3xl tracking-wide text-cream">
          READY FOR YOUR QUOTE?
        </h2>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Send your idea, size, and references — we&apos;ll respond with next
          steps and a personalized estimate.
        </p>
        <Button variant="blue" size="lg" className="mt-8" asChild>
          <Link href="/contact">{GET_QUOTE_CTA}</Link>
        </Button>
      </Reveal>
    </div>
  );
}
