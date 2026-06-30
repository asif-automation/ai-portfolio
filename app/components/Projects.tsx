"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Project {
  title:       string;
  description: string;
  tech:        string[];
  github:      string;
  demo:        string;
  category:    string;
  highlight:   boolean;
  visual:      React.ReactNode;
}

/* ── Placeholder visual cards ── */
function ProjectVisual({ index }: { index: number }) {
  const configs = [
    {
      bg: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(99,102,241,0.06) 100%)",
      content: (
        <svg viewBox="0 0 280 160" width="100%" style={{ opacity: 0.7 }}>
          {/* Agent conversation flow */}
          {[0,1,2,3].map((i) => (
            <g key={i}>
              <rect x={20 + i*60} y={20} width="48" height="28" rx="6" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
              <rect x={24 + i*60} y={28} width="32" height="4" rx="2" fill="rgba(59,130,246,0.5)"/>
              <rect x={24 + i*60} y={36} width="22" height="3" rx="1.5" fill="rgba(59,130,246,0.25)"/>
            </g>
          ))}
          {[0,1,2].map((i) => (
            <line key={i} x1={68 + i*60} y1={34} x2={80 + i*60} y2={34} stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" strokeDasharray="3 2"/>
          ))}
          {[0,1,2,3,4].map((i) => (
            <g key={i}>
              <rect x={20 + i*50} y={70} width="44" height="70" rx="8" fill="rgba(17,24,39,0.8)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
              <rect x={28 + i*50} y={82} width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.2)"/>
              <rect x={28 + i*50} y={89} width="20" height="2" rx="1" fill="rgba(255,255,255,0.1)"/>
              <rect x={28 + i*50} y={95} width="24" height="2" rx="1" fill="rgba(255,255,255,0.1)"/>
              <rect x={28 + i*50} y={110} width="28" height="18" rx="4" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.25)" strokeWidth="1"/>
              <rect x={32 + i*50} y={117} width="16" height="2" rx="1" fill="rgba(59,130,246,0.6)"/>
            </g>
          ))}
        </svg>
      ),
    },
    {
      bg: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(59,130,246,0.08) 100%)",
      content: (
        <svg viewBox="0 0 280 160" width="100%" style={{ opacity: 0.7 }}>
          {/* RAG pipeline */}
          <rect x="20" y="20" width="60" height="40" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" strokeWidth="1"/>
          <rect x="28" y="30" width="36" height="4" rx="2" fill="rgba(16,185,129,0.5)"/>
          <rect x="28" y="38" width="28" height="3" rx="1.5" fill="rgba(16,185,129,0.3)"/>
          <rect x="28" y="44" width="22" height="3" rx="1.5" fill="rgba(16,185,129,0.2)"/>
          <line x1="80" y1="40" x2="120" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 3"/>
          <circle cx="130" cy="40" r="16" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5"/>
          {[0,1,2].map(i => <circle key={i} cx={126 + i*4} cy="40" r="2" fill="rgba(59,130,246,0.7)" style={{animationDelay: `${i*0.3}s`}}/>)}
          <line x1="146" y1="40" x2="180" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 3"/>
          <rect x="180" y="20" width="80" height="40" rx="8" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.25)" strokeWidth="1"/>
          <rect x="188" y="30" width="46" height="4" rx="2" fill="rgba(59,130,246,0.5)"/>
          <rect x="188" y="38" width="36" height="3" rx="1.5" fill="rgba(59,130,246,0.3)"/>
          {[0,1,2,3].map(i => (
            <rect key={i} x={20 + i*65} y="80" width="54" height="60" rx="8" fill="rgba(17,24,39,0.7)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          ))}
          {[0,1,2,3].map(i => (
            <g key={i}>
              <rect x={28 + i*65} y="92" width="32" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
              <rect x={28 + i*65} y="99" width="24" height="2.5" rx="1.2" fill="rgba(255,255,255,0.08)"/>
              <rect x={28 + i*65} y="105" width="28" height="2.5" rx="1.2" fill="rgba(255,255,255,0.08)"/>
              <rect x={28 + i*65} y="124" width="36" height="10" rx="4" fill="rgba(99,102,241,0.18)" stroke="rgba(99,102,241,0.3)" strokeWidth="1"/>
            </g>
          ))}
        </svg>
      ),
    },
    {
      bg: "linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(59,130,246,0.08) 100%)",
      content: (
        <svg viewBox="0 0 280 160" width="100%" style={{ opacity: 0.7 }}>
          {/* Workflow automation */}
          {[0,1,2,3,4].map(i => (
            <g key={i}>
              <circle cx={30 + i*55} cy="55" r="20" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5"/>
              <rect x={20 + i*55} y="50" width="20" height="2.5" rx="1.2" fill="rgba(255,255,255,0.2)"/>
              <rect x={22 + i*55} y="56" width="16" height="2" rx="1" fill="rgba(255,255,255,0.12)"/>
            </g>
          ))}
          {[0,1,2,3].map(i => (
            <line key={i} x1={50 + i*55} y1="55" x2={65 + i*55} y2="55" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" strokeDasharray="3 2"/>
          ))}
          <rect x="20" y="95" width="240" height="50" rx="10" fill="rgba(17,24,39,0.6)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          {[0,1,2,3,4,5,6].map(i => (
            <rect key={i} x={30 + i*32} y="105" width="24" height="30" rx="5" fill={i % 3 === 0 ? "rgba(59,130,246,0.18)" : "rgba(255,255,255,0.04)"} stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          ))}
        </svg>
      ),
    },
  ];

  const cfg = configs[index % configs.length];

  return (
    <div
      style={{
        height:         "160px",
        background:     cfg.bg,
        borderBottom:   "1px solid var(--border)",
        overflow:       "hidden",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "0 1rem",
      }}
    >
      {cfg.content}
    </div>
  );
}

/* ── Project data ── */
const PROJECTS: Project[] = [
  {
    title: "AI Customer Support Email Automation Agent",
    description:
      "A production-grade RAG-powered AI agent that automates customer support email handling by retrieving company knowledge, generating context-aware responses, maintaining conversation history, and streamlining support workflows with n8n, Supabase, and OpenAI.",
    tech: [
      "OpenAI",
      "n8n",
      "Supabase",
      "PostgreSQL",
      "RAG",
      "Vector Search",
      "Webhooks"
    ],
  github: "#",
demo: "/projects/customer-support",
    category: "Completed Project",
    highlight: true,
    visual: null,
  },

  {
    title: "AI Appointment Scheduling & Booking Agent",
    description:
      "Production-grade AI scheduling assistant capable of managing appointments, checking availability, rescheduling meetings, sending reminders, and synchronizing calendars using intelligent workflows.",
    tech: [
      "Claude",
      "n8n",
      "Google Calendar",
      "Webhooks",
      "FastAPI"
    ],
    
  
  github: "#",
demo: "#",
    category: "In Development",
    highlight: false,
    visual: null,
  },

  {
    title: "AI Lead Qualification & CRM Automation Agent",
    description:
      "AI-powered sales assistant that captures leads, qualifies prospects, enriches customer information, updates CRM systems, and automates follow-up sequences.",
    tech: [
      "Claude",
      "OpenAI",
      "n8n",
      "Supabase",
      "CRM",
      "REST API"
    ],
    github: "#",
    demo: "#",
    category: "Upcoming",
    highlight: false,
    visual: null,
  },

  {
    title: "AI E-commerce Customer Support Agent",
    description:
      "Production-grade AI customer support assistant capable of order tracking, refunds, returns, product inquiries, FAQ automation, and database integration.",
    tech: [
      "Claude",
      "OpenAI",
      "Supabase",
      "PostgreSQL",
      "n8n",
      "RAG"
    ],
    github: "#",
    demo: "#",
    category: "Upcoming",
    highlight: false,
    visual: null,
  },

  {
    title: "MCP-Powered AI Personal Productivity Assistant",
    description:
      "An intelligent AI assistant built with Model Context Protocol (MCP) that manages emails, calendars, tasks, reminders, documents, web research, and productivity workflows through natural language.",
    tech: [
      "Claude",
      "MCP",
      "LangGraph",
      "FastAPI",
      "n8n"
    ],
    github: "#",
    demo: "#",
    category: "Upcoming",
    highlight: false,
    visual: null,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.08 }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section">
      <div className="container">
        {/* Header */}
        <div
          className="reveal"
          style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "flex-end",
            marginBottom:   "3.5rem",
            flexWrap:       "wrap",
            gap:            "1rem",
          }}
        >
          <div>
            <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent-light)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Portfolio
            </p>
            <h2
              style={{
                fontSize:      "clamp(2rem, 4vw, 3rem)",
                fontWeight:    700,
                letterSpacing: "-0.03em",
                lineHeight:    1.1,
                color:         "var(--text-1)",
              }}
            >
             AI Automation Projects
            </h2>
          </div>
          
                    <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ fontSize: "0.82rem", padding: "9px 18px" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.4 6.84 9.76.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.27 10.27 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
            </svg>
            GitHub (Coming Soon)
          </a>
        </div>

        {/* Project grid */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap:                 "20px",
          }}
          className="projects-grid"
        >
          {PROJECTS.map((project, idx) => (
            <article
              key={project.title}
              className={`project-card reveal reveal-delay-${(idx % 3) + 1}`}
            >
              {/* Accent bar (animated on hover via CSS) */}
              <div className="project-card-accent-bar" />

              {/* Project image */}
<div
  style={{
    aspectRatio: "16 / 9",
    position: "relative",
    overflow: "hidden",

    background: "#050B16",
    borderBottom: "1px solid var(--border)",

    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",

    boxShadow:
      "inset 0 0 40px rgba(59,130,246,0.08), 0 20px 50px rgba(0,0,0,0.45)",
  }}
>
  {idx === 0 ? (
    <>
      {/* Blue glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "-30%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.16) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Image wrapper */}
      <div
        style={{
          position: "absolute",
          inset: "6px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 35px rgba(0,0,0,.45)",
        }}
      >
        <Image
          src="/projects/customer-support/screenshots/01-n8n-workflow.png"
          alt="AI Customer Support Email Automation Workflow"
          fill
          priority
          quality={100}
          style={{
            objectFit: "contain",
            background: "#050B16",
          }}
        />
      </div>
    </>
  ) : (
    <ProjectVisual index={idx} />
  )}
</div>

              {/* Content */}
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Category + title */}
                <div style={{ marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      fontSize:     "0.7rem",
                      fontWeight:   600,
                      color:        "var(--accent-light)",
                      letterSpacing:"0.1em",
                      textTransform:"uppercase",
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    style={{
                      fontSize:      "1.1rem",
                      fontWeight:    700,
                      letterSpacing: "-0.02em",
                      color:         "var(--text-1)",
                      marginTop:     "4px",
                      lineHeight:    1.25,
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize:     "0.875rem",
                    lineHeight:   1.7,
                    color:        "var(--text-2)",
                    marginBottom: "1.25rem",
                    flex:         1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech stack */}
                <div
                  style={{
                    display:      "flex",
                    flexWrap:     "wrap",
                    gap:          "5px",
                    marginBottom: "1.25rem",
                  }}
                >
                  {project.tech.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "8px" }}>
                  
                             <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm btn-sm-ghost"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.4 6.84 9.76.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.27 10.27 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                    </svg>
                    GitHub
                  </a>
                  <Link
  href={project.demo}
  className="btn-sm btn-sm-accent"
>
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
  Preview
</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}