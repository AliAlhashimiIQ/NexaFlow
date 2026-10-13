"use client";

import { useState } from "react";
import { LanguageProvider } from "@/context/language-context";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { TrustAudience } from "./trust-audience";
import { ProblemSolution } from "./problem-solution";
import { Features } from "./features";
import { ProductWalkthrough } from "./product-walkthrough";
import { HowItWorks } from "./how-it-works";
import { Pricing } from "./pricing";
import { FAQ } from "./faq";
import { FinalCTA } from "./final-cta";
import { BuiltByAli } from "./built-by-ali";
import { Footer } from "./footer";
import { DemoModal } from "./demo-modal";

function LandingPageContent() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Growth");
  const [modalMode, setModalMode] = useState<"signup" | "signin">("signup");

  const handleOpenDemo = (
    plan = "Growth",
    mode: "signup" | "signin" = "signup"
  ) => {
    setSelectedPlan(plan);
    setModalMode(mode);
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  return (
    <>
      <Navbar onOpenDemo={handleOpenDemo} />
      <main id="main-content" className="flex-1">
        <Hero onOpenDemo={handleOpenDemo} />
        <TrustAudience />
        <ProblemSolution />
        <Features />
        <ProductWalkthrough />
        <HowItWorks />
        <Pricing onSelectPlan={(plan) => handleOpenDemo(plan, "signup")} />
        <FAQ />
        <FinalCTA onOpenDemo={handleOpenDemo} />
        <BuiltByAli />
      </main>
      <Footer />

      {/* Accessible Interactive Demo Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemo}
        defaultPlan={selectedPlan}
        mode={modalMode}
      />
    </>
  );
}

export function LandingPageClient() {
  return (
    <LanguageProvider>
      <LandingPageContent />
    </LanguageProvider>
  );
}
