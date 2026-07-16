import type { Metadata } from "next";
import { Reveal } from "@/components/shared/motion";
import { BrandLogo } from "@/components/brand/brand-logo";
import { ContactForm } from "@/components/contact/contact-form";
import {
  CASH_APP,
  PAYMENT_METHODS,
  SITE_EMAIL,
  SITE_LOCATION,
  SITE_PHONE,
  SOCIAL_LINKS,
  STUDIO_POLICIES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your custom tufted rug with Stubbs' Rugs. Custom orders nationwide — pickup or shipping available.",
};

export default function ContactPage() {
  return (
    <div className="section-padding mx-auto max-w-7xl pt-24">
      <div className="grid gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Commission · {SITE_LOCATION}
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-wide text-cream sm:text-6xl">
            LET&apos;S MAKE YOUR RUG.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Share your vision and we&apos;ll guide you from design approval to
            hand-tufted delivery — bold craftsmanship, premium yarn, and
            one-of-one results.
          </p>

          <div className="mt-8 flex items-start gap-4">
            <BrandLogo size="md" animated className="shrink-0" />
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="text-cream">Email:</span>{" "}
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-gold">
                  {SITE_EMAIL}
                </a>
              </p>
              <p>
                <span className="text-cream">Phone:</span>{" "}
                <a href={`tel:${SITE_PHONE.replace(/\D/g, "")}`} className="hover:text-gold">
                  {SITE_PHONE}
                </a>
              </p>
              <div className="space-y-2">
                <p className="text-cream">Follow us:</p>
                <ul className="space-y-2">
                  {SOCIAL_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                <span className="text-cream">Payments:</span>{" "}
                {PAYMENT_METHODS.join(" · ")} · Cash App {CASH_APP}
              </p>
            </div>
          </div>

          <ul className="mt-10 space-y-3 border-t border-border pt-8 text-sm text-muted-foreground">
            {STUDIO_POLICIES.map((policy) => (
              <li key={policy.label}>
                <span className="font-semibold text-gold">{policy.label}:</span>{" "}
                {policy.value}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
