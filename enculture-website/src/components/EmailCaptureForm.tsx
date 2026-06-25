"use client";

import { useState } from "react";

interface EmailCaptureFormProps {
  buttonText: string;
  confirmationText: string;
  placeholder?: string;
  variant?: "night" | "light";
  align?: "center" | "left";
}

// NOTE: this currently only shows local confirmation UI — it does not send the
// email anywhere yet. Wire the onSubmit handler to a real endpoint (CRM/ESP)
// before launch.
export function EmailCaptureForm({
  buttonText,
  confirmationText,
  placeholder = "you@company.com",
  variant = "night",
  align = "center",
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const confirmationColor = variant === "night" ? "text-bright-teal" : "text-teal-deep";

  if (submitted) {
    return <p className={`font-display text-[1.05rem] font-semibold ${confirmationColor}`}>{confirmationText}</p>;
  }

  const inputClasses =
    variant === "night"
      ? "border-night-border bg-night-2 text-on-night placeholder:text-on-night-2"
      : "border-line bg-card text-ink placeholder:text-muted";

  return (
    <form
      className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={placeholder}
        className={`w-64 rounded-full border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-teal ${inputClasses}`}
      />
      <button
        type="submit"
        className="rounded-full bg-purple px-7 py-3 font-display font-semibold text-white transition-colors hover:bg-purple-deep"
      >
        {buttonText}
      </button>
    </form>
  );
}
