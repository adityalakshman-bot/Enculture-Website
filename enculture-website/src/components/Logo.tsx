interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return <span className={`font-display font-bold ${className}`}>Enculture</span>;
}
