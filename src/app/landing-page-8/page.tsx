"use client";

import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { DashboardPreview } from "./components/dashboard-preview";
import { Features } from "./components/features";
import { Testimonials } from "./components/testimonials";
import { Pricing } from "./components/pricing";
import { FAQ } from "./components/faq";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";

export default function LandingPage8() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-200 selection:bg-blue-500/30 font-sans overflow-x-hidden">
      {/* Ambient Background Elements */}
      <BackgroundEffects />
      
      <Navbar />
      
      <main>
        <Hero />
        <DashboardPreview />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}

function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-blue-400/5 blur-[100px] rounded-full" />
      
      {/* Tiny star/noise particles for depth */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      
      {/* Moving gradients */}
      <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>
    </div>
  );
}
