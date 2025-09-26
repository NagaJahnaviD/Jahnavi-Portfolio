import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    const allProjects = [
  {
    title: "PeaceOfPaper",
    description:
      "A secure digital journaling platform built with the MERN stack and Tailwind CSS. Implements encryption and sentiment analysis (Vader NLP) to protect user privacy while offering mood insights. Features Clerk-based authentication and a sleek, responsive interface.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Clerk", "CryptoJS", "Vader NLP"],
    link: "https://github.com/NagaJahnaviD/PeaceOfPaper"
  },
  {
  title: "NaatyaVerse",
  description:
    "AI-powered prototype that brings computer vision to Indian classical dance training. Uses OpenCV and MediaPipe for real-time pose estimation to compare a dancer’s movements with reference poses and give instant feedback on posture and alignment. Designed to help Bharatanatyam learners refine technique and preserve cultural heritage through technology.",
  tech: ["Python", "OpenCV", "MediaPipe", "Streamlit (prototype UI)"],
  link: "https://github.com/NagaJahnaviD/NaatyaVerse"
}
,
  {
    title: "Chat Hive",
    description:
      "A full-stack real-time messaging platform supporting one-to-one conversations and friend management. Built with React, Node.js, and MongoDB, and powered by Socket.IO for low-latency communication. Includes Clerk authentication and a responsive UI for seamless use across devices.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Socket.IO", "Clerk"],
    link: "https://github.com/NagaJahnaviD/ChatHive"
  },
  {
    title: "WildSightAI",
    description:
      "Computer-vision–driven wildlife detection and monitoring system. Utilizes deep learning models to identify animal species in camera-trap images and provide real-time alerts. Designed for conservation projects and scalable cloud deployment.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask", "MongoDB"],
    link: "https://github.com/NagaJahnaviD/WildSightAI"
  },

{
    title: "Personal Portfolio",
    description: "Crafted a fully responsive and aesthetically pleasing portfolio website to showcase projects, technical skills, and professional experience. Integrated EmailJS for contact functionality and used TailwindCSS for streamlined styling. Designed to offer a smooth navigation experience and modern visual appeal.",
    tech: ["TailwindCSS", "React", "EmailJS", "HTML"],
    link: "https://github.com/NagaJahnaviD/Jahnavi-Portfolio.git"
},
{
    title: "Faculty Timetable Manager",
    description: "Built a real-time timetable management system tailored for college faculty at VNRVJIET. Facilitates dynamic scheduling, prevents conflicts, and improves timetable visibility. Leveraged MongoDB for database operations, React for responsive UI, and Bootstrap for polished components.",
    tech: ["JavaScript", "CSS", "Bootstrap", "MongoDB", "ReactJS", "HTML"],
    link: "https://github.com/NagaJahnaviD/FieldProject"
},
{
    title: "Blog Application",
    description: "Developed a full-stack blog platform where authors can write and manage articles, while users can read, comment, and engage with content. Implemented secure REST APIs with Node.js and Express, used MongoDB for data persistence, and built an intuitive frontend with React.",
    tech: ["ExpressJS", "MongoDB", "ReactJS", "NodeJS"],
    link: "https://github.com/NagaJahnaviD/Blog-App"
},
{
    title: "Cab Booking Simulator",
    description: "Engineered a multithreaded cab booking system in Java to simulate concurrent ride requests. Applied thread synchronization to prevent booking conflicts and integrated MySQL via JDBC for database-driven reservation management. Highlights understanding of concurrency and real-world system simulation.",
    tech: ["Java", "MySQL", "JDBC"],
    link: "https://github.com/NagaJahnaviD/MultiThreaded-Cab-Booking-System.git"
},
{
    title: "Udemy Home Page Clone - UI",
    description: "Reimagined the homepage of Udemy with a pixel-perfect front-end clone using only HTML and CSS. This project focuses on mastering layout design, responsive elements, and visual consistency across devices.",
    tech: ["HTML", "CSS"],
    link: "https://github.com/NagaJahnaviD/Udemy-home-page-clone"
},
{
    title: "OmniGuard AI",
    description: "Created an AI-powered cyberbullying detection system that leverages NLP models and Automatic Speech Recognition (ASR) to analyze both text and voice inputs. Developed with Streamlit for a quick interface and Gemini API for enhanced AI capabilities. This project tackles online abuse with a tech-forward, socially impactful solution.",
    tech: ["Streamlit", "Transformers", "Gemini API", "NLP, ML models"],
    link: "https://github.com/NagaJahnaviD/OmniGuard-AI"
},
{
    title: "The Legendary Snake",
    description: "Revived the classic Snake game with modern JavaScript practices. Focused on smooth, responsive controls and real-time gameplay rendering. Employed clean code architecture and event-driven programming to enhance performance and user experience.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/NagaJahnaviD/Snake-Game.git"
}

    ];

    const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 ">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 ">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        {visibleProjects.map((project, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-white/5"
                            >
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                        rel="noreferrer"
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Toggle Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
                        >
                            {showAll ? "Show Less" : "View More Projects"}
                        </button>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
