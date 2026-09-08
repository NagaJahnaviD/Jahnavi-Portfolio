import { FaTrophy, FaMedal, FaCode, FaAward } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiHackerrank } from "react-icons/si";
import { portfolioData } from "../../data/portfolioData";
import { RevealOnScroll } from "../RevealOnScroll";

export const CompetitiveProgramming = () => {
  const { platforms, algorithms, achievements } = portfolioData.competitiveProgramming;

  return (
    <section id="competitive" className="py-28 relative">
      <RevealOnScroll>
        {/* Increased padding by 1.5x on left and right */}
        <div className="max-w-7xl mx-auto px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[4px] codecraft-badge text-xs font-semibold uppercase tracking-wider mb-3">
              <span>ALGORITHMIC EXCELLENCE</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Contests, Ratings &{" "}
              <span className="text-gradient-theme">Honors</span>
            </h2>
            <p className="mt-3 text-sm text-[#94A3B8]">
              Demonstrated competitive programming distinction across global contest platforms, collegiate regionals, and national hackathons.
            </p>
          </div>

          {/* Platforms Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* CodeChef Card */}
            <div className="codecraft-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#1E1B4B] border border-[#3730A3]/50 flex items-center justify-center text-[#818CF8] text-xl">
                  <SiCodechef />
                </div>
                <span className="px-2.5 py-0.5 rounded-[3px] text-xs font-mono font-semibold bg-[#1E1B4B] text-[#A5B4FC] border border-[#3730A3]/40">
                  {platforms[0].badge}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-1">{platforms[0].name}</h3>
              <p className="text-xs text-[#94A3B8] mb-4">{platforms[0].highlight}</p>
              <div className="font-mono text-xl font-bold text-white">
                4★ Rated Specialist
              </div>
            </div>

            {/* LeetCode Card */}
            <div className="codecraft-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#1E1B4B] border border-[#3730A3]/50 flex items-center justify-center text-[#818CF8] text-xl">
                  <SiLeetcode />
                </div>
                <span className="px-2.5 py-0.5 rounded-[3px] text-xs font-mono font-semibold bg-[#1E1B4B] text-[#A5B4FC] border border-[#3730A3]/40">
                  {platforms[1].badge}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-1">{platforms[1].name}</h3>
              <p className="text-xs text-[#94A3B8] mb-4">{platforms[1].highlight}</p>
              <div className="font-mono text-xl font-bold text-white">
                450+ Solved
              </div>
            </div>

            {/* HackerRank Card */}
            <div className="codecraft-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#1E1B4B] border border-[#3730A3]/50 flex items-center justify-center text-[#818CF8] text-xl">
                  <SiHackerrank />
                </div>
                <span className="px-2.5 py-0.5 rounded-[3px] text-xs font-mono font-semibold bg-[#1E1B4B] text-[#A5B4FC] border border-[#3730A3]/40">
                  {platforms[2].badge}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-1">{platforms[2].name}</h3>
              <p className="text-xs text-[#94A3B8] mb-4">{platforms[2].highlight}</p>
              <div className="font-mono text-xl font-bold text-white">
                5★ Problem Solving
              </div>
            </div>
          </div>

          {/* Core Algorithmic Techniques */}
          <div className="codecraft-card p-6 mb-12">
            <div className="text-xs font-mono font-bold uppercase text-[#818CF8] tracking-wider mb-4 flex items-center">
              <FaCode className="mr-2" />
              <span>Core Contest Problem-Solving Repertoire</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {algorithms.map((algo, aIdx) => (
                <span
                  key={aIdx}
                  className="px-3 py-1 rounded-[3px] text-xs font-mono bg-[#111728] text-[#CBD5E1] border border-[#1E293D]"
                >
                  {algo}
                </span>
              ))}
            </div>
          </div>

          {/* Grid of Key Achievements & Awards */}
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
            <FaAward className="mr-2.5 text-[#818CF8]" />
            Prestigious Distinctions &{" "}
            <span className="text-gradient-theme ml-1.5">Awards</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="codecraft-card p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="px-2 py-0.5 rounded-[3px] text-[10px] font-mono font-semibold bg-[#1E1B4B] text-[#A5B4FC] border border-[#3730A3]/40">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">{item.org}</span>
                  </div>
                  <h4 className="font-heading text-sm font-bold text-white mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
