import {RevealOnScroll} from '../RevealOnScroll'
export const About =()=>{

    const frontendSkills=["ReactJS","JavaScript","TailwindCSS","Bootstrap","HTML"];
    const backendSkills=["Node.Js","MongoDB","SQL","MySQL","Express.Js","REST API","Postman API","SocketIO"];
    const tool=["Git","Github","Tableau","VS code","Eclipse","R Studio","Docker","MS Office","Clerk"];
    const languages=["C","C++","JaxaScript","Python","Java","R "];
    const libraries=["OpenCV","Numpy","MediaPipe","Pandas","Scikit"];
    const softSkills=["Public Speaking","Leadership","Teamwork","Adaptability","Problem-Solving",];
    


    return <section id="about" 
    className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                I’m a third-year Computer Science student at VNR VJIET who loves all things AI, web development, and emerging tech. You’ll usually find me at a hackathon, building side projects, or diving into an internship challenge just to see what I can create next. I’m all about learning from smart people, experimenting with new ideas, and using technology to make a real impact. Always curious, always ready for the next big challenge!</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                frontendSkills.map((tech)=>(
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
                                ))
                            }
                        </div>

                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                backendSkills.map((tech)=>(
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
                                ))
                            }
                        </div>

                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold mb-4">Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                tool.map((tech)=>(
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
                                ))
                            }
                        </div>

                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold mb-4">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                languages.map((tech)=>(
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
                                ))
                            }
                        </div>

                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold mb-4">Libraries</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                libraries.map((tech)=>(
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
                                ))
                            }
                        </div>

                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                softSkills.map((tech)=>(
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
                                ))
                            }
                        </div>

                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                            <strong>B.Tech – Computer Science & Engineering</strong><br />
                            VNR Vignana Jyothi Institute of Engineering & Technology <span className="opacity-70">(2023 – 2027)</span>
                            </li>
                            <li>
                            <span className="font-medium">Key Coursework:</span> Data Structures, Web App Development, OOP with Java, 
                            Design & Analysis of Algorithms, Computer Networks, Operating Systems, DBMS, 
                            Software Engineering, Artificial Intelligence
                            </li>
                        </ul>
                        </div>

<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
<ul className="list-disc list-inside text-gray-300 space-y-2">
  <li>
    <strong>OpenPixel – Web Developer Intern (Aug 2025 – Present)</strong><br />
    
Refactored a large PHP codebase into a modern MERN stack application, improving maintainability and enabling faster feature development. Collaborated closely with cross-functional teams—design, QA, and backend—to plan migrations, review code, and ensure smooth deployment. Gained hands-on experience with full-stack JavaScript, agile workflows, and effective technical communication across departments.
  </li>
</ul>
    </div>
                                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Leadership Roles and Responsibilities</h3>
<ul className="list-disc list-inside text-gray-300 space-y-2">
  <li>
    <strong>Lead – Turing Hut</strong><br />
    Head of VNR VJIET’s competitive-programming club, responsible for strategy,
    event planning, and mentorship. I design and run coding workshops and
    campus-wide hackathons, guide the core team, and personally teach CP and
    data-structures/algorithms to 80+ junior members. 
  </li>
</ul>
    </div>



                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Achievements and Awards</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Gold Medalist</strong> (VNR VJIET) – Highest CGPA among all first-year students across branches</li>
            <li><strong>Winner</strong> (Coding Contest) – DQ Codefest by DataQuesters, VNRVJIET</li>
            <li><strong>National Semi-Finalist</strong> – Flipkart Grid 2k25</li>
            <li><strong>Finalist</strong> (Top 10%) – CodeNox 2k24 by Turing Hut</li>
            <li><strong>2nd Place</strong> – Solution Sprint-2024 Hackathon by ISTE, VNR VJIET</li>
            <li><strong>1st Place</strong> – Oratory Olympics 2024 by Toastmasters, VNR VJIET</li>
            <li>Solved <strong>300+ DSA problems</strong> on LeetCode</li>
            <li><strong>13th Rank</strong> – Top100Coders (1500+ participants)</li>
            <li><strong>HackerRank:</strong> 5⭐ in Problem Solving, 4⭐ in C</li>
            <li><strong>3rd Rank</strong> – Internal coding assessment by Smart Interviews (600+ students)</li>
        </ul>
    </div>

    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Online Certifications</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Google AI Essentials – Coursera</li>
            <li>Postman API Fundamentals Student Expert</li>
            <li>Programming Fundamentals using Python – Infosys Springboard</li>
            <li>Microsoft Cyber Suraksha Course</li>
            <li>Tableau for Data Analysis and Data Science – Udemy</li>
        </ul>
    </div>

    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Extracurricular Activities</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Contributed to <strong>HacktoberFest 2024</strong>, <strong>IEEESoC 2025</strong>– Gained open-source experience</li>
            <li><strong>Volunteer</strong> – ISTE, VNR VJIET (selected from 100+ candidates)</li>
            <li><strong>Volunteer</strong> – CSI, VNR VJIET (selected from 250+ candidates)</li>
            <li><strong>Member</strong> – Stentorian (literary club) selected from 300+ applicants</li>
        </ul>
    </div>
</div>

            </div>
        </div>
        </RevealOnScroll>
    </section>

}