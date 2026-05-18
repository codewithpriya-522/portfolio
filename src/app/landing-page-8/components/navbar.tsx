"use client";

import React from "react";
import { Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-7xl px-6 py-3 flex items-center justify-between rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Luminal</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Pricing", "FAQ", "About", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Button variant="outline" className="rounded-full bg-white text-black hover:bg-white/90 border-none px-6 transition-all hover:scale-105 active:scale-95">
            Sign In
          </Button>
        </div>
        
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 top-20 z-40 p-4 md:hidden"
          >
            <div className="bg-[#0B1020] border border-white/10 rounded-2xl p-8 flex flex-col gap-6 shadow-2xl">
              {["Home", "Pricing", "FAQ", "About", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-medium text-slate-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="w-full rounded-full bg-white text-black mt-4">Sign In</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
