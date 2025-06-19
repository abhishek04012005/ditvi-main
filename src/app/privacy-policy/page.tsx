import type { Metadata } from "next";
import PrivacyPolicy from '../../component/privacy-policy/PrivacyPolicy';
import env from '../../config/env'

export const metadata: Metadata = {
  metadataBase: new URL('https://ditvi.org'),
  title: {
    default: "Privacy Policy - Ditvi Foundation | Data Protection Guidelines",
    template: "%s | Privacy - Ditvi Foundation"
  },
  description: "Learn how Ditvi Foundation protects your personal information, ensures data security, and maintains transparency in our privacy practices. Read our comprehensive privacy policy.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "data security",
    "privacy guidelines",
    "GDPR compliance",
    "data rights",
    "information security",
    "user privacy",
    "data handling",
    "privacy practices",
    "NGO privacy",
    "data collection",
    "privacy terms",
    "data protection policy"
  ],
  authors: [{ name: "Ditvi Foundation", url: "https://ditvi.org/privacy-policy" }],
  creator: "Ditvi Foundation",
  publisher: "Ditvi Foundation",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Ditvi Foundation",
    title: "Privacy Policy - Protecting Your Data at Ditvi Foundation",
    description: "Understanding our commitment to protecting your privacy and personal information. Learn about our data handling practices.",
    url: "https://ditvi.org/privacy-policy",
    images: [
      {
        url: "/privacy-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ditvi Foundation Privacy Policy",
        type: "image/jpeg",
      },
      {
        url: "/privacy-og-square.jpg",
        width: 600,
        height: 600,
        alt: "Ditvi Foundation Data Protection",
        type: "image/jpeg",
      }
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Ditvi Foundation",
    description: "Learn about our commitment to protecting your privacy and personal information.",
    site: "@DitviFdn",
    creator: "@DitviFdn",
    images: {
      url: "/privacy-twitter-card.jpg",
      alt: "Ditvi Foundation Privacy Guidelines",
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
      "max-snippet": 200,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://ditvi.org/privacy-policy",
    languages: {
      'en-US': 'https://ditvi.org/privacy-policy',
    },
  },
  category: "Legal",
  classification: "Privacy Policy",
  verification: {
    google: env.googleVerification,
  },
  other: {
    "og:type": "website",
    "og:site_name": "Ditvi Foundation Privacy",
    "twitter:label1": "Last Updated",
    "twitter:data1": "June 19, 2025",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy isFullPage />;
}