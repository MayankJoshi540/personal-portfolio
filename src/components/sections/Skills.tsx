"use client";

import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Settings, Terminal, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "HTML5/CSS3"]
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6" />,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Passport.js", "Authentication"]
  },
  {
    title: "Tools & Others",
    icon: <Settings className="w-6 h-6" />,
    skills: ["Git / GitHub", "Postman", "npm / yarn", "Vercel / Netlify", "VS Code", "Agile"]
  },
  {
    title: "Emerging & AI",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["AI Prompting", "LLM Integration", "Experimental Web Features", "Performance Optimization"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-[1px] bg-brand-secondary" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-secondary">Expertise</h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            Technical Arsenal.
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <AnimatedSection
              key={category.title}
              delay={idx * 0.1}
              className="bg-brand-card/30 border border-white/5 rounded-3xl p-8 glass group hover:border-brand-accent/30 transition-colors"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{category.title}</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-brand-muted hover:text-white hover:bg-brand-accent/20 hover:border-brand-accent/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
