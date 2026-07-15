"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrandMascot } from "@/components/brand/brand-mascot";
import { BrandLogo } from "@/components/brand/brand-logo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/constants";
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-6"
            >
              <BrandLogo size="lg" stacked />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-[clamp(2.75rem,10vw,7rem)] leading-[0.92] tracking-wide text-cream"
            >
              YOUR VISION.
              <br />
              <span className="gradient-text">HAND-TUFTED.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
            >
              Custom rugs designed from your ideas — sports teams, automotive,
              pop culture, die-cut shapes, and bold one-of-one commissions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button variant="blue" size="lg" asChild>
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
                    i === index ? "w-10 bg-blue" : "w-4 bg-border hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="brand-glow rounded-2xl border border-blue/20 bg-surface p-3 backdrop-blur-sm">
              <BrandMascot size="xl" animated />
            </div>
            <p className="mt-3 text-center font-script text-lg text-gold">
              Stubbs&apos; Rugs
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
