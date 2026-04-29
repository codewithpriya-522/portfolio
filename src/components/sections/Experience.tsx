"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Front End Developer",
    company: "Intersoft KK",
    location: "Kolkata, India",
    period: "Aug 2025 - Present",
    description: "Rapidly upskilled in Angular and Next.js, contributing to early project delivery. Implemented reusable UI components and collaborated with cross-functional stakeholders to increase sprint throughput by 10%. Championed a reusable UI library adopted by the team.",
    tech: ["Angular", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    role: "Frontend Developer",
    company: "Elrising Technology Services Pvt. Ltd.",
    location: "Kolkata, India",
    period: "Apr 2023 - Aug 2025",
    description: "Partnered with product, design, and QA to enforce quality standards and reduce rework by 10%. Owned end-to-end delivery of frontend modules. Implemented client-side caching and code splitting to sustain 99.95% UI uptime during peak traffic.",
    tech: ["React.js", "Redux", "JavaScript", "Tailwind CSS", "Material UI", "Bootstrap"],
  },
];


export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">Experience</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Journey Through the <span className="text-gradient">Professional Word</span></h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl">
            A timeline of my professional growth, focusing on building scalable systems and delivering exceptional user experiences.
          </p>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-24 pl-8 md:pl-16 space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Dot */}
              <div className="absolute -left-[41px] md:-left-[73px] top-6 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)] border-4 border-background" />
              
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground font-medium">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {exp.company}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {exp.location}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-secondary border-border hover:bg-secondary/80 transition-colors">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
