import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { ThemeInit } from "@/components/ThemeInit";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = getSiteUrl();

const title = "Md Yousuf Ali · Principal Software Engineer";
const description =
  "Principal Software Engineer and Solution Architect with 15+ years of experience designing cloud architecture, distributed systems, and AI-driven automation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Md Yousuf Ali",
  },
  description,
  applicationName: "Md Yousuf Ali",
  authors: [{ name: "Md Yousuf Ali", url: siteUrl }],
  creator: "Md Yousuf Ali",
  publisher: "Md Yousuf Ali",
  keywords: [
    "Md Yousuf Ali",
    "Principal Software Engineer",
    "Solution Architect",
    "Cloud Architect",
    "Distributed Systems",
    "AI Automation",
    "AWS",
    "Next.js",
    "React",
    "Laravel",
    "Dhaka",
    "Bangladesh",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title,
    description:
      "Principal Software Engineer and Solution Architect specializing in cloud infrastructure, distributed systems, and AI automation.",
    type: "profile",
    url: "/",
    siteName: "Md Yousuf Ali",
    locale: "en_US",
    images: [
      {
        url: "/images/yousuf.jpg",
        width: 1011,
        height: 1024,
        alt: "Md Yousuf Ali — Principal Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Principal Software Engineer and Solution Architect specializing in cloud infrastructure, distributed systems, and AI automation.",
    images: ["/images/yousuf.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('yousuf-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})();",
          }}
        />
      </head>
      <body className="min-h-full antialiased">
        <ThemeInit />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
