import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa";


export const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent");
        setFormData({ from_name: "", email: "", message: "" });
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 w-full bg-black"
    >
      <RevealOnScroll>
        
        <div className="w-full max-w-[90%] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left: Contact Form */}
          <div className="lg:w-[65%] w-full">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center lg:text-left">
              Send me an Email
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                value={formData.from_name}
                onChange={(e) =>
                  setFormData({ ...formData, from_name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name.."
              />
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
              />
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message.."
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>


{/* Right: Contact Info Card */}
<div className="lg:w-[35%] w-full bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col justify-start text-gray-100 shadow-lg backdrop-blur-md space-y-6">
  <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
  {/* Email */}
  <div>
    <p className="font-bold text-lg">Email:</p>
    <p className="text-white text-xl font-semibold mt-1">nagajahnavidannayak@gmail.com</p>
  </div>

  {/* Location */}
  <div>
    <p className="font-bold text-lg">Location:</p>
    <p className="text-white text-xl font-semibold mt-1">Hyderabad, Telangana, India</p>
  </div>

  {/* Connect */}
  <div>
    <p className="font-bold text-lg">Connect:</p>
    <div className="flex items-center space-x-6 mt-2 text-4xl">
      <a
        href="https://www.linkedin.com/in/naga-jahnavi-dannayak-892b16286/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500 transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/NagaJahnaviD"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-100 hover:text-white transition"
      >
        <FaGithub />
      </a>
    </div>
  </div>


            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-fit transition"
            >
              Back to Top
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
