"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, Menu, X, Star, Zap, Globe, ShieldCheck, 
  ChevronRight, Mail, 
  Users, BookOpen, Target, Briefcase, Award, Sparkles,
  Layout
} from "lucide-react"
import { ShinyText } from "@/app/landing-page-7/components/shiny-text"

const Facebook = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Instagram = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Twitter = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;

// --- Sub-components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl h-[72px] flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8 flex items-center justify-center border-2 border-white rounded-full">
          <div className="w-4 h-4 bg-white rounded-full" />
        </div>
        <span className="text-white font-medium text-lg tracking-tight">DesignPro</span>
      </div>

      <div className="hidden lg:flex items-center bg-black/20 backdrop-blur-md border border-gray-700 rounded-full px-8 py-2.5 gap-8">
        {["Home", "About Us", "Courses", "Instructors", "Testimonials", "Blog"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="text-white/80 hover:text-white text-sm transition-all duration-300"
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm transition-all duration-300"
        >
          Contact us <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[84px] left-0 w-full bg-black/90 backdrop-blur-2xl border border-gray-700 rounded-3xl p-6 lg:hidden flex flex-col gap-4"
          >
            {["Home", "About Us", "Courses", "Instructors", "Testimonials", "Blog", "Contact us"].map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white text-lg transition-all duration-300 px-4 py-2 border-b border-white/5"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const SectionHeader = ({ label, title, subtitle }: { label: string, title: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16 md:mb-24">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="uppercase tracking-[0.3em] text-[#64CEFB] text-xs md:text-sm font-medium mb-4 block"
    >
      {label}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
)

// --- Page Sections ---

const StatsRibbon = () => (
  <section className="relative z-20 border-y border-white/10 bg-black py-16">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
      {[
        { label: "Avg Salary Hike", value: "$140k+", icon: Briefcase },
        { label: "Placement Rate", value: "95%", icon: Target },
        { label: "Hiring Partners", value: "300+", icon: Users },
        { label: "Alumni Network", value: "1.2M+", icon: Globe },
      ].map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`flex flex-col items-center text-center px-4 ${i !== 3 ? "md:border-r border-white/10" : ""}`}
        >
          <stat.icon className="w-5 h-5 text-white/40 mb-4" />
          <span className="text-3xl md:text-4xl font-medium text-white mb-2">{stat.value}</span>
          <span className="text-xs md:text-sm text-white/40 uppercase tracking-widest">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
)

const CourseTracksGrid = () => {
  const tracks = [
    { 
      title: "UX & Product Design", 
      desc: "Master the end-to-end process from research to high-fidelity prototyping and testing.", 
      icon: Layout, 
      color: "#64CEFB",
      className: "md:col-span-2 md:row-span-2"
    },
    { 
      title: "Design Systems", 
      desc: "Build scalable, accessible components and design tokens for large products.", 
      icon: Zap, 
      color: "#A3FFB0" 
    },
    { 
      title: "Product Strategy", 
      desc: "Learn to align design decisions with business goals and market needs.", 
      icon: Target, 
      color: "#FFD54F" 
    },
    { 
      title: "Visual Mastery", 
      desc: "Elevate your craft with advanced typography, layout, and color theory.", 
      icon: Sparkles, 
      color: "#F06292",
      className: "md:col-span-2"
    },
  ]

  return (
    <section id="courses" className="relative z-20 py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          label="Our Programs" 
          title={<>Specialized Tracks for<br /><span className="text-white/40">Future Product Leaders.</span></>}
          subtitle="Whether you're starting out or scaling up, our curriculum is designed to push your craft to the global elite level."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.06] transition-all duration-500 scroll-mt-32 ${track.className || ""}`}
            >
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundColor: `${track.color}15` }}
              >
                <track.icon style={{ color: track.color }} className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">{track.title}</h3>
              <p className="text-white/40 leading-relaxed mb-8">{track.desc}</p>
              
              <div className="flex items-center gap-2 text-white/60 text-xs font-medium uppercase tracking-widest group-hover:text-white transition-colors">
                View Curriculum <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative Glow */}
              <div 
                className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full blur-[64px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: track.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const MentorsSection = () => {
  const mentors = [
    { name: "Sarah Chen", role: "Design Lead", company: "Airbnb", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { name: "Marcus Thorne", role: "Sr. Product Designer", company: "Google", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
    { name: "Elena Rossi", role: "Head of Design", company: "Apple", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena" },
  ]

  return (
    <section id="instructors" className="relative z-20 py-24 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          label="Elite Mentorship" 
          title={<>Learn from the Best in<br /><span className="text-white/40">the Modern Industry.</span></>}
          subtitle="Our instructors aren't just teachers—they are active leaders at the companies shaping the digital world."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-full bg-white/10 mb-6 overflow-hidden border border-white/20">
                <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-medium text-white mb-1">{mentor.name}</h4>
              <p className="text-white/40 text-sm mb-4">{mentor.role}</p>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full w-fit border border-white/10">
                <span className="text-[10px] text-white/60 uppercase tracking-tighter">at</span>
                <span className="text-xs font-medium text-white">{mentor.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const LearningJourney = () => {
  const steps = [
    { title: "Immersive Foundations", desc: "Build a rock-solid understanding of visual hierarchy, accessibility, and user psychology.", icon: BookOpen },
    { title: "Direct Mentorship", desc: "Weekly 1:1 sessions with industry leads to review your work and refine your process.", icon: Users },
    { title: "Capstone Execution", desc: "Deliver a high-impact product solution that solves a real-world business challenge.", icon: Award },
    { title: "Career Acceleration", desc: "Direct referrals, portfolio review, and interview prep with elite hiring managers.", icon: Zap },
  ]

  return (
    <section className="relative z-20 py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-[#64CEFB]/10 rounded-full blur-[120px]"
            />
            <div className="relative border border-white/10 rounded-[40px] overflow-hidden bg-white/5 backdrop-blur-3xl p-12">
              <div className="space-y-16 relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />
                {steps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-12 relative"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black z-10 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-medium text-white mb-3">{step.title}</h4>
                      <p className="text-white/40 leading-relaxed text-lg">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionHeader 
              label="The Transformation" 
              title={<>Your Path from Creative to<br />Product Leader.</>}
              subtitle="We don't just teach software; we build the mindset, craft, and strategy required to lead design at the world's most innovative companies."
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#64CEFB]/5 border border-[#64CEFB]/20 rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="text-[#64CEFB] w-8 h-8" />
                <h4 className="text-xl font-medium text-white">Guaranteed Transformation</h4>
              </div>
              <p className="text-white/60 mb-8 leading-relaxed">
                Our program is backed by a placement commitment. If you don't land a role within 6 months of graduation, we work with you for free until you do.
              </p>
              <button className="flex items-center gap-2 text-white font-medium hover:gap-3 transition-all duration-300">
                Learn about Placement <ArrowRight className="w-4 h-4 text-[#64CEFB]" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer id="contact" className="relative z-20 bg-black pt-32 pb-16 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="relative w-8 h-8 flex items-center justify-center border-2 border-white rounded-full">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            <span className="text-white font-medium text-xl tracking-tight">DesignPro</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
            Transforming talented creatives into the world's leading product designers through elite mentorship and immersive learning.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-[#64CEFB]/20 hover:border-[#64CEFB]/50 transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-8 uppercase tracking-widest text-xs">Programs</h4>
          <ul className="space-y-4 text-sm text-white/40">
            {["UX & Product Design", "Design Systems", "Product Strategy", "Visual Mastery", "Enterprise Training"].map(link => (
              <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-8 uppercase tracking-widest text-xs">Resources</h4>
          <ul className="space-y-4 text-sm text-white/40">
            {["Design Blog", "Success Stories", "Scholarships", "Hire Graduates", "FAQs"].map(link => (
              <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-8 uppercase tracking-widest text-xs">Next Enrollment</h4>
          <p className="text-white/40 text-sm mb-8">Get notified when seats open for our Summer 2026 cohort.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-[#64CEFB] transition-colors"
            />
            <button className="absolute right-2 top-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-white/20 text-[10px] uppercase tracking-widest">© 2026 DesignPro Global Education. All rights reserved.</p>
        <div className="flex gap-12 text-white/20 text-[10px] uppercase tracking-widest">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Refunds</a>
          <a href="#" className="hover:text-white">Security</a>
        </div>
      </div>
    </div>
  </footer>
)

// --- Main Page ---

export default function DesignProHero() {
  return (
    <main id="home" className="relative w-full bg-black font-sans selection:bg-[#64CEFB] selection:text-black">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-[1] bg-black/40" />

        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col">
          
          {/* Top Content Row */}
          <div className="mt-40 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-md text-white/80 text-sm md:text-base leading-relaxed"
            >
              We deliver transformative programs that empower emerging product designers with cutting-edge expertise and vision to thrive globally.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white/80 text-sm md:text-base lg:text-right font-medium"
            >
              8000+ Talented Designers Launched !
            </motion.p>
          </div>

          {/* Center Hero Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="uppercase tracking-tight text-white/80 text-xs md:text-sm mb-6"
            >
              Seats for Next Program Opening Soon
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium leading-[0.85] tracking-tighter text-white"
            >
              Become<br />
              <ShinyText text="Product Leader." />
            </motion.h1>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-12"
            >
              <button className="group relative flex items-center gap-2 bg-black hover:bg-neutral-900 text-white border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300">
                Apply for Next Enrollment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </section>

      {/* Expansion Sections */}
      <StatsRibbon />
      <CourseTracksGrid />
      <MentorsSection />
      <LearningJourney />
      
      {/* Immersive Testimonial / Final CTA */}
      <section id="testimonials" className="relative py-32 md:py-48 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#64CEFB]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
            </div>
            <h2 className="text-4xl md:text-7xl font-medium text-white tracking-tight mb-12 italic">
              "The most intensive and rewarding experience of my career."
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mb-4" />
              <p className="text-white font-medium text-lg">James Wilson</p>
              <p className="text-white/40 text-sm">Product Designer @ Meta</p>
            </div>
            
            <div className="mt-20 flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-black px-12 py-5 rounded-full text-xl font-medium hover:scale-105 transition-transform">
                Start Your Journey
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full text-xl font-medium hover:bg-white/10 transition-all">
                Talk to an Advisor
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
