"use client";

import { useEffect, useRef, useState, useId } from "react";
import { X, ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
  mode?: "signup" | "signin";
}

export function DemoModal({
  isOpen,
  onClose,
  defaultPlan = "Growth",
  mode = "signup",
}: DemoModalProps) {
  const { t, isRTL } = useLanguage();
  const [role, setRole] = useState("agencies");
  const [workspaceName, setWorkspaceName] = useState("Acme Growth Operations");
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const titleId = useId();
  const descId = useId();

  // Focus trapping and escape key management
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    const focusTimer = setTimeout(() => {
      if (dialogRef.current) {
        const firstFocusable = dialogRef.current.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }
    }, 50);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(focusTimer);
      if (previouslyFocusedElementRef.current) {
        previouslyFocusedElementRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLaunchDemo = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    const walkthrough = document.getElementById("walkthrough");
    walkthrough?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#14120F]/70 transition-opacity"
      />

      {/* Modal Window with Hairline Borders */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-lg bg-[#F6F4EF] p-6 sm:p-8 border border-[#14120F] rounded-none sm:rounded-xs z-10 text-left rtl:text-right shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label={isRTL ? "إغلاق النافذة" : "Close dialog"}
          className="absolute right-4 rtl:right-auto rtl:left-4 top-4 p-1.5 border border-[#14120F]/20 text-[#14120F]/60 hover:text-[#14120F] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F] rounded-xs"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 font-mono text-xs mb-3">
          <span className="border border-[#14120F]/20 bg-white px-2 py-0.5 text-[#14120F] uppercase font-bold text-[10px]">
            {t.modal.eyebrow} · {mode === "signin" ? t.modal.modeAuth : t.modal.modeSandbox}
          </span>
          <span className="text-[#14120F]/50">
            • {t.modal.planPrefix}: {defaultPlan}
          </span>
        </div>

        <h3
          id={titleId}
          className="font-display text-2xl sm:text-3xl font-normal text-[#14120F]"
        >
          {t.modal.title}
        </h3>
        <p id={descId} className="mt-1.5 text-xs text-[#14120F]/70 font-normal leading-relaxed">
          {t.modal.description}
        </p>

        {/* Portfolio Demonstration Notice */}
        <div className="mt-5 border border-[#14120F]/20 bg-white p-3.5 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#FF5B1F] font-bold text-[11px] uppercase">
            <span className="h-1.5 w-1.5 bg-[#FF5B1F]" />
            <span>{t.modal.noticeTitle}</span>
          </div>
          <p className="mt-1 text-[#14120F]/70 text-[11px] font-sans leading-normal">
            {t.modal.noticeBody}
          </p>
        </div>

        {/* Demo configuration form */}
        <form onSubmit={handleLaunchDemo} className="mt-5 space-y-4 font-mono text-xs">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#14120F]/70 mb-1.5 font-bold">
              {t.modal.personaLabel}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {t.modal.personas.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setRole(item.id)}
                  className={`border p-2 text-left rtl:text-right uppercase transition-colors text-[11px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F] rounded-xs ${
                    role === item.id
                      ? "border-[#14120F] bg-[#14120F] text-white font-bold"
                      : "border-[#14120F]/20 bg-white text-[#14120F]/70 hover:border-[#14120F]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="demo-workspace"
              className="block text-[11px] uppercase tracking-wider text-[#14120F]/70 mb-1.5 font-bold"
            >
              {t.modal.workspaceLabel}
            </label>
            <input
              id="demo-workspace"
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              className="w-full border border-[#14120F]/25 bg-white px-3 py-2 text-xs text-[#14120F] placeholder:text-[#14120F]/40 focus-visible:border-[#FF5B1F] focus-visible:ring-2 focus-visible:ring-[#FF5B1F] focus-visible:outline-none rounded-xs"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FF5B1F] py-3 px-4 font-mono text-xs uppercase tracking-wider font-semibold text-white hover:bg-[#e24e16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14120F] focus-visible:ring-offset-2 transition-colors rounded-xs"
            >
              <Play className="h-3 w-3 fill-white" />
              <span>{t.modal.ctaPrimary}</span>
              <ArrowRight className={`h-3.5 w-3.5 ${isRTL ? "rotate-180" : ""}`} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border border-[#14120F]/25 bg-white px-4 py-3 font-mono text-xs uppercase text-[#14120F] hover:bg-[#EFECE4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F] rounded-xs"
            >
              {t.modal.ctaClose}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center font-mono text-[10px] text-[#14120F]/50">
          {t.modal.simulatedDisclaimer}
        </div>
      </div>
    </div>
  );
}
