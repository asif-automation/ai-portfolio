import type { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <div
      className="reveal"
      style={{
        marginBottom: "3rem",
        textAlign: center ? "center" : "left",
      }}
    >
      <p
        style={{
          fontSize: "0.78rem",
          fontWeight: 600,
          color: "var(--accent-light)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}
      >
        {eyebrow}
      </p>

      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          color: "var(--text-1)",
          maxWidth: center ? "640px" : "600px",
          marginLeft: center ? "auto" : undefined,
          marginRight: center ? "auto" : undefined,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            marginTop: "1.25rem",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--text-2)",
            maxWidth: "640px",
            marginLeft: center ? "auto" : undefined,
            marginRight: center ? "auto" : undefined,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}