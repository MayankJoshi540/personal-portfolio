"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  id,
  delay = 0
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 25,
          scale: 0.99
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
            once: true
          }
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id={id} className={className}>
      {children}
    </section>
  );
}
