import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#080B14]/90 backdrop-blur-md border-b border-[#1E293D] py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2.5 group cursor-pointer"
            aria-label="Jahnavi Portfolio"
          >
            <span className="text-[#818CF8] font-mono font-bold text-lg">&lt;/&gt;</span>
            <span className="font-heading text-lg font-bold text-white tracking-tight">
              Jahnavi<span className="text-[#818CF8]">.dev</span>
            </span>
          </a>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-white border-b-2 border-[#6366F1] pb-1"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#94A3B8] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#94A3B8] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold codecraft-btn-primary"
            >
              <span>Get in Touch</span>
              <FiArrowUpRight className="text-sm" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md border border-[#1E293D] bg-[#0D1322] text-[#94A3B8] hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`w-full h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};
