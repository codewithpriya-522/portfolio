"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { landingPages } from "@/lib/landing-pages";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLandingPagesOpen, setMobileLandingPagesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-foreground/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-gradient">
          PRIYA.DEV
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.slice(0, 3).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          <MegaMenu />

          {navItems.slice(3).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <ThemeToggle />
            <Link href="https://github.com/codewithpriya-522" target="_blank">
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/priya-jana-aa7652240/" target="_blank">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="/Priya_Resume.pdf" target="_blank">
              <Button size="sm" className="rounded-full px-5">
                Resume
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-foreground/5 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Landing Pages Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileLandingPagesOpen(!mobileLandingPagesOpen)}
                  className="flex items-center justify-between text-lg font-medium py-2"
                >
                  Landing Pages
                  <ChevronDown className={cn("w-5 h-5 transition-transform", mobileLandingPagesOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {mobileLandingPagesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-3 pl-4 pt-2 border-l border-primary/20"
                    >
                      {landingPages.map((page) => (
                        <Link
                          key={page.id}
                          href={page.liveUrl || "#"}
                          className="text-sm text-muted-foreground hover:text-primary py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {page.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.slice(3).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <hr className="border-foreground/5" />
              <div className="flex items-center gap-6 py-2">
                <Link href="https://github.com/codewithpriya-522" target="_blank">
                  <Github className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://www.linkedin.com/in/priya-jana-aa7652240/" target="_blank">
                  <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="mailto:codewithpriya522@gmail.com">
                  <Mail className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>

              <Button className="w-full">Resume</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
