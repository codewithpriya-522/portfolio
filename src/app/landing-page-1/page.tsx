"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUp,
  Award,
  Calendar,
  CalendarRange,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Dna,
  Download,
  Film,
  Flame,
  Gift,
  Globe,
  GraduationCap,
  HelpCircle,
  Laptop,
  Layers,
  LayoutGrid,
  Library,
  Mail,
  Map,
  Maximize,
  Menu,
  MessagesSquare,
  Monitor,
  Newspaper,
  Play,
  Plus,
  Search,
  Send,
  Share2,
  Smartphone,
  Sparkles,
  Star,
  Tablet,
  Trophy,
  Tv,
  User,
  Users2,
  Video,
  X,
  Zap,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const fadeInUp = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
}

export default function CinematicLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    "Movies",
    "TV Series",
    "Editor's Pick",
    "Interviews",
    "User Reviews",
  ]

  const trendingMovies = [
    {
      title: "Eclipse of Tomorrow",
      rating: "9.2",
      year: "2024",
      type: "Sci-Fi",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Neon Whispers",
      rating: "8.8",
      year: "2024",
      type: "Cyberpunk",
      image:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Ghost in the Machine",
      rating: "8.5",
      year: "2025",
      type: "Thriller",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Aeon Rises",
      rating: "8.9",
      year: "2025",
      type: "Epic",
      image:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop",
    },
  ]

  const upcomingMovies = [
    {
      title: "Horizon's End",
      date: "May 12",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "The Last Echo",
      date: "June 05",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Shattered Light",
      date: "July 22",
      image:
        "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=800&auto=format&fit=crop",
    },
  ]

  const collections = [
    {
      title: "Modern Noir",
      movies: "12 Movies",
      image:
        "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Quantum Realms",
      movies: "8 Movies",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Lost Worlds",
      movies: "15 Movies",
      image:
        "https://images.unsplash.com/photo-1500462859194-885860a117cb?q=80&w=800&auto=format&fit=crop",
    },
  ]

  const festivals = [
    { name: "Cannes Official", location: "France", date: "May 2026" },
    { name: "Sundance Selected", location: "USA", date: "Jan 2027" },
    { name: "Venice Masters", location: "Italy", date: "Sept 2026" },
    { name: "Tokyo Horizon", location: "Japan", date: "Oct 2026" },
  ]

  const btsGallery = [
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542204172-3c1395568f12?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop",
  ]

  const testimonials = [
    {
      name: "Elena Valerius",
      role: "Film Critic",
      text: "Aetheria has completely changed how I experience independent cinema. The quality is unmatched.",
      avatar: "https://i.pravatar.cc/150?u=elena",
    },
    {
      name: "Marcus Thorne",
      role: "Director",
      text: "Finally, a platform that respects the cinematographer's vision with true 8K fidelity.",
      avatar: "https://i.pravatar.cc/150?u=marcus",
    },
    {
      name: "Sarah Chen",
      role: "Cinephile",
      text: "The interface is like an extension of the film itself. Pure digital elegance.",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
  ]

  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  )

  const faqs = [
    {
      q: "What devices are supported?",
      a: "Aetheria supports all major browsers, iOS and Android devices, Smart TVs (Apple TV, Android TV, Fire TV), and gaming consoles.",
    },
    {
      q: "Can I watch offline?",
      a: "Yes, our Elite plan allows you to download up to 100 titles across your devices for high-quality offline viewing.",
    },
    {
      q: "Is there a free trial?",
      a: "We offer a 7-day complimentary pass for the Premium plan so you can experience the Aetheria difference.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time through your account settings.",
    },
    {
      q: "What is 8K Ultra streaming?",
      a: "Our proprietary 8K technology delivers four times the resolution of 4K, optimized for high-end cinematic displays and VR headsets.",
    },
  ]

  const plans = [
    {
      name: "Lite",
      price: billingCycle === "monthly" ? "$9.99" : "$7.99",
      features: [
        "1080p Streaming",
        "2 Devices",
        "Ad-supported",
        "Standard Library",
      ],
      cta: "START TRIAL",
    },
    {
      name: "Premium",
      price: billingCycle === "monthly" ? "$19.99" : "$15.99",
      features: [
        "4K HDR",
        "4 Devices",
        "Ad-free",
        "Spatial Audio",
        "Full Library",
      ],
      popular: true,
      cta: "GO PREMIUM",
    },
    {
      name: "Elite",
      price: billingCycle === "monthly" ? "$29.99" : "$23.99",
      features: [
        "8K Ultra",
        "Unlimited Devices",
        "Offline viewing",
        "Exclusive premieres",
        "Director Cuts",
      ],
      cta: "JOIN ELITE",
    },
  ]

  const comparisonFeatures = [
    { name: "Resolution", lite: "1080p", premium: "4K HDR", elite: "8K Ultra" },
    {
      name: "Simultaneous Screens",
      lite: "2",
      premium: "4",
      elite: "Unlimited",
    },
    {
      name: "Audio Quality",
      lite: "Stereo",
      premium: "Spatial Audio",
      elite: "Dolby Atmos 11.1",
    },
    { name: "Ad-Free Experience", lite: false, premium: true, elite: true },
    {
      name: "Offline Downloads",
      lite: false,
      premium: "25 titles",
      elite: "Unlimited",
    },
    { name: "Early Access", lite: false, premium: false, elite: true },
    { name: "Exclusive Content", lite: false, premium: true, elite: true },
  ]

  return (
    <div className="relative min-h-screen w-full bg-background font-sans text-foreground transition-colors duration-500 overflow-x-hidden selection:bg-primary selection:text-primary-foreground text-xs sm:text-sm">
        {/* BACKGROUND VIDEO (FIXED) */}
        <div className="fixed inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-white/60 dark:hidden" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-[1]" />
        </div>

        {/* HERO SECTION CONTAINER */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {/* NAVBAR */}
          <nav className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 md:py-6 relative z-50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/"
                className="text-lg font-black tracking-tighter md:text-2xl text-foreground"
              >
                AETHERIA
              </Link>
            </motion.div>

            <div className="hidden items-center space-x-8 lg:flex">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href="#"
                    className="text-[10px] font-bold uppercase tracking-widest transition-all hover:text-primary hover:tracking-widest"
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-3 md:space-x-4">
              <button className="liquid-glass hidden items-center space-x-2 rounded-full px-4 py-1.5 sm:flex md:px-5">
                <Search size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Search
                </span>
              </button>
              <button className="liquid-glass hidden h-9 w-9 items-center justify-center rounded-full sm:flex">
                <User size={16} />
              </button>
              <div className="liquid-glass flex h-9 w-9 items-center justify-center rounded-full">
                <ThemeToggle />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="liquid-glass flex h-9 w-9 items-center justify-center rounded-full lg:hidden"
              >
                <div className="relative h-5 w-5">
                  <Menu
                    className={cn(
                      "absolute inset-0 transition-all duration-500",
                      isMenuOpen
                        ? "rotate-180 scale-50 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                    )}
                  />
                  <X
                    className={cn(
                      "absolute inset-0 transition-all duration-500",
                      isMenuOpen
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-180 scale-50 opacity-0"
                    )}
                  />
                </div>
              </button>
            </div>
          </nav>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute left-0 right-0 top-[72px] z-40 origin-top bg-background/95 p-6 backdrop-blur-3xl border-t border-b border-border shadow-2xl lg:hidden text-foreground"
              >
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href="#"
                        className="rounded-lg px-4 py-3 text-xs font-black uppercase tracking-widest hover:bg-muted block"
                      >
                        {link}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* HERO CONTENT */}
          <div className="flex-1 flex flex-col justify-end px-4 pb-12 sm:px-6 md:px-12 md:pb-20 relative z-20">
            <motion.div
              initial="initial"
              animate="whileInView"
              variants={staggerContainer}
              className="flex flex-col items-end gap-10 md:flex-row"
            >
              <div className="flex-1 space-y-6">
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-3 text-[9px] font-black uppercase tracking-widest text-foreground"
                >
                  <div className="flex items-center space-x-2 bg-primary/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/20">
                    <Star size={12} className="fill-current text-primary" />
                    <span>8.7/10 IMDB</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-foreground/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                    <Clock size={12} />
                    <span>132 min</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-foreground/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                    <Calendar size={12} />
                    <span>April, 2025</span>
                  </div>
                </motion.div>
                <motion.h1
                  variants={fadeInUp}
                  className="max-w-4xl text-3xl font-black tracking-tighter sm:text-5xl lg:text-6xl text-foreground leading-[0.9] uppercase"
                >
                  BEYOND THE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                    VISIBLE SPECTRUM.
                  </span>
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="max-w-xl text-base md:text-lg text-muted-foreground font-medium leading-relaxed uppercase tracking-tight"
                >
                  Experience the next dimension of digital cinematography.
                  Curated for the eyes that demand perfection.
                </motion.p>
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 pt-2 text-foreground"
                >
                  <button className="group flex items-center gap-3 bg-foreground text-background px-8 py-3.5 rounded-full font-black text-sm hover:scale-105 transition-all shadow-xl uppercase">
                    <Play size={18} className="fill-current" /> START WATCHING
                  </button>
                  <button className="liquid-glass px-8 py-3.5 rounded-full font-black text-sm text-foreground border border-white/5 hover:bg-white/5 transition-all uppercase">
                    LEARN MORE
                  </button>
                </motion.div>
              </div>
              <motion.div
                variants={fadeInUp}
                className="flex w-full items-center justify-start space-x-3 md:w-auto md:justify-end"
              >
                <button className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full text-foreground border border-white/5">
                  <ChevronLeft size={24} />
                </button>
                <button className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full text-foreground border border-white/5">
                  <ChevronRight size={24} />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* STUDIO PARTNERS */}
        <motion.section
          {...fadeInUp}
          className="relative z-10 bg-background/20 py-12 border-y border-border/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <p className="text-center text-[9px] uppercase tracking-[0.4em] font-black text-muted-foreground mb-8 opacity-60">
              Global Studio Partners
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
              {["AETHER", "LUMINA", "VERTEX", "ONYX", "PRISM", "KINETIC"].map(
                (studio) => (
                  <span
                    key={studio}
                    className="text-lg md:text-2xl font-black tracking-tighter text-foreground italic select-none"
                  >
                    {studio}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.section>

        {/* IMPACT STATS */}
        <motion.section
          {...fadeInUp}
          className="relative z-10 bg-background/40 py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { val: "500+", label: "Original Titles", icon: Film },
              { val: "12M", label: "Monthly Viewers", icon: User },
              { val: "8K", label: "Master Fidelity", icon: Zap },
              { val: "42", label: "Global Awards", icon: Trophy },
            ].map((s, i) => (
              <div key={i} className="text-center space-y-3 group">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary mb-2 border border-primary/10 group-hover:scale-110 transition-all duration-500">
                  <s.icon size={24} />
                </div>
                <h4 className="text-2xl md:text-3xl font-black tracking-tighter text-foreground leading-none">
                  {s.val}
                </h4>
                <p className="text-[9px] uppercase tracking-[0.3em] font-black text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* TRENDING NOW */}
        <section className="relative z-10 bg-background/40 backdrop-blur-3xl px-4 py-20 sm:px-6 md:px-12">
          <motion.div
            {...fadeInUp}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-xl font-black tracking-tighter sm:text-3xl text-foreground flex items-center gap-3 uppercase">
              <Flame className="text-orange-500 animate-pulse" size={28} />{" "}
              TRENDING NOW
            </h2>
            <Link
              href="#"
              className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all flex items-center gap-2 group"
            >
              VIEW ALL{" "}
              <ChevronRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {trendingMovies.map((movie) => (
              <motion.div
                key={movie.title}
                variants={fadeInUp}
                className="liquid-glass group rounded-[2rem] overflow-hidden transition-all hover:-translate-y-2 cursor-pointer shadow-xl border border-white/5"
              >
                <div className="aspect-[2/3] relative overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-xl px-2.5 py-1 rounded-full text-[9px] font-black text-white uppercase tracking-widest border border-white/10">
                    <Star
                      size={10}
                      className="fill-yellow-500 text-yellow-500"
                    />{" "}
                    {movie.rating}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
                    <h3 className="font-black text-base text-white mb-1 leading-tight tracking-tight uppercase">
                      {movie.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-[8px] text-white/80 font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-2 py-0.5 rounded">
                        {movie.year}
                      </span>
                      <span className="text-[8px] text-primary font-black uppercase tracking-widest">
                        {movie.type}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FIDELITY COMPARISON */}
        <motion.section
          {...fadeInUp}
          className="relative z-10 bg-muted/5 py-24 px-4 sm:px-6 md:px-12 border-y border-border/20 backdrop-blur-3xl overflow-hidden"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary border border-primary/20 mb-4">
                <Dna size={24} />
              </div>
              <h2 className="text-2xl font-black sm:text-5xl tracking-tighter uppercase leading-[0.9]">
                THE FIDELITY <br />
                REVOLUTION.
              </h2>
              <p className="text-muted-foreground text-base max-w-xl mx-auto font-medium">
                Technical superiority redefined.
              </p>
            </div>
            <div className="liquid-glass rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl text-foreground">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-foreground/5 font-black uppercase tracking-widest text-[8px] sm:text-[10px]">
                    <th className="p-6 sm:p-10 border-r border-border/50">
                      PARAMETER
                    </th>
                    <th className="p-6 sm:p-10 border-r border-border/50">
                      STANDARD STREAMING
                    </th>
                    <th className="p-6 sm:p-10 text-primary">
                      AETHERIA MASTER
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  {[
                    { p: "MAX BITRATE", s: "15-25 MBPS", a: "100 MBPS RAW" },
                    {
                      p: "COLOR DEPTH",
                      s: "8-BIT REC.709",
                      a: "12-BIT REC.2020",
                    },
                    {
                      p: "AUDIO FORMAT",
                      s: "COMPRESSED DD+",
                      a: "UNCOMPRESSED DTS:X",
                    },
                    {
                      p: "DYNAMIC RANGE",
                      s: "STATIC HDR",
                      a: "DYNAMIC METADATA+",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-t border-border/50 hover:bg-foreground/[0.02] transition-colors"
                    >
                      <td className="p-6 sm:p-10 border-r border-border/50 opacity-60">
                        {row.p}
                      </td>
                      <td className="p-6 sm:p-10 border-r border-border/50 italic opacity-40">
                        {row.s}
                      </td>
                      <td className="p-6 sm:p-10 text-primary flex items-center gap-3">
                        <Check size={18} strokeWidth={3} /> {row.a}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* IMAX SPECIALTY FORMATS */}
        <motion.section
          {...fadeInUp}
          className="relative z-10 bg-background py-24 border-b border-border/30 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative">
              <div className="space-y-4">
                <span className="text-blue-500 font-black text-[9px] uppercase tracking-[0.5em] block">
                  PREMIUM FORMATS
                </span>
                <h2 className="text-3xl font-black sm:text-6xl leading-[0.8] tracking-tighter uppercase text-foreground">
                  THE IMAX <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    DIMENSION.
                  </span>
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed font-medium pr-10 uppercase tracking-tight">
                  FULL IMAX ENHANCED ASPECT RATIOS AND SOUNDSCAPES. WITNESS 26%
                  MORE PICTURE.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {[
                  {
                    title: "Expanded Aspect Ratio",
                    desc: "VIEW THE FULL SCOPE AS THE DIRECTOR INTENDED.",
                    icon: Maximize,
                  },
                  {
                    title: "IMAX Signature Sound",
                    desc: "HEART-POUNDING AUDIO RE-MIXED BY DTS.",
                    icon: Tv,
                  },
                ].map((f, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="h-9 w-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20 shrink-0">
                      <f.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-tight text-foreground">
                        {f.title}
                      </h4>
                      <p className="text-[10px] text-muted-foreground uppercase">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 group">
                <img
                  src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop"
                  alt="IMAX"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                <div className="absolute top-6 right-6">
                  <div className="bg-blue-600 text-white font-black text-[8px] px-5 py-2 rounded-full tracking-widest shadow-2xl border border-blue-400/50">
                    IMAX ENHANCED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* GLOBAL FESTIVAL CALENDAR */}
        <motion.section
          {...fadeInUp}
          className="relative z-10 bg-muted/10 py-24 px-4 sm:px-6 md:px-12 border-b border-border/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-3">
                <span className="text-primary font-black text-[9px] uppercase tracking-[0.5em] block">
                  GLOBAL CALENDAR
                </span>
                <h2 className="text-3xl font-black sm:text-6xl tracking-tighter uppercase leading-[0.9] text-foreground">
                  FESTIVAL <br />
                  CIRCUIT.
                </h2>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs font-black uppercase tracking-widest mb-2">
                Aetheria official partners.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {festivals.map((f, i) => (
                <div
                  key={i}
                  className="liquid-glass p-8 rounded-[2rem] border border-white/5 space-y-5 hover:border-primary transition-all group"
                >
                  <CalendarRange
                    className="text-primary opacity-50 group-hover:opacity-100 transition-opacity"
                    size={24}
                  />
                  <div>
                    <h4 className="font-black text-lg text-foreground uppercase tracking-tight leading-tight">
                      {f.name}
                    </h4>
                    <p className="text-[8px] text-muted-foreground uppercase tracking-[0.2em] mt-2 font-black">
                      {f.location}
                    </p>
                  </div>
                  <div className="h-px bg-border/50" />
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                    {f.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* UPCOMING PREMIERES */}
        <section className="relative z-10 bg-background py-24 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div {...fadeInUp} className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-black text-[9px] uppercase tracking-[0.5em] block">
                  MARK YOUR CALENDAR
                </span>
                <h2 className="text-3xl font-black sm:text-6xl text-foreground leading-[0.9] tracking-tighter uppercase">
                  Upcoming <br />
                  Premieres
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-lg font-black uppercase tracking-tight">
                  THE NEXT EVOLUTION OF STORYTELLING. EXCLUSIVE TO AETHERIA.
                </p>
              </div>
              <div className="space-y-4">
                {upcomingMovies.map((m, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center justify-between p-5 rounded-[1.5rem] liquid-glass border border-white/5 group hover:border-primary/50 transition-all hover:pl-6"
                  >
                    <div className="flex items-center gap-5">
                      <div className="h-14 w-14 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <img
                          src={m.image}
                          className="h-full w-full object-cover transition-transform duration-500"
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 className="font-black text-lg text-foreground tracking-tight uppercase">
                          {m.title}
                        </h4>
                        <p className="text-[8px] font-black text-primary uppercase tracking-[0.3em] mt-1">
                          {m.date}
                        </p>
                      </div>
                    </div>
                    <button className="h-12 w-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl border border-white/5">
                      <Calendar size={18} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="flex-1 relative group">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-border aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1542204172-3c1395568f12?q=80&w=1200&auto=format&fit=crop"
                  alt="Upcoming"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-24 w-24 rounded-full bg-background/50 backdrop-blur-3xl border border-white/20 flex items-center justify-center text-foreground shadow-2xl animate-pulse cursor-pointer hover:scale-110 transition-all group/play">
                    <Play size={32} className="fill-current ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BEHIND THE SCENES GALLERY */}
        <motion.section
          initial="initial"
          whileInView="whileInView"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="relative z-10 bg-background py-24 px-4 sm:px-6 md:px-12 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-3">
              <span className="text-primary font-black text-[9px] uppercase tracking-[0.5em] block">
                BEHIND THE CURTAIN
              </span>
              <h2 className="text-3xl font-black sm:text-6xl tracking-tighter uppercase leading-[0.9] text-foreground">
                The Craft <br />
                of Cinema
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto font-black uppercase tracking-widest">
                EXCLUSIVE PRODUCTION INSIGHTS.
              </p>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {btsGallery.map((img, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 group break-inside-avoid"
                >
                  <img
                    src={img}
                    alt={`BTS ${i}`}
                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white">
                      <Sparkles size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* MASTERCLASS SERIES */}
        <motion.section
          {...fadeInUp}
          className="relative z-10 bg-muted/10 py-24 px-4 sm:px-6 md:px-12 border-y border-border/20 backdrop-blur-3xl"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group overflow-hidden rounded-[3rem] border border-border shadow-2xl aspect-video order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-full object-cover transition-all duration-1000"
                alt="Masterclass"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-3xl border border-white/30 flex items-center justify-center text-white">
                  <Play size={28} className="fill-current ml-1" />
                </div>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="text-primary font-black text-[9px] uppercase tracking-[0.5em] block text-foreground">
                  AETHERIA ACADEMY
                </span>
                <h2 className="text-3xl font-black sm:text-6xl leading-[0.8] tracking-tighter uppercase text-foreground">
                  LEARN THE <br />
                  <span className="text-primary italic">
                    MASTER&apos;S TOUCH.
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-black uppercase tracking-tight">
                  UNDERSTAND THE CRAFT BEHIND THE MASTERPIECES.
                </p>
              </div>
              <button className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-black text-sm hover:shadow-2xl transition-all shadow-xl uppercase tracking-widest">
                EXPLORE ACADEMY
              </button>
            </div>
          </div>
        </motion.section>

        {/* CINEMATIC COMMUNITY */}
        <motion.section
          {...fadeInUp}
          className="relative z-10 bg-muted/10 py-24 px-4 sm:px-6 md:px-12 border-y border-border/20 backdrop-blur-3xl text-foreground"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-5 relative">
                {[
                  { icon: Users2, label: "Live Parties", count: "1.2k Active" },
                  {
                    icon: MessagesSquare,
                    label: "Critic Circles",
                    count: "450 Groups",
                  },
                  { icon: LayoutGrid, label: "Director AMA", count: "Weekly" },
                  { icon: Share2, label: "Sync Play", count: "8K Mode" },
                ].map((c, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="liquid-glass p-6 rounded-[2rem] border border-white/5 space-y-3 group shadow-xl"
                  >
                    <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 group-hover:scale-110 transition-all">
                      <c.icon size={20} />
                    </div>
                    <h4 className="font-black text-sm tracking-tight uppercase leading-none">
                      {c.label}
                    </h4>
                    <p className="text-[8px] text-primary font-black uppercase tracking-widest">
                      {c.count}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2 space-y-8">
              <div className="space-y-4 text-foreground">
                <span className="text-primary font-black text-[9px] uppercase tracking-[0.5em] block">
                  CINEPHILE NETWORK
                </span>
                <h2 className="text-3xl font-black sm:text-6xl leading-[0.8] tracking-tighter uppercase">
                  THE GLOBAL <br />
                  SANCTUARY.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-black uppercase tracking-tight">
                  CONNECT WITH A GLOBAL NETWORK OF DISCERNING VIEWERS.
                </p>
              </div>
              <button className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-black text-sm hover:scale-105 transition-all shadow-xl tracking-widest uppercase">
                JOIN THE COMMUNITY
              </button>
            </div>
          </div>
        </motion.section>

        {/* PRICING SECTION */}
        <section className="relative z-10 bg-background py-32 px-4 sm:px-6 md:px-12 text-foreground">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
              <span className="text-primary font-black text-[9px] uppercase tracking-[0.5em] block">
                SUBSCRIPTION TIERS
              </span>
              <h2 className="text-4xl font-black sm:text-8xl text-foreground tracking-tighter uppercase leading-[0.8]">
                Choose Your <br />
                Voyage
              </h2>
              <p className="text-muted-foreground text-sm font-black uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
                PLANS TAILORED FOR VISIONARIES. CURATED FOR THE DISCERNING EYE.
              </p>

              {/* BILLING TOGGLE */}
              <div className="flex items-center justify-center gap-6 pt-10">
                <span
                  className={cn(
                    "text-[10px] font-black uppercase tracking-widest transition-opacity",
                    billingCycle === "monthly" ? "opacity-100" : "opacity-40"
                  )}
                >
                  Monthly
                </span>
                <button
                  onClick={() =>
                    setBillingCycle(
                      billingCycle === "monthly" ? "yearly" : "monthly"
                    )
                  }
                  className="h-8 w-16 rounded-full bg-foreground/10 p-1 flex items-center transition-all cursor-pointer"
                >
                  <motion.div
                    animate={{ x: billingCycle === "monthly" ? 0 : 32 }}
                    className="h-6 w-6 rounded-full bg-primary shadow-lg"
                  />
                </button>
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "text-[10px] font-black uppercase tracking-widest transition-opacity",
                      billingCycle === "yearly" ? "opacity-100" : "opacity-40"
                    )}
                  >
                    Yearly
                  </span>
                  <span className="bg-primary/20 text-primary text-[8px] font-black px-3 py-1 rounded-full border border-primary/20 animate-pulse">
                    -20% OFF
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end mb-32"
            >
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  variants={fadeInUp}
                  className={cn(
                    "liquid-glass flex flex-col p-10 rounded-[3rem] border transition-all duration-700 relative group",
                    plan.popular
                      ? "scale-105 border-primary shadow-2xl z-20 bg-primary/[0.03]"
                      : "border-border/50 z-10 hover:border-primary/50"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[8px] font-black uppercase tracking-[0.4em] px-6 py-2 rounded-full border-4 border-background shadow-xl">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-3xl font-black text-foreground mb-4 uppercase leading-none tracking-tight">
                    {plan.name}
                  </h3>
                  <div className="mb-12">
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black text-foreground tracking-tighter leading-none">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-xl font-bold">
                        /mo
                      </span>
                    </div>
                    <p className="text-muted-foreground text-[9px] font-black uppercase tracking-[0.2em] mt-3 opacity-60">
                      Billed {billingCycle}
                    </p>
                  </div>
                  <ul className="flex-1 space-y-6 mb-12 border-t border-border/20 pt-10">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-4 text-[10px] font-black uppercase tracking-tight"
                      >
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                          <Check size={12} className="text-primary shrink-0" />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={cn(
                      "w-full py-6 rounded-[2rem] font-black text-sm transition-all uppercase tracking-[0.2em] cursor-pointer",
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] scale-100 hover:scale-[1.02]"
                        : "bg-foreground/5 text-foreground hover:bg-foreground/10"
                    )}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {/* FEATURE COMPARISON TABLE */}
            <motion.div
              {...fadeInUp}
              className="hidden md:block overflow-hidden rounded-[3rem] border border-border/50 bg-muted/5 backdrop-blur-xl mb-32"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                      Detailed Features
                    </th>
                    <th className="p-10 text-center text-sm font-black uppercase tracking-widest">
                      Lite
                    </th>
                    <th className="p-10 text-center text-sm font-black uppercase tracking-widest text-primary">
                      Premium
                    </th>
                    <th className="p-10 text-center text-sm font-black uppercase tracking-widest">
                      Elite
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {comparisonFeatures.map((feat, i) => (
                    <tr
                      key={feat.name}
                      className="hover:bg-foreground/[0.02] transition-colors group"
                    >
                      <td className="p-8 px-10 text-[11px] font-black uppercase tracking-widest">
                        {feat.name}
                      </td>
                      <td className="p-8 text-center text-[10px] font-black uppercase opacity-60">
                        {typeof feat.lite === "boolean" ? (
                          feat.lite ? (
                            <Check size={18} className="mx-auto text-primary" />
                          ) : (
                            <X
                              size={18}
                              className="mx-auto text-muted-foreground/30"
                            />
                          )
                        ) : (
                          feat.lite
                        )}
                      </td>
                      <td className="p-8 text-center text-[10px] font-black uppercase bg-primary/[0.02]">
                        {typeof feat.premium === "boolean" ? (
                          feat.premium ? (
                            <Check size={18} className="mx-auto text-primary" />
                          ) : (
                            <X
                              size={18}
                              className="mx-auto text-muted-foreground/30"
                            />
                          )
                        ) : (
                          feat.premium
                        )}
                      </td>
                      <td className="p-8 text-center text-[10px] font-black uppercase opacity-60">
                        {typeof feat.elite === "boolean" ? (
                          feat.elite ? (
                            <Check size={18} className="mx-auto text-primary" />
                          ) : (
                            <X
                              size={18}
                              className="mx-auto text-muted-foreground/30"
                            />
                          )
                        ) : (
                          feat.elite
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="relative z-10 bg-background py-32 px-4 sm:px-6 md:px-12 text-foreground">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-20 space-y-4">
              <span className="text-primary font-black text-[9px] uppercase tracking-[0.5em] block">
                COMMON INQUIRIES
              </span>
              <h2 className="text-4xl font-black sm:text-7xl text-foreground tracking-tighter uppercase leading-[0.8]">
                Questions <br />
                of the Void
              </h2>
              <p className="text-muted-foreground text-sm font-black uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
                EVERYTHING YOU NEED TO KNOW BEFORE EMBARKING ON THE JOURNEY.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className={cn(
                    "liquid-glass rounded-[2rem] border transition-all duration-500 overflow-hidden",
                    activeFaq === i
                      ? "border-primary/40 bg-primary/[0.02]"
                      : "border-border/40 hover:border-border"
                  )}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-8 px-10 flex items-center justify-between text-left cursor-pointer group"
                  >
                    <span className="text-sm md:text-base font-black uppercase tracking-tight">
                      {faq.q}
                    </span>
                    <div
                      className={cn(
                        "h-8 w-8 rounded-full border border-border flex items-center justify-center transition-all duration-500",
                        activeFaq === i
                          ? "rotate-45 bg-primary border-primary text-primary-foreground"
                          : "group-hover:border-primary"
                      )}
                    >
                      <Plus size={18} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-10 pb-10 text-muted-foreground text-sm font-black uppercase tracking-widest leading-relaxed opacity-80">
                          <div className="h-[1px] w-full bg-border/20 mb-8" />
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fadeInUp}
              className="mt-20 text-center p-12 rounded-[3rem] border border-dashed border-border flex flex-col items-center gap-6"
            >
              <div className="h-16 w-16 rounded-full bg-muted/20 flex items-center justify-center text-primary">
                <HelpCircle size={32} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter">
                Still have questions?
              </h3>
              <p className="text-xs text-muted-foreground font-black uppercase tracking-widest">
                Our curators are available 24/7 for the Elite circle.
              </p>
              <button className="text-primary text-xs font-black uppercase tracking-[0.3em] hover:tracking-[0.5em] transition-all cursor-pointer">
                Contact Support —&gt;
              </button>
            </motion.div>
          </div>
        </section>

        {/* NEWSLETTER CTA */}
        <motion.section
          {...fadeInUp}
          className="relative z-10 py-24 px-4 sm:px-6 md:px-12 bg-background"
        >
          <div className="max-w-5xl mx-auto">
            <div className="liquid-glass relative overflow-hidden rounded-[4rem] p-12 md:p-24 text-center flex flex-col items-center border border-white/10 shadow-2xl text-foreground">
              <Mail size={40} className="text-primary mb-8 animate-bounce" />
              <h2 className="text-4xl font-black sm:text-7xl text-foreground mb-8 tracking-tighter leading-[0.8] uppercase">
                JOIN THE <br />
                <span className="text-primary italic">INNER CIRCLE.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed font-black uppercase tracking-tight">
                GET EXCLUSIVE EARLY ACCESS TO PREMIERES.
              </p>
              <form className="w-full max-w-lg flex flex-col sm:flex-row gap-4 p-3 bg-background/50 backdrop-blur-3xl rounded-full border border-border focus-within:border-primary/50 transition-all">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="flex-1 bg-transparent px-8 py-4 outline-none text-sm font-black uppercase tracking-widest"
                />
                <button className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-black text-sm hover:scale-[1.05] transition-all uppercase tracking-widest">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="relative z-10 bg-background py-32 border-t border-border/50 text-foreground overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 pb-20">
              {/* BRAND AREA */}
              <div className="lg:col-span-5 space-y-10">
                <div className="space-y-6">
                  <Link
                    href="/"
                    className="text-4xl font-black tracking-tighter text-foreground block"
                  >
                    AETHERIA
                  </Link>
                  <p className="text-lg text-muted-foreground font-black uppercase tracking-tight leading-[1.1] max-w-sm opacity-80">
                    LEADING THE DIGITAL RENAISSANCE. <br />
                    <span className="text-primary italic">
                      CURATING THE FUTURE OF CINEMA.
                    </span>
                  </p>
                </div>

                <div className="flex gap-4">
                  {[
                    { Icon: X, color: "hover:bg-black hover:text-white" },
                    {
                      Icon: MessagesSquare,
                      color: "hover:bg-blue-500 hover:text-white",
                    },
                    {
                      Icon: Share2,
                      color: "hover:bg-pink-500 hover:text-white",
                    },
                    { Icon: Send, color: "hover:bg-sky-500 hover:text-white" },
                    {
                      Icon: Camera,
                      color: "hover:bg-purple-500 hover:text-white",
                    },
                  ].map(({ Icon, color }, i) => (
                    <button
                      key={i}
                      className={cn(
                        "h-12 w-12 rounded-2xl border border-border/50 flex items-center justify-center text-muted-foreground transition-all duration-300 cursor-pointer",
                        color
                      )}
                    >
                      <Icon size={20} />
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <span className="text-primary font-black text-[9px] uppercase tracking-[0.5em] block">
                    PLATFORM STATUS
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                      All Systems Operational — 8K Streaming Live
                    </span>
                  </div>
                </div>
              </div>

              {/* SITEMAP */}
              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                {[
                  {
                    title: "PLATFORM",
                    links: [
                      "Movies",
                      "Original Series",
                      "Live TV",
                      "Academy",
                      "Collections",
                      "Oscars 2026",
                    ],
                  },
                  {
                    title: "COMPANY",
                    links: [
                      "Our Vision",
                      "Studio",
                      "Directors",
                      "Careers",
                      "Press Kit",
                      "Contact",
                    ],
                  },
                  {
                    title: "LEGAL",
                    links: [
                      "Privacy Policy",
                      "Terms of Service",
                      "Cookie Policy",
                      "DMCA",
                      "Licensing",
                    ],
                  },
                ].map((group) => (
                  <div key={group.title} className="space-y-8">
                    <h4 className="font-black text-foreground text-[10px] tracking-[0.4em] uppercase opacity-40">
                      {group.title}
                    </h4>
                    <ul className="space-y-4 text-xs text-muted-foreground font-black tracking-tight uppercase">
                      {group.links.map((link) => (
                        <li key={link}>
                          <Link
                            href="#"
                            className="hover:text-primary hover:pl-2 transition-all duration-300 inline-block"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="pt-12 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">
                  © 2026 AETHERIA MEDIA GROUP. ALL RIGHTS RESERVED.
                </p>
                <div className="flex gap-6 opacity-40 text-[9px] font-black uppercase tracking-widest">
                  <Link
                    href="#"
                    className="hover:opacity-100 transition-opacity"
                  >
                    English (US)
                  </Link>
                  <Link
                    href="#"
                    className="hover:opacity-100 transition-opacity"
                  >
                    Sitemap
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3 opacity-40">
                <Globe size={14} />
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                  Worldwide Availability
                </span>
              </div>
            </div>
          </div>
        </footer>

        {/* BACK TO TOP BUTTON */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] h-12 w-12 rounded-2xl liquid-glass border border-white/10 flex items-center justify-center text-foreground transition-all duration-700 shadow-2xl",
            showBackToTop
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0 pointer-events-none"
          )}
        >
          <ArrowUp size={24} />
        </button>
      </div>
  )
}
