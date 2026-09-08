import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { portfolioData } from "../data/portfolioData";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1E293D] bg-[#080B14] relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-2">
            <span className="text-[#818CF8] font-mono font-bold">&lt;/&gt;</span>
            <span className="font-heading font-bold text-white tracking-tight">
              Naga Jahnavi Dannayak
            </span>
            <span className="text-xs text-[#64748B] hidden sm:inline font-mono">
              • B.Tech CSE @ VNR VJIET
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[#94A3B8]">
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-[4px] hover:text-white hover:bg-[#0D1322] border border-transparent hover:border-[#1E293D] transition"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-[4px] hover:text-[#818CF8] hover:bg-[#0D1322] border border-transparent hover:border-[#1E293D] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={portfolioData.personal.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-[4px] hover:text-[#FBBF24] hover:bg-[#0D1322] border border-transparent hover:border-[#1E293D] transition"
              aria-label="LeetCode"
            >
              <SiLeetcode size={16} />
            </a>
            <a
              href={portfolioData.personal.socials.codechef}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-[4px] hover:text-[#FB923C] hover:bg-[#0D1322] border border-transparent hover:border-[#1E293D] transition"
              aria-label="CodeChef"
            >
              <SiCodechef size={16} />
            </a>
            <a
              href={portfolioData.personal.socials.medium}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-[4px] hover:text-[#A855F7] hover:bg-[#0D1322] border border-transparent hover:border-[#1E293D] transition"
              aria-label="Medium"
            >
              <FaMedium size={16} />
            </a>
          </div>

          <div className="text-xs font-mono text-[#64748B] text-center md:text-right">
            <div>© {currentYear} Jahnavi. All rights reserved.</div>
          </div>

        </div>
      </div>
    </footer>
  );
};
