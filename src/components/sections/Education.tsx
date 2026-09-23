"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Education() {
  const containerRef = useRef<HTMLElement>(null);

  const educations = [
    {
      degree: "Bachelor of Computer Applications (Honours)",
      date: "2024 — 2028",
      school: "Maharaja Surajmal Institute (GGSIPU), New Delhi",
      note: "Pursuing Honours in BCA with core focus on Software Engineering, Data Structures & Algorithms, Backend Architectures, and Full Stack Development."
    },
    {
      degree: "Senior Secondary (Commerce with Mathematics)",
      date: "2023 — 2024",
      school: "Central Board of Secondary Education (CBSE)",
      note: "Completed Senior Secondary education specializing in Commerce with Mathematics. Achieved 93% in Best Four Subjects."
    }
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".gsap-edu-card", {
        opacity: 0,
        y: 25,
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
    <section ref={containerRef} id="education" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24 min-w-0">
      <div className="font-mono text-lg text-text-dim mb-4 select-none"># education.yml</div>
      
      <div className="font-mono text-xl mb-6 border-b border-editor-border-soft pb-3">
        <span className="text-accent-violet font-bold">education:</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6 min-w-0">
        {educations.map((edu, idx) => (
          <div 
            key={idx} 
            className="gsap-edu-card bg-editor-panel border border-editor-border rounded-2xl p-5 sm:p-7 shadow-xl hover:border-accent-violet transition-all duration-200 min-w-0 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-3 mb-3 flex-wrap sm:flex-nowrap">
                <h3 className="font-mono font-bold text-text-high text-lg sm:text-xl leading-snug break-words">{edu.degree}</h3>
                <span className="font-mono text-base sm:text-lg text-text-dim whitespace-nowrap flex-shrink-0">{edu.date}</span>
              </div>
              <div className="text-accent-violet text-base sm:text-lg font-medium mb-3 break-words">{edu.school}</div>
            </div>
            <p className="text-text-mid text-base sm:text-lg leading-relaxed break-words">{edu.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
