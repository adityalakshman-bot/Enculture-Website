import type { ReactNode } from "react";

interface NightSectionProps {
  children: ReactNode;
  className?: string;
}

export function NightSection({ children, className = "" }: NightSectionProps) {
  return (
    <section className={`night-section ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}
