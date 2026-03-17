import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar/index";
import { Footer } from "@/components/navbar/footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anupam Kumar Krishnan",
  description:
    "Frontend Engineer. Ex-IBM. I ship components daily and write about what I learn.",
  openGraph: {
    title: "Anupam Kumar Krishnan",
    description:
      "Frontend Engineer. Ex-IBM. I ship components daily and write about what I learn.",
    url: "https://anupam-k-krishnan.vercel.app",
    images: [
      {
        url: "https://anupam-k-krishnan.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anupam Kumar Krishnan — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anupam Kumar Krishnan",
    description:
      "Frontend Engineer. Ex-IBM. I ship components daily and write about what I learn.",
    images: ["https://anupam-k-krishnan.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} relative [--pattern-fg:var(--color-neutral-950)]/5 antialiased bg-white text-neutral-900`}
      >
        <Toaster position="top-center" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
