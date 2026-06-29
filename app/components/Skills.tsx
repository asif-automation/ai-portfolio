"use client";

import { useEffect, useRef, useState } from "react";

type Category = "All" | "AI & ML" | "Automation" | "Frontend" | "Backend" | "Cloud" | "Databases";

interface Skill {
  name:     string;
  category: Exclude<Category, "All">;
  icon:     React.ReactNode;
  level:    number; // 1-3: familiar, proficient, expert
}

function IconBox({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      style={{
        width:          "34px",
        height:         "34px",
        borderRadius:   "8px",
        background:     accent ? "rgba(59,130,246,0.12)" : "rgba(255,255,255,0.05)",
        border:         `1px solid ${accent ? "rgba(59,130,246,0.22)" : "rgba(255,255,255,0.08)"}`,
        display:        "inline-flex",
        alignItems:     "center",
        justifyContent: "center",
        fontSize:       "0.7rem",
        fontWeight:     700,
        color:          accent ? "var(--accent-light)" : "var(--text-2)",
        flexShrink:     0,
        letterSpacing:  "-0.01em",
      }}
    >
      {children}
    </span>
  );
}

const SKILLS: Skill[] = [
  // AI
  { name: "Claude", category: "AI & ML", level: 3, icon: <IconBox accent>CL</IconBox> },
  { name: "OpenAI", category: "AI & ML", level: 3, icon: <IconBox accent>AI</IconBox> },
  { name: "MCP", category: "AI & ML", level: 3, icon: <IconBox accent>MCP</IconBox> },
  { name: "LangGraph", category: "AI & ML", level: 2, icon: <IconBox accent>LG</IconBox> },

  // Automation
  { name: "n8n", category: "Automation", level: 3, icon: <IconBox>n8n</IconBox> },
  { name: "Make", category: "Automation", level: 3, icon: <IconBox>MK</IconBox> },
  { name: "Webhooks", category: "Automation", level: 3, icon: <IconBox>WH</IconBox> },

  // Backend
  { name: "FastAPI", category: "Backend", level: 2, icon: <IconBox>FA</IconBox> },
  { name: "REST APIs", category: "Backend", level: 3, icon: <IconBox>API</IconBox> },

  // Database
  { name: "Supabase", category: "Databases", level: 3, icon: <IconBox>SB</IconBox> },
  { name: "PostgreSQL", category: "Databases", level: 3, icon: <IconBox>PG</IconBox> },
  { name: "SQL", category: "Databases", level: 3, icon: <IconBox>SQL</IconBox> },

  // Cloud
{ name: "Docker", category: "Cloud", level: 2, icon: <IconBox>🐳</IconBox> },
{ name: "AWS", category: "Cloud", level: 2, icon: <IconBox>☁️</IconBox> },
{ name: "Azure", category: "Cloud", level: 2, icon: <IconBox>AZ</IconBox> },
{ name: "GCP", category: "Cloud", level: 2, icon: <IconBox>GCP</IconBox> },

  // Frontend / Dev
  { name: "Git", category: "Frontend", level: 3, icon: <IconBox>Git</IconBox> },
  { name: "GitHub", category: "Frontend", level: 3, icon: <IconBox>GH</IconBox> },
];

const CATEGORIES: Category[] = ["All", "AI & ML", "Automation", "Frontend", "Backend", "Cloud", "Databases"];

const LEVEL_LABELS = ["", "Learning", "Production", "Advanced"];

export default function Skills() {
  const [active, setActive] = useState<Category>("All");
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = active === "All" ? SKILLS : SKILLS.filter((s) => s.category === active);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.1 }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <section
  id="skills"
  ref={sectionRef}
  className="section"
  style={{
    background:
      "linear-gradient(180deg, rgba(2,6,23,0) 0%, rgba(15,23,42,.55) 50%, rgba(2,6,23,0) 100%)",
  }}
>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent-light)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Technology Stack
          </p>
          <h2
            style={{
              fontSize:      "clamp(2rem, 4vw, 3rem)",
              fontWeight:    700,
              letterSpacing: "-0.03em",
              lineHeight:    1.1,
              color:         "var(--text-1)",
              maxWidth:      "440px",
            }}
          >
            AI Automation Technology Stack
          </h2>
        </div>

        {/* Category tabs */}
        <div
          className="reveal reveal-delay-1"
          style={{
            display:    "flex",
            gap:        "6px",
            flexWrap:   "wrap",
            marginBottom:"2.5rem",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                background:    active === cat ? "var(--accent)"                 : "transparent",
                color:         active === cat ? "#fff"                          : "var(--text-2)",
                border:        active === cat ? "1px solid var(--accent)"       : "1px solid var(--border)",
                borderRadius:  "20px",
                padding:       "6px 14px",
                fontSize:      "0.8rem",
                fontWeight:    500,
                cursor:        "pointer",
                transition:    "all 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                if (active !== cat) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-hover)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-1)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== cat) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-2)";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          className="reveal reveal-delay-2"
          style={{
            display:               "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap:                   "8px",
          }}
        >
          {filtered.map(({ name, icon, level }) => (
            <div
              key={name}
              className="skill-chip hover-lift"
              title={LEVEL_LABELS[level]}
            >
              {icon}
              <div>
                <p style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text-1)", lineHeight: 1.2 }}>
                  {name}
                </p>
                <p style={{ fontSize: "0.68rem", color: "var(--text-3)", marginTop: "1px" }}>
                  {LEVEL_LABELS[level]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div
          className="reveal reveal-delay-3"
          style={{
            display:    "flex",
            gap:        "1.5rem",
            marginTop:  "2rem",
            flexWrap:   "wrap",
          }}
        >
          {[1, 2, 3].map((lvl) => (
            <div key={lvl} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ display: "flex", gap: "3px" }}>
                {[1, 2, 3].map((dot) => (
                  <span
                    key={dot}
                    style={{
                      width:        "6px",
                      height:       "6px",
                      borderRadius: "50%",
                      background:   dot <= lvl ? "var(--accent)" : "var(--border-hover)",
                    }}
                  />
                ))}
              </div>
              <span style={{ fontSize: "0.72rem", color: "var(--text-3)" }}>
                {LEVEL_LABELS[lvl]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}