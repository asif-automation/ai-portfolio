"use client";

import { useEffect, useRef } from "react";

const HIGHLIGHTS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M2 12h20"/>
      </svg>
    ),
    title: "4 AI Agents",
    detail: "Production-grade portfolio projects",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
    title: "15+ Technologies",
    detail: "LLMs, Automation & Backend",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9"/>
      </svg>
    ),
    title: "Remote Ready",
    detail: "Freelance • Remote • Full-time",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "AI Automation",
    detail: "LLM Agents & Workflow Engineering",
  },
];

const STACK_ITEMS = [
  "Claude",
  "OpenAI",
  "LangGraph",
  "n8n",
  "Make",
  "FastAPI",
  "REST APIs",
  "Webhooks",
  "Supabase",
  "PostgreSQL",
  "SQL",
  "Docker",
  "Git",
  "GitHub",
  "MCP",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.12 }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section">
      <div className="container">
        {/* ── Header ── */}
        <div className="reveal" style={{ marginBottom: "4.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent-light)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            About
          </p>
          <h2
            style={{
              fontSize:      "clamp(2rem, 4vw, 3rem)",
              fontWeight:    700,
              letterSpacing: "-0.03em",
              lineHeight:    1.1,
              maxWidth:      "520px",
              color:         "var(--text-1)",
            }}
          >
            Building Production

            <br />
            <span style={{ color: "var(--accent-light)" }}>AI Automation Systems</span>
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div
          style={{
            display:   "grid",
            gap:       "4rem",
            alignItems:"start",
          }}
          className="about-grid"
        >
          {/* Left: Text */}
          <div className="reveal reveal-delay-1">
            <p
  style={{
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "var(--text-2)",
    marginBottom: "1.5rem",
  }}
>
  I'm <strong>Asif Siddiqui</strong>, an AI Automation Engineer focused on
  designing production-grade AI systems that combine Large Language Models,
  intelligent agents, workflow automation, and modern backend technologies.
  My goal is to build AI solutions that eliminate repetitive work, improve
  business efficiency, and create real operational value.
</p>
            <p
  style={{
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "var(--text-2)",
    marginBottom: "2rem",
  }}
>
  I specialize in AI workflow automation using OpenAI, Claude, LangGraph,
  n8n, Make, MCP, Supabase, PostgreSQL, Docker, and FastAPI. Currently, I
  am building production-ready AI agents for customer support, appointment
  scheduling, lead qualification, e-commerce automation, and personal
  productivity systems while continuously expanding my expertise in
  enterprise AI engineering.
</p>

            {/* Current stack */}
            <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.875rem" }}>
              Current Technology Stack
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
              {STACK_ITEMS.map((s) => (
                <span key={s} className="badge">{s}</span>
              ))}
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div
            style={{
              display:               "grid",
              gridTemplateColumns:   "1fr 1fr",
              gap:                   "12px",
            }}
          >
            {HIGHLIGHTS.map(({ icon, title, detail }, i) => (
              <div
                key={title}
                className={`glass reveal reveal-delay-${i + 1}`}
                style={{
                  padding:    "1.25rem",
                  borderRadius: "14px",
                }}
              >
                <div
                  style={{
                    width:          "36px",
                    height:         "36px",
                    borderRadius:   "9px",
                    background:     "var(--accent-glow-sm)",
                    border:         "1px solid rgba(59,130,246,0.2)",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    color:          "var(--accent-light)",
                    marginBottom:   "0.875rem",
                  }}
                >
                  {icon}
                </div>
                <p style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-1)", letterSpacing: "-0.02em", marginBottom: "3px" }}>
                  {title}
                </p>
                <p style={{ fontSize: "0.8rem", color: "var(--text-3)", lineHeight: 1.5 }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>
    </section>
  );
}