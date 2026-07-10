"use client";

import { useState, useEffect } from "react";

interface DurationCounterProps {
  startDate: string;
  endDate?: string;
  className?: string;
}

export function formatDuration(start: Date, end: Date): string {
  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  
  if (totalMonths < 0) return "0 months";
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  if (years > 0 && months > 0) {
    return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
  } else if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''}`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''}`;
  } else {
    const days = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    if (days > 0) return `${days} day${days > 1 ? 's' : ''}`;
    return "Less than a day";
  }
}

export const DurationCounter = ({ startDate, endDate, className }: DurationCounterProps) => {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    function calculate() {
      const start = new Date(startDate);
      const end = endDate && endDate !== "Present" ? new Date(endDate) : new Date();
      setDuration(formatDuration(start, end));
    }

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [startDate, endDate]);

  return (
    <span className={className || "font-mono text-[9px] md:text-[10px] text-white/40 uppercase block"}>
      Duration: {duration}
    </span>
  );
};
