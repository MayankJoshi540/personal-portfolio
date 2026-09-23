"use client";

import { useRef } from "react";
import { MapPin, GraduationCap, Code } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".gsap-about-code", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        clearProps: "all"
      })
      .from(".gsap-about-title", {
        opacity: 0,
        y: 25,
        duration: 0.6,
        clearProps: "all"
      }, "-=0.3")
      .from(".gsap-about-bio", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        clearProps: "all"
      }, "-=0.3")
      .from(".gsap-about-pill", {
        opacity: 0,
        scale: 0.9,
        y: 10,
        stagger: 0.08,
        duration: 0.4,
        ease: "back.out(1.5)",
        clearProps: "all"
      }, "-=0.2")
      .from(".gsap-about-btn", {
        opacity: 0,
        y: 15,
        stagger: 0.08,
        duration: 0.4,
        clearProps: "all"
      }, "-=0.2");
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="about" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24 pt-4 min-w-0">
      <div className="font-mono text-lg text-text-dim mb-4 select-none">// about.md</div>
      
      <div className="gsap-about-code font-mono text-base sm:text-lg mb-8 bg-editor-sidebar/40 border border-editor-border p-4 sm:p-5 rounded-xl leading-relaxed max-w-full overflow-x-auto min-w-0">
        <span className="text-accent-violet font-bold">const</span>{" "}
        <span className="text-text-high">developer</span> = <span className="text-text-dim">{"{"}</span>
        <br />
        &nbsp;&nbsp;name: <span className="text-accent-amber">"Mayank Joshi"</span>,
        <br />
        &nbsp;&nbsp;role: <span className="text-accent-amber">"Full Stack Developer"</span>,
        <br />
        &nbsp;&nbsp;specialty: <span className="text-accent-amber">"React, NestJS &amp; Real-Time Systems"</span>
        <br />
        <span className="text-text-dim">{"};"}</span>
      </div>

      <div className="space-y-6 min-w-0">
        <h1 className="gsap-about-title text-3xl sm:text-4xl md:text-5xl font-black text-text-high leading-tight tracking-tight max-w-3xl break-words">
          Engineering web products that are{" "}
          <span className="text-accent-teal">
            functional &amp; intelligent
          </span>
          .
        </h1>
        
        <p className="gsap-about-bio text-lg sm:text-xl md:text-2xl text-text-mid leading-relaxed max-w-3xl break-words">
          Hi, I'm <strong className="text-text-high font-semibold">Mayank Joshi</strong>. I build high-performance web experiences, real-time video architectures, and scalable APIs. With deep experience across React, Next.js, NestJS, LiveKit/WebRTC, and AI integrations, I transform complex ideas into reliable production software.
        </p>

        {/* Meta Pills */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
          <div className="gsap-about-pill flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-editor-panel border border-editor-border text-base sm:text-lg text-text-mid shadow-md">
            <MapPin className="w-5 h-5 text-accent-teal flex-shrink-0" />
            <span>Delhi, India</span>
          </div>
          <div className="gsap-about-pill flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-editor-panel border border-editor-border text-base sm:text-lg text-text-mid shadow-md">
            <GraduationCap className="w-5 h-5 text-accent-teal flex-shrink-0" />
            <span>BCA (Honours) Student</span>
          </div>
          <div className="gsap-about-pill flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-editor-panel border border-editor-border text-base sm:text-lg text-text-mid shadow-md">
            <Code className="w-5 h-5 text-accent-teal flex-shrink-0" />
            <span>Full Stack / WebRTC / AI</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-6">
          <a 
            href="#contact" 
            className="gsap-about-btn group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-4 rounded-xl bg-accent-amber hover:bg-[#ffd27a] text-editor-sidebar font-semibold text-base sm:text-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-amber/10"
          >
            <span>Contact Me</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" 
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
            className="gsap-about-btn inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-4 rounded-xl border border-editor-border bg-transparent hover:bg-editor-panel text-text-high font-semibold text-base sm:text-lg transition-all duration-150 hover:-translate-y-0.5"
          >
            <span>Download Resume</span>
            <svg 
              className="w-5 h-5 flex-shrink-0" 
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
