"use client";

import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.adobeDataLayer) {
      window.adobeDataLayer.push({
        event: "pageView",
        page: {
          name: "Portfolio Home"
        }
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection/>
      <TapeSection/>
      <TestimonialsSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer />
    </div>
  );
}
