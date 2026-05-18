"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const LogoIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg
    viewBox="0 0 256 256"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
  </svg>
);

const BrandMarquee = () => {
  const brands = [
    { name: "Stripe", style: { fontFamily: "Georgia, serif", fontWeight: 700, letterSpacing: "-0.02em", fontSize: "15px" } },
    { name: "Coinbase", style: { fontFamily: "Arial, sans-serif", fontWeight: 900, letterSpacing: "0.08em", fontSize: "13px", textTransform: "uppercase" as const } },
    { name: "Uniswap", style: { fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 600, letterSpacing: "0.01em", fontSize: "15px", fontStyle: "italic" } },
    { name: "Aave", style: { fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: "0.12em", fontSize: "13px", textTransform: "uppercase" as const } },
    { name: "Compound", style: { fontFamily: "Palatino, 'Book Antiqua', serif", fontWeight: 400, letterSpacing: "-0.01em", fontSize: "16px" } },
    { name: "MakerDAO", style: { fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 400, letterSpacing: "0.04em", fontSize: "14px" } },
    { name: "Chainlink", style: { fontFamily: "Verdana, sans-serif", fontWeight: 700, letterSpacing: "-0.03em", fontSize: "13px" } },
  ];

  return (
    <div className="mt-24 w-full max-w-md overflow-hidden relative">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
      `}</style>
      <div className="marquee-track">
        {[...brands, ...brands].map((brand, idx) => (
          <span key={idx} className="mx-7 shrink-0 text-black/60 whitespace-nowrap" style={brand.style}>
            {brand.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const BackersMarquee = () => {
  const backers = [
    { name: "Fundamental Labs", style: { fontFamily: "'Times New Roman', serif", fontWeight: 400, letterSpacing: "0.02em", fontSize: "14px" } },
    { name: "KUCOIN", style: { fontFamily: "'Arial Black', sans-serif", fontWeight: 900, letterSpacing: "0.08em", fontSize: "16px" } },
    { name: "NGC", style: { fontFamily: "Impact, sans-serif", fontWeight: 700, letterSpacing: "0.05em", fontSize: "18px" } },
    { name: "NxGen", style: { fontFamily: "Georgia, serif", fontWeight: 600, letterSpacing: "-0.02em", fontSize: "17px" } },
    { name: "Matter Labs", style: { fontFamily: "Helvetica, sans-serif", fontWeight: 700, letterSpacing: "-0.01em", fontSize: "15px" } },
    { name: "DEXTools", style: { fontFamily: "Verdana, sans-serif", fontWeight: 700, letterSpacing: "0.06em", fontSize: "14px", textTransform: "uppercase" as const } },
    { name: "NGRAVE", style: { fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: "0.18em", fontSize: "14px" } },
    { name: "Polychain", style: { fontFamily: "Palatino, serif", fontWeight: 500, letterSpacing: "0.03em", fontSize: "15px" } },
  ];

  return (
    <div className="w-full overflow-hidden relative">
      <style>{`
        @keyframes backers-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .backers-track {
          display: flex;
          width: max-content;
          animation: backers-marquee 30s linear infinite;
        }
      `}</style>
      <div className="backers-track">
        {[...backers, ...backers].map((backer, idx) => (
          <span key={idx} className="mx-10 shrink-0 text-black/50 whitespace-nowrap" style={backer.style}>
            {backer.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function HaloLandingPage() {
  return (
    <main className="flex flex-col bg-[#F5F5F5]">
      {/* Navbar + Hero Wrapper */}
      <div className="h-screen flex flex-col overflow-hidden relative">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
          <div className="max-w-[88rem] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LogoIcon className="w-7 h-7 text-black" />
              <span className="text-2xl font-medium tracking-tight text-black">Halo</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {["Network", "Ecosystem", "Rewards", "Help", "News"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-base text-gray-700 hover:text-black font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            <button className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
              Open Wallet
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex-1 px-6 pt-20 pb-6 flex items-end">
          <div className="max-w-[88rem] mx-auto w-full relative h-[calc(100vh-96px)] rounded-2xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
                type="video/mp4"
              />
            </video>

            <div className="relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36">
              <h1 
                className="text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
                style={{ letterSpacing: '-0.04em' }}
              >
                Your Wealth<br/>Works
              </h1>
              <p 
                className="text-black/70 text-base md:text-lg max-w-md mb-8 leading-relaxed"
                style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
              >
                An automated, reward-powered digital dollar built for native passive earnings and effortless connection into DeFi.
              </p>

              <button className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Join us
                <div className="bg-white rounded-full p-2">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </button>

              <BrandMarquee />
            </div>
          </div>
        </section>
      </div>

      {/* Info Section */}
      <section className="bg-[#F5F5F5] px-6 py-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
            <div>
              <h2 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8" style={{ letterSpacing: '-0.03em' }}>
                Meet USD Halo.
              </h2>
              <button className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-6 pr-2 py-1.5 rounded-full hover:bg-gray-800 transition-colors">
                Discover it
                <div className="bg-white rounded-full p-2">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </button>
            </div>
            <div>
              <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
                USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              className="lg:col-span-2 rounded-2xl p-7 min-h-80 flex flex-col justify-between"
              style={{ 
                backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h3 className="text-black text-2xl font-medium leading-snug" style={{ letterSpacing: '-0.02em' }}>
                Savings that bloom
              </h3>
              <p className="text-black/70 text-base max-w-xs">
                Gain steady returns as your dollar tokens are routed into top-performing DeFi strategies.
              </p>
            </div>

            <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
              <h3 className="text-white text-2xl font-medium leading-snug">
                Always fluid,<br/>always pegged.
              </h3>
              <p className="text-white/60 text-base">
                Keep fully dollar-anchored with on-demand access to funds — no lockups or waits.
              </p>
            </div>

            <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
              <h3 className="text-white text-2xl font-medium leading-snug">
                Fully<br/>automated
              </h3>
              <p className="text-white/60 text-base">
                Skip the task of tuning positions yourself. USD Halo runs in the background for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Backed By Section */}
      <section className="bg-[#F5F5F5] px-6 py-12">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          <div className="text-black/70 text-base leading-relaxed">
            Funded by premier partners<br/>and forward-thinking leaders.
          </div>
          <div className="md:col-span-3">
            <BackersMarquee />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-[#F5F5F5] px-6 py-24">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="md:pr-12 md:pt-2">
            <p className="text-black/60 text-sm mb-2">USD Halo in Practice</p>
            <h2 className="text-5xl md:text-6xl font-medium leading-none mb-6" style={{ letterSpacing: '-0.04em' }}>
              Use modes
            </h2>
            <p className="text-black/60 text-base leading-relaxed max-w-sm">
              USD Halo powers a wide range of modes for builders, companies and treasuries wanting safe and rewarding stablecoin integrations plus more
            </p>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden min-h-[720px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
                type="video/mp4"
              />
            </video>
            
            <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-12 bg-gradient-to-t from-black/20 to-transparent">
              <h3 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-5" style={{ letterSpacing: '-0.03em' }}>
                Commerce
              </h3>
              <p className="text-black/70 text-base max-w-md mb-8">
                Lift customer retention by offering USD Halo, a trusted dollar-backed stablecoin with strong yields, letting your patrons earn with zero effort on your platform.
              </p>
              
              <a href="#" className="inline-flex items-center gap-4 group">
                <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
                <span className="text-black font-medium transition-colors">Know more</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
