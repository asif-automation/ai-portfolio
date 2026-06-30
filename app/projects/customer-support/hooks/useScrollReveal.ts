"use client";

import { useEffect, useRef } from "react";

/**
 * Encapsulates the scroll-reveal IntersectionObserver pattern used across
 * the homepage sections (About, Skills, Services, Experience, Contact).
 * Attach the returned ref to a section's root element; any descendant with
 * the `.reveal` class will receive `.in-view` once it enters the viewport.
 */
export default function useScrollReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}