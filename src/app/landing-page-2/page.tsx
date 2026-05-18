"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, type Easing } from "framer-motion";
import { Mail, MessageCircle, Send, Globe } from "lucide-react";
import Hls from "hls.js";

// Animation helpers
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as Easing },
});

const LogoIcon = ({ className = "" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="w-7 h-7 rounded-full border-2 border-foreground/60" />
    <div className="absolute w-3 h-3 rounded-full border border-foreground/60" />
  </div>
);

const LogoIconLarge = ({ className = "" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="w-10 h-10 rounded-full border-2 border-foreground/60" />
    <div className="absolute w-5 h-5 rounded-full border border-foreground/60" />
  </div>
);

const WordReveal = ({ text, className = "" }: { text: string; className?: string }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  const highlights = ["curiosity", "meets", "clarity"];

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        const isHighlighted = highlights.includes(word.replace(/[.,—]/g, ""));

        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className={isHighlighted ? "text-foreground" : "text-hero-subtitle"}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </p>
  );
};

const HlsVideo = ({ src, className = "" }: { src: string; className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
    />
  );
};

export default function MindloopLandingPage() {
  return (
    <main className="relative selection:bg-foreground selection:text-background">
      {/* 1. Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-28 py-6 bg-transparent">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-xl font-bold tracking-tight">Mindloop</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {["Home", "How It Works", "Philosophy", "Use Cases"].map((item, i) => (
            <React.Fragment key={item}>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
              {i < 3 && <span className="text-muted-foreground/40">•</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {[Mail, MessageCircle, Send].map((Icon, i) => (
            <button
              key={i}
              className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent z-[1]" />

        <div className="relative z-10 container max-w-6xl mx-auto px-6 pt-32 text-center">
          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`}
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">7,000+ people already subscribed</p>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-3px] mb-8 leading-[1.1]"
          >
            Get <span className="font-serif italic font-normal">Inspired</span> with Us
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="text-lg md:text-xl text-hero-subtitle max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Join our feed for meaningful updates, news around technology and a shared journey
            toward depth and direction.
          </motion.p>

          <motion.form
            {...fadeUp(0.4)}
            onSubmit={(e: React.FormEvent) => e.preventDefault()}
            className="liquid-glass rounded-full p-2 max-w-lg mx-auto flex items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent flex-1 px-6 py-2 outline-none text-foreground placeholder:text-muted-foreground"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-foreground text-background font-bold text-sm tracking-wider px-8 py-3.5 rounded-full"
            >
              SUBSCRIBE
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* 3. Search has changed Section */}
      <section className="py-52 md:py-64 container mx-auto px-6 text-center">
        <motion.h2
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-3px] mb-8"
        >
          Search has <span className="font-serif italic">changed.</span> Have you?
        </motion.h2>
        <motion.p
          {...fadeUp(0.2)}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24"
        >
          The way we find information is evolving. Don't get left behind with outdated
          algorithms. Explore the new era of clarity.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-16 md:gap-8 mb-24">
          {[
            {
              name: "ChatGPT",
              desc: "Deep reasoning and creative collaboration.",
              icon: "https://api.iconify.design/logos:openai-icon.svg?color=white",
            },
            {
              name: "Perplexity",
              desc: "Real-time answers with verified sources.",
              icon: "https://api.iconify.design/simple-icons:perplexity.svg?color=white",
            },
            {
              name: "Google AI",
              desc: "Vast knowledge base with intuitive search.",
              icon: "https://api.iconify.design/logos:google-icon.svg",
            },
          ].map((platform, i) => (
            <motion.div
              key={platform.name}
              {...fadeUp(0.3 + i * 0.1)}
              className="flex flex-col items-center"
            >
              <div className="w-48 h-48 mb-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src={platform.icon}
                  alt={platform.name}
                  className="w-16 h-16 object-contain opacity-80"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
              <p className="text-muted-foreground text-sm max-w-[200px]">{platform.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp(0.6)} className="text-muted-foreground text-sm">
          If you don't answer the questions, someone else will.
        </motion.p>
      </section>

      {/* 4. Mission Section */}
      <section className="pb-32 md:pb-44 container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl aspect-square mb-20 overflow-hidden rounded-3xl bg-card">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="max-w-4xl text-center">
            <WordReveal
              text="We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having."
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-[-1px] mb-12 leading-[1.2]"
            />
            <WordReveal
              text="A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved."
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.3]"
            />
          </div>
        </div>
      </section>

      {/* 5. Solution Section */}
      <section className="py-32 md:py-44 border-t border-border/30 container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            {...fadeUp(0.1)}
            className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4 block"
          >
            SOLUTION
          </motion.span>
          <motion.h2
            {...fadeUp(0.2)}
            className="text-4xl md:text-6xl font-medium tracking-tight"
          >
            The platform for <span className="font-serif italic">meaningful</span> content
          </motion.h2>
        </div>

        <motion.div
          {...fadeUp(0.3)}
          className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-20 bg-card"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {[
            {
              title: "Curated Feed",
              desc: "Personalized content stream that respects your focus and interests.",
            },
            {
              title: "Writer Tools",
              desc: "Minimalist writing environment with powerful audience growth features.",
            },
            {
              title: "Community",
              desc: "Meaningful interaction spaces built on depth and shared values.",
            },
            {
              title: "Distribution",
              desc: "Smart multi-channel reach without the algorithmic overhead.",
            },
          ].map((feature, i) => (
            <motion.div key={feature.title} {...fadeUp(0.4 + i * 0.1)}>
              <h3 className="text-lg font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="relative py-32 md:py-64 overflow-hidden border-t border-border/30">
        <HlsVideo
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-background/60 z-[1] backdrop-blur-sm" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div {...fadeUp(0.1)} className="flex justify-center mb-10">
            <LogoIconLarge />
          </motion.div>
          <motion.h2
            {...fadeUp(0.2)}
            className="text-5xl md:text-7xl font-medium tracking-tight mb-8"
          >
            Start Your <span className="font-serif italic">Journey</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.3)}
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-12"
          >
            Join the community of thinkers, writers, and curious minds shaping the future of
            digital content.
          </motion.p>
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="bg-foreground text-background font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform">
              Subscribe Now
            </button>
            <button className="liquid-glass border border-white/10 px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
              Start Writing
            </button>
          </motion.div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-16 px-8 md:px-28 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-8 bg-card/30">
        <p className="text-muted-foreground text-sm">
          © 2026 Mindloop. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
