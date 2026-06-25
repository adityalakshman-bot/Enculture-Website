interface StatBoxProps {
  number: string;
  label: string;
  description: string;
}

export function StatBox({ number, label, description }: StatBoxProps) {
  return (
    <div className="stat-box">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-desc">{description}</div>
    </div>
  );
}
