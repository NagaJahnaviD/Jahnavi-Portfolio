import { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaCopy, FaCheck } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_SERVICE_ID || "service_y5cfr38";
    const templateId = import.meta.env.VITE_TEMPLATE_ID || "template_304ng4b";
    const publicKey = import.meta.env.VITE_PUBLIC_KEY || "hI2SGKRs6p_8L2VrR";

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        setLoading(false);
        setStatus("success");
        alert("Message sent");
        setFormData({ from_name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setLoading(false);
        setStatus("error");
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-28 relative">
      <RevealOnScroll>
        {/* Increased padding by 1.5x on left and right */}
        <div className="max-w-7xl mx-auto px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[4px] codecraft-badge text-xs font-semibold uppercase tracking-wider mb-3">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Let's Build Something{" "}
              <span className="text-gradient-theme">Great</span>
            </h2>
            <p className="mt-3 text-sm text-[#94A3B8]">
              Looking for software engineering opportunities, algorithmic collaboration, or technical discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7 codecraft-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-bold text-white mb-5">
                Send an Email
              </h3>

              {status === "success" && (
                <div className="p-3 mb-5 rounded-[4px] bg-[#064E3B] border border-[#059669]/40 text-[#34D399] text-xs flex items-center space-x-2">
                  <FaCheck />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3 mb-5 rounded-[4px] bg-[#450A0A] border border-[#DC2626]/40 text-[#FCA5A5] text-xs flex items-center space-x-2">
                  <span>Failed to send. Please try again or email directly.</span>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#94A3B8] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    value={formData.from_name}
                    onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                    placeholder="Name.."
                    className="w-full bg-[#111728] border border-[#1E293D] rounded-[4px] px-3.5 py-2.5 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#6366F1] transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#94A3B8] mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@gmail.com"
                    className="w-full bg-[#111728] border border-[#1E293D] rounded-[4px] px-3.5 py-2.5 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#6366F1] transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#94A3B8] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message.."
                    className="w-full bg-[#111728] border border-[#1E293D] rounded-[4px] px-3.5 py-2.5 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#6366F1] transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 codecraft-btn-primary text-xs font-semibold disabled:opacity-50"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  <FiSend className="text-xs" />
                </button>
              </form>
            </div>

            {/* Right: Contact Information (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="codecraft-card p-6 space-y-5">
                <h3 className="font-heading text-lg font-bold text-white">
                  Contact Details
                </h3>

                {/* Email box */}
                <div className="p-3.5 rounded-[4px] bg-[#111728] border border-[#1E293D]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#64748B] mb-1">
                    <span>EMAIL</span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-[#818CF8] hover:text-white flex items-center space-x-1"
                    >
                      {copied ? (
                        <>
                          <FaCheck className="text-[#34D399]" />
                          <span className="text-[#34D399]">Copied</span>
                        </>
                      ) : (
                        <>
                          <FaCopy />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-xs sm:text-sm font-medium text-white hover:text-[#818CF8] transition-colors break-all"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-[4px] bg-[#111728] border border-[#1E293D] flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-[#818CF8]" />
                  <div>
                    <div className="text-[10px] font-mono text-[#64748B]">LOCATION</div>
                    <div className="text-xs font-medium text-white">
                      {portfolioData.personal.location}
                    </div>
                  </div>
                </div>

                {/* Profiles */}
                <div>
                  <div className="text-[10px] font-mono text-[#64748B] uppercase mb-2">
                    Profiles
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a
                      href={portfolioData.personal.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 p-2.5 rounded-[4px] bg-[#111728] border border-[#1E293D] text-[#CBD5E1] hover:text-white hover:border-[#384666]"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={portfolioData.personal.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 p-2.5 rounded-[4px] bg-[#111728] border border-[#1E293D] text-[#CBD5E1] hover:text-[#818CF8] hover:border-[#384666]"
                    >
                      <FaLinkedin className="text-[#0A66C2]" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={portfolioData.personal.socials.leetcode}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 p-2.5 rounded-[4px] bg-[#111728] border border-[#1E293D] text-[#CBD5E1] hover:text-[#FBBF24] hover:border-[#384666]"
                    >
                      <SiLeetcode className="text-[#FFA116]" />
                      <span>LeetCode</span>
                    </a>
                    <a
                      href={portfolioData.personal.socials.codechef}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 p-2.5 rounded-[4px] bg-[#111728] border border-[#1E293D] text-[#CBD5E1] hover:text-[#FB923C] hover:border-[#384666]"
                    >
                      <SiCodechef className="text-[#5B4638]" />
                      <span>CodeChef</span>
                    </a>
                  </div>
                </div>

                {/* Scroll to Top */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="w-full py-2.5 rounded-[4px] codecraft-btn-secondary text-xs font-mono"
                >
                  ↑ Return to Top
                </button>
              </div>
            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
