"use client";

import React from "react";
import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      text: "We dive deep into your brand, audience, and goals to build a foundation for success."
    },
    {
      num: "02",
      title: "Strategy",
      text: "Crafting a clear roadmap and defining the core message that will drive the creative process."
    },
    {
      num: "03",
      title: "Design",
      text: "Bringing the strategy to life with high-end visuals and intuitive user experiences."
    },
    {
      num: "04",
      title: "Delivery",
      text: "Launching the final product and ensuring it performs flawlessly in the real world."
    }
  ];

  return (
    <section className="px-8 py-24 md:py-32 bg-[#111111] text-white rounded-[4rem] mx-4 md:mx-8" id="system">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            How we <span className="text-[#5B21FF]">work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            A streamlined process designed to deliver exceptional results without the friction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="text-5xl font-black text-white/5 mb-4 group-hover:text-[#5B21FF]/20 transition-colors duration-500">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {step.text}
              </p>
              
              <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 overflow-hidden">
                <motion.div 
                   initial={{ scaleX: 0 }}
                   whileInView={{ scaleX: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: i * 0.2 }}
                   className="h-full w-full bg-[#5B21FF] origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
