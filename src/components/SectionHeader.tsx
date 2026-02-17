"use client";

import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 mb-12">
      <div className="flex items-center gap-4">
        <div className="w-8 h-1 bg-cyber-purple" />
        <h2 className="font-mono text-cyber-purple text-[10px] tracking-[0.5em] uppercase font-black">
          {title}
        </h2>
      </div>
      <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
        {subtitle}
      </h3>
    </div>
  );
};
