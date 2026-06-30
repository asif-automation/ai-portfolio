"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";
import Screenshot from "./Screenshot";

const DATA_SOURCES = [
  "Company Policy PDF",
  "Shipping Information",
  "Return & Refund Policy",
  "Product FAQ",
  "Support Documentation",
];

const PIPELINE = [
  "Google Drive Storage",
  "Document Chunking",
  "OpenAI Embeddings",
  "Supabase Vector Store",
  "Semantic Search",
];

const PROOF = [
  {
    image: "/projects/customer-support/screenshots/07-google-drive.png",
    alt: "Source knowledge base document with shipping and policy details",
    caption: "Source documentation — shipping methods, delivery times, and policy details.",
  },
  {
    image: "/projects/customer-support/screenshots/05-vector-store.png",
    alt: "n8n Supabase Vector Store node inserting document embeddings",
    caption: "Documents are chunked and embedded, then inserted into Supabase.",
  },
  {
    image: "/projects/customer-support/screenshots/08-supabase-table.png",
    alt: "Supabase table editor showing stored document embeddings",
    caption: "102 chunks stored as searchable vector embeddings, ready for retrieval.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginTop: "3px", flexShrink: 0, color: "var(--accent-light)" }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function KnowledgeBase() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="knowledge-base" ref={ref} className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Grounded Responses"
          title="Knowledge Base"
          description="The AI agent uses Retrieval-Augmented Generation (RAG) to answer customer questions with accurate company information instead of relying only on the language model's general knowledge."
        />

        <div
          id="kb-grid"
          className="reveal reveal-delay-1"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "2rem" }}
        >
          <div className="glass" style={{ padding: "1.75rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-1)", marginBottom: "1rem" }}>
              Data Source
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {DATA_SOURCES.map((item) => (
                <li key={item} style={{ display: "flex", gap: "10px", fontSize: "0.92rem", color: "var(--text-2)" }}>
                  <CheckIcon /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass" style={{ padding: "1.75rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-1)", marginBottom: "1rem" }}>
              Retrieval Pipeline
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {PIPELINE.map((item) => (
                <li key={item} style={{ display: "flex", gap: "10px", fontSize: "0.92rem", color: "var(--text-2)" }}>
                  <CheckIcon /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          id="kb-proof"
          className="reveal reveal-delay-2"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}
        >
          {PROOF.map((item) => (
            <Screenshot key={item.image} src={item.image} alt={item.alt} caption={item.caption} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          #kb-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          #kb-proof { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}