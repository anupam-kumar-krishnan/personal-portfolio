import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../../globals.css";
import { Container } from "@/components/container";

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
  title: "Portfolio Website",
  description:
    "Personal Portfolio showcasing skills, minimal and smooth microinteractions as a Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="min-h-screen px-10 md:pt-20 md:pb-10 prose">
      {children}
    </Container>
  );
}
