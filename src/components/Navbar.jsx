import { useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,15,0.6)] backdrop-blur-xl border-b border-white/10 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
          >
            Jahnavi
            <span className="text-blue-500">.tech</span>
          </a>

          {/* Hamburger / Close icon for mobile */}
          <div
            className="md:hidden w-8 h-8 relative cursor-pointer z-40 flex flex-col justify-center items-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
              }`}
            />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-10">
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative text-gray-300 hover:text-white transition-colors text-sm group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
