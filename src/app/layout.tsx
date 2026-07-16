import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = getSiteUrl();

const title = "Md Yousuf Ali · Principal Software Engineer";
const description =
  "Principal Software Engineer and Solution Architect with 15+ years of experience in AI systems, cloud architecture, blockchain platforms, and enterprise software delivery.";

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
    "AI Engineer",
    "Cloud Architect",
    "AWS",
    "Next.js",
    "React",
    "Laravel",
    "Web3",
    "Blockchain",
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
      "Principal Software Engineer and Solution Architect specializing in AI, cloud, and scalable systems.",
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
      "Principal Software Engineer and Solution Architect specializing in AI, cloud, and scalable systems.",
    images: ["/images/yousuf.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
