import type { Metadata } from "next";
import { Bebas_Neue, Inter, Pacifico } from "next/font/google";
import { GalleryProvider } from "@/components/gallery/gallery-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://stubbsrugz.vercel.app"
  ),
  title: {
    default: `${SITE_NAME} | Handcrafted Custom Rugs`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  openGraph: {
    title: `${SITE_NAME} | Custom Hand-Tufted Rugs`,
    description: SITE_TAGLINE,
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} ${pacifico.variable} h-full`}
    >
      <body className="min-h-full font-sans">
        <GalleryProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </GalleryProvider>
      </body>
    </html>
  );
}
