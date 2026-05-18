export interface LandingPageProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: string[];
  liveUrl?: string;
  featured?: boolean;
}

export const landingPages: LandingPageProject[] = [
  {
    id: "aetheria",
    title: "Aetheria",
    description: "Experience the next dimension of digital cinematography. Curated for the eyes that demand perfection.",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    category: "Cinematic",
    tags: ["Next.js", "Framer Motion", "8K Streaming"],
    liveUrl: "/landing-page-1",
    featured: true,
  },
  {
    id: "mindloop",
    title: "Mindloop",
    description: "A space where curiosity meets clarity — reader depth, writer reach, and meaningful newsletters.",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    category: "Newsletter",
    tags: ["React", "HLS.js", "Minimalist"],
    liveUrl: "/landing-page-2",
  },
  {
    id: "halo-defi",
    title: "Halo USD",
    description: "An automated, reward-powered digital dollar built for native passive earnings and DeFi connection.",
    thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
    category: "Web3/DeFi",
    tags: ["Blockchain", "Finance", "Automation"],
    liveUrl: "/landing-page-3",
  },
  {
    id: "feastly",
    title: "Feastly",
    description: "Taste the future of food delivery. From Michelin-level restaurants to midnight cravings.",
    thumbnail: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop",
    category: "Food Tech",
    tags: ["Next.js", "Tailwind", "GSAP"],
    liveUrl: "/landing-page-4",
  },
  {
    id: "aether-capital",
    title: "Aether Capital",
    description: "Invest beyond human limits. Advanced AI models analyze global markets in real-time.",
    thumbnail: "https://images.unsplash.com/photo-1454165833767-131e24a13fed?auto=format&fit=crop&q=80&w=800",
    category: "AI Finance",
    tags: ["AI/ML", "Fintech", "Analytics"],
    liveUrl: "/landing-page-5",
  },
  {
    id: "petsphere",
    title: "PetSphere",
    description: "Unified platform for modern pet parenting. Online vet, grooming, and AI diet plans.",
    thumbnail: "https://images.unsplash.com/photo-1505751172107-5739a0077221?auto=format&fit=crop&q=80&w=800",
    category: "HealthTech",
    tags: ["PetCare", "AI", "Marketplace"],
    liveUrl: "/landing-page-6",
  },
  {
    id: "design-pro",
    title: "DesignPro",
    description: "Elite design education. Transformative programs to become a product leader in the industry.",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
    category: "EdTech",
    tags: ["Design", "Mentorship", "UX"],
    liveUrl: "/landing-page-7",
  },
  {
    id: "nexus-vortex",
    title: "Nexus Dashboard",
    description: "High-performance SaaS dashboard for real-time analytics and team collaboration.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "SaaS",
    tags: ["Next.js", "TanStack", "Dashboard"],
    liveUrl: "/landing-page-8",
  },
  {
    id: "forma-agency",
    title: "Forma.co",
    description: "High-end digital agency focused on craftsmanship, innovation, and shaping ideas into reality.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Agency",
    tags: ["Branding", "Creative", "Minimalist"],
    liveUrl: "/landing-page-9",
  },
];
