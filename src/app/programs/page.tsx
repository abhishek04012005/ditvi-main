import Programs from '../../component/programs/Programs';
import { Metadata } from "next";
import env from '../../config/env'

export const metadata: Metadata = {
  title: "Our Programs - Ditvi Foundation | Creating Sustainable Community Impact",
  description:
    "Explore Ditvi Foundation's transformative programs in education, healthcare, sustainability, and community development. Join our mission to create lasting positive change.",
  keywords:
    "community programs, educational initiatives, sustainable development, healthcare programs, women empowerment, skill development, NGO projects, social welfare, rural development, youth education",
  openGraph: {
    title: "Impactful Programs by Ditvi Foundation - Building Stronger Communities",
    description:
      "Discover our diverse range of programs focused on education, healthcare, sustainability, and community empowerment. Make a difference with us.",
    url: "https://ditvifoundation.org/programs",
    siteName: "Ditvi Foundation",
    images: [
      {
        url: "/programs-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ditvi Foundation Programs Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transformative Programs by Ditvi Foundation",
    description:
      "From education to healthcare, our programs create lasting impact in communities. Join us in building a better future.",
    images: ["/programs-og-image.jpg"],
    creator: "@DitviFdn",
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
    canonical: "https://ditvifoundation.org/programs",
  },
  authors: [{ name: "Ditvi Foundation" }],
  category: "NGO Programs",
  applicationName: "Ditvi Foundation Website",
  verification: {
    google: env.googleVerification,
  },
  other: {
    "og:type": "website",
    "og:site_name": "Ditvi Foundation Programs",
    "twitter:data1": "10+ Active Programs",
    "twitter:label1": "Program Coverage",
  },
};

export default function ProgramsPage() {
  return <Programs isFullPage />;
}