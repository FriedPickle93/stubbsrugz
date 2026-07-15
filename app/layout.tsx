import type { Metadata } from "next";
import { Geist, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const unifraktur = UnifrakturMaguntia({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: "Stubbs' Rugs | Custom Hand-Tufted Rugs",
  description:
    "Custom hand-tufted rugs made to order. Sports, automotive, pop culture, and die-cut designs by Stubbs' Rugs.",
  openGraph: {
    title: "Stubbs' Rugs | Custom Hand-Tufted Rugs",
    description:
      "Custom hand-tufted rugs made to order. Sports, automotive, pop culture, and die-cut designs.",
    images: ["/images/logo.jpg"],
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
      className={`${geistSans.variable} ${unifraktur.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
