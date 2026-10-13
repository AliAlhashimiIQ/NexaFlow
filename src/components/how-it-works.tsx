"use client";

import { useLanguage } from "@/context/language-context";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#F6F4EF] border-b border-[#14120F]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 border border-[#14120F]/20 bg-white px-2.5 py-1 text-xs font-mono text-[#14120F] uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
            <span>{t.howItWorks.eyebrow}</span>
            <span className="text-[#14120F]/30">•</span>
            <span>{t.howItWorks.eyebrowTag}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#14120F] leading-[0.96] rtl:leading-[1.14]">
            {t.howItWorks.title} <br />
            <span className="italic">{t.howItWorks.titleItalic}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#14120F]/70 leading-relaxed font-normal">
            {t.howItWorks.description}
          </p>
        </div>

        {/* 3 Step Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#14120F]/15 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-[#14120F]/15 bg-white text-left rtl:text-right">
          {t.howItWorks.steps.map((step) => (
            <div key={step.step} className="p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="font-mono text-3xl font-bold text-[#FF5B1F] mb-6">
                  {step.step}
                </div>
                <h3 className="font-display text-2xl font-normal text-[#14120F]">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#14120F]/10 font-mono text-[11px] text-[#14120F]/60">
                {step.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
