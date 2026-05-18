"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, LineChart } from "lucide-react";

export function DashboardPreview() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={containerRef} className="relative px-6 pb-24 overflow-hidden">
      <motion.div 
        style={{ rotateX, scale, opacity }}
        className="max-w-7xl mx-auto"
      >
        <div className="relative group perspective-1000">
          {/* Glowing background behind dashboard */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/80 backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20">
            {/* Window Header */}
            <div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-6 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
              </div>
              <div className="ml-4 h-6 w-48 md:w-64 rounded-md bg-white/5 border border-white/5"></div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6 md:p-10 grid grid-cols-12 gap-6">
              {/* Sidebar Metrics */}
              <div className="col-span-12 md:col-span-3 space-y-6">
                {[
                  { icon: <BarChart3 className="w-4 h-4 text-blue-400" />, label: "Total Volume", value: "$1,284,092", trend: "+12.5%", color: "blue" },
                  { icon: <LineChart className="w-4 h-4 text-emerald-400" />, label: "Monthly Growth", value: "+24.8%", trend: "+2.4%", color: "emerald" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-2xl bg-white/5 border border-white/5 p-5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-8 h-8 rounded-lg bg-${stat.color}-500/20 flex items-center justify-center`}>
                        {stat.icon}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">{stat.trend}</span>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">{stat.label}</div>
                      <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Main Chart */}
              <div className="col-span-12 md:col-span-9 rounded-2xl bg-white/5 border border-white/5 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h4 className="text-lg font-bold text-white">Performance Analytics</h4>
                    <p className="text-xs text-slate-500">Real-time predictive modeling active</p>
                  </div>
                  <div className="flex gap-2 p-1 bg-white/5 rounded-lg border border-white/5">
                    {["1W", "1M", "1Y"].map((t) => (
                      <button 
                        key={t} 
                        className={`px-4 py-1.5 rounded-md text-[10px] font-bold transition-all ${t === "1M" ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "text-slate-400 hover:text-white"}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Visual Chart Mockup */}
                <div className="flex-1 flex items-end gap-3 h-64">
                  {[35, 50, 40, 65, 50, 75, 90, 80, 100, 70, 85, 110, 95, 120, 110, 130].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(h / 140) * 100}%` }}
                      transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                      className="flex-1 min-w-[4px] relative group"
                    >
                      <div className="absolute inset-0 bg-blue-500/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="h-full w-full bg-gradient-to-t from-blue-600/10 via-blue-500/60 to-blue-400 rounded-t-full transition-all group-hover:from-blue-500 group-hover:to-blue-300" />
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-between border-t border-white/5 pt-6">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                    <span key={m} className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
