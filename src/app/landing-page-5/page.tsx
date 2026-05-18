"use client"

import React, { useEffect, useRef, useState } from "react"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { motion, useInView } from "framer-motion"
import { 
  ArrowUpRight, 
  Play, 
  TrendingUp, 
  Cpu, 
  Shield, 
  ChevronRight,
  Activity,
  Zap,
  Lock
} from "lucide-react"
import { cn } from "@/lib/utils"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
})

// --- Constants ---
const FADE_MS = 1000
const FADE_OUT_LEAD = 0.8

// --- Custom Components ---

const FadingVideo = ({ src, className, brightness = "brightness-[0.4]" }: { src: string; className?: string; brightness?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [opacity, setOpacity] = useState(0)
  const requestRef = useRef<number | null>(null)

  const fade = (target: number, duration: number) => {
    const start = opacity
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = start + (target - start) * progress
      
      setOpacity(current)
      
      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate)
      } else {
        requestRef.current = null
      }
    }

    if (requestRef.current) cancelAnimationFrame(requestRef.current)
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      fade(1, FADE_MS)
    }

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= FADE_OUT_LEAD) {
        if (opacity > 0 && !requestRef.current) {
          fade(0, FADE_MS)
        }
      }
    }

    const handleEnded = () => {
      video.currentTime = 0
      video.play()
      fade(1, FADE_MS)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("ended", handleEnded)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [opacity])

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      style={{ opacity }}
      className={cn("absolute inset-0 w-full h-full object-cover z-0 transition-none", brightness, className)}
    />
  )
}

const BlurText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const words = text.split(" ")

  return (
    <div ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(12px)", opacity: 0, y: 40 }}
          animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: delay + i * 0.08,
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

const LiquidGlass = ({ 
  children, 
  className,
  animate = true,
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  animate?: boolean;
  delay?: number
}) => {
  const content = (
    <div className={cn("liquid-glass", className)}>
      {children}
    </div>
  )

  if (!animate) return content

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)", y: 40 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      {content}
    </motion.div>
  )
}

// --- Layout Components ---

const Navbar = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50">
    <LiquidGlass className="px-8 py-3 rounded-full flex items-center justify-between" animate={false}>
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
        <span className="font-heading italic text-white text-2xl tracking-tight">Aether Capital</span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {["Markets", "Analytics", "Strategies", "Portfolio", "Insights"].map((link) => (
          <a key={link} href="#" className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors font-body font-semibold">
            {link}
          </a>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black px-6 py-2 rounded-full font-body font-bold text-[10px] uppercase tracking-widest flex items-center gap-2"
      >
        Start Investing
        <ArrowUpRight size={14} />
      </motion.button>
    </LiquidGlass>
  </nav>
)

export default function InvestmentLandingPage() {
  return (
    <main className={cn(cormorant.variable, inter.variable, "bg-[#020305] text-white font-body selection:bg-blue-500/30 overflow-x-hidden")}>
      <style dangerouslySetInnerHTML={{ __html: `
        .liquid-glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            0 12px 48px rgba(0, 0, 0, 0.4);
          position: relative;
          overflow: hidden;
        }

        .liquid-glass::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.25),
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .font-heading { font-family: var(--font-heading), serif; }
        .font-body { font-family: var(--font-body), sans-serif; }
      `}} />

      {/* --- SECTION 1: HERO --- */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <Navbar />
        
        {/* Cinematic Finance Visuals: Data Center / Terminals */}
        <FadingVideo 
          src="https://player.vimeo.com/external/454555022.sd.mp4?s=6a2d7119e8310c85b306b7a97217595304675753&profile_id=164&oauth2_token_id=57447761" 
          className="scale-110"
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20 max-w-6xl mx-auto">
          <LiquidGlass className="px-5 py-1.5 rounded-full flex items-center gap-3 mb-10">
            <div className="flex items-center justify-center w-5 h-5 rounded bg-blue-500/10 border border-blue-500/20">
              <Cpu size={12} className="text-blue-500" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/80">
              Predictive Investment Intelligence for Modern Wealth
            </span>
          </LiquidGlass>

          <h1 className="font-heading italic text-white text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.85] tracking-[-0.04em] mb-8">
            <BlurText text="Invest Beyond Human Limits" className="justify-center" />
          </h1>

          <p className="text-white/60 font-body font-light text-base md:text-xl max-w-3xl leading-relaxed mb-12">
            Advanced AI models analyze global markets in real-time — unlocking intelligent portfolio strategies, predictive insights, and institutional-grade investment tools.
          </p>

          <div className="flex items-center gap-8 mb-24">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass px-10 py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] flex items-center gap-3 border-white/20 shadow-xl"
            >
              Explore Platform
              <ArrowUpRight size={18} />
            </motion.button>
            <button className="flex items-center gap-3 text-white/50 hover:text-white transition-colors font-bold text-[11px] uppercase tracking-[0.2em] group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-all">
                <Play size={14} fill="white" className="ml-0.5" />
              </div>
              Watch Intelligence
            </button>
          </div>

          {/* Floating Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
            {[
              { label: "Assets Managed", value: "$48B+" },
              { label: "Prediction Accuracy", value: "98.4%" },
              { label: "AI Market Monitoring", value: "24/7" }
            ].map((stat, i) => (
              <LiquidGlass key={i} className="p-8 rounded-[1.5rem] flex flex-col items-center justify-center text-center" delay={0.2 + i * 0.1}>
                <span className="font-heading italic text-5xl text-white mb-2">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">{stat.label}</span>
              </LiquidGlass>
            ))}
          </div>
        </div>

        {/* Institutions Row */}
        <div className="absolute bottom-10 left-0 w-full px-12 flex flex-col items-center gap-8 z-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-1.5 rounded-full text-[9px] uppercase tracking-[0.3em] font-bold text-white/40">
            Trusted by leading global financial institutions
          </div>
          <div className="font-heading italic text-white/80 text-3xl lg:text-4xl tracking-tight flex flex-wrap justify-center gap-x-16 gap-y-4 opacity-50 grayscale contrast-125">
            <span>Blackstone</span>
            <span>Nova</span>
            <span>Vanguard</span>
            <span>Helix</span>
            <span>Zenith</span>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: AI INTELLIGENCE --- */}
      <section className="relative min-h-screen flex flex-col justify-center px-12 lg:px-24 py-32 overflow-hidden">
        {/* AI Neural Networks / Data Streams Visuals */}
        <FadingVideo 
          src="https://player.vimeo.com/external/494247843.sd.mp4?s=6314c1d88a21e428453443834316d996e3848b80&profile_id=164&oauth2_token_id=57447761" 
          brightness="brightness-[0.2]"
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 text-[11px] font-bold uppercase tracking-[0.4em] mb-6 flex items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-blue-500/40" />
              // AI Intelligence
            </motion.div>
            <h2 className="font-heading italic text-white text-7xl md:text-8xl lg:text-[10rem] leading-[0.8] tracking-[-0.05em]">
              <BlurText text="Markets decoded" className="justify-start" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <LiquidGlass className="p-10 rounded-[1.5rem] min-h-[480px] flex flex-col group hover:border-blue-500/30 transition-colors duration-500" delay={0.1}>
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-10 border border-white/10 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all">
                <TrendingUp size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Forecasting", "AI Signals", "Market Trends", "Real-Time"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-heading italic text-3xl mb-6 text-white">Predictive Analytics</h3>
              <p className="text-white/50 leading-relaxed font-light text-lg">
                AI models continuously analyze market behavior to identify high-probability investment opportunities before they emerge.
              </p>
              <div className="mt-auto">
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors group">
                  View Analysis <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </LiquidGlass>

            {/* Feature Card 2 */}
            <LiquidGlass className="p-10 rounded-[1.5rem] min-h-[480px] flex flex-col group hover:border-blue-500/30 transition-colors duration-500" delay={0.2}>
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-10 border border-white/10 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all">
                <Activity size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Smart Allocation", "Risk Control", "AI Rebalancing", "Dynamic"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-heading italic text-3xl mb-6 text-white">Autonomous Portfolios</h3>
              <p className="text-white/50 leading-relaxed font-light text-lg">
                Adaptive AI strategies automatically optimize allocations and rebalance portfolios based on evolving market conditions.
              </p>
              <div className="mt-auto">
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors group">
                  Configure Strategy <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </LiquidGlass>

            {/* Feature Card 3 */}
            <LiquidGlass className="p-10 rounded-[1.5rem] min-h-[480px] flex flex-col group hover:border-blue-500/30 transition-colors duration-500" delay={0.3}>
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-10 border border-white/10 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all">
                <Lock size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Encrypted", "Multi-Layer", "Enterprise", "Secure"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-heading italic text-3xl mb-6 text-white">Institutional Security</h3>
              <p className="text-white/50 leading-relaxed font-light text-lg">
                Enterprise-grade infrastructure and advanced encryption ensure every transaction and portfolio remains protected.
              </p>
              <div className="mt-auto">
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors group">
                  Security Protocol <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </LiquidGlass>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: DATA STREAM (STRETCH) --- */}
      <section className="h-24 bg-[#020305] flex items-center justify-center border-y border-white/5 overflow-hidden">
        <div className="flex gap-20 whitespace-nowrap animate-marquee">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/20">Market Volatility Index</span>
              <span className="text-sm font-heading italic text-blue-500">24.52 pts</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/20">AI Confidence Level</span>
              <span className="text-sm font-heading italic text-white">99.12%</span>
            </div>
          ))}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />

      {/* --- FOOTER --- */}
      <footer className="bg-[#020305] pt-24 pb-12 px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <span className="font-heading italic text-white text-3xl">Aether Capital</span>
          </div>
          <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold text-center">
            &copy; 2026 Aether Capital Management &middot; Institutional Intelligence &middot; Precision Wealth
          </p>
        </div>
      </footer>
    </main>
  )
}
