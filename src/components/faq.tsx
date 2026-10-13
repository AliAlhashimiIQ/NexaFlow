"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F6F4EF] border-b border-[#14120F]/15">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-left rtl:text-right">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 border border-[#14120F]/20 bg-white px-2.5 py-1 text-xs font-mono text-[#14120F] uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
            <span>{t.faq.eyebrow}</span>
            <span className="text-[#14120F]/30">•</span>
            <span>{t.faq.eyebrowTag}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#14120F] leading-[0.96] rtl:leading-[1.14]">
            {t.faq.title} <br />
            <span className="italic">{t.faq.titleItalic}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#14120F]/70 leading-relaxed font-normal">
            {t.faq.description}
          </p>
        </div>

        {/* Hairline Accordion List */}
        <div className="border-t border-[#14120F]/15 divide-y divide-[#14120F]/15">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={index} className="py-5">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-start justify-between text-left rtl:text-right transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F6F4EF] rounded-xs"
                >
                  <div className="flex items-start gap-4 pr-4 rtl:pr-0 rtl:pl-4">
                    <span className="font-mono text-xs font-bold text-[#FF5B1F] mt-1 shrink-0">
                      0{index + 1}
                    </span>
                    <span className="font-display text-xl sm:text-2xl font-normal text-[#14120F]">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`text-[#14120F]/40 transition-transform duration-150 shrink-0 mt-1.5 ${
                      isOpen ? "rotate-180 text-[#14120F]" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pt-4 pl-8 rtl:pl-0 rtl:pr-8 text-xs sm:text-sm text-[#14120F]/75 leading-relaxed font-normal"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
