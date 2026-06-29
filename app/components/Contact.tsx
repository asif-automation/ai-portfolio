"use client";

import { useEffect, useRef } from "react";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "asif.cyberfix@gmail.com",
    href: "mailto:asif.cyberfix@gmail.com",
    primary: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },

{
  label: "WhatsApp",
  value: "+880 1344072358",
  href: "https://wa.me/8801344072358",
  icon: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-1.9c2 .9 4.2 1.4 6.6 1.4 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm7.4 18.1c-.3.8-1.8 1.5-2.5 1.6-.6.1-1.4.2-4.5-1.1-4-1.7-6.6-5.8-6.8-6.1-.2-.3-1.6-2.1-1.6-4s1-2.8 1.4-3.2c.3-.3.8-.5 1.2-.5h.9c.3 0 .6 0 .9.8.3.8 1 2.7 1.1 2.9.1.2.1.5 0 .8-.1.3-.2.5-.4.8-.2.2-.4.5-.6.7-.2.2-.4.5-.2.9.2.3.9 1.5 2 2.5 1.4 1.3 2.6 1.7 3 1.9.3.2.6.1.9-.1.3-.3 1.2-1.3 1.5-1.8.3-.5.7-.4 1.1-.3.5.2 2.9 1.4 3.4 1.6.5.3.8.4.9.6.1.2.1 1-.2 1.8z"/>
    </svg>
  ),
  primary: false,
},

  {
    label: "LinkedIn",
    value: "Coming Soon",
    href: "#",
    primary: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },


];
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.12 }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    
     <section
  id="contact"
  ref={sectionRef}
  className="section"
 style={{
  position: "relative",
  overflow: "hidden",
  minHeight: "calc(100vh - 72px)",
  display: "flex",
  alignItems: "center",
  paddingTop: "55px",
  paddingBottom: "20px",
}}
>
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position:     "absolute",
          top:          "50%",
          left:         "50%",
          transform:    "translate(-50%,-50%)",
          width:        "600px",
          height:       "400px",
          background:   "radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)",
          pointerEvents:"none",
          filter:       "blur(60px)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Inner card */}
        <div
          className="reveal"
          style={{
  maxWidth: "860px",
  margin: "0 auto",
  background: "rgba(17,24,39,0.5)",
  border: "1px solid var(--border)",
  borderRadius: "20px",
  padding: "1.2rem 1.4rem",
  textAlign: "center",
  backdropFilter: "blur(12px)",
}}
        >
          {/* Top label */}
          <p
            className="reveal"
            style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--accent-light)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}
          >
            Get in touch
          </p>

          {/* Heading */}
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.9rem)",
              fontWeight:    700,
              letterSpacing: "-0.035em",
              lineHeight:    1.1,
              color:         "var(--text-1)",
              marginBottom:  "0.9rem",
            }}
          >
            Let's Build Intelligent
            <br />
            <span style={{ color: "var(--accent-light)" }}>AI Automation Together</span>
          </h2>

          {/* Sub */}
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize:     "0.92rem",
              lineHeight:   1.6,
              color:        "var(--text-2)",
              maxWidth:     "520px",
              margin:       "0 auto 1.5rem",
            }}
          >
            I'm currently available for freelance projects, remote roles, and full-time opportunities. Whether you need AI agents, workflow automation, RAG systems, or enterprise integrations, I'd love to discuss how we can build something impactful together.
          </p>

          {/* Contact cards */}
          <div
            className="reveal reveal-delay-3"
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap:                 "10px",
              marginBottom:        "1rem",
            }}
            id="contact-cards"
          >
            {CONTACT_LINKS.map(({ label, value, href, icon, primary }) => (
  <a
    key={label}
    href={href}
    target={href.startsWith("mailto") ? undefined : "_blank"}
    rel="noopener noreferrer"
                style={{
                  display:       "flex",
                  flexDirection: "column",
                  alignItems:    "center",
                  gap:           "6px",
                  padding: "0.75rem",
                  borderRadius: "12px",
                  background:
  label === "Email"
    ? "var(--accent)"
    : label === "WhatsApp"
    ? "rgba(34,197,94,0.12)"
    : "rgba(30,41,59,0.55)",

border:
  label === "Email"
    ? "1px solid var(--accent)"
    : label === "WhatsApp"
    ? "1px solid rgba(34,197,94,.45)"
    : "1px solid rgba(59,130,246,.25)",

color:
  label === "Email"
    ? "#fff"
    : label === "WhatsApp"
    ? "#d1fae5"
    : "#cbd5e1",
                  textDecoration:"none",
                  transition:    "all 0.22s ease",
                  cursor:        "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                 if (label === "Email") {
  el.style.background = "var(--accent-dark)";
  el.style.boxShadow = "0 10px 28px rgba(59,130,246,.45)";
}

else if (label === "WhatsApp") {
  el.style.background = "rgba(34,197,94,.18)";
  el.style.borderColor = "#22c55e";
  el.style.boxShadow = "0 10px 28px rgba(34,197,94,.28)";
  el.style.color = "#ffffff";
}

else {
  el.style.background = "rgba(59,130,246,.08)";
  el.style.borderColor = "#1b4384";
  el.style.boxShadow = "0 10px 28px rgba(44, 119, 240, 0.2)";
  el.style.color = "#ffffff";
}
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
               if (label === "Email") {
  el.style.background = "var(--accent)";
  el.style.borderColor = "var(--accent)";
  el.style.color = "#fff";
}

else if (label === "WhatsApp") {
  el.style.background = "rgba(34,197,94,.12)";
  el.style.borderColor = "rgba(34,197,94,.45)";
  el.style.color = "#e5f9ef";
}

else {
  el.style.background = "rgba(15,23,42,.65)";
  el.style.borderColor = "rgba(59,130,246,.25)";
  el.style.color = "#cbd5e1";
}

el.style.boxShadow = "none";
                  el.style.transform   = "translateY(0)";
                }}
              >
                <span
  style={{
    transform: "scale(0.95)",
    marginBottom: "4px",
  }}
>
  {icon}
</span>
                <span style={{ fontWeight: 600, fontSize: "0.82rem" }}>{label}</span>
                <span
                  style={{
  fontSize: "0.74rem",
  fontWeight: 600,
  letterSpacing: "0.015em",
  fontFamily:
  "Inter, ui-sans-serif, system-ui, sans-serif",
  color: primary ? "rgba(255,255,255,.92)" : "#94a3b8",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%",
}}
                >
                  {value}
                </span>
              </a>
            ))}
          </div>

          {/* Availability note */}
          <div
            className="reveal reveal-delay-4"
            style={{
              display:      "inline-flex",
              alignItems:   "center",
              gap:          "4px",
              color:        "var(--text-3)",
              fontSize:     "0.75rem",
            }}
          >
            <span
              style={{
                width:        "6px",
                height:       "6px",
                borderRadius: "50%",
                background:   "#22c55e",
                display:      "inline-block",
                boxShadow:    "0 0 6px #22c55e",
              }}
            />
            Usually replies within a few hours
          </div>
        </div>
      </div>

      <style>{`
        #contact-cards {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 600px) {
          #contact-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}