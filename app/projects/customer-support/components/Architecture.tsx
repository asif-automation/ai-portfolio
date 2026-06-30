"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";

type Step = {
  label: string;
  sublabel: string;
  icon: React.ReactNode;
};

const ICON_PROPS = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const STEPS: Step[] = [
  {
    label: "Customer Email",
    sublabel: "Incoming inquiry",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Gmail Trigger",
    sublabel: "Workflow starts",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    label: "AI Agent",
    sublabel: "Intent + context",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
      </svg>
    ),
  },
  {
    label: "Vector Store",
    sublabel: "Semantic search",
    icon: (
      <svg {...ICON_PROPS}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    label: "OpenAI GPT",
    sublabel: "Response generated",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    label: "Automated Reply",
    sublabel: "Sent via Gmail",
    icon: (
      <svg {...ICON_PROPS}>
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
];

function Arrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--text-3)"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, transform: vertical ? "rotate(90deg)" : undefined }}
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        textAlign: "center",
        padding: "1.25rem 1rem",
        borderRadius: "12px",
        border: "1px solid var(--border)",
        background: "rgba(17,24,39,0.5)",
        minWidth: "150px",
      }}
    >
      <span
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          background: "var(--accent-glow-sm)",
          border: "1px solid var(--border-accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--accent-light)",
        }}
      >
        {step.icon}
      </span>
      <div>
        <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-1)" }}>{step.label}</p>
        <p style={{ marginTop: "2px", fontSize: "0.75rem", color: "var(--text-3)" }}>{step.sublabel}</p>
      </div>
    </div>
  );
}

export default function Architecture() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="architecture" ref={ref} className="section">
      <div className="container">
        <SectionHeader
          eyebrow="How It Connects"
          title="System Architecture"
          description="Six stages take an inbound email from inbox to an automatically delivered, context-aware reply."
        />

        <div className="glass reveal reveal-delay-1" style={{ padding: "2rem" }}>
          {/* Desktop: horizontal flow */}
          <div id="arch-row" style={{ display: "flex", alignItems: "stretch", justifyContent: "space-between", gap: "6px" }}>
            {STEPS.map((step, i) => (
              <div key={step.label} style={{ display: "flex", alignItems: "center", gap: "6px", flex: i < STEPS.length - 1 ? 1 : "0 0 auto" }}>
                <StepCard step={step} />
                {i < STEPS.length - 1 && <Arrow />}
              </div>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div id="arch-col" style={{ display: "none", flexDirection: "column", gap: "6px" }}>
            {STEPS.map((step, i) => (
              <div key={step.label}>
                <StepCard step={step} />
                {i < STEPS.length - 1 && (
                  <div style={{ display: "flex", justifyContent: "center", padding: "4px 0" }}>
                    <Arrow vertical />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          #arch-row { display: none !important; }
          #arch-col { display: flex !important; }
        }
      `}</style>
    </section>
  );
}