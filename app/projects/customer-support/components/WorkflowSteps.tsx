"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";
import Screenshot from "./Screenshot";

const STEPS = [
  {
    number: "01",
    title: "Email Received",
    description:
      "A new customer email arrives in Gmail. The Gmail Trigger node polls the inbox and pushes the message — subject, sender, and body — into the workflow automatically, with no manual intervention.",
    image: "/projects/customer-support/screenshots/02-gmail-trigger.png",
    alt: "n8n Gmail Trigger node configuration",
  },
  {
    number: "02",
    title: "AI Agent Processes the Request",
    description:
      "The Support Agent node receives the customer's question alongside a structured system prompt that defines tone, scope, and a hard rule: consult the knowledge base before answering, rather than relying on the model's own assumptions.",
    image: "/projects/customer-support/screenshots/03-ai-agent.png",
    alt: "n8n Support Agent node showing the system prompt and retrieved context",
  },
  {
    number: "03",
    title: "Context-Aware Response Generation",
    description:
      "With the relevant policy text retrieved from the vector store, OpenAI generates a complete, on-brand email reply grounded in NovaTech's actual return and shipping policies — not generic training knowledge.",
    image: "/projects/customer-support/screenshots/04-openai-model.png",
    alt: "OpenAI Chat Model node generating a grounded response",
  },
  {
    number: "04",
    title: "Reply Sent Automatically",
    description:
      "The generated response is delivered back to the customer through Gmail's Reply node, preserving the original thread so the conversation reads naturally. No human ever opens the ticket.",
    image: "/projects/customer-support/screenshots/06-gmail-send.png",
    alt: "n8n Reply to a message node sending the generated response",
  },
];

export default function WorkflowSteps() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="workflow" ref={ref} className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Step by Step"
          title="From Inbox to Resolved — Automatically"
          description="Every screenshot below is a live node from the production n8n workflow, captured mid-execution — not a mockup."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {STEPS.map((step, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={step.number}
                className={`workflow-row reveal reveal-delay-${(i % 4) + 1}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "3rem",
                  alignItems: "center",
                }}
              >
                <div style={{ order: reversed ? 2 : 1 }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--accent-light)",
                      letterSpacing: "0.05em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--text-1)",
                      marginBottom: "0.9rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-2)" }}>
                    {step.description}
                  </p>
                </div>

                <div style={{ order: reversed ? 1 : 2 }}>
                  <Screenshot src={step.image} alt={step.alt} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .workflow-row {
            grid-template-columns: 1fr !important;
          }
          .workflow-row > div {
            order: initial !important;
          }
        }
      `}</style>
    </section>
  );
}