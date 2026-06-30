"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";

export default function Problem() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="problem" ref={ref} className="section">
      <div className="container">
        <SectionHeader eyebrow="The Brief" title="Business Problem" />

        <div className="glass reveal reveal-delay-1" style={{ padding: "2.5rem" }}>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-2)" }}>
            Customer support teams spend significant time answering repetitive
            email inquiries such as order status, return requests, refund
            policies, shipping questions, and product availability. Manual
            responses increase operational costs, delay reply times, and make
            it difficult to maintain consistent service quality as support
            volume grows.
          </p>
          <p style={{ marginTop: "1.5rem", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-2)" }}>
            The objective of this project was to automate the first level of
            customer support by combining Retrieval-Augmented Generation
            (RAG), semantic search, and workflow automation. The system
            retrieves relevant company knowledge before generating
            context-aware responses, reducing manual workload while improving
            response accuracy and consistency.
          </p>
        </div>
      </div>
    </section>
  );
}