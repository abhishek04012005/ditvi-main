import BlogList from "../../component/blog/BlogList";
import type { Metadata } from "next";
import env from "../../config/env";


export const metadata: Metadata = {
  title: "Blogs - Ditvi Foundation | Empower Social Change",
  description:
    "Explore inspiring stories, community initiatives, and practical insights for social impact on the Ditvi Foundation Blog. Discover volunteer stories, NGO updates, and innovative solutions driving positive change.",
  keywords: [
    "Ditvi Foundation blog",
    "social impact",
    "community development",
    "volunteer stories",
    "NGO updates",
    "social change",
    "non-profit blog",
    "sustainable development",
    "charitable work",
    "community engagement",
    "social innovation"
  ],
  authors: [{ name: "Ditvi Foundation", url: "https://ditvi.org/blog" }],
  creator: "Ditvi Foundation",
  publisher: "Ditvi Foundation",
  openGraph: {
    type: "article",
    siteName: "Ditvi Foundation Blog",
    title: "Ditvi Foundation Blog - Inspiring Social Change",
    description:
      "Read our latest articles on social impact, community initiatives, and volunteer success stories. Stay updated with innovative ideas and NGO news from Ditvi Foundation.",
    url: "https://ditvi.org/blog",
    images: [
      {
        url: "/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ditvi Foundation Blog",
        type: "image/jpeg"
      },
      {
        url: "/blog-og-square.jpg",
        width: 600,
        height: 600,
        alt: "Social Impact Stories",
        type: "image/jpeg"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ditvi Foundation Blog",
    description:
      "Dive into the latest social impact stories, community initiatives, and volunteer insights from Ditvi Foundation. Empower change through our inspiring blog.",
    site: "@DitviFdn",
    creator: "@DitviFdn",
    images: {
      url: "/blog-twitter-card.jpg",
      alt: "Ditvi Foundation Blog"
    }
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
      noimageindex: false
    }
  },
  alternates: {
    canonical: "https://ditvi.org/blog",
    languages: {
      "en-US": "https://ditvi.org/blog",
    }
  },
  category: "Blog",
  classification: "Non-Profit Organization",
  verification: {
    google: env.googleVerification // Ensure that 'env.googleVerification' is defined in your environment
  },
  other: {
    "og:type": "article",
    "og:site_name": "Ditvi Foundation Blog",
    "twitter:label1": "Latest Update",
    "twitter:data1": "New articles posted weekly"
  }
};



export default function Blog() {
  return <BlogList />;
}