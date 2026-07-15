import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND_LOGO } from "@/lib/constants";

type BrandMascotProps = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  animated?: boolean;
};

const dimensions = {
  xs: "h-12 w-12",
  sm: "h-16 w-16",
  md: "h-24 w-24 sm:h-28 sm:w-28",
  lg: "h-36 w-36 sm:h-44 sm:w-44",
  xl: "h-48 w-48 sm:h-64 sm:w-64",
};

export function BrandMascot({
  className,
  size = "md",
  animated = false,
}: BrandMascotProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-xl",
        dimensions[size],
        animated && "animate-[float_4s_ease-in-out_infinite]",
        className
      )}
    >
      <Image
        src={BRAND_LOGO}
        alt="Stubbs' Rugs logo"
        fill
        className="object-contain"
        sizes="256px"
      />
    </div>
  );
}
