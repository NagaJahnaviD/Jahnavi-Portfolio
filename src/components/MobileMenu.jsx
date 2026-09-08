import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-all duration-200 ${
        menuOpen
          ? "opacity-100 pointer-events-auto bg-[#080B14]/95 backdrop-blur-xl"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col h-full justify-between p-6 max-w-sm mx-auto">
        <div className="flex justify-between items-center border-b border-[#1E293D] pb-4">
          <div className="flex items-center space-x-2">
            <span className="text-[#818CF8] font-mono font-bold">&lt;/&gt;</span>
            <span className="font-heading font-bold text-white">Menu</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-md bg-[#0D1322] border border-[#1E293D] text-[#94A3B8] hover:text-white"
          >
            <FaTimes size={16} />
          </button>
        </div>

        <div className="flex flex-col space-y-2 py-8 my-auto">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-md text-base font-medium text-[#CBD5E1] hover:text-white hover:bg-[#0D1322] border border-transparent hover:border-[#1E293D] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-[#1E293D] flex items-center justify-between">
          <div className="flex space-x-3">
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-md bg-[#0D1322] border border-[#1E293D] text-[#94A3B8] hover:text-white"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-md bg-[#0D1322] border border-[#1E293D] text-[#94A3B8] hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 text-xs font-semibold codecraft-btn-primary flex items-center space-x-1"
          >
            <span>Get in Touch</span>
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
};
