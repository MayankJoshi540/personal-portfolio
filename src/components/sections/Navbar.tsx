"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import MagneticButton from "../MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-full border border-white/10 glass ${
          scrolled ? "bg-brand-dark/80" : "bg-transparent border-transparent backdrop-blur-0"
        }`}>
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            MJ<span className="text-brand-accent">.</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-brand-muted hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <MagneticButton>
            <Link
              href="#contact"
              className="px-5 py-2 rounded-full bg-brand-primary text-white text-sm font-bold shadow-lg shadow-brand-primary/20 hover:bg-brand-accent transition-colors"
            >
              Hire Me
            </Link>
          </MagneticButton>
        </div>
      </div>
    </motion.nav>
  );
}
