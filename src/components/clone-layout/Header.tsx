"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "RATES & INSURANCE", href: "#rates" },
    { name: "DR. MAYA REYNOLDS (REDESIGN)", href: "/maya" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F9F8F5] border-b border-transparent py-6">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5 flex flex-col items-start">
            <span className="font-serif text-3xl tracking-wide text-[#2C3330] uppercase leading-none">Conejo Valley</span>
            <span className="font-light text-[10px] tracking-[0.3em] text-[#738C8B] uppercase mt-2">Family Counseling</span>
          </Link>
        </div>
        
        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-x-8">
          <nav className="flex gap-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={
                  link.href === "/maya"
                    ? "text-[10px] font-bold leading-6 text-white bg-[#738C8B] px-4 py-2 rounded hover:bg-[#5A6360] transition-colors tracking-[0.15em] uppercase"
                    : "text-[10px] font-semibold leading-6 text-[#5A6360] hover:text-[#738C8B] transition-colors tracking-[0.15em] uppercase"
                }
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <Link
            href="#contact"
            className="text-[10px] font-semibold uppercase tracking-[0.15em] px-8 py-3 rounded-full border border-[#738C8B] text-[#738C8B] hover:bg-[#738C8B] hover:text-white transition-all ml-4"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#2C3330]"
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F9F8F5] border-t border-[#E8E1D5] py-4 shadow-xl">
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={
                  link.href === "/maya"
                    ? "text-[12px] font-bold text-white bg-[#738C8B] px-4 py-3 rounded hover:bg-[#5A6360] transition-colors tracking-[0.15em] uppercase block text-center mt-2"
                    : "text-[12px] font-semibold text-[#5A6360] hover:text-[#738C8B] transition-colors tracking-[0.15em] uppercase block py-2"
                }
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[12px] font-semibold uppercase tracking-[0.15em] px-8 py-3 mt-4 text-center border border-[#738C8B] text-[#738C8B] hover:bg-[#738C8B] hover:text-white transition-all block rounded-full"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
