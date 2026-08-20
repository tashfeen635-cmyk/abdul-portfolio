import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Rehman — Explorer of the North",
  description:
    "Personal portfolio of Abdul Rehman — Travel storyteller, explorer, and founder of Terra Pakistan. Based in Gilgit-Baltistan.",
  keywords: [
    "Abdul Rehman",
    "Terra Pakistan",
    "Gilgit-Baltistan",
    "travel photographer",
    "explorer",
    "Northern Pakistan",
  ],
  openGraph: {
    title: "Abdul Rehman — Explorer of the North",
    description:
      "Travel storyteller and founder of Terra Pakistan. Based in Gilgit-Baltistan.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
