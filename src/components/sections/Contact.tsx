"use client";

import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [logMessages, setLogMessages] = useState<string[]>([]);
  const [spinnerChar, setSpinnerChar] = useState("⠋");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setLogMessages([
      "Initializing secure mail pipeline...",
      "Encrypting message payload via HTTPS..."
    ]);

    // Animate spinner
    let spinIndex = 0;
    const spinChars = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
    const spinnerInterval = setInterval(() => {
      spinIndex = (spinIndex + 1) % spinChars.length;
      setSpinnerChar(spinChars[spinIndex]);
    }, 80);

    try {
      const response = await fetch("https://formspree.io/f/movwrlol", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      clearInterval(spinnerInterval);

      if (response.ok) {
        setStatus("success");
        setLogMessages(prev => [
          ...prev,
          "[ OK ] Payload compiled and transferred successfully.",
          "SUCCESS: Message delivered to Mayank Joshi! Talk to you soon."
        ]);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setLogMessages(prev => [
          ...prev,
          `[ ERR ] Connection failed with status ${response.status}.`,
          "ERROR: Pipeline execution aborted. Please email directly!"
        ]);
      }
    } catch (err) {
      clearInterval(spinnerInterval);
      setStatus("error");
      setLogMessages(prev => [
        ...prev,
        "[ ERR ] Network check failed.",
        "ERROR: Network offline. Please check your connection and try again."
      ]);
    }
  };

  return (
    <section id="contact" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24">
      <div className="font-mono text-sm text-text-dim mb-4 select-none">// contact.sh</div>
      
      <div className="font-mono text-base md:text-lg mb-6 border-b border-editor-border-soft pb-3">
        <span className="text-accent-violet font-bold">function</span>{" "}
        <span className="text-accent-teal">initiateContact</span><span className="text-text-dim">() {"{"}</span>
      </div>

      {/* Terminal Layout Frame */}
      <div className="bg-editor-panel border border-editor-border rounded-xl overflow-hidden shadow-2xl my-6">
        {/* Terminal Header */}
        <div className="h-8 bg-editor-sidebar border-b border-editor-border flex items-center px-4 relative select-none">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-coral"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-accent-amber"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-accent-teal"></span>
          </div>
          <span className="font-mono text-xs text-text-dim absolute left-1/2 transform -translate-x-1/2">
            bash - contact.sh
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm text-text-high">
          <div className="flex items-center gap-2 mb-6 text-text-dim select-none">
            <span className="text-accent-teal font-extrabold">$</span>
            <span>./contact.sh --new-message</span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-accent-violet select-none">VISITOR_NAME</label>
              <div className="flex items-center border-b border-editor-border focus-within:border-accent-teal py-1 transition-colors duration-150">
                <span className="text-accent-teal mr-2 select-none">$</span>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-none text-text-high font-mono text-sm w-full outline-none"
                  required 
                  placeholder="John Doe"
                  autoComplete="name"
                  disabled={status === "sending"}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-accent-violet select-none">VISITOR_EMAIL</label>
              <div className="flex items-center border-b border-editor-border focus-within:border-accent-teal py-1 transition-colors duration-150">
                <span className="text-accent-teal mr-2 select-none">$</span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none text-text-high font-mono text-sm w-full outline-none"
                  required 
                  placeholder="john@example.com"
                  autoComplete="email"
                  disabled={status === "sending"}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-accent-violet select-none">MESSAGE_BODY</label>
              <div className="flex items-start border-b border-editor-border focus-within:border-accent-teal py-1 transition-colors duration-150">
                <span className="text-accent-teal mr-2 select-none mt-0.5">$</span>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-transparent border-none text-text-high font-mono text-sm w-full min-h-[90px] resize-y outline-none"
                  required 
                  placeholder="Let's build something legendary..."
                  rows={4}
                  disabled={status === "sending"}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={status === "sending"}
              className="self-start px-4 py-2 border border-accent-amber rounded-lg text-accent-amber font-mono hover:bg-accent-amber/5 active:scale-98 transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none"
            >
              $ ./submit_message.sh --send
            </button>
          </form>

          {/* Terminal output logs */}
          {status !== "idle" && (
            <div className="mt-8 border-t border-editor-border pt-4 flex flex-col gap-1.5 text-xs text-text-mid select-none">
              {logMessages.map((msg, mIdx) => {
                const isErr = msg.includes("[ ERR ]") || msg.includes("ERROR:");
                const isSuccess = msg.includes("[ OK ]") || msg.includes("SUCCESS:");
                let colorClass = "text-text-mid";
                if (isErr) colorClass = "text-accent-coral font-bold";
                else if (isSuccess) colorClass = "text-accent-teal font-bold";
                
                return (
                  <div key={mIdx} className="flex gap-2">
                    {status === "sending" && mIdx === logMessages.length - 1 ? (
                      <span className="text-accent-violet font-bold">{spinnerChar}</span>
                    ) : (
                      <span className="text-accent-teal font-bold">&gt;</span>
                    )}
                    <span className={colorClass}>{msg}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="font-mono text-base md:text-lg text-text-dim mt-6 select-none">
        {"}"}
      </div>

      {/* Direct Contact Links */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <a 
          href="mailto:joshimayank646@gmail.com" 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-editor-border bg-editor-panel text-text-high hover:border-accent-violet hover:bg-editor-panel-alt text-xs md:text-sm font-mono shadow transition-all duration-200 hover:-translate-y-0.5"
        >
          <Mail className="w-4 h-4 text-accent-teal" />
          <span>joshimayank646@gmail.com</span>
        </a>
        <a 
          href="tel:+919354035140" 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-editor-border bg-editor-panel text-text-high hover:border-accent-violet hover:bg-editor-panel-alt text-xs md:text-sm font-mono shadow transition-all duration-200 hover:-translate-y-0.5"
        >
          <Phone className="w-4 h-4 text-accent-teal" />
          <span>+91 9354035140</span>
        </a>
        <a 
          href="https://linkedin.com/in/mayank-joshi-a77935220" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-editor-border bg-editor-panel text-text-high hover:border-accent-violet hover:bg-editor-panel-alt text-xs md:text-sm font-mono shadow transition-all duration-200 hover:-translate-y-0.5"
        >
          <svg className="w-4 h-4 text-accent-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span>LinkedIn Profile</span>
        </a>
      </div>
    </section>
  );
}
