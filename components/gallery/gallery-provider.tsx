"use client";

import Image from "next/image";
import { createContext, useContext, useState } from "react";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";

type GalleryContextValue = {
  openLightbox: (project: Project) => void;
};

const GalleryContext = createContext<GalleryContextValue | null>(null);

export function useGallery() {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within GalleryProvider");
  }
  return context;
}

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <GalleryContext.Provider value={{ openLightbox: setActive }}>
      {children}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Project preview"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 rounded-none border border-border px-4 py-2 text-sm text-cream hover:border-gold"
          >
            <X className="inline h-4 w-4" /> Close
          </button>
          <div
            className="relative max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.image}
              alt="Custom tufted rug by Stubbs' Rugz"
              width={1200}
              height={1200}
              className="max-h-[70vh] w-auto rounded-none object-contain"
            />
            <div className="mt-4 border border-border bg-surface p-6">
              <p className="font-display text-xl tracking-wide text-cream">
                {active.size} · {active.price}
              </p>
            </div>
          </div>
        </div>
      )}
    </GalleryContext.Provider>
  );
}
