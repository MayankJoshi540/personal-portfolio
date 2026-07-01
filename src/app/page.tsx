"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Folder, 
  ChevronDown, 
  Menu, 
  Settings, 
  GitBranch, 
  Search, 
  Play, 
  LayoutGrid, 
  User, 
  Heart,
  X
} from "lucide-react";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const sectionsList = [
    { id: "about", file: "about.md", label: "about.md", icon: "md" },
    { id: "experience", file: "experience.log", label: "experience.log", icon: "log" },
    { id: "education", file: "education.yml", label: "education.yml", icon: "yml" },
    { id: "projects", file: "projects.js", label: "projects.js", icon: "js" },
    { id: "skills", file: "skills.json", label: "skills.json", icon: "json" },
    { id: "achievements", file: "achievements.txt", label: "achievements.txt", icon: "txt" },
    { id: "contact", file: "contact.sh", label: "contact.sh", icon: "sh" }
  ];

  // IntersectionObserver scrollspy
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll helper
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsSidebarOpen(false);
    }
  };

  // Custom Inline SVG File Icons for IDE authenticity
  const renderFileIcon = (type: string, size = 14) => {
    switch (type) {
      case "md":
        return (
          <svg viewBox="0 0 24 24" width={size} height={size} fill="#51a1fc" className="flex-shrink-0">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 11.5v-3l-2.25 2.25L9.5 11.5v3H8v-5h1.5l2.25 2.25L14 9.5H15.5v5h-1.5zM19 12l-2.5 3v-2H15v-2h1.5V9l2.5 3z"/>
          </svg>
        );
      case "log":
        return (
          <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#8b85ff" strokeWidth="2.5" className="flex-shrink-0">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>
          </svg>
        );
      case "yml":
        return (
          <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#ffb454" strokeWidth="2.5" className="flex-shrink-0">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="12" x2="10" y2="12"/><line x1="12" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="10" y2="16"/><line x1="12" y1="16" x2="16" y2="16"/>
          </svg>
        );
      case "js":
        return (
          <svg viewBox="0 0 24 24" width={size} height={size} className="flex-shrink-0">
            <rect width="24" height="24" rx="3" fill="#f1e05a"/>
            <path d="M12.5 15.5c.3.5.8.8 1.5.8 1 0 1.5-.5 1.5-1.5v-5h1.8v5c0 2-1.2 3.2-3.3 3.2-1.5 0-2.6-.7-3.1-1.7l1.6-.8zm-6.8-2c.1 1.2.9 2 2.3 2 1.2 0 2.1-.7 2.1-1.7 0-1-.6-1.5-2-2l-.8-.3c-.9-.3-1.3-.7-1.3-1.3 0-.7.6-1.2 1.5-1.2.9 0 1.5.4 1.7 1.1l1.6-.9c-.4-1.2-1.5-2-3.3-2-2.1 0-3.3 1.2-3.3 2.9 0 1.4.8 2.1 2.2 2.6l.8.3c1 .3 1.4.6 1.4 1.3 0 .8-.7 1.3-1.6 1.3-1.1 0-1.8-.5-2-1.3l-1.6.8z" fill="#000"/>
          </svg>
        );
      case "json":
        return (
          <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#5eead4" strokeWidth="2.5" className="flex-shrink-0">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 12c-1 0-1.5-.5-1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5v0c.8 0 1.5-.7 1.5-1.5v-1C6.5 4.5 7 4 8 4M16 12c1 0 1.5-.5 1.5-1.5v-1c0-.8.7-1.5 1.5-1.5v0c-.8 0-1.5-.7-1.5-1.5v-1C17.5 4.5 17 4 16 4"/>
          </svg>
        );
      case "txt":
        return (
          <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#a8abc4" strokeWidth="2.5" className="flex-shrink-0">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="8 14 10 16 14 11"/>
          </svg>
        );
      case "sh":
        return (
          <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#41aa58" strokeWidth="2.5" className="flex-shrink-0">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="8 12 11 15 8 18"/><line x1="13" y1="18" x2="17" y2="18"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-editor-bg select-text text-text-mid overflow-hidden">
      
      {/* Background Decorative Glow Grid */}
      <div className="fixed inset-0 pointer-events-none z-[-10] opacity-25" 
           style={{
             backgroundImage: "linear-gradient(to right, #222634 1px, transparent 1px), linear-gradient(to bottom, #222634 1px, transparent 1px)",
             backgroundSize: "24px 24px"
           }}
      />
      <div className="fixed top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full pointer-events-none z-[-9] blur-[120px]"
           style={{ background: "radial-gradient(circle, rgba(139, 133, 255, 0.08) 0%, rgba(16, 18, 26, 0) 70%)" }}
      />
      <div className="fixed bottom-[-10%] right-[10%] w-[700px] h-[700px] rounded-full pointer-events-none z-[-9] blur-[120px]"
           style={{ background: "radial-gradient(circle, rgba(94, 234, 212, 0.06) 0%, rgba(16, 18, 26, 0) 70%)" }}
      />

      {/* 1. IDE TOP WINDOW CONTROLS BAR (Desktop Only) */}
      <div className="h-[35px] bg-editor-activity border-b border-editor-border fixed top-0 left-0 right-0 z-50 hidden md:flex justify-between items-center px-4 select-none">
        <div className="flex items-center gap-4 text-xs font-mono text-text-dim">
          <svg className="w-4 h-4 text-accent-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          <div className="flex gap-4">
            <span className="cursor-default hover:text-text-high">File</span>
            <span className="cursor-default hover:text-text-high">Edit</span>
            <span className="cursor-default hover:text-text-high">Selection</span>
            <span className="cursor-default hover:text-text-high">View</span>
            <span className="cursor-default hover:text-text-high">Go</span>
            <span className="cursor-default hover:text-text-high">Terminal</span>
            <span className="cursor-default hover:text-text-high">Help</span>
          </div>
        </div>
        <div className="font-mono text-xs text-text-dim absolute left-1/2 transform -translate-x-1/2">
          mayank-joshi-portfolio - Visual Studio Code
        </div>
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-accent-coral"></span>
          <span className="w-3 h-3 rounded-full bg-accent-amber"></span>
          <span className="w-3 h-3 rounded-full bg-accent-teal"></span>
        </div>
      </div>

      {/* 2. MOBILE HEADER BAR */}
      <div className="h-[48px] bg-editor-sidebar border-b border-editor-border fixed top-0 md:top-[35px] left-0 right-0 z-40 flex md:hidden items-center justify-between px-4 select-none">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-text-high cursor-pointer p-1"
          aria-label="Toggle Navigation"
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <div className="font-mono text-sm text-text-high font-bold">
          Mayank Joshi | Portfolio
        </div>
        <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-accent-teal/5 border border-accent-teal/15 text-[10px] text-accent-teal font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-teal shadow-[0_0_8px_#5eead4] animate-pulse"></span>
          <span>Online</span>
        </div>
      </div>

      {/* MOBILE SCRIM OVERLAY */}
      <div 
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 top-[48px] md:top-[35px] bg-black/60 backdrop-blur-xs z-30 md:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* IDE CORE LAYOUT */}
      <div className="flex flex-1 pt-[48px] md:pt-[35px] min-h-screen">
        
        {/* 3. FIXED SIDEBAR (Activity Bar + File Tree Explorer) */}
        <aside 
          className={`w-[288px] h-[calc(100vh-48px)] md:h-[calc(100vh-35px)] bg-editor-sidebar border-r border-editor-border fixed left-0 top-[48px] md:top-[35px] z-40 flex transition-transform duration-300 md:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Activity Bar */}
          <div className="w-[48px] bg-editor-activity border-r border-editor-border flex flex-col justify-between items-center py-4 select-none">
            <div className="flex flex-col items-center gap-5 w-full">
              <div className="w-full py-1 text-accent-violet border-l-2 border-accent-violet flex justify-center cursor-default">
                <Folder className="w-5.5 h-5.5" />
              </div>
              <div className="text-text-dim hover:text-text-high py-1 flex justify-center cursor-default transition-colors">
                <Search className="w-5.5 h-5.5" />
              </div>
              <div className="text-text-dim hover:text-text-high py-1 flex justify-center cursor-default transition-colors">
                <GitBranch className="w-5.5 h-5.5" />
              </div>
              <div className="text-text-dim hover:text-text-high py-1 flex justify-center cursor-default transition-colors">
                <Play className="w-5.5 h-5.5" />
              </div>
              <div className="text-text-dim hover:text-text-high py-1 flex justify-center cursor-default transition-colors">
                <LayoutGrid className="w-5.5 h-5.5" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 w-full">
              <div className="text-text-dim hover:text-text-high py-1 flex justify-center cursor-default transition-colors">
                <User className="w-5.5 h-5.5" />
              </div>
              <div className="text-text-dim hover:text-text-high py-1 flex justify-center cursor-default transition-colors">
                <Settings className="w-5.5 h-5.5" />
              </div>
            </div>
          </div>

          {/* File Explorer Tree */}
          <div className="flex-1 flex flex-col justify-between h-full py-3 select-none">
            <div>
              <div className="font-mono text-[10px] font-bold text-text-dim tracking-wider uppercase px-5 mb-3">
                Explorer
              </div>
              
              <div className="flex items-center gap-1.5 px-5 py-2 text-text-mid font-mono text-[11px] font-bold">
                <ChevronDown className="w-3.5 h-3.5" />
                <span>PORTFOLIO [WORKSPACE]</span>
              </div>

              <ul className="flex flex-col">
                {sectionsList.map((sec) => (
                  <li key={sec.id}>
                    <button 
                      onClick={() => handleScrollTo(sec.id)}
                      className={`w-full flex items-center gap-2.5 px-7 py-1.5 text-left font-mono text-[13px] border-l-2 cursor-pointer transition-all duration-150 ${
                        activeSection === sec.id 
                          ? "bg-editor-panel-alt text-text-high border-accent-amber" 
                          : "border-transparent text-text-dim hover:text-text-high hover:bg-editor-panel"
                      }`}
                    >
                      {renderFileIcon(sec.icon)}
                      <span>{sec.file}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Profile Summary Card at bottom */}
            <div className="border-t border-editor-border p-4 bg-editor-sidebar/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-violet to-accent-teal border border-editor-border flex items-center justify-center text-text-high font-mono font-bold text-sm shadow">
                  MJ
                </div>
                <div className="min-w-0">
                  <div className="text-text-high font-semibold text-xs md:text-sm truncate">Mayank Joshi</div>
                  <div className="text-text-dim text-[10px] font-mono truncate">Full Stack Developer</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent-teal/5 border border-accent-teal/15 text-[10px] text-accent-teal font-mono w-max">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal shadow-[0_0_8px_#5eead4] animate-pulse"></span>
                <span>Available for work</span>
              </div>
              <div className="flex gap-2 mt-3.5">
                <a 
                  href="https://github.com/MayankJoshi540" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 h-7 border border-editor-border bg-editor-activity rounded flex items-center justify-center text-text-mid hover:text-text-high hover:border-accent-violet transition-colors"
                  title="GitHub"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
                <a 
                  href="https://linkedin.com/in/mayank-joshi-a77935220" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 h-7 border border-editor-border bg-editor-activity rounded flex items-center justify-center text-text-mid hover:text-text-high hover:border-accent-violet transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a 
                  href="mailto:joshimayank646@gmail.com" 
                  className="flex-1 h-7 border border-editor-border bg-editor-activity rounded flex items-center justify-center text-text-mid hover:text-text-high hover:border-accent-violet transition-colors"
                  title="Email"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* 4. SCROLLABLE EDITOR CONTENT CONTAINER */}
        <main className="flex-1 md:ml-[288px] min-w-0 pb-[22px]">
          
          {/* STICKY TAB BAR */}
          <div className="h-[38px] bg-editor-sidebar border-b border-editor-border flex overflow-x-auto scrollbar-none sticky top-[48px] md:top-[35px] z-30 select-none">
            {sectionsList.map((sec) => (
              <button 
                key={sec.id}
                onClick={() => handleScrollTo(sec.id)}
                className={`h-full px-5 flex items-center gap-2 border-r border-editor-border font-mono text-[13px] relative cursor-pointer whitespace-nowrap transition-colors duration-150 ${
                  activeSection === sec.id 
                    ? "bg-editor-bg text-text-high font-medium" 
                    : "bg-editor-sidebar text-text-dim hover:bg-editor-panel/50 hover:text-text-mid"
                }`}
              >
                {renderFileIcon(sec.icon, 12)}
                <span>{sec.file}</span>
                <span className="text-[9px] text-text-dim opacity-0 group-hover:opacity-100 hover:text-accent-coral ml-1 select-none">&times;</span>
                {activeSection === sec.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-amber" />
                )}
              </button>
            ))}
          </div>

          {/* BREADCRUMBS PATH */}
          <div className="h-[24px] bg-editor-bg border-b border-editor-border-soft flex items-center px-6 font-mono text-[11px] text-text-dim select-none">
            <div className="flex items-center gap-1.5">
              <span>mayank-joshi</span>
              <span className="opacity-50">&gt;</span>
              <span>src</span>
              <span className="opacity-50">&gt;</span>
              <span>sections</span>
              <span className="opacity-50">&gt;</span>
              <span className="text-text-mid">{sectionsList.find(s => s.id === activeSection)?.file || "about.md"}</span>
            </div>
          </div>

          {/* EDITOR BODY SECTIONS */}
          <div className="px-6 md:px-14 py-8 max-w-[860px] mx-auto">
            <About />
            <Experience />
            <Education />
            <Projects />
            <Skills />
            <Achievements />
            <Contact />

            {/* FOOTER */}
            <footer className="border-t border-editor-border mt-16 pt-8 pb-12 flex justify-center items-center gap-1.5 font-mono text-xs text-text-dim select-none">
              <span>&copy; {currentYear} Mayank Joshi. Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-accent-coral fill-accent-coral animate-pulse" />
              <span>and VS Code theme.</span>
            </footer>
          </div>
        </main>
      </div>

      {/* 5. FIXED STATUS BAR (Bottom) */}
      <div className="h-[22px] bg-accent-violet fixed bottom-0 left-0 right-0 z-50 flex justify-between items-center px-4 font-mono text-[11px] text-editor-activity font-semibold select-none">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>
            <span>main*</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <span>0</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span>0</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Ln {activeSection === "about" ? "12" : activeSection === "experience" ? "45" : "78"}, Col 4</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>HTML5</span>
        </div>
      </div>

    </div>
  );
}
