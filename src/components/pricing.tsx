"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const { t, isRTL } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 bg-[#F6F4EF] border-b border-[#14120F]/15"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left rtl:text-right">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-[#14120F]/20 bg-white px-2.5 py-1 text-xs font-mono text-[#14120F] uppercase tracking-wider mb-4">
              <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
              <span>{t.pricing.eyebrow}</span>
              <span className="text-[#14120F]/30">•</span>
              <span>{t.pricing.eyebrowTag}</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#14120F] leading-[0.96] rtl:leading-[1.14]">
              {t.pricing.title} <br />
              <span className="italic">{t.pricing.titleItalic}</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#14120F]/70 leading-relaxed font-normal">
              {t.pricing.description}
            </p>
          </div>

          {/* Minimalist Segmented Toggle */}
          <div className="inline-flex items-center border border-[#14120F]/20 bg-white p-1 font-mono text-xs">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-3 py-1.5 uppercase transition-colors ${
                billingCycle === "monthly"
                  ? "bg-[#14120F] text-white font-bold"
                  : "text-[#14120F]/60 hover:text-[#14120F]"
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`flex items-center gap-1.5 px-3 py-1.5 uppercase transition-colors ${
                billingCycle === "yearly"
                  ? "bg-[#14120F] text-white font-bold"
                  : "text-[#14120F]/60 hover:text-[#14120F]"
              }`}
            >
              <span>{t.pricing.annual}</span>
              <span className="text-[#FF5B1F] font-bold">{t.pricing.annualDiscount}</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-[#14120F]/15 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-[#14120F]/15 bg-white text-left rtl:text-right">
          {t.pricing.plans.map((plan) => {
            const price =
              billingCycle === "yearly" ? plan.priceYearly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`p-7 sm:p-8 flex flex-col justify-between ${
                  plan.highlight ? "bg-[#FBFBFA]" : "bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#14120F]/10">
                    <h3 className="font-display text-2xl font-normal text-[#14120F]">
                      {plan.name}
                    </h3>
                    <span className="font-mono text-[10px] uppercase text-[#14120F]/60">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1 font-mono">
                    <span className="text-4xl sm:text-5xl font-bold text-[#14120F]">
                      ${price}
                    </span>
                    <span className="text-xs text-[#14120F]/60">
                      {billingCycle === "yearly"
                        ? t.pricing.annualPerUserMonth
                        : t.pricing.perUserMonth}
                    </span>
                  </div>
                  {billingCycle === "yearly" && price > 0 && (
                    <div className="font-mono text-[11px] text-[#14120F]/50 mt-1">
                      ${price * 12} {t.pricing.annualBilled}
                    </div>
                  )}

                  {/* Features */}
                  <ul className="mt-8 space-y-2.5 border-t border-[#14120F]/10 pt-6">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 font-mono text-xs text-[#14120F]/80"
                      >
                        <span className="text-[#FF5B1F] font-bold">/</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#14120F]/10">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.name)}
                    className={`flex w-full items-center justify-center gap-2 py-3 px-4 font-mono text-xs uppercase tracking-wider font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F] ${
                      plan.highlight
                        ? "bg-[#FF5B1F] text-white hover:bg-[#e24e16]"
                        : "border border-[#14120F]/20 bg-white text-[#14120F] hover:bg-[#EFECE4]"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className={`h-3.5 w-3.5 ${isRTL ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Disclosure */}
        <div className="mt-8 border border-[#14120F]/15 bg-white p-4 font-mono text-xs text-[#14120F]/70 text-left rtl:text-right">
          <strong className="text-[#14120F] uppercase">
            {t.pricing.portfolioNoticeBold}
          </strong>{" "}
          {t.pricing.portfolioNotice}
        </div>
      </div>
    </section>
  );
}
