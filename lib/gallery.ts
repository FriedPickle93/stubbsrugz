import fs from "fs";
import path from "path";

export function getGalleryImages(): string[] {
  const galleryDir = path.join(process.cwd(), "public/images/gallery");

  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  return fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort()
    .map((file) => `/images/gallery/${file}`);
}
