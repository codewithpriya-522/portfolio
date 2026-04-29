"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Github, Linkedin, Send, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-10 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's build something <span className="text-gradient underline underline-offset-8 decoration-primary/20">extraordinary</span> together.</h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-lg">
              Whether you have a question, a project idea, or just want to say hi, feel free to reach out. I'm always open to discussing new opportunities and challenges.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email Me</p>
                  <p className="text-lg font-medium">codewithpriya522@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-all">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">WhatsApp</p>
                  <p className="text-lg font-medium">+91 8167686159</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-lg font-medium">Kolkata, India</p>
                </div>
              </div>

            </div>

            <div className="mt-12 pt-12 border-t border-border flex gap-6">
              <Link href="#" className="p-3 rounded-xl bg-secondary border border-border hover:bg-primary/10 hover:border-primary/50 transition-all hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-3 rounded-xl bg-secondary border border-border hover:bg-primary/10 hover:border-primary/50 transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-3 rounded-xl bg-secondary border border-border hover:bg-primary/10 hover:border-primary/50 transition-all hover:-translate-y-1 text-primary">
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <Card className="glass shadow-2xl border-border rounded-3xl overflow-hidden p-2">
            <CardContent className="p-8 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold opacity-70 ml-1">Full Name</label>
                  <Input placeholder="John Doe" className="bg-secondary/50 border-border focus:border-primary h-12 px-4 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold opacity-70 ml-1">Email Address</label>
                  <Input placeholder="john@example.com" type="email" className="bg-secondary/50 border-border focus:border-primary h-12 px-4 rounded-xl" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-70 ml-1">Subject</label>
                <Input placeholder="How can I help you?" className="bg-secondary/50 border-border focus:border-primary h-12 px-4 rounded-xl" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-70 ml-1">Your Message</label>
                <Textarea placeholder="Tell me about your project..." className="bg-secondary/50 border-border focus:border-primary min-h-[160px] p-4 rounded-xl" />
              </div>

              <Button size="lg" className="w-full h-14 text-base font-bold rounded-xl group overflow-hidden relative">
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <Send className="w-4 h-4 transition-transform group-hover:rotate-12 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-primary to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
