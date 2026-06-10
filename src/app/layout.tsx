import type { Metadata, Viewport } from "next";
import { Syne, Unbounded, Space_Grotesk, Inter } from "next/font/google"; // Fonts requested
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_DESCRIPTION =
  "Fullstack developer & Epitech student based in Paris. Currently full-time intern at Phocus1, building internal platforms and AI automation workflows with n8n. React, Next.js, Go, Docker, PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL("https://raprapchh.github.io"),
  title: "Raphaël Chanliongco — Fullstack Developer",
  description: SITE_DESCRIPTION,
  keywords: [
    "Raphaël Chanliongco",
    "Fullstack Developer",
    "Epitech",
    "Paris",
    "React",
    "Next.js",
    "Go",
    "n8n",
    "Automation",
    "Portfolio",
  ],
  openGraph: {
    title: "Raphaël Chanliongco — Fullstack Developer",
    description: SITE_DESCRIPTION,
    url: "https://raprapchh.github.io",
    siteName: "Raphaël Chanliongco",
    type: "website",
    images: [{ url: "/assets/Photo.png", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphaël Chanliongco — Fullstack Developer",
    description: SITE_DESCRIPTION,
    images: ["/assets/Photo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#151410",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${unbounded.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
