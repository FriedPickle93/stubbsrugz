export const SITE_NAME = "Stubbs' Rugz";
export const SITE_NAME_SCRIPT = "Stubbs'";
export const SITE_NAME_BLOCK = "Rugz";
export const SITE_TAGLINE =
  "Handcrafted custom rugs that make a statement. From business logos to anime, sports teams, and one-of-a-kind artwork — every rug is handmade with premium materials.";
export const SITE_EMAIL = process.env.CONTACT_EMAIL ?? "stubbsrugz@gmail.com";
export const SITE_PHONE = "478-244-XXXX";
export const SITE_INSTAGRAM = "@STUBBSRUGZ";
export const SITE_LOCATION = "Warner Robins, GA";
export const CASH_APP = "Contact for details";

export const BRAND_LOGO = "/images/logo.png";

export const PRIMARY_CTA = "Start Your Custom Rug";
export const SECONDARY_CTA = "View Gallery";
export const QUOTE_CTA = "Start Your Custom Rug";
export const GET_QUOTE_CTA = "Get A Quote";

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
    description: "Review your mockup and confirm details before tufting begins.",
  },
  {
    step: "03",
    title: "Hand Tufting Begins",
    description: "Your piece is crafted by hand with premium quality yarn.",
  },
  {
    step: "04",
    title: "Delivered To You",
    description: "Local pickup in Warner Robins or shipped anywhere in the U.S.",
  },
] as const;

export const WHY_CHOOSE = [
  { title: "Premium Yarn", description: "High-quality materials built to last." },
  { title: "Vibrant Colors", description: "Bold, durable colors that stand out." },
  { title: "Made To Order", description: "No two rugs are the same — fully custom." },
  { title: "Nationwide Ship", description: "Shipping available anywhere in the U.S." },
  { title: "Local Pickup", description: "Pickup available in Warner Robins, GA." },
] as const;

export const STUDIO_POLICIES = [
  { label: "Deposit", value: "50% non-refundable deposit required upfront" },
  { label: "Turnaround", value: "Typically 1–3 weeks depending on complexity" },
  { label: "Complexity", value: "3+ colors and high detail may increase price" },
  { label: "Starting Price", value: "Base price starts at $100 and varies by design" },
] as const;

export const PRICING_TIERS = [
  {
    size: "2 ft",
    price: "$120 & Up",
    note: "Accent pieces and smaller custom designs",
  },
  {
    size: "3 ft",
    price: "$225 & Up",
    note: "Statement size for logos and portraits",
  },
  {
    size: "4 ft",
    price: "$400 & Up",
    note: "Room centerpieces and bold installs",
  },
  {
    size: "5 ft",
    price: "$500 & Up",
    note: "Large-scale custom commissions",
  },
] as const;

export const BUDGET_RANGES = [
  "Under $225",
  "$225 – $400",
  "$400 – $500",
  "$500+",
  "Not sure yet",
] as const;

export const RUG_SIZES = ["2 ft", "3 ft", "4 ft", "5 ft", "Custom size"] as const;

export const PAYMENT_METHODS = ["Cash App", "Apple Pay", "Zelle"] as const;

export const SIZE_PRICE_MAP: Record<string, string> = {
  "2 ft": "$120 & Up",
  "3 ft": "$225 & Up",
  "4 ft": "$400 & Up",
  "5 ft": "$500 & Up",
  Custom: "Quote",
};
