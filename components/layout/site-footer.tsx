import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import {
  CASH_APP,
  NAV_LINKS,
  PAYMENT_METHODS,
  SITE_EMAIL,
  SITE_LOCATION,
  SITE_NAME,
  SITE_PHONE,
  SITE_TAGLINE,
  SOCIAL_LINKS,
} from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <BrandLogo size="md" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE_TAGLINE}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Studio
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{SITE_LOCATION}</li>
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-gold">
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_PHONE.replace(/\D/g, "")}`} className="hover:text-gold">
                  {SITE_PHONE}
                </a>
              </li>
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

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Payments
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {PAYMENT_METHODS.map((method) => (
                <li key={method}>{method}</li>
              ))}
              <li>Cash App: {CASH_APP}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
