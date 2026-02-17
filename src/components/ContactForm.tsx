"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Terminal, Loader2 } from "lucide-react";

export const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("idle");

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Transmission failed:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-mono">
      <div className="space-y-2">
        <label className="text-[10px] text-white uppercase font-black tracking-widest block">
          Source_Identifier (Name)
        </label>
        <input
          type="text"
          required
          value={formData.name}
          disabled={isSending}
          className="w-full bg-black/40 border border-white/10 p-4 text-white text-sm focus:border-cyber-purple outline-none transition-colors disabled:opacity-50"
          placeholder="ENTER_NAME..."
          onChange={(e) => setState({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] text-white uppercase font-black tracking-widest block">
          Uplink_Address (Email)
        </label>
        <input
          type="email"
          required
          value={formData.email}
          disabled={isSending}
          className="w-full bg-black/40 border border-white/10 p-4 text-white text-sm focus:border-cyber-purple outline-none transition-colors disabled:opacity-50"
          placeholder="EMAIL@PROTOCOL.COM"
          onChange={(e) => setState({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] text-white uppercase font-black tracking-widest block">
          Encrypted_Payload (Message)
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          disabled={isSending}
          className="w-full bg-black/40 border border-white/10 p-4 text-white text-sm focus:border-cyber-purple outline-none transition-colors resize-none disabled:opacity-50"
          placeholder="WRITE_MESSAGE_DATA..."
          onChange={(e) => setState({ ...formData, message: e.target.value })}
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSending}
        whileHover={{ scale: 1.02, backgroundColor: "#A855F7", color: "#000" }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 border-2 border-cyber-purple text-cyber-purple font-black text-xs tracking-[0.5em] uppercase flex items-center justify-center gap-4 transition-all disabled:opacity-50"
      >
        {isSending ? (
          <>UPLINKING... <Loader2 size={16} className="animate-spin" /></>
        ) : (
          <>INITIATE_TRANSMISSION <Send size={16} /></>
        )}
      </motion.button>
      
      {status === "success" && (
        <div className="text-[10px] text-cyber-green uppercase font-bold animate-pulse">
          // SIGNAL_RECEIVED: Transmission successful.
        </div>
      )}
      
      {status === "error" && (
        <div className="text-[10px] text-cyber-alert uppercase font-bold animate-pulse">
          // SIGNAL_LOST: Verification failed. Try again.
        </div>
      )}

      <div className="flex items-center gap-2 text-[9px] text-white uppercase">
        <Terminal size={10} />
        <span>Secure connection established // Protocol: HTTPS</span>
      </div>
    </form>
  );
};
