"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, ArrowUpRight, X, LayoutDashboard, Code2, Rocket } from "lucide-react";
import Image from "next/image";

import { landingPages, LandingPageProject } from "@/lib/landing-pages";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<LandingPageProject | null>(null);

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
          {landingPages.map((project) => (
            <Card 
              key={project.id} 
              className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 flex flex-col h-full cursor-pointer hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 bg-background/80 hover:bg-primary backdrop-blur-md rounded-full text-foreground hover:text-primary-foreground transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 bg-background/80 hover:bg-primary backdrop-blur-md rounded-full text-foreground hover:text-primary-foreground transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <CardHeader className="pt-6 relative z-20 -mt-12">
                <CardTitle className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 3).map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[11px] font-medium bg-secondary border border-border rounded-md text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-1 text-[11px] font-medium bg-secondary border border-border rounded-md text-secondary-foreground">
                      +{project.tags.length - 3}
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
                src={selectedProject.thumbnail} 
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
                  {selectedProject.tags.map((t) => (
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

                  {selectedProject.features && (
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
                  )}
                </div>
              </div>

              <div className="p-6 border-t border-border bg-background/50 flex flex-wrap gap-4 mt-auto">
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "default", className: "flex-1 sm:flex-none gap-2 hover:scale-105 transition-transform" })}>
                  <ExternalLink className="w-4 h-4" /> Live Preview
                </a>
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", className: "flex-1 sm:flex-none gap-2 hover:scale-105 transition-transform" })}>
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
