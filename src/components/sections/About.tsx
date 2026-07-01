"use client";

import { MapPin, GraduationCap, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24 pt-4">
      <div className="font-mono text-sm text-text-dim mb-4 select-none">// about.md</div>
      
      <div className="font-mono text-xs md:text-sm mb-8 bg-editor-sidebar/40 border border-editor-border p-4 rounded-xl leading-relaxed max-w-xl">
        <span className="text-accent-violet font-bold">const</span>{" "}
        <span className="text-text-high">developer</span> = <span className="text-text-dim">{"{"}</span>
        <br />
        &nbsp;&nbsp;name: <span className="text-accent-amber">"Mayank Joshi"</span>,
        <br />
        &nbsp;&nbsp;role: <span className="text-accent-amber">"Full Stack Web Developer"</span>,
        <br />
        &nbsp;&nbsp;specialty: <span className="text-accent-amber">"MERN Stack &amp; Next.js"</span>
        <br />
        <span className="text-text-dim">{"};"}</span>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-text-high leading-tight tracking-tight max-w-3xl">
          Engineering web products that are{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-amber via-accent-violet to-accent-teal">
            functional &amp; beautiful
          </span>
          .
        </h1>
        
        <p className="text-base md:text-lg text-text-mid leading-relaxed max-w-2xl">
          Hi, I'm <strong className="text-text-high font-semibold">Mayank Joshi</strong>. I build immersive, high-performance web experiences. With deep knowledge of the React ecosystem and backend engineering, I transform complex ideas into production-ready software.
        </p>

        {/* Meta Pills */}
        <div className="flex flex-wrap gap-3 pt-2">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-editor-panel border border-editor-border text-xs md:text-sm text-text-mid shadow-md">
            <MapPin className="w-4 h-4 text-accent-teal" />
            <span>Delhi, India</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-editor-panel border border-editor-border text-xs md:text-sm text-text-mid shadow-md">
            <GraduationCap className="w-4 h-4 text-accent-teal" />
            <span>BCA (Hons.) Student</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-editor-panel border border-editor-border text-xs md:text-sm text-text-mid shadow-md">
            <Code className="w-4 h-4 text-accent-teal" />
            <span>Full Stack / MERN</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-amber hover:bg-[#ffd27a] text-editor-sidebar font-semibold text-sm md:text-base transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-amber/10"
          >
            <span>Contact Me</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a 
            href="/resume.pdf" 
            download
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-editor-border bg-transparent hover:bg-editor-panel text-text-high font-semibold text-sm md:text-base transition-all duration-150 hover:-translate-y-0.5"
          >
            <span>Download Resume</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
