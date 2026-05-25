"use client";

import AnimatedSection from "../AnimatedSection";
import { Mail, Send } from "lucide-react";
import MagneticButton from "../MagneticButton";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <AnimatedSection>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-[1px] bg-brand-accent" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-accent">Connection</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
              Let&apos;s build <br /> something <br /> legendary.
            </h3>
            <p className="text-xl text-brand-muted mb-12 max-w-md">
              Currently open to full-time roles and high-impact freelance collaborations.
            </p>

            <div className="space-y-6">
              <a href="mailto:joshimayank646@gmail.com" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-card flex items-center justify-center border border-white/5 group-hover:border-brand-accent transition-colors">
                  <Mail className="w-5 h-5 text-brand-muted group-hover:text-brand-accent transition-colors" />
                </div>
                <span className="text-lg font-medium text-brand-muted group-hover:text-white transition-colors">joshimayank646@gmail.com</span>
              </a>
              <div className="flex space-x-4 pt-4">
                {[
                  { icon: <GithubIcon />, href: "https://github.com/MayankJoshi540" },
                  { icon: <LinkedinIcon />, href: "https://linkedin.com/in/mayank-joshi-a77935220" }
                ].map((social, i) => (
                  <MagneticButton key={i}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-brand-card flex items-center justify-center border border-white/5 hover:border-brand-accent text-brand-muted hover:text-brand-accent transition-all"
                    >
                      {social.icon}
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-brand-card/30 border border-white/5 rounded-[2.5rem] p-8 md:p-12 glass">
            <form action="https://formspree.io/f/movwrlol" method="POST" className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder:text-brand-muted/30"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder:text-brand-muted/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none placeholder:text-brand-muted/30"
                />
              </div>

              <MagneticButton>
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center space-x-3 py-5 bg-brand-primary hover:bg-brand-accent text-white rounded-2xl font-bold transition-all shadow-xl shadow-brand-primary/20"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </MagneticButton>
            </form>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
