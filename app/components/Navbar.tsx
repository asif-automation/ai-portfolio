"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeId,    setActiveId]    = useState("");

  /* ── Scroll glass effect ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section tracker ── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Close mobile menu on resize ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

const scrollTo = useCallback((href: string) => {
  setMobileOpen(false);

  const el = document.querySelector(href) as HTMLElement | null;
  if (!el) return;

  // Contact section
  if (href === "#contact") {
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset;

    const y =
      scrollTop +
      rect.top -
      (window.innerHeight - rect.height) / 2;

    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth",
    });

    return;
  }

  // All other sections
  const y =
    el.getBoundingClientRect().top +
    window.pageYOffset -
    64;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}, []);

  return (
    <header
      style={{
        position:   "fixed",
        top:        0,
        left:       0,
        right:      0,
        zIndex:     100,
        transition: "background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
        backdropFilter:
  scrolled || mobileOpen
    ? "blur(16px)"
    : "none",
      
        WebkitBackdropFilter:
  scrolled || mobileOpen
    ? "blur(16px)"
    : "none",
        borderBottom:
  scrolled || mobileOpen
    ? "1px solid rgba(255,255,255,0.06)"
    : "1px solid transparent",
      }}
    >
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <nav
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            height:         "64px",
          }}
        >
          {/* ── Logo ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            style={{
              display:    "flex",
              alignItems: "center",
              gap:        "10px",
              background: "none",
              border:     "none",
              cursor:     "pointer",
              padding:    0,
            }}
          >
            <span
              style={{
                width:          "32px",
                height:         "32px",
                borderRadius:   "8px",
                background:     "var(--accent)",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                fontSize:       "12px",
                fontWeight:     700,
                color:          "#fff",
                letterSpacing:  "-0.01em",
                flexShrink:     0,
              }}
            >
              AI
            </span>
           <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    lineHeight: 1.1,
  }}
>
  <span
    style={{
      color: "var(--text-1)",
      fontWeight: 700,
      fontSize: "0.95rem",
    }}
  >
    Asif Siddiqui
  </span>

  <span
    style={{
      color: "var(--text-3)",
      fontSize: "0.68rem",
      marginTop: "2px",
    }}
  >
    AI Automation Engineer
  </span>
</div>
          </button>

          {/* ── Desktop links ── */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "2px" }}
            className="nav-desktop"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const active = activeId === href.slice(1);
              return (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  style={{
                    background:    active ? "rgba(255,255,255,0.06)" : "transparent",
                    border:        "none",
                    borderRadius:  "7px",
                    padding:       "7px 14px",
                    fontSize:      "0.875rem",
                    fontWeight:    500,
                    color:         active ? "var(--text-1)" : "var(--text-2)",
                    cursor:        "pointer",
                    transition:    "color 0.2s, background 0.2s",
                    letterSpacing: "0.005em",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--text-1)";
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--text-2)";
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    }
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* ── Right slot ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Hire Me — desktop only */}
            <a
  href="/resume.pdf"
rel="noopener noreferrer"

  target="_blank"
  className="nav-desktop"
  style={{
    color: "var(--text-2)",
    textDecoration: "none",
    fontSize: "0.82rem",
    padding: "8px 14px",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    transition: "0.25s",
  }}
>
  Resume
</a>
            <button
              className="btn-blue nav-desktop"
              onClick={() => scrollTo("#contact")}
              style={{ padding: "8px 18px", fontSize: "0.82rem" }}
            >
              Let's Talk
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="nav-mobile"
              style={{
                background:    "transparent",
                border:        "1px solid rgba(255,255,255,0.1)",
                borderRadius:  "7px",
                padding:       "8px",
                cursor:        "pointer",
                color:         "var(--text-2)",
                display:       "flex",
                alignItems:    "center",
                justifyContent:"center",
                transition:    "border-color 0.2s",
              }}
            >
              {mobileOpen ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div
            style={{
              padding:       "0.75rem 0 1.25rem",
              borderTop:     "1px solid rgba(255,255,255,0.06)",
              display:       "flex",
              flexDirection: "column",
              gap:           "2px",
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                style={{
                  background:   "transparent",
                  border:       "none",
                  borderRadius: "8px",
                  padding:      "12px 10px",
                  textAlign:    "left",
                  fontSize:     "0.95rem",
                  fontWeight:   500,
                  color:        "var(--text-2)",
                  cursor:       "pointer",
                  transition:   "color 0.18s, background 0.18s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-1)";
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-2)";
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
              >
                {label}
              </button>
            ))}
            <button
              className="btn-blue"
              onClick={() => scrollTo("#contact")}
              style={{ marginTop: "10px", width: "100%", justifyContent: "center" }}
            >
              Let's Talk
            </button>
          </div>
        )}
      </div>

      {/* Responsive styles injected inline */}
      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile  { display: none;  }
        @media (max-width: 767px) {
          .nav-desktop { display: none;  }
          .nav-mobile  { display: flex;  }
        }
      `}</style>
    </header>
  );
}