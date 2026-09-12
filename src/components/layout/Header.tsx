"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "EXPERTISE", href: "#expertise" },
    { name: "ABOUT MAYA", href: "#about" },
    { name: "APPROACH", href: "#approach" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1E2420] border-b border-transparent py-6">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <div className="flex">
          <Link href="/maya" className="-m-1.5 p-1.5 flex flex-col items-start">
            <span className="font-serif text-3xl tracking-wide text-[#E8E3D9] uppercase leading-none">Dr. Maya Reynolds</span>
            <span className="font-light text-[10px] tracking-[0.3em] text-[#A9927D] uppercase mt-2">Licensed Clinical Psychologist</span>
          </Link>
        </div>
        
        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-x-8">
          <nav className="flex gap-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-semibold leading-6 text-[#B5B0A6] hover:text-[#A9927D] transition-colors tracking-[0.15em] uppercase"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <Link
            href="#contact"
            className="text-[10px] font-semibold uppercase tracking-[0.15em] px-8 py-3 rounded-full border border-[#C88264] text-[#A9927D] hover:bg-[#A9927D] hover:text-white transition-all ml-4"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#E8E3D9]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1E2420] border-t border-[#29302B] py-4 shadow-xl">
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[12px] font-semibold text-[#E8E3D9] hover:text-[#A9927D] transition-colors tracking-[0.15em] uppercase block py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[12px] font-semibold uppercase tracking-[0.15em] px-8 py-3 mt-4 text-center border border-[#C88264] text-[#A9927D] hover:bg-[#A9927D] hover:text-white transition-all block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
