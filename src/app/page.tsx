import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-brand-muted text-sm flex items-center justify-center space-x-1">
          <span>&copy; {new Date().getFullYear()} Mayank Joshi. Built with</span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          <span>and Next.js</span>
        </p>
      </footer>
    </main>
  );
}
