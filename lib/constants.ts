export const SITE_NAME = "Stubbs' Rugs";
export const SITE_NAME_SCRIPT = "Stubbs'";
export const SITE_NAME_BLOCK = "Rugs";
export const SITE_TAGLINE =
  "Handmade custom tufted rugs — bold one-of-one pieces built to order. Sports, automotive, pop culture, and die-cut shapes.";
export const SITE_EMAIL = process.env.CONTACT_EMAIL ?? "stubbsrugs@gmail.com";
export const SITE_PHONE = "Contact for phone";
export const SITE_INSTAGRAM = "@STUBBSRUGZ";
export const SITE_LOCATION = "Custom Orders Nationwide";
export const CASH_APP = "Contact for details";

export const BRAND_LOGO = "/images/logo.jpg";

export const PRIMARY_CTA = "Start Your Rug";
export const SECONDARY_CTA = "View Gallery";
export const QUOTE_CTA = "Start Your Custom Rug";
export const GET_QUOTE_CTA = "Get Quote";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Submit Your Idea",
    description: "Send references, size, and your vision — we'll refine it together.",
  },
  {
    step: "02",
    title: "Approve Design",
    description: "Review your mockup. Revisions included with your design fee.",
  },
  {
    step: "03",
    title: "Hand Tufting Begins",
    description: "Your piece is crafted by hand with premium acrylic yarn.",
  },
  {
    step: "04",
    title: "Delivered To You",
    description: "Pickup or shipped nationwide — floor or wall ready.",
  },
] as const;

export const WHY_CHOOSE = [
  { title: "Handmade", description: "Every stitch placed by hand in our studio." },
  { title: "One-of-One", description: "Collectible art pieces — never mass-produced." },
  { title: "Premium Yarn", description: "Soft, vibrant acrylic built to last." },
  { title: "Any Shape", description: "Rectangles, ovals, die-cut logos, custom forms." },
  { title: "Bold Craft", description: "Dense pile, carved details, vibrant colors." },
] as const;

export const STUDIO_POLICIES = [
  { label: "Deposit", value: "50% non-refundable to start your order" },
  { label: "Design Fee", value: "$50 if you need a design created" },
  { label: "Rush Order", value: "+$100 for expedited turnaround" },
  { label: "Custom Shapes", value: "Die-cut and shaped rugs quoted individually" },
] as const;

export const PRICING_TIERS = [
  {
    size: "2 ft",
    price: "$125 – $175",
    note: "Accent pieces, gifts, desk drops",
  },
  {
    size: "3 ft",
    price: "$200 – $300",
    note: "Statement size · portraits from 3×3 ft",
  },
  {
    size: "4 ft",
    price: "$300 – $400",
    note: "Room centerpieces, bold installs",
  },
  {
    size: "5 ft",
    price: "$500+",
    note: "Large-scale custom commissions",
  },
] as const;

export const BUDGET_RANGES = [
  "Under $175",
  "$175 – $300",
  "$300 – $500",
  "$500+",
  "Not sure yet",
] as const;

export const PAYMENT_METHODS = ["Cash App", "Apple Pay", "Zelle"] as const;

export const PROJECT_CATEGORIES = [
  "Sports Team Rug",
  "Automotive Rug",
  "Pop Culture Rug",
  "Custom Shape Rug",
  "Character Rug",
  "Brand Logo Rug",
  "Graduation Rug",
  "Name Rug",
] as const;

export const SIZE_PRICE_MAP: Record<string, string> = {
  "2 ft": "$125 – $175",
  "3 ft": "$200 – $300",
  "4 ft": "$300 – $400",
  "5 ft": "$500+",
  Custom: "Quote",
};
