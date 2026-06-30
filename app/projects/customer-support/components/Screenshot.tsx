import ImageLightbox from "@/app/components/ImageLightbox";

/**
 * Shared screenshot frame used by WorkflowSteps, KnowledgeBase, and
 * EmailExamples. Centralizes the "browser frame" treatment so every
 * screenshot on the page — regardless of its real dimensions — sits in a
 * consistent, never-stretched container.
 */
export default function Screenshot({
  src,
  alt,
  index,
  caption,
}: {
  src: string;
  alt: string;
  index?: number;
  caption?: string;
}) {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--bg-card)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "clamp(200px, 30vw, 360px)",
          background: "#0a0f1c",
        }}
      >
        {typeof index === "number" && (
          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              zIndex: 2,
              padding: "3px 9px",
              borderRadius: "6px",
              background: "rgba(2,6,23,0.78)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "var(--text-2)",
              letterSpacing: "0.02em",
            }}
          >
            {String(index).padStart(2, "0")}
          </span>
        )}
        <ImageLightbox src={src} alt={alt} />
      </div>

      {caption && (
        <p
          style={{
            padding: "0.85rem 1.1rem",
            fontSize: "0.8rem",
            lineHeight: 1.6,
            color: "var(--text-3)",
            borderTop: "1px solid var(--border)",
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}