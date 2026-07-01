"use client";

import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      filename: "prepwise_ai.tsx",
      title: "PrepWiseAi – AI Interview platform",
      desc: "A full-stack platform generating mock interviews and real-time structured feedback based on skills and roles. Uses Gemini AI to power custom questions and grading.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Gemini AI"],
      live: "#",
      github: "https://github.com/MayankJoshi540"
    },
    {
      filename: "ibuiltthis.ts",
      title: "iBuiltThis – Project Showcase",
      desc: "A modern, responsive platform designed for developers to share and showcase projects. Focused on responsive layouts, clean layouts, and rapid deployments.",
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      live: "#",
      github: "https://github.com/MayankJoshi540"
    }
  ];

  return (
    <section id="projects" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24">
      <div className="font-mono text-sm text-text-dim mb-4 select-none">// projects.js</div>
      
      <div className="font-mono text-base md:text-lg mb-6 border-b border-editor-border-soft pb-3">
        <span className="text-accent-violet font-bold">const</span>{" "}
        <span className="text-text-high">projectsList</span> = <span className="text-text-dim">[</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="bg-editor-panel border border-editor-border rounded-xl overflow-hidden flex flex-col shadow-xl hover:border-accent-teal hover:shadow-accent-teal/5 transition-all duration-200"
          >
            {/* Fake window title bar */}
            <div className="h-8 bg-editor-sidebar border-b border-editor-border flex items-center px-4 relative select-none">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-coral"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent-amber"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent-teal"></span>
              </div>
              <span className="font-mono text-xs text-text-dim absolute left-1/2 transform -translate-x-1/2">
                {proj.filename}
              </span>
            </div>
            
            {/* Content body */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-text-high mb-2">{proj.title}</h3>
              <p className="text-text-mid text-sm leading-relaxed mb-4 flex-grow">{proj.desc}</p>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="font-mono text-[10px] font-semibold px-2 py-1 rounded bg-accent-violet/5 border border-accent-violet/15 text-accent-violet"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 mt-auto">
                <a 
                  href={proj.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-accent-teal text-sm font-semibold hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Preview</span>
                </a>
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-text-dim hover:text-text-high transition-colors"
                  title="GitHub Source"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="font-mono text-base md:text-lg text-text-dim mt-6 select-none">
        <span>];</span>
      </div>
    </section>
  );
}
