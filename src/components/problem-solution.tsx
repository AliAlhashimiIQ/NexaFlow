"use client";

import { useLanguage } from "@/context/language-context";

export function ProblemSolution() {
  const { isRTL } = useLanguage();

  return (
    <section id="overview" className="py-20 sm:py-28 bg-[#F6F4EF] border-b border-[#14120F]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 border border-[#14120F]/20 bg-white px-2.5 py-1 text-xs font-mono text-[#14120F] uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
            <span>{isRTL ? "02 / نقاط التعطل التشغيلي" : "02 / OPERATIONAL FRICTION"}</span>
            <span className="text-[#14120F]/30">•</span>
            <span>{isRTL ? "ثلاث عقبات تعيق نمو الشركات" : "THREE SYSTEM BOTTLENECKS"}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#14120F] leading-[0.96] rtl:leading-[1.14]">
            {isRTL ? "أين تفقد الشركات الطموحة" : "Where high-growth teams"} <br />
            <span className="italic">{isRTL ? "سرعة زخمها البيعي." : "lose momentum."}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#14120F]/70 leading-relaxed font-normal">
            {isRTL
              ? "مع نمو الفريق، تتعقد العمليات وتتشتت الأدوات المنفصلة. إليك كيف تؤدي فوضى المتابعة إلى ضياع الصفقات، وكيف توحد نكسا فلو دورة حياة العميل بالكامل."
              : "When teams scale, operational complexity compounds exponentially. Here is how disjointed tools erode velocity—and how NexaFlow unifies the entire lifecycle."}
          </p>
        </div>

        {/* 3 Hairline Blocks */}
        <div className="space-y-8 text-left rtl:text-right">
          {/* Problem 01 */}
          <div className="border border-[#14120F]/15 bg-white p-6 sm:p-9">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs font-bold text-[#FF5B1F] uppercase mb-2">
                  {isRTL ? "العقبة 01 / 03" : "BOTTLENECK 01 / 03"}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#14120F] leading-tight">
                  {isRTL
                    ? "تشتت العملاء بين صناديق بريد ونماذج مبعثرة"
                    : "Leads scattered across unlinked inboxes & forms"}
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed font-normal">
                  {isRTL
                    ? "عملاء الموقع الإلكتروني في البريد، واستفسارات لينكد إن في الرسائل الخاصة، ونماذج الحملات الإعلانية في جداول ميتة. يضيع الموظفون نصف ساعة يومياً في نقل البيانات يدوياً، مما يؤخر الرد لساعات ويفقد الصفقات قيمتها."
                    : "Web leads land in email, LinkedIn inquiries sit in personal messages, and campaign forms export to stagnant spreadsheets. Representatives spend their first 30 minutes each day manually copying contact rows, leading to missed response windows and lost revenue."}
                </p>
                <div className="mt-6 pt-4 border-t border-[#14120F]/10 font-mono text-xs font-semibold text-[#14120F]">
                  {isRTL ? "الحل:" : "SOLUTION:"}{" "}
                  <span className="text-[#FF5B1F]">
                    {isRTL ? "خزينة مركزية موحدة للعملاء" : "Unified Lead Vault"}
                  </span>
                </div>
              </div>

              {/* Comparison Box */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-[#14120F]/15 bg-[#F6F4EF] p-4 text-xs font-mono">
                  <div className="text-[10px] uppercase font-bold text-[#14120F]/60 pb-2 border-b border-[#14120F]/10 mb-3">
                    {isRTL ? "الواقع المجزأ القديم" : "FRAGMENTED REALITY"}
                  </div>
                  <div className="space-y-2 text-[#14120F]/60 line-through text-[11px]">
                    <div>{isRTL ? "[ملف] Inbound_leads_v3_final.csv" : "[csv] Inbound_leads_v3_final.csv"}</div>
                    <div>{isRTL ? "[بريد] 14 رسالة غير مقروءة في الصندوق المشترك" : "[mail] 14 unread emails in shared inbox"}</div>
                    <div>{isRTL ? "[محادثة] عميل جديد بدون موظف مسؤول" : "[chat] Unassigned website chat lead"}</div>
                  </div>
                  <div className="mt-4 text-[11px] text-[#14120F] font-bold">
                    {isRTL ? "النتيجة: تأخير متوسط 4.8 ساعات" : "Result: 4.8h average delay"}
                  </div>
                </div>

                <div className="border border-[#14120F] bg-white p-4 text-xs font-mono">
                  <div className="text-[10px] uppercase font-bold text-[#FF5B1F] pb-2 border-b border-[#14120F]/10 mb-3 flex items-center justify-between">
                    <span>{isRTL ? "معمارية نكسا فلو" : "NEXAFLOW UNIFIED"}</span>
                    <span className="text-[#FF5B1F] font-bold">LIVE</span>
                  </div>
                  <div className="space-y-2 text-[#14120F] text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
                      <span>{isRTL ? "استقبال فوري عبر الـ Webhooks" : "Single intake API & Webhooks"}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
                      <span>{isRTL ? "توزيع تلقائي حسب التخصص والمنطقة" : "Automated round-robin assignment"}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
                      <span>{isRTL ? "تنبيه عبر واتساب وسلاك للممثل" : "Instant Slack & WhatsApp dispatch"}</span>
                    </div>
                  </div>
                  <div className="mt-4 text-[11px] text-[#FF5B1F] font-bold">
                    {isRTL ? "النتيجة: استجابة فورية خلال 90 ثانية" : "Result: 90s first-touch speed"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Problem 02 */}
          <div className="border border-[#14120F]/15 bg-white p-6 sm:p-9">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs font-bold text-[#FF5B1F] uppercase mb-2">
                  {isRTL ? "العقبة 02 / 03" : "BOTTLENECK 02 / 03"}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#14120F] leading-tight">
                  {isRTL
                    ? "المهام الروتينية المتكررة تستنزف طاقة الفريق"
                    : "Repetitive manual busywork draining high-value hours"}
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed font-normal">
                  {isRTL
                    ? "توزيع المهام، وإرسال رسائل الترحيب الأولية، وملاحقة العملاء غير المتجاوبين، وتحديث مراحل الصفقات يدوياً يستهلك أكثر من 15 ساعة لكل موظف أسبوعياً. موظفوك المتميزون يقضون وقتهم كموزعين يدويين بدلاً من التركيز على المبيعات."
                    : "Assigning team tasks, sending standard welcome emails, nudging unresponsive prospects, and manually updating CRM stages eats up over 15 hours per employee every single week. High-cost talent is trapped acting like human routers."}
                </p>
                <div className="mt-6 pt-4 border-t border-[#14120F]/10 font-mono text-xs font-semibold text-[#14120F]">
                  {isRTL ? "الحل:" : "SOLUTION:"}{" "}
                  <span className="text-[#FF5B1F]">
                    {isRTL ? "مسارات أتمتة ذاتية التشغيل" : "Autonomous Event Flows"}
                  </span>
                </div>
              </div>

              {/* Workflow Recipe Preview */}
              <div className="lg:col-span-7 border border-[#14120F]/15 bg-[#F6F4EF] p-4 sm:p-5 font-mono text-xs">
                <div className="flex justify-between pb-2 border-b border-[#14120F]/10 mb-3 text-[11px]">
                  <span className="font-bold text-[#14120F]">
                    {isRTL ? "المسار: onboarding_enterprise_lead.flow" : "RECIPE: enterprise_lead_onboarding.flow"}
                  </span>
                  <span className="text-[#FF5B1F] font-bold">
                    {isRTL ? "نشط · 142 تشغيلاً" : "ACTIVE · 142 RUNS"}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="border border-[#14120F]/15 bg-white p-2.5">
                    <span className="text-[10px] text-[#14120F]/60 uppercase font-bold">
                      {isRTL ? "01 / المحفز" : "01 / TRIGGER"}
                    </span>
                    <div className="font-semibold text-[#14120F]">
                      {isRTL ? "قيمة العميل الوارد > 10,000$" : "Inbound Lead Value > $10,000"}
                    </div>
                  </div>
                  <div className="border border-[#14120F]/15 bg-white p-2.5">
                    <span className="text-[10px] text-[#14120F]/60 uppercase font-bold">
                      {isRTL ? "02 / التحقق الشرطي" : "02 / RULE EVALUATION"}
                    </span>
                    <div className="font-semibold text-[#14120F]">
                      {isRTL
                        ? "تعيين لأخصائي كبار العملاء (مع موازنة عبء العمل)"
                        : "Assign to Senior Account Specialist (Load-balanced)"}
                    </div>
                  </div>
                  <div className="border border-[#14120F]/15 bg-white p-2.5">
                    <span className="text-[10px] text-[#14120F]/60 uppercase font-bold">
                      {isRTL ? "03 / الإرسال التلقائي" : "03 / DISPATCH"}
                    </span>
                    <div className="font-semibold text-[#14120F]">
                      {isRTL
                        ? "إرسال رسالة ترحيبية مخصصة ورابط حجز موعد فوري"
                        : "Dispatch Tailored Welcome & Calendar Link"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Problem 03 */}
          <div className="border border-[#14120F]/15 bg-white p-6 sm:p-9">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs font-bold text-[#FF5B1F] uppercase mb-2">
                  {isRTL ? "العقبة 03 / 03" : "BOTTLENECK 03 / 03"}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#14120F] leading-tight">
                  {isRTL
                    ? "غياب الرؤية حول أسباب تعطل الصفقات وانسحاب العملاء"
                    : "Zero visibility into workflow drop-offs & bottlenecks"}
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-[#14120F]/70 leading-relaxed font-normal">
                  {isRTL
                    ? "يحتار مديرو المبيعات في معرفة سبب بقاء العروض دون رد أو أين يتعطل العملاء. بدون مقاييس مدة كل مرحلة، يستحيل معرفة أي موظف لديه ضغط زائد، وأي قالب عرض يفشل في التحويل، أو أين تتباطأ سرعة التدفق البيعي."
                    : "Leaders are left guessing why proposals linger or where leads get stuck. Without stage-duration telemetry, it is impossible to identify which representative is overloaded, which template fails to convert, or where pipeline velocity stalls."}
                </p>
                <div className="mt-6 pt-4 border-t border-[#14120F]/10 font-mono text-xs font-semibold text-[#14120F]">
                  {isRTL ? "الحل:" : "SOLUTION:"}{" "}
                  <span className="text-[#FF5B1F]">
                    {isRTL ? "مؤشرات وقياسات مراحل الصفقات" : "Pipeline Stage Telemetry"}
                  </span>
                </div>
              </div>

              {/* Telemetry Preview */}
              <div className="lg:col-span-7 border border-[#14120F]/15 bg-[#F6F4EF] p-4 sm:p-5 font-mono text-xs">
                <div className="flex justify-between pb-2 border-b border-[#14120F]/10 mb-4 text-[11px]">
                  <span className="font-bold text-[#14120F]">
                    {isRTL ? "مدة المراحل ومؤشرات التدقيق" : "STAGE DURATION & AUDIT METRICS"}
                  </span>
                  <span className="text-[#14120F]/60">{isRTL ? "مباشر لحظي" : "REAL-TIME"}</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span>{isRTL ? "استقبال العميل ← أول تواصل" : "Lead Intake → First Touch"}</span>
                      <span className="font-bold text-[#14120F]">
                        {isRTL ? "18 دقيقة (الهدف < 30 دقيقة)" : "18 mins (Target < 30m)"}
                      </span>
                    </div>
                    <div className="h-1 bg-[#14120F]/15 w-full">
                      <div className="h-1 bg-[#14120F] w-[24%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span>{isRTL ? "مرحلة مراجعة عرض الأسعار" : "Proposal Review Phase"}</span>
                      <span className="font-bold text-[#14120F]">
                        {isRTL ? "1.2 يوم (الهدف < يومين)" : "1.2 days (Target < 2d)"}
                      </span>
                    </div>
                    <div className="h-1 bg-[#14120F]/15 w-full">
                      <div className="h-1 bg-[#14120F] w-[58%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span>{isRTL ? "نسبة إغلاق العقود النهائية" : "Contract Closing Rate"}</span>
                      <span className="font-bold text-[#FF5B1F]">
                        {isRTL ? "74.2% نسبة الإنجاز" : "74.2% completion"}
                      </span>
                    </div>
                    <div className="h-1 bg-[#14120F]/15 w-full">
                      <div className="h-1 bg-[#FF5B1F] w-[74%]" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#14120F]/10 flex justify-between text-[11px]">
                  <span className="text-[#14120F]/60">
                    {isRTL ? "مؤشر صحة وكفاءة النظام" : "System Health Score"}
                  </span>
                  <span className="font-bold text-[#14120F]">
                    {isRTL ? "96 / 100 تشغيل ممتاز" : "96 / 100 Operational"}
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
