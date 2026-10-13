"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Bell,
  Search,
  LayoutDashboard,
  Kanban,
  GitBranch,
  BarChart3,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function HeroDashboardPreview() {
  const { isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | "active" | "won">("all");
  const [selectedRow, setSelectedRow] = useState<number | null>(1);

  const pipelineCards = [
    {
      id: 1,
      title: isRTL ? "طلب باقة الشركات الوارد" : "Enterprise Pilot Inbound",
      company: "Apex Media Group",
      value: "$14,500",
      stage: isRTL ? "مؤهل" : "Qualified",
      stageTag: "border-[#14120F]/20 text-[#14120F] bg-white",
      time: isRTL ? "منذ 8 دقائق" : "08m ago",
      assignee: isRTL ? "سارة خ." : "Sarah C.",
      score: 94,
      type: "active",
    },
    {
      id: 2,
      title: isRTL ? "نقل مسارات العمليات الرقمية" : "SaaS Workflow Migration",
      company: "Nordic Ventures",
      value: "$28,000",
      stage: isRTL ? "عرض أسعار" : "Proposal",
      stageTag: "border-[#14120F]/20 text-[#14120F] bg-white",
      time: isRTL ? "منذ 24 دقيقة" : "24m ago",
      assignee: isRTL ? "أليكس ر." : "Alex R.",
      score: 88,
      type: "active",
    },
    {
      id: 3,
      title: isRTL ? "أتمتة عمليات الوكالة" : "Agency Ops Automation",
      company: "Synthetix Labs",
      value: "$34,000",
      stage: isRTL ? "مكتملة بنجاح" : "Closed Won",
      stageTag: "border-[#FF5B1F] text-[#FF5B1F] bg-[#FF5B1F]/5 font-bold",
      time: isRTL ? "منذ ساعة" : "1h ago",
      assignee: isRTL ? "جوردان ر." : "Jordan R.",
      score: 98,
      type: "won",
    },
    {
      id: 4,
      title: isRTL ? "ربط فرق العمل المتعددة" : "Multi-Seat Workflow Bridge",
      company: "Krona Logistics",
      value: "$12,400",
      stage: isRTL ? "تم التواصل" : "Contacted",
      stageTag: "border-[#14120F]/20 text-[#14120F] bg-white",
      time: isRTL ? "منذ ساعتين" : "2h ago",
      assignee: isRTL ? "أليكس ر." : "Alex R.",
      score: 81,
      type: "active",
    },
  ];

  const filteredCards =
    activeFilter === "all"
      ? pipelineCards
      : activeFilter === "active"
      ? pipelineCards.filter((c) => c.type === "active")
      : pipelineCards.filter((c) => c.type === "won");

  return (
    <div className="relative w-full border border-[#14120F]/20 bg-[#F6F4EF] rounded-none sm:rounded-xs overflow-hidden">
      {/* Studio Header Bar */}
      <div className="flex items-center justify-between border-b border-[#14120F]/15 bg-[#EFECE4] px-4 py-2 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#14120F]/30" />
            <span className="h-2 w-2 rounded-full bg-[#14120F]/30" />
            <span className="h-2 w-2 rounded-full bg-[#14120F]/30" />
          </div>
          <span className={`text-[#14120F]/60 ${isRTL ? "border-r border-[#14120F]/15 pr-3" : "border-l border-[#14120F]/15 pl-3"}`}>
            {isRTL ? "مساحة العمل / عمليات-النمو" : "workspace / acme-growth-ops"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 bg-[#FF5B1F]" />
          <span className="text-[#14120F] uppercase tracking-wider text-[11px] font-semibold">
            {isRTL ? "14 مساراً نشطاً" : "14 flows active"}
          </span>
        </div>
      </div>

      {/* Main Mockup Body */}
      <div className="flex min-h-[460px] text-left rtl:text-right">
        {/* Compact Tool Rail */}
        <div className={`hidden sm:flex w-12 flex-col items-center justify-between bg-[#EFECE4]/50 py-3 ${isRTL ? "border-l border-[#14120F]/15" : "border-r border-[#14120F]/15"}`}>
          <div className="flex flex-col items-center gap-3">
            <div className="h-6 w-6 bg-[#14120F] text-[#F6F4EF] flex items-center justify-center font-mono font-bold text-[10px]">
              NX
            </div>
            <div className="w-4 h-px bg-[#14120F]/20" />
            <button
              type="button"
              className="p-1.5 bg-[#14120F] text-white"
              title="Pipeline"
            >
              <LayoutDashboard className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              className="p-1.5 text-[#14120F]/60 hover:text-[#14120F]"
              title="Leads"
            >
              <Kanban className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              className="p-1.5 text-[#14120F]/60 hover:text-[#14120F]"
              title="Automations"
            >
              <GitBranch className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              className="p-1.5 text-[#14120F]/60 hover:text-[#14120F]"
              title="Analytics"
            >
              <BarChart3 className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            type="button"
            className="p-1.5 text-[#14120F]/40 hover:text-[#14120F]"
            title="Settings"
          >
            <Settings className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Dashboard Content Area */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between bg-[#F6F4EF]">
          <div>
            {/* Top Command Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-[#14120F]/15">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#14120F] uppercase tracking-wider">
                    {isRTL ? "عمليات نمو أكيمي" : "Acme Growth Operations"}
                  </span>
                  <ChevronDown className="h-3 w-3 text-[#14120F]/40" />
                </div>
                <p className="font-mono text-[11px] text-[#14120F]/60">
                  {isRTL
                    ? "صباح الخير سارة · 14 عملية مؤتمتة قيد التشغيل اليوم"
                    : "Good morning, Sarah · 14 automated tasks running today"}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-1.5 border border-[#14120F]/20 bg-white px-2 py-1 font-mono text-[11px] text-[#14120F]/50">
                  <Search className="h-3 w-3" />
                  <span>{isRTL ? "بحث..." : "Filter..."}</span>
                  <kbd className="border border-[#14120F]/20 bg-[#F6F4EF] px-1 text-[9px] text-[#14120F]">
                    ⌘K
                  </kbd>
                </div>
                <div className="p-1 border border-[#14120F]/20 bg-white text-[#14120F]/60">
                  <Bell className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>

            {/* Dense Metric Triad */}
            <div className="grid grid-cols-3 border-b border-[#14120F]/15 my-3 divide-x rtl:divide-x-reverse divide-[#14120F]/15">
              <div className="p-2 sm:p-3">
                <div className="font-mono text-[10px] uppercase text-[#14120F]/60">
                  {isRTL ? "العملاء النشطون" : "Active Leads"}
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-mono text-xl font-bold text-[#14120F]">
                    142
                  </span>
                  <span className="font-mono text-[10px] text-[#FF5B1F] font-semibold">
                    +18.4%
                  </span>
                </div>
              </div>

              <div className="p-2 sm:p-3">
                <div className="font-mono text-[10px] uppercase text-[#14120F]/60">
                  {isRTL ? "تصنيف آلي" : "Auto-Triaged"}
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-mono text-xl font-bold text-[#14120F]">
                    99.4%
                  </span>
                  <span className="font-mono text-[10px] text-[#14120F]/60">
                    140ms
                  </span>
                </div>
              </div>

              <div className="p-2 sm:p-3">
                <div className="font-mono text-[10px] uppercase text-[#14120F]/60">
                  {isRTL ? "ساعات موفرة" : "Hours Saved"}
                </div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-mono text-xl font-bold text-[#14120F]">
                    34.2h
                  </span>
                  <span className="font-mono text-[10px] text-[#14120F]/60">
                    {isRTL ? "/أسبوع" : "/wk"}
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Line Chart */}
            <div className="border border-[#14120F]/15 bg-white p-3 mb-3">
              <div className="flex items-center justify-between mb-2 font-mono text-[11px]">
                <span className="font-semibold text-[#14120F] uppercase">
                  {isRTL ? "سرعة الاستجابة وتدفق العملاء" : "Throughput Velocity & Lead Intake"}
                </span>
                <span className="text-[#14120F]/60">
                  {isRTL ? "بيانات 7 أيام" : "7-day telemetry"}
                </span>
              </div>

              <div className="relative h-14 w-full">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 400 50"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="12" x2="400" y2="12" stroke="#EFECE4" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="35" x2="400" y2="35" stroke="#EFECE4" strokeWidth="1" strokeDasharray="4 4" />
                  <path
                    d="M0,40 L60,32 L120,35 L180,24 L240,28 L300,16 L360,18 L400,6"
                    stroke="#FF5B1F"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <rect x="117" y="32" width="6" height="6" fill="#14120F" />
                  <rect x="237" y="25" width="6" height="6" fill="#14120F" />
                  <rect x="297" y="13" width="6" height="6" fill="#14120F" />
                  <rect x="397" y="3" width="6" height="6" fill="#FF5B1F" />
                </svg>
              </div>

              <div className="flex justify-between text-[10px] text-[#14120F]/60 font-mono mt-1 border-t border-[#14120F]/10 pt-1">
                <span>{isRTL ? "الإثنين (12)" : "MON (12)"}</span>
                <span>{isRTL ? "الأربعاء (28)" : "WED (28)"}</span>
                <span>{isRTL ? "الجمعة (44)" : "FRI (44)"}</span>
                <span className="text-[#FF5B1F] font-bold">
                  {isRTL ? "اليوم (58 عميلاً)" : "TODAY (58 LEADS)"}
                </span>
              </div>
            </div>

            {/* Filter controls */}
            <div className="flex items-center justify-between mb-2 font-mono text-[11px]">
              <span className="uppercase font-bold text-[#14120F]">
                {isRTL ? "تدفق العملاء الوارد" : "Inbound Lead Stream"}
              </span>
              <div className="flex gap-1 border border-[#14120F]/20 p-0.5 bg-white">
                <button
                  type="button"
                  onClick={() => setActiveFilter("all")}
                  className={`px-2 py-0.5 transition-colors ${
                    activeFilter === "all"
                      ? "bg-[#14120F] text-white"
                      : "text-[#14120F]/60 hover:text-[#14120F]"
                  }`}
                >
                  {isRTL ? `الكل (${pipelineCards.length})` : `All (${pipelineCards.length})`}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter("active")}
                  className={`px-2 py-0.5 transition-colors ${
                    activeFilter === "active"
                      ? "bg-[#14120F] text-white"
                      : "text-[#14120F]/60 hover:text-[#14120F]"
                  }`}
                >
                  {isRTL ? "نشطة" : "In Flight"}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter("won")}
                  className={`px-2 py-0.5 transition-colors ${
                    activeFilter === "won"
                      ? "bg-[#FF5B1F] text-white"
                      : "text-[#14120F]/60 hover:text-[#14120F]"
                  }`}
                >
                  {isRTL ? "مكتملة" : "Won"}
                </button>
              </div>
            </div>

            {/* Dense Data Table Rows */}
            <div className="space-y-1 font-mono text-xs">
              {filteredCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedRow(card.id)}
                  className={`flex items-center justify-between p-2 border transition-colors cursor-pointer ${
                    selectedRow === card.id
                      ? "border-[#14120F] bg-white"
                      : "border-[#14120F]/15 bg-white/70 hover:bg-white hover:border-[#14120F]/40"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-[#14120F]" />
                    <div>
                      <div className="font-sans font-semibold text-[#14120F] text-xs">
                        {card.title}{" "}
                        <span className="font-mono text-[#14120F]/50 font-normal">
                          · {card.company}
                        </span>
                      </div>
                      <div className="text-[10px] text-[#14120F]/60">
                        {isRTL ? "المسؤول" : "Owner"}: {card.assignee} · {card.time}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#14120F]">
                      {card.value}
                    </span>
                    <span
                      className={`border px-1.5 py-0.5 text-[10px] uppercase font-mono ${card.stageTag}`}
                    >
                      {card.stage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bar */}
          <div className="mt-3 pt-2 border-t border-[#14120F]/15 flex items-center justify-between text-[11px] font-mono text-[#14120F]/60">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3 w-3 text-[#FF5B1F]" />
              <span>
                {isRTL
                  ? "12/14 مهمة نُفذت آلياً بنجاح"
                  : "12/14 tasks executed autonomously"}
              </span>
            </div>
            <span>{isRTL ? "بيانات تجريبية" : "DEMO RECORD SET"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
