import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiCplusplus, SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FiArrowUpRight, FiCode } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Technical Intern @ Deutsche Börse",
    "CodeChef 4★ Competitive Programmer",
    "Academic Gold Medalist (9.6 CGPA)",
    "Full-Stack & AI Systems Builder"
  ];

  useEffect(() => {
    const fullRole = roles[roleIndex];
    const speed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullRole.length) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        if (currentText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      <RevealOnScroll>
        {/* Increased padding by 1.5x on left and right */}
        <div className="max-w-7xl mx-auto px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40 w-full z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Hero Copy & CTA (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[4px] codecraft-badge text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
                <span>Academic Gold Medalist • CodeChef 4★</span>
              </div>

              {/* Main Headline with Theme Gradient */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-5">
                Hi, I'm{" "}
                <span className="text-gradient-theme">
                  Jahnavi
                </span>
                <br />
                I build things for{" "}
                <span className="text-gradient-theme">
                  software & AI.
                </span>
              </h1>

              {/* Dynamic Role Sub-heading */}
              <div className="flex items-center text-base sm:text-xl font-mono text-[#94A3B8] font-medium mb-6">
                <span className="text-[#6366F1] mr-2">&gt;</span>
                <span className="text-white border-b border-[#6366F1] pb-0.5">
                  {currentText}
                </span>
                <span className="animate-blink text-[#818CF8] ml-1">_</span>
              </div>

              {/* Paragraph */}
              <p className="text-[#94A3B8] text-sm sm:text-base max-w-xl leading-relaxed mb-8">
                Computer Science student at <strong className="text-white font-semibold">VNR VJIET</strong> specializing in 
                high-performance algorithms, production full-stack systems, and intelligent machine learning. 
                Currently contributing across security engineering and MERN platforms at 
                <strong className="text-white font-semibold"> Deutsche Börse</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#projects"
                  className="inline-flex items-center space-x-2 px-6 py-3 codecraft-btn-primary text-sm font-semibold shadow-sm"
                >
                  <span>View My Work</span>
                  <FiArrowUpRight className="text-base" />
                </a>

                <a
                  href="#experience"
                  className="inline-flex items-center space-x-2 px-6 py-3 codecraft-btn-secondary text-sm font-semibold"
                >
                  <span>Experience</span>
                  <FiArrowUpRight className="text-base" />
                </a>
              </div>

              {/* Technologies I Work With */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-3">
                  Technologies I Work With
                </div>
                <div className="flex items-center flex-wrap gap-3">
                  <div className="p-2.5 rounded-[4px] bg-[#0D1322] border border-[#1E293D] text-[#61DAFB] hover:border-[#61DAFB]/50 transition" title="React">
                    <FaReact size={20} />
                  </div>
                  <div className="p-2.5 rounded-[4px] bg-[#0D1322] border border-[#1E293D] text-[#68A063] hover:border-[#68A063]/50 transition" title="Node.js">
                    <FaNodeJs size={20} />
                  </div>
                  <div className="p-2.5 rounded-[4px] bg-[#0D1322] border border-[#1E293D] text-[#3776AB] hover:border-[#3776AB]/50 transition" title="Python">
                    <FaPython size={20} />
                  </div>
                  <div className="p-2.5 rounded-[4px] bg-[#0D1322] border border-[#1E293D] text-[#00599C] hover:border-[#00599C]/50 transition" title="C++">
                    <SiCplusplus size={20} />
                  </div>
                  <div className="p-2.5 rounded-[4px] bg-[#0D1322] border border-[#1E293D] text-[#3178C6] hover:border-[#3178C6]/50 transition" title="TypeScript">
                    <SiTypescript size={20} />
                  </div>
                  <div className="p-2.5 rounded-[4px] bg-[#0D1322] border border-[#1E293D] text-[#47A248] hover:border-[#47A248]/50 transition" title="MongoDB">
                    <SiMongodb size={20} />
                  </div>
                  <div className="p-2.5 rounded-[4px] bg-[#0D1322] border border-[#1E293D] text-[#38B2AC] hover:border-[#38B2AC]/50 transition" title="Tailwind CSS">
                    <SiTailwindcss size={20} />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Code Window (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              
              {/* Dot Grid background decoration */}
              <div className="absolute -top-6 -right-6 w-28 h-28 dot-grid opacity-40 pointer-events-none hidden sm:block" />

              {/* CodeCraft-style Code Editor Card */}
              <div className="w-full max-w-md bg-[#0D1322] border border-[#1E293D] rounded-[6px] shadow-2xl overflow-hidden relative z-10">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#090D18] border-b border-[#1E293D]">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-[#94A3B8]">
                    <FiCode className="text-[#818CF8]" />
                    <span>profile.js</span>
                  </div>
                  <div className="w-8" />
                </div>

                <div className="p-5 font-mono text-xs leading-relaxed text-[#CBD5E1] overflow-x-auto">
                  <div>
                    <span className="text-[#818CF8]">const</span>{" "}
                    <span className="text-[#38BDF8]">engineer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">name:</span>{" "}
                    <span className="text-[#34D399]">"Naga Jahnavi Dannayak"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">role:</span>{" "}
                    <span className="text-[#FBBF24]">"Technical Intern"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">company:</span>{" "}
                    <span className="text-[#34D399]">"Deutsche Börse"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">distinction:</span>{" "}
                    <span className="text-[#F472B6]">"Gold Medalist (9.6 CGPA)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">codechef:</span>{" "}
                    <span className="text-[#FBBF24]">"4★ Specialist"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">leetcode:</span>{" "}
                    <span className="text-[#34D399]">"450+ Solved"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">skills:</span> [
                    <span className="text-[#34D399]">"C++"</span>,{" "}
                    <span className="text-[#34D399]">"Python"</span>,{" "}
                    <span className="text-[#34D399]">"MERN"</span>,{" "}
                    <span className="text-[#34D399]">"NLP"</span>,{" "}
                    <span className="text-[#34D399]">"Vision"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">passions:</span>{" "}
                    <span className="text-[#818CF8]">"Building scalable systems & algorithms"</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                <div className="px-4 py-2 bg-[#0A0F1D] border-t border-[#1E293D] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                  <span>UTF-8</span>
                  <span className="text-[#10B981] flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
                    <span>VNR VJIET • 2027</span>
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
