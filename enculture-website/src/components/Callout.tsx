import type { ReactNode } from "react";

interface CalloutProps {
  variant?: "teal" | "purple";
  children: ReactNode;
}

export function Callout({ variant = "purple", children }: CalloutProps) {
  return <div className={`callout ${variant === "teal" ? "teal" : ""}`}>{children}</div>;
}
