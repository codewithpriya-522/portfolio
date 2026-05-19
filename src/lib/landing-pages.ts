export interface LandingPageProject {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  category: string;
  tags: string[];
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const landingPages: LandingPageProject[] = [
  {
    id: "aetheria",
    title: "Aetheria",
    description: "Experience the next dimension of digital cinematography. Curated for the eyes that demand perfection.",
    longDescription: "Aetheria is a next-generation cinematic streaming platform. Built with Next.js and Framer Motion, it features 8K video support, spatial audio, and an immersive user interface designed to disappear, letting the content take center stage.",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    category: "Cinematic",
    tags: ["Next.js", "Framer Motion", "8K Streaming"],
    features: ["Cinematic Interface", "Multi-device Sync", "Spatial Audio Support", "Curated Collections"],
    liveUrl: "/landing-page-1",
    githubUrl: "https://github.com/codewithpriya-522",
    featured: true,
  },
  {
    id: "mindloop",
    title: "Mindloop",
    description: "A space where curiosity meets clarity — reader depth, writer reach, and meaningful newsletters.",
    longDescription: "Mindloop reimagines the newsletter experience. It provides a minimalist environment for writers to focus on craft and readers to find depth, with integrated HLS video support and community engagement features.",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    category: "Newsletter",
    tags: ["React", "HLS.js", "Minimalist"],
    features: ["Distraction-free Writing", "Real-time Analytics", "Community Circles", "Smart Distribution"],
    liveUrl: "/landing-page-2",
    githubUrl: "https://github.com/codewithpriya-522",
  },
  {
    id: "halo-defi",
    title: "Halo USD",
    description: "An automated, reward-powered digital dollar built for native passive earnings and DeFi connection.",
    longDescription: "Halo USD is a Web3 financial platform that automates yield generation for stablecoin holders. It integrates seamlessly with major DeFi protocols while maintaining a stable peg to the US dollar.",
    thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
    category: "Web3/DeFi",
    tags: ["Blockchain", "Finance", "Automation"],
    features: ["Automated Yield", "DeFi Integration", "Real-time Price Tracking", "Institutional Security"],
    liveUrl: "/landing-page-3",
    githubUrl: "https://github.com/codewithpriya-522",
  },
  {
    id: "feastly",
    title: "Feastly",
    description: "Taste the future of food delivery. From Michelin-level restaurants to midnight cravings.",
    longDescription: "Feastly is a premium food delivery ecosystem. It connects users with elite culinary experiences, featuring AI-powered recommendations and lightning-fast logistics optimized for quality.",
    thumbnail: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop",
    category: "Food Tech",
    tags: ["Next.js", "Tailwind", "GSAP"],
    features: ["AI Cravings Engine", "Live Map Tracking", "Michelin-only Mode", "Priority Delivery"],
    liveUrl: "/landing-page-4",
    githubUrl: "https://github.com/codewithpriya-522",
  },
  {
    id: "aether-capital",
    title: "Aether Capital",
    description: "Invest beyond human limits. Advanced AI models analyze global markets in real-time.",
    longDescription: "Aether Capital is an AI-driven investment platform. It uses deep learning models to process millions of data points across global markets, providing users with high-alpha investment opportunities and risk-adjusted portfolios.",
    thumbnail: "https://images.unsplash.com/photo-1454165833767-131e24a13fed?auto=format&fit=crop&q=80&w=800",
    category: "AI Finance",
    tags: ["AI/ML", "Fintech", "Analytics"],
    features: ["Neural Market Analysis", "Automated Rebalancing", "Risk Assessment Engine", "Institutional Grade APIs"],
    liveUrl: "/landing-page-5",
    githubUrl: "https://github.com/codewithpriya-522",
  },
  {
    id: "petsphere",
    title: "PetSphere",
    description: "Unified platform for modern pet parenting. Online vet, grooming, and AI diet plans.",
    longDescription: "PetSphere is a comprehensive health-tech platform for pet owners. It offers 24/7 online veterinary consultations, door-step grooming services, and precision AI-generated diet plans for every breed.",
    thumbnail: "https://images.unsplash.com/photo-1505751172107-5739a0077221?auto=format&fit=crop&q=80&w=800",
    category: "HealthTech",
    tags: ["PetCare", "AI", "Marketplace"],
    features: ["24/7 Vet Support", "Smart Breed Matching", "Nutritional Tracking", "Service Marketplace"],
    liveUrl: "/landing-page-6",
    githubUrl: "https://github.com/codewithpriya-522",
  },
  {
    id: "design-pro",
    title: "DesignPro",
    description: "Elite design education. Transformative programs to become a product leader in the industry.",
    longDescription: "DesignPro is a specialized ed-tech platform for aspiring product designers. It features interactive workshops, industry mentorship programs, and a curated curriculum focused on practical skills and portfolio building.",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
    category: "EdTech",
    tags: ["Design", "Mentorship", "UX"],
    features: ["Live Design Workshops", "Portfolio Reviews", "Career Mentorship", "Industry Certifications"],
    liveUrl: "/landing-page-7",
    githubUrl: "https://github.com/codewithpriya-522",
  },
  {
    id: "nexus-vortex",
    title: "Nexus Dashboard",
    description: "High-performance SaaS dashboard for real-time analytics and team collaboration.",
    longDescription: "Nexus is an enterprise-grade dashboard solution. It centralizes data streams into actionable insights, featuring role-based access, real-time collaboration, and advanced data visualization components.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "SaaS",
    tags: ["Next.js", "TanStack", "Dashboard"],
    features: ["Real-time Data Visuals", "Team Activity Streams", "Role-based Access", "Custom Integration"],
    liveUrl: "/landing-page-8",
    githubUrl: "https://github.com/codewithpriya-522",
  },
  {
    id: "forma-agency",
    title: "Forma.co",
    description: "High-end digital agency focused on craftsmanship, innovation, and shaping ideas into reality.",
    longDescription: "Forma.co is a premium digital agency landing page. It showcases a portfolio of high-impact projects, emphasizing minimalist design, smooth transitions, and a focus on high-end craftsmanship in digital product development.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Agency",
    tags: ["Branding", "Creative", "Minimalist"],
    features: ["Interactive Portfolio", "Smooth Page Transitions", "Dynamic Case Studies", "Contact Integration"],
    liveUrl: "/landing-page-9",
    githubUrl: "https://github.com/codewithpriya-522",
  },
];
