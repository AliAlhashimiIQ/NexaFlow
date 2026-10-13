export interface LeadItem {
  id: string;
  name: string;
  company: string;
  email: string;
  stage: "New" | "Qualified" | "Contacted" | "Proposal" | "Won";
  value: string;
  owner: string;
  ownerAvatar: string;
  date: string;
  score: number;
}

export interface AutomationItem {
  id: string;
  title: string;
  description: string;
  trigger: string;
  action: string;
  runsCount: number;
  successRate: string;
  enabled: boolean;
  category: "Leads" | "Notifications" | "Routing" | "Sync";
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const AUDIENCE_CATEGORIES = [
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
];

export const DEMO_LEADS: LeadItem[] = [
  {
    id: "lead-1",
    name: "Marcus Vance",
    company: "Apex Media Group",
    email: "marcus@apexmedia.io",
    stage: "Qualified",
    value: "$14,500",
    owner: "Sarah Chen",
    ownerAvatar: "SC",
    date: "12 mins ago",
    score: 92,
  },
  {
    id: "lead-2",
    name: "Elena Rostova",
    company: "Nordic Ventures",
    email: "elena@nordicventures.co",
    stage: "Proposal",
    value: "$28,000",
    owner: "Alex Rivera",
    ownerAvatar: "AR",
    date: "1 hour ago",
    score: 88,
  },
  {
    id: "lead-3",
    name: "Devon Miller",
    company: "CloudScale Software",
    email: "devon@cloudscale.net",
    stage: "New",
    value: "$8,200",
    owner: "Sarah Chen",
    ownerAvatar: "SC",
    date: "2 hours ago",
    score: 76,
  },
  {
    id: "lead-4",
    name: "Priya Patel",
    company: "Synthetix Labs",
    email: "priya@synthetix.ai",
    stage: "Won",
    value: "$34,000",
    owner: "Jordan Reed",
    ownerAvatar: "JR",
    date: "Yesterday",
    score: 98,
  },
  {
    id: "lead-5",
    name: "Tomas Lindqvist",
    company: "Krona Logistics",
    email: "tomas@krona-logistics.se",
    stage: "Contacted",
    value: "$12,400",
    owner: "Alex Rivera",
    ownerAvatar: "AR",
    date: "2 days ago",
    score: 81,
  },
];

export const DEMO_AUTOMATIONS: AutomationItem[] = [
  {
    id: "auto-1",
    title: "Instant Inbound Lead Routing",
    description:
      "When a new contact form is submitted, parse company size, assign to available specialist, and ping Slack #sales-leads.",
    trigger: "New Form Webhook Submission",
    action: "Score Lead > Assign Specialist > Dispatch Alert",
    runsCount: 1248,
    successRate: "99.8%",
    enabled: true,
    category: "Leads",
  },
  {
    id: "auto-2",
    title: "High-Priority SLA Escalation",
    description:
      "If a qualified enterprise lead receives no follow-up within 30 minutes, alert team lead and mark deal as urgent.",
    trigger: "Lead Stage = Qualified & Idle > 30m",
    action: "Notify Manager > Escalate Priority",
    runsCount: 342,
    successRate: "100%",
    enabled: true,
    category: "Routing",
  },
  {
    id: "auto-3",
    title: "Proposal Follow-up Auto-Sequence",
    description:
      "Send tailored check-in email 48 hours after proposal link is viewed if no contract response is detected.",
    trigger: "Proposal Link Viewed + 48h Delay",
    action: "Verify Status > Send Sequence Step 2",
    runsCount: 512,
    successRate: "98.9%",
    enabled: true,
    category: "Notifications",
  },
  {
    id: "auto-4",
    title: "Closed-Won Milestone Handoff",
    description:
      "When stage changes to Won, create client workspace folder, generate onboarding checklist, and invite account rep.",
    trigger: "Stage Updated to 'Won'",
    action: "Provision Workspace > Assign Onboarding Tasks",
    runsCount: 189,
    successRate: "100%",
    enabled: false,
    category: "Sync",
  },
];

export const PRICING_PLANS = [
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
    ctaText: "Start with Starter",
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
];

export const FAQ_ITEMS: FAQItem[] = [
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
];
