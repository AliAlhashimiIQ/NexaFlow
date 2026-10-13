# NexaFlow — High-Converting B2B SaaS Landing Page

A production-quality, commercial landing page concept for **NexaFlow**, a fictional B2B workflow automation and lead operations platform. Engineered as a freelance portfolio piece by **Ali** to showcase conversion-focused frontend architecture for clients on Mostaql and direct Gulf business engagements.

---

## 1. What This Is

NexaFlow is designed to demonstrate how modern businesses eliminate fragmented spreadsheets and disjointed tools by consolidating inbound leads, automated routing, and cross-functional task operations into a single workspace.

Rather than a static mockup, the landing page includes an interactive client-side sandbox featuring:
- Live filterable lead pipeline records with real-time operational metrics
- Trigger-and-action automation status toggles
- Multi-tier demonstration pricing with monthly/annual calculations
- Fully accessible interactive demo modal with focus trapping and keyboard navigation

---

## 2. Design Decisions

This project deliberately avoids the generic "AI-template" aesthetic (purple gradients, rounded float cards, neon glow blobs):

- **Warm Editorial Color Palette**: Background in warm off-white (`#F6F4EF`) paired with deep ink (`#14120F`) and a single restrained accent—signal orange (`#FF5B1F`) used exclusively for CTAs and status highlights.
- **Typographic Balance**: High-contrast typography pairing an editorial display serif (`Fraunces`) for large headlines, `Geist Sans` for legible body text, and `Geist Mono` for structured data labels, badges, and financial metrics.
- **Architectural Hairline Structure**: Replaced rounded cards with crisp 1px hairline borders (`rgba(20, 18, 15, 0.15)`), asymmetric editorial column layouts, and numbered sections (`00` to `09`).
- **Dense, Realistic Mockups**: Full-width data tables, mono-formatted timestamps, realistic statuses (`Qualified`, `Proposal`, `Won`), and authentic workflow triggers instead of generic placeholder cards.
- **Accessibility & Focus Management**: Full keyboard navigation support, visible focus rings on interactive elements and FAQ accordions, skip-to-content navigation, and accessible modal dialogs with focus trapping.

---

## 3. Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Code Quality**: ESLint 9 & TypeScript Compiler (`tsc`)

---

## 4. How to Run Locally

### Prerequisites
- Node.js 18+ or Node.js 20+
- npm / pnpm / yarn

### Installation & Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Checks & Build
```bash
# Type check without emitting files
npx tsc --noEmit

# Lint check
npm run lint

# Production build
npm run build
```
