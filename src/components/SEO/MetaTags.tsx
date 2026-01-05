import { Metadata } from "next";

export interface MetaTagsProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

const baseUrl = "https://www.arieshenderson.com";
const defaultOgImage = `${baseUrl}/images/og-default.jpg`;
const titleTemplate = " | GetReal Buyer Agents Las Vegas";

export function generateMetadata({
  title,
  description,
  canonical,
  ogImage = defaultOgImage,
  ogType = "website",
  noIndex = false,
  keywords = [],
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}: MetaTagsProps): Metadata {
  // Ensure title doesn't exceed 60 characters
  const fullTitle =
    title.length + titleTemplate.length <= 60
      ? `${title}${titleTemplate}`
      : title;

  // Ensure description doesn't exceed 155 characters
  const metaDescription =
    description.length <= 155 ? description : description.substring(0, 152) + "...";

  const ogTitleFinal = ogTitle || fullTitle;
  const ogDescFinal = ogDescription || metaDescription;
  const twitterTitleFinal = twitterTitle || fullTitle;
  const twitterDescFinal = twitterDescription || metaDescription;

  return {
    title: fullTitle,
    description: metaDescription,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
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
      canonical: canonical.startsWith("http")
        ? canonical
        : `${baseUrl}${canonical.startsWith("/") ? canonical : `/${canonical}`}`,
    },
    openGraph: {
      title: ogTitleFinal,
      description: ogDescFinal,
      url: canonical.startsWith("http")
        ? canonical
        : `${baseUrl}${canonical.startsWith("/") ? canonical : `/${canonical}`}`,
      siteName: "GetReal Buyer Agents",
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: ogTitleFinal,
        },
      ],
      locale: "en_US",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitleFinal,
      description: twitterDescFinal,
      images: [ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`],
    },
  };
}
