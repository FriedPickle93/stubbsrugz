import type { Metadata } from "next";
import { Reveal } from "@/components/shared/motion";
import { ProjectCard } from "@/components/gallery/project-card";
import { getProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse custom hand-tufted rugs by Stubbs' Rugs with sizes and pricing.",
};

export default function GalleryPage() {
  const projects = getProjects();

  return (
    <div className="section-padding mx-auto max-w-7xl pt-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue">
          Portfolio
        </p>
        <h1 className="mt-3 font-display text-5xl tracking-wide text-cream sm:text-7xl">
          OUR WORK
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Every rug is hand-tufted and made to order. Hover any piece to see
          size and price range.
        </p>
      </Reveal>

      <div className="masonry-grid mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            priority={i < 4}
          />
        ))}
      </div>
    </div>
  );
}
