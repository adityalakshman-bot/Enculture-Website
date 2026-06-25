import Link from "next/link";
import { Logo } from "./Logo";

const LINKS = [
  { label: "Privacy", href: "/about" },
  { label: "Security", href: "/about" },
  { label: "Terms", href: "/about" },
  { label: "Contact", href: "/demo" },
];

export function Footer() {
  return (
    <footer className="border-t border-night-border bg-night py-8">
      <div className="wrap flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
        <div className="md:hidden">
          <Logo className="text-[0.82rem] text-[#7a9491]" />
        </div>
        <div className="text-[0.82rem] text-[#7a9491]">
          &copy; {new Date().getFullYear()} Enculture.ai. All rights reserved.
        </div>
        <div className="flex gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display text-[0.82rem] text-[#7a9491] hover:text-on-night"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
