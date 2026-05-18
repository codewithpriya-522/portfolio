"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="px-8 pt-16 pb-24 md:pt-24 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#111111] leading-[0.9] mb-4">
            We shape <br /> ideas into <br /> reality
          </h1>
          <p className="text-lg text-[#555555] max-w-[400px] leading-relaxed">
            A creative agency dedicated to building high-end digital experiences for modern startups and forward-thinking brands.
          </p>
        </motion.div>
        
        <motion.div
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-fit"
        >
          <Button className="rounded-full bg-[#5B21FF] hover:bg-[#4a18e0] h-14 px-8 text-lg font-bold group shadow-xl shadow-[#5B21FF]/30 transition-shadow hover:shadow-[#5B21FF]/50">
            Watch showcase
            <div className="ml-3 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-white text-white" />
            </div>
          </Button>
        </motion.div>
      </div>
      
      <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
        <Illustration3D />
      </div>
    </section>
  );
}

function Illustration3D() {
  return (
    <div className="relative w-full h-full">
      {/* Floating UI Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-48 h-32 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 z-20 flex flex-col gap-2"
      >
        <div className="h-3 w-1/2 bg-[#5B21FF]/10 rounded-full" />
        <div className="flex gap-2 mt-2">
           {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded bg-gray-50 border border-gray-100" />)}
        </div>
        <div className="mt-2 h-8 w-full bg-[#5B21FF] rounded-lg" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-[2rem] shadow-2xl p-6 border border-gray-100 z-20 flex flex-col justify-between"
      >
        <div className="w-12 h-12 rounded-full bg-[#FFBD2E]/20 flex items-center justify-center">
           <div className="w-6 h-6 rounded-full bg-[#FFBD2E]" />
        </div>
        <div className="space-y-2">
           <div className="h-2 w-full bg-gray-100 rounded-full" />
           <div className="h-2 w-3/4 bg-gray-100 rounded-full" />
        </div>
      </motion.div>

      {/* Main Stylized Character Avatar */}
      <div className="absolute inset-0 flex items-center justify-center">
         <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8 }}
           className="relative w-80 h-80"
         >
            {/* Soft Shadow Base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-black/5 blur-2xl rounded-full" />
            
            {/* The "3D" Character Placeholder (Stylized Shapes) */}
            <div className="absolute inset-0 bg-[#5B21FF] rounded-full overflow-hidden shadow-inner">
               <div className="absolute top-1/4 left-1/4 w-full h-full bg-[#7C4DFF] rounded-full" />
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full" />
            </div>
            
            {/* Laptop Shape */}
            <motion.div 
              animate={{ rotateX: [10, 20, 10], rotateY: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-48 bg-gray-100 border-4 border-white rounded-2xl shadow-2xl flex items-center justify-center"
              style={{ perspective: 1000 }}
            >
               <div className="w-56 h-40 bg-[#111111] rounded-xl flex items-center justify-center">
                  <div className="w-12 h-12 rounded-lg bg-[#5B21FF] flex items-center justify-center">
                     <div className="w-6 h-6 bg-white rounded-full animate-pulse" />
                  </div>
               </div>
            </motion.div>
         </motion.div>
      </div>

      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 opacity-30">
         <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 blur-[100px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}
