import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CVModal } from "./components/CVModal";

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#070b14] text-slate-100 transition-colors duration-200">
        <Navbar onOpenCvModal={() => setCvModalOpen(true)} />
        
        <main>
          {/* 1. HERO */}
          <Hero />

          {/* 2. ABOUT */}
          <About />

          {/* 3. SKILLS */}
          <Skills />

          {/* 4. PROJECTS */}
          <Projects />

          {/* 5. EDUCATION */}
          <Education />

          {/* 6. CONTACT */}
          <Contact onOpenCvModal={() => setCvModalOpen(true)} />
        </main>

        {/* 7. FOOTER */}
        <Footer />

        {/* CV Printable / Text Copy Modal */}
        <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
