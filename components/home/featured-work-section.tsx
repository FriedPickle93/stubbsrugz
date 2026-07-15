import Link from "next/link";
import { Reveal } from "@/components/shared/motion";
import { ProjectCard } from "@/components/gallery/project-card";
import { Button } from "@/components/ui/button";
import { SECONDARY_CTA } from "@/lib/constants";
import type { Project } from "@/data/projects";

type FeaturedWorkSectionProps = {
  projects: Project[];
};

export function FeaturedWorkSection({ projects }: FeaturedWorkSectionProps) {
  const featured = projects.slice(0, 9);

  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                Portfolio
              </p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-cream sm:text-6xl">
                FEATURED WORK
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/gallery">{SECONDARY_CTA}</Link>
            </Button>
          </div>
        </Reveal>

        <div className="masonry-grid mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              priority={i < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
