"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ImageLightbox({ src, alt }: Props) {
  const [open, setOpen] = useState(false);

  /* Esc to close + lock body scroll while open */
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={`View larger image: ${alt}`}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          padding: 0,
          border: "none",
          background: "none",
          cursor: "zoom-in",
        }}
      >
        {/*
          `fill` + `objectFit: contain` instead of fixed width/height.
          The previous fixed 1600x900 props forced every screenshot into a
          16:9 box regardless of its real aspect ratio, which stretched
          images whose native ratio differed (most of these are closer to
          2.3:1). `contain` guarantees screenshots are never distorted.
        */}
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ objectFit: "contain", transition: "transform 0.3s ease" }}
        />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(2,6,23,0.92)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            cursor: "zoom-out",
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close image"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              border: "1px solid var(--border-hover)",
              background: "rgba(17,24,39,0.85)",
              color: "var(--text-1)",
              cursor: "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", width: "min(92vw, 1400px)", height: "min(88vh, 900px)" }}
          >
            <Image src={src} alt={alt} fill sizes="92vw" style={{ objectFit: "contain" }} />
          </div>
        </div>
      )}
    </>
  );
}