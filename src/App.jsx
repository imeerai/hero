// Disable right-click and inspect shortcuts (basic deterrent)
// if (typeof window !== "undefined") {
//   window.addEventListener("contextmenu", (e) => e.preventDefault());
//   window.addEventListener("keydown", (e) => {
//     if (
//       e.key === "F12" ||
//       (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
//       (e.ctrlKey && e.key === "U")
//     ) {
//       e.preventDefault();
//       e.stopPropagation();
//     }
//   });
// }
import { BrowserRouter } from "react-router-dom";

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/footer.jsx";
import Navbar from "./components/Navbar";
import ExperienceSection from "./components/sections/experience";
import SkillsSection from "./components/sections/skills";
import EducationSection from "./components/sections/education";
import ProjectsSection from "./components/sections/projects";
import ContactSection from "./components/sections/contact";
import MovingStripSection from "./components/sections/moving-strip.jsx";
import StarsCanvas from "./components/canvas/Stars.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <div className="bg-primary -mt-10 sm:-mt-14">
          <About />
        </div>
        <div className="dark bg-background text-foreground">
          <main className="relative">
            <EducationSection />
            <MovingStripSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>

        <div className="relative z-0">
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
