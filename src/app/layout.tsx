import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../component/navbar/Navbar";
import env from "../config/env";
import Footer from "../component/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ditvi.org"),
  title: {
    default: "Ditvi Foundation | NGO For Women Empowerment, Education, Environmental And Social Welfare",
    template: "%s | Ditvi Foundation",
  },
  description:
    "Ditvi Foundation drives positive social impact through community development, education, and sustainable initiatives. Join our mission to transform lives and build stronger communities.",
  keywords: [
    "NGO",
    "non-profit organization",
    "social impact",
    "community development",
    "charity foundation",
    "social change",
    "education initiatives",
    "sustainability projects",
    "community empowerment",
    "humanitarian aid",
    "volunteer opportunities",
    "social welfare",
    "charitable organization",
    "rural development",
    "environmental sustainability",
  ],
  authors: [{ name: "Ditvi Foundation", url: "https://ditvi.org/about" }],
  creator: "Ditvi Foundation",
  publisher: "Ditvi Foundation",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Ditvi Foundation",
    title: "Ditvi Foundation - Transform Lives Through Community Development",
    description:
      "Join Ditvi Foundation in creating lasting social change. We focus on education, sustainability, and community empowerment to build a better future.",
    url: "https://ditvi.org",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ditvi Foundation - Community Impact",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 600,
        height: 600,
        alt: "Ditvi Foundation Logo",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ditvi Foundation - Transforming Communities",
    description:
      "Discover how Ditvi Foundation is creating positive social impact through education and sustainable community development.",
    site: "@DitviFdn",
    creator: "@DitviFdn",
    images: {
      url: "/twitter-card.jpg",
      alt: "Ditvi Foundation Community Impact",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://ditvi.org",
    languages: {
      "en-US": "https://ditvi.org",
      "hi-IN": "https://ditvi.org/hi",
    },
  },
  category: "Non-Profit Organization",
  classification: "Social Development",
  verification: {
    google: env.googleVerification,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Ditvi Foundation",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
