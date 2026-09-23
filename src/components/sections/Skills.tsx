"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      key: "languages",
      skills: ["JavaScript", "TypeScript", "C++", "C", "Java", "SQL", "HTML", "CSS"]
    },
    {
      key: "frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery"]
    },
    {
      key: "backend",
      skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "Clerk Authentication"]
    },
    {
      key: "databases",
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "Supabase", "MariaDB"]
    },
    {
      key: "tools_and_platforms",
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Render", "WordPress"]
    },
    {
      key: "core_competencies",
      skills: ["Data Structures & Algorithms", "Problem Solving", "Responsive Design", "Version Control"]
    }
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".gsap-skill-category", {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 0.5,
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
    <section ref={containerRef} id="skills" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24 min-w-0">
      <div className="font-mono text-lg text-text-dim mb-4 select-none">// skills.json</div>
      
      <div className="bg-editor-panel border border-editor-border rounded-2xl p-5 sm:p-7 md:p-8 font-mono text-base sm:text-lg shadow-xl overflow-x-auto leading-relaxed relative min-w-0">
        <span className="text-text-dim">{"{"}</span>
        
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="gsap-skill-category my-5 pl-2 sm:pl-4 md:pl-6 min-w-0">
            <span className="text-accent-amber break-words">"{cat.key}"</span>
            <span className="text-text-dim">: </span>
            <span className="text-text-dim">[</span>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 my-3 pl-2 sm:pl-4 border-l border-editor-border-soft min-w-0">
              {cat.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="gsap-skill-tag font-sans text-sm sm:text-base font-medium text-text-high bg-editor-bg border border-editor-border px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg shadow-sm hover:border-accent-amber hover:-translate-y-0.5 transition-all duration-150 cursor-default break-words"
                >
                  {skill}
                </span>
              ))}
            </div>

            <span className="text-text-dim">]</span>
            {idx < skillCategories.length - 1 && <span className="text-text-dim">,</span>}
          </div>
        ))}

        <span className="text-text-dim">{"}"}</span>
      </div>
    </section>
  );
}
