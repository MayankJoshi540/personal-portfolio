"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MagneticButton from "../MagneticButton";
import { ArrowRight, Download } from "lucide-react";

const words = ["Full Stack Developer", "NestJS & React Specialist", "Real-Time Systems", "Problem Solver"];

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
      <div className="max-w-5xl mx-auto px-6 text-center">
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
                className="inline-block text-accent-teal"
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
          className="max-w-2xl mx-auto text-xl md:text-2xl text-brand-muted leading-relaxed mb-12"
        >
          Hi, I&apos;m <span className="text-white font-semibold">Mayank Joshi</span>. I build high-performance web applications and real-time backend systems. Transforming complex ideas into production-ready reality.
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
              className="group flex items-center space-x-2 px-8 py-4 bg-white text-brand-dark rounded-2xl font-bold text-lg transition-transform hover:scale-105"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="/resume.pdf"
              download
              className="flex items-center space-x-2 px-8 py-4 bg-brand-card border border-white/10 rounded-2xl font-bold text-lg text-white hover:bg-brand-card/80 transition-all"
            >
              <Download className="w-5 h-5" />
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
        <span className="text-xs uppercase tracking-widest text-brand-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20" />
      </motion.div>
    </section>
  );
}
