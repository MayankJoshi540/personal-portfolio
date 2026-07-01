"use client";

export default function Achievements() {
  const achievements = [
    {
      text: "Pursuing a <strong>BCA (Hons.) 3rd year</strong> at <strong>Maharaja Surajmal Institute</strong>, Janakpuri, New Delhi with strong academic standing."
    },
    {
      text: "Actively solving <strong>Data Structures &amp; Algorithms</strong> questions in <strong>C++</strong> on <strong>LeetCode</strong>."
    },
    {
      text: "Successfully developed and deployed <strong>3+ production-grade MERN</strong> stack and Next.js applications."
    },
    {
      text: "Won freelance web development project contract to design and launch commercial brand website with <strong>complete SEO optimization</strong>."
    },
    {
      text: "Active technical lead and contributor at <strong>MSI Tech Society</strong>, maintaining web software and organizing code structures."
    }
  ];

  return (
    <section id="achievements" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24">
      <div className="font-mono text-sm text-text-dim mb-4 select-none">// achievements.txt</div>
      
      <div className="font-mono text-base md:text-lg mb-6 border-b border-editor-border-soft pb-3">
        <span className="text-accent-violet font-bold">class</span>{" "}
        <span className="text-accent-teal">Achievements</span> <span className="text-text-dim">{"{"}</span>
      </div>

      <div className="bg-editor-panel border border-editor-border rounded-2xl p-6 md:p-8 font-mono text-sm shadow-xl space-y-4">
        {achievements.map((ach, idx) => (
          <div key={idx} className="flex items-start">
            <span className="text-accent-teal font-extrabold mr-3 select-none">[x]</span>
            <div 
              className="text-text-mid font-sans text-sm md:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: ach.text }}
            />
          </div>
        ))}
      </div>

      <div className="font-mono text-base md:text-lg text-text-dim mt-6 select-none">
        {"}"}
      </div>
    </section>
  );
}
