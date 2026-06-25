"use client";

import { useState } from "react";

interface Arc {
  label: string;
  title: string;
  description: string;
}

interface ArcTabsProps {
  arcs: Arc[];
}

export function ArcTabs({ arcs }: ArcTabsProps) {
  const [active, setActive] = useState(0);
  const current = arcs[active];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {arcs.map((arc, index) => (
          <button
            key={arc.label}
            onClick={() => setActive(index)}
            className={`rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors ${
              index === active ? "bg-teal text-white" : "bg-teal-tint text-teal-deep hover:bg-teal/20"
            }`}
          >
            {arc.label}
          </button>
        ))}
      </div>
      <div className="card mt-4">
        <h3>{current.title}</h3>
        <p className="text-[0.95rem] leading-relaxed text-muted">{current.description}</p>
      </div>
    </div>
  );
}
