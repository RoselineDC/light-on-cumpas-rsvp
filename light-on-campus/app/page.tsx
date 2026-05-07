import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Details } from "@/components/sections/Details";
import { Expect } from "@/components/sections/Expect";
import { VideoSection } from "@/components/sections/VideoSection";
import { ThemeVerse } from "@/components/sections/ThemeVerse";
import { Register } from "@/components/sections/Register";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-screen-2xl mx-auto px-4">
        <Hero />
        <Details />
        <Expect />
        <VideoSection />
        <ThemeVerse />
        <Register />
      </main>
      <Footer />
    </>
  );
}
