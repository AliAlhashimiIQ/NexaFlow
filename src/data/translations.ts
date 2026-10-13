export interface TranslationSchema {
  nav: {
    links: { name: string; href: string }[];
    signIn: string;
    exploreDemo: string;
    systemVersion: string;
    langToggle: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    eyebrowTag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    reassuranceTitle: string;
    sandboxTag: string;
    dataTag: string;
    liveBadge: string;
    metrics: {
      pipeline: string;
      pipelineChange: string;
      response: string;
      responseChange: string;
      winRate: string;
      winRateChange: string;
      activeWorkflows: string;
      slaHealth: string;
    };
    table: {
      title: string;
      searchPlaceholder: string;
      filterAll: string;
      colLead: string;
      colStage: string;
      colValue: string;
      colOwner: string;
      colActivity: string;
    };
  };
  audience: {
    eyebrow: string;
    eyebrowTag: string;
    title: string;
    titleItalic: string;
    description: string;
    categories: {
      id: string;
      title: string;
      badge: string;
      description: string;
      capabilities: string[];
      metric: string;
      metricLabel: string;
    }[];
  };
  problemSolution: {
    eyebrow: string;
    eyebrowTag: string;
    title: string;
    titleItalic: string;
    description: string;
    beforeLabel: string;
    beforeTitle: string;
    beforeItems: string[];
    afterLabel: string;
    afterTitle: string;
    afterItems: string[];
  };
  features: {
    eyebrow: string;
    eyebrowTag: string;
    title: string;
    titleItalic: string;
    description: string;
    pillars: {
      id: string;
      number: string;
      tag: string;
      title: string;
      description: string;
      bulletPoints: string[];
      metricValue: string;
      metricLabel: string;
    }[];
  };
  walkthrough: {
    eyebrow: string;
    eyebrowTag: string;
    title: string;
    titleItalic: string;
    description: string;
    tabLeads: string;
    tabAutomations: string;
    tabWorkflows: string;
    filterLabel: string;
    allStages: string;
    searchPlaceholder: string;
    activeRuleCount: string;
    table: {
      contact: string;
      company: string;
      stage: string;
      dealValue: string;
      assignedRep: string;
      lastContact: string;
      score: string;
    };
    automationsHeader: {
      title: string;
      description: string;
      trigger: string;
      action: string;
      executions: string;
      successRate: string;
      status: string;
      enabled: string;
      paused: string;
    };
  };
  howItWorks: {
    eyebrow: string;
    eyebrowTag: string;
    title: string;
    titleItalic: string;
    description: string;
    steps: {
      step: string;
      title: string;
      description: string;
      tag: string;
    }[];
  };
  pricing: {
    eyebrow: string;
    eyebrowTag: string;
    title: string;
    titleItalic: string;
    description: string;
    monthly: string;
    annual: string;
    annualDiscount: string;
    perUserMonth: string;
    annualPerUserMonth: string;
    annualBilled: string;
    portfolioNotice: string;
    portfolioNoticeBold: string;
    plans: {
      id: string;
      name: string;
      badge: string;
      description: string;
      priceMonthly: number;
      priceYearly: number;
      period: string;
      highlight: boolean;
      ctaText: string;
      features: string[];
    }[];
  };
  faq: {
    eyebrow: string;
    eyebrowTag: string;
    title: string;
    titleItalic: string;
    description: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  finalCta: {
    eyebrow: string;
    eyebrowTag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    tags: string[];
  };
  builtByAli: {
    eyebrow: string;
    eyebrowTag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    whatsappLabel: string;
    mostaqlLabel: string;
    highlights: string[];
  };
  footer: {
    description: string;
    portfolioBadge: string;
    portfolioNotice: string;
    colProduct: string;
    colSolutions: string;
    colLegal: string;
    copyright: string;
    disclaimer: string;
  };
  modal: {
    eyebrow: string;
    modeAuth: string;
    modeSandbox: string;
    planPrefix: string;
    title: string;
    description: string;
    noticeTitle: string;
    noticeBody: string;
    personaLabel: string;
    personas: { id: string; label: string }[];
    workspaceLabel: string;
    ctaPrimary: string;
    ctaClose: string;
    simulatedDisclaimer: string;
  };
}

export const TRANSLATIONS: { en: TranslationSchema; ar: TranslationSchema } = {
  en: {
    nav: {
      links: [
        { name: "01 Overview", href: "#overview" },
        { name: "02 Pillars", href: "#features" },
        { name: "03 Solutions", href: "#solutions" },
        { name: "04 Sandbox", href: "#walkthrough" },
        { name: "05 Pricing", href: "#pricing" },
        { name: "06 FAQ", href: "#faq" },
      ],
      signIn: "Sign in",
      exploreDemo: "Explore the demo",
      systemVersion: "System 2.4",
      langToggle: "العربية",
      langLabel: "AR",
    },
    hero: {
      eyebrow: "00 / CORE THESIS",
      eyebrowTag: "WORK SMARTER, NOT HARDER",
      titleLine1: "Less busywork.",
      titleLine2: "More business.",
      description:
        "Bring your leads, workflows, and team operations together in one workspace. Spend less time managing tasks and more time growing your business.",
      primaryCta: "Explore the demo",
      secondaryCta: "Explore the platform",
      reassuranceTitle: "Built for teams that want to move faster.",
      sandboxTag: "Instant interactive sandbox",
      dataTag: "Simulated operational data",
      liveBadge: "LIVE SIMULATION",
      metrics: {
        pipeline: "$97,100",
        pipelineChange: "+18.4% vs last mo",
        response: "1.8m",
        responseChange: "-42% avg speed",
        winRate: "24.6%",
        winRateChange: "+3.2% qualification",
        activeWorkflows: "18/20",
        slaHealth: "99.8% SLA on-time",
      },
      table: {
        title: "INBOUND LEAD QUEUE",
        searchPlaceholder: "Search active pipeline records...",
        filterAll: "All Stages",
        colLead: "Lead & Company",
        colStage: "Stage",
        colValue: "Value",
        colOwner: "Owner",
        colActivity: "Activity",
      },
    },
    audience: {
      eyebrow: "01 / CAPABILITIES",
      eyebrowTag: "BUILT FOR INTENTIONAL TEAMS",
      title: "Engineered for organizations that handle",
      titleItalic: "high-value customer relationships.",
      description:
        "Whether managing multiple agency accounts or scaling an in-house sales development process, NexaFlow adapts to your exact operational structure.",
      categories: [
        {
          id: "agencies",
          title: "Agencies",
          badge: "Client Operations",
          description:
            "Manage client onboarding, automate milestone handoffs, and keep campaign leads flowing seamlessly without messy spreadsheets.",
          capabilities: [
            "Multi-client workspace isolation",
            "Automated lead routing by budget tier",
            "Client milestone progress dashboards",
          ],
          metric: "4.8 hrs",
          metricLabel: "saved per client onboarded",
        },
        {
          id: "consultants",
          title: "Consultants",
          badge: "Solo & Boutique",
          description:
            "Capture inbound inquiries, schedule discovery calls automatically, and keep track of proposal statuses with zero overhead.",
          capabilities: [
            "Zero-overhead lead intake forms",
            "Automated follow-up reminders",
            "Proposal delivery and stage tracking",
          ],
          metric: "100%",
          metricLabel: "inbound inquiry capture rate",
        },
        {
          id: "businesses",
          title: "Growing Businesses",
          badge: "Scale & Velocity",
          description:
            "Bridge marketing campaigns to sales follow-ups with instant notifications, automatic lead scoring, and pipeline clarity.",
          capabilities: [
            "Real-time CRM & webhook sync",
            "Smart lead distribution to reps",
            "Pipeline velocity bottleneck detection",
          ],
          metric: "3.2x",
          metricLabel: "faster lead response time",
        },
        {
          id: "operations",
          title: "Operations Teams",
          badge: "Process Architecture",
          description:
            "Standardize repetitive cross-departmental handoffs, enforce SLAs, and eliminate manual copy-pasting between disparate tools.",
          capabilities: [
            "Visual rule-based triggers and actions",
            "Automated SLA breach notifications",
            "End-to-end audit log of every step",
          ],
          metric: "99.4%",
          metricLabel: "workflow execution reliability",
        },
      ],
    },
    problemSolution: {
      eyebrow: "02 / THE SHIFT",
      eyebrowTag: "TRANSFORMATION MODEL",
      title: "From spreadsheet chaos to",
      titleItalic: "orchestrated pipeline velocity.",
      description:
        "The friction in lead management isn't a lack of tools—it's disconnected tools. See how NexaFlow replaces manual busywork with deterministic routines.",
      beforeLabel: "01 / BEFORE NEXAFLOW",
      beforeTitle: "Manual overhead and leaked opportunities.",
      beforeItems: [
        "Leads sitting unattended in inbox for 4+ hours",
        "Disjointed spreadsheets that get out of sync daily",
        "Reps manually copy-pasting between form and CRM",
        "No clarity on SLA adherence or response bottlenecks",
      ],
      afterLabel: "02 / AFTER NEXAFLOW",
      afterTitle: "Instant routing and deterministic execution.",
      afterItems: [
        "Inbound webhook parsed and assigned in <60 seconds",
        "Single source of truth with live stage velocity tracking",
        "Automated proposal follow-up sequences",
        "Real-time SLA notifications via Slack or email",
      ],
    },
    features: {
      eyebrow: "03 / THE PILLARS",
      eyebrowTag: "CORE ARCHITECTURE",
      title: "Four operational engines",
      titleItalic: "built into a unified workspace.",
      description:
        "Every pillar is designed to eliminate friction points between capturing a customer's intent and delivering a completed outcome.",
      pillars: [
        {
          id: "routing",
          number: "01",
          tag: "INBOUND VELOCITY",
          title: "Instant Lead Intake & Intelligent Distribution",
          description:
            "Capture submissions from webhooks, contact forms, and ad campaigns. Automatically score lead budget, industry, and urgency before assigning to the exact rep based on capacity rules.",
          bulletPoints: [
            "Sub-minute automated routing logic",
            "Capacity and timezone-aware rep round-robin",
            "Instant team alerts on Slack and WhatsApp webhooks",
          ],
          metricValue: "1.8 min",
          metricLabel: "average response time down from 4.2 hours",
        },
        {
          id: "engine",
          number: "02",
          tag: "VISUAL LOGIC",
          title: "No-Code Rule Engine with Multi-Branch Actions",
          description:
            "Build robust trigger-condition-action routines in minutes without writing code. Set automated follow-up sequences, stage progression checks, and cross-department handoffs effortlessly.",
          bulletPoints: [
            "Visual rule builder with multi-tier conditional filters",
            "Configurable time delays and idle trigger detection",
            "Automatic stage advancement upon milestone completion",
          ],
          metricValue: "14 hrs",
          metricLabel: "weekly admin work saved per team rep",
        },
        {
          id: "collaboration",
          number: "03",
          tag: "SLA ENFORCEMENT",
          title: "Team Ownership & Guaranteed Service Level Agreements",
          description:
            "Prevent high-value deals from slipping through the cracks. Define custom response SLAs and let NexaFlow automatically escalate idle proposals to managers before deadlines expire.",
          bulletPoints: [
            "Proactive SLA breach warnings before deadlines pass",
            "Audit logs tracing deal ownership transitions",
            "Role-based visibility permissions per team member",
          ],
          metricValue: "99.8%",
          metricLabel: "inbound SLA compliance rate maintained",
        },
        {
          id: "telemetry",
          number: "04",
          tag: "PIPELINE CLARITY",
          title: "Operational Telemetry & Stage Conversion Analytics",
          description:
            "Gain crystal-clear visibility into where deals stall and which team members excel. Track stage duration, conversion velocity, and drop-off points with actionable analytics.",
          bulletPoints: [
            "Real-time conversion velocity tracking across stages",
            "Rep workload balancing and deal volume heatmaps",
            "Exportable pipeline reports for stakeholders and clients",
          ],
          metricValue: "+32%",
          metricLabel: "increase in proposal-to-close conversion",
        },
      ],
    },
    walkthrough: {
      eyebrow: "04 / LIVE SANDBOX",
      eyebrowTag: "INTERACTIVE DEMONSTRATION",
      title: "Test the engine in real time.",
      titleItalic: "Interactive lead operations.",
      description:
        "Experience the actual NexaFlow workspace interface below. Filter demonstration leads, inspect stage parameters, and test automation rule toggles.",
      tabLeads: "Live Lead Pipeline",
      tabAutomations: "Automation Engine",
      tabWorkflows: "Rule Configuration",
      filterLabel: "FILTER BY STAGE:",
      allStages: "All Stages",
      searchPlaceholder: "Search lead or company name...",
      activeRuleCount: "ACTIVE AUTOMATIONS: 3 OF 4",
      table: {
        contact: "Contact & Company",
        company: "Company",
        stage: "Stage",
        dealValue: "Deal Value",
        assignedRep: "Assigned Rep",
        lastContact: "Last Contact",
        score: "Score",
      },
      automationsHeader: {
        title: "Active Automation Routines",
        description: "Toggle operational rules below to see immediate status simulation.",
        trigger: "Trigger Event",
        action: "Executed Actions",
        executions: "Executions",
        successRate: "Success Rate",
        status: "Status",
        enabled: "Active",
        paused: "Paused",
      },
    },
    howItWorks: {
      eyebrow: "05 / EXECUTION",
      eyebrowTag: "ONBOARDING TIMELINE",
      title: "From initial setup to",
      titleItalic: "fully automated operations in three steps.",
      description:
        "Zero code required. Connect your existing customer acquisition channels, set your operational logic, and let NexaFlow manage the workflow.",
      steps: [
        {
          step: "01",
          title: "Connect Inbound Channels",
          description:
            "Plug your marketing contact forms, webhook endpoints, or Meta Ad lead forms into NexaFlow with a single click.",
          tag: "5 MINUTES",
        },
        {
          step: "02",
          title: "Define Distribution & SLAs",
          description:
            "Set routing rules by deal size, territory, or team capacity. Establish response-time SLAs and automated escalation policies.",
          tag: "NO CODE REQUIRED",
        },
        {
          step: "03",
          title: "Launch Automated Operations",
          description:
            "Watch incoming inquiries get scored, assigned, and tracked instantly with real-time analytics and team notifications.",
          tag: "INSTANT IMPACT",
        },
      ],
    },
    pricing: {
      eyebrow: "06 / TIERS",
      eyebrowTag: "DEMONSTRATION PRICING",
      title: "Predictable plans tailored to",
      titleItalic: "your operational velocity.",
      description:
        "Transparent conceptual tiers designed for solo consultants, scaling agencies, and high-volume operations teams.",
      monthly: "Monthly",
      annual: "Annual",
      annualDiscount: "(-20%)",
      perUserMonth: "/month",
      annualPerUserMonth: "/mo (annual)",
      annualBilled: "/year total",
      portfolioNotice:
        "All subscription plans and prices are demonstration models for client presentation on Mostaql. No live payment processing, billing, or contracts exist.",
      portfolioNoticeBold: "PORTFOLIO NOTICE:",
      plans: [
        {
          id: "starter",
          name: "Starter",
          badge: "Solopreneurs & Freelancers",
          description:
            "Essential pipeline management and introductory automation for solo operators and micro teams.",
          priceMonthly: 0,
          priceYearly: 0,
          period: "forever free",
          highlight: false,
          ctaText: "Explore Starter Demo",
          features: [
            "1 workspace environment",
            "Up to 250 active leads",
            "3 active workflow automations",
            "Basic lead stage board",
            "Email notification alerts",
            "Standard 48h community support",
          ],
        },
        {
          id: "growth",
          name: "Growth",
          badge: "Most Popular for Teams",
          description:
            "Advanced workflow engine and collaborative lead operations designed for growing businesses and agencies.",
          priceMonthly: 19,
          priceYearly: 15,
          period: "per user / month",
          highlight: true,
          ctaText: "Explore the demo",
          features: [
            "Everything in Starter, plus:",
            "Up to 2,500 active leads",
            "Unlimited workflow automations",
            "Multi-member team assignments & SLAs",
            "Visual trigger & action rule builder",
            "Custom lead scoring logic",
            "Expanded pipeline performance analytics",
            "Priority 4h response support",
          ],
        },
        {
          id: "business",
          name: "Business",
          badge: "Multi-Team Operations",
          description:
            "Comprehensive multi-workspace governance, high-volume automation, and dedicated operational oversight.",
          priceMonthly: 49,
          priceYearly: 39,
          period: "per user / month",
          highlight: false,
          ctaText: "Explore Business Demo",
          features: [
            "Everything in Growth, plus:",
            "Multiple client workspace isolation",
            "Unlimited active leads & records",
            "Advanced conditional branching & webhooks",
            "Role-based access permissions & audit logs",
            "Custom SLA rules & escalation policies",
            "Exportable analytics & raw telemetry",
            "Dedicated account onboarding walkthrough",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "07 / CLARIFICATIONS",
      eyebrowTag: "FREQUENTLY ASKED QUESTIONS",
      title: "Everything you need",
      titleItalic: "to know about NexaFlow.",
      description:
        "Transparent answers regarding platform architecture, customization capabilities, and this portfolio demonstration.",
      items: [
        {
          question: "What is NexaFlow?",
          answer:
            "NexaFlow is a conceptual B2B workflow automation platform designed to consolidate inbound lead capture, automated task routing, and team collaboration into a single, cohesive workspace. It aims to eliminate fragmented spreadsheets and disjointed tools so businesses spend less time managing admin work and more time closing deals.",
        },
        {
          question: "Who is NexaFlow designed for?",
          answer:
            "NexaFlow is conceptualized for modern service agencies, consultants, fast-scaling small and medium businesses, and operations teams who manage high-touch lead flows, recurring client onboarding tasks, or cross-functional deliverables.",
        },
        {
          question: "Can I customize workflows and business rules?",
          answer:
            "Yes. The platform concept features a visual rule-builder where you can configure triggers (such as new webhooks, form submissions, or status changes) and chain them to conditional filters and multi-step actions (such as lead scoring, rep assignments, and automated notifications).",
        },
        {
          question: "Does NexaFlow require technical or coding knowledge?",
          answer:
            "No. NexaFlow is architected with a no-code visual interface. Non-technical marketing and sales teams can build, test, and monitor automated routines without writing code or relying on dedicated software developers.",
        },
        {
          question: "Is this a live product?",
          answer:
            "This website is a production-quality frontend portfolio concept created by Ali. All displayed dashboard interfaces, metrics, and pricing tables are simulated frontend demonstration components built to showcase commercial UI/UX craftsmanship, responsive design, and modern Next.js engineering.",
        },
        {
          question: "How was this landing page engineered?",
          answer:
            "This project is built with Next.js 16 (App Router), TypeScript with strict type safety, Tailwind CSS v4, and Lucide React icons. It prioritizes server components by default, zero runtime client bloat, full keyboard accessibility, and responsive layouts across mobile, tablet, and desktop viewports.",
        },
      ],
    },
    finalCta: {
      eyebrow: "08 / CONCLUSION",
      eyebrowTag: "GET STARTED TODAY",
      titleLine1: "Make room for the work that moves",
      titleLine2: "your business forward.",
      description:
        "Explore a simpler way to organize leads, workflows, and team activity. Launch your interactive demo workspace now and eliminate manual overhead.",
      primaryCta: "Explore the demo",
      secondaryCta: "Explore live sandbox",
      tags: ["Instant interactive access", "Zero setup friction", "Simulated demonstration data"],
    },
    builtByAli: {
      eyebrow: "09 / CRAFTSMANSHIP",
      eyebrowTag: "BUILT BY ALI",
      titleLine1: "Engineered by Ali.",
      titleLine2: "Available for your next project.",
      description:
        "I build custom, production-grade landing pages and web applications that convert advertising traffic into leads and paying clients. Clean Next.js App Router code, strict TypeScript, responsive mobile-first UX, and rapid delivery for clients across the Gulf and worldwide.",
      whatsappLabel: "WhatsApp: +964 770 068 3686",
      mostaqlLabel: "Mostaql Profile: [my URL]",
      highlights: [
        "Conversion-Focused Landing Pages",
        "Next.js & Tailwind Architecture",
        "Gulf & Arabic Market Experience",
      ],
    },
    footer: {
      description:
        "Less busywork. More business. NexaFlow helps fast-moving teams organize leads, automate repetitive tasks, and unlock actionable operational intelligence from one unified workspace.",
      portfolioBadge: "PORTFOLIO SHOWCASE PROJECT",
      portfolioNotice:
        "Engineered for client presentation on Mostaql. Built with Next.js App Router, strict TypeScript, and bespoke architectural design.",
      colProduct: "01 / PRODUCT",
      colSolutions: "02 / SOLUTIONS",
      colLegal: "03 / LEGAL & NOTICE",
      copyright: "© 2026 NexaFlow Concept. Fictional B2B SaaS showcase for Mostaql portfolio.",
      disclaimer: "ALL RIGHTS RESERVED · DEMO MODEL",
    },
    modal: {
      eyebrow: "PORTFOLIO DEMO",
      modeAuth: "AUTH PREVIEW",
      modeSandbox: "SANDBOX MODE",
      planPrefix: "PLAN",
      title: "NexaFlow Interactive Demo",
      description:
        "This is an interactive frontend demonstration built to showcase commercial SaaS design, responsive layouts, and lead operations UI. No live account registration is required.",
      noticeTitle: "Interactive Portfolio Showcase",
      noticeBody:
        "You can interact directly with the pipeline board, switch operational filters, and toggle simulated automation triggers in the live sandbox on this page.",
      personaLabel: "DEMO PERSONA",
      personas: [
        { id: "agencies", label: "Agency" },
        { id: "consultants", label: "Consultancy" },
        { id: "businesses", label: "Growing SMB" },
        { id: "operations", label: "Ops Team" },
      ],
      workspaceLabel: "DEMO WORKSPACE NAME",
      ctaPrimary: "Explore Interactive Sandbox",
      ctaClose: "Close",
      simulatedDisclaimer: "SIMULATED DEMO SESSION · NO PERSONAL DATA STORED",
    },
  },
  ar: {
    nav: {
      links: [
        { name: "01 نظرة عامة", href: "#overview" },
        { name: "02 الركائز", href: "#features" },
        { name: "03 الحلول", href: "#solutions" },
        { name: "04 التجربة الحية", href: "#walkthrough" },
        { name: "05 الأسعار", href: "#pricing" },
        { name: "06 الأسئلة الشائعة", href: "#faq" },
      ],
      signIn: "تسجيل الدخول",
      exploreDemo: "استكشف العرض التجريبي",
      systemVersion: "الإصدار 2.4",
      langToggle: "English",
      langLabel: "EN",
    },
    hero: {
      eyebrow: "00 / الركيزة الأساسية",
      eyebrowTag: "أعمال أسرع • نتائج أكبر",
      titleLine1: "عمل يدوي أقل.",
      titleLine2: "صفقات ومبيعات أكثر.",
      description:
        "اجمع العملاء المحتملين، ومسارات العمليات التشغيلية، وفريق المبيعات في مساحة عمل واحدة موحدة. تخلّص من فوضى الجداول اليدوية واختصر زمن الاستجابة إلى دقائق معدودة.",
      primaryCta: "استكشف العرض التجريبي",
      secondaryCta: "استعراض المنصة مباشرة",
      reassuranceTitle: "مصمم للشركات التي تهدف إلى مضاعفة سرعة إغلاق الصفقات.",
      sandboxTag: "مساحة تفاعلية فورية",
      dataTag: "بيانات تشغيلية حية",
      liveBadge: "محاكاة فورية حية",
      metrics: {
        pipeline: "97,100$",
        pipelineChange: "+18.4% عن الشهر السابق",
        response: "1.8 دقيقة",
        responseChange: "-42% متوسط سرعة الرد",
        winRate: "24.6%",
        winRateChange: "+3.2% معدل التأهيل",
        activeWorkflows: "18/20",
        slaHealth: "99.8% التزام باتفاقية الخدمة",
      },
      table: {
        title: "قائمة العملاء المحتملين الواردة",
        searchPlaceholder: "البحث في سجل الصفقات النشطة...",
        filterAll: "جميع المراحل",
        colLead: "العميل والشركة",
        colStage: "المرحلة",
        colValue: "القيمة",
        colOwner: "المسؤول",
        colActivity: "آخر نشاط",
      },
    },
    audience: {
      eyebrow: "01 / إمكانيات المنصة",
      eyebrowTag: "مصمم للفرق الواثقة",
      title: "هندسة برمجية مخصصة للشركات التي تدير",
      titleItalic: "علاقات تجارية عالية القيمة.",
      description:
        "سواء كنت تدير حسابات عملاء متعددة في وكالتك أو توسع عمليات فريق المبيعات الداخلي، تتكيف منصة نكسا فلو مع هيكلك التشغيلي بدقة وسلاسة.",
      categories: [
        {
          id: "agencies",
          title: "الوكالات الرقمية والتسويقية",
          badge: "إدارة عمليات العملاء",
          description:
            "تنظيم تأهيل العملاء الجدد، وأتمتة تسليم المراحل بين الفرق، وتمرير عملاء الحملات الإعلانية بسلاسة دون جداول مبعثرة.",
          capabilities: [
            "عزل مساحات عمل كل عميل بأمان تام",
            "توزيع العملاء آلياً بحسب الميزانية والخدمة",
            "لوحات متابعة لتقدم تسليم المشاريع",
          ],
          metric: "4.8 ساعات",
          metricLabel: "توفير في وقت تأهيل كل عميل جديد",
        },
        {
          id: "consultants",
          title: "الاستشاريون والشركات المتخصصة",
          badge: "للمحترفين والمكاتب الخاصة",
          description:
            "استقبال استفسارات العملاء فوراً، وجدولة جلسات التعارف آلياً، ومتابعة عروض الأسعار خطوة بخطوة دون إهدار وقتك الثمين.",
          capabilities: [
            "نماذج استلام استفسارات فائقة السرعة",
            "تذكيرات متابعة آلية لعروض الأسعار",
            "تتبع فتح العروض وتحديد موعد الإغلاق",
          ],
          metric: "100%",
          metricLabel: "معدل التقاط ومتابعة الاستفسارات الواردة",
        },
        {
          id: "businesses",
          title: "الشركات سريعة النمو",
          badge: "توسع وسرعة استجابة",
          description:
            "ربط الحملات الإعلانية بممثلي المبيعات مع إشعارات فورية، وتقييم جودة العملاء آلياً، ووضوح كامل لمراحل مسار البيع.",
          capabilities: [
            "مزامنة لحظية مع أنظمة CRM والـ Webhooks",
            "توزيع عادل وذكي للعملاء على الموظفين",
            "اكتشاف نقاط الاختناق في مسار الصفقات",
          ],
          metric: "3.2x",
          metricLabel: "سرعة استجابة مضاعفة للعملاء الجدد",
        },
        {
          id: "operations",
          title: "فرق العمليات التشغيلية",
          badge: "هيكلة الإجراءات",
          description:
            "توحيد الإجراءات المتكررة بين الأقسام، وفرض اتفاقيات مستوى الخدمة (SLA)، وإنهاء النسخ اليدوي بين الأدوات المنفصلة.",
          capabilities: [
            "منشئ قواعد مرئي للمحفزات والإجراءات",
            "تنبيهات استباقية قبل تأخر أي معاملة",
            "سجل تدقيق كامل وشامل لكل خطوة تمت",
          ],
          metric: "99.4%",
          metricLabel: "موثوقية واستقرار في تنفيذ العمليات المؤتمتة",
        },
      ],
    },
    problemSolution: {
      eyebrow: "02 / التحول التشغيلي",
      eyebrowTag: "نموذج التغيير",
      title: "من فوضى الجداول اليدوية إلى",
      titleItalic: "تدفق مؤتمت وسريع للصفقات.",
      description:
        "المشكلة في إدارة العملاء ليست قلة الأدوات، بل تشتتها وانفصالها. شاهد كيف تستبدل نكسا فلو الهدر اليدوي بإجراءات مؤتمتة ومحكمة.",
      beforeLabel: "01 / قبل نكسا فلو",
      beforeTitle: "هدر يدوي مستمر وفرص بيعية ضائعة.",
      beforeItems: [
        "عملاء ينتظرون في البريد الوارد لأكثر من 4 ساعات دون رد",
        "جداول إكسل متعددة تفقد مزامنتها يوماً بعد يوم",
        "الموظفون ينسخون البيانات يدوياً بين النماذج والأنظمة",
        "غياب الرؤية حول التزام الفريق بمواعيد الرد والخدمة",
      ],
      afterLabel: "02 / بعد نكسا فلو",
      afterTitle: "توزيع فوري وتنفيذ مؤتمت دقيق.",
      afterItems: [
        "استلام بيانات العميل وتعيين الممثل خلال أقل من 60 ثانية",
        "لوحة معلومات مركزية واحدة ترصد سرعة كل صفقة",
        "سلاسل متابعة آلية ترسل التذكيرات بمجرد فتح العرض",
        "إشعارات فورية عبر واتساب وسلاك عند أي تأخير",
      ],
    },
    features: {
      eyebrow: "03 / الركائز الأساسية",
      eyebrowTag: "المعمارية الجوهرية",
      title: "أربعة محركات تشغيلية متكاملة",
      titleItalic: "في بيئة عمل موحدة وسريعة.",
      description:
        "صُممت كل ركيزة للقضاء على نقاط الاحتكاك بين وصول اهتمام العميل وتحقيق الصفقة وإنجاز الخدمة بنجاح.",
      pillars: [
        {
          id: "routing",
          number: "01",
          tag: "سرعة الاستجابة",
          title: "استقبال لحظي وتوزيع ذكي للعملاء المحتملين",
          description:
            "استقبل طلبات العملاء من الإعلانات والنماذج البريدية فورياً. قيّم الميزانية والنشاط والأولوية تلقائياً قبل تحويل العميل إلى الموظف المناسب وفق جدول العمل وتوزيع الطاقة الاستيعابية.",
          bulletPoints: [
            "توزيع آلي فوري خلال ثوانٍ معدودة",
            "مراعاة ساعات العمل والمناطق الزمنية للموظفين",
            "تنبيهات فورية للموظف عبر رسائل واتساب وسلاك",
          ],
          metricValue: "1.8 دقيقة",
          metricLabel: "متوسط وقت الرد بعد أن كان 4.2 ساعات",
        },
        {
          id: "engine",
          number: "02",
          tag: "منطق مرئي بدون كود",
          title: "محرك أتمتة الإجراءات المرئي والشروط المتعددة",
          description:
            "ابنِ مسارات عمل مرنة وشروطاً متسلسلة خلال دقائق دون الحاجة لكتابة كود. فعّل تذكيرات المتابعة الآلية، وانتقال الصفقات التلقائي بين المراحل، وتمرير المهام بين الأقسام.",
          bulletPoints: [
            "منشئ بصري سهل لقواعد التحفيز والتنفيذ",
            "تحديد تأخيرات زمنية وشروط خمول دقيقة",
            "نقل تلقائي للصفقة عند استلام الدفعة أو توقيع العرض",
          ],
          metricValue: "14 ساعة",
          metricLabel: "توفير أسبوعي من المهام الروتينية لكل موظف",
        },
        {
          id: "collaboration",
          number: "03",
          tag: "ضمان اتفاقيات الخدمة",
          title: "وضوح المسؤوليات وضمان اتفاقيات مستوى الخدمة (SLA)",
          description:
            "امنع تسرب الصفقات الكبرى وضياعها في الزحام. حدد فترات الاستجابة القصوى، ودع نكسا فلو تصعّد المعاملات الخاملة إلى مديري المبيعات قبل فوات الأوان.",
          bulletPoints: [
            "تنبيهات استباقية باللون البرتقالي قبل انتهاء مهلة الرد",
            "سجل تدقيق يوضح انتقال المسؤولية وتوقيت كل خطوة",
            "صلاحيات وصول دقيقة ومخصصة لكل عضو في الفريق",
          ],
          metricValue: "99.8%",
          metricLabel: "نسبة الالتزام باتفاقيات سرعة الخدمة المحققة",
        },
        {
          id: "telemetry",
          number: "04",
          tag: "شفافية مسار المبيعات",
          title: "تحليلات الأداء ومعدلات تحويل كل مرحلة بيعية",
          description:
            "احصل على رؤية شديدة الوضوح للمراحل التي تتعطل فيها الصفقات وأداء الموظفين المتميزين. راقب سرعة الانتقال بين المراحل ونقاط الانسحاب عبر بيانات رقمية حية.",
          bulletPoints: [
            "تتبع فوري لمعدل تحويل الصفقات بين المراحل",
            "مخططات لحجم العمل وتوزيع الصفقات بين الممثلين",
            "تقارير جاهزة للتصدير والمشاركة مع الإدارة والعملاء",
          ],
          metricValue: "+32%",
          metricLabel: "ارتفاع في نسبة تحويل العروض إلى صفقات رابحة",
        },
      ],
    },
    walkthrough: {
      eyebrow: "04 / مساحة التجربة الحية",
      eyebrowTag: "محاكاة تفاعلية مباشرة",
      title: "اختبر المحرك بنفسك وبشكل حي.",
      titleItalic: "إدارة تفاعلية متكاملة للعملاء.",
      description:
        "جرّب بيئة عمل نكسا فلو الحقيقية بالأسفل. بدّل بين تصنيفات العملاء، وفحص المراحل التشغيلية، واختبر تفعيل وإيقاف قواعد الأتمتة.",
      tabLeads: "مسار العملاء المباشر",
      tabAutomations: "محرك الأتمتة",
      tabWorkflows: "إعداد القواعد",
      filterLabel: "تصفية حسب المرحلة:",
      allStages: "جميع المراحل",
      searchPlaceholder: "ابحث عن اسم العميل أو الشركة...",
      activeRuleCount: "القواعد المفعلة: 3 من 4",
      table: {
        contact: "جهة الاتصال والشركة",
        company: "الشركة",
        stage: "المرحلة",
        dealValue: "قيمة الصفقة",
        assignedRep: "الموظف المسؤول",
        lastContact: "آخر تواصل",
        score: "التقييم",
      },
      automationsHeader: {
        title: "مسارات الأتمتة النشطة",
        description: "غيّر حالة القواعد أدناه لمشاهدة تأثيرها التفاعلي فورياً.",
        trigger: "حدث التحفيز",
        action: "الإجراءات المنفذة",
        executions: "مرات التشغيل",
        successRate: "نسبة النجاح",
        status: "الحالة",
        enabled: "مفعل",
        paused: "موقف مؤقتاً",
      },
    },
    howItWorks: {
      eyebrow: "05 / خطوات التنفيذ",
      eyebrowTag: "جدول الإطلاق",
      title: "من الإعداد الأولي إلى الأتمتة",
      titleItalic: "الكاملة في ثلاث خطوات بسيطة.",
      description:
        "بدون الحاجة لأي مهارات برمجية. اربط قنوات استقطاب العملاء الحالية، حدد قواعد التوزيع، ودع النظام يدير العمليات بدقة.",
      steps: [
        {
          step: "01",
          title: "ربط قنوات استقطاب العملاء",
          description:
            "اربط نماذج الاتصال على موقعك، أو إعلانات ميتا (Meta Ads)، أو روابط الـ Webhook مع نكسا فلو بنقرة واحدة.",
          tag: "5 دقائق فقط",
        },
        {
          step: "02",
          title: "تحديد قواعد التوزيع واتفاقيات الخدمة",
          description:
            "حدد شروط توزيع العملاء بحسب قيمة الصفقة أو التخصص، واضبط أوقات الاستجابة القصوى وسياسات التصعيد.",
          tag: "بدون كود برمجي",
        },
        {
          step: "03",
          title: "انطلاق العمليات المؤتمتة",
          description:
            "شاهد استلام العملاء، وتقييمهم، وتعيينهم للموظفين ومتابعتهم فورياً مع إشعارات مباشرة للممثلين والعملاء.",
          tag: "أثر مباشر فوري",
        },
      ],
    },
    pricing: {
      eyebrow: "06 / باقات الاشتراك",
      eyebrowTag: "تسعير توضيحي للمحفظة",
      title: "خطط واضحة تتناسب تماماً مع",
      titleItalic: "سرعة نمو عمليات شركتك.",
      description:
        "باقات نموذجية شفافة مخصصة للاستشاريين المستقلين، والوكالات الرقمية المتنامية، وفرق العمليات المتقدمة.",
      monthly: "شهري",
      annual: "سنوي",
      annualDiscount: "(خصم 20%)",
      perUserMonth: "/شهرياً",
      annualPerUserMonth: "/شهرياً (بالدفع السنوي)",
      annualBilled: "/سنوياً إجمالي",
      portfolioNotice:
        "جميع باقات الاشتراك والأسعار المعروضة هي نماذج محاكاة توضيحية تم إنشاؤها لتقديمها ضمن محفظة الأعمال على منصة مستقل. لا توجد عمليات فوترة أو دفع حقيقية.",
      portfolioNoticeBold: "تنويه توضيحي:",
      plans: [
        {
          id: "starter",
          name: "الباقة الأساسية",
          badge: "للمستقلين وأصحاب الأعمال الفردية",
          description:
            "إدارة أساسية لمسار الصفقات وأتمتة تمهيدية للمستقلين والمشاريع الفردية.",
          priceMonthly: 0,
          priceYearly: 0,
          period: "مجاناً دائماً",
          highlight: false,
          ctaText: "استكشف الباقة الأساسية",
          features: [
            "بيئة مساحة عمل واحدة",
            "حتى 250 عميلاً محتملاً نشطاً",
            "3 مسارات أتمتة تشغيلية نشطة",
            "لوحة متابعة مراحل العملاء الأساسية",
            "إشعارات فورية عبر البريد الإلكتروني",
            "دعم مجتمعي خلال 48 ساعة",
          ],
        },
        {
          id: "growth",
          name: "باقة النمو",
          badge: "الأكثر طلباً لفرق العمل والوكالات",
          description:
            "محرك أتمتة متقدم وإدارة تعاونية للعملاء صُممت للشركات والوكالات المتنامية.",
          priceMonthly: 19,
          priceYearly: 15,
          period: "لكل مستخدم / شهرياً",
          highlight: true,
          ctaText: "استكشف العرض التجريبي",
          features: [
            "كل ما في الباقة الأساسية، بالإضافة إلى:",
            "حتى 2,500 عميلاً محتملاً نشطاً",
            "عدد غير محدود من مسارات الأتمتة",
            "توزيع المهام بين أعضاء الفريق واتفاقيات SLA",
            "منشئ قواعد مرئي للمحفزات والإجراءات الشرطية",
            "منطق تقييم مخصص لنقاط العملاء",
            "تحليلات تفصيلية موسعة لسرعة إغلاق الصفقات",
            "دعم فني ذو أولوية خلال 4 ساعات",
          ],
        },
        {
          id: "business",
          name: "باقة الشركات",
          badge: "لإدارة العمليات المتقدمة",
          description:
            "حوكمة متعددة لمساحات العمل، وتدفق عمليات عالي الكثافة، ورقابة تشغيلية شاملة.",
          priceMonthly: 49,
          priceYearly: 39,
          period: "لكل مستخدم / شهرياً",
          highlight: false,
          ctaText: "استكشف تجربة الشركات",
          features: [
            "كل ما في باقة النمو، بالإضافة إلى:",
            "عزل تام لمساحات عمل كل عميل أو فرع",
            "عدد غير محدود من العملاء والسجلات",
            "شروط تفرع متقدمة وتكامل Webhooks مخصص",
            "صلاحيات مستندة للأدوار وسجلات تدقيق كاملة",
            "سياسات تصعيد واتفاقيات SLA مخصصة بدقة",
            "تصدير شامل لكافة البيانات والتحليلات الخام",
            "جلسة تعريفية وتأهيلية مخصصة للفريق",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "07 / الإيضاحات",
      eyebrowTag: "الأسئلة الأكثر شيوعاً",
      title: "كل ما تود معرفته",
      titleItalic: "حول منصة نكسا فلو.",
      description:
        "إجابات واضحة ودقيقة حول معمارية المنصة، وإمكانيات التخصيص، وطبيعة هذا النموذج المعروض.",
      items: [
        {
          question: "ما هي منصة نكسا فلو؟",
          answer:
            "نكسا فلو هي مفهوم لمنصة أتمتة مسارات العمل الموجهة للشركات (B2B)، تهدف إلى دمج استقبال العملاء المحتملين، وتوزيع المهام آلياً، والتعاون الجماعي في مساحة عمل واحدة سلسة. هدفها القضاء على تشتت الجداول اليدوية والأدوات المنفصلة حتى يركز فريقك على إغلاق الصفقات وتحقيق الأرباح.",
        },
        {
          question: "من هي الفئات المستهدفة للمنصة؟",
          answer:
            "تم تصميم المفهوم خصيصاً للوكالات الرقمية والتسويقية، والاستشاريين، والشركات الناشئة والمتوسطة سريعة النمو، وفرق العمليات التي تدير تدفقات مستمرة من العملاء أو تسليم المشاريع بين أقسام متعددة.",
        },
        {
          question: "هل يمكنني تخصيص مسارات العمل وقواعد العمليات؟",
          answer:
            "نعم بالتأكيد. تتضمن المنصة منشئاً بصرياً يتيح لك ضبط المحفزات (مثل استلام عميل من نموذج إعلاني أو إشعار Webhook) وربطها بمرشحات شرطية وإجراءات متسلسلة (مثل تقييم العميل، وتعيين الممثل، وإرسال تنبيهات واتساب وسلاك).",
        },
        {
          question: "هل يتطلب استخدام نكسا فلو خبرة برمجية؟",
          answer:
            "لا، تم بناء المنصة بواجهة خالية من الكود تماماً (No-Code). يمكن لفرق التسويق والمبيعات بناء المسارات واختبارها وإدارتها بسهولة دون الحاجة لكتابة أي سطر برمجي أو الاعتماد على مهندسي البرمجيات.",
        },
        {
          question: "هل هذا موقع لمنتج تجاري فعلي حالياً؟",
          answer:
            "هذا الموقع هو نموذج عرض احترافي تم تطويره وهندسته بواسطة علي (مطور ومصمم واجهات أمامية) لعرض جودة العمل ضمن محفظة خدماته على منصة مستقل. كافة لوحات التحكم والبيانات والأسعار المعروضة هي مكونات محاكاة تفاعلية حية تثبت الدقة البرمجية والحرفية العالية في معمارية Next.js.",
        },
        {
          question: "كيف تم بناء وهندسة صفحة الهبوط هذه تقنياً؟",
          answer:
            "تم بناء هذا المشروع بأحدث معايير الويب: Next.js 16 مع نظام App Router، ولغة TypeScript مع فحص نمطي صارم (Strict Typing)، ومكتبة Tailwind CSS v4، وأيقونات Lucide React، مع دعم كامل للغتين العربية (RTL) والإنجليزية (LTR)، وتوافق تام مع متطلبات إمكانية الوصول والتصفح عبر الهواتف الذكية.",
        },
      ],
    },
    finalCta: {
      eyebrow: "08 / الخلاصة",
      eyebrowTag: "ابدأ اليوم بدون تأخير",
      titleLine1: "افسح المجال للعمل الحقيقي الذي يدفع",
      titleLine2: "شركتك نحو النمو المستمر.",
      description:
        "استكشف طريقة أكثر ذكاءً لتنظيم عملائك، ومسارات عملياتك، وتنسيق فريقك. اختبر بيئة المحاكاة التفاعلية الآن وتخلص من الإهدار اليدوي.",
      primaryCta: "استكشف العرض التجريبي",
      secondaryCta: "استعراض المنصة مباشرة",
      tags: ["وصول فوري تفاعلي", "بدون أي تعقيدات تسجيل", "بيانات محاكاة تشغيلية حقيقية"],
    },
    builtByAli: {
      eyebrow: "09 / الحرفية البرمجية",
      eyebrowTag: "تطوير وهندسة: علي",
      titleLine1: "هندسة وتطوير: علي.",
      titleLine2: "متاح لتنفيذ مشروعك التجاري القادم.",
      description:
        "أبني صفحات هبوط وتطبيقات ويب تجارية عالية التحويل للشركات الخليجية والناشئة، مصممة لتحويل زوار الإعلانات إلى عملاء دائمين. كود نظيف بمعمارية Next.js App Router و TypeScript، تجربة مستخدم سريعة متوافقة مع الجوال، وتنفيذ مخصص ودقيق.",
      whatsappLabel: "واتساب: 9647700683686+",
      mostaqlLabel: "ملفي الشخصي على مستقل: [my URL]",
      highlights: [
        "صفحات هبوط موجهة لمضاعفة التحويل",
        "معمارية Next.js و Tailwind فائقة السرعة",
        "خبرة عميقة بمتطلبات السوق الخليجي والعربي",
      ],
    },
    footer: {
      description:
        "عمل يدوي أقل. صفقات ومبيعات أكثر. تساعد نكسا فلو الفرق الطموحة على تنظيم العملاء، وأتمتة المهام المتكررة، واكتساب رؤى تشغيلية قابلة للتنفيذ من بيئة عمل موحدة.",
      portfolioBadge: "مشروع عرض لمحفظة الأعمال",
      portfolioNotice:
        "تم تطويره لتقديم الجودة البرمجية والتصميمية للعملاء عبر منصة مستقل. مبني بـ Next.js App Router ومعمارية برمجية مخصصة.",
      colProduct: "01 / المنتج",
      colSolutions: "02 / الحلول التشغيلية",
      colLegal: "03 / الإشعارات القانونية",
      copyright: "© 2026 مفهوم نكسا فلو التجريبي. نموذج عرض لمحفظة الأعمال على منصة مستقل.",
      disclaimer: "جميع الحقوق محفوظة · نموذج تجريبي",
    },
    modal: {
      eyebrow: "عرض توضيحي للمحفظة",
      modeAuth: "معاينة تسجيل الدخول",
      modeSandbox: "وضع التجربة الحية",
      planPrefix: "الباقة",
      title: "العرض التجريبي التفاعلي لمنصة نكسا فلو",
      description:
        "هذا نموذج محاكاة تفاعلي مبني لعرض التصميم التجاري عالي الجودة لواجهات أنظمة SaaS، وتجربة المستخدم لإدارة العملاء. لا يتطلب تسجيل حساب فعلي.",
      noticeTitle: "محاكاة حية لعرض المحفظة",
      noticeBody:
        "يمكنك التفاعل مباشرة مع لوحة مسار العملاء، وتغيير فلاتر المراحل، وتشغيل وإيقاف قواعد الأتمتة في مساحة التجربة التفاعلية في هذه الصفحة.",
      personaLabel: "نوع النشاط التجاري للمحاكاة",
      personas: [
        { id: "agencies", label: "وكالة رقمية" },
        { id: "consultants", label: "مكتب استشاري" },
        { id: "businesses", label: "شركة سريعة النمو" },
        { id: "operations", label: "فريق عمليات" },
      ],
      workspaceLabel: "اسم مساحة العمل التجريبية",
      ctaPrimary: "استكشف مساحة التجربة التفاعلية",
      ctaClose: "إغلاق",
      simulatedDisclaimer: "جلسة محاكاة تجريبية · لا يتم تخزين أي بيانات شخصية",
    },
  },
};
