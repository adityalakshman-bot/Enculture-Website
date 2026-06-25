"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { EmailCaptureForm } from "./EmailCaptureForm";

interface GuideCardProps {
  title: string;
  description: string;
}

export function GuideCard({ title, description }: GuideCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accent-card purple-top">
      <FileText className="mb-3 text-purple" size={24} strokeWidth={2.5} />
      <h3>{title}</h3>
      <p>{description}</p>
      {open ? (
        <div className="mt-4">
          <EmailCaptureForm
            buttonText="Send it"
            confirmationText="Check your inbox — the guide is on its way."
            variant="light"
            align="left"
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="mt-4 font-display font-semibold text-purple hover:text-purple-deep"
        >
          Download guide &rarr;
        </button>
      )}
    </div>
  );
}
