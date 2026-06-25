"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  const pulse = shouldReduceMotion
    ? {}
    : {
        animate: { scale: [1, 1.08, 1] },
        transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" as const },
      };

  const lineFlicker = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          animate: { opacity: [0.2, 0.45, 0.2] },
          transition: { duration: 3.4, repeat: Infinity, ease: "easeInOut" as const, delay },
        };

  return (
    <svg
      viewBox="0 0 380 300"
      width="380"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <motion.line x1="70" y1="80" x2="180" y2="50" stroke="#338282" strokeWidth="1.2" {...lineFlicker(0)} />
      <motion.line x1="180" y1="50" x2="290" y2="90" stroke="#8159A5" strokeWidth="1.2" {...lineFlicker(0.3)} />
      <motion.line x1="290" y1="90" x2="310" y2="200" stroke="#338282" strokeWidth="1.2" {...lineFlicker(0.6)} />
      <motion.line x1="310" y1="200" x2="200" y2="230" stroke="#8159A5" strokeWidth="1.2" {...lineFlicker(0.9)} />
      <motion.line x1="200" y1="230" x2="80" y2="210" stroke="#338282" strokeWidth="1.2" {...lineFlicker(1.2)} />
      <motion.line x1="80" y1="210" x2="70" y2="80" stroke="#8159A5" strokeWidth="1.2" {...lineFlicker(1.5)} />
      <line x1="180" y1="50" x2="200" y2="230" stroke="#338282" strokeWidth="1" opacity=".25" />
      <line x1="70" y1="80" x2="310" y2="200" stroke="#8159A5" strokeWidth="1" opacity=".2" />
      <line x1="290" y1="90" x2="80" y2="210" stroke="#338282" strokeWidth="1" opacity=".2" />

      <circle cx="70" cy="80" r="9" fill="#338282" />
      <circle cx="180" cy="50" r="6" fill="#8159A5" />
      <circle cx="290" cy="90" r="10" fill="#338282" />
      <circle cx="310" cy="200" r="7" fill="#8159A5" />
      <circle cx="200" cy="230" r="9" fill="#338282" />
      <circle cx="80" cy="210" r="6" fill="#8159A5" />

      <motion.circle cx="185" cy="148" r="14" fill="#15262a" stroke="#338282" strokeWidth="2" {...pulse} />
      <text x="185" y="153" textAnchor="middle" fill="#6fd0c6" fontFamily="Outfit,sans-serif" fontSize="10" fontWeight="700">
        CHI
      </text>

      <rect x="105" y="105" width="150" height="90" rx="10" fill="white" stroke="#e6e5e0" strokeWidth="1" />
      <text x="118" y="123" fill="#5d5c66" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="600" letterSpacing="1.5">
        CULTURE HEALTH INDEX
      </text>
      <text x="118" y="148" fill="#1b1a20" fontFamily="Outfit,sans-serif" fontSize="28" fontWeight="700">
        72
      </text>
      <text x="152" y="148" fill="#338282" fontFamily="Outfit,sans-serif" fontSize="10" fontWeight="600">
        &uarr; 4pts
      </text>
      <rect x="118" y="155" width="60" height="5" rx="3" fill="#ecf4f3" />
      <rect x="118" y="155" width="43" height="5" rx="3" fill="#338282" />
      <rect x="118" y="165" width="60" height="5" rx="3" fill="#f3eef8" />
      <rect x="118" y="165" width="50" height="5" rx="3" fill="#8159A5" />
      <text x="118" y="185" fill="#a9bfbd" fontFamily="Outfit,sans-serif" fontSize="6.5">
        Board-ready &middot; Updated today
      </text>
    </svg>
  );
}
