import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Raphaël Chanliongco | Portfolio",
  description:
    "Portfolio of Raphaël Chanliongco, Fullstack Developer & Epitech Student.",
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
