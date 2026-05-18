"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Paintbrush, 
  Code2, 
  Megaphone, 
  Layers, 
  Smartphone, 
  Globe 
} from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Brand Identity",
      description: "We craft unique visual languages that resonate with your audience and define your market presence.",
      icon: <Paintbrush className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Web Development",
      description: "High-performance, scalable websites built with the latest technologies and best practices.",
      icon: <Code2 className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "UI/UX Design",
      description: "User-centric interfaces designed to be intuitive, accessible, and visually stunning.",
      icon: <Layers className="w-6 h-6" />,
      color: "bg-pink-100 text-pink-600"
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that drive engagement, growth, and measurable results for your brand.",
      icon: <Megaphone className="w-6 h-6" />,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile experiences that put your brand in the palm of your hand.",
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Global Strategy",
      description: "Helping brands expand their reach and impact across international markets with data-driven insights.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="px-8 py-24 md:py-32" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-[#111111] mb-6"
            >
              Services that move <br /> the needle
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[#555555]"
            >
              We don&apos;t just make things look pretty. We build strategic assets that solve real business challenges.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-[#5B21FF]" />
              </div>
              <div className="px-6 h-12 rounded-full border border-gray-200 flex items-center text-sm font-bold">
                 View All Services
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2rem] bg-white border border-gray-100 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">{service.title}</h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center text-[#5B21FF] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <div className="ml-2 w-4 h-[2px] bg-[#5B21FF]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
