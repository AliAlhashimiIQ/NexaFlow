"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";

export function Features() {
  const { t, isRTL } = useLanguage();
  const [selectedLeadStage, setSelectedLeadStage] = useState<string>("All");

  const sampleLeadsEn = [
    {
      name: "Marcus Vance",
      company: "Apex Media Group",
      stage: "Qualified",
      stageRaw: "Qualified",
      value: "$14,500",
      task: "Discovery call scheduled",
      due: "Today, 3:00 PM",
      avatar: "MV",
    },
    {
      name: "Elena Rostova",
      company: "Nordic Ventures",
      stage: "Proposal",
      stageRaw: "Proposal",
      value: "$28,000",
      task: "Contract review requested",
      due: "Tomorrow, 11:00 AM",
      avatar: "ER",
    },
    {
      name: "Devon Miller",
      company: "CloudScale Software",
      stage: "New",
      stageRaw: "New",
      value: "$8,200",
      task: "Verify webhook data",
      due: "In 2 hours",
      avatar: "DM",
    },
  ];

  const sampleLeadsAr = [
    {
      name: "ماركوس فانس",
      company: "مجموعة أبيكس الإعلامية",
      stage: "مؤهل",
      stageRaw: "Qualified",
      value: "$14,500",
      task: "جلسة التعارف مجدولة",
      due: "اليوم، 3:00 مساءً",
      avatar: "MV",
    },
    {
      name: "إيلينا روستوفا",
      company: "نورديك للمشاريع",
      stage: "عرض أسعار",
      stageRaw: "Proposal",
      value: "$28,000",
      task: "مراجعة بنود العقد مطلوبة",
      due: "غداً، 11:00 صباحاً",
      avatar: "ER",
    },
    {
      name: "ديفون ميلر",
      company: "كلاود سكيل للبرمجيات",
      stage: "جديد",
      stageRaw: "New",
      value: "$8,200",
      task: "التحقق من بيانات الـ Webhook",
      due: "خلال ساعتين",
      avatar: "DM",
    },
  ];

  const currentSampleLeads = isRTL ? sampleLeadsAr : sampleLeadsEn;
  const stageOptions = isRTL
    ? [
        { label: "الكل", value: "All" },
        { label: "جديد", value: "New" },
        { label: "مؤهل", value: "Qualified" },
        { label: "عرض أسعار", value: "Proposal" },
      ]
    : [
        { label: "All", value: "All" },
        { label: "New", value: "New" },
        { label: "Qualified", value: "Qualified" },
        { label: "Proposal", value: "Proposal" },
      ];

  const filteredSampleLeads =
    selectedLeadStage === "All"
      ? currentSampleLeads
      : currentSampleLeads.filter((l) => l.stageRaw === selectedLeadStage);

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#F6F4EF] border-b border-[#14120F]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 border border-[#14120F]/20 bg-white px-2.5 py-1 text-xs font-mono text-[#14120F] uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
            <span>{t.features.eyebrow}</span>
            <span className="text-[#14120F]/30">•</span>
            <span>{t.features.eyebrowTag}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#14120F] leading-[0.96] rtl:leading-[1.14]">
            {t.features.title} <br />
            <span className="italic">{t.features.titleItalic}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#14120F]/70 leading-relaxed font-normal">
            {t.features.description}
          </p>
        </div>

        {/* Feature 1: Lead Management */}
        <div className="mb-20 lg:mb-28 border border-[#14120F]/15 bg-white p-6 sm:p-9 text-left rtl:text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs font-bold text-[#FF5B1F] uppercase tracking-wider">
                {t.features.pillars[0].number} / {t.features.pillars[0].tag}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#14120F] mt-2">
                {t.features.pillars[0].title}
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed">
                {t.features.pillars[0].description}
              </p>

              <div className="mt-6 space-y-2.5 font-mono text-xs text-[#14120F]/80">
                {t.features.pillars[0].bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#FF5B1F] font-bold">/</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Interactive Lead Board Preview */}
            <div className="lg:col-span-7 border border-[#14120F]/15 bg-[#F6F4EF] p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#14120F]/15 font-mono text-xs">
                <span className="font-bold text-[#14120F] uppercase">
                  {isRTL ? "لوحة مسار العملاء التفاعلية" : "LEAD PIPELINE BOARD"}
                </span>

                <div className="flex items-center gap-1 border border-[#14120F]/20 bg-white p-0.5">
                  {stageOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSelectedLeadStage(opt.value)}
                      className={`px-2 py-0.5 text-xs transition-colors ${
                        selectedLeadStage === opt.value
                          ? "bg-[#14120F] text-white font-bold"
                          : "text-[#14120F]/60 hover:text-[#14120F]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-3 space-y-2 font-mono text-xs">
                {filteredSampleLeads.map((lead, idx) => (
                  <div
                    key={idx}
                    className="border border-[#14120F]/15 bg-white p-3 hover:border-[#14120F]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-sans font-semibold text-xs text-[#14120F]">
                          {lead.name}
                        </div>
                        <div className="text-[11px] text-[#14120F]/60">
                          {lead.company}
                        </div>
                      </div>
                      <div className="text-right rtl:text-left">
                        <div className="font-bold text-[#14120F]">
                          {lead.value}
                        </div>
                        <div className="text-[10px] text-[#FF5B1F] font-bold uppercase">
                          {lead.stage}
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-[#14120F]/10 flex items-center justify-between text-[11px] text-[#14120F]/60">
                      <div>{isRTL ? "المهمة:" : "Task:"} {lead.task}</div>
                      <div>{isRTL ? "الموعد:" : "Due:"} {lead.due}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Workflow Automation */}
        <div className="mb-20 lg:mb-28 border border-[#14120F]/15 bg-white p-6 sm:p-9 text-left rtl:text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="font-mono text-xs font-bold text-[#FF5B1F] uppercase tracking-wider">
                {t.features.pillars[1].number} / {t.features.pillars[1].tag}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#14120F] mt-2">
                {t.features.pillars[1].title}
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed">
                {t.features.pillars[1].description}
              </p>

              <div className="mt-6 space-y-2.5 font-mono text-xs text-[#14120F]/80">
                {t.features.pillars[1].bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#FF5B1F] font-bold">/</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dense Node Builder */}
            <div className="lg:col-span-7 order-2 lg:order-1 border border-[#14120F] bg-[#14120F] text-[#F6F4EF] p-5 font-mono text-xs">
              <div className="flex justify-between pb-3 border-b border-[#F6F4EF]/20 mb-3 text-[11px]">
                <span className="font-bold text-white uppercase">
                  {isRTL ? "المسار: inbound_routing.yaml" : "FLOW: inbound_lead_routing.yaml"}
                </span>
                <span className="text-[#FF5B1F] font-bold">
                  {isRTL ? "نسبة النجاح: 99.8%" : "SUCCESS: 99.8%"}
                </span>
              </div>

              <div className="space-y-2">
                <div className="border border-[#F6F4EF]/20 p-3 bg-white/5">
                  <div className="text-[10px] text-[#FF5B1F] font-bold uppercase">
                    {isRTL ? "01 / المحفز (WEBHOOK)" : "01 / TRIGGER (WEBHOOK)"}
                  </div>
                  <div className="font-semibold text-white mt-0.5">
                    {isRTL ? "استلام نموذج طلب جديد من الموقع" : "New Form Submission Received"}
                  </div>
                  <div className="text-[10px] text-[#F6F4EF]/60">
                    {isRTL ? "البيانات: حجم الشركة > 20 والميزانية > 10,000$" : "payload: company_size > 20 & budget > $10,000"}
                  </div>
                </div>

                <div className="px-3 border-l rtl:border-l-0 rtl:border-r border-[#F6F4EF]/20 py-1 text-[10px] text-[#F6F4EF]/40">
                  ↓ {isRTL ? "تم التحقق من الشروط" : "rule evaluation verified"}
                </div>

                <div className="border border-[#F6F4EF]/20 p-3 bg-white/5">
                  <div className="text-[10px] text-[#FF5B1F] font-bold uppercase">
                    {isRTL ? "02 / التحقق الشرطي والتقييم" : "02 / LOGIC EVALUATION"}
                  </div>
                  <div className="font-semibold text-white mt-0.5">
                    {isRTL ? "تقييم العميل وتصنيف الشريحة المستهدفة" : "Score Lead & Identify Target Tier"}
                  </div>
                  <div className="text-[10px] text-[#F6F4EF]/60">
                    {isRTL ? "التقييم: 94/100 · الفئة: شركات كبرى" : "score: 94/100 · Tier: Enterprise"}
                  </div>
                </div>

                <div className="px-3 border-l rtl:border-l-0 rtl:border-r border-[#F6F4EF]/20 py-1 text-[10px] text-[#F6F4EF]/40">
                  ↓ {isRTL ? "تنفيذ فوري بالتوازي: 140ms" : "parallel execution: 140ms"}
                </div>

                <div className="border border-[#F6F4EF]/20 p-3 bg-white/5">
                  <div className="text-[10px] text-[#FF5B1F] font-bold uppercase">
                    {isRTL ? "03 / التوزيع المتوازي والإشعار" : "03 / PARALLEL DISPATCH"}
                  </div>
                  <div className="font-semibold text-white mt-0.5">
                    {isRTL
                      ? "تعيين لسارة خ. وإرسال دعوة الحجز للعميل"
                      : "Assign to Sarah Chen & Dispatch Intro Invite"}
                  </div>
                  <div className="text-[10px] text-[#F6F4EF]/60">
                    {isRTL
                      ? "رابط التقويم مرفق · إشعار واتساب وسلاك مُرسل"
                      : "calendar slot attached · notification dispatched"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Team Collaboration */}
        <div className="mb-20 lg:mb-28 border border-[#14120F]/15 bg-white p-6 sm:p-9 text-left rtl:text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs font-bold text-[#FF5B1F] uppercase tracking-wider">
                {t.features.pillars[2].number} / {t.features.pillars[2].tag}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#14120F] mt-2">
                {t.features.pillars[2].title}
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed">
                {t.features.pillars[2].description}
              </p>

              <div className="mt-6 space-y-2.5 font-mono text-xs text-[#14120F]/80">
                {t.features.pillars[2].bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#FF5B1F] font-bold">/</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Task Ownership Matrix */}
            <div className="lg:col-span-7 border border-[#14120F]/15 bg-[#F6F4EF] p-4 sm:p-5 font-mono text-xs">
              <div className="flex justify-between pb-3 border-b border-[#14120F]/15 mb-3 text-[11px]">
                <span className="font-bold text-[#14120F] uppercase">
                  {isRTL ? "مصفوفة المسؤوليات واتفاقيات SLA" : "ACTIVE SPRINT & OWNERSHIP MATRIX"}
                </span>
                <span className="text-[#FF5B1F] font-bold">
                  {isRTL ? "100% التزام بالمواعيد" : "100% ON-TIME SLA"}
                </span>
              </div>

              <div className="space-y-2">
                <div className="border border-[#14120F]/15 bg-white p-3 flex justify-between items-center">
                  <div>
                    <div className="font-sans font-semibold text-xs text-[#14120F]">
                      {isRTL ? "مراجعة استبيان الأمان التقني للشركات" : "Review enterprise security questionnaire"}
                    </div>
                    <div className="text-[10px] text-[#14120F]/60">
                      {isRTL ? "نورديك للمشاريع · سارة تشن" : "Nordic Ventures · Sarah Chen"}
                    </div>
                  </div>
                  <div className="text-right rtl:text-left text-[11px]">
                    <span className="font-bold text-[#14120F]">
                      {isRTL ? "قيد التنفيذ" : "In Progress"}
                    </span>
                    <span className="text-[10px] text-[#14120F]/60 block">
                      {isRTL ? "متبقٍ ساعتان" : "Due in 2h"}
                    </span>
                  </div>
                </div>

                <div className="border border-[#14120F]/15 bg-white p-3 flex justify-between items-center">
                  <div>
                    <div className="font-sans font-semibold text-xs text-[#14120F]">
                      {isRTL ? "تسليم عرض الأسعار المخصص الإصدار 2.1" : "Deliver tailored proposal v2.1"}
                    </div>
                    <div className="text-[10px] text-[#14120F]/60">
                      {isRTL ? "أبيكس للإعلام · أليكس ريفيرا" : "Apex Media · Alex Rivera"}
                    </div>
                  </div>
                  <div className="text-right rtl:text-left text-[11px]">
                    <span className="font-bold text-[#14120F]">
                      {isRTL ? "قيد المراجعة" : "Reviewing"}
                    </span>
                    <span className="text-[10px] text-[#14120F]/60 block">
                      {isRTL ? "الموعد 5:00 م" : "Due 5:00 PM"}
                    </span>
                  </div>
                </div>

                <div className="border border-[#14120F]/15 bg-white p-3 flex justify-between items-center">
                  <div>
                    <div className="font-sans font-semibold text-xs text-[#14120F]">
                      {isRTL ? "تشغيل مسار تأهيل العميل الجديد آلياً" : "Trigger automated onboarding webhook"}
                    </div>
                    <div className="text-[10px] text-[#14120F]/60">
                      {isRTL ? "سينثيتكس لابز · جوردان ريد" : "Synthetix Labs · Jordan Reed"}
                    </div>
                  </div>
                  <div className="text-right rtl:text-left text-[11px]">
                    <span className="font-bold text-[#FF5B1F]">
                      {isRTL ? "مكتمل بنجاح" : "COMPLETED"}
                    </span>
                    <span className="text-[10px] text-[#14120F]/60 block">
                      {isRTL ? "تم الإرسال" : "Executed"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: Performance Analytics */}
        <div className="border border-[#14120F]/15 bg-white p-6 sm:p-9 text-left rtl:text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="font-mono text-xs font-bold text-[#FF5B1F] uppercase tracking-wider">
                {t.features.pillars[3].number} / {t.features.pillars[3].tag}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#14120F] mt-2">
                {t.features.pillars[3].title}
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed">
                {t.features.pillars[3].description}
              </p>

              <div className="mt-6 space-y-2.5 font-mono text-xs text-[#14120F]/80">
                {t.features.pillars[3].bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#FF5B1F] font-bold">/</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dense Analytics Preview */}
            <div className="lg:col-span-7 order-2 lg:order-1 border border-[#14120F]/15 bg-[#F6F4EF] p-4 sm:p-5 font-mono text-xs">
              <div className="flex justify-between pb-3 border-b border-[#14120F]/15 mb-3 text-[11px]">
                <span className="font-bold text-[#14120F] uppercase">
                  {isRTL ? "سرعة وكفاءة العمليات" : "OPERATIONAL VELOCITY"}
                </span>
                <span className="text-[#14120F]/60">
                  {isRTL ? "عرض فصلي" : "QUARTERLY VIEW"}
                </span>
              </div>

              <div className="grid grid-cols-3 border border-[#14120F]/15 bg-white divide-x rtl:divide-x-reverse divide-[#14120F]/15 mb-3">
                <div className="p-3">
                  <div className="text-[10px] text-[#14120F]/60 uppercase">
                    {isRTL ? "السرعة" : "VELOCITY"}
                  </div>
                  <div className="text-lg font-bold text-[#14120F] mt-0.5">+28.4%</div>
                </div>
                <div className="p-3">
                  <div className="text-[10px] text-[#14120F]/60 uppercase">
                    {isRTL ? "دورة الصفقة" : "CYCLE TIME"}
                  </div>
                  <div className="text-lg font-bold text-[#14120F] mt-0.5">4.2d</div>
                </div>
                <div className="p-3">
                  <div className="text-[10px] text-[#14120F]/60 uppercase">
                    {isRTL ? "نسبة التنفيذ" : "EXECUTION"}
                  </div>
                  <div className="text-lg font-bold text-[#FF5B1F] mt-0.5">99.6%</div>
                </div>
              </div>

              {/* Technical Chart */}
              <div className="border border-[#14120F]/15 bg-white p-3">
                <div className="flex justify-between text-[10px] mb-2 font-bold text-[#14120F]">
                  <span>{isRTL ? "إجمالي العمليات المنفذة أسبوعياً" : "WEEKLY FLOW EXECUTIONS"}</span>
                  <span>{isRTL ? "الحجم: 1,840" : "VOLUME: 1,840"}</span>
                </div>
                <div className="h-16 w-full">
                  <svg className="w-full h-full" viewBox="0 0 500 80" fill="none" preserveAspectRatio="none">
                    <line x1="0" y1="20" x2="500" y2="20" stroke="#EFECE4" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="50" x2="500" y2="50" stroke="#EFECE4" strokeWidth="1" strokeDasharray="4 4" />
                    <path
                      d="M0,65 L100,50 L200,42 L300,30 L400,22 L500,8"
                      stroke="#FF5B1F"
                      strokeWidth="2"
                    />
                    <rect x="97" y="47" width="6" height="6" fill="#14120F" />
                    <rect x="197" y="39" width="6" height="6" fill="#14120F" />
                    <rect x="297" y="27" width="6" height="6" fill="#14120F" />
                    <rect x="397" y="19" width="6" height="6" fill="#14120F" />
                    <rect x="495" y="5" width="6" height="6" fill="#FF5B1F" />
                  </svg>
                </div>
                <div className="flex justify-between text-[9px] text-[#14120F]/60 mt-1 border-t border-[#14120F]/10 pt-1">
                  <span>{isRTL ? "الأسبوع 1 (420)" : "W1 (420)"}</span>
                  <span>{isRTL ? "الأسبوع 2 (780)" : "W2 (780)"}</span>
                  <span>{isRTL ? "الأسبوع 3 (1,240)" : "W3 (1,240)"}</span>
                  <span className="text-[#FF5B1F] font-bold">
                    {isRTL ? "الأسبوع 4 (1,840 عملية)" : "W4 (1,840)"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
