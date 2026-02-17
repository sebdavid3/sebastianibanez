"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Hash, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  tags: string[];
  status: string;
  description: string;
  link: string;
  className?: string;
}

export const ProjectCard = ({ id, title, tags, status, description, link, className }: ProjectCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className={cn(
        "group relative border-2 border-cyber-border bg-black p-0 flex flex-col hover:border-cyber-purple transition-all duration-300 cursor-pointer block",
        className
      )}
    >
      {/* Header Area */}
      <div className="border-b-2 border-cyber-border p-6 flex justify-between items-center bg-[#0A0A0A] group-hover:border-cyber-purple transition-colors">
        <div className="font-mono text-[10px] text-cyber-purple tracking-[0.2em] font-black uppercase">
          Archive_ID: {id}
        </div>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse shadow-[0_0_8px_#52d053]" />
           <span className="font-mono text-[9px] text-white/60 uppercase">{status}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 space-y-6">
        <div className="relative">
          <h3 className="text-4xl font-black uppercase tracking-tighter text-white group-hover:text-white transition-all relative z-10">
            {title}
          </h3>
          
          {/* Glitch Layers */}
          <span className="absolute top-0 left-0 text-[#ff00ff] opacity-0 group-hover:opacity-70 group-hover:translate-x-[4px] group-hover:-translate-y-[2px] transition-all pointer-events-none uppercase font-black text-4xl tracking-tighter mix-blend-screen animate-pulse">
            {title}
          </span>
          <span className="absolute top-0 left-0 text-cyber-green opacity-0 group-hover:opacity-70 group-hover:-translate-x-[4px] group-hover:translate-y-[2px] transition-all pointer-events-none uppercase font-black text-4xl tracking-tighter mix-blend-screen animate-pulse">
            {title}
          </span>
        </div>
        
        <p className="text-sm text-cyber-muted leading-relaxed font-sans font-medium group-hover:text-white/80 transition-colors">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="font-mono text-[9px] text-white border border-cyber-purple/30 px-3 py-1 uppercase font-bold group-hover:border-cyber-purple group-hover:bg-cyber-purple/10 transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Area */}
      <div className="mt-auto border-t-2 border-cyber-border p-6 flex justify-between items-center group-hover:border-cyber-purple transition-colors">
        <span className="font-mono text-[9px] text-cyber-purple uppercase font-black tracking-widest">Security_Class: Level_A</span>
        <ArrowUpRight size={20} className="text-white opacity-20 group-hover:opacity-100 group-hover:text-cyber-purple transition-all" />
      </div>

      {/* Hover background effect (Subtle purple glow) */}
      <div className="absolute inset-0 bg-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.a>
  );
};
