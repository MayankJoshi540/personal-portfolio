"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MagneticButton from "../MagneticButton";
import { ArrowRight, Download } from "lucide-react";

const words = ["Creative Developer", "MERN Specialist", "UI/UX Enthusiast", "Problem Solver"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 glass-glow mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-800 animate-ping" />
          <span className="text-xs font-medium text-brand-text/80 tracking-wide uppercase">Available for work</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]"
        >
          Engineering <br />
          <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-brand-muted leading-relaxed mb-12"
        >
          Hi, I&apos;m <span className="text-white font-semibold">Mayank Joshi</span>. I build immersive, high-performance web experiences with the <span className="text-brand-accent">MERN Stack</span>. Transforming complex ideas into pixel-perfect reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="group flex items-center space-x-2 px-8 py-4 bg-white text-brand-dark rounded-2xl font-bold transition-transform hover:scale-105"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="/resume.pdf"
              download
              className="flex items-center space-x-2 px-8 py-4 bg-brand-card border border-white/10 rounded-2xl font-bold text-white hover:bg-brand-card/80 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
      </motion.div>
    </section>
  );
}
