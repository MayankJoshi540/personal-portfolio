"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      hash: "commit e9a174c",
      date: "Aug 2026 — Nov 2026",
      role: "Full Stack Web Developer Intern",
      company: "C-Zentrix · Gurugram",
      diffs: [
        "Developing a real-time video conferencing platform using React, TypeScript, NestJS, LiveKit, WebRTC, Redis, MariaDB, and WebSockets.",
        "Built real-time features including screen sharing, dynamic layouts, participant management, live captions, multilingual translation, and breakout rooms.",
        "Integrated Gemini, Deepgram, Google Cloud TTS, and MediaPipe for AI-powered transcription, translation, speech synthesis, and video analysis.",
        "Implemented Redis-backed state management and load balancing to distribute real-time traffic across backend instances."
      ]
    },
    {
      hash: "commit 82e5b9f",
      date: "Jan 2026 — Mar 2026",
      role: "Full Stack Developer Intern",
      company: "Global Education Talent · Remote",
      diffs: [
        "Developed responsive frontend interfaces using React.js, improving page load speed by 25% through lazy loading and asset optimization.",
        "Built scalable RESTful APIs using Node.js/Express, increasing request throughput by 15% and reducing database query response time by 20%.",
        "Used Git for version control and collaborated with the development team using feature branches."
      ]
    }
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".gsap-exp-card", {
        opacity: 0,
        x: -25,
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
    <section ref={containerRef} id="experience" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24 min-w-0">
      <div className="font-mono text-lg text-text-dim mb-4 select-none">// experience.log</div>
      
      <div className="font-mono text-xl mb-6 border-b border-editor-border-soft pb-3">
        <span className="text-accent-violet font-bold">const</span>{" "}
        <span className="text-text-high">experienceHistory</span> = <span className="text-text-dim">[</span>
      </div>

      <div className="relative pl-5 sm:pl-7 my-8 border-l-2 border-dashed border-editor-border min-w-0">
        {experiences.map((exp, idx) => (
          <div key={idx} className="gsap-exp-card relative mb-12 last:mb-0 group min-w-0">
            {/* Git node dot */}
            <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-editor-bg border-2 border-accent-violet flex items-center justify-center z-10 transition-all duration-150 group-hover:border-accent-teal group-hover:shadow-[0_0_8px_#5eead4]">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-violet group-hover:bg-accent-teal group-hover:scale-130 transition-all duration-150"></div>
            </div>
            
            <div className="bg-editor-panel border border-editor-border rounded-2xl p-5 sm:p-7 shadow-xl hover:border-editor-border-soft hover:-translate-y-0.5 transition-all duration-150 min-w-0">
              <div className="flex justify-between items-center flex-wrap gap-2 mb-3 font-mono text-sm sm:text-base md:text-lg">
                <span className="text-accent-amber font-semibold">{exp.hash}</span>
                <span className="text-text-dim">{exp.date}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-high mb-1 break-words">{exp.role}</h3>
              <span className="text-accent-teal font-mono text-base sm:text-lg mb-4 block break-words">{exp.company}</span>
              
              <div className="bg-editor-sidebar border border-editor-border rounded-lg p-4 sm:p-5 font-mono text-sm sm:text-base md:text-lg overflow-x-auto leading-relaxed break-words">
                {exp.diffs.map((diff, dIdx) => (
                  <div key={dIdx} className="text-[#a6e22e] whitespace-pre-wrap py-1 px-1.5 -mx-1.5 rounded hover:bg-[#a6e22e]/10 transition-colors duration-100 break-words">
                    + {diff}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="font-mono text-xl text-text-dim mt-6">
        <span className="text-text-dim">];</span>
      </div>
    </section>
  );
}
