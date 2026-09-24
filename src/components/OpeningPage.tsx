"use client";

import { useEffect, useRef } from "react";
import { 
  Play, 
  Download, 
  Terminal, 
  FileCode2, 
  Command, 
  Mail,
  ArrowRight
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface OpeningPageProps {
  onLaunch: () => void;
}

export default function OpeningPage({ onLaunch }: OpeningPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".gsap-hero-card", {
        opacity: 0,
        scale: 0.98,
        y: 20,
        duration: 0.6,
        clearProps: "all"
      })
      .from(".gsap-hero-item", {
        opacity: 0,
        y: 15,
        stagger: 0.08,
        duration: 0.5,
        clearProps: "all"
      }, "-=0.3");
    },
    { scope: containerRef }
  );

  return (
    <section 
      id="welcome"
      ref={containerRef}
      className="scroll-mt-[60px] md:scroll-mt-[100px] mb-16 pt-2 select-none min-w-0"
    >
      {/* Main Terminal Window Frame */}
      <div className="gsap-hero-card relative z-10 w-full bg-[#1e222b] border border-[#323846] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Title Bar */}
        <div className="h-10 bg-[#181b22] border-b border-[#2d3340] flex items-center justify-between px-4 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#e06c75]/80 hover:bg-[#e06c75] transition-colors"></span>
            <span className="w-3 h-3 rounded-full bg-[#e5c07b]/80 hover:bg-[#e5c07b] transition-colors"></span>
            <span className="w-3 h-3 rounded-full bg-[#98c379]/80 hover:bg-[#98c379] transition-colors"></span>
          </div>
          <div className="font-mono text-xs text-[#7f8490] truncate max-w-[60%] flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-[#8b85ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            <span>mayank-portfolio &mdash; Visual Studio Code</span>
          </div>
          <div className="font-mono text-[11px] text-[#5c6370] hidden sm:block">
            Scroll Enabled • IDE
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 md:p-9 space-y-6">
          
          {/* Header Row */}
          <div className="gsap-hero-item flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2d3340]">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#5eead4]/10 border border-[#5eead4]/20 text-[#5eead4] font-mono text-xs font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-[#5eead4] animate-pulse"></span>
                <span>VS Code Workspace Edition</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#e6edf3] tracking-tight">
                Mayank Joshi
              </h1>
              <p className="font-mono text-sm sm:text-base text-[#7f8490] mt-1">
                Full Stack Developer &bull; BCA (Honours) Student
              </p>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono text-[#7f8490]">
              <span className="px-2.5 py-1 rounded bg-[#181b22] border border-[#2d3340]">
                React &bull; Next.js &bull; NestJS
              </span>
              <span className="px-2.5 py-1 rounded bg-[#181b22] border border-[#2d3340]">
                Real-Time WebRTC &bull; AI
              </span>
            </div>
          </div>

          {/* About The Format Explanation */}
          <div className="gsap-hero-item bg-[#181b22] border border-[#2d3340] rounded-xl p-5 space-y-3 font-mono text-sm sm:text-base text-[#abb2bf] leading-relaxed">
            <div className="text-[#e5c07b] font-bold text-xs uppercase tracking-wider">
              // How this portfolio works
            </div>
            <p className="text-[#d7dae0]">
              This portfolio is structured as an <strong>interactive VS Code desktop IDE</strong>. You can scroll through the entire workspace naturally or use the tabs above to jump directly between files.
            </p>
            <p className="text-[#7f8490] text-xs sm:text-sm">
              Explore files (<code className="text-[#51a1fc]">about.md</code>, <code className="text-[#8b85ff]">experience.log</code>, <code className="text-[#f1e05a]">projects.js</code>, <code className="text-[#5eead4]">skills.json</code>), run CLI commands in the integrated terminal, or switch themes anytime.
            </p>
          </div>

          {/* Highlights Row */}
          <div className="gsap-hero-item grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-[#abb2bf]">
            <div className="p-3 rounded-lg bg-[#181b22]/60 border border-[#2d3340] flex items-center gap-3">
              <FileCode2 className="w-5 h-5 text-[#51a1fc] flex-shrink-0" />
              <div>
                <div className="font-bold text-[#e6edf3]">Tab Navigation</div>
                <div className="text-[#5c6370]">7 Interactive Files</div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-[#181b22]/60 border border-[#2d3340] flex items-center gap-3">
              <Terminal className="w-5 h-5 text-[#98c379] flex-shrink-0" />
              <div>
                <div className="font-bold text-[#e6edf3]">CLI Terminal</div>
                <div className="text-[#5c6370]">Ctrl + ` to toggle</div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-[#181b22]/60 border border-[#2d3340] flex items-center gap-3">
              <Command className="w-5 h-5 text-[#8b85ff] flex-shrink-0" />
              <div>
                <div className="font-bold text-[#e6edf3]">Command Palette</div>
                <div className="text-[#5c6370]">Ctrl + P quick open</div>
              </div>
            </div>
          </div>

          {/* Action Button CTA Row */}
          <div className="gsap-hero-item flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2d3340]">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/MayankJoshi540"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#181b22] hover:bg-[#2d3340] border border-[#2d3340] flex items-center justify-center text-[#7f8490] hover:text-[#e6edf3] transition-colors"
                title="GitHub"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/mayank-joshi-a77935220"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#181b22] hover:bg-[#2d3340] border border-[#2d3340] flex items-center justify-center text-[#7f8490] hover:text-[#e6edf3] transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="mailto:joshimayank646@gmail.com"
                className="w-10 h-10 rounded-lg bg-[#181b22] hover:bg-[#2d3340] border border-[#2d3340] flex items-center justify-center text-[#7f8490] hover:text-[#e6edf3] transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="/resume.pdf"
                download
                className="flex-1 sm:flex-initial px-4 py-3 rounded-xl border border-[#2d3340] hover:bg-[#181b22] text-[#e6edf3] font-mono text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-[#e06c75]" />
                <span>Resume PDF</span>
              </a>

              {/* Primary Launch VS Code Button */}
              <button
                onClick={onLaunch}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 rounded-xl bg-[#8b85ff] hover:bg-[#9d98ff] text-[#12141a] font-mono text-sm sm:text-base font-bold shadow-lg shadow-[#8b85ff]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Launch VS Code</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
