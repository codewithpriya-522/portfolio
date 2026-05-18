"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "How accurate are the AI price predictions?",
      a: "Our models maintain a 94% historical accuracy rate across major assets, using thousands of real-time data points, social sentiment analysis, and macro-economic factors.",
    },
    {
      q: "Which blockchains do you support?",
      a: "We currently support over 40 chains including Ethereum, Solana, Bitcoin, Polygon, and all major Layer 2 networks like Arbitrum, Optimism, and Base.",
    },
    {
      q: "Is my data secure with Luminal?",
      a: "Security is our top priority. We use bank-grade AES-256 encryption. We never store your private keys; we only use read-only API access to your accounts.",
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Absolutely. You can cancel, upgrade, or downgrade your plan at any time through your dashboard. There are no long-term contracts or hidden cancellation fees.",
    },
    {
      q: "Does Luminal support institutional accounts?",
      a: "Yes, our Enterprise plan is specifically designed for funds, institutions, and large-scale businesses with advanced security and multi-user management.",
    },
    {
      q: "How does the predictive alert system work?",
      a: "Our system monitors market volatility patterns 24/7. When a high-probability pattern is detected, you receive an instant notification via web, mobile, or API.",
    },
  ];

  return (
    <section className="py-24 px-6 relative" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Everything You Need to Know
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400"
          >
            Common questions about tools, pricing, and security.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="p-1 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-colors"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-bold text-white pr-4">{faq.q}</span>
                <motion.div 
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                >
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-sm text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
