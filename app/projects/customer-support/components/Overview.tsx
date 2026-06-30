"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";

const STATS = [
  { label: "AI Model", value: "OpenAI GPT-4" },
  { label: "Automation Platform", value: "n8n" },
  { label: "Knowledge Retrieval", value: "RAG + Supabase" },
  { label: "Communication", value: "Gmail API" },
  { label: "Processing", value: "End-to-End, Zero-Touch" },
  { label: "Status", value: "Production Ready" },
];

export default function Overview() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="overview" ref={ref} className="section" style={{ paddingTop: "1.5rem" }}>
      <div className="container">
        <SectionHeader eyebrow="At a Glance" title="Project Overview" />

        <div
          id="overview-grid"
          className="reveal reveal-delay-1"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}
        >
          {STATS.map((item) => (
            <div key={item.label} className="glass" style={{ padding: "1.5rem" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--text-3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {item.label}
              </p>
              <h3
                style={{
                  marginTop: "0.6rem",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--text-1)",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #overview-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          #overview-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}