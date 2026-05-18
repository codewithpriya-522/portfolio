"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, Menu, X, Star, Activity, Scissors, Stethoscope, 
  Utensils, Heart, Home, ShoppingBag, PlusCircle, ShieldCheck, 
  Globe, Zap, ChevronRight, Mail 
} from "lucide-react"
import { ShinyText } from "@/app/landing-page-6/components/shiny-text"

const Facebook = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Instagram = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Twitter = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl h-[72px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8 flex items-center justify-center border-2 border-white rounded-full">
          <div className="w-4 h-4 bg-white rounded-full" />
        </div>
        <span className="text-white font-medium text-lg tracking-tight">PetSphere</span>
      </div>

      {/* Center Links */}
      <div className="hidden lg:flex items-center gap-8">
        {["Home", "Services", "Doctors", "Grooming", "Diet Plans", "Testimonials", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="text-white/70 hover:text-white text-sm transition-all duration-300"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right Action */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
          Book Appointment
          <ArrowRight className="w-4 h-4" />
        </button>
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[84px] left-0 w-full bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 lg:hidden flex flex-col gap-4"
          >
            {["Home", "Services", "Doctors", "Grooming", "Diet Plans", "Testimonials", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white text-lg transition-all duration-300 px-4 py-2 border-b border-white/5"
              >
                {link}
              </a>
            ))}
            <button className="mt-4 flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-full text-base font-medium">
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: 1, 
      y: [0, -10, 0],
    }}
    transition={{
      opacity: { delay, duration: 0.5 },
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }
    }}
    className={`absolute z-10 p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl ${className}`}
  >
    {children}
  </motion.div>
)

const SectionHeader = ({ label, title, subtitle }: { label: string, title: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16 md:mb-24">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="uppercase tracking-[0.3em] text-[#7AE7FF] text-xs md:text-sm mb-4 block"
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
        className="text-white/60 text-lg md:text-xl max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
)

// --- Page Sections ---

const StatsRibbon = () => (
  <section className="relative z-20 border-y border-white/10 bg-black py-12">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
      {[
        { label: "Online Consultations", value: "50k+", icon: Stethoscope },
        { label: "Expert Caregivers", value: "1,200+", icon: ShieldCheck },
        { label: "Cities Covered", value: "24", icon: Globe },
        { label: "Customer Satisfaction", value: "4.9/5", icon: Star },
      ].map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`flex flex-col items-center text-center px-4 ${i !== 3 ? "md:border-r border-white/10" : ""}`}
        >
          <stat.icon className="w-5 h-5 text-white/40 mb-3" />
          <span className="text-3xl md:text-4xl font-medium text-white mb-1">{stat.value}</span>
          <span className="text-xs md:text-sm text-white/40 uppercase tracking-widest">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
)

const ServicesGrid = () => {
  const services = [
    { 
      id: "doctors",
      title: "Online Vet Consultation", 
      desc: "Instant access to certified veterinarians anytime, anywhere.", 
      icon: Stethoscope, 
      color: "#7AE7FF",
      className: "md:col-span-2 md:row-span-2"
    },
    { 
      id: "grooming",
      title: "Pet Grooming", 
      desc: "Professional spa treatments at your doorstep.", 
      icon: Scissors, 
      color: "#A3FFB0" 
    },
    { 
      id: "diet-plans",
      title: "AI Diet Plans", 
      desc: "Precision nutrition tailored to your pet's needs.", 
      icon: Utensils, 
      color: "#FFC107" 
    },
    { 
      title: "Emergency Care", 
      desc: "24/7 rapid response for critical situations.", 
      icon: PlusCircle, 
      color: "#FF5252",
      className: "md:col-span-2"
    },
    { 
      title: "Pet Home Care", 
      desc: "Trusted sitters providing love and safety.", 
      icon: Home, 
      color: "#BA68C8" 
    },
    { 
      title: "Training Sessions", 
      desc: "Modern techniques for a well-behaved companion.", 
      icon: Activity, 
      color: "#4FC3F7" 
    },
    { 
      title: "Adoption & Breeding", 
      desc: "Connecting you with your future best friend.", 
      icon: Heart, 
      color: "#F06292" 
    },
    { 
      title: "Premium Store", 
      desc: "Curated accessories and health essentials.", 
      icon: ShoppingBag, 
      color: "#81C784" 
    },
  ]

  return (
    <section id="services" className="relative z-20 py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          label="Our Ecosystem" 
          title={<>Everything Your Pet<br /><span className="text-white/40">Ever Needs.</span></>}
          subtitle="From emergency medical care to specialized nutrition and grooming, PetSphere is the unified platform for modern pet parenting."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.06] transition-all duration-500 scroll-mt-32 ${service.className || ""}`}
            >
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon style={{ color: service.color }} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8">{service.desc}</p>
              
              <div className="flex items-center gap-2 text-white/60 text-xs font-medium uppercase tracking-widest group-hover:text-white transition-colors">
                Learn More <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative Glow */}
              <div 
                className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full blur-[64px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ProcessTimeline = () => {
  const steps = [
    { title: "Discover Experts", desc: "Browse our network of certified vets, groomers, and trainers vetted for quality.", icon: Globe },
    { title: "Smart Matching", desc: "Our AI matches your pet's profile with the perfect specialist for their needs.", icon: Zap },
    { title: "Seamless Care", desc: "Experience premium care at home or online with real-time tracking and support.", icon: ShieldCheck },
  ]

  return (
    <section className="relative z-20 py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              label="The Experience" 
              title={<>How PetSphere<br />Works for You.</>}
              subtitle="We've streamlined every step of pet care, so you can spend more time on what matters—bonding with your furry friend."
            />
            
            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white font-medium">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">{step.title}</h4>
                    <p className="text-white/40 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-2 text-[#7AE7FF] font-medium border-b border-[#7AE7FF]/30 pb-1 hover:border-[#7AE7FF] transition-all"
            >
              Get Started Now <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="relative aspect-square">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-br from-[#7AE7FF]/20 to-[#A3FFB0]/20 rounded-3xl blur-[120px]"
            />
            <div className="relative h-full w-full border border-white/10 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-3xl flex items-center justify-center">
              <div className="p-12 text-center">
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <div className="absolute inset-0 bg-[#7AE7FF] rounded-full animate-ping opacity-20" />
                  <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center">
                    <Heart className="w-12 h-12 text-black" fill="currentColor" />
                  </div>
                </div>
                <h3 className="text-3xl font-medium text-white mb-4 italic">"Care that feels like family."</h3>
                <p className="text-white/60">Dedicated to every heartbeat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Testimonials = () => {
  const items = [
    { name: "Priya Sharma", pet: "Golden Retriever", quote: "PetSphere's online vet saved us during an emergency. The response was instant and professional.", rating: 5 },
    { name: "Aditya Goel", pet: "Persian Cat", quote: "The home grooming service is a game changer. My cat was so relaxed, and the results were stunning.", rating: 5 },
    { name: "Meera Iyer", pet: "Beagle", quote: "The AI diet plan has significantly improved my pet's energy levels and coat health. Highly recommend!", rating: 5 },
  ]

  return (
    <section id="testimonials" className="relative z-20 py-24 md:py-32 bg-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          label="Voices of Trust" 
          title={<>Loved by Pet Parents<br /><span className="text-white/40">Across the Nation.</span></>}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-white/80 text-lg italic leading-relaxed mb-8">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full" />
                <div>
                  <h4 className="text-white font-medium">{item.name}</h4>
                  <p className="text-white/40 text-sm">{item.pet} Parent</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer id="contact" className="relative z-20 bg-black pt-24 pb-12 border-t border-white/10 scroll-mt-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-8 h-8 flex items-center justify-center border-2 border-white rounded-full">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            <span className="text-white font-medium text-lg tracking-tight">PetSphere</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            The next-generation pet wellness platform. Trusted by thousands of parents to deliver world-class care and personalized experiences.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Platform</h4>
          <ul className="space-y-4 text-sm text-white/40">
            {["Home", "Services", "Doctors", "Grooming", "Diet Plans"].map(link => (
              <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-white/40">
            {["About Us", "Careers", "Press Kit", "Privacy Policy", "Terms of Service"].map(link => (
              <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Join the Community</h4>
          <p className="text-white/40 text-sm mb-6">Subscribe for pet care tips and platform updates.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#7AE7FF]/50 transition-colors"
            />
            <button className="absolute right-2 top-1.5 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/20 text-xs">© 2026 PetSphere Technologies Inc. All rights reserved.</p>
        <div className="flex gap-8 text-white/20 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-white">Legal</a>
          <a href="#" className="hover:text-white">Security</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
)

// --- Main Page ---

export default function PetSphereLanding() {
  return (
    <main id="home" className="relative w-full bg-black font-sans selection:bg-[#7AE7FF] selection:text-black">
      
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
            src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 z-[1] bg-black/70" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60" />
        
        {/* Animated Grain */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] mix-blend-overlay">
          <div className="absolute inset-[-100%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain" />
        </div>

        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>

        <Navbar />

        {/* Hero Content */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          
          {/* Top Content Row */}
          <div className="absolute top-32 left-0 w-full px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-md text-sm md:text-base text-white/75 leading-relaxed"
            >
              Trusted by pet parents to deliver world-class healthcare, grooming, nutrition, and personalized wellness experiences for their furry companions.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm md:text-base text-white/75 md:text-right"
            >
              12,000+ Happy Pets<br />Served Across India
            </motion.p>
          </div>

          <div className="flex flex-col items-center text-center mt-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="uppercase tracking-[0.3em] text-white/70 text-xs md:text-sm mb-6"
            >
              NEXT GEN PET WELLNESS PLATFORM
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-5xl md:text-7xl xl:text-9xl font-medium leading-[0.85] tracking-tighter text-white"
            >
              Care Beyond<br />
              <ShinyText text="Ordinary." />
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 mt-12"
            >
              <button className="group relative flex items-center gap-2 bg-black text-white border border-white/20 px-8 py-4 rounded-full text-lg font-medium overflow-hidden hover:border-white transition-all duration-300">
                <span className="relative z-10">Book Vet Consultation</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300">
                Explore Services
              </button>
            </motion.div>
          </div>

          {/* Floating Cards (Hero Only) */}
          <FloatingCard className="top-[25%] left-[5%] md:left-[10%] min-w-[200px]" delay={1.5}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#7AE7FF]/20 rounded-full flex items-center justify-center">
                <Stethoscope className="text-[#7AE7FF] w-5 h-5" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">24/7 Online Vet</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-white/50 text-[10px]">Active Now</p>
                </div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="bottom-[20%] left-[8%] md:left-[15%] min-w-[220px]" delay={1.8}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#A3FFB0]/20 rounded-full flex items-center justify-center">
                <Scissors className="text-[#A3FFB0] w-5 h-5" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Pet Grooming at Home</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <p className="text-white/50 text-[10px]">4.9★ Rating</p>
                </div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="top-[40%] right-[5%] md:right-[12%] min-w-[210px]" delay={2.1}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Utensils className="text-white w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">AI Diet Planner</p>
                <div className="mt-2 h-6 w-full flex items-end gap-[2px]">
                  {[30, 60, 45, 80, 50, 90, 70].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 2.5 + i * 0.1, duration: 1 }}
                      className="flex-1 bg-white/20 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </FloatingCard>
        </div>

        {/* Background Decorative Circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#7AE7FF] rounded-full blur-[160px] opacity-10 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#A3FFB0] rounded-full blur-[160px] opacity-10 pointer-events-none" />
      </section>

      {/* Additional Sections */}
      <StatsRibbon />
      <ServicesGrid />
      <ProcessTimeline />
      
      {/* Immersive CTA Section */}
      <section className="relative py-32 md:py-48 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#7AE7FF]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-8xl font-medium text-white tracking-tight mb-8">
              Elevate Your<br />Pet's Life Today.
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Join the 12,000+ happy pet parents who have already discovered the future of pet wellness.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:scale-105 transition-transform">
                Download the App
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-white/10 transition-all">
                Book a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  )
}
