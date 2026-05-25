"use client";

import AnimatedSection from "../AnimatedSection";
import { User, Code2, GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-[1px] bg-brand-accent" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-accent">Discovery</h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            The Story Behind <br /> the Code.
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Story */}
          <AnimatedSection delay={0.1} className="md:col-span-8 bg-brand-card/30 border border-white/5 p-8 md:p-12 rounded-[2rem] glass">
            <User className="w-8 h-8 text-brand-accent mb-6" />
            <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
              <p>
                I am a passionate <strong className="text-white">Full Stack Web Developer</strong> who believes that code is a medium for storytelling and problem-solving.
              </p>
              <p>
                Currently pursuing my B.C.A. (Hons.) at <strong className="text-white">Maharaja Surajmal Institute</strong>, I have spent the last few years immersing myself in the React ecosystem. My journey is fueled by a relentless curiosity and a commitment to mastering the <strong className="text-brand-accent">MERN Stack</strong>.
              </p>
              <p>
                I thrive at the intersection of robust backend logic and pixel-perfect frontend design. Whether I&apos;m architecting database schemas or fine-tuning CSS transitions, my goal is always the same: to create digital experiences that are as functional as they are beautiful.
              </p>
            </div>
          </AnimatedSection>

          {/* Side Stats */}
          <div className="md:col-span-4 grid grid-cols-1 gap-6">
            <AnimatedSection delay={0.2} className="bg-brand-primary/10 border border-brand-primary/20 p-8 rounded-[2rem] flex flex-col justify-center items-center text-center">
              <GraduationCap className="w-8 h-8 text-brand-primary mb-4" />
              <h4 className="text-3xl font-black text-white">2025</h4>
              <p className="text-sm text-brand-muted uppercase tracking-tighter">Graduation</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="bg-brand-secondary/10 border border-brand-secondary/20 p-8 rounded-[2rem] flex flex-col justify-center items-center text-center">
              <Code2 className="w-8 h-8 text-brand-secondary mb-4" />
              <h4 className="text-3xl font-black text-white">10+</h4>
              <p className="text-sm text-brand-muted uppercase tracking-tighter">Large Scale Projects</p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="bg-brand-accent/10 border border-brand-accent/20 p-8 rounded-[2rem] flex flex-col justify-center items-center text-center">
              <Award className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="text-3xl font-black text-white">MERN</h4>
              <p className="text-sm text-brand-muted uppercase tracking-tighter">Specialist</p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
