import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "ghost";
  size?: "default" | "sm";
  href?: string;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonProps["variant"], string> = {
  primary: "bg-purple text-white hover:bg-purple-deep",
  secondary: "bg-teal text-white hover:bg-teal-deep",
  ghost: "bg-transparent border-[1.5px] border-teal text-teal-deep hover:bg-teal hover:text-white",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "px-[1.9rem] py-[0.82rem] text-base",
  sm: "px-[1.35rem] py-[0.6rem] text-[0.9rem]",
};

export function Button({
  variant,
  size = "default",
  href,
  children,
  className = "",
}: ButtonProps) {
  const classes = `inline-block font-display font-semibold rounded-full transition-colors duration-150 text-center ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
