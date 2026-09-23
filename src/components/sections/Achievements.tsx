"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Achievements() {
  const containerRef = useRef<HTMLElement>(null);

  const achievements = [
    {
      text: "Full Stack Web Developer Intern at <strong>C-Zentrix</strong>, engineering real-time video conferencing with <strong>LiveKit, WebRTC, NestJS, Redis</strong>, and AI models (Gemini, Deepgram, Google Cloud TTS)."
    },
    {
      text: "Engineered scalable REST APIs and responsive UI at <strong>Global Education Talent</strong>, increasing throughput by 15% and cutting DB response time by 20%."
    },
    {
      text: "Built & launched <strong>PrepWise AI</strong> (AI Mock Interview platform with Gemini AI & Clerk) and <strong>APIRun</strong> (LeetCode-style backend engineering system challenges)."
    },
    {
      text: "Pursuing <strong>Bachelor of Computer Applications (Honours)</strong> (2024–2028) at <strong>Maharaja Surajmal Institute (GGSIPU)</strong>, New Delhi."
    },
    {
      text: "Scored <strong>93% in Best Four Subjects</strong> in Senior Secondary (Commerce with Mathematics) and active in <strong>Data Structures, Algorithms & Problem Solving</strong> on LeetCode."
    }
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".gsap-ach-item", {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
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
    <section ref={containerRef} id="achievements" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24 min-w-0">
      <div className="font-mono text-lg text-text-dim mb-4 select-none">// achievements.txt</div>
      
      <div className="font-mono text-xl mb-6 border-b border-editor-border-soft pb-3">
        <span className="text-accent-violet font-bold">class</span>{" "}
        <span className="text-accent-teal">Achievements</span> <span className="text-text-dim">{"{"}</span>
      </div>

      <div className="bg-editor-panel border border-editor-border rounded-2xl p-5 sm:p-7 md:p-8 font-mono text-base sm:text-lg shadow-xl space-y-4 sm:space-y-5 min-w-0">
        {achievements.map((ach, idx) => (
          <div 
            key={idx} 
            className="gsap-ach-item flex items-start p-2.5 sm:p-3 -mx-2 rounded-lg hover:bg-editor-panel-alt/40 border border-transparent hover:border-editor-border/40 transition-all duration-150 group min-w-0"
          >
            <span className="text-accent-teal font-extrabold text-base sm:text-lg mr-3 select-none group-hover:text-accent-amber transition-colors flex-shrink-0 mt-0.5">[x]</span>
            <div 
              className="text-text-mid font-sans text-base sm:text-lg leading-relaxed group-hover:text-text-high transition-colors min-w-0 break-words flex-1"
              dangerouslySetInnerHTML={{ __html: ach.text }}
            />
          </div>
        ))}
      </div>

      <div className="font-mono text-xl text-text-dim mt-6 select-none">
        {"}"}
      </div>
    </section>
  );
}
