import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
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
    icon: '/favicon.ico',
  },
  title: "Light on Campus — Igniting Purpose",
  description:
    "Christian Student Conference · 1 August 2026 · New Life Embassy Auditorium, Pretoria. Free entry. Be the light of the world.",
  openGraph: {
    title: "Light on Campus — Igniting Purpose",
    description:
      "Join us for a full day of worship, word, and community. 1 August 2026 · Pretoria · Free entry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="bg-[#f8fafb] text-[#0d1b2a] antialiased">{children}</body>
    </html>
  );
}
