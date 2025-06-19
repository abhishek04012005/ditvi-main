import About from "../../component/about/About";
import env from "../../config/env";

export const metadata = {
  title:
    "About Us - Ditvi Foundation | Empowering Communities Through Social Change",
  description:
    "Discover how Ditvi Foundation creates lasting social impact through community development, education, and sustainable initiatives. Join us in making a difference.",
  keywords:
    "Ditvi Foundation, NGO, social impact, community development, education, sustainability, non-profit organization, charity, social change",
  openGraph: {
    title: "About Ditvi Foundation - Making a Difference Together",
    description:
      "Learn about our mission, values, and impact in transforming communities through sustainable development and education initiatives.",
    url: "https://ditvifoundation.org/about",
    siteName: "Ditvi Foundation",
    images: [
      {
        url: "/about-og-image.jpg", // Make sure to add this image
        width: 1200,
        height: 630,
        alt: "Ditvi Foundation Impact Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ditvi Foundation - Community Empowerment",
    description:
      "Join us in our mission to create positive social change through sustainable community development and education.",
    images: ["/about-og-image.jpg"], // Same image as OpenGraph
    creator: "@DitviFdn", // Add your Twitter handle
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
    },
  },
  alternates: {
    canonical: "https://ditvifoundation.org/about",
  },
  authors: [{ name: "Ditvi Foundation" }],
  category: "Non-Profit Organization",
  applicationName: "Ditvi Foundation Website",
  verification: {
    google: env.googleVerification, // Add your Google verification code
  },
};

export default function AboutPage() {
  return <About isFullPage />;
}
