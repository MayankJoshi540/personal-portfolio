"use client";

import { useRef } from "react";
import { Play, FileText, Download, Code, Terminal, Palette, Folder, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface WelcomeProps {
  onLaunch: () => void;
  onSelectSection: (id: string) => void;
  onSetTheme: (theme: string) => void;
  onToggleTerminal: () => void;
}

export default function Welcome({
  onLaunch,
  onSelectSection,
  onSetTheme,
  onToggleTerminal
}: WelcomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".gsap-welcome-header", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "all"
      });

      gsap.from(".gsap-welcome-col", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.out",
        clearProps: "all"
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="py-4 select-none min-w-0">
      {/* VS Code Iconic Header */}
      <div className="gsap-welcome-header mb-8 pb-6 border-b border-editor-border">
        <div className="flex items-center gap-3.5 mb-2">
          <svg className="w-8 h-8 text-accent-violet flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-high tracking-tight">
            Visual Studio Code
          </h1>
        </div>
        <p className="text-text-mid font-mono text-sm sm:text-base">
          Mayank Joshi &mdash; Full Stack Developer &amp; Systems Engineer
        </p>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column: Start */}
        <div className="gsap-welcome-col space-y-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-text-dim font-mono mb-4">
              Start
            </h2>

            {/* Launch Primary Action Button */}
            <button
              onClick={onLaunch}
              className="w-full flex items-center justify-between p-4 mb-4 rounded-xl bg-accent-violet/15 hover:bg-accent-violet/25 border border-accent-violet/40 hover:border-accent-violet text-text-high font-mono text-base font-bold transition-all duration-150 group cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-violet flex items-center justify-center text-editor-sidebar group-hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 fill-editor-sidebar" />
                </div>
                <div className="text-left">
                  <div className="text-text-high font-bold text-sm sm:text-base">Launch VS Code Workspace</div>
                  <div className="text-text-dim text-xs font-normal">Explore full portfolio files &amp; editor</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-dim">
                <span className="hidden sm:inline font-mono text-[11px] bg-editor-panel px-2 py-0.5 rounded border border-editor-border">↵ Enter</span>
                <ArrowRight className="w-4 h-4 text-accent-violet group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            {/* Quick File Links */}
            <div className="space-y-1">
              <button
                onClick={() => onSelectSection("about")}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg hover:bg-editor-panel-alt text-left text-sm sm:text-base text-text-high transition-colors font-mono cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-accent-teal flex-shrink-0" />
                  <span>Open <strong className="text-accent-teal">about.md</strong></span>
                </div>
                <span className="text-xs text-text-dim">Bio &amp; Summary</span>
              </button>

              <button
                onClick={() => onSelectSection("experience")}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg hover:bg-editor-panel-alt text-left text-sm sm:text-base text-text-high transition-colors font-mono cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-accent-violet flex-shrink-0" />
                  <span>Open <strong className="text-accent-violet">experience.log</strong></span>
                </div>
                <span className="text-xs text-text-dim">C-Zentrix &amp; GET</span>
              </button>

              <button
                onClick={() => onSelectSection("projects")}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg hover:bg-editor-panel-alt text-left text-sm sm:text-base text-text-high transition-colors font-mono cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-accent-amber flex-shrink-0" />
                  <span>Open <strong className="text-accent-amber">projects.js</strong></span>
                </div>
                <span className="text-xs text-text-dim">PrepWise AI &amp; APIRun</span>
              </button>

              <button
                onClick={() => onSelectSection("skills")}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg hover:bg-editor-panel-alt text-left text-sm sm:text-base text-text-high transition-colors font-mono cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Code className="w-4 h-4 text-accent-teal flex-shrink-0" />
                  <span>Open <strong className="text-accent-teal">skills.json</strong></span>
                </div>
                <span className="text-xs text-text-dim">React, NestJS, DBs</span>
              </button>

              <a
                href="/resume.pdf"
                download
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg hover:bg-editor-panel-alt text-left text-sm sm:text-base text-text-high transition-colors font-mono cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Download className="w-4 h-4 text-accent-coral flex-shrink-0" />
                  <span>Download <strong className="text-accent-coral">resume.pdf</strong></span>
                </div>
                <span className="text-xs text-text-dim">PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Recent & Highlights */}
        <div className="gsap-welcome-col space-y-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-text-dim font-mono mb-4">
              Recent Workspaces &amp; Highlights
            </h2>

            <div className="space-y-2">
              <button
                onClick={() => onSelectSection("experience")}
                className="w-full p-3 rounded-lg bg-editor-panel/60 hover:bg-editor-panel-alt border border-editor-border text-left transition-colors font-mono group cursor-pointer"
              >
                <div className="text-text-high font-semibold text-sm group-hover:text-accent-violet transition-colors">
                  C-Zentrix &mdash; Full Stack Developer Intern
                </div>
                <div className="text-text-dim text-xs mt-0.5">
                  Real-time WebRTC &amp; AI Video Platform &bull; Aug 2026 &mdash; Nov 2026
                </div>
              </button>

              <button
                onClick={() => onSelectSection("projects")}
                className="w-full p-3 rounded-lg bg-editor-panel/60 hover:bg-editor-panel-alt border border-editor-border text-left transition-colors font-mono group cursor-pointer"
              >
                <div className="text-text-high font-semibold text-sm group-hover:text-accent-amber transition-colors">
                  PrepWise AI &mdash; AI Mock Interview Platform
                </div>
                <div className="text-text-dim text-xs mt-0.5">
                  Next.js 15, Gemini AI, Clerk Auth &bull; 100+ Simulated Interviews
                </div>
              </button>

              <button
                onClick={() => onSelectSection("projects")}
                className="w-full p-3 rounded-lg bg-editor-panel/60 hover:bg-editor-panel-alt border border-editor-border text-left transition-colors font-mono group cursor-pointer"
              >
                <div className="text-text-high font-semibold text-sm group-hover:text-accent-teal transition-colors">
                  APIRun &mdash; Backend API Engineering Platform
                </div>
                <div className="text-text-dim text-xs mt-0.5">
                  NestJS, PostgreSQL, Redis, Docker &bull; Automated Test Suites
                </div>
              </button>

              <button
                onClick={() => onSelectSection("education")}
                className="w-full p-3 rounded-lg bg-editor-panel/60 hover:bg-editor-panel-alt border border-editor-border text-left transition-colors font-mono group cursor-pointer"
              >
                <div className="text-text-high font-semibold text-sm group-hover:text-accent-teal transition-colors">
                  BCA (Honours) &mdash; Maharaja Surajmal Institute (GGSIPU)
                </div>
                <div className="text-text-dim text-xs mt-0.5">
                  2024 &mdash; 2028 &bull; Commerce with Maths (93% Senior Secondary)
                </div>
              </button>
            </div>
          </div>

          {/* Quick Tools & Shortcuts */}
          <div className="pt-2 border-t border-editor-border">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-dim font-mono mb-3">
              Shortcuts &amp; Controls
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-text-mid">
              <div className="flex items-center justify-between p-2 rounded bg-editor-bg border border-editor-border">
                <span>Quick Open</span>
                <kbd className="text-accent-amber font-bold">Ctrl + P</kbd>
              </div>
              <button 
                onClick={onToggleTerminal}
                className="flex items-center justify-between p-2 rounded bg-editor-bg border border-editor-border hover:bg-editor-panel-alt transition-colors cursor-pointer text-left"
              >
                <span>Terminal</span>
                <kbd className="text-accent-amber font-bold">Ctrl + `</kbd>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
