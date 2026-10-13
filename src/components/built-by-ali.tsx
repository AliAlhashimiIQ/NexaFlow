"use client";

import { MessageSquare, ExternalLink, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function BuiltByAli() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-[#EFECE4] border-b border-[#14120F]/15 text-left rtl:text-right"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-[#14120F]/20 bg-white px-2.5 py-1 text-xs font-mono text-[#14120F] uppercase tracking-wider mb-5">
            <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
            <span>{t.builtByAli.eyebrow}</span>
            <span className="text-[#14120F]/30">•</span>
            <span>{t.builtByAli.eyebrowTag}</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-[#14120F] leading-[0.98] rtl:leading-[1.15]">
            {t.builtByAli.titleLine1} <br />
            <span className="italic font-light">{t.builtByAli.titleLine2}</span>
          </h2>

          {/* Body */}
          <p className="mt-5 text-sm sm:text-base text-[#14120F]/80 leading-relaxed font-normal">
            {t.builtByAli.description}
          </p>

          {/* Contact Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://wa.me/9647700683686"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Ali via WhatsApp"
              className="inline-flex items-center justify-center gap-2.5 rounded-xs bg-[#FF5B1F] px-6 py-3.5 font-mono text-xs uppercase tracking-wider font-semibold text-white hover:bg-[#e24e16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14120F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFECE4] transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span>{t.builtByAli.whatsappLabel}</span>
            </a>

            <a
              href="https://mostaql.com/u/[my URL]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Ali's profile on Mostaql"
              className="inline-flex items-center justify-center gap-2.5 rounded-xs border border-[#14120F]/25 bg-white px-6 py-3.5 font-mono text-xs uppercase tracking-wider font-semibold text-[#14120F] hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFECE4] transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>{t.builtByAli.mostaqlLabel}</span>
            </a>
          </div>

          {/* Freelance Highlights */}
          <div className="mt-10 pt-6 border-t border-[#14120F]/15 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-[#14120F]/70">
            {t.builtByAli.highlights.map((highlight, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                {idx === 0 ? (
                  <Sparkles className="h-3 w-3 text-[#FF5B1F]" />
                ) : (
                  <span className="h-1 w-1 bg-[#FF5B1F]" />
                )}
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
