"use client";

import { useLanguage } from "@/context/language-context";

export function TrustAudience() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-[#F6F4EF] border-b border-[#14120F]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 border border-[#14120F]/20 bg-white px-2.5 py-1 text-xs font-mono text-[#14120F] uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
            <span>{t.audience.eyebrow}</span>
            <span className="text-[#14120F]/30">•</span>
            <span>{t.audience.eyebrowTag}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#14120F] leading-[0.96] rtl:leading-[1.14]">
            {t.audience.title} <br />
            <span className="italic">{t.audience.titleItalic}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#14120F]/70 leading-relaxed font-normal">
            {t.audience.description}
          </p>
        </div>

        {/* Asymmetrical 4-Column Editorial Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#14120F]/15 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-[#14120F]/15 bg-white text-left rtl:text-right">
          {t.audience.categories.map((item, index) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 flex flex-col justify-between hover:bg-[#FBFBFA] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#14120F]/10 mb-5">
                  <span className="font-mono text-xs font-bold text-[#FF5B1F]">
                    0{index + 1}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#14120F]/60">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-normal text-[#14120F]">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed min-h-[56px]">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-[#14120F]/10 pt-5">
                  {item.capabilities.map((cap, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 font-mono text-[11px] text-[#14120F]/80"
                    >
                      <span className="text-[#FF5B1F] mt-0.5 font-bold">/</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Metric Pill */}
              <div className="mt-8 pt-4 border-t border-[#14120F]/15">
                <div className="font-mono text-2xl font-bold text-[#14120F]">
                  {item.metric}
                </div>
                <div className="font-mono text-[10px] uppercase text-[#14120F]/60 mt-0.5">
                  {item.metricLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Foundations Bar */}
        <div className="mt-12 border border-[#14120F]/15 bg-white p-6 sm:p-7 text-left rtl:text-right">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-[#14120F]/15">
            <div className="md:px-4 pt-3 md:pt-0">
              <span className="font-mono text-xs font-bold text-[#14120F] uppercase">
                {isRTL ? "/ 01 عزل البيانات بأمان" : "/ 01 DATA ISOLATION"}
              </span>
              <p className="mt-2 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed">
                {isRTL
                  ? "تبقى مساحات العمل وسجلات العملاء معزولة ومحمية بصلاحيات وصول دقيقة لكل عضو."
                  : "Workspaces and lead records remain isolated across client accounts with role-based access scoping."}
              </p>
            </div>
            <div className="md:px-4 pt-4 md:pt-0">
              <span className="font-mono text-xs font-bold text-[#14120F] uppercase">
                {isRTL ? "/ 02 استجابة فورية فائقة السرعة" : "/ 02 SUB-SECOND TRIGGERS"}
              </span>
              <p className="mt-2 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed">
                {isRTL
                  ? "تتحول طلبات الـ Webhooks وإشعارات النماذج إلى إجراءات متتالية خلال أقل من 200 ميلي ثانية."
                  : "Incoming webhooks and status transitions trigger sequential actions in under 200 milliseconds."}
              </p>
            </div>
            <div className="md:px-4 pt-4 md:pt-0">
              <span className="font-mono text-xs font-bold text-[#14120F] uppercase">
                {isRTL ? "/ 03 بدون أي خبرة برمجية" : "/ 03 ZERO CODE OVERHEAD"}
              </span>
              <p className="mt-2 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed">
                {isRTL
                  ? "أنشئ وكيّف قواعد التوزيع المتعددة بسهولة تامة دون الحاجة لفريق برمجي أو تكاليف صيانة."
                  : "Build and adapt multi-step routing rules without requiring software engineers or maintenance overhead."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
