"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      price: "$0",
      description: "Perfect for beginners exploring AI analytics.",
      features: ["Up to 5 assets", "Daily updates", "Community support", "Basic analytics", "Email support"],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Professional Plan",
      price: "$129",
      description: "For active traders who need real-time data.",
      features: ["Unlimited assets", "Real-time tracking", "Predictive alerts", "Priority support", "Advanced API access", "Custom dashboards"],
      cta: "Try 7 Days Free",
      highlight: true,
    },
    {
      name: "Enterprise Plan",
      price: "$199",
      description: "Custom solutions for large businesses and funds.",
      features: ["All Pro features", "Custom AI models", "Dedicated account manager", "24/7 Phone support", "SLA guarantees", "White-label options"],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 px-6 relative" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Power Your Trading Strategy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Choose the right plan to scale your analytics and stay ahead of the market.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative p-8 rounded-[2.5rem] border border-white/5 bg-slate-900/40 backdrop-blur-sm flex flex-col transition-all duration-500",
                plan.highlight && "ring-2 ring-blue-500/50 bg-blue-500/[0.05] shadow-[0_0_80px_-12px_rgba(59,130,246,0.3)] scale-105 z-10"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-blue-500 text-white text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-blue-500/40">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-slate-500 text-sm font-medium">/month</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
              </div>
              
              <ul className="space-y-5 mb-12 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlight ? "default" : "outline"}
                className={cn(
                  "w-full rounded-2xl h-14 font-bold text-base transition-all duration-300",
                  plan.highlight 
                    ? "bg-white text-black hover:bg-slate-200 hover:scale-[1.02]" 
                    : "bg-transparent border-white/10 text-white hover:bg-white/5 hover:border-white/20"
                )}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
