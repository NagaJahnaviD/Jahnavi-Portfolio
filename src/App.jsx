import "./index.css";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { FloatingDots } from "./components/FloatingDots";
import { Home } from "./components/sections/Home";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { CompetitiveProgramming } from "./components/sections/CompetitiveProgramming";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#07080d] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        {/* Ambient atmospheric particle glow background */}
        <FloatingDots />

        {/* Fixed Navigation & Mobile Drawer */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Home />
          <Experience />
          <Projects />
          <CompetitiveProgramming />
          <About />
          <Contact />
        </main>

        {/* Site Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
