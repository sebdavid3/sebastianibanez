"use client";

import { TerminalFrame } from "@/components/TerminalFrame";
import { ProjectCard } from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Cpu, ShieldAlert, User, FolderCode } from "lucide-react";

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

  // Retro loading bar logic
  useEffect(() => {
    if (!isBooting) {
      const interval = setInterval(() => {
        setProgress((p) => (p >= 20 ? 0 : p + 1));
      }, 150);
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
            <div className="w-full max-w-md font-mono text-[10px] space-y-2 border border-cyber-purple/20 p-8 bg-[#050505] relative overflow-hidden">
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
              <div className="min-h-full flex flex-col p-10 md:p-24">
                {/* Hero Section */}
                <div className="max-w-6xl">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-20 overflow-hidden">
                      <div className="w-16 h-1 bg-cyber-purple shadow-[0_0_10px_#A855F7] shrink-0" />
                      <h2 className="font-mono text-white text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-black whitespace-nowrap">
                        Software Engineer | System Design & Scalability | Cloud Architect | Data-Driven Solutions
                      </h2>
                    </div>
                    
                    <div className="relative group cursor-default inline-block mb-24">
                      <h1 className="text-5xl md:text-[6.5rem] font-black uppercase tracking-tighter leading-none mb-12 text-white relative z-10 whitespace-nowrap">
                        SEBASTIAN IBAÑEZ
                      </h1>
                      
                      {/* Retro Block Loading Bar */}
                      <div className="absolute -bottom-4 left-0 w-full flex gap-1 h-3 px-1 border border-white/5 bg-black/40 items-center">
                        {[...Array(20)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-1.5 flex-1 transition-colors duration-100 ${
                              i < progress ? "bg-cyber-purple shadow-[0_0_8px_#A855F7]" : "bg-white/5"
                            }`}
                          />
                        ))}
                      </div>
                      
                      {/* Hero Glitch Layers */}
                      <span className="absolute top-0 left-0 text-[#ff00ff] opacity-0 group-hover:opacity-40 group-hover:translate-x-[5px] group-hover:-translate-y-[2px] transition-all pointer-events-none uppercase font-black text-5xl md:text-[6.5rem] tracking-tighter leading-none whitespace-nowrap">
                        SEBASTIAN IBAÑEZ
                      </span>
                      <span className="absolute top-0 left-0 text-cyber-green opacity-0 group-hover:opacity-40 group-hover:-translate-x-[5px] group-hover:translate-y-[2px] transition-all pointer-events-none uppercase font-black text-5xl md:text-[6.5rem] tracking-tighter leading-none whitespace-nowrap">
                        SEBASTIAN IBAÑEZ
                      </span>
                    </div>
                  </motion.div>

                  <div className="flex flex-wrap items-center gap-10">
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "#A855F7", boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-14 py-6 bg-cyber-purple text-white font-mono font-black text-sm tracking-[0.5em] uppercase transition-all shadow-[0_0_15px_rgba(168, 85, 247, 0.2)] flex items-center gap-4"
                    >
                      ABOUT_ME <User size={18} />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ borderColor: "white", color: "white" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-14 py-6 border-2 border-white/10 text-white/60 font-mono font-black text-sm tracking-[0.5em] uppercase transition-all flex items-center gap-4"
                    >
                      VIEW_PROJECTS <FolderCode size={18} />
                    </motion.button>

                    <div className="flex items-center gap-6 ml-4">
                      <motion.a href="https://github.com/sebdavid3" target="_blank" whileHover={{ color: "#A855F7", scale: 1.2 }} className="text-white/40 transition-colors">
                        <Github size={24} />
                      </motion.a>
                      <motion.a href="https://www.linkedin.com/in/sdibanez/" target="_blank" whileHover={{ color: "#52d053", scale: 1.2 }} className="text-white/40 transition-colors">
                        <Linkedin size={24} />
                      </motion.a>
                      <motion.a href="mailto:sebdavidibanezrios@gmail.com" whileHover={{ color: "#A855F7", scale: 1.2 }} className="text-white/40 transition-colors">
                        <Mail size={24} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Projects Section */}
                <div id="projects" className="mt-56 mb-32">
                  <div className="flex items-center gap-10 mb-20">
                    <h2 className="font-mono text-sm tracking-[1.5em] text-white uppercase font-black">
                      Classified_Archives
                    </h2>
                    <div className="h-1 flex-1 bg-cyber-border" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <ProjectCard 
                      id="FILE_01_MVP"
                      title="LocalMarket"
                      description="Full-stack ecosystem connecting local farmers with consumers. Features real-time cart, secure checkout, and supplier dashboards."
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
                      description="Parallelized word frequency analysis using MPI. Distributes processing across multiple nodes for large-scale text mining."
                      tags={["Python", "MPI", "Docker"]}
                      status="PARALLEL"
                      link="https://github.com/sebdavid3/MPI"
                    />
                  </div>
                </div>

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

                  <div className="flex justify-end items-end gap-4 text-white/10">
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
