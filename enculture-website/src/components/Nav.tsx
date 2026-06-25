"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./Button";

interface NavProps {
  activePath?: string;
}

const LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Platform", href: "/platform" },
  { label: "Assessments", href: "/assessments" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Nav({ activePath }: NavProps) {
  const pathname = usePathname();
  const current = activePath ?? pathname;
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => current === href || current?.startsWith(`${href}/`);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="wrap flex items-center gap-6 py-3">
        <Link href="/">
          <Image src="/enculture-logo.svg" alt="Enculture" width={142} height={28} priority />
        </Link>

        <div className="ml-auto hidden items-center gap-0.5 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button variant="primary" size="sm" href="/demo" className="hidden md:inline-block">
          Book a demo
        </Button>

        <button
          className="ml-auto text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" href="/demo" className="mt-3 text-center">
              Book a demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
