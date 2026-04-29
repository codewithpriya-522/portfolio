"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Layers, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Profile Image with modern stroke and glass effect */}
        <div className="mb-10 relative inline-block group">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/50 p-1 bg-background overflow-hidden">
            <img 
              src="/priya.jpg" 
              alt="Priya Jana" 
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400";
              }}
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-2">
          <Badge variant="secondary" className="h-5 py-0 px-2 text-[10px]">NEW</Badge>
          <span>Available for Frontend Roles</span>
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] md:leading-[1.05]">
          <span className="opacity-70 italic font-medium">Hi, I'm </span>
          <span className="text-gradient">Priya Jana</span> 
          <br className="hidden md:block" />
          <span className="opacity-70 text-4xl md:text-6xl">Front End Developer</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Building <span className="text-foreground font-semibold">responsive, accessible</span>, and high-performance web applications with 2+ years of experience in React.js, Angular, and Next.js.
        </p>


        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold group">
            Work Together
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold glass">
            View Projects
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
            <Zap className="w-6 h-6 text-yellow-500" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Performant</span>
          </div>
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
            <Layers className="w-6 h-6 text-blue-500" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Scalable</span>
          </div>
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
            <Code2 className="w-6 h-6 text-green-500" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Clean Code</span>
          </div>
          <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default text-primary">
            <Badge variant="outline" className="border-primary/50 text-primary">UI/UX</Badge>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Polished</span>
          </div>
        </div>
      </div>
    </section>
  );
}
