"use client";

export default function Education() {
  const educations = [
    {
      degree: "Bachelor of Computer Application (Hons.)",
      date: "2024 — 2028",
      school: "Maharaja Surajmal Institute, Janakpuri, New Delhi",
      note: "Affiliated with Guru Gobind Singh Indraprastha University (GGSIPU). Pursuing Hons. with strong academic standings. Focused on Software Engineering, Data Structures, Algorithms, and Web Architectures."
    },
    {
      degree: "Class 12th – Commerce with Mathematics",
      date: "2023 — 2024",
      school: "Central Board of Secondary Education (CBSE)",
      note: "Completed senior school education with high excellence. Attained a top score of 93% in best 4 subjects, specializing in advanced Mathematics and Business Commerce."
    }
  ];

  return (
    <section id="education" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24">
      <div className="font-mono text-sm text-text-dim mb-4 select-none"># education.yml</div>
      
      <div className="font-mono text-base md:text-lg mb-6 border-b border-editor-border-soft pb-3">
        <span className="text-accent-violet font-bold">education:</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {educations.map((edu, idx) => (
          <div 
            key={idx} 
            className="bg-editor-panel border border-editor-border rounded-2xl p-6 shadow-xl hover:border-accent-violet transition-all duration-200"
          >
            <div className="flex justify-between items-start gap-4 mb-3">
              <h3 className="font-mono font-bold text-text-high text-base leading-snug">{edu.degree}</h3>
              <span className="font-mono text-xs text-text-dim whitespace-nowrap">{edu.date}</span>
            </div>
            <div className="text-accent-violet text-sm font-medium mb-3">{edu.school}</div>
            <p className="text-text-mid text-sm leading-relaxed">{edu.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
