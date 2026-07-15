"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { useGallery } from "./gallery-provider";

type ProjectCardProps = {
  project: Project;
  index?: number;
  priority?: boolean;
  className?: string;
};

export function ProjectCard({
  project,
  index = 0,
  priority = false,
  className,
}: ProjectCardProps) {
  const { openLightbox } = useGallery();

  const aspectClass = {
    tall: "aspect-[3/4]",
    wide: "aspect-[4/3]",
    square: "aspect-square",
  }[project.aspect];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={cn("group masonry-item", className)}
    >
      <button
        type="button"
        onClick={() => openLightbox(project)}
        className="relative w-full overflow-hidden rounded-none text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
        aria-label={`View ${project.title}`}
      >
        <div className={cn("relative w-full bg-surface", aspectClass)}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={priority}
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black via-black/90 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
          <h3 className="font-display text-xl tracking-wide text-cream">
            {project.title.toUpperCase()}
          </h3>
          <p className="text-xs text-muted-foreground">
            {project.size} · {project.price}
          </p>
        </div>
      </button>
    </motion.article>
  );
}
