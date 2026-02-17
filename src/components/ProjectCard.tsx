"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Folder } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  tags: string[];
  status: string;
  description: string;
  className?: string;
}

export const ProjectCard = ({ id, title, tags, status, description, className }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group relative border border-cyber-text/10 bg-cyber-bg/50 p-6 flex flex-col gap-4 overflow-hidden",
        className
      )}
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-alert/5 blur-[80px] group-hover:bg-cyber-alert/15 transition-colors" />
      
      {/* Header Info */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="font-mono text-[10px] text-cyber-alert flex items-center gap-1">
            <span className="w-1 h-1 bg-cyber-alert animate-pulse" /> FILE_ID: {id}
          </p>
          <div className="relative inline-block">
            {/* RGB Split Effect on Title */}
            <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-cyber-cyan transition-colors duration-300">
              {title}
            </h3>
            <span className="absolute top-0 left-0 text-cyber-alert opacity-0 group-hover:opacity-70 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all pointer-events-none uppercase font-black text-2xl tracking-tight">
              {title}
            </span>
          </div>
        </div>
        <Folder size={18} className="text-cyber-text/20 group-hover:text-cyber-cyan transition-colors" />
      </div>

      {/* Description */}
      <p className="text-sm text-cyber-text/60 leading-relaxed font-sans">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="font-mono text-[9px] px-2 py-1 bg-cyber-text/5 text-cyber-text/40 border border-cyber-text/10 uppercase tracking-tighter">
            {tag}
          </span>
        ))}
      </div>

      {/* Status Bar */}
      <div className="border-t border-cyber-text/10 pt-4 flex justify-between items-center mt-2">
        <div className="font-mono text-[9px] text-cyber-warning tracking-widest">
          STATUS: <span className="font-bold underline italic">{status}</span>
        </div>
        <button className="text-cyber-text/30 hover:text-cyber-alert transition-colors">
          <ExternalLink size={14} />
        </button>
      </div>

      {/* Hover Line Animation */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-cyber-alert"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
