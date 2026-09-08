import { useState } from "react";
import { FaBriefcase, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaBuilding } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";
import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("industry");

  return (
    <section id="experience" className="py-28 relative">
      <RevealOnScroll>
        {/* Increased padding by 1.5x on left and right */}
        <div className="max-w-7xl mx-auto px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[4px] codecraft-badge text-xs font-semibold uppercase tracking-wider mb-3">
              <span>WORK & LEADERSHIP</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Experience &{" "}
              <span className="text-gradient-theme">Impact</span>
            </h2>
            <p className="mt-3 text-sm text-[#94A3B8]">
              Hands-on engineering across enterprise financial systems, production migrations, and nationwide developer communities.
            </p>

            {/* Tab Toggle */}
            <div className="mt-8 inline-flex p-1 rounded-[4px] bg-[#0D1322] border border-[#1E293D]">
              <button
                onClick={() => setActiveTab("industry")}
                className={`flex items-center space-x-2 px-5 py-2 rounded-[3px] text-xs font-semibold transition-all ${
                  activeTab === "industry"
                    ? "bg-[#4F46E5] text-white"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                <FaBuilding className="text-xs" />
                <span>Industry Internships ({portfolioData.experiences.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("leadership")}
                className={`flex items-center space-x-2 px-5 py-2 rounded-[3px] text-xs font-semibold transition-all ${
                  activeTab === "leadership"
                    ? "bg-[#4F46E5] text-white"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                <FaUsers className="text-xs" />
                <span>Leadership & Mentorship ({portfolioData.leadership.length})</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Industry Experience */}
          {activeTab === "industry" && (
            <div className="space-y-6">
              {portfolioData.experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="codecraft-card p-6 sm:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1E293D] pb-5 mb-5">
                    <div>
                      <div className="flex items-center space-x-3 flex-wrap gap-y-2 mb-1">
                        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <span className="text-[#818CF8] font-semibold text-lg">
                          @ {exp.company}
                        </span>
                        {idx === 0 && (
                          <span className="px-2 py-0.5 rounded-[3px] text-[10px] font-mono font-semibold bg-[#064E3B] text-[#34D399] border border-[#059669]/30">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#94A3B8]">{exp.summary}</p>
                    </div>

                    <div className="flex md:flex-col items-start md:items-end justify-between text-xs text-[#94A3B8] font-mono gap-1.5 shrink-0">
                      <div className="flex items-center space-x-1.5 bg-[#111728] px-2.5 py-1 rounded-[3px] border border-[#1E293D]">
                        <FaCalendarAlt className="text-[#818CF8] text-[10px]" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 bg-[#111728] px-2.5 py-1 rounded-[3px] border border-[#1E293D]">
                        <FaMapMarkerAlt className="text-[#818CF8] text-[10px]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {exp.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#CBD5E1]">
                        <FaCheckCircle className="text-[#818CF8] text-xs mt-1 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1E293D]">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-[3px] text-[11px] font-mono bg-[#111728] border border-[#1E293D] text-[#A5B4FC]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Leadership & Community */}
          {activeTab === "leadership" && (
            <div className="space-y-6">
              {portfolioData.leadership.map((item, idx) => (
                <div
                  key={idx}
                  className="codecraft-card p-6 sm:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1E293D] pb-5 mb-5">
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1">
                        {item.role}
                      </h3>
                      <div className="text-[#818CF8] font-semibold text-sm mb-1">
                        {item.organization}
                      </div>
                      <p className="text-xs sm:text-sm text-[#94A3B8]">{item.summary}</p>
                    </div>

                    <div className="flex md:flex-col items-start md:items-end justify-between text-xs text-[#94A3B8] font-mono gap-1.5 shrink-0">
                      <div className="flex items-center space-x-1.5 bg-[#111728] px-2.5 py-1 rounded-[3px] border border-[#1E293D]">
                        <FaCalendarAlt className="text-[#818CF8] text-[10px]" />
                        <span>{item.period}</span>
                      </div>
                      <div className="bg-[#111728] px-2.5 py-1 rounded-[3px] border border-[#1E293D] text-[#CBD5E1]">
                        {item.institution}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#CBD5E1]">
                        <FaCheckCircle className="text-[#818CF8] text-xs mt-1 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1E293D]">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-[3px] text-[11px] font-mono bg-[#111728] border border-[#1E293D] text-[#A5B4FC]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </RevealOnScroll>
    </section>
  );
};
