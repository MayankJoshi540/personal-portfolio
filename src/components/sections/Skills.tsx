"use client";

export default function Skills() {
  const skillCategories = [
    {
      key: "languages",
      skills: ["JavaScript", "HTML/CSS", "C++", "C", "Java", "SQL"]
    },
    {
      key: "frameworks_and_libraries",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "MERN Stack", "jQuery", "EJS"]
    },
    {
      key: "databases_and_apis",
      skills: ["MongoDB", "Mongoose", "REST APIs"]
    },
    {
      key: "developer_tools",
      skills: ["Git", "GitHub", "VS Code", "Netlify", "Vercel", "Render", "WordPress"]
    },
    {
      key: "professional_skills",
      skills: ["Problem Solving", "Leadership", "Data Structures & Algorithms (C++)"]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24">
      <div className="font-mono text-sm text-text-dim mb-4 select-none">// skills.json</div>
      
      <div className="bg-editor-panel border border-editor-border rounded-2xl p-6 md:p-8 font-mono text-sm shadow-xl overflow-x-auto leading-relaxed relative">
        <span className="text-text-dim">{"{"}</span>
        
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="my-4 pl-4 md:pl-8">
            <span className="text-accent-amber">"{cat.key}"</span>
            <span className="text-text-dim">: </span>
            <span className="text-text-dim">[</span>
            
            <div className="flex flex-wrap gap-2 my-2 pl-4 md:pl-8 border-l border-editor-border-soft">
              {cat.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="font-sans text-xs font-medium text-text-high bg-editor-bg border border-editor-border px-3 py-1.5 rounded-lg shadow-sm hover:border-accent-amber hover:-translate-y-0.5 transition-all duration-150 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <span className="text-text-dim">]</span>
            {idx < skillCategories.length - 1 && <span className="text-text-dim">,</span>}
          </div>
        ))}

        <span className="text-text-dim">{"}"}</span>
      </div>
    </section>
  );
}
