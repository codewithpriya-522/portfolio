"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, ArrowUpRight, X, LayoutDashboard, Code2, Rocket } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Aetheria",
    description: "Experience the next dimension of digital cinematography. Curated for the eyes that demand perfection.",
    longDescription: "Aetheria is a next-generation cinematic streaming platform. Built with Next.js and Framer Motion, it features 8K video support, spatial audio, and an immersive user interface designed to disappear, letting the content take center stage.",
    tech: ["Next.js", "Framer Motion", "8K Streaming", "Tailwind"],
    features: ["Cinematic Interface", "Multi-device Sync", "Spatial Audio Support", "Curated Collections"],
    link: "/landing-page-1",
    github: "https://github.com/codewithpriya-522",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mindloop",
    description: "A space where curiosity meets clarity — reader depth, writer reach, and meaningful newsletters.",
    longDescription: "Mindloop reimagines the newsletter experience. It provides a minimalist environment for writers to focus on craft and readers to find depth, with integrated HLS video support and community engagement features.",
    tech: ["React.js", "HLS.js", "Tailwind", "Node.js"],
    features: ["Distraction-free Writing", "Real-time Analytics", "Community Circles", "Smart Distribution"],
    link: "/landing-page-2",
    github: "https://github.com/codewithpriya-522",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Halo USD",
    description: "An automated, reward-powered digital dollar built for native passive earnings and DeFi connection.",
    longDescription: "Halo USD is a Web3 financial platform that automates yield generation for stablecoin holders. It integrates seamlessly with major DeFi protocols while maintaining a stable peg to the US dollar.",
    tech: ["Web3.js", "Solidity", "React", "Chart.js"],
    features: ["Automated Yield", "DeFi Integration", "Real-time Price Tracking", "Institutional Security"],
    link: "/landing-page-3",
    github: "https://github.com/codewithpriya-522",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Feastly",
    description: "Taste the future of food delivery. From Michelin-level restaurants to midnight cravings.",
    longDescription: "Feastly is a premium food delivery ecosystem. It connects users with elite culinary experiences, featuring AI-powered recommendations and lightning-fast logistics optimized for quality.",
    tech: ["Next.js", "GSAP", "Tailwind", "PostCSS"],
    features: ["AI Cravings Engine", "Live Map Tracking", "Michelin-only Mode", "Priority Delivery"],
    link: "/landing-page-4",
    github: "https://github.com/codewithpriya-522",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "PetSphere",
    description: "Unified platform for modern pet parenting. Online vet, grooming, and AI diet plans.",
    longDescription: "PetSphere is a comprehensive health-tech platform for pet owners. It offers 24/7 online veterinary consultations, door-step grooming services, and precision AI-generated diet plans for every breed.",
    tech: ["React", "AI/ML", "Tailwind", "Express"],
    features: ["24/7 Vet Support", "Smart Breed Matching", "Nutritional Tracking", "Service Marketplace"],
    link: "/landing-page-6",
    github: "https://github.com/codewithpriya-522",
    image: "https://images.unsplash.com/photo-1505751172107-5739a0077221?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Nexus Dashboard",
    description: "High-performance SaaS dashboard for real-time analytics and team collaboration.",
    longDescription: "Nexus is an enterprise-grade dashboard solution. It centralizes data streams into actionable insights, featuring role-based access, real-time collaboration, and advanced data visualization components.",
    tech: ["Next.js", "TanStack", "Chart.js", "Tailwind"],
    features: ["Real-time Data Visuals", "Team Activity Streams", "Role-based Access", "Custom Integration"],
    link: "/landing-page-8",
    github: "https://github.com/codewithpriya-522",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
              <Rocket className="w-4 h-4" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A curated selection of my recent work, showcasing expertise in building scalable, user-centric applications with modern web technologies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card 
              key={idx} 
              className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 flex flex-col h-full cursor-pointer hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 bg-background/80 hover:bg-primary backdrop-blur-md rounded-full text-foreground hover:text-primary-foreground transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 bg-background/80 hover:bg-primary backdrop-blur-md rounded-full text-foreground hover:text-primary-foreground transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <CardHeader className="pt-6 relative z-20 -mt-12">
                <CardTitle className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[11px] font-medium bg-secondary border border-border rounded-md text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 text-[11px] font-medium bg-secondary border border-border rounded-md text-secondary-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-4">
                <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="pt-0 pb-6 mt-auto">
                <Button variant="ghost" className="w-full justify-between hover:bg-primary/10 hover:text-primary group/btn border border-transparent hover:border-primary/20" onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}>
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ margin: 0 }}>
          <div 
            className="absolute inset-0 bg-background/90 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300 z-10">
            
            {/* Modal Image Section */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-muted border-r border-border">
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 md:bg-gradient-to-r md:from-transparent md:to-card/90" />
            </div>

            {/* Modal Content Section */}
            <div className="w-full md:w-3/5 flex flex-col max-h-full overflow-y-auto">
              <div className="p-6 md:p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{selectedProject.title}</h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-secondary hover:bg-secondary/80 rounded-full transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-3 py-1">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-8">
                  <section>
                    <h4 className="text-lg font-semibold flex items-center gap-2 mb-3 text-foreground">
                      <LayoutDashboard className="w-5 h-5 text-primary" />
                      Project Overview
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </section>

                  <section>
                    <h4 className="text-lg font-semibold flex items-center gap-2 mb-3 text-foreground">
                      <Code2 className="w-5 h-5 text-primary" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground bg-secondary/50 p-3 rounded-lg border border-border">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              <div className="p-6 border-t border-border bg-background/50 flex flex-wrap gap-4 mt-auto">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "default", className: "flex-1 sm:flex-none gap-2 hover:scale-105 transition-transform" })}>
                  <ExternalLink className="w-4 h-4" /> Live Preview
                </a>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", className: "flex-1 sm:flex-none gap-2 hover:scale-105 transition-transform" })}>
                  <Github className="w-4 h-4" /> View Source
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
