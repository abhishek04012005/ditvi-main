import type { Metadata } from "next";
import Terms from '../../component/terms/Terms';
import env from "../../config/env";

export const metadata: Metadata = {
  metadataBase: new URL('https://ditvi.org'),
  title: {
    default: "Terms of Service - Ditvi Foundation | User Guidelines",
    template: "%s | Terms - Ditvi Foundation"
  },
  description: "Read our comprehensive terms of service to understand your rights and responsibilities when using Ditvi Foundation's services, donations, and community programs.",
  keywords: [
    "terms of service",
    "user agreement",
    "legal terms",
    "service guidelines",
    "donation terms",
    "NGO policies",
    "user rights",
    "privacy guidelines",
    "community rules",
    "service conditions",
    "legal agreement",
    "website terms",
    "foundation policies",
    "program guidelines",
    "usage terms"
  ],
  authors: [{ name: "Ditvi Foundation", url: "https://ditvi.org/terms" }],
  creator: "Ditvi Foundation",
  publisher: "Ditvi Foundation",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Ditvi Foundation",
    title: "Terms of Service - Ditvi Foundation Legal Guidelines",
    description: "Understand your rights and our commitments. Read our comprehensive terms for using Ditvi Foundation's services and participating in our programs.",
    url: "https://ditvi.org/terms",
    images: [
      {
        url: "/terms-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ditvi Foundation Terms of Service",
        type: "image/jpeg",
      },
      {
        url: "/terms-og-square.jpg",
        width: 600,
        height: 600,
        alt: "Ditvi Foundation Legal Guidelines",
        type: "image/jpeg",
      }
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Ditvi Foundation",
    description: "Important information about using our services and participating in our community programs.",
    site: "@DitviFdn",
    creator: "@DitviFdn",
    images: {
      url: "/terms-twitter-card.jpg",
      alt: "Ditvi Foundation Terms of Service",
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
    canonical: "https://ditvi.org/terms",
    languages: {
      'en-US': 'https://ditvi.org/terms',
    },
  },
  category: "Legal",
  classification: "Terms and Conditions",
  verification: {
    google: env.googleVerification,
  },
  other: {
    "og:type": "website",
    "og:site_name": "Ditvi Foundation Terms",
    "twitter:label1": "Last Updated",
    "twitter:data1": "June 19, 2025",
  },
};
export default function TermsPage() {
  return <Terms isFullPage />;
}