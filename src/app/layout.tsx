import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexaFlow — B2B Workflow Automation & Lead Operations",
  description:
    "Bring your leads, workflows, and team operations together in one workspace. NexaFlow helps modern teams eliminate busywork, streamline lead routing, and accelerate business growth.",
  keywords: [
    "workflow automation",
    "lead management",
    "B2B SaaS",
    "team collaboration",
    "pipeline analytics",
    "operations workspace",
  ],
  authors: [{ name: "NexaFlow Portfolio Concept" }],
  creator: "Ali",
  openGraph: {
    title: "NexaFlow — B2B Workflow Automation & Lead Operations",
    description:
      "Bring your leads, workflows, and team operations together in one workspace. Less busywork. More business.",
    type: "website",
    locale: "en_US",
    siteName: "NexaFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaFlow — Less busywork. More business.",
    description:
      "Bring your leads, workflows, and team operations together in one workspace.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable} ${ibmPlexSansArabic.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F6F4EF] text-[#14120F] selection:bg-[#FF5B1F] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FF5B1F] focus:text-white focus:font-mono focus:text-xs focus:font-bold focus:shadow-md focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
