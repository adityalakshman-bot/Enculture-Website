import type { ReactNode } from "react";

interface AccentCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  accent?: "teal" | "purple";
}

export function AccentCard({ icon, title, children, accent = "teal" }: AccentCardProps) {
  return (
    <div className={`accent-card ${accent === "purple" ? "purple-top" : ""}`}>
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
