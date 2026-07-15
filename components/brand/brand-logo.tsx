import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND_LOGO, SITE_NAME } from "@/lib/constants";

type BrandLogoProps = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  animated?: boolean;
};

const dimensions = {
  xs: "h-10 w-10",
  sm: "h-14 w-14",
  md: "h-20 w-20 sm:h-24 sm:w-24",
  lg: "h-32 w-32 sm:h-40 sm:w-40",
  xl: "h-48 w-48 sm:h-56 sm:w-56",
};

export function BrandLogo({
  className,
  size = "md",
  animated = false,
}: BrandLogoProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full",
        dimensions[size],
        animated && "animate-[float_4s_ease-in-out_infinite]",
        className
      )}
    >
      <Image
        src={BRAND_LOGO}
        alt={`${SITE_NAME} logo`}
        fill
        className="object-cover"
        sizes="256px"
        priority={size === "lg" || size === "xl"}
      />
    </div>
  );
}
