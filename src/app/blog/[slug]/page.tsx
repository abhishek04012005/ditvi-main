import { notFound } from "next/navigation";
import { blogsContent } from "../../../data/blog";
import BlogDetail from "../../../component/blog/BlogDetail";
import type { Metadata } from "next";
import env from "../../../config/env";

type PageProps = {
  params: {
    slug: string;
  };
};

// ✅ Generate static paths
export async function generateStaticParams() {
  return blogsContent.map((blog) => ({ slug: blog.slug }));
}

// ✅ Generate dynamic metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const blog = blogsContent.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Ditvi Foundation",
      description: "The requested blog could not be found.",
    };
  }
  return {
    title: `${blog.title} | Ditvi Foundation | Get Involved in Social Change`,
    description: blog.excerpt,
    keywords: [
      "Ditvi Foundation blog",
      "social change",
      "volunteer opportunities",
      "NGO partnerships",
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
      "social responsibility",
    ],
    authors: [{ name: "Ditvi Foundation", url: "https://ditvi.org/blog" }],
    creator: "Ditvi Foundation",
    publisher: "Ditvi Foundation",
    openGraph: {
      type: "website",
      siteName: "Ditvi Foundation",
      title: blog.title,
      description: blog.excerpt,
      url: `https://ditvifoundation.org/blog/${blog.slug}`,
      images: [
        {
          url: typeof blog.image === "string" ? blog.image : blog.image.src,
          width: 1200,
          height: 630,
          alt: blog.title,
          type: "image/jpeg",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      site: "@DitviFdn",
      creator: "@DitviFdn",
      images: [
        {
          url: typeof blog.image === "string" ? blog.image : blog.image.src,
          alt: blog.title,
        },
      ],
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
      canonical: `https://ditvifoundation.org/blog/${blog.slug}`,
      languages: {
        "en-US": `https://ditvi.org/blog/${blog.slug}`,
      },
    },
    category: "Blog",
    classification: "Non-Profit Organization",
    verification: {
      google: env.googleVerification,
    },
    other: {
      "og:type": "website",
      "og:site_name": "Ditvi Foundation Blog",
      "twitter:label1": "Response Time",
      "twitter:data1": "Within 24 hours",
    },
  };
}

// Main page component that renders the blog detail
export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogsContent.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  // DO NOT include a manual <head> block here.
  // Next.js uses the metadata returned from generateMetadata.
  return <BlogDetail blog={blog} />;
}
