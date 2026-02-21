"use client";

import { TerminalFrame } from "@/components/TerminalFrame";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Cpu, ShieldAlert, FileText, FolderCode, Terminal, Database, Code2, Cloud, Palette, User, ExternalLink, ChevronRight } from "lucide-react";

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);
  const [bootLogs, setBootLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const logs = [
    "INITIALIZING_MAGI_PROTOCOL...",
    "LOAD_KERNEL_V2.0.26...",
    "SYNCING_EVA_UNIT_01...",
    "ACCESSING_CENTRAL_DOGMA...",
    "ESTABLISHING_NEURAL_LINK...",
    "CONNECTION_STABLE.",
  ];

  useEffect(() => {
    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < logs.length) {
        setBootLogs((prev) => [...prev, logs[currentLog]]);
        currentLog++;
      } else {
        setTimeout(() => setIsBooting(false), 800);
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Retro CLI Loading Logic - Smooth 0 to 100
  useEffect(() => {
    if (!isBooting) {
      const interval = setInterval(() => {
        setProgress((p) => (p >= 100 ? 0 : p + 1));
      }, 40); // 40ms * 100 = 4 seconds per cycle
      return () => clearInterval(interval);
    }
  }, [isBooting]);

  return (
    <div className="flex-1 flex flex-col">
      <AnimatePresence mode="wait">
        {isBooting ? (
          <motion.div
            key="boot"
            exit={{ opacity: 0, scale: 1.05 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6"
          >
            <div className="w-full max-w-md font-mono text-[10px] space-y-2 border border-cyber-purple/20 p-8 bg-black/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-purple/5 to-transparent h-10 w-full animate-scanline pointer-events-none" />
              <div className="flex items-center gap-2 text-cyber-purple mb-4">
                <ShieldAlert size={14} className="animate-pulse" />
                <span className="text-sm font-black tracking-[0.3em] uppercase">System_Boot_Sequence</span>
              </div>
              <div className="space-y-1">
                {bootLogs.map((log, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-cyber-purple/40">[{i.toString().padStart(2, '0')}]</span>
                    <span className={i === bootLogs.length - 1 ? "text-cyber-green" : "text-white/60"}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>
              <motion.div 
                className="h-1 bg-cyber-purple mt-6 shadow-[0_0_10px_#A855F7]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "linear" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col"
          >
            <TerminalFrame>
              <div className="min-h-full flex flex-col p-6 sm:p-10 md:p-24 space-y-24 md:space-y-40">
                {/* 1. HERO SECTION */}
                <section className="max-w-6xl">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-12 md:mb-20">
                      <div className="w-8 md:w-16 h-1 bg-cyber-purple shadow-[0_0_10px_#A855F7] shrink-0" />
                      <h2 className="font-mono text-white text-[8px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-black whitespace-normal md:whitespace-nowrap">
                        Software Engineer | System Design & Scalability | Cloud Architect | Data-Driven Solutions
                      </h2>
                    </div>
                    
                    <div className="relative group cursor-default inline-block mb-12 md:mb-16 max-w-full overflow-hidden">
                      <h1 className="text-4xl sm:text-5xl md:text-[6.5rem] font-black uppercase tracking-tighter leading-none text-white relative z-10 whitespace-normal md:whitespace-nowrap break-words">
                        SEBASTIAN IBAÑEZ
                      </h1>
                      
                      {/* Hero Glitch Layers - Hidden on mobile for performance and layout simplicity */}
                      <span className="hidden md:block absolute top-0 left-0 text-[#ff00ff] opacity-0 group-hover:opacity-40 group-hover:translate-x-[5px] group-hover:-translate-y-[2px] transition-all pointer-events-none uppercase font-black text-5xl md:text-[6.5rem] tracking-tighter leading-none whitespace-nowrap">
                        SEBASTIAN IBAÑEZ
                      </span>
                      <span className="hidden md:block absolute top-0 left-0 text-cyber-green opacity-0 group-hover:opacity-40 group-hover:-translate-x-[5px] group-hover:translate-y-[2px] transition-all pointer-events-none uppercase font-black text-5xl md:text-[6.5rem] tracking-tighter leading-none whitespace-nowrap">
                        SEBASTIAN IBAÑEZ
                      </span>
                    </div>

                    {/* NEW CLI-STYLE FULL WIDTH PROGRESS BAR */}
                    <div className="w-full mb-12 md:mb-20 font-mono space-y-2">
                      <div className="flex justify-between items-end text-[9px] md:text-[10px] tracking-widest uppercase font-black">
                        <span className="text-cyber-purple animate-pulse">Status: Syncing_System_Core...</span>
                        <span className="text-white">{progress}%</span>
                      </div>
                      <div className="w-full h-3 md:h-4 border border-cyber-purple/20 bg-black/10 flex items-center px-1 gap-0.5 md:gap-1">
                        {[...Array(window?.innerWidth < 640 ? 25 : 50)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-1 md:h-1.5 flex-1 transition-all duration-100 ${
                              i < (progress / (window?.innerWidth < 640 ? 4 : 2)) ? "bg-cyber-purple shadow-[0_0_8px_#A855F7]" : "bg-white/5"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-6 md:gap-10">
                    <motion.a
                      href="/cv_SebastianIbanez.pdf"
                      download
                      whileHover={{ scale: 1.05, backgroundColor: "#A855F7", boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 md:px-14 py-4 md:py-6 bg-cyber-purple text-white font-mono font-black text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase transition-all shadow-[0_0_15px_rgba(168, 85, 247, 0.2)] flex items-center justify-center gap-4"
                    >
                      DOWNLOAD_CV <FileText size={18} />
                    </motion.a>
                    
                    <motion.button
                      whileHover={{ borderColor: "white", color: "white" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-8 md:px-14 py-4 md:py-6 border-2 border-white/10 text-white/60 font-mono font-black text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase transition-all flex items-center justify-center gap-4"
                    >
                      VIEW_PROJECTS <FolderCode size={18} />
                    </motion.button>

                    <div className="flex items-center justify-center gap-6 sm:ml-4 mt-4 sm:mt-0">
                      <motion.a href="https://github.com/sebdavid3" target="_blank" whileHover={{ color: "#A855F7", scale: 1.2 }} className="text-white/40 transition-colors">
                        <Github size={24} />
                      </motion.a>
                      <motion.a href="https://www.linkedin.com/in/sdibanez/" target="_blank" whileHover={{ color: "#52d053", scale: 1.2 }} className="text-white/40 transition-colors">
                        <Linkedin size={24} />
                      </motion.a>
                      <motion.a href="mailto:sebdavidibanezrios@gmail.com" whileHover={{ color: "#ff00ff", scale: 1.2 }} className="text-white/40 transition-colors">
                        <Mail size={24} />
                      </motion.a>
                    </div>
                  </div>
                </section>

                {/* 2. ABOUT ME */}
                <section id="about" className="max-w-6xl">
                  <SectionHeader title="Subject_Background" subtitle="01_ABOUT_ME" />
                  <div className="space-y-8 font-sans">
                    <p className="text-lg md:text-2xl text-zinc-200 leading-snug tracking-tight font-normal text-justify">
                      Systems Engineering student with a passion for the &quot;why&quot; behind the development. 
                      I view software as a dynamic ecosystem rather than a static list of tasks. 
                      With a focus on Software Architecture, I prioritize context over trends, 
                      building reliable and maintainable systems that solve real-world challenges through thoughtful design.
                    </p>
                  </div>
                </section>

                {/* 3. SKILLS */}
                <section id="skills">
                  <SectionHeader title="Technical_Arsenal" subtitle="02_SKILLS" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 mt-12">
                    {/* Frontend */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-cyber-purple">
                        <Code2 size={20} />
                        <h3 className="font-mono font-black text-sm uppercase tracking-widest">Frontend</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Next.js", "TypeScript", "Tailwind CSS", "Astro"].map(s => (
                          <span key={s} className="px-3 py-1 border border-white/20 text-[11px] md:text-[13px] font-mono text-white/90 uppercase bg-white/5">{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* Backend */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-cyber-green">
                        <Terminal size={20} />
                        <h3 className="font-mono font-black text-sm uppercase tracking-widest">Backend</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Python (FastAPI, Django)", "Node.js (NestJS, Express)", "Java (Spring Boot)"].map(s => (
                          <span key={s} className="px-3 py-1 border border-white/20 text-[11px] md:text-[13px] font-mono text-white/90 uppercase bg-white/5">{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* Databases */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-white">
                        <Database size={20} />
                        <h3 className="font-mono font-black text-sm uppercase tracking-widest">Databases</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["PostgreSQL", "SQL", "MySQL", "SQL Server", "DynamoDB", "Oracle"].map(s => (
                          <span key={s} className="px-3 py-1 border border-white/20 text-[11px] md:text-[13px] font-mono text-white/90 uppercase bg-white/5">{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* Data & AI */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-cyber-purple">
                        <Cpu size={20} />
                        <h3 className="font-mono font-black text-sm uppercase tracking-widest">Data & AI</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Pandas", "NumPy", "Jupyter", "OpenAI API", "TensorFlow", "Agents", "Skills", "Ollama"].map(s => (
                          <span key={s} className="px-3 py-1 border border-white/20 text-[11px] md:text-[13px] font-mono text-white/90 uppercase bg-white/5">{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* Tools & DevOps */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-cyber-green">
                        <Cloud size={20} />
                        <h3 className="font-mono font-black text-sm uppercase tracking-widest">Tools & DevOps</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Git", "GitHub", "Docker", "AWS", "Vercel", "Postman"].map(s => (
                          <span key={s} className="px-3 py-1 border border-white/20 text-[11px] md:text-[13px] font-mono text-white/90 uppercase bg-white/5">{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* Design */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-white">
                        <Palette size={20} />
                        <h3 className="font-mono font-black text-sm uppercase tracking-widest">Design</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Figma", "UI/UX Principles"].map(s => (
                          <span key={s} className="px-3 py-1 border border-white/20 text-[11px] md:text-[13px] font-mono text-white/90 uppercase bg-white/5">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. PROFESSIONAL EXPERIENCE */}
                <section id="experience" className="max-w-5xl">
                  <SectionHeader title="Operational_History" subtitle="03_PROFESSIONAL_EXPERIENCE" />
                  <div className="space-y-12 md:space-y-20 mt-12">
                    {/* Security Systems S.A.S */}
                    <div className="relative border-l-2 border-white/10 pl-6 md:pl-8">
                      <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-cyber-purple shadow-[0_0_8px_#A855F7]" />
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-2">
                          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">Junior Software Engineer</h3>
                          <div className="text-left md:text-right">
                            <span className="font-mono text-[10px] md:text-xs text-cyber-purple font-bold uppercase block">Aug 2025 – Present</span>
                            <span className="font-mono text-[9px] md:text-[10px] text-white/40 uppercase block">Duration: 7 months</span>
                          </div>
                        </div>
                        <p className="font-mono text-xs md:text-sm text-cyber-green font-bold uppercase tracking-widest">Security Systems S.A.S</p>
                        
                        <div className="space-y-4 md:space-y-6 text-white/70 font-sans leading-relaxed">
                          <p className="text-base md:text-lg">
                            I work on the development and evolution of <span className="text-white font-bold italic">The Guardian</span>, an enterprise biometric authentication ecosystem. 
                          </p>
                          <ul className="space-y-4 text-xs md:text-sm">
                            <li className="flex gap-3">
                              <span className="text-cyber-purple font-bold shrink-0">—</span>
                              <span><strong className="text-white">Cloud Evolution:</strong> Contributing to the development of The Guardian Cloud, a centralized digital identity platform designed for high availability and real-time verification across IoT and mobile devices.</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-cyber-purple font-bold shrink-0">—</span>
                              <span><strong className="text-white">System Modernization:</strong> Leading the architectural upgrade of The Guardian’s core platform to Java 22 and WebLogic 14, improving overall performance and security.</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-cyber-purple font-bold shrink-0">—</span>
                              <span><strong className="text-white">Backend & Infrastructure:</strong> Designing microservices with Spring Boot, AWS, and DynamoDB to support ubiquitous authentication.</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-cyber-purple font-bold shrink-0">—</span>
                              <span><strong className="text-white">Full-Stack Integration:</strong> Collaborating on a React web dashboard and a .NET desktop launcher for a unified identity experience.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Fundación Rubato */}
                    <div className="relative border-l-2 border-white/10 pl-6 md:pl-8">
                      <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-cyber-purple shadow-[0_0_8px_#A855F7]" />
                      <div className="space-y-12">
                        {/* Role 1: Teacher */}
                        <div className="space-y-4">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-2">
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">Music Technology Teacher</h3>
                            <div className="text-left md:text-right">
                              <span className="font-mono text-[10px] md:text-xs text-cyber-purple font-bold uppercase block">Feb 2026 – Present</span>
                              <span className="font-mono text-[9px] md:text-[10px] text-white/40 uppercase block">Duration: 1 month</span>
                            </div>
                          </div>
                          <p className="font-mono text-xs md:text-sm text-cyber-green font-bold uppercase tracking-widest">Fundación Rubato</p>
                          <ul className="space-y-3 text-xs md:text-sm text-white/70 font-sans">
                            <li className="flex gap-3">
                              <span className="text-cyber-purple font-bold shrink-0">—</span>
                              <span>Teaching professional notation and engraving using Finale and MuseScore.</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-cyber-purple font-bold shrink-0">—</span>
                              <span>Leading sessions on Artificial Intelligence and emerging technologies oriented toward music production.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Role 2: Coordinator */}
                        <div className="space-y-4">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-2">
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">IT Coordinator</h3>
                            <div className="text-left md:text-right">
                              <span className="font-mono text-[10px] md:text-xs text-cyber-purple font-bold uppercase block">Jul 2024 – Present</span>
                              <span className="font-mono text-[9px] md:text-[10px] text-white/40 uppercase block">Duration: 1 year 8 months</span>
                            </div>
                          </div>
                          <div className="space-y-4 text-white/70 font-sans leading-relaxed text-xs md:text-sm">
                            <p>Leading digital transformation and infrastructure management of the institution.</p>
                            <ul className="space-y-3">
                              <li className="flex gap-3">
                                <span className="text-cyber-purple font-bold shrink-0">—</span>
                                <span><strong className="text-white">Architecture Migration:</strong> Transitioning institutional web presence from Wix to a custom Next.js platform.</span>
                              </li>
                              <li className="flex gap-3">
                                <span className="text-cyber-purple font-bold shrink-0">—</span>
                                <span><strong className="text-white">Process Automation:</strong> Designing workflows to replace manual administrative tasks, increasing efficiency.</span>
                              </li>
                              <li className="flex gap-3">
                                <span className="text-cyber-purple font-bold shrink-0">—</span>
                                <span><strong className="text-white">Systems Management:</strong> Overseeing internal databases to maintain a secure digital ecosystem.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 5. PROJECTS */}
                <section id="projects">
                  <SectionHeader title="Classified_Archives" subtitle="04_PROJECTS" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 mt-12">
                    <ProjectCard 
                      id="FILE_01_MVP"
                      title="LocalMarket"
                      description="Full-stack ecosystem connecting local farmers with consumers. Features real-time cart and supplier dashboards."
                      tags={["Next.js", "Supabase", "Zustand"]}
                      status="OPERATIONAL"
                      link="https://github.com/Charlsz/localmarket"
                    />
                    <ProjectCard 
                      id="FILE_02_SYS"
                      title="Orchestrator"
                      description="Dynamic Docker microservices manager with integrated API Gateway and ROBLÉ query authentication."
                      tags={["Docker", "Python", "Gateway"]}
                      status="STABLE"
                      link="https://github.com/sebdavid3" 
                    />
                    <ProjectCard 
                      id="FILE_03_DATA"
                      title="Climate_Node"
                      description="Statistical weather analysis engine for Colombia. Automated cloud data fetching and PostgreSQL trend tracking."
                      tags={["FastAPI", "Streamlit", "PostgreSQL"]}
                      status="ANALYTICAL"
                      link="https://github.com/sebdavid3/ColombiaClimateAnalysis"
                    />
                    <ProjectCard 
                      id="FILE_04_MPI"
                      title="WordFreq_MPI"
                      description="Parallelized word frequency analysis using MPI. Distributes processing across multiple nodes for large-scale mining."
                      tags={["Python", "MPI", "Docker"]}
                      status="PARALLEL"
                      link="https://github.com/sebdavid3/MPI"
                    />
                  </div>
                </section>

                {/* 6. EDUCATION & CERTIFICATIONS */}
                <section id="education" className="max-w-5xl space-y-20">
                  <div>
                    <SectionHeader title="Academic_Synchronization" subtitle="05_EDUCATION" />
                    <div className="mt-12 space-y-8">
                      {/* Universidad del Norte */}
                      <div className="p-6 md:p-8 border-2 border-cyber-border bg-black/10 hover:border-cyber-purple transition-all group relative overflow-hidden">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                          <div className="space-y-1">
                            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">Systems Engineering</h3>
                            <p className="font-mono text-xs md:text-sm text-cyber-purple font-bold uppercase tracking-widest">Universidad del Norte</p>
                          </div>
                          <div className="text-left md:text-right">
                            <span className="font-mono text-[10px] md:text-xs text-white/40 font-bold uppercase block">2021 — 2026</span>
                            <span className="font-mono text-[9px] md:text-[10px] bg-cyber-purple/20 text-cyber-purple px-3 py-1 font-black inline-block mt-2">IN_PROGRESS</span>
                          </div>
                        </div>
                        <div className="space-y-4 text-white/70 font-sans leading-relaxed text-xs md:text-sm max-w-3xl">
                          <p>Specializing in Systems Engineering with a focus on software development and data analysis. Currently in my fourth year, maintaining strong academic performance while developing expertise in core engineering principles.</p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {["Algorithms", "Data Structures", "Database Design", "Software Engineering"].map(tag => (
                              <span key={tag} className="text-[9px] md:text-[10px] font-mono border border-white/10 px-2 py-0.5 text-white/40 uppercase">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Universidad del Atlántico */}
                      <div className="p-6 md:p-8 border-2 border-cyber-border bg-black/10 hover:border-cyber-purple transition-all group relative overflow-hidden">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                          <div className="space-y-1">
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">English Language Program</h3>
                            <p className="font-mono text-xs md:text-sm text-cyber-purple font-bold uppercase tracking-widest">Universidad del Atlántico</p>
                          </div>
                          <div className="text-left md:text-right">
                            <span className="font-mono text-[10px] md:text-xs text-white/40 font-bold uppercase block">2016 — 2019</span>
                            <span className="font-mono text-[9px] md:text-[10px] bg-cyber-green/20 text-cyber-green px-3 py-1 font-black inline-block mt-2">COMPLETED</span>
                          </div>
                        </div>
                        <div className="space-y-4 text-white/70 font-sans leading-relaxed text-xs md:text-sm max-w-3xl">
                          <p>Comprehensive English language program focusing on academic and professional communication. Developed advanced proficiency essential for international technical collaboration.</p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {["English Proficiency", "Academic Writing", "Professional Communication", "Cross-cultural Skills"].map(tag => (
                              <span key={tag} className="text-[9px] md:text-[10px] font-mono border border-white/10 px-2 py-0.5 text-white/40 uppercase">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications Subsection */}
                  <div>
                    <div className="flex items-center gap-4 mb-12">
                      <div className="w-8 h-1 bg-cyber-green" />
                      <h2 className="font-mono text-cyber-green text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-black">
                        Verification_Vault
                      </h2>
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white ml-2">CERTIFICATIONS</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {/* Associate Track */}
                      <div className="md:col-span-2 lg:col-span-3 p-6 md:p-8 border-2 border-cyber-green/30 bg-cyber-green/5 space-y-4 group hover:border-cyber-green transition-all relative">
                        <div className="flex justify-between items-start gap-4">
                          <div className="space-y-1">
                            <h4 className="font-mono text-[10px] md:text-xs text-cyber-green font-black uppercase tracking-widest">Career Track // Specialized</h4>
                            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic">Associate Data Engineer in SQL</h3>
                          </div>
                          <motion.a 
                            href="https://www.datacamp.com/statement-of-accomplishment/track/5df5ecacb35a0f2357a01312bfdd7e9e0deb0d28?raw=1" 
                            target="_blank"
                            whileHover={{ scale: 1.1, color: "#52d053" }}
                            className="text-white/20 transition-colors shrink-0"
                          >
                            <ExternalLink size={24} />
                          </motion.a>
                        </div>
                        <p className="text-white/60 text-xs md:text-sm font-sans max-w-2xl">Rigorous technical track validating proficiency in data architecture, SQL optimization, and professional data engineering workflows.</p>
                      </div>

                      <div className="p-6 border border-white/10 bg-black/10 space-y-6">
                        <h4 className="font-mono text-[10px] md:text-xs text-cyber-purple font-black uppercase border-b border-white/5 pb-2">Data Architecture</h4>
                        <ul className="space-y-4 text-[10px] md:text-[11px] font-mono uppercase">
                          <li className="group">
                            <a href="https://www.datacamp.com/statement-of-accomplishment/course/143ace3b9a091008221da1b0627124179a8e70ef?raw=1" target="_blank" className="flex justify-between items-center hover:text-white transition-colors text-white/60">
                              <span>— Database Design</span>
                              <ChevronRight size={12} className="opacity-0 group-hover:opacity-100" />
                            </a>
                          </li>
                          <li className="group">
                            <a href="https://www.datacamp.com/statement-of-accomplishment/course/4859954ae7a2e8fad3249f5147d294d9ce8250d8?raw=1" target="_blank" className="flex justify-between items-center hover:text-white transition-colors text-white/60">
                              <span>— Data Warehousing</span>
                              <ChevronRight size={12} className="opacity-0 group-hover:opacity-100" />
                            </a>
                          </li>
                          <li className="group">
                            <a href="https://www.datacamp.com/statement-of-accomplishment/course/0b92e92167f44ccabaca40a35caff08e5d8e0af1?raw=1" target="_blank" className="flex justify-between items-center hover:text-white transition-colors text-white/60">
                              <span>— Relational Databases</span>
                              <ChevronRight size={12} className="opacity-0 group-hover:opacity-100" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 border border-white/10 bg-black/10 space-y-6">
                        <h4 className="font-mono text-[10px] md:text-xs text-cyber-green font-black uppercase border-b border-white/5 pb-2">Cloud & Modern Data</h4>
                        <ul className="space-y-4 text-[10px] md:text-[11px] font-mono uppercase">
                          <li className="group">
                            <a href="https://www.datacamp.com/statement-of-accomplishment/course/72925d93c38ed9ba5c905374ab1400a92b4c0729?raw=1" target="_blank" className="flex justify-between items-center hover:text-white transition-colors text-white/60">
                              <span>— Cloud Computing</span>
                              <ChevronRight size={12} className="opacity-0 group-hover:opacity-100" />
                            </a>
                          </li>
                          <li className="group">
                            <a href="https://www.datacamp.com/statement-of-accomplishment/course/3a13831ee30d9f9d7884a5e68c3da1533b626f59?raw=1" target="_blank" className="flex justify-between items-center hover:text-white transition-colors text-white/60">
                              <span>— Data Engineering</span>
                              <ChevronRight size={12} className="opacity-0 group-hover:opacity-100" />
                            </a>
                          </li>
                          <li className="group">
                            <a href="https://www.datacamp.com/statement-of-accomplishment/course/721f6598a4f1fda977e651af88f2de146d5c6e90?raw=1" target="_blank" className="flex justify-between items-center hover:text-white transition-colors text-white/60">
                              <span>— Snowflake SQL</span>
                              <ChevronRight size={12} className="opacity-0 group-hover:opacity-100" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 border border-white/10 bg-black/10 space-y-6">
                        <h4 className="font-mono text-[10px] md:text-xs text-white font-black uppercase border-b border-white/5 pb-2">System Standards</h4>
                        <ul className="space-y-4 text-[10px] md:text-[11px] text-white/60 font-mono uppercase">
                          <li>— Agile Engineering</li>
                          <li>— Enterprise Architect</li>
                          <li>— Scalable Design</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 7. CONTACT ME */}
                <section id="contact" className="pb-32">
                  <SectionHeader title="Establish_Connection" subtitle="06_CONTACT_ME" />
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    <div className="space-y-8 md:space-y-12">
                      <div className="space-y-6 md:space-y-8">
                        <div className="space-y-4 md:space-y-6">
                          <a href="mailto:sebdavidibanezrios@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-cyber-purple transition-colors shrink-0">
                              <Mail size={18} className="text-cyber-purple" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-mono text-[8px] md:text-[9px] text-white uppercase tracking-widest">Direct_Uplink</p>
                              <p className="font-mono text-xs md:text-sm text-white font-bold truncate">sebdavidibanezrios@gmail.com</p>
                            </div>
                          </a>
                          
                          <a href="https://www.linkedin.com/in/sdibanez/" target="_blank" className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-[#52d053] transition-colors shrink-0">
                              <Linkedin size={18} className="text-[#52d053]" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-mono text-[8px] md:text-[9px] text-white uppercase tracking-widest">Professional_Network</p>
                              <p className="font-mono text-xs md:text-sm text-white font-bold truncate">linkedin.com/in/sdibanez</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="hidden md:block absolute -top-10 -left-10 w-20 h-20 border-t border-l border-cyber-purple/20 pointer-events-none" />
                      <ContactForm />
                    </div>
                  </div>
                </section>

                {/* Technical Footnote */}
                <div className="mt-auto pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-cyber-border">
                  <div className="space-y-4 font-mono">
                    <p className="text-[10px] text-cyber-purple uppercase font-black tracking-widest">Stack_Identification</p>
                    <div className="space-y-1">
                      <p className="text-[11px] text-white font-bold uppercase">Backend & Core</p>
                      <p className="text-[11px] text-white font-bold uppercase">Frontend & Web</p>
                      <p className="text-[11px] text-white font-bold uppercase">Cloud, Data & Tools</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-mono">
                    <p className="text-[10px] text-cyber-purple uppercase font-black tracking-widest">Transmission_Nodes</p>
                    <div className="flex items-center gap-6">
                      <motion.a href="https://github.com/sebdavid3" target="_blank" whileHover={{ color: "#A855F7", scale: 1.2 }} className="text-white/40 transition-colors">
                        <Github size={20} />
                      </motion.a>
                      <motion.a href="https://www.linkedin.com/in/sdibanez/" target="_blank" whileHover={{ color: "#52d053", scale: 1.2 }} className="text-white/40 transition-colors">
                        <Linkedin size={20} />
                      </motion.a>
                      <motion.a href="mailto:sebdavidibanezrios@gmail.com" whileHover={{ color: "#A855F7", scale: 1.2 }} className="text-white/40 transition-colors">
                        <Mail size={20} />
                      </motion.a>
                    </div>
                  </div>

                  <div className="flex justify-center md:justify-end items-end gap-4 text-white/10">
                    <Cpu size={48} />
                    <div className="font-mono text-[9px] leading-tight text-right">
                      SYSTEM_LOAD: OPTIMAL<br/>
                      ENCRYPTION: AES_256<br/>
                      SYNC_DATE: 2026.02.16
                    </div>
                  </div>
                </div>
              </div>
            </TerminalFrame>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
