"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";

export default function Solution() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="solution" ref={ref} className="section">
      <div className="container">
        <SectionHeader eyebrow="The Approach" title="Solution" />

        <div className="glass reveal reveal-delay-1" style={{ padding: "2.5rem" }}>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-2)" }}>
            I designed an AI-powered customer support automation workflow
            using n8n as the orchestration platform. Incoming customer emails
            trigger the workflow, which retrieves relevant company knowledge
            from a Supabase Vector Store using Retrieval-Augmented Generation
            (RAG). OpenAI then generates an accurate, context-aware response
            that is automatically delivered through Gmail.
          </p>
          <p style={{ marginTop: "1.5rem", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-2)" }}>
            The workflow reduces repetitive manual tasks while maintaining
            response consistency. By combining semantic search, prompt
            engineering, and workflow automation, the system provides scalable
            customer support without requiring human agents to answer every
            routine inquiry.
          </p>
        </div>
      </div>
    </section>
  );
}