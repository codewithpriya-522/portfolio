"use client";

import React from "react";
import { motion } from "framer-motion";

const Twitter = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Rivera",
      handle: "@arivera_trades",
      text: "Luminal has completely changed how I track my portfolio. The predictive alerts are scary accurate. It's like having a quant team in my pocket.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      name: "Sarah Chen",
      handle: "@sarah_c",
      text: "The cleanest UI I've seen in the fintech space. Period. It feels like the future of trading and asset management.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Marcus Thorne",
      handle: "@m_thorne",
      text: "Finally, a platform that understands multi-chain complexity and simplifies it for the user. Connection was seamless.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    },
    {
      name: "Elena Rodriguez",
      handle: "@elena_fin",
      text: "The Bento Grid layout is so intuitive. Everything I need is right where I expect it to be. High-end design meets high-end tech.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
    },
    {
      name: "Jordan Smith",
      handle: "@j_smith_dev",
      text: "As a developer, I appreciate the attention to detail. The animations are buttery smooth and the API is robust.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    },
    {
      name: "Sophia Williams",
      handle: "@sophia_w",
      text: "Been using Luminal for 3 months now. My asset growth has been consistent thanks to the AI-driven insights and risk management.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    },
  ];

  return (
    <section className="py-24 px-6 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Trusted by many users
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400"
          >
            Join over 50,000+ traders and businesses worldwide.
          </motion.p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="break-inside-avoid p-6 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border border-white/10" />
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.handle}</div>
                </div>
                <Twitter className="w-4 h-4 text-blue-400 ml-auto" />
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">&quot;{t.text}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
