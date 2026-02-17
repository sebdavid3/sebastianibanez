"use client";

import React, { useEffect, useState } from "react";

export const TerminalFrame = ({ children }: { children: React.ReactNode }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Configurado para hora local de Colombia
      setTime(now.toLocaleTimeString("en-US", { 
        hour12: false, 
        timeZone: "America/Bogota" 
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col border-x border-cyber-border mx-1 md:mx-16 md:border-x-2 relative bg-black/10 transition-colors duration-500 overflow-hidden md:overflow-visible">
      {/* HUD Superior Sólido */}
      <header className="h-12 md:h-16 border-b-2 border-cyber-border flex items-center justify-between px-4 md:px-8 font-mono text-[9px] md:text-[11px] tracking-widest text-white font-bold bg-black/20">
        <div className="flex items-center gap-4 md:gap-10">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-cyber-green rounded-full shadow-[0_0_8px_#52d053]" />
            <span className="text-white uppercase">Sync</span>
          </div>
          <span className="hidden sm:inline text-cyber-purple font-black tracking-[0.2em]">PROTOCOL: SEBDAVID3_OS</span>
        </div>
        <div className="flex items-center gap-4 md:gap-10">
          <span className="hidden lg:inline text-cyber-purple uppercase font-black tracking-tighter">LOC: 10.9833° N, 74.8019° W</span>
          <span className="text-white border-l border-cyber-border pl-4 md:pl-10">T: {time}</span>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-12 relative">
        {/* Barra Lateral Marcada */}
        <aside className="hidden lg:flex col-span-1 border-r-2 border-cyber-border flex-col items-center py-12 bg-black/5">
          <div className="vertical-text rotate-180 font-mono text-[10px] text-cyber-purple uppercase tracking-[0.8em] font-black">
            EVA-2003
          </div>
          <div className="mt-auto mb-10 space-y-2">
             {[1,2,3].map(i => <div key={i} className="w-1.5 h-6 bg-cyber-purple" />)}
          </div>
        </aside>

        {/* Contenido Principal */}
        <div className="col-span-12 lg:col-span-11 relative">
          {children}
        </div>
      </div>

      {/* Acentos de Esquina - Ajustados para evitar desbordamiento en móviles */}
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-cyber-purple md:-translate-x-1 translate-y-1" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-cyber-purple md:translate-x-1 translate-y-1" />

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </div>
  );
};
