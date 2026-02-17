"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TerminalFrame = ({ children }: { children: React.ReactNode }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col border-x border-cyber-text/10 mx-4 md:mx-12 relative">
      {/* Top HUD Bar */}
      <header className="h-10 border-b border-cyber-text/20 flex items-center justify-between px-4 font-mono text-[10px] tracking-widest text-cyber-text/50">
        <div className="flex items-center gap-4">
          <span className="text-cyber-alert animate-pulse">● SYSTEM_LIVE</span>
          <span>LATENCY: 12ms</span>
          <span className="hidden md:inline">LOC: 35.6895° N, 139.6917° E</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-cyber-cyan">V.2.0.26_PROTOTYPE</span>
          <span className="text-cyber-text">{time}</span>
        </div>
      </header>

      {/* Main Content Area with 12-column grid */}
      <div className="flex-1 grid grid-cols-12 relative">
        {/* Left Technical Bar */}
        <aside className="hidden lg:flex col-span-1 border-r border-cyber-text/10 flex-col items-center py-8 gap-12">
          <div className="vertical-text rotate-180 font-mono text-[9px] text-cyber-text/30 uppercase tracking-[0.5em]">
            Security_Protocol_Active
          </div>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-1 h-1 bg-cyber-alert/40" />
            ))}
          </div>
        </aside>

        {/* Central Content */}
        <div className="col-span-12 lg:col-span-11 relative overflow-hidden">
          {children}
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyber-alert -translate-x-[1px] -translate-y-[1px]" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyber-alert translate-x-[1px] -translate-y-[1px]" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyber-alert -translate-x-[1px] translate-y-[1px]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyber-alert translate-x-[1px] translate-y-[1px]" />
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </div>
  );
};
