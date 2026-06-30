"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";
import Screenshot from "./Screenshot";

const TAKEAWAYS = [
  "Answers grounded in the real refund and return policy — not a guess.",
  "Maintains a professional, on-brand support tone automatically.",
  "Delivered within seconds of the original email arriving.",
];

export default function EmailExamples() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="email-examples" ref={ref} className="section">
      <div className="container">
        <SectionHeader
          eyebrow="In Practice"
          title="A Real Conversation, Start to Finish"
          description="A customer asks about the refund policy. The agent retrieves the relevant policy section and replies — end to end, with no human involved."
        />

        <div className="reveal reveal-delay-1" style={{ maxWidth: "920px", margin: "0 auto 1.75rem" }}>
          <Screenshot
            src="/projects/customer-support/screenshots/09-customer-email.png"
            alt="Gmail thread showing the customer's question and the AI-generated reply"
          />
        </div>

        <div
          id="takeaway-grid"
          className="reveal reveal-delay-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          {TAKEAWAYS.map((item) => (
            <div
              key={item}
              className="glass"
              style={{ padding: "1.25rem", display: "flex", gap: "10px", alignItems: "flex-start" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent-light)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0, marginTop: "2px" }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-2)" }}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #takeaway-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}