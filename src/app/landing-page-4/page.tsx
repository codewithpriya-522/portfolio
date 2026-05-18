"use client"

import React, { useEffect, useRef, useState } from "react"
import { Playfair_Display, Inter } from "next/font/google"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { 
  ArrowUpRight, 
  Play, 
  Sparkles, 
  Bike, 
  ChefHat,
  ChevronRight,
  Star,
  MapPin,
  Smartphone,
  Heart,
  Clock
} from "lucide-react"
import { cn } from "@/lib/utils"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
})

// --- Custom Components ---

const FADE_MS = 600
const FADE_OUT_LEAD = 0.6

const FadingVideo = ({ src, className }: { src: string; className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [opacity, setOpacity] = useState(0)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const fade = (target: number, duration: number) => {
      const startOpacity = opacity
      const startTime = performance.now()

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const currentOpacity = startOpacity + (target - startOpacity) * progress
        
        setOpacity(currentOpacity)
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate)
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleLoadedData = () => {
      fade(1, FADE_MS)
    }

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= FADE_OUT_LEAD) {
        if (opacity > 0 && !animationRef.current) {
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
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
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
      className={cn("absolute inset-0 w-full h-full object-cover", className)}
    />
  )
}

const BlurText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const words = text.split(" ")

  return (
    <div ref={ref} className={cn("flex flex-wrap justify-center", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.08,
          }}
          className="mr-[0.2em] inline-block"
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
      initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      {content}
    </motion.div>
  )
}

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-4 left-0 w-full z-50 px-6 lg:px-14 flex items-center justify-between">
    <LiquidGlass className="px-4 py-2 rounded-full flex items-center gap-2 group cursor-pointer" animate={false}>
      <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
      <span className="font-heading italic text-white text-xl">Feastly</span>
    </LiquidGlass>

    <div className="hidden md:flex">
      <LiquidGlass className="px-8 py-2.5 rounded-full flex items-center gap-8" animate={false}>
        {["Home", "Menu", "Restaurants", "Experience", "About"].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-white/90 font-body hover:text-white transition-colors">
            {link}
          </a>
        ))}
      </LiquidGlass>
    </div>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white text-black px-6 py-2.5 rounded-full font-medium flex items-center gap-2 text-sm"
    >
      Order Now
      <ArrowUpRight size={16} />
    </motion.button>
  </nav>
)

export default function FoodLandingPage() {
  return (
    <main className={cn(playfair.variable, inter.variable, "bg-black text-white font-body selection:bg-orange-500/30 overflow-x-hidden")}>
      <style dangerouslySetInnerHTML={{ __html: `
        .liquid-glass {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            inset 0 1px 1px rgba(255, 255, 255, 0.12),
            0 8px 32px rgba(0, 0, 0, 0.25);
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
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .font-heading { font-family: var(--font-heading), serif; }
        .font-body { font-family: var(--font-body), sans-serif; }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* --- SECTION 1: HERO --- */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <Navbar />
        
        <FadingVideo 
          src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27cf342d38d64ab1d030d5241316f9de79aa28a&profile_id=164&oauth2_token_id=57447761" 
          className="scale-[1.08]" 
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-24 max-w-6xl mx-auto">
          <LiquidGlass className="px-4 py-1 rounded-full flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-orange-500">Live</span>
            </div>
            <span className="text-xs font-medium text-white/90">Delivering in 20 Minutes Across Your City</span>
          </LiquidGlass>

          <h1 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.85] tracking-[-4px] max-w-5xl mb-6">
            <BlurText text="Taste the Future of Food Delivery" />
          </h1>

          <p className="text-white/85 font-light text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            From Michelin-level restaurants to midnight cravings — discover premium meals delivered at lightning speed. Fresh, hot, and beautifully crafted.
          </p>

          <div className="flex items-center gap-6 mb-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass px-8 py-4 rounded-full font-medium flex items-center gap-3 text-lg border-white/20"
            >
              Explore Menu
              <ArrowUpRight size={20} />
            </motion.button>
            <button className="flex items-center gap-3 text-white/90 font-medium group">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Play size={16} fill="white" />
              </div>
              Watch Kitchen
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
            {[
              { label: "Meals Delivered", value: "500K+" },
              { label: "Customer Rating", value: "4.9★" },
              { label: "Average Delivery", value: "20 Min" }
            ].map((stat, i) => (
              <LiquidGlass key={i} className="p-6 rounded-[1.5rem] flex flex-col items-center justify-center text-center">
                <span className="font-heading italic text-4xl text-white mb-1">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-white/50 font-medium">{stat.label}</span>
              </LiquidGlass>
            ))}
          </div>
        </div>

        {/* Restaurants Footer */}
        <div className="absolute bottom-10 left-0 w-full px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold text-white/60">
            Trusted by top culinary brands
          </div>
          <div className="font-heading italic text-white text-2xl lg:text-3xl tracking-tight opacity-90 flex flex-wrap justify-center gap-x-8 gap-y-2">
            <span>Nobu</span>
            <span>Ember</span>
            <span>Saffron</span>
            <span>Zing</span>
            <span>Atelier</span>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: FEATURES --- */}
      <section id="experience" className="relative min-h-screen flex flex-col justify-center px-6 lg:px-14 py-24 overflow-hidden">
        <FadingVideo 
          src="https://player.vimeo.com/external/494252666.sd.mp4?s=7201d3049102377218671f6f14022f462f6b8b80&profile_id=164&oauth2_token_id=57447761" 
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white/70 text-sm font-body mb-4 tracking-widest uppercase font-bold"
            >
              // Why Feastly
            </motion.div>
            <h2 className="font-heading italic text-white text-7xl lg:text-[9rem] leading-[0.85] tracking-[-4px]">
              <BlurText text="Delivery reimagined" className="justify-start" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature Cards */}
            {[
              { 
                icon: <Sparkles size={24} />, 
                tags: ["Smart Taste", "AI Powered", "Personalized"],
                title: "AI Recommendations",
                desc: "Our intelligent engine learns your cravings and recommends meals you'll instantly love based on your history and current mood."
              },
              { 
                icon: <Bike size={24} />, 
                tags: ["20 Min", "Real-Time", "Hot Arrival"],
                title: "Lightning Delivery",
                desc: "Optimized routing and live courier tracking ensure every meal arrives fresh and fast. Track every turn on our live map."
              },
              { 
                icon: <ChefHat size={24} />, 
                tags: ["Michelin", "Luxury Dining", "Exclusive"],
                title: "Curated Restaurants",
                desc: "Access exclusive culinary experiences from the finest kitchens in your city, available only on Feastly."
              }
            ].map((feature, i) => (
              <LiquidGlass key={i} className="p-8 rounded-[1.5rem] min-h-[420px] flex flex-col" delay={i * 0.1}>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-8 border border-white/10">
                  {feature.icon}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {feature.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed font-light">{feature.desc}</p>
                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-orange-400 transition-colors group">
                    Explore more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </LiquidGlass>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SIGNATURE PLATES --- */}
      <section id="menu" className="relative min-h-screen flex flex-col justify-center px-6 lg:px-14 py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-orange-500 text-sm font-bold uppercase tracking-[0.2em] mb-4"
              >
                Signature Selection
              </motion.div>
              <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
                The Art of <br /> Plating
              </h2>
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold pb-4 border-b border-white/10"
            >
              View Full Menu <ArrowUpRight size={16} />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Black Truffle Risotto", 
                price: "$42", 
                img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop",
                tag: "Bestseller"
              },
              { 
                name: "Wagyu A5 Striploin", 
                price: "$120", 
                img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
                tag: "Exclusive"
              },
              { 
                name: "Wild Sea Bass", 
                price: "$38", 
                img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
                tag: "New"
              },
              { 
                name: "Matcha Zen Garden", 
                price: "$24", 
                img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
                tag: "Dessert"
              }
            ].map((plate, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden"
              >
                <img src={plate.img} alt={plate.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white">
                    {plate.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex justify-between items-end gap-4">
                    <div>
                      <h4 className="font-heading italic text-white text-2xl mb-1">{plate.name}</h4>
                      <p className="text-white/50 text-xs uppercase tracking-widest font-bold">Premium Origin</p>
                    </div>
                    <span className="font-heading italic text-2xl text-orange-500">{plate.price}</span>
                  </div>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 0 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-6 w-full py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest"
                  >
                    Add to Bag
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE CRAFT (VIDEO) --- */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <FadingVideo 
          src="https://player.vimeo.com/external/394741364.sd.mp4?s=3309a4783387b9231f4a4391694f4c9a6294a535&profile_id=164&oauth2_token_id=57447761"
          className="brightness-50"
        />
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-center"
          >
            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-xl">
              <ChefHat size={32} strokeWidth={1.5} />
            </div>
          </motion.div>
          
          <h2 className="font-heading italic text-white text-5xl md:text-7xl tracking-tight mb-6 max-w-4xl mx-auto">
            Where every ingredient <br /> tells a story.
          </h2>
          
          <p className="text-white/60 text-lg font-light max-w-xl mx-auto mb-10">
            We partner with the world's most meticulous chefs to bring Michelin-grade culinary precision to your doorstep.
          </p>
          
          <button className="flex items-center gap-4 text-white font-bold text-xs uppercase tracking-[0.3em] mx-auto group">
            <span className="w-12 h-[1px] bg-white/30 group-hover:w-20 transition-all duration-500"></span>
            Our Standards
            <span className="w-12 h-[1px] bg-white/30 group-hover:w-20 transition-all duration-500"></span>
          </button>
        </div>
      </section>

      {/* --- SECTION 5: APP EXPERIENCE --- */}
      <section id="experience" className="relative min-h-screen flex flex-col justify-center px-6 lg:px-14 py-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white/40 text-sm font-bold uppercase tracking-[0.2em] mb-6"
            >
              The Interface
            </motion.div>
            <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[7rem] leading-[0.85] tracking-[-4px] mb-10">
              Fluidity at <br /> your fingertips
            </h2>
            
            <div className="space-y-10">
              {[
                { 
                  icon: <Smartphone size={20} />, 
                  title: "Intuitive Gestures", 
                  desc: "Swipe through menus like you're browsing a luxury magazine. Our interface is designed for speed and beauty."
                },
                { 
                  icon: <Clock size={20} />, 
                  title: "Real-Time Precision", 
                  desc: "Down-to-the-second delivery estimates and live kitchen status so you're always in control."
                },
                { 
                  icon: <Heart size={20} />, 
                  title: "Curated Favorites", 
                  desc: "One-tap reordering of your most loved dishes from your personalized culinary vault."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-orange-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2 text-white">{item.title}</h4>
                    <p className="text-white/50 leading-relaxed font-light max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center gap-3">
                Download App <ArrowUpRight size={16} />
              </button>
              <button className="px-8 py-4 rounded-2xl border border-white/10 font-bold text-xs uppercase tracking-widest text-white/70 hover:bg-white/5 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-orange-500/10 blur-[120px] rounded-full" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative liquid-glass rounded-[3rem] p-4 max-w-[360px] mx-auto border-white/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" 
                className="rounded-[2.5rem] w-full h-[600px] object-cover" 
                alt="App screenshot"
              />
              <div className="absolute inset-x-8 bottom-8">
                <LiquidGlass className="p-5 rounded-2xl flex items-center justify-between border-white/20">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">Estimated Arrival</p>
                    <p className="font-heading italic text-2xl text-white">12:45 PM</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                    <Bike size={20} className="text-white" />
                  </div>
                </LiquidGlass>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: FINAL CTA --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/5 to-black" />
        
        <LiquidGlass className="relative z-10 max-w-5xl w-full rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center overflow-visible">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <div className="w-24 h-24 rounded-full bg-orange-500 shadow-[0_0_50px_rgba(249,115,22,0.4)] flex items-center justify-center">
              <Sparkles size={40} className="text-white" />
            </div>
          </div>
          
          <h2 className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6.5rem] leading-tight tracking-[-3px] mb-8">
            Excellence, <br /> delivered.
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mb-12">
            Join the most exclusive culinary circle in your city. Experience Michelin-grade meals delivered with surgical precision.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-md">
            <button className="flex-1 bg-white text-black h-16 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl shadow-white/5">
              Get Started
            </button>
            <button className="flex-1 liquid-glass h-16 rounded-full font-bold text-sm uppercase tracking-widest text-white border-white/20">
              View Restaurants
            </button>
          </div>
          
          <div className="mt-16 flex items-center gap-10">
            <div className="text-center">
              <p className="text-2xl font-heading italic text-white">500+</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Kitchens</p>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-heading italic text-white">20min</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">AVG Delivery</p>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-heading italic text-white">4.9/5</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Rating</p>
            </div>
          </div>
        </LiquidGlass>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 bg-black pt-20 pb-10 px-6 lg:px-14 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="font-heading italic text-white text-2xl">Feastly</span>
              </div>
              <p className="text-white/40 font-light leading-relaxed mb-8">
                Elevating the art of food delivery. We bring the world's finest kitchens directly to your doorstep with unmatched speed and beauty.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholders */}
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer">
                    <Heart size={16} />
                  </div>
                ))}
              </div>
            </div>
            
            {[
              { title: "Platform", links: ["Our Menu", "Restaurants", "Delivery Zone", "Feastly Plus"] },
              { title: "Company", links: ["About Us", "Careers", "Press", "Contact"] },
              { title: "Legal", links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Security"] }
            ].map((col, i) => (
              <div key={i}>
                <h5 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-8">{col.title}</h5>
                <ul className="space-y-4">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-white/40 hover:text-white transition-colors text-sm font-light">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/5">
            <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">&copy; 2024 Feastly Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">Privacy</a>
              <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
