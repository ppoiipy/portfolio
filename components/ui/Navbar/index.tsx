"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/playground", label: "Playground" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800 px-6 py-4">
      <nav className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
        <Link href="/" className="text-sm font-medium text-white">
          Natthakorn
        </Link>

        {/* Desktop Links */}
        <div className="hidden gap-6 text-sm text-gray-400 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-sm text-gray-400 sm:hidden"
          aria-label={`${open ? "Close" : "Open"} menu`}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="mt-4 flex flex-col gap-4 text-sm text-gray-400 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}