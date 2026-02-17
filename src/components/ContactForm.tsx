"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";

export const ContactForm = () => {
  const [formData, setState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission would go here
    console.log("Form data:", formData);
    alert("TRANSMISSION_SENT: Signal received. (Simulation)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-mono">
      <div className="space-y-2">
        <label className="text-[10px] text-cyber-purple uppercase font-black tracking-widest block">
          Source_Identifier (Name)
        </label>
        <input
          type="text"
          required
          className="w-full bg-black/40 border border-white/10 p-4 text-white text-sm focus:border-cyber-purple outline-none transition-colors"
          placeholder="ENTER_NAME..."
          onChange={(e) => setState({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] text-cyber-purple uppercase font-black tracking-widest block">
          Uplink_Address (Email)
        </label>
        <input
          type="email"
          required
          className="w-full bg-black/40 border border-white/10 p-4 text-white text-sm focus:border-cyber-purple outline-none transition-colors"
          placeholder="EMAIL@PROTOCOL.COM"
          onChange={(e) => setState({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] text-cyber-purple uppercase font-black tracking-widest block">
          Encrypted_Payload (Message)
        </label>
        <textarea
          required
          rows={4}
          className="w-full bg-black/40 border border-white/10 p-4 text-white text-sm focus:border-cyber-purple outline-none transition-colors resize-none"
          placeholder="WRITE_MESSAGE_DATA..."
          onChange={(e) => setState({ ...formData, message: e.target.value })}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02, backgroundColor: "#A855F7", color: "#000" }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 border-2 border-cyber-purple text-cyber-purple font-black text-xs tracking-[0.5em] uppercase flex items-center justify-center gap-4 transition-all"
      >
        INITIATE_TRANSMISSION <Send size={16} />
      </motion.button>
      
      <div className="flex items-center gap-2 text-[9px] text-white uppercase">
        <Terminal size={10} />
        <span>Secure connection established // Protocol: HTTPS</span>
      </div>
    </form>
  );
};
