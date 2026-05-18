"use client";

import React from "react";
import { motion } from "framer-motion";
import { Moon } from "lucide-react";

export function Navbar() {
  const links = ["Design", "System", "Password", "Camera", "Contact"];
  
  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between sticky top-0 z-50 bg-white/50 backdrop-blur-xl">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold tracking-tighter text-[#111111]"
      >
        Forma<span className="text-[#5B21FF]">.</span>co
      </motion.div>
      
      <div className="hidden md:flex items-center gap-8">
        {links.map((link, i) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-sm font-medium text-[#555555] hover:text-[#111111] transition-colors relative group"
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#5B21FF] transition-all group-hover:w-full" />
          </motion.a>
        ))}
      </div>
      
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center text-white shadow-lg"
      >
        <Moon className="w-4 h-4 fill-white" />
      </motion.button>
    </nav>
  );
}
