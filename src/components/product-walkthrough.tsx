"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  GitBranch,
  BarChart3,
  Search,
  CheckCircle2,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import { DEMO_LEADS, DEMO_AUTOMATIONS, AutomationItem, LeadItem } from "@/data/mock-data";
import { useLanguage } from "@/context/language-context";

type TabKey = "overview" | "leads" | "automations" | "analytics";

const AR_DEMO_LEADS: LeadItem[] = [
  {
    id: "lead-1",
    name: "ماركوس فانس",
    company: "مجموعة أبيكس الإعلامية",
    email: "marcus@apexmedia.io",
    stage: "Qualified",
    value: "$14,500",
    owner: "سارة خليل",
    ownerAvatar: "SC",
    date: "منذ 12 دقيقة",
    score: 92,
  },
  {
    id: "lead-2",
    name: "إيلينا روستوفا",
    company: "نورديك للمشاريع",
    email: "elena@nordicventures.co",
    stage: "Proposal",
    value: "$28,000",
    owner: "أليكس ريفيرا",
    ownerAvatar: "AR",
    date: "منذ ساعة",
    score: 88,
  },
  {
    id: "lead-3",
    name: "ديفون ميلر",
    company: "كلاود سكيل للبرمجيات",
    email: "devon@cloudscale.net",
    stage: "New",
    value: "$8,200",
    owner: "سارة خليل",
    ownerAvatar: "SC",
    date: "منذ ساعتين",
    score: 76,
  },
  {
    id: "lead-4",
    name: "بريا باتيل",
    company: "سينثيتكس لابز",
    email: "priya@synthetix.ai",
    stage: "Won",
    value: "$34,000",
    owner: "جوردان ريد",
    ownerAvatar: "JR",
    date: "أمس",
    score: 98,
  },
  {
    id: "lead-5",
    name: "توماس ليندكفيست",
    company: "كرونا للخدمات اللوجستية",
    email: "tomas@krona-logistics.se",
    stage: "Contacted",
    value: "$12,400",
    owner: "أليكس ريفيرا",
    ownerAvatar: "AR",
    date: "منذ يومين",
    score: 81,
  },
];

const AR_DEMO_AUTOMATIONS: AutomationItem[] = [
  {
    id: "auto-1",
    title: "توجيه فوري للعملاء الواردين الجدد",
    description:
      "عند استلام استفسار جديد، يتم قراءة حجم الشركة وميزانيتها، وتعيين الممثل المناسب، وإرسال تنبيه فوري في قناة المبيعات.",
    trigger: "استلام نموذج Webhook جديد",
    action: "تقييم العميل > تعيين الأخصائي > إرسال إشعار",
    runsCount: 1248,
    successRate: "99.8%",
    enabled: true,
    category: "Leads",
  },
  {
    id: "auto-2",
    title: "تصعيد تلقائي للحالات العاجلة (SLA)",
    description:
      "إذا ظل العميل المؤهل دون تواصل لأكثر من 30 دقيقة، يتم إرسال تنبيه عاجل لمدير الفريق ورفع أولوية الصفقة.",
    trigger: "المرحلة = مؤهل & خامل لأكثر من 30 دقيقة",
    action: "تنبيه المشرف > تصعيد الأولوية",
    runsCount: 342,
    successRate: "100%",
    enabled: true,
    category: "Routing",
  },
  {
    id: "auto-3",
    title: "سلسلة متابعة آلية لعروض الأسعار",
    description:
      "إرسال رسالة بريد متابعة مخصصة بعد 48 ساعة من فتح رابط العرض في حال عدم تلقي رد بالتعميد.",
    trigger: "فتح رابط العرض + انتظار 48 ساعة",
    action: "التحقق من الحالة > إرسال خطوة المتابعة 2",
    runsCount: 512,
    successRate: "98.9%",
    enabled: true,
    category: "Notifications",
  },
  {
    id: "auto-4",
    title: "بدء إجراءات التأهيل بعد إغلاق الصفقة",
    description:
      "عند انتقال الصفقة إلى رابحة، يتم إنشاء مجلد مساحة عمل العميل، وتوليد قائمة المهام، ودعوة مسؤول الحساب.",
    trigger: "تحديث المرحلة إلى 'مكتملة'",
    action: "تجهيز مساحة العمل > تعيين مهام الإطلاق",
    runsCount: 189,
    successRate: "100%",
    enabled: false,
    category: "Sync",
  },
];

export function ProductWalkthrough() {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [leadSearch, setLeadSearch] = useState("");
  const [leadStageFilter, setLeadStageFilter] = useState<string>("All");
  const [automations, setAutomations] = useState<AutomationItem[]>(
    isRTL ? AR_DEMO_AUTOMATIONS : DEMO_AUTOMATIONS
  );
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  const leadsSource = isRTL ? AR_DEMO_LEADS : DEMO_LEADS;

  const handleToggleAutomation = (id: string) => {
    setAutomations((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextState = !item.enabled;
          const statusText = isRTL
            ? `تم ${nextState ? "تفعيل" : "إيقاف"} مسار "${item.title}" (محاكاة)`
            : `Flow "${item.title}" ${nextState ? "activated" : "paused"} (simulated)`;
          setNotificationMsg(statusText);
          setTimeout(() => setNotificationMsg(null), 3000);
          return { ...item, enabled: nextState };
        }
        return item;
      })
    );
  };

  const filteredLeads = leadsSource.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
      lead.company.toLowerCase().includes(leadSearch.toLowerCase()) ||
      lead.email.toLowerCase().includes(leadSearch.toLowerCase());
    const matchesStage =
      leadStageFilter === "All" || lead.stage === leadStageFilter;
    return matchesSearch && matchesStage;
  });

  const stageDisplayMap: Record<string, string> = {
    Qualified: isRTL ? "مؤهل" : "Qualified",
    Proposal: isRTL ? "عرض أسعار" : "Proposal",
    New: isRTL ? "جديد" : "New",
    Won: isRTL ? "مكتمل" : "Won",
    Contacted: isRTL ? "تم التواصل" : "Contacted",
  };

  const stageButtons = isRTL
    ? [
        { label: "الكل", value: "All" },
        { label: "جديد", value: "New" },
        { label: "مؤهل", value: "Qualified" },
        { label: "تم التواصل", value: "Contacted" },
        { label: "عرض أسعار", value: "Proposal" },
        { label: "مكتمل", value: "Won" },
      ]
    : [
        { label: "All", value: "All" },
        { label: "New", value: "New" },
        { label: "Qualified", value: "Qualified" },
        { label: "Contacted", value: "Contacted" },
        { label: "Proposal", value: "Proposal" },
        { label: "Won", value: "Won" },
      ];

  const tabsConfig = [
    {
      key: "overview" as TabKey,
      label: isRTL ? "01 نظرة عامة" : "01 Overview",
      icon: <LayoutDashboard className="h-3.5 w-3.5" />,
    },
    {
      key: "leads" as TabKey,
      label: isRTL ? "02 مسار العملاء" : "02 Leads Pipeline",
      icon: <Users className="h-3.5 w-3.5" />,
    },
    {
      key: "automations" as TabKey,
      label: isRTL ? "03 مسارات الأتمتة" : "03 Workflow Recipes",
      icon: <GitBranch className="h-3.5 w-3.5" />,
    },
    {
      key: "analytics" as TabKey,
      label: isRTL ? "04 قياسات الأداء" : "04 Funnel Telemetry",
      icon: <BarChart3 className="h-3.5 w-3.5" />,
    },
  ];

  return (
    <section
      id="walkthrough"
      className="py-20 sm:py-28 bg-[#F6F4EF] border-b border-[#14120F]/15"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 border border-[#14120F]/20 bg-white px-2.5 py-1 text-xs font-mono text-[#14120F] uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
            <span>{t.walkthrough.eyebrow}</span>
            <span className="text-[#14120F]/30">•</span>
            <span>{t.walkthrough.eyebrowTag}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#14120F] leading-[0.96] rtl:leading-[1.14]">
            {t.walkthrough.title} <br />
            <span className="italic">{t.walkthrough.titleItalic}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#14120F]/70 leading-relaxed font-normal">
            {t.walkthrough.description}
          </p>
        </div>

        {/* Floating Notification Toast */}
        {notificationMsg && (
          <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-50 bg-[#14120F] px-4 py-2.5 text-xs font-mono text-[#F6F4EF] border border-[#14120F] flex items-center gap-2 shadow-xl">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5B1F]" />
            <span>{notificationMsg}</span>
          </div>
        )}

        {/* Studio Mockup Container */}
        <div className="border border-[#14120F]/20 bg-white">
          {/* Segmented Tab Header Bar */}
          <div className="border-b border-[#14120F]/15 bg-[#EFECE4] px-4 py-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-1 overflow-x-auto">
                {tabsConfig.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors whitespace-nowrap ${
                      activeTab === tab.key
                        ? "bg-[#14120F] text-white font-bold"
                        : "text-[#14120F]/70 hover:text-[#14120F] hover:bg-white/60"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-[#14120F]/60">
                <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
                <span>{isRTL ? "بيئة محاكاة تفاعلية" : "Simulated Client State"}</span>
              </div>
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="p-4 sm:p-6 lg:p-7 min-h-[460px] text-left rtl:text-right">
            {/* TAB 1: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#14120F]/15 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-[#14120F]/15 bg-[#F6F4EF]">
                  <div className="p-4 font-mono">
                    <span className="text-[10px] text-[#14120F]/60 uppercase">
                      {isRTL ? "العملاء الواردون" : "INBOUND LEADS"}
                    </span>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-2xl font-bold text-[#14120F]">142</span>
                      <span className="text-xs font-bold text-[#FF5B1F]">+18.4%</span>
                    </div>
                  </div>

                  <div className="p-4 font-mono">
                    <span className="text-[10px] text-[#14120F]/60 uppercase">
                      {isRTL ? "العمليات المؤتمتة" : "AUTOMATED FLOWS"}
                    </span>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-2xl font-bold text-[#14120F]">842</span>
                      <span className="text-xs text-[#14120F]/60">99.8% OK</span>
                    </div>
                  </div>

                  <div className="p-4 font-mono">
                    <span className="text-[10px] text-[#14120F]/60 uppercase">
                      {isRTL ? "قيمة الصفقات" : "WEIGHTED PIPELINE"}
                    </span>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-2xl font-bold text-[#14120F]">$107.1k</span>
                      <span className="text-xs font-bold text-[#FF5B1F]">+32.1%</span>
                    </div>
                  </div>

                  <div className="p-4 font-mono">
                    <span className="text-[10px] text-[#14120F]/60 uppercase">
                      {isRTL ? "متوسط سرعة الرد" : "AVG RESPONSE TIME"}
                    </span>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-2xl font-bold text-[#14120F]">
                        {isRTL ? "18 دقيقة" : "18m"}
                      </span>
                      <span className="text-xs text-[#14120F]/60">
                        {isRTL ? "أسرع بـ 42%" : "-42% faster"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 border border-[#14120F]/15 p-4 bg-white">
                    <div className="flex justify-between pb-3 border-b border-[#14120F]/10 mb-3 font-mono text-xs">
                      <span className="font-bold text-[#14120F] uppercase">
                        {isRTL ? "سجل النشاط التشغيلي المباشر" : "RECENT OPERATIONAL AUDIT"}
                      </span>
                      <span className="text-[#14120F]/60">
                        {isRTL ? "مزامنة لحظية" : "REAL-TIME SYNC"}
                      </span>
                    </div>

                    <div className="space-y-2 font-mono text-xs">
                      {leadsSource.slice(0, 4).map((lead) => (
                        <div
                          key={lead.id}
                          className="flex justify-between items-center p-2.5 border border-[#14120F]/10 bg-[#F6F4EF]"
                        >
                          <div>
                            <div className="font-sans font-semibold text-xs text-[#14120F]">
                              {lead.name} · {lead.company}
                            </div>
                            <div className="text-[11px] text-[#14120F]/60">
                              {isRTL ? "المرحلة:" : "Stage:"} {stageDisplayMap[lead.stage] || lead.stage} · {lead.value}
                            </div>
                          </div>
                          <span className="text-[10px] text-[#14120F]/40">
                            {lead.date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 border border-[#14120F]/15 p-4 bg-[#F6F4EF] flex flex-col justify-between font-mono text-xs">
                    <div>
                      <div className="font-bold uppercase text-[#14120F] mb-1">
                        {isRTL ? "حالة مشغلات النظام" : "LISTENER HEALTH"}
                      </div>
                      <p className="text-[11px] text-[#14120F]/60 mb-3 font-sans">
                        {isRTL
                          ? "كافة مشغلات الخلفية تعمل ضمن حدود اتفاقيات SLA."
                          : "All background workers operating within SLA bounds."}
                      </p>

                      <div className="space-y-2">
                        <div className="border border-[#14120F]/15 bg-white p-2.5">
                          <div className="flex justify-between font-bold">
                            <span>{isRTL ? "استقبال الـ Webhook" : "Webhook Ingestion"}</span>
                            <span className="text-[#FF5B1F]">
                              {isRTL ? "نشط" : "Active"}
                            </span>
                          </div>
                          <div className="text-[10px] text-[#14120F]/60">
                            {isRTL ? "جاهزية 99.98% · استجابة 48ms" : "99.98% uptime · 48ms response"}
                          </div>
                        </div>

                        <div className="border border-[#14120F]/15 bg-white p-2.5">
                          <div className="flex justify-between font-bold">
                            <span>{isRTL ? "إرسال التنبيهات" : "Notification Dispatch"}</span>
                            <span className="text-[#FF5B1F]">
                              {isRTL ? "نشط" : "Active"}
                            </span>
                          </div>
                          <div className="text-[10px] text-[#14120F]/60">
                            {isRTL ? "0 تأخيرات في قائمة الانتظار" : "0 queued delays"}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#14120F]/10 flex justify-between items-center text-[11px]">
                      <span>{isRTL ? "الإصدار: 2.4.0" : "SYSTEM VERSION: 2.4.0"}</span>
                      <button
                        type="button"
                        onClick={() => setActiveTab("leads")}
                        className="text-[#FF5B1F] font-bold hover:underline"
                      >
                        {isRTL ? "فحص سجل العملاء ←" : "Inspect Leads →"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: LEADS */}
            {activeTab === "leads" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-3 border-b border-[#14120F]/15">
                  <div className="relative flex-1 max-w-sm">
                    <Search className={`absolute top-2.5 h-3.5 w-3.5 text-[#14120F]/40 ${isRTL ? "right-3" : "left-3"}`} />
                    <input
                      type="text"
                      placeholder={isRTL ? "ابحث عن اسم العميل أو الشركة..." : "Search lead, company, or email..."}
                      value={leadSearch}
                      onChange={(e) => setLeadSearch(e.target.value)}
                      className={`w-full border border-[#14120F]/20 py-1.5 font-mono text-xs text-[#14120F] placeholder:text-[#14120F]/40 focus:border-[#14120F] focus:outline-none ${
                        isRTL ? "pr-8 pl-3" : "pl-8 pr-3"
                      }`}
                    />
                  </div>

                  <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 font-mono text-xs">
                    <span className="text-[#14120F]/60 mr-1 rtl:mr-0 rtl:ml-1 text-[11px]">
                      {isRTL ? "المرحلة:" : "STAGE:"}
                    </span>
                    {stageButtons.map((stage) => (
                      <button
                        key={stage.value}
                        type="button"
                        onClick={() => setLeadStageFilter(stage.value)}
                        className={`px-2.5 py-1 text-xs transition-colors whitespace-nowrap ${
                          leadStageFilter === stage.value
                            ? "bg-[#14120F] text-white font-bold"
                            : "border border-[#14120F]/15 bg-white text-[#14120F]/70 hover:text-[#14120F]"
                        }`}
                      >
                        {stage.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="overflow-x-auto custom-scrollbar border border-[#14120F]/15">
                  <table className="w-full text-left rtl:text-right text-xs font-mono">
                    <thead>
                      <tr className="border-b border-[#14120F]/15 bg-[#EFECE4] text-[#14120F] text-[11px] uppercase">
                        <th className="py-2.5 px-3 font-bold">{isRTL ? "جهة الاتصال" : "Contact"}</th>
                        <th className="py-2.5 px-3 font-bold">{isRTL ? "الشركة" : "Company"}</th>
                        <th className="py-2.5 px-3 font-bold">{isRTL ? "المرحلة" : "Stage"}</th>
                        <th className="py-2.5 px-3 font-bold">{isRTL ? "القيمة" : "Deal Value"}</th>
                        <th className="py-2.5 px-3 font-bold">{isRTL ? "التقييم" : "Score"}</th>
                        <th className="py-2.5 px-3 font-bold">{isRTL ? "المسؤول" : "Owner"}</th>
                        <th className="py-2.5 px-3 font-bold text-right rtl:text-left">{isRTL ? "التاريخ" : "Timestamp"}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#14120F]/10">
                      {filteredLeads.length > 0 ? (
                        filteredLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-[#F6F4EF] transition-colors">
                            <td className="py-2.5 px-3 font-sans font-semibold text-[#14120F]">
                              {lead.name}
                              <div className="font-mono text-[10px] text-[#14120F]/50 font-normal">
                                {lead.email}
                              </div>
                            </td>
                            <td className="py-2.5 px-3 text-[#14120F]/80">
                              {lead.company}
                            </td>
                            <td className="py-2.5 px-3">
                              <span className="border border-[#14120F]/20 px-1.5 py-0.5 text-[10px] uppercase">
                                {stageDisplayMap[lead.stage] || lead.stage}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 font-bold text-[#14120F]">
                              {lead.value}
                            </td>
                            <td className="py-2.5 px-3">
                              {lead.score} / 100
                            </td>
                            <td className="py-2.5 px-3 text-[#14120F]/80">
                              {lead.owner}
                            </td>
                            <td className="py-2.5 px-3 text-right rtl:text-left text-[#14120F]/50 text-[11px]">
                              {lead.date}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-[#14120F]/50 text-xs">
                            {isRTL
                              ? `لم يتم العثور على سجلات تطابق "${leadSearch}".`
                              : `No records found for "${leadSearch}".`}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 3: AUTOMATIONS */}
            {activeTab === "automations" && (
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b border-[#14120F]/15 font-mono text-xs">
                  <div>
                    <h4 className="font-bold text-[#14120F] uppercase">
                      {isRTL ? "مسارات الأتمتة المجهزة" : "CONFIGURED WORKFLOW RECIPES"}
                    </h4>
                    <p className="text-[11px] text-[#14120F]/60 font-sans">
                      {isRTL
                        ? "بدّل حالة أي مسار لاختبار محاكاة التشغيل في الخلفية."
                        : "Toggle any recipe to simulate background runtime state changes."}
                    </p>
                  </div>
                  <span className="border border-[#14120F]/20 bg-[#F6F4EF] px-2 py-0.5 font-bold">
                    {automations.filter((a) => a.enabled).length}{" "}
                    {isRTL ? "مسارات نشطة" : "ACTIVE RECIPES"}
                  </span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  {automations.map((item) => (
                    <div
                      key={item.id}
                      className={`border p-3.5 transition-all ${
                        item.enabled
                          ? "border-[#14120F] bg-white"
                          : "border-[#14120F]/15 bg-[#F6F4EF] opacity-75"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <button
                            type="button"
                            onClick={() => handleToggleAutomation(item.id)}
                            className="mt-0.5"
                            title={item.enabled ? "Pause flow" : "Activate flow"}
                          >
                            {item.enabled ? (
                              <ToggleRight className="h-6 w-6 text-[#FF5B1F]" />
                            ) : (
                              <ToggleLeft className="h-6 w-6 text-[#14120F]/40" />
                            )}
                          </button>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold font-sans text-sm text-[#14120F]">
                                {item.title}
                              </span>
                              <span className="border border-[#14120F]/15 px-1 py-0.2 text-[10px] uppercase">
                                {item.category}
                              </span>
                            </div>
                            <p className="mt-1 text-xs font-sans text-[#14120F]/70 leading-normal max-w-2xl">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="text-right rtl:text-left text-[11px]">
                          <span className="font-bold text-[#14120F]">
                            {item.runsCount.toLocaleString()}{" "}
                            {isRTL ? "تشغيل" : "RUNS"}
                          </span>
                          <span className="block text-[#FF5B1F] font-bold">
                            {item.successRate} {isRTL ? "نجاح" : "OK"}
                          </span>
                        </div>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-[#14120F]/10 flex flex-wrap gap-2 text-[10px] text-[#14120F]/70">
                        <span>{isRTL ? "المحفز:" : "TRIGGER:"} {item.trigger}</span>
                        <span>{isRTL ? "←" : "→"}</span>
                        <span>{isRTL ? "الإجراء:" : "ACTION:"} {item.action}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: ANALYTICS */}
            {activeTab === "analytics" && (
              <div className="space-y-6 font-mono text-xs">
                <div className="flex justify-between pb-3 border-b border-[#14120F]/15">
                  <h4 className="font-bold uppercase text-[#14120F]">
                    {isRTL ? "كفاءة مسار الصفقات ومعدل التحويل" : "FUNNEL EFFICIENCY & STAGE TRANSITION"}
                  </h4>
                  <span className="font-bold text-[#FF5B1F]">
                    {isRTL ? "الجاهزية: 98.4%" : "HEALTH: 98.4%"}
                  </span>
                </div>

                <div className="border border-[#14120F]/15 bg-[#F6F4EF] p-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span>{isRTL ? "1. إجمالي العملاء الملتقطين" : "1. Inbound Leads Captured"}</span>
                        <span className="font-bold">
                          {isRTL ? "142 عميلاً (100%)" : "142 leads (100%)"}
                        </span>
                      </div>
                      <div className="h-1.5 bg-[#14120F]/15 w-full">
                        <div className="h-1.5 bg-[#14120F] w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span>{isRTL ? "2. اجتياز مرحلة التأهيل الآلي" : "2. Automated Qualification Passed"}</span>
                        <span className="font-bold">
                          {isRTL ? "114 عميلاً (80.2%)" : "114 leads (80.2%)"}
                        </span>
                      </div>
                      <div className="h-1.5 bg-[#14120F]/15 w-full">
                        <div className="h-1.5 bg-[#14120F] w-[80%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span>{isRTL ? "3. تقديم العروض والاجتماعات الفنية" : "3. Proposal & Technical Discovery"}</span>
                        <span className="font-bold">
                          {isRTL ? "68 صفقة (47.8%)" : "68 deals (47.8%)"}
                        </span>
                      </div>
                      <div className="h-1.5 bg-[#14120F]/15 w-full">
                        <div className="h-1.5 bg-[#14120F] w-[48%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span>{isRTL ? "4. الصفقات الرابحة والمغلقة" : "4. Closed Won Contracts"}</span>
                        <span className="font-bold text-[#FF5B1F]">
                          {isRTL ? "42 صفقة (29.5%)" : "42 deals (29.5%)"}
                        </span>
                      </div>
                      <div className="h-1.5 bg-[#14120F]/15 w-full">
                        <div className="h-1.5 bg-[#FF5B1F] w-[30%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#14120F]/15 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-[#14120F]/15 bg-white">
                  <div className="p-3.5">
                    <div className="text-[10px] text-[#14120F]/60 uppercase">
                      {isRTL ? "الساعات الموفرة" : "HOURS SAVED"}
                    </div>
                    <div className="text-xl font-bold text-[#14120F] mt-0.5">136.8h</div>
                  </div>
                  <div className="p-3.5">
                    <div className="text-[10px] text-[#14120F]/60 uppercase">
                      {isRTL ? "متوسط أول تواصل" : "AVG FIRST TOUCH"}
                    </div>
                    <div className="text-xl font-bold text-[#14120F] mt-0.5">
                      {isRTL ? "3.4 دقيقة" : "3.4m"}
                    </div>
                  </div>
                  <div className="p-3.5">
                    <div className="text-[10px] text-[#14120F]/60 uppercase">
                      {isRTL ? "نسبة الأخطاء" : "ERROR RATE"}
                    </div>
                    <div className="text-xl font-bold text-[#14120F] mt-0.5">0.02%</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
