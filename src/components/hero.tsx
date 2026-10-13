"use client";

import { ArrowRight, Play } from "lucide-react";
import { HeroDashboardPreview } from "./hero-dashboard-preview";
import { useLanguage } from "@/context/language-context";

interface HeroProps {
  onOpenDemo: (plan?: string, mode?: "signup" | "signin") => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  const { t, isRTL } = useLanguage();

  const scrollToWalkthrough = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("walkthrough");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-[#14120F]/15 bg-[#F6F4EF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 items-start">
          {/* Main Column: Asymmetric, Headline */}
          <div className="lg:col-span-6 text-left rtl:text-right">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 border border-[#14120F]/20 bg-white px-2.5 py-1 text-xs font-mono text-[#14120F] uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
              <span>{t.hero.eyebrow}</span>
              <span className="text-[#14120F]/30">•</span>
              <span>{t.hero.eyebrowTag}</span>
            </div>

            {/* Giant Display Headline */}
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[76px] xl:text-[92px] 2xl:text-[108px] font-normal tracking-tight text-[#14120F] leading-[0.94] rtl:leading-[1.12]">
              {t.hero.titleLine1} <br />
              <span className="italic font-light">{t.hero.titleLine2}</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg text-[#14120F]/80 leading-relaxed font-normal max-w-xl">
              {t.hero.description}
            </p>

            {/* Dual CTAs (Signal Orange Accent + Hairline Outline) */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenDemo("Growth", "signup")}
                className="inline-flex items-center justify-center gap-2 rounded-xs bg-[#FF5B1F] px-6 py-3.5 font-mono text-xs uppercase tracking-wider font-semibold text-white hover:bg-[#e24e16] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14120F]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className={`h-3.5 w-3.5 ${isRTL ? "rotate-180" : ""}`} />
              </button>

              <a
                href="#walkthrough"
                onClick={scrollToWalkthrough}
                className="inline-flex items-center justify-center gap-2 rounded-xs border border-[#14120F]/25 bg-white px-5 py-3.5 font-mono text-xs uppercase tracking-wider font-semibold text-[#14120F] hover:bg-[#EFECE4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F]"
              >
                <Play className={`h-3 w-3 fill-[#14120F] ${isRTL ? "rotate-180" : ""}`} />
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Reassurance line & micro-commitments */}
            <div className="mt-10 pt-6 border-t border-[#14120F]/15">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#14120F]">
                {t.hero.reassuranceTitle}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-[#14120F]/70">
                <span className="flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-[#FF5B1F]" />
                  {t.hero.sandboxTag}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-[#FF5B1F]" />
                  {t.hero.dataTag}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dense Dashboard Mockup */}
          <div className="lg:col-span-6 w-full mt-4 lg:mt-0">
            <HeroDashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
