"use client";

import { useEffect, useRef } from "react";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const SERVICES: Service[] = [
  {
    title: "AI Agent Development",
    description:
      "Production-grade AI agents powered by LLMs that automate business workflows, customer interactions, and decision-making.",
    features: [
      "Multi-Agent Systems",
      "LangGraph Workflows",
      "OpenAI & Claude",
      "MCP Integration",
    ],
    icon: "🤖",
  },

  {
    title: "Workflow Automation",
    description:
      "End-to-end automation using n8n, Make, APIs, databases, and AI to eliminate repetitive manual work.",
    features: [
      "n8n Automation",
      "Make.com",
      "Webhook Integration",
      "REST APIs",
    ],
    icon: "⚙️",
  },

  {
    title: "RAG Knowledge Systems",
    description:
      "Enterprise Retrieval-Augmented Generation systems with vector databases for intelligent document search and AI assistants.",
    features: [
      "Supabase Vector DB",
      "Embeddings",
      "Semantic Search",
      "Knowledge Base",
    ],
    icon: "📚",
  },

  {
    title: "AI Customer Support",
    description:
      "AI support agents capable of handling customer inquiries, order tracking, FAQs, refund requests, and email automation.",
    features: [
      "Email Automation",
      "Live Chat",
      "Ticket Handling",
      "Order Support",
    ],
    icon: "💬",
  },

  {
    title: "API & Database Integration",
    description:
      "Connect AI agents with modern APIs, PostgreSQL, Supabase, CRMs, calendars, and third-party business platforms.",
    features: [
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Supabase",
    ],
    icon: "🔗",
  },

  {
    title: "AI Consulting",
    description:
      "Architecture, planning, and implementation guidance for businesses adopting AI automation and intelligent workflows.",
    features: [
      "System Design",
      "AI Strategy",
      "Automation Planning",
      "Deployment",
    ],
    icon: "🚀",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const items = section.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
    return (
    <section
      id="services"
      ref={sectionRef}
      className="section"
      style={{
        background: "rgba(17,24,39,0.18)",
      }}
    >
      <div className="container">

        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--accent-light)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.8rem",
              fontWeight: 600,
            }}
          >
            Services
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700,
              color: "var(--text-1)",
              marginBottom: "1rem",
            }}
          >
            AI Solutions I Build
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              color: "var(--text-2)",
              lineHeight: 1.8,
            }}
          >
            I develop production-grade AI automation systems that streamline
            operations, reduce manual work, and help businesses scale through
            intelligent software.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: "22px",
          }}
        >
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={`glass reveal reveal-delay-${(index % 3) + 1}`}
              style={{
                padding: "2rem",
                borderRadius: "18px",
                transition: "all .35s ease",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: "rgba(59,130,246,.12)",
                  border: "1px solid rgba(59,130,246,.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "30px",
                  marginBottom: "1.3rem",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: ".8rem",
                  color: "var(--text-1)",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "var(--text-2)",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                {service.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="badge"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="glass reveal"
          style={{
            marginTop: "4rem",
            padding: "2rem",
            borderRadius: "18px",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
              color: "var(--text-1)",
            }}
          >
            Why Work With Me?
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {[
              "Production-grade architecture",
              "LLM & Agent specialization",
              "Scalable automation workflows",
              "API-first engineering",
              "Clean documentation",
              "Modern UI & Backend integration",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                  }}
                />

                <span
                  style={{
                    color: "var(--text-2)",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
      @media(max-width:768px){
        #services .container{
          padding-inline:20px;
        }
      }
      `}</style>

    </section>
  );
}