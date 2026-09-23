"use client";

import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  const projects = [
    {
      filename: "prepwise_ai.tsx",
      title: "PrepWise AI – AI Mock Interview Platform",
      desc: "Built an AI-powered mock interview platform with 10+ mock interviews completed by users. Integrates Gemini AI to generate role-specific interview questions and provide personalized feedback with Clerk authentication and protected routes.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Gemini AI"],
      live: "https://preppwisee.vercel.app",
      github: "https://github.com/MayankJoshi540/PrepWise-AI"
    },
    {
      filename: "apirun.ts",
      title: "APIRun – Backend Engineering Challenge Platform",
      desc: "A LeetCode-style platform for backend engineering focused on real-world API and system challenges, including rate limiting, race conditions, distributed locks, concurrency, and strict REST API contracts.",
      tech: ["Node.js", "Express.js", "TypeScript", "REST APIs"],
      live: "https://apirun.vercel.app",
      github: "https://github.com/MayankJoshi540/APIRun"
    }
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".gsap-proj-card", {
        opacity: 0,
        y: 25,
        scale: 0.98,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          once: true
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="projects" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24 min-w-0">
      <div className="font-mono text-lg text-text-dim mb-4 select-none">// projects.js</div>
      
      <div className="font-mono text-xl mb-6 border-b border-editor-border-soft pb-3">
        <span className="text-accent-violet font-bold">const</span>{" "}
        <span className="text-text-high">projectsList</span> = <span className="text-text-dim">[</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6 min-w-0">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="gsap-proj-card bg-editor-panel border border-editor-border rounded-xl overflow-hidden flex flex-col shadow-xl hover:border-accent-teal hover:shadow-accent-teal/5 transition-all duration-200 min-w-0"
          >
            {/* Fake window title bar */}
            <div className="h-9 bg-editor-sidebar border-b border-editor-border flex items-center px-4 relative select-none">
              <div className="flex gap-1.5 flex-shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-coral"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent-amber"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent-teal"></span>
              </div>
              <span className="font-mono text-sm sm:text-base text-text-dim absolute left-1/2 transform -translate-x-1/2 truncate max-w-[65%]">
                {proj.filename}
              </span>
            </div>
            
            {/* Content body */}
            <div className="p-5 sm:p-7 flex flex-col flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold text-text-high mb-3 break-words">{proj.title}</h3>
              <p className="text-text-mid text-base sm:text-lg leading-relaxed mb-5 flex-grow break-words">{proj.desc}</p>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="font-mono text-xs sm:text-sm font-semibold px-2.5 py-1 rounded bg-accent-violet/5 border border-accent-violet/15 text-accent-violet"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-5 mt-auto pt-2">
                <a 
                  href={proj.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-accent-teal text-base sm:text-lg font-semibold hover:underline"
                >
                  <ExternalLink className="w-5 h-5 flex-shrink-0" />
                  <span>Live Preview</span>
                </a>
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-text-dim hover:text-text-high transition-colors"
                  title="GitHub Source"
                >
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="font-mono text-xl text-text-dim mt-6 select-none">
        <span>];</span>
      </div>
    </section>
  );
}
