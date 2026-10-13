"use client";

import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";

export function Footer() {
  const { t, toggleLanguage } = useLanguage();

  return (
    <footer className="bg-[#F6F4EF] text-[#14120F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 text-left rtl:text-right">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center bg-[#14120F] text-[#F6F4EF] text-xs font-mono font-bold">
                NF
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-[#14120F]">
                NexaFlow
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#14120F]/70 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>

            <div className="mt-6 border border-[#14120F]/15 bg-white p-3.5 max-w-sm font-mono text-[11px]">
              <span className="font-bold text-[#14120F] uppercase block">
                {t.footer.portfolioBadge}
              </span>
              <p className="text-[#14120F]/60 mt-1 leading-normal font-sans text-xs">
                {t.footer.portfolioNotice}
              </p>
            </div>
          </div>

          {/* Col 1: Product Navigation */}
          <div className="font-mono text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[#14120F] pb-2 border-b border-[#14120F]/10">
              {t.footer.colProduct}
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#overview" className="text-[#14120F]/70 hover:text-[#14120F]">
                  {t.nav.links[0]?.name || "Overview"}
                </a>
              </li>
              <li>
                <a href="#features" className="text-[#14120F]/70 hover:text-[#14120F]">
                  {t.nav.links[1]?.name || "Four Pillars"}
                </a>
              </li>
              <li>
                <a href="#walkthrough" className="text-[#14120F]/70 hover:text-[#14120F]">
                  {t.nav.links[3]?.name || "Live Sandbox"}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[#14120F]/70 hover:text-[#14120F]">
                  {t.nav.links[4]?.name || "Pricing Tiers"}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="font-mono text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[#14120F] pb-2 border-b border-[#14120F]/10">
              {t.footer.colSolutions}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {t.audience.categories.map((cat) => (
                <li key={cat.id}>
                  <a href="#solutions" className="text-[#14120F]/70 hover:text-[#14120F]">
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources & Notice */}
          <div className="font-mono text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[#14120F] pb-2 border-b border-[#14120F]/10">
              {t.footer.colLegal}
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#faq" className="text-[#14120F]/70 hover:text-[#14120F]">
                  {t.nav.links[5]?.name || "FAQ"}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 text-[#14120F] font-bold hover:text-[#FF5B1F] transition-colors"
                >
                  <Globe className="h-3 w-3" />
                  <span>{t.nav.langToggle}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-[#14120F]/15 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#14120F]/60">
          <div>{t.footer.copyright}</div>
          <div>{t.footer.disclaimer}</div>
        </div>
      </div>
    </footer>
  );
}
