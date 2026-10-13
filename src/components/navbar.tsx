"use client";

import { useState } from "react";
import { Menu, X, ArrowRight, ChevronRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface NavbarProps {
  onOpenDemo: (plan?: string, mode?: "signup" | "signin") => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isRTL, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#F6F4EF] border-b border-[#14120F]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F] rounded-xs"
            aria-label="NexaFlow Home"
          >
            <div className="flex h-7 w-7 items-center justify-center bg-[#14120F] text-[#F6F4EF] text-xs font-mono font-bold">
              NF
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold tracking-tight text-[#14120F]">
                NexaFlow
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] uppercase text-[#14120F]/60 tracking-wider">
                {t.nav.systemVersion}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6"
          >
            {t.nav.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs text-[#14120F]/70 hover:text-[#14120F] hover:underline underline-offset-4 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Bilingual Toggle Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Switch language"
              className="inline-flex items-center gap-1.5 border border-[#14120F]/20 bg-white px-2.5 py-1.5 font-mono text-xs text-[#14120F] hover:bg-[#EFECE4] transition-colors rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F]"
            >
              <Globe className="h-3.5 w-3.5 text-[#14120F]/60" />
              <span className="font-semibold">{t.nav.langToggle}</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenDemo("Growth", "signin")}
              className="font-mono text-xs uppercase tracking-wider text-[#14120F]/80 hover:text-[#14120F] px-2 py-1 transition-colors"
            >
              {t.nav.signIn}
            </button>
            <button
              type="button"
              onClick={() => onOpenDemo("Growth", "signup")}
              className="inline-flex items-center gap-2 rounded-xs bg-[#FF5B1F] px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold text-white hover:bg-[#e24e16] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14120F]"
            >
              <span>{t.nav.exploreDemo}</span>
              <ArrowRight className={`h-3.5 w-3.5 ${isRTL ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 border border-[#14120F]/20 bg-white px-2 py-1 font-mono text-xs text-[#14120F] rounded-xs"
            >
              <Globe className="h-3 w-3 text-[#14120F]/60" />
              <span className="font-semibold text-[11px]">{t.nav.langToggle}</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenDemo("Growth", "signup")}
              className="rounded-xs bg-[#FF5B1F] px-3 py-1.5 font-mono text-xs font-semibold text-white"
            >
              {t.nav.exploreDemo}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-1.5 text-[#14120F] border border-[#14120F]/20 rounded-xs hover:bg-[#14120F]/5"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-b border-[#14120F]/15 bg-[#F6F4EF] px-4 py-4 space-y-2"
        >
          {t.nav.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 border-b border-[#14120F]/10 font-mono text-xs text-[#14120F]"
            >
              <span>{link.name}</span>
              <ChevronRight className={`h-3.5 w-3.5 text-[#14120F]/40 ${isRTL ? "rotate-180" : ""}`} />
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2 font-mono text-xs">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo("Growth", "signin");
              }}
              className="w-full py-2 border border-[#14120F]/20 text-[#14120F] uppercase"
            >
              {t.nav.signIn}
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo("Growth", "signup");
              }}
              className="w-full py-2 bg-[#FF5B1F] text-white uppercase font-bold"
            >
              {t.nav.exploreDemo}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
