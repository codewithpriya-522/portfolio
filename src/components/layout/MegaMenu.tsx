"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { landingPages } from "@/lib/landing-pages";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none",
          isOpen ? "text-primary" : "text-muted-foreground hover:text-primary"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Landing Pages
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 w-[90vw] max-w-5xl"
          >
            <div className="bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Premium Landing Pages
                  </h3>
                  <p className="text-sm text-muted-foreground">A collection of high-converting, responsive designs.</p>
                </div>
                <Link href="#projects">
                  <Button variant="ghost" size="sm" className="gap-2">
                    View All Projects <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Featured Project - Span 2x2 */}
                {landingPages.filter(p => p.featured).map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -5 }}
                    className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 min-h-[300px] md:min-h-full"
                  >
                    <Link href={project.liveUrl || "#"} className="absolute inset-0 z-10" />
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-primary/20 text-primary border-primary/20 hover:bg-primary/30 transition-colors px-3 py-1">
                          Featured
                        </Badge>
                        <Badge variant="outline" className="bg-background/50 backdrop-blur-md px-3 py-1">
                          {project.category}
                        </Badge>
                      </div>
                      <h4 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                      <p className="text-sm text-muted-foreground mb-6 line-clamp-2 max-w-md">{project.description}</p>
                      <div className="flex items-center justify-between mt-auto relative z-20">
                        <div className="flex gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-secondary border border-border">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link href={project.liveUrl || "#"}>
                          <Button size="sm" className="rounded-full gap-2 shadow-lg shadow-primary/20 group/btn">
                            Explore Case Study <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Other Projects */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {landingPages.filter(p => !p.featured).map((project, idx) => (
                    <motion.div
                      key={project.id}
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="relative group overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 min-h-[180px]"
                    >
                      <Link href={project.liveUrl || "#"} className="absolute inset-0 z-10" />
                      <div className="absolute inset-0 h-full w-full overflow-hidden">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
                      </div>
                      <div className="p-4 relative h-full flex flex-col justify-end">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{project.title}</h4>
                          <Badge variant="secondary" className="text-[9px] px-1.5 py-0 bg-primary/10 text-primary border-none">
                            {project.category}
                          </Badge>
                        </div>
                        <p className="text-[11px] text-muted-foreground line-clamp-1 mb-3">{project.description}</p>
                        <div className="flex items-center justify-between">
                           <div className="flex gap-1">
                            {project.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-secondary/50 border border-border">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <ArrowUpRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
