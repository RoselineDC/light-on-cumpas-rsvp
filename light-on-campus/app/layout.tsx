import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Light on Campus — Igniting Purpose",
  description:
    "Christian Student Conference · 1 August 2026 · New Life Embassy Auditorium, Pretoria. Free entry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        sora.variable,
        dmSans.variable,
        "font-sans"
      )}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}