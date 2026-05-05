"use client";

import { Suspense } from "react";
import Hero from "./components/home/Hero";
import StatsBar from "./components/home/StatsBar";
import TextReveal from "./components/home/TextReveal";
import Marquee from "./components/home/Marquee";
import ServicesSection from "./components/home/ServicesSection";
import ProcessSection from "./components/home/ProcessSection";
import RoutesSection from "./components/home/RoutesSection";
import AboutSection from "./components/home/AboutSection";
import FAQSection from "./components/home/FAQSection";
import ContactSection from "./components/home/ContactSection";

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#F7F5F0]">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  return (
    <main id="main-content" className="overflow-x-hidden w-full max-w-full flex flex-col items-center">
      <Hero />
      <StatsBar />
      <TextReveal />
      <Marquee />
      <ServicesSection />
      <ProcessSection />
      <RoutesSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
