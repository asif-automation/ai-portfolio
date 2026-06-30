"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";

const STACK = [
  "OpenAI GPT-4",
  "n8n",
  "Supabase",
  "Supabase Vector Store",
  "PostgreSQL",
  "Google Drive",
  "Gmail",
  "Embeddings",
  "RAG",
  "REST API",
  "Webhooks",
  "Next.js",
];

export default function TechStack() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="techstack" ref={ref} className="section">
      <div className="container">
        <SectionHeader eyebrow="Built With" title="Technology Stack" />

        <div
          id="techstack-grid"
          className="reveal reveal-delay-1"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}
        >
          {STACK.map((item) => (
            <div key={item} className="skill-chip" style={{ justifyContent: "center" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text-1)" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #techstack-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #techstack-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}