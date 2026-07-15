import { cn } from "@/lib/utils";
import { SITE_NAME_BLOCK, SITE_NAME_SCRIPT } from "@/lib/constants";

type BrandLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  stacked?: boolean;
};

export function BrandLogo({
  className,
  size = "md",
  stacked = false,
}: BrandLogoProps) {
  const scriptSize = {
    sm: "text-xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl",
  }[size];

  const blockSize = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
  }[size];

  if (stacked) {
    return (
      <div className={cn("leading-none", className)}>
        <span className={cn("font-script text-gold drop-shadow-sm", scriptSize)}>
          {SITE_NAME_SCRIPT}
        </span>
        <span
          className={cn(
            "mt-1 block font-display tracking-[0.2em] text-blue",
            blockSize
          )}
        >
          {SITE_NAME_BLOCK.toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex flex-wrap items-baseline gap-x-2 leading-none",
        className
      )}
    >
      <span className={cn("font-script text-gold", scriptSize)}>
        {SITE_NAME_SCRIPT}
      </span>
      <span className={cn("font-display tracking-[0.15em] text-blue", blockSize)}>
        {SITE_NAME_BLOCK.toUpperCase()}
      </span>
    </span>
  );
}
