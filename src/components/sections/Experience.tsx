"use client";

export default function Experience() {
  const experiences = [
    {
      hash: "commit 82e5b9f",
      date: "Jan 2026 — March 2026",
      role: "Full Stack Developer – Internship",
      company: "Global Education Talent",
      diffs: [
        "Assisted in developing full-stack web features using modern JavaScript frameworks and backend technologies.",
        "Implemented reusable frontend React components and integrated them with Node.js APIs.",
        "Used Git/GitHub for version control and collaborated with team members in a hybrid environment.",
        "Gained hands-on experience in debugging, deployment configurations, and production release flows."
      ]
    },
    {
      hash: "commit d498ab5",
      date: "2024 — Present",
      role: "Technical Team Member",
      company: "MSI Tech Society",
      diffs: [
        "Contributed to development and maintenance of internal projects, event websites, and automation scripts.",
        "Coordinated technical operations, web deployments, and networking setups during major college hackathons.",
        "Collaborated with peers to design, build, and execute tech-related initiatives while enforcing quality code reviews."
      ]
    },
    {
      hash: "commit f210a4e",
      date: "2025",
      role: "Freelance Web Developer",
      company: "Personal Brand & Commercial Websites",
      diffs: [
        "Designed and architected clean-coded personal brand portfolios and commercial web systems in React/Next.js.",
        "Structured components for responsiveness, optimal search-engine friendliness, and cross-browser speeds.",
        "Worked directly with clients to translate visual designs and system specifications into operational apps."
      ]
    },
    {
      hash: "commit c39fa12",
      date: "2024 — Present",
      role: "Private Tutor – Mathematics & Accountancy",
      company: "Academic Tutoring",
      diffs: [
        "Provided private teaching to Class 12th students, explaining complex concepts through systematic, logical formats.",
        "Strengthened communication, leadership, and time-management competencies by handling students simultaneously."
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24">
      <div className="font-mono text-sm text-text-dim mb-4 select-none">// experience.log</div>
      
      <div className="font-mono text-base md:text-lg mb-6 border-b border-editor-border-soft pb-3">
        <span className="text-accent-violet font-bold">const</span>{" "}
        <span className="text-text-high">experienceHistory</span> = <span className="text-text-dim">[</span>
      </div>

      <div className="relative pl-6 my-8 border-l-2 border-dashed border-editor-border">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative mb-10 last:mb-0 group">
            {/* Git node dot */}
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-editor-bg border-2 border-accent-violet flex items-center justify-center z-10 transition-all duration-150 group-hover:border-accent-teal group-hover:shadow-[0_0_8px_#5eead4]">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-violet group-hover:bg-accent-teal group-hover:scale-130 transition-all duration-150"></div>
            </div>
            
            <div className="bg-editor-panel border border-editor-border rounded-2xl p-5 shadow-xl hover:border-editor-border-soft hover:-translate-y-0.5 transition-all duration-150">
              <div className="flex justify-between items-center flex-wrap gap-2 mb-3 font-mono text-xs">
                <span className="text-accent-amber font-semibold">{exp.hash}</span>
                <span className="text-text-dim">{exp.date}</span>
              </div>
              <h3 className="text-lg font-bold text-text-high mb-1">{exp.role}</h3>
              <span className="text-accent-teal font-mono text-sm mb-4 block">{exp.company}</span>
              
              <div className="bg-editor-sidebar border border-editor-border rounded-lg p-4 font-mono text-xs overflow-x-auto leading-relaxed">
                {exp.diffs.map((diff, dIdx) => (
                  <div key={dIdx} className="text-[#a6e22e] whitespace-pre-wrap py-0.5 px-1.5 -mx-1.5 rounded hover:bg-[#a6e22e]/10 transition-colors duration-100">
                    + {diff}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="font-mono text-base md:text-lg text-text-dim mt-6">
        <span className="text-text-dim">];</span>
      </div>
    </section>
  );
}
