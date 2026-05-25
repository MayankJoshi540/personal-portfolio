"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, FolderCode } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { MouseEvent, useRef } from "react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: "Secrets App",
    description: "A high-security authentication platform where users can share secrets anonymously. Built with a focus on robust session management and data privacy.",
    tech: ["Node.js", "MongoDB", "Passport.js", "Express"],
    live: "https://secrets-app-production.up.railway.app/",
    github: "https://github.com/MayankJoshi540/secrets-app",
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    title: "Twitter / X Clone",
    description: "A pixel-perfect recreation of the Twitter/X landing page, demonstrating advanced responsive design patterns and CSS layout mastery.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://stellular-souffle-737dbe.netlify.app/",
    github: "https://github.com/MayankJoshi540/Twitter-X-Clone-HomePage",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "MoodRoom",
    description: "A real-time digital vibe-space platform for collaborative focus. Join ambient rooms to study or code together in immersive environments like rainy nights and cozy cafés.",
    tech: ["Next.js", "Socket.io", "Framer Motion", "Tailwind CSS"],
    live: "https://mood-room-iota.vercel.app/",
    github: "https://github.com/MayankJoshi540",
    color: "from-rose-500/20 to-orange-500/20"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <AnimatedSection
      delay={index * 0.1}
      className="group relative h-full bg-brand-card/30 border border-white/5 rounded-[2.5rem] overflow-hidden glass p-8"
      onMouseMove={onMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(650px circle at ${x}px ${y}px, rgba(168, 85, 247, 0.15), transparent 80%)`
          ),
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6`}>
          <FolderCode className="w-6 h-6 text-white" />
        </div>

        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
          {project.title}
        </h4>
        
        <p className="text-brand-muted mb-8 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 text-brand-text/60 rounded-full border border-white/10">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-brand-dark rounded-xl font-bold text-sm hover:bg-brand-accent hover:text-white transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Preview</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-[1px] bg-brand-primary" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary">Portfolio</h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            Selected Works.
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-20 text-center">
          <a
            href="https://github.com/MayankJoshi540"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-brand-muted hover:text-white transition-colors group"
          >
            <span className="text-lg font-medium">Explore more on GitHub</span>
            <GithubIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
