import {RevealOnScroll} from '../RevealOnScroll'
export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex justify-center items-center relative">
            <RevealOnScroll> 
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                    Hello, I'm <br/>Dannayak Naga Jahnavi
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Welcome! I’m a passionate and driven Computer Science sophomore eager to explore the ever-evolving world of technology. I thrive on challenges, continuously seek innovation, and enjoy experimenting with new ideas. Whether it’s coding, problem-solving, or diving into emerging tech, I’m always looking for opportunities to learn, collaborate, and grow. Excited to connect and contribute! 
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        View Projects
                    </a>


                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                     hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                        Contact Me
                    </a>


                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
