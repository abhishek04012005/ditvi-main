import Contact from '../../component/contact/Contact';
import type { Metadata } from "next";
import env from "../../config/env";


export const metadata: Metadata = {
  title: "Contact Us - Ditvi Foundation | Get Involved in Social Change",
  description: "Connect with Ditvi Foundation to learn about volunteering, partnerships, and how you can contribute to our community development initiatives. We'd love to hear from you!",
  keywords: [
    "contact Ditvi Foundation",
    "volunteer opportunities",
    "NGO partnerships",
    "social impact collaboration",
    "community service",
    "donate to charity",
    "social work",
    "get involved",
    "community outreach",
    "support NGO",
    "social development",
    "charitable giving",
    "make a difference",
    "community engagement",
    "social responsibility"
  ],
  authors: [{ name: "Ditvi Foundation", url: "https://ditvi.org/contact" }],
  creator: "Ditvi Foundation",
  publisher: "Ditvi Foundation",
  openGraph: {
    type: "website",
    siteName: "Ditvi Foundation",
    title: "Connect with Ditvi Foundation - Let's Create Change Together",
    description: "Reach out to learn about volunteering, partnerships, and how you can contribute to our community development initiatives.",
    url: "https://ditvifoundation.org/contact",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Ditvi Foundation",
        type: "image/jpeg",
      },
      {
        url: "/contact-og-square.jpg",
        width: 600,
        height: 600,
        alt: "Get in Touch with Ditvi Foundation",
        type: "image/jpeg",
      }
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect with Ditvi Foundation",
    description: "Join us in making a difference. Learn about volunteering, partnerships, and how you can contribute to positive social change.",
    site: "@DitviFdn",
    creator: "@DitviFdn",
    images: {
      url: "/contact-twitter-card.jpg",
      alt: "Contact Ditvi Foundation",
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
    canonical: "https://ditvifoundation.org/contact",
    languages: {
      'en-US': 'https://ditvi.org/contact',
      'hi-IN': 'https://ditvi.org/hi/contact'
    },
  },
  category: "Contact",
  classification: "Non-Profit Organization",
  verification: {
    google: env.googleVerification,
  },
  other: {
    "og:type": "website",
    "og:site_name": "Ditvi Foundation Contact",
    "twitter:label1": "Response Time",
    "twitter:data1": "Within 24 hours",
  },
};

export default function ContactPage() {
  return <Contact isFullPage />;
}