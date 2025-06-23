import { notFound } from 'next/navigation';
import { blogsContent } from '../../../data/blog';
import BlogDetail from '../../../component/blog/BlogDetail';
import type { Metadata } from 'next';
import env from '../../../config/env';

type SearchParams = { [key: string]: string | string[] | undefined };

export async function generateStaticParams() {
  return blogsContent.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<SearchParams>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const blog = blogsContent.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog does not exist.',
    };
  }

  const imageUrl = typeof blog.image === 'string' ? blog.image : blog.image.src;

  return {
    title: `${blog.title} | Ditvi Foundation`,
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
      type: "article",
      siteName: "Ditvi Foundation",
      title: blog.title,
      description: blog.excerpt,
      url: `https://ditvi.org/blog/${blog.slug}`,
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
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
      },
    },
    alternates: {
      canonical: `https://ditvi.org/blog/${blog.slug}`,
    },
    verification: {
      google: env.googleVerification,
    },
  };
}

export default async function BlogDetailPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const blog = blogsContent.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return <BlogDetail blog={blog} />;
}
