interface EyebrowProps {
  text: string;
  variant?: "teal" | "purple";
  className?: string;
}

export function Eyebrow({ text, variant = "teal", className = "" }: EyebrowProps) {
  return (
    <div className={`eyebrow ${variant === "purple" ? "violet" : ""} ${className}`}>
      {text}
    </div>
  );
}
