export const portfolioData = {
  personal: {
    name: "Naga Jahnavi Dannayak",
    preferredName: "Jahnavi",
    roleTitles: [
      "Technical Intern @ Deutsche Börse",
      "Academic Gold Medalist (9.6 CGPA)",
      "CodeChef 4★ Competitive Programmer",
      "Full-Stack & AI Systems Builder",
      "ICPC / IICPC Regionalist"
    ],
    tagline:
      "Crafting high-performance algorithms, production full-stack platforms, and intelligent AI systems with precision.",
    bio:
      "I am a Computer Science undergraduate at VNR VJIET, combining deep algorithmic problem-solving with hands-on production engineering. From optimizing security pipelines and MERN platforms at Deutsche Börse to engineering custom NLP models and real-time computer vision systems, I thrive at the intersection of complex problems, high-impact architecture, and elegant user experiences.",
    location: "Hyderabad, Telangana, India",
    email: "nagajahnavidannayak@gmail.com",
    degree: "B.Tech in Computer Science & Engineering",
    college: "VNR Vignana Jyothi Institute of Engineering & Technology",
    graduationYear: "2027",
    cgpa: "9.6 / 10",
    statusBadge: "Open to High-Impact Opportunities",
    socials: {
      github: "https://github.com/NagaJahnaviD",
      linkedin: "https://www.linkedin.com/in/naga-jahnavi-dannayak-892b16286/",
      leetcode: "https://leetcode.com/u/nagajahnavidannayak/",
      codechef: "https://www.codechef.com",
      medium: "https://medium.com/@nagajahnavidannayak"
    }
  },

  stats: [
    {
      label: "CodeChef Rating",
      value: "4★",
      subtitle: "Specialist-level competitive coder",
      color: "from-amber-400 to-orange-500"
    },
    {
      label: "LeetCode Solved",
      value: "450+",
      subtitle: "Data structures & algorithms",
      color: "from-blue-400 to-cyan-400"
    },
    {
      label: "Academic CGPA",
      value: "9.6 / 10",
      subtitle: "Gold Medalist (Branch Topper)",
      color: "from-emerald-400 to-teal-500"
    },
    {
      label: "CP Community Reach",
      value: "2,500+",
      subtitle: "Teams across 400+ colleges",
      color: "from-purple-400 to-indigo-500"
    }
  ],

  experiences: [
    {
      company: "Deutsche Börse",
      role: "Technical Intern",
      type: "Internship",
      period: "June 2026 – Present",
      location: "Hyderabad, India",
      summary:
        "Contributing across security engineering, incident response monitoring, and modern MERN-stack application development.",
      highlights: [
        "Architected security monitoring workflows and SIEM-oriented pipelines within the Security/SOC/ADE ecosystem, optimizing ingestion and log aggregation.",
        "Engineered scalable backend data models, authentication schemas, and admin services for the entrepreneur registration platform using the MERN stack.",
        "Spearheaded database schema normalization and seamless migration from legacy SQL structures to MongoDB with zero operational downtime.",
        "Applied rigorous automated testing, agile sprints, and cross-functional code reviews in a mission-critical financial exchange tech environment."
      ],
      skills: ["Security Engineering", "SIEM / SOC", "Log Pipelines", "Node.js", "MongoDB", "SQL Migration", "MERN Stack", "REST APIs"]
    },
    {
      company: "OpenPixel",
      role: "Web Developer Intern",
      type: "Internship",
      period: "Aug 2025 – Oct 2025",
      location: "Hyderabad, India",
      summary:
        "Led the migration of an active production platform from legacy PHP to a performant MERN stack application.",
      highlights: [
        "Successfully migrated a legacy PHP production web application serving 100+ daily active users to a full-stack React & Node.js architecture.",
        "Designed and normalized relational-to-document MongoDB schemas, improving query latency and system maintainability.",
        "Built secure, modular REST APIs with Express.js and implemented state-managed responsive UI workflows in React.",
        "Configured production builds, server environments, and deployments on cPanel with SSL and automated backups."
      ],
      skills: ["PHP to MERN", "React", "Node.js", "Express.js", "MongoDB", "REST APIs", "cPanel Deployment"]
    }
  ],

  leadership: [
    {
      organization: "Turing Hut (Premier Competitive Programming Club)",
      role: "Lead & Head of Competitive Programming",
      period: "2024 – Present",
      institution: "VNR VJIET",
      summary:
        "Guiding competitive programming strategy, contest operations, and community mentorship at scale.",
      highlights: [
        "Lead VNR VJIET’s premier CP club with a reach of 2,500+ teams from 400+ engineering colleges across the nation.",
        "Act as Lead Problem Setter, curating original problems spanning Dynamic Programming, Graph Theory, Number Theory, and greedy heuristics.",
        "Personally mentor 80+ junior student developers through weekly workshops, contest debriefs, and mock ICPC rounds."
      ],
      tags: ["Leadership", "Problem Setting", "Mentorship", "Graph Theory", "Dynamic Programming"]
    },
    {
      organization: "Microsoft + Azure Developer Community + Reskill",
      role: "Mentee & Technical Writer",
      period: "3-Month Intensive",
      institution: "Industry Mentorship",
      summary:
        "Selected for competitive cloud engineering and software craftsmanship mentorship.",
      highlights: [
        "Selected for an intensive 3-month mentorship guided by Microsoft and Azure Developer Community experts.",
        "Published a recognized 5-part technical blog series on Medium translating cloud concepts, modern architecture patterns, and developer workflows into accessible deep dives.",
        "Collaborated with peers across India on real-world cloud deployment patterns and CI/CD pipelines."
      ],
      tags: ["Microsoft Azure", "Cloud Architecture", "Technical Writing", "Medium Series"]
    }
  ],

  projects: [
    {
      id: "sarcasm-detection",
      title: "Sarcasm Detection Engine",
      category: "ai-ml",
      featured: true,
      badge: "Flagship NLP & ML",
      description:
        "High-accuracy natural language processing system engineered to detect nuanced sarcasm in text. Features 55+ bespoke linguistic features, TF-IDF representations, and rigorous ablation testing delivering an outstanding ~10% F1-score boost over standard baselines using Logistic Regression and XGBoost.",
      metrics: "55+ Linguistic Features • +10% F1-Score Improvement",
      technologies: ["Python", "NLP", "TF-IDF", "Feature Engineering", "Logistic Regression", "XGBoost", "Scikit-Learn"],
      github: "https://github.com/NagaJahnaviD",
      demo: null
    },
    {
      id: "naatyaverse",
      title: "NaatyaVerse — AI Dance Analysis",
      category: "vision",
      featured: true,
      badge: "AI + Classical Dance",
      description:
        "Real-time computer vision prototype that brings AI pose estimation to Indian classical dance (Kuchipudi). Leverages MediaPipe and OpenCV to track 33+ skeletal body coordinates, compare student geometry against benchmark reference poses, and provide instant visual feedback on mudras and posture.",
      metrics: "Real-time 30+ FPS Pose Estimation • 33 Skeletal Coordinates",
      technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Pose Estimation", "Streamlit"],
      github: "https://github.com/NagaJahnaviD/NaatyaVerse",
      demo: null
    },
    {
      id: "peaceofpaper",
      title: "PeaceOfPaper — Encrypted Journaling",
      category: "fullstack",
      featured: true,
      badge: "Full-Stack & Cryptography",
      description:
        "Private mental-wellness journaling platform with client-side zero-knowledge encryption using CryptoJS to safeguard sensitive reflections. Integrates VADER NLP sentiment tracking for mood trajectory analysis and Clerk-secured multi-device authentication.",
      metrics: "Client-Side Zero-Knowledge Encryption • VADER NLP Analysis",
      technologies: ["React", "Node.js", "Express", "MongoDB", "CryptoJS", "VADER NLP", "Clerk", "Tailwind CSS"],
      github: "https://github.com/NagaJahnaviD/PeaceOfPaper",
      demo: null
    },
    {
      id: "contractguard",
      title: "ContractGuard — Legal Risk Intelligence",
      category: "ai-ml",
      featured: true,
      badge: "Major 8-Month Capstone",
      description:
        "Comprehensive NLP and LLM-driven contract analysis platform built with a 4-member research team. Employs fine-tuned BERT models, Named Entity Recognition (NER), vector embeddings, and Retrieval-Augmented Generation (RAG) to inspect complex contracts and highlight critical liabilities.",
      metrics: "8-Month Research • BERT + NER + RAG Architecture",
      technologies: ["Python", "Transformers", "BERT", "Named Entity Recognition", "RAG", "Embeddings", "PyTorch"],
      github: "https://github.com/NagaJahnaviD",
      demo: null
    },
    {
      id: "chathive",
      title: "Chat Hive — Real-Time Messenger",
      category: "fullstack",
      featured: false,
      badge: "Real-Time WebSocket",
      description:
        "Low-latency real-time messaging ecosystem featuring direct 1-to-1 chats, friend request workflows, active presence indicators, and message read receipts built with Socket.IO and MERN stack.",
      metrics: "Sub-50ms Message Delivery • Socket.IO WebSockets",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Clerk Auth", "Tailwind CSS"],
      github: "https://github.com/NagaJahnaviD/ChatHive",
      demo: null
    },
    {
      id: "wildsight-ai",
      title: "WildSightAI — Conservation Vision",
      category: "vision",
      featured: false,
      badge: "Deep Learning & Vision",
      description:
        "Convolutional neural network pipeline for automated wildlife detection and species classification from remote camera traps, designed to assist wildlife researchers with automated anomaly alerts.",
      metrics: "Multi-Class CNN Classifier • Automated Alert Triggers",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit", "CNN"],
      github: "https://github.com/NagaJahnaviD/WildSightAI",
      demo: null
    },
    {
      id: "shieldsense",
      title: "ShieldSense — Threat Intelligence",
      category: "ai-ml",
      featured: false,
      badge: "Cybersecurity & Heuristics",
      description:
        "Security triage platform that scans suspicious URLs, attachments, and email payloads to detect malicious signatures and assign dynamic threat risk scores for rapid incident response.",
      metrics: "Multi-Vector Threat Scoring • Automated Payload Triage",
      technologies: ["Python", "FastAPI", "React", "Threat Intelligence", "Security Heuristics"],
      github: "https://github.com/NagaJahnaviD",
      demo: null
    },
    {
      id: "omniguard-ai",
      title: "OmniGuard AI — Bullying Detection",
      category: "ai-ml",
      featured: false,
      badge: "Multimodal AI Safety",
      description:
        "Multimodal cyberbullying prevention tool integrating NLP classification and Automatic Speech Recognition (ASR) via Gemini API to flag abusive speech across both text and voice channels.",
      metrics: "Audio + Text Multimodal Pipeline • Gemini API Integration",
      technologies: ["Python", "Streamlit", "Transformers", "Gemini API", "Whisper ASR"],
      github: "https://github.com/NagaJahnaviD/OmniGuard-AI",
      demo: null
    },
    {
      id: "cab-booking-sim",
      title: "Concurrent Cab Booking Engine",
      category: "fullstack",
      featured: false,
      badge: "Systems & Concurrency",
      description:
        "Multithreaded ride-allocation simulator engineered in Java to handle concurrent passenger bookings without race conditions using synchronized resource locks and MySQL JDBC persistence.",
      metrics: "Thread-Safe Synchronization • JDBC Transaction Pooling",
      technologies: ["Java", "Multithreading", "Synchronization", "MySQL", "JDBC"],
      github: "https://github.com/NagaJahnaviD/MultiThreaded-Cab-Booking-System.git",
      demo: null
    }
  ],

  competitiveProgramming: {
    platforms: [
      {
        name: "CodeChef",
        badge: "4★ Specialist",
        rating: "4★",
        highlight: "Specialist tier competitive programmer in contest divisions",
        icon: "SiCodechef"
      },
      {
        name: "LeetCode",
        badge: "450+ Solved",
        rating: "450+ DSA",
        highlight: "Extensive problem-solving across DP, Graphs, Trees, DSU & Math",
        icon: "SiLeetcode"
      },
      {
        name: "HackerRank",
        badge: "5★ Problem Solving",
        rating: "5★ / 4★ C",
        highlight: "Gold badges in Problem Solving and C language mastery",
        icon: "FaHackerrank"
      }
    ],
    algorithms: [
      "Dynamic Programming",
      "Graph Algorithms (BFS/DFS, Dijkstra, MST)",
      "Disjoint Set Union (DSU)",
      "Mo's Algorithm & Square Root Decomposition",
      "Greedy Heuristics",
      "Number Theory & Combinatorics",
      "Segment Trees & Fenwick Trees",
      "Bit Manipulation & Advanced Math"
    ],
    achievements: [
      {
        title: "Academic Gold Medalist",
        org: "VNR VJIET",
        desc: "Awarded the Gold Medal for securing the highest CGPA across all first-year engineering departments.",
        badge: "1st in College"
      },
      {
        title: "ICPC / IICPC Regionalist",
        org: "ICPC Ecosystem",
        desc: "Qualified and competed in prestigious collegiate competitive programming regionals.",
        badge: "Regionalist"
      },
      {
        title: "IIWCPC 2026 Participant",
        org: "India International Women's CP Championship",
        desc: "Advanced through qualification rounds on the track to the Grand Finale at IIT Kanpur.",
        badge: "Top Female Competitor"
      },
      {
        title: "Goldman Sachs Hackathon Finalist",
        org: "Goldman Sachs",
        desc: "Selected as a nationwide finalist for engineering innovative fintech solutions under strict time constraints.",
        badge: "Finalist"
      },
      {
        title: "National Semi-Finalist",
        org: "Flipkart Grid 2k25",
        desc: "Advanced to national semi-final rounds in engineering and algorithmic challenges.",
        badge: "National Semi-Finalist"
      },
      {
        title: "Winner — DQ Codefest",
        org: "DataQuesters, VNR VJIET",
        desc: "Secured 1st place in intensive competitive coding contest.",
        badge: "1st Place"
      },
      {
        title: "13th Rank Nationwide",
        org: "Top100Coders",
        desc: "Ranked 13th out of 1,500+ participants in all-India coding competition.",
        badge: "Top 1%"
      },
      {
        title: "2nd Place — Solution Sprint 2024",
        org: "ISTE Hackathon",
        desc: "Runner-up for developing full-stack innovation under 24-hour sprint.",
        badge: "2nd Place"
      },
      {
        title: "1st Place — Oratory Olympics 2024",
        org: "Toastmasters International",
        desc: "Champion speaker demonstrating exceptional communication, clarity, and tech articulation.",
        badge: "1st Place"
      }
    ]
  },

  skills: {
    languages: ["C++", "Python", "Java", "JavaScript", "TypeScript", "C", "SQL", "R"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3 / Sass", "Framer Motion"],
    backend: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "FastAPI", "Clerk Auth", "JWT"],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    ai_ml: [
      "OpenCV",
      "MediaPipe",
      "TensorFlow",
      "Scikit-Learn",
      "VADER NLP",
      "Transformers & BERT",
      "RAG & Embeddings",
      "Gemini API"
    ],
    systems_tools: [
      "Git & GitHub",
      "Docker",
      "Postman",
      "Linux / Bash",
      "SIEM & Log Monitoring",
      "Vercel / Netlify",
      "cPanel",
      "Tableau"
    ]
  },

  certifications: [
    { title: "Google AI Essentials", issuer: "Google / Coursera", year: "2024" },
    { title: "Postman API Fundamentals Student Expert", issuer: "Postman", year: "2024" },
    { title: "Artificial Intelligence & Machine Learning", issuer: "Infosys Springboard", year: "2024" },
    { title: "Programming Fundamentals using Python", issuer: "Infosys Springboard", year: "2024" },
    { title: "Full Stack Web Development", issuer: "MastersCoding", year: "2024" },
    { title: "Tableau for Data Science & Analytics", issuer: "Udemy", year: "2024" }
  ]
};
