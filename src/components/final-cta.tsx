"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface FinalCtaProps {
  onOpenDemo: (plan?: string) => void;
}

export function FinalCTA({ onOpenDemo }: FinalCtaProps) {
  const { t, isRTL } = useLanguage();

  const scrollToWalkthrough = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("walkthrough");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28 bg-[#14120F] text-[#F6F4EF] border-b border-[#14120F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left rtl:text-right">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-[#F6F4EF]/20 bg-white/5 px-2.5 py-1 text-xs font-mono text-[#F6F4EF] uppercase tracking-wider mb-6">
            <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
            <span>{t.finalCta.eyebrow}</span>
            <span className="text-[#F6F4EF]/30">•</span>
            <span>{t.finalCta.eyebrowTag}</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[0.94] rtl:leading-[1.12]">
            {t.finalCta.titleLine1} <br />
            <span className="italic">{t.finalCta.titleLine2}</span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg text-[#F6F4EF]/70 max-w-2xl leading-relaxed font-normal">
            {t.finalCta.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenDemo("Growth")}
              className="inline-flex items-center justify-center gap-2 rounded-xs bg-[#FF5B1F] px-6 py-3.5 font-mono text-xs uppercase tracking-wider font-semibold text-white hover:bg-[#e24e16] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>{t.finalCta.primaryCta}</span>
              <ArrowRight className={`h-3.5 w-3.5 ${isRTL ? "rotate-180" : ""}`} />
            </button>

            <a
              href="#walkthrough"
              onClick={scrollToWalkthrough}
              className="inline-flex items-center justify-center gap-2 rounded-xs border border-[#F6F4EF]/30 bg-white/5 px-5 py-3.5 font-mono text-xs uppercase tracking-wider font-semibold text-[#F6F4EF] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F]"
            >
              <span>{t.finalCta.secondaryCta}</span>
            </a>
          </div>

          {/* Reassurance Tags */}
          <div className="mt-10 pt-6 border-t border-[#F6F4EF]/15 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-[#F6F4EF]/60">
            {t.finalCta.tags.map((tag, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-[#FF5B1F]" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
