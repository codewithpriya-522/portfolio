"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, LineChart, Coins, Bell, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function Features() {
  const features = [
    {
      title: "Unified asset overview",
      description: "Track all your holdings in one place with high-fidelity visualization and real-time reconciliation.",
      icon: <LayoutGrid className="w-6 h-6 text-blue-400" />,
      className: "md:col-span-2 md:row-span-2",
      bg: "bg-blue-600/10",
      delay: 0,
    },
    {
      title: "Real-time tracking",
      description: "Live crypto and stock updates with millisecond latency.",
      icon: <LineChart className="w-6 h-6 text-violet-400" />,
      className: "md:col-span-1 md:row-span-1",
      bg: "bg-violet-600/10",
      delay: 0.1,
    },
    {
      title: "Multi-chain support",
      description: "Connect to 40+ networks seamlessly.",
      icon: <Coins className="w-6 h-6 text-emerald-400" />,
      className: "md:col-span-1 md:row-span-1",
      bg: "bg-emerald-600/10",
      delay: 0.2,
    },
    {
      title: "Cross-platform sync",
      description: "Native apps for iOS, Android, and Desktop.",
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      className: "md:col-span-1 md:row-span-1",
      bg: "bg-indigo-600/10",
      delay: 0.15,
    },
    {
      title: "Predictive price alerts",
      description: "AI models predict volatility before it happens with uncanny accuracy.",
      icon: <Bell className="w-6 h-6 text-amber-400" />,
      className: "md:col-span-2 md:row-span-1",
      bg: "bg-amber-600/10",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Simple, yet powerful features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Everything you need to manage your assets at scale, powered by advanced artificial intelligence.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              className={cn(
                "group relative p-8 rounded-[2.5rem] border border-white/5 bg-slate-900/40 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between",
                feature.className
              )}
            >
              <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[80px] -z-10", feature.bg)}></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 text-white ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">{feature.description}</p>
              </div>

              <div className="relative h-32 w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40 p-4 mt-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent"></div>
                {i === 0 && <AssetOverviewMockup />}
                {i === 1 && <RealTimeMockup />}
                {i === 2 && <ChainMockup />}
                {i === 3 && <PlatformMockup />}
                {i === 4 && <AlertMockup />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AssetOverviewMockup() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="h-4 w-32 bg-white/10 rounded-full"></div>
        <div className="h-4 w-12 bg-blue-500/20 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-16 bg-white/5 rounded-xl border border-white/5"></div>
        <div className="h-16 bg-white/5 rounded-xl border border-white/5"></div>
      </div>
    </div>
  );
}

function RealTimeMockup() {
  return (
    <div className="flex items-end gap-1 h-full pt-4">
      {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
        <div key={i} className="flex-1 bg-violet-500/30 rounded-t-sm" style={{ height: `${h}%` }}></div>
      ))}
    </div>
  );
}

function ChainMockup() {
  return (
    <div className="flex flex-wrap gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20"></div>
        </div>
      ))}
    </div>
  );
}

function PlatformMockup() {
  return (
    <div className="flex justify-center gap-4 pt-4">
       <div className="w-12 h-20 rounded-lg bg-white/5 border border-white/10 flex flex-col p-2 gap-2">
          <div className="h-1 w-full bg-white/20 rounded-full"></div>
          <div className="h-8 w-full bg-white/10 rounded-md"></div>
       </div>
       <div className="w-20 h-20 rounded-lg bg-white/5 border border-white/10 flex flex-col p-2 gap-2">
          <div className="h-1 w-1/2 bg-white/20 rounded-full"></div>
          <div className="h-10 w-full bg-white/10 rounded-md"></div>
       </div>
    </div>
  );
}

function AlertMockup() {
  return (
    <div className="space-y-2">
      {[1, 2].map((i) => (
        <div key={i} className="flex items-center gap-2 p-1.5 rounded-lg bg-white/5 border border-white/5">
          <div className="w-6 h-6 rounded bg-amber-500/20"></div>
          <div className="flex-1 space-y-1">
            <div className="h-1.5 w-16 bg-white/10 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
