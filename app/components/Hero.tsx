"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
/* ── Neural-network SVG ───────────────────────── */
function NeuralNet() {
  const inputs  = [{ x: 80, y: 90 }, { x: 80, y: 170 }, { x: 80, y: 250 }, { x: 80, y: 330 }];
  const hidden  = [{ x: 210, y: 65 }, { x: 210, y: 145 }, { x: 210, y: 210 }, { x: 210, y: 275 }, { x: 210, y: 355 }];
  const outputs = [{ x: 340, y: 148 }, { x: 340, y: 272 }];
  const nodeClasses = ["node-a","node-b","node-c","node-d","node-e","node-f","node-g"];
  const lineClasses = ["line-pulse-a","line-pulse-b","line-pulse-c","line-pulse-d"];

  return (
    <svg
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", maxWidth: "460px" }}
      aria-label="Neural network illustration"
    >
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#3B82F6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#60A5FA" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
        </radialGradient>
        <filter id="softBlur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="nodeShadow">
          <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#3B82F6" floodOpacity="0.8" />
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx="210" cy="210" r="185" fill="url(#bgGlow)" />

      {/* Rotating outer ring */}
      <circle
        cx="210" cy="210" r="178"
        fill="none"
        stroke="rgba(59,130,246,0.14)"
        strokeWidth="1"
        strokeDasharray="6 5"
        className="anim-rotate"
        style={{ transformOrigin: "210px 210px" }}
      />

      {/* Inner dashed ring */}
      <circle
        cx="210" cy="210" r="148"
        fill="none"
        stroke="rgba(59,130,246,0.08)"
        strokeWidth="1"
        strokeDasharray="3 8"
      />

      {/* ── Input → Hidden lines ── */}
      {inputs.map((iNode, i) =>
        hidden.map((hNode, j) => (
          <line
            key={`ih-${i}-${j}`}
            x1={iNode.x} y1={iNode.y}
            x2={hNode.x} y2={hNode.y}
            stroke="#3B82F6"
            strokeWidth="0.8"
            className={lineClasses[(i + j) % 4]}
          />
        ))
      )}

      {/* ── Hidden → Output lines ── */}
      {hidden.map((hNode, i) =>
        outputs.map((oNode, j) => (
          <line
            key={`ho-${i}-${j}`}
            x1={hNode.x} y1={hNode.y}
            x2={oNode.x} y2={oNode.y}
            stroke="#60A5FA"
            strokeWidth="0.9"
            className={lineClasses[(i + j + 1) % 4]}
          />
        ))
      )}

      {/* ── Input nodes ── */}
      {inputs.map((node, i) => (
        <g key={`in-${i}`}>
          <circle cx={node.x} cy={node.y} r="14" fill="rgba(59,130,246,0.1)" filter="url(#softBlur)" />
          <circle
            cx={node.x} cy={node.y} r="7"
            fill="url(#nodeGlow)"
            filter="url(#nodeShadow)"
            className={nodeClasses[i % nodeClasses.length]}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          />
          <circle cx={node.x} cy={node.y} r="10" fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
        </g>
      ))}

      {/* ── Hidden nodes ── */}
      {hidden.map((node, i) => (
        <g key={`hd-${i}`}>
          <circle cx={node.x} cy={node.y} r="16" fill="rgba(59,130,246,0.08)" filter="url(#softBlur)" />
          <circle
            cx={node.x} cy={node.y} r="8"
            fill="#3B82F6"
            filter="url(#nodeShadow)"
            className={nodeClasses[(i + 2) % nodeClasses.length]}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          />
          <circle cx={node.x} cy={node.y} r="13" fill="none" stroke="rgba(59,130,246,0.18)" strokeWidth="1" />
        </g>
      ))}

      {/* ── Output nodes ── */}
      {outputs.map((node, i) => (
        <g key={`out-${i}`}>
          <circle cx={node.x} cy={node.y} r="22" fill="rgba(59,130,246,0.12)" filter="url(#softBlur)" />
          <circle
            cx={node.x} cy={node.y} r="11"
            fill="#3B82F6"
            filter="url(#nodeShadow)"
            className="anim-glow"
          />
          <circle cx={node.x} cy={node.y} r="17" fill="none" stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" />
          <circle cx={node.x} cy={node.y} r="22" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
        </g>
      ))}

      {/* Layer labels */}
      {[
        { x: 80,  label: "Input"   },
        { x: 210, label: "Process" },
        { x: 340, label: "Output"  },
      ].map(({ x, label }) => (
        <text
          key={label}
          x={x} y="400"
          textAnchor="middle"
          fill="rgba(255,255,255,0.2)"
          fontSize="10"
          fontFamily="monospace"
          letterSpacing="0.08em"
        >
          {label.toUpperCase()}
        </text>
      ))}
    </svg>
  );
}

/* ── Hero component ───────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  /* subtle parallax on mouse */
  useEffect(() => {
    const hero = ref.current;
    if (!hero) return;
    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = ((e.clientX / w) - 0.5) * 18;
      const y = ((e.clientY / h) - 0.5) * 10;
      const blobs = hero.querySelectorAll<HTMLElement>("[data-blob]");
      blobs.forEach((b, i) => {
        const factor = i === 0 ? 1 : i === 1 ? -0.65 : 0.4;
        b.style.transform = `translate(${x * factor}px, ${y * factor}px) scale(1)`;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        minHeight: "100vh",
        display:   "flex",
        alignItems:"center",
        position:  "relative",
        overflow:  "hidden",
        paddingTop:"60px",
      }}
    >
      {/* ── Background blobs ── */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
      >
        <div
          data-blob="0"
          className="anim-blob1"
          style={{
            position:     "absolute",
            top:          "-10%",
            left:         "-5%",
            width:        "55vw",
            height:       "55vw",
            maxWidth:     "700px",
            maxHeight:    "700px",
            borderRadius: "50%",
            background:   "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
            filter:       "blur(80px)",
            transition:   "transform 0.8s ease",
          }}
        />
        <div
          data-blob="1"
          className="anim-blob2"
          style={{
            position:     "absolute",
            bottom:       "-15%",
            right:        "-10%",
            width:        "50vw",
            height:       "50vw",
            maxWidth:     "640px",
            maxHeight:    "640px",
            borderRadius: "50%",
            background:   "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            filter:       "blur(100px)",
            transition:   "transform 0.8s ease",
          }}
        />
        <div
          data-blob="2"
          className="anim-blob3"
          style={{
            position:     "absolute",
            top:          "40%",
            left:         "40%",
            width:        "30vw",
            height:       "30vw",
            maxWidth:     "360px",
            maxHeight:    "360px",
            borderRadius: "50%",
            background:   "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
            filter:       "blur(60px)",
            transition:   "transform 0.8s ease",
          }}
        />
        {/* subtle grid */}
        <div
          style={{
            position:   "absolute",
            inset:      0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:      "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage:"radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{
            display:       "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:           "4rem",
            alignItems:    "center",
            minHeight:     "calc(100vh - 80px)",
            paddingTop:    "3rem",
            paddingBottom: "3rem",
          }}
          className="hero-grid"
        >
          {/* ── Left: Text ── */}
          <div>
            {/* Status badge */}
            <div
              style={{
                display:      "inline-flex",
                alignItems:   "center",
                gap:          "7px",
                padding:      "5px 12px",
                background:   "rgba(59,130,246,0.08)",
                border:       "1px solid rgba(59,130,246,0.2)",
                borderRadius: "20px",
                marginBottom: "1.75rem",
                animation:    "fadeUp 0.5s ease both",
              }}
            >
              <span
                style={{
                  width:        "6px",
                  height:       "6px",
                  borderRadius: "50%",
                  background:   "#22c55e",
                  display:      "inline-block",
                  animation:    "glowPulse 2s ease-in-out infinite",
                  boxShadow:    "0 0 6px #22c55e",
                }}
              />
              <span style={{ fontSize: "0.78rem", fontWeight: 500, color: "var(--accent-light)", letterSpacing: "0.02em" }}>
                Available for Freelance & Remote Work
              </span>
            </div>

            {/* Name */}
           <h1
  style={{
    fontSize: "clamp(3rem,7vw,5.5rem)",
    fontWeight: 800,
    lineHeight: 0.95,
    letterSpacing: "-0.04em",
    color: "var(--text-1)",
    marginBottom: "1.8rem",
  }}
>
  Asif Siddiqui
</h1>

            {/* Title */}
            <div
              style={{
                fontSize:      "clamp(1.2rem, 2.2vw, 1.6rem)",
                fontWeight:    500,
                color:         "var(--accent-light)",
                letterSpacing: "-0.02em",
                marginBottom:  "1.5rem",
                animation:     "fadeUp 0.6s ease 0.2s both",
              }}
            >
              AI Automation Engineer • AI Agent Developer
            </div>

            {/* Tagline */}
            <p
              style={{
                fontSize:     "1.05rem",
                lineHeight:   1.75,
                color:        "var(--text-2)",
                maxWidth:     "460px",
                marginBottom: "2.5rem",
                animation:    "fadeUp 0.6s ease 0.3s both",
              }}
            >
              I build production-grade AI automation systems, intelligent agents, and workflow solutions using LLMs, n8n, LangGraph, MCP, and modern backend technologies to automate business operations at scale.
            </p>

            {/* CTA buttons */}
            <div
              style={{
                display:   "flex",
                gap:       "12px",
                flexWrap:  "wrap",
                animation: "fadeUp 0.6s ease 0.4s both",
              }}
            >
              <a
                href="#projects"
                className="btn-blue"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
                </svg>
                Explore Projects
              </a>

              <a
                href="#"
                className="btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social row */}
            <div
              style={{
                display:    "flex",
                gap:        "16px",
                marginTop:  "2.5rem",
                animation:  "fadeUp 0.6s ease 0.5s both",
              }}
            >
              {[
                {
                  href: "#",
                  label: "GitHub",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.4 6.84 9.76.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.27 10.27 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "LinkedIn",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }) => (
  <a
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    style={{
      color: "var(--text-3)",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "0.8rem",
      fontWeight: 500,
      transition: "color 0.2s",
      textDecoration: "none",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
  >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Neural Net ── */}
          <div
            style={{
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              animation:      "fadeIn 1s ease 0.4s both",
            }}
            className="hero-visual"
          >
            <div className="anim-float" style={{ width: "100%", maxWidth: "460px" }}>
              <NeuralNet />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position:       "absolute",
          bottom:         "2rem",
          left:           "50%",
          transform:      "translateX(-50%)",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          gap:            "6px",
          animation:      "fadeIn 1s ease 1s both",
          opacity:        0.4,
          color:          "var(--text-2)",
        }}
        aria-hidden
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Scroll</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Responsive styles */}
      <style>{`
        .hero-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
            align-items: center;
          }
          .hero-grid > div:first-child{
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
}
.hero-grid img{
width:120px !important;
height:120px !important;
margin-bottom:18px;
}
          .hero-visual {
            max-width: 320px;
            margin: 0 auto;
          }
        }
        @media (max-width: 480px) {
          .hero-visual { max-width: 260px; }
        }
      `}</style>
    </section>
  );
}