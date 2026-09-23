"use client";

import React, { useState, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [logMessages, setLogMessages] = useState<string[]>([]);
  const [spinnerChar, setSpinnerChar] = useState("⠋");

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".gsap-contact-terminal", {
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: "power3.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          once: true
        }
      });

      gsap.from(".gsap-contact-link", {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.5)",
        clearProps: "all",
        scrollTrigger: {
          trigger: ".gsap-contact-links-container",
          start: "top 95%",
          once: true
        }
      });
    },
    { scope: containerRef }
  );

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
    <section ref={containerRef} id="contact" className="scroll-mt-[60px] md:scroll-mt-[100px] mb-24 min-w-0">
      <div className="font-mono text-lg text-text-dim mb-4 select-none">// contact.sh</div>
      
      <div className="font-mono text-xl mb-6 border-b border-editor-border-soft pb-3">
        <span className="text-accent-violet font-bold">function</span>{" "}
        <span className="text-accent-teal">initiateContact</span><span className="text-text-dim">() {"{"}</span>
      </div>

      {/* Terminal Layout Frame */}
      <div className="gsap-contact-terminal bg-editor-panel border border-editor-border rounded-xl overflow-hidden shadow-2xl my-6 min-w-0">
        {/* Terminal Header */}
        <div className="h-9 bg-editor-sidebar border-b border-editor-border flex items-center px-4 relative select-none">
          <div className="flex gap-1.5 flex-shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-coral"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-accent-amber"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-accent-teal"></span>
          </div>
          <span className="font-mono text-sm sm:text-base text-text-dim absolute left-1/2 transform -translate-x-1/2 truncate max-w-[65%]">
            bash - contact.sh
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-5 sm:p-7 font-mono text-base sm:text-lg text-text-high min-w-0">
          <div className="flex items-center gap-2 mb-6 text-text-dim select-none">
            <span className="text-accent-teal font-extrabold text-xl flex-shrink-0">$</span>
            <span className="text-base sm:text-lg truncate">./contact.sh --new-message</span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 min-w-0">
            <div className="flex flex-col gap-2 min-w-0">
              <label className="text-sm sm:text-base font-bold text-accent-violet select-none">VISITOR_NAME</label>
              <div className="flex items-center border-b border-editor-border focus-within:border-accent-teal py-1.5 transition-colors duration-150 min-w-0">
                <span className="text-accent-teal mr-2 select-none flex-shrink-0">$</span>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-none text-text-high font-mono text-base sm:text-lg w-full outline-none min-w-0"
                  required 
                  placeholder="John Doe"
                  autoComplete="name"
                  disabled={status === "sending"}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 min-w-0">
              <label className="text-sm sm:text-base font-bold text-accent-violet select-none">VISITOR_EMAIL</label>
              <div className="flex items-center border-b border-editor-border focus-within:border-accent-teal py-1.5 transition-colors duration-150 min-w-0">
                <span className="text-accent-teal mr-2 select-none flex-shrink-0">$</span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none text-text-high font-mono text-base sm:text-lg w-full outline-none min-w-0"
                  required 
                  placeholder="john@example.com"
                  autoComplete="email"
                  disabled={status === "sending"}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 min-w-0">
              <label className="text-sm sm:text-base font-bold text-accent-violet select-none">MESSAGE_BODY</label>
              <div className="flex items-start border-b border-editor-border focus-within:border-accent-teal py-1.5 transition-colors duration-150 min-w-0">
                <span className="text-accent-teal mr-2 select-none mt-0.5 flex-shrink-0">$</span>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-transparent border-none text-text-high font-mono text-base sm:text-lg w-full min-h-[100px] resize-y outline-none min-w-0 break-words"
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
              className="self-start px-5 sm:px-6 py-2.5 sm:py-3 border border-accent-amber rounded-lg text-accent-amber font-mono text-base sm:text-lg hover:bg-accent-amber/5 active:scale-98 transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              $ ./submit_message.sh --send
            </button>
          </form>

          {/* Terminal output logs */}
          {status !== "idle" && (
            <div className="mt-8 border-t border-editor-border pt-4 flex flex-col gap-2 text-sm sm:text-base md:text-lg text-text-mid select-none min-w-0">
              {logMessages.map((msg, mIdx) => {
                const isErr = msg.includes("[ ERR ]") || msg.includes("ERROR:");
                const isSuccess = msg.includes("[ OK ]") || msg.includes("SUCCESS:");
                let colorClass = "text-text-mid";
                if (isErr) colorClass = "text-accent-coral font-bold";
                else if (isSuccess) colorClass = "text-accent-teal font-bold";
                
                return (
                  <div key={mIdx} className="flex gap-2 min-w-0">
                    {status === "sending" && mIdx === logMessages.length - 1 ? (
                      <span className="text-accent-violet font-bold flex-shrink-0">{spinnerChar}</span>
                    ) : (
                      <span className="text-accent-teal font-bold flex-shrink-0">&gt;</span>
                    )}
                    <span className={`${colorClass} break-words`}>{msg}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="font-mono text-xl text-text-dim mt-6 select-none">
        {"}"}
      </div>

      {/* Direct Contact Links */}
      <div className="gsap-contact-links-container flex flex-wrap justify-center gap-3 sm:gap-4 mt-10 max-w-full">
        <a 
          href="mailto:joshimayank646@gmail.com" 
          className="gsap-contact-link inline-flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-editor-border bg-editor-panel text-text-high hover:border-accent-violet hover:bg-editor-panel-alt text-sm sm:text-base md:text-lg font-mono shadow transition-all duration-200 hover:-translate-y-0.5 max-w-full"
        >
          <Mail className="w-5 h-5 text-accent-teal flex-shrink-0" />
          <span className="truncate">joshimayank646@gmail.com</span>
        </a>
        <a 
          href="tel:+919354035140" 
          className="gsap-contact-link inline-flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-editor-border bg-editor-panel text-text-high hover:border-accent-violet hover:bg-editor-panel-alt text-sm sm:text-base md:text-lg font-mono shadow transition-all duration-200 hover:-translate-y-0.5 max-w-full"
        >
          <Phone className="w-5 h-5 text-accent-teal flex-shrink-0" />
          <span>+91 9354035140</span>
        </a>
        <a 
          href="https://linkedin.com/in/mayank-joshi-a77935220" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="gsap-contact-link inline-flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-editor-border bg-editor-panel text-text-high hover:border-accent-violet hover:bg-editor-panel-alt text-sm sm:text-base md:text-lg font-mono shadow transition-all duration-200 hover:-translate-y-0.5 max-w-full"
        >
          <svg className="w-5 h-5 text-accent-teal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
