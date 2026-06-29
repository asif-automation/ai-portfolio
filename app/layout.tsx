import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Asif Siddiqui — AI Automation Engineer",
  description:
    "AI Automation Engineer building intelligent systems, LLM-powered workflows, and enterprise automation pipelines.",
  keywords: [
    "AI Engineer",
    "Automation Engineer",
    "LangChain",
    "OpenAI",
    "Next.js",
    "Full Stack Developer",
    "ML Engineer",
  ],
  authors: [{ name: "Asif Siddiqui" }],
  creator: "Asif Siddiqui",
  openGraph: {
    title: "Asif Siddiqui — AI Automation Engineer",
    description: "Building intelligent systems that automate the future.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asif Siddiqui — AI Automation Engineer",
    description: "Building intelligent systems that automate the future.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body style={{ fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}