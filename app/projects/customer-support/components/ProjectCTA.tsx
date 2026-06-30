"use client";

import Link from "next/link";
import useScrollReveal from "../hooks/useScrollReveal";

export default function ProjectCTA() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="project-cta"
      ref={ref}
      className="section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="reveal"
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            background: "rgba(17,24,39,0.5)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "clamp(2.5rem, 5vw, 4rem)",
            textAlign: "center",
            backdropFilter: "blur(12px)",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--accent-light)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Like What You See?
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              color: "var(--text-1)",
              marginBottom: "1.25rem",
            }}
          >
            This is one of several
            <br />
            <span style={{ color: "var(--accent-light)" }}>production AI systems I&apos;ve built</span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--text-2)",
              maxWidth: "480px",
              margin: "0 auto 2.25rem",
            }}
          >
            If you&apos;re hiring for AI automation, agent engineering, or
            workflow integration — I&apos;d love to talk about how I can bring
            this same approach to your team.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            <Link href="/#projects" className="btn-blue">
              View More Projects
            </Link>
            <Link href="/#contact" className="btn-ghost">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}