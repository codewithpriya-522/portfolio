"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 px-6 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-violet-600/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full"></div>
        
        <div className="relative p-12 md:p-24 border border-white/10 bg-slate-900/60 backdrop-blur-3xl flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Ready to Start?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed"
          >
            Join thousands of traders who are already using Luminal to grow their assets with AI-driven insights and real-time execution.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-slate-100 px-12 h-16 text-xl font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
              Get Started for Free
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
