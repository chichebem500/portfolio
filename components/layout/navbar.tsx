"use client";

import { useState } from "react";

const navigationItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight text-white"
        >
          AK<span className="text-blue-500">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500 md:block"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition-colors hover:border-white/20 hover:text-white md:hidden"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-black/95 px-5 py-6 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
