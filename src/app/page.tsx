import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1.5 backdrop-blur-md">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>

      {/* Modern Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PRIYA.DEV. Crafted with <span className="text-red-500">♥</span> using Next.js & Shadcn.
          </p>
          <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="mailto:codewithpriya522@gmail.com" className="hover:text-primary transition-colors">codewithpriya522@gmail.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
