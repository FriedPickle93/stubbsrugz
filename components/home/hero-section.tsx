"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand/brand-logo";
import { PRIMARY_CTA, SECONDARY_CTA, SITE_TAGLINE } from "@/lib/constants";
import type { Project } from "@/data/projects";

type HeroSectionProps = {
  featuredProjects: Project[];
};

export function HeroSection({ featuredProjects }: HeroSectionProps) {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.35]);

  useEffect(() => {
    if (featuredProjects.length <= 1) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % featuredProjects.length),
      4500
    );
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const current = featuredProjects[index] ?? featuredProjects[0];
  if (!current) return null;

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.slug}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={current.image}
            alt={current.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-black/40" />
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6"
          >
            <BrandLogo size="lg" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-wide text-cream"
          >
            HANDCRAFTED
            <br />
            <span className="gradient-text">CUSTOM RUGS</span>
            <br />
            THAT MAKE A STATEMENT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {SITE_TAGLINE}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact">{PRIMARY_CTA}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/gallery">{SECONDARY_CTA}</Link>
            </Button>
          </motion.div>
          <div className="mt-10 flex gap-2">
            {featuredProjects.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                aria-label={`Show ${p.title}`}
                onClick={() => setIndex(i)}
                className={`h-1 transition-all ${
                  i === index ? "w-10 bg-gold" : "w-4 bg-border hover:bg-gold/50"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
