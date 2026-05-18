"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="px-8 py-24 md:py-32" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-bold tracking-tight text-[#111111] mb-8"
            >
              Let&apos;s build <br /> something <br /> great together
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[#555555] mb-12 max-w-md"
            >
              Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you within 24 hours.
            </motion.p>
            
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email us</span>
                <a href="mailto:hello@forma.co" className="text-2xl font-bold text-[#111111] hover:text-[#5B21FF] transition-colors">hello@forma.co</a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Visit us</span>
                <p className="text-2xl font-bold text-[#111111]">Brooklyn, New York</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[3rem] bg-white border border-gray-100 shadow-2xl shadow-gray-200/50"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111111]">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="h-14 px-6 rounded-2xl bg-gray-50 border border-transparent focus:border-[#5B21FF] focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111111]">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="h-14 px-6 rounded-2xl bg-gray-50 border border-transparent focus:border-[#5B21FF] focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#111111]">Project Details</label>
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="p-6 rounded-2xl bg-gray-50 border border-transparent focus:border-[#5B21FF] focus:bg-white transition-all outline-none resize-none"
                />
              </div>

              <Button className="w-full h-16 rounded-2xl bg-[#5B21FF] hover:bg-[#4a18e0] text-lg font-bold shadow-xl shadow-[#5B21FF]/20">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
