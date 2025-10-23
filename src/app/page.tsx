// src/app/page.tsx

"use client"

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { ProjectsSection } from "./components/project-section";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactMe";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark text-text-light">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
