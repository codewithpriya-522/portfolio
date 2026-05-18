"use client";

import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { FeatureCards } from "./components/feature-cards";
import { Services } from "./components/services";
import { Process } from "./components/process";
import { Contact } from "./components/contact";

export default function LandingPage9() {
  return (
    <div className="min-h-screen bg-[#E9E9EC] selection:bg-[#5B21FF]/30 font-sans overflow-x-hidden">
      {/* Background Decorative Blobs */}
      <BackgroundEffects />
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <FeatureCards />
          <Services />
          <Process />
          <Contact />
          
          <div className="px-8 pb-32">
             <div className="max-w-7xl mx-auto">
                <div className="w-full h-px bg-gray-200 mb-16" />
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                   <div className="max-w-xl">
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.1] mb-6">
                         Our workspace is a playground for innovation.
                      </h2>
                      <p className="text-[#555555] text-lg">
                         We believe in the power of minimal design and maximum impact. Our team of designers and engineers work together to craft digital products that stand the test of time.
                      </p>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-all">
                         <div className="w-4 h-4 border-r-2 border-b-2 border-[#111111] rotate-[135deg]" />
                      </div>
                      <div className="w-16 h-16 rounded-full bg-[#111111] flex items-center justify-center hover:bg-black cursor-pointer transition-all shadow-xl">
                         <div className="w-4 h-4 border-r-2 border-b-2 border-white -rotate-45" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full" />
      <div className="absolute top-[20%] left-[10%] w-[20%] h-[20%] bg-pink-500/5 blur-[100px] rounded-full" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="px-8 py-20 bg-white border-t border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded bg-[#5B21FF]" />
              <span className="text-xl font-bold tracking-tight text-[#111111]">Forma.co</span>
            </div>
            <p className="text-sm text-[#555555] leading-relaxed max-w-xs">
              We shape ideas into reality. A high-end digital agency focused on craftsmanship and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#111111] font-bold mb-6 text-sm uppercase tracking-widest">Studios</h4>
            <ul className="space-y-4 text-sm text-[#555555]">
              <li><a href="#" className="hover:text-[#5B21FF] transition-colors">New York</a></li>
              <li><a href="#" className="hover:text-[#5B21FF] transition-colors">London</a></li>
              <li><a href="#" className="hover:text-[#5B21FF] transition-colors">Berlin</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#111111] font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm text-[#555555]">
              <li><a href="#" className="hover:text-[#5B21FF] transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-[#5B21FF] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#5B21FF] transition-colors">Dribbble</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#111111] font-bold mb-6 text-sm uppercase tracking-widest">Work</h4>
            <ul className="space-y-4 text-sm text-[#555555]">
              <li><a href="#" className="hover:text-[#5B21FF] transition-colors">All Projects</a></li>
              <li><a href="#" className="hover:text-[#5B21FF] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#5B21FF] transition-colors">Archive</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-gray-50 text-xs text-gray-400">
          <p>© 2026 Forma Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#111111]">Privacy Policy</a>
            <a href="#" className="hover:text-[#111111]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
