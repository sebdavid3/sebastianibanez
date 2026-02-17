"use client";

import { TerminalFrame } from "@/components/TerminalFrame";
import { ProjectCard } from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRight, Database, ShieldAlert, Cpu } from "lucide-react";

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);
  const [bootLogs, setBootLogs] = useState<string[]>([]);

  const logs = [
    "INITIALIZING CORE_OS v2.0...",
    "LOADING NEURAL_LINK_PROTOCOL...",
    "DECRYPTING ARCHIVE_DATA...",
    "BYPASSING SECURITY_LAYER_01...",
    "ESTABLISHING CONNECTION TO SECTION_09...",
    "ACCESS GRANTED.",
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
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <AnimatePresence>
        {isBooting ? (
          <motion.div
            key="boot"
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[100] bg-cyber-bg flex flex-col items-center justify-center p-6"
          >
            <div className="w-full max-w-md font-mono text-[10px] space-y-2">
              <div className="flex items-center gap-2 text-cyber-warning mb-4">
                <ShieldAlert size={16} />
                <span className="text-sm font-bold tracking-[0.3em]">UNAUTHORIZED ACCESS DETECTED</span>
              </div>
              <div className="space-y-1">
                {bootLogs.map((log, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-cyber-text/30">[{i.toString().padStart(2, '0')}]</span>
                    <span className={i === bootLogs.length - 1 ? "text-cyber-cyan" : "text-cyber-text"}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>
              <motion.div 
                className="h-1 bg-cyber-warning mt-6"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "linear" }}
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
              <div className="min-h-full flex flex-col p-8 md:p-16">
                {/* Hero Section */}
                <div className="max-w-4xl">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="font-mono text-cyber-alert text-xs tracking-[0.4em] mb-4 flex items-center gap-2">
                      <Cpu size={12} /> SUBJECT_IDENTIFICATION: DEVELOPER_01
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-black uppercase leading-tight mb-8">
                      Creative <br />
                      <span className="text-transparent border-t border-b border-cyber-text/20 py-1">Developer</span>
                    </h1>
                  </motion.div>

                  <motion.p 
                    className="max-w-xl text-cyber-text/70 text-lg leading-relaxed mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Especializado en la construcción de interfaces de alta densidad funcional. 
                    Combinando la rigidez tipográfica suiza con estéticas digitales experimentales.
                  </motion.p>

                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-cyber-alert text-white font-mono font-bold text-sm tracking-widest flex items-center gap-4 group"
                    >
                      OPEN_ARCHIVES <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ backgroundColor: "rgba(224, 224, 224, 0.1)" }}
                      className="px-8 py-4 border border-cyber-text/20 text-cyber-text font-mono text-sm tracking-widest"
                    >
                      CONTACT_NODE
                    </motion.button>
                  </div>
                </div>

                {/* Projects Section (Classified Archives) */}
                <div className="mt-24 mb-32">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="h-[1px] flex-1 bg-cyber-text/10" />
                    <h2 className="font-mono text-xs tracking-[0.5em] text-cyber-text/30 uppercase">
                      Classified_Archives_//_2026
                    </h2>
                    <div className="h-[1px] w-24 bg-cyber-text/10" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProjectCard 
                      id="PX-772"
                      title="Neural Interface"
                      description="Sistema de visualización de datos neuronales en tiempo real desarrollado para la Sección 9."
                      tags={["React", "WebGL", "Rust"]}
                      status="OPERATIONAL"
                    />
                    <ProjectCard 
                      id="EV-02"
                      title="Magi Cloud"
                      description="Infraestructura distribuida de alta disponibilidad con redundancia triple sincronizada."
                      tags={["Go", "Kubernetes", "gRPC"]}
                      status="DEPLOYED"
                    />
                    <ProjectCard 
                      id="GITS-01"
                      title="Ghost Shell"
                      description="Protocolo de cifrado asimétrico inspirado en transmisiones cibernéticas seguras."
                      tags={["C++", "Security", "Crypto"]}
                      status="ARCHIVED"
                    />
                  </div>
                </div>

                {/* Technical Footnote */}
                <div className="mt-auto pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-cyber-text/10">
                  <div className="space-y-2">
                    <p className="font-mono text-[9px] text-cyber-text/40 uppercase tracking-widest">Core_Stack</p>
                    <p className="font-mono text-xs">TYPESCRIPT / NEXT.JS / FRAMER_MOTION</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-mono text-[9px] text-cyber-text/40 uppercase tracking-widest">Network_Status</p>
                    <p className="font-mono text-xs text-cyber-cyan italic underline underline-offset-4 cursor-pointer">NODE_PORTFOLIO_DEPLOYED</p>
                  </div>
                  <div className="flex justify-end items-end gap-2 text-cyber-text/20">
                    <Database size={40} />
                    <div className="font-mono text-[8px] leading-none">
                      DATA_SCRAP: 44.12kb<br/>
                      PACKETS: 100%
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
