"use client";
import React from "react";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/YOUR_GITHUB_USERNAME",
    label: "GitHub",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.4 6.84 9.76.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.27 10.27 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
      </svg>
    ),
  },
  {
    href:  "https://linkedin.com/in/asifsiddiqui",
    label: "LinkedIn",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: "mailto:your@email.com",
    label: "Email",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: "About", href:"#about" },
  { label: "Skills", href:"#skills" },
  { label: "Services", href:"#services" },
  { label: "Projects", href:"#projects" },
  { label: "Experience", href:"#experience" },
  { label: "Contact", href:"#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop:  "1px solid var(--border)",
        background: "rgba(2,6,23,0.95)",
        padding:    "2.5rem 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            flexWrap:       "wrap",
            gap:            "1.5rem",
          }}
        >
          {/* Left: Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                width:          "28px",
                height:         "28px",
                borderRadius:   "7px",
                background:     "var(--accent)",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                fontSize:       "11px",
                fontWeight:     700,
                color:          "#fff",
                flexShrink:     0,
              }}
            >
              AS
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>
              © {year} Asif Siddiqui. All rights reserved.
            </span>
          </div>

          {/* Center: Quick links */}
          <nav
            style={{ display: "flex", gap: "4px" }}
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              
                <a
  key={href}
  href={href}
  onClick={(e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }}
  style={{
                  color:         "var(--text-3)",
                  fontSize:      "0.8rem",
                  fontWeight:    500,
                  textDecoration:"none",
                  padding:       "5px 9px",
                  borderRadius:  "5px",
                  transition:    "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-1)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-3)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right: Social icons */}
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              
               <a
  key={label}
  href={href}
  target={href.startsWith("http") ? "_blank" : undefined}
  rel="noopener noreferrer"
  aria-label={label}
  style={{
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  width:          "34px",
                  height:         "34px",
                  borderRadius:   "8px",
                  background:     "transparent",
                  border:         "1px solid var(--border)",
                  color:          "var(--text-3)",
                  textDecoration: "none",
                  transition:     "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--border-accent)";
                  el.style.color       = "var(--accent-light)";
                  el.style.background  = "var(--accent-glow-sm)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--border)";
                  el.style.color       = "var(--text-3)";
                  el.style.background  = "transparent";
                }}
              >
                {icon}
              </a>
            ))}

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              style={{
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                width:          "34px",
                height:         "34px",
                borderRadius:   "8px",
                background:     "transparent",
                border:         "1px solid var(--border)",
                color:          "var(--text-3)",
                cursor:         "pointer",
                marginLeft:     "4px",
                transition:     "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "rgba(255,255,255,0.2)";
                el.style.color       = "var(--text-1)";
                el.style.background  = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "var(--border)";
                el.style.color       = "var(--text-3)";
                el.style.background  = "transparent";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Built with line */}
        <div
          style={{
            marginTop:  "1.5rem",
            paddingTop: "1.25rem",
            borderTop:  "1px solid rgba(255,255,255,0.04)",
            textAlign:  "center",
          }}
        >
          <p style={{ fontSize: "0.72rem", color: "var(--text-3)", letterSpacing: "0.02em" }}>
            Built with Next.js · TypeScript · AI-first Design · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}