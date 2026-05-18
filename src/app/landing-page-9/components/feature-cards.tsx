"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FeatureCards() {
  const cards = [
    {
      title: "Vivid UI",
      label: "NEWS",
      className: "bg-gradient-to-br from-[#5B21FF] to-[#7C4DFF] text-white",
      visual: <div className="w-full h-full bg-white/10 rounded-2xl border border-white/20 p-4">
        <div className="h-2 w-1/2 bg-white/20 rounded-full mb-4" />
        <div className="flex gap-2">
           <div className="w-8 h-8 rounded bg-white/30" />
           <div className="w-8 h-8 rounded bg-white/10" />
        </div>
      </div>,
      delay: 0,
    },
    {
      title: "Pure Motion",
      label: "SYSTEM",
      className: "bg-white text-[#111111]",
      visual: <div className="relative w-full h-full flex items-center justify-center">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="w-24 h-24 border-4 border-[#FFBD2E] border-dashed rounded-full flex items-center justify-center"
         >
            <div className="w-12 h-12 bg-[#FFBD2E] rounded-full shadow-lg" />
         </motion.div>
      </div>,
      delay: 0.1,
    },
    {
      title: "Deep Space",
      label: "PASSWORD",
      className: "bg-gradient-to-br from-[#111111] to-[#222222] text-white",
      visual: <div className="relative w-full h-full overflow-hidden rounded-2xl">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(91,33,255,0.4),transparent_70%)]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#5B21FF] rounded-full blur-xl animate-pulse" />
         <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-pink-500 rounded-full blur-lg" />
      </div>,
      delay: 0.2,
    },
    {
      title: "Clean Design",
      label: "CAMERA",
      className: "bg-white text-[#111111]",
      visual: <div className="w-full h-full flex flex-col gap-3 p-4">
         <div className="h-2 w-3/4 bg-gray-100 rounded-full" />
         <div className="h-2 w-1/2 bg-gray-100 rounded-full" />
         <div className="flex-1 bg-gray-50 rounded-lg border border-gray-100" />
      </div>,
      delay: 0.3,
    },
  ];

  return (
    <section className="px-8 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: card.delay }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={cn(
              "relative h-[400px] p-8 rounded-[28px] shadow-2xl flex flex-col justify-between overflow-hidden group border border-transparent",
              card.className,
              card.className === "bg-white text-[#111111]" && "border-gray-100"
            )}
          >
            <div className="flex justify-between items-start">
               <span className="text-xs font-bold tracking-widest uppercase opacity-60">{card.label}</span>
               <div className="w-8 h-8 rounded-full bg-current opacity-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-current" />
               </div>
            </div>
            
            <div className="flex-1 my-8">
               {card.visual}
            </div>
            
            <div>
               <h3 className="text-2xl font-bold tracking-tight">{card.title}</h3>
               <div className="mt-2 flex items-center gap-2 opacity-60">
                  <div className="h-1 w-8 bg-current rounded-full" />
                  <span className="text-xs font-medium">Explore Project</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
