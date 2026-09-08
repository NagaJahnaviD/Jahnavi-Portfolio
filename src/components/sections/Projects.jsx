import { useState } from "react";
import { FaGithub, FaMicrochip } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai-ml", label: "AI & Machine Learning" },
    { id: "fullstack", label: "Full-Stack & Systems" },
    { id: "vision", label: "Computer Vision" }
  ];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-28 relative">
      <RevealOnScroll>
        {/* Increased padding by 1.5x on left and right */}
        <div className="max-w-7xl mx-auto px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[4px] codecraft-badge text-xs font-semibold uppercase tracking-wider mb-3">
              <span>FEATURED PROJECTS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Some of My{" "}
              <span className="text-gradient-theme">Recent Work</span>
            </h2>
            <p className="mt-3 text-sm text-[#94A3B8]">
              Flagship engineering across custom NLP architectures, real-time computer vision, and secure full-stack platforms.
            </p>

            {/* Filter Pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setFilter(cat.id);
                    setShowAll(false);
                  }}
                  className={`px-4 py-2 rounded-[4px] text-xs font-medium transition-all ${
                    filter === cat.id
                      ? "bg-[#4F46E5] text-white shadow-sm"
                      : "bg-[#0D1322] border border-[#1E293D] text-[#94A3B8] hover:text-white hover:border-[#384666]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayProjects.map((project, idx) => {
              const formattedNumber = String(idx + 1).padStart(2, "0");
              return (
                <div
                  key={project.id}
                  className="codecraft-card p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200"
                >
                  <div>
                    {/* Top Row: Number 01, 02... and Category Badge */}
                    <div className="flex items-center justify-between border-b border-[#1E293D] pb-3 mb-4">
                      <span className="font-mono text-xs font-bold text-[#818CF8]">
                        {formattedNumber}
                      </span>
                      <span className="px-2 py-0.5 rounded-[4px] text-[10px] font-mono bg-[#1E1B4B] text-[#A5B4FC] border border-[#3730A3]/40">
                        {project.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#818CF8] transition-colors mb-2">
                      {project.title}
                    </h3>

                    {/* Metrics Banner */}
                    {project.metrics && (
                      <div className="mb-3.5 inline-flex items-center text-[11px] font-mono text-[#34D399] bg-[#09151F] px-2.5 py-1 rounded-[4px] border border-[#065F46]/40">
                        <FaMicrochip className="mr-1.5 text-[9px] text-[#818CF8]" />
                        <span>{project.metrics}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 5).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-[3px] text-[10px] font-mono bg-[#111728] border border-[#1E293D] text-[#CBD5E1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Source link */}
                    <div className="pt-3 border-t border-[#1E293D] flex items-center justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-medium text-[#818CF8] hover:text-white transition-colors"
                      >
                        <FaGithub className="mr-1.5" />
                        <span>Source Code</span>
                        <FiArrowUpRight className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Toggle View More Button */}
          {filteredProjects.length > 6 && (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 rounded-[4px] codecraft-btn-secondary text-xs font-semibold"
              >
                {showAll ? "Show Less ↑" : `View All ${filteredProjects.length} Projects ↓`}
              </button>
            </div>
          )}

        </div>
      </RevealOnScroll>
    </section>
  );
};
