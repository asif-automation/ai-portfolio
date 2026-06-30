"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";

const CHALLENGES = [
  {
    challenge:
      "Preventing hallucinations when generating customer support responses.",
    solution:
      "Implemented Retrieval-Augmented Generation (RAG) using a Supabase Vector Store so the model answers using company documentation instead of relying only on pretrained knowledge.",
  },
  {
    challenge: "Maintaining consistent email formatting and tone.",
    solution:
      "Designed a structured system prompt that enforces a professional support style while preserving brand consistency.",
  },
  {
    challenge: "Handling repetitive customer inquiries efficiently.",
    solution:
      "Automated the entire workflow using n8n, reducing manual effort and ensuring every incoming email follows the same processing pipeline.",
  },
  {
    challenge: "Providing relevant information quickly.",
    solution:
      "Used semantic search with OpenAI embeddings to retrieve the most relevant document chunks before generating a response.",
  },
];

function Tag({ children, tone }: { children: React.ReactNode; tone: "challenge" | "solution" }) {
  const isSolution = tone === "solution";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: "20px",
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        border: isSolution ? "1px solid var(--border-accent)" : "1px solid var(--border)",
        background: isSolution ? "var(--accent-glow-sm)" : "rgba(255,255,255,0.04)",
        color: isSolution ? "var(--accent-light)" : "var(--text-3)",
      }}
    >
      {children}
    </span>
  );
}

export default function Challenges() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="challenges" ref={ref} className="section">
      <div className="container">
        <SectionHeader eyebrow="Trade-offs" title="Engineering Challenges & Solutions" />

        <div
          id="challenges-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
        >
          {CHALLENGES.map((item, i) => (
            <div
              key={item.challenge}
              className={`glass reveal reveal-delay-${(i % 4) + 1}`}
              style={{ padding: "1.75rem" }}
            >
              <Tag tone="challenge">Challenge</Tag>
              <p style={{ marginTop: "0.75rem", fontSize: "0.92rem", lineHeight: 1.75, color: "var(--text-2)" }}>
                {item.challenge}
              </p>

              <div style={{ height: "1px", background: "var(--border)", margin: "1.25rem 0" }} />

              <Tag tone="solution">Solution</Tag>
              <p style={{ marginTop: "0.75rem", fontSize: "0.92rem", lineHeight: 1.75, color: "var(--text-2)" }}>
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          #challenges-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}