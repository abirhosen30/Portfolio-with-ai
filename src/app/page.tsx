import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[#e2e8f0] selection:bg-teal-500 selection:text-slate-950">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Education />
        <ProjectsSection />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
