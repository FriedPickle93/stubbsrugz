import fs from "fs";
import path from "path";
import {
  PRICING_TIERS,
  PROJECT_CATEGORIES,
} from "@/lib/constants";

export type Project = {
  slug: string;
  title: string;
  category: string;
  size: string;
  price: string;
  image: string;
  aspect: "tall" | "wide" | "square";
  featured?: boolean;
};

const ASPECTS: Project["aspect"][] = ["tall", "wide", "square"];
const SIZES = PRICING_TIERS.map((tier) => tier.size);

function slugify(filename: string): string {
  return filename.replace(/\.[^.]+$/, "").toLowerCase();
}

export function getProjects(): Project[] {
  const galleryDir = path.join(process.cwd(), "public/images/gallery");

  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  return fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort()
    .map((file, index) => {
      const size = SIZES[index % SIZES.length];
      const price =
        PRICING_TIERS.find((tier) => tier.size === size)?.price ?? "Quote";
      const category = PROJECT_CATEGORIES[index % PROJECT_CATEGORIES.length];

      return {
        slug: slugify(file),
        title: category,
        category,
        size,
        price,
        image: `/images/gallery/${file}`,
        aspect: ASPECTS[index % ASPECTS.length],
        featured: index < 6,
      };
    });
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}
