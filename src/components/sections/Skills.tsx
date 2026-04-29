"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Globe, Database, Smartphone, Layout, Palette, Server, Github, Chrome, Terminal, ShieldCheck, HeartPulse, Layers } from "lucide-react";

const skills = [
  {
    category: "Frameworks & Libraries",
    icon: <Globe className="w-5 h-5 text-primary" />,
    items: ["React.js", "Angular", "Next.js", "Redux", "Redux-Saga", "Express"],
  },
  {
    category: "Frontend & Styling",
    icon: <Layout className="w-5 h-5 text-violet-500" />,
    items: ["JavaScript (ES6+)", "Tailwind CSS", "Material UI", "Bootstrap", "HTML5/CSS3"],
  },
  {
    category: "Backend & Database",
    icon: <Server className="w-5 h-5 text-yellow-500" />,
    items: ["Node.js", "REST APIs", "Context API", "Supabase"],
  },
  {
    category: "Tools & Testing",
    icon: <Terminal className="w-5 h-5 text-orange-500" />,
    items: ["Figma", "Git/GitHub", "Chrome DevTools", "Webpack/Babel"],
  },
];


export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary uppercase tracking-widest text-[10px]">Proficiency</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">My Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl">
            A comprehensive list of the technologies and tools I've mastered over the past 3 years to build high-scale web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <Card key={idx} className="glass-card hover:scale-[1.02] transition-transform duration-300 border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-secondary/50 border border-border">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground capitalize tracking-tight">{skill.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="secondary" className="px-3 py-1 bg-secondary/50 border-border text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Stack Ribbon */}
        <div className="mt-16 py-8 px-12 glass rounded-3xl border-border flex flex-wrap items-center justify-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <Github className="w-8 h-8" />
          <Code2 className="w-8 h-8" />
          <Chrome className="w-8 h-8" />
          <Layers className="w-8 h-8" />
          <Palette className="w-8 h-8" />
          <HeartPulse className="w-8 h-8" />
          <Smartphone className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
}
