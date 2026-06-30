"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const HERO_BADGES = [
  "Production Ready",
  "OpenAI GPT",
  "RAG Pipeline",
  "n8n Automation",
  "Supabase",
];

export default function ProjectHero() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [backHover, setBackHover] = useState(false);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Ambient glow — same treatment as homepage Hero/Contact */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "680px",
          height: "560px",
          background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

 <div
  ref={ref}
  className="container"
  style={{ position: "relative", zIndex: 1, paddingTop: "40px", paddingBottom: "1rem" }}
>
        {/* Back link */}
        <Link
          href="/#projects"
          className="reveal"
          onMouseEnter={() => setBackHover(true)}
          onMouseLeave={() => setBackHover(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "2.25rem",
            color: backHover ? "var(--text-1)" : "var(--text-3)",
            fontSize: "0.85rem",
            fontWeight: 500,
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to projects
        </Link>

        {/* Eyebrow + title + subtitle */}
        <div className="reveal reveal-delay-1">
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--accent-light)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Case Study
          </p>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              color: "var(--text-1)",
              maxWidth: "780px",
            }}
          >
            AI Customer Support Email Automation Agent
          </h1>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              color: "var(--text-2)",
              maxWidth: "640px",
            }}
          >
            A production-grade support agent that reads incoming customer
            emails, retrieves accurate answers from company knowledge, and
            replies automatically — built with n8n, OpenAI, a Supabase Vector
            Store, Gmail and Google Drive.
          </p>
        </div>

        {/* Hero image */}
        <div className="reveal reveal-delay-2" style={{ marginTop: "3rem", position: "relative" }}>
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: "-24px",
              background: "radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
              zIndex: -1,
            }}
          />
          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border)" }}>
            <Image
              src="/projects/customer-support/hero/workflow-banner.png"
              alt="Customer support automation workflow built in n8n"
              width={1600}
              height={900}
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* Badges */}
        <div
          className="reveal reveal-delay-3"
          style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "1.75rem" }}
        >
          {HERO_BADGES.map((label) => (
            <span key={label} className="badge">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}