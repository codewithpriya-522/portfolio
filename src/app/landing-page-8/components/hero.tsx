"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Next-gen AI Analytics is here
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl mb-8 leading-[1.1]"
        >
          Platform For Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Analytics</span> To Grow Your Business
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          Luminal provides deep insights into your trading and business assets with AI-driven predictive modeling and real-time data tracking.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-12 text-base font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all">
            Start for Free
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 px-8 h-12 text-base font-semibold">
            Live Demo
          </Button>
        </motion.div>
      </div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full mix-blend-screen animate-pulse delay-700" />
      </div>
    </section>
  );
}
