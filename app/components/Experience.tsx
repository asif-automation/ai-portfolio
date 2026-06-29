"use client";

import { useEffect, useRef } from "react";

interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    year: "2026 – Present",
    title: "AI Automation Engineer",
    company: "Freelance · Remote",
    description:
      "Designing and developing production-grade AI agents, workflow automation systems, Retrieval-Augmented Generation (RAG) solutions, and enterprise AI integrations for modern businesses.",
    skills: [
      "LLMs",
      "n8n",
      "OpenAI",
      "Claude",
      "Supabase",
      "LangGraph",
    ],
  },

  {
    year: "Current Focus",
    title: "Building Production AI Portfolio",
    company: "Personal Projects",
    description:
      "Developing enterprise-level AI automation products including appointment scheduling, CRM automation, AI customer support, MCP assistants, and intelligent workflow orchestration.",
    skills: [
      "AI Agents",
      "Automation",
      "MCP",
      "FastAPI",
      "Docker",
    ],
  },

  {
    year: "Learning Journey",
    title: "AI Systems Engineering",
    company: "Continuous Learning",
    description:
      "Specializing in AI agent architecture, automation engineering, backend integrations, vector databases, APIs, and scalable production deployments.",
    skills: [
      "Architecture",
      "PostgreSQL",
      "REST APIs",
      "Git",
      "Docker",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
    return (
    <section id="experience" ref={sectionRef} className="section">
      <div className="container">

        {/* Header */}

        <div
          className="reveal"
          style={{
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--accent-light)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Experience
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text-1)",
              maxWidth: "600px",
            }}
          >
            Building practical AI systems
            <br />
            for real-world automation
          </h2>
        </div>

        {/* Timeline */}

        <div
          style={{
            position: "relative",
            paddingLeft: "42px",
          }}
        >
          {/* Timeline line */}

          <div
            style={{
              position: "absolute",
              left: "11px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, var(--accent), rgba(59,130,246,.15))",
            }}
          />

          {EXPERIENCES.map((item, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${(index % 3) + 1}`}
              style={{
                position: "relative",
                marginBottom: "3rem",
              }}
            >
              {/* Circle */}

              <div
                style={{
                  position: "absolute",
                  left: "-42px",
                  top: "8px",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 18px rgba(59,130,246,.45)",
                  border: "4px solid rgba(15,23,42,1)",
                }}
              />

              {/* Card */}

              <div className="glass" style={{ padding: "1.5rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    color: "var(--accent-light)",
                    fontSize: ".78rem",
                    fontWeight: 600,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    marginBottom: ".5rem",
                  }}
                >
                  {item.year}
                </span>

                <h3
                  style={{
                    fontSize: "1.15rem",
                    color: "var(--text-1)",
                    fontWeight: 700,
                    marginBottom: ".25rem",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "var(--text-3)",
                    marginBottom: "1rem",
                    fontSize: ".9rem",
                  }}
                >
                  {item.company}
                </p>

                <p
                  style={{
                    color: "var(--text-2)",
                    lineHeight: 1.8,
                    marginBottom: "1rem",
                  }}
                >
                  {item.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                  }}
                >
                  {item.skills.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div
          className="glass reveal"
          style={{
            marginTop: "4rem",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "1.35rem",
              color: "var(--text-1)",
              marginBottom: ".8rem",
            }}
          >
            Open to Freelance, Remote & Full-Time Opportunities
          </h3>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "var(--text-2)",
              lineHeight: 1.8,
            }}
          >
            I'm actively building enterprise AI automation solutions and looking
            for opportunities where I can design intelligent systems, automate
            business workflows, and build production-ready AI agents.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width:768px){

          #experience .container > div:nth-child(2){

            padding-left:26px !important;

          }

          #experience .container > div:nth-child(2) > div:first-child{

            left:6px !important;

          }

        }
      `}</style>

    </section>
  );

}