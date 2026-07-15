"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryProps = {
  images: string[];
};

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Every rug is hand-tufted and made to order. Browse recent commissions.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {images.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelected(src)}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:border-[var(--accent-blue)]/50 hover:shadow-[0_0_20px_rgba(0,102,255,0.15)]"
            >
              <Image
                src={src}
                alt="Custom tufted rug by Stubbs' Rugs"
                width={600}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
          >
            Close
          </button>
          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected}
              alt="Custom tufted rug by Stubbs' Rugs"
              width={1200}
              height={1200}
              className="max-h-[90vh] w-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
