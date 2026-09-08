import { FaTrophy, FaCode, FaAward, FaUsers, FaReact, FaNodeJs, FaPython, FaGitAlt, FaBookOpen } from "react-icons/fa";
import { SiCplusplus, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const { personal } = portfolioData;

  const masterySkills = [
    { name: "C++ & Data Structures", level: "95%", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "React.js & Frontend", level: "92%", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Node.js & Express", level: "88%", icon: <FaNodeJs className="text-[#68A063]" /> },
    { name: "Python & Machine Learning", level: "90%", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "MongoDB & SQL", level: "85%", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Tailwind CSS & UI", level: "94%", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
    { name: "Competitive Algorithms", level: "92%", icon: <FaCode className="text-[#818CF8]" /> },
    { name: "Git & Production Workflows", level: "88%", icon: <FaGitAlt className="text-[#F05032]" /> },
  ];

  return (
    <section id="about" className="py-28 relative">
      <RevealOnScroll>
        {/* Increased padding by 1.5x on left and right */}
        <div className="max-w-7xl mx-auto px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40">
          
          {/* Top Half: About Me + 4 Stat Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            
            {/* Left: About Text */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[4px] codecraft-badge text-xs font-semibold uppercase tracking-wider mb-4">
                <span>ABOUT ME</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                I'm passionate about engineering{" "}
                <span className="text-gradient-theme">digital solutions</span> &{" "}
                <span className="text-gradient-theme">algorithms</span>
              </h2>

              <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6">
                Academic Gold Medalist (9.6 CGPA) at VNR VJIET. I bridge rigorous competitive problem-solving with hands-on enterprise engineering. From optimizing security pipelines and MERN platforms at Deutsche Börse to migrating active production systems at OpenPixel and leading Turing Hut's CP club across 400+ colleges, I focus on building software that is both technically sound and deeply impactful.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 codecraft-btn-secondary text-xs font-semibold"
                >
                  <span>Connect With Me</span>
                  <FiArrowUpRight />
                </a>
                <a
                  href={personal.socials.medium}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 text-xs text-[#818CF8] hover:text-white transition-colors"
                >
                  <FaBookOpen className="mr-1" />
                  <span>5-Part Medium Series ↗</span>
                </a>
              </div>
            </div>

            {/* Right: 4 Sleek Square Metric Cards (2x2) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="codecraft-card p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-[4px] bg-[#1E1B4B] border border-[#3730A3]/50 flex items-center justify-center text-[#818CF8] text-xl shrink-0">
                  <FaCode />
                </div>
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    4★
                  </div>
                  <div className="text-xs font-semibold text-[#CBD5E1] mt-0.5">
                    CodeChef Specialist
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">
                    Contest problem solver
                  </div>
                </div>
              </div>

              <div className="codecraft-card p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-[4px] bg-[#1E1B4B] border border-[#3730A3]/50 flex items-center justify-center text-[#818CF8] text-xl shrink-0">
                  <FaAward />
                </div>
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    450+
                  </div>
                  <div className="text-xs font-semibold text-[#CBD5E1] mt-0.5">
                    LeetCode Problems
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">
                    Advanced data structures
                  </div>
                </div>
              </div>

              <div className="codecraft-card p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-[4px] bg-[#1E1B4B] border border-[#3730A3]/50 flex items-center justify-center text-[#818CF8] text-xl shrink-0">
                  <FaTrophy />
                </div>
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    9.6 / 10
                  </div>
                  <div className="text-xs font-semibold text-[#CBD5E1] mt-0.5">
                    Gold Medalist
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">
                    Branch Topper @ VNR VJIET
                  </div>
                </div>
              </div>

              <div className="codecraft-card p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-[4px] bg-[#1E1B4B] border border-[#3730A3]/50 flex items-center justify-center text-[#818CF8] text-xl shrink-0">
                  <FaUsers />
                </div>
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    2,500+
                  </div>
                  <div className="text-xs font-semibold text-[#CBD5E1] mt-0.5">
                    CP Community Reach
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">
                    Turing Hut Lead (400+ colleges)
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Half: "MY SKILLS - Technologies I Master" */}
          <div id="skills" className="pt-16 border-t border-[#1E293D]">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[4px] codecraft-badge text-xs font-semibold uppercase tracking-wider mb-3">
                <span>MY SKILLS</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Technologies I{" "}
                <span className="text-gradient-theme">Master</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {masterySkills.map((skill, idx) => (
                <div key={idx} className="codecraft-card p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="text-xl">{skill.icon}</div>
                      <span className="text-sm font-semibold text-white">{skill.name}</span>
                    </div>
                    <span className="text-xs font-mono text-[#818CF8] font-bold">{skill.level}</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#172036] rounded-[2px] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-[2px] transition-all duration-500"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Categorized Skills List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="codecraft-card p-6">
                <h4 className="text-xs font-mono font-bold uppercase text-[#818CF8] tracking-wider mb-4">
                  // Core AI & Machine Learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["OpenCV", "MediaPipe", "TensorFlow", "Scikit-Learn", "VADER NLP", "Transformers / BERT", "RAG & Embeddings"].map((item, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-[4px] bg-[#131B2E] border border-[#1E293D] text-xs font-mono text-[#CBD5E1]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="codecraft-card p-6">
                <h4 className="text-xs font-mono font-bold uppercase text-[#818CF8] tracking-wider mb-4">
                  // Systems & Security
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["SIEM & Log Pipelines", "Docker", "Socket.IO", "Postman", "Linux / Bash", "cPanel Deployment", "Client Cryptography"].map((item, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-[4px] bg-[#131B2E] border border-[#1E293D] text-xs font-mono text-[#CBD5E1]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="codecraft-card p-6">
                <h4 className="text-xs font-mono font-bold uppercase text-[#818CF8] tracking-wider mb-4">
                  // Certifications & Highlights
                </h4>
                <div className="space-y-2.5 text-xs text-[#94A3B8]">
                  <div className="flex items-center space-x-2">
                    <FiCheck className="text-[#818CF8] shrink-0" />
                    <span>Google AI Essentials (Coursera)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiCheck className="text-[#818CF8] shrink-0" />
                    <span>Postman API Student Expert</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiCheck className="text-[#818CF8] shrink-0" />
                    <span>Infosys Springboard AI & ML</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiCheck className="text-[#818CF8] shrink-0" />
                    <span>Microsoft Mentorship (3 Months)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};