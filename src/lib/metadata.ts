import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
};

export function buildPageMetadata({
  title,
  description,
  path,
  image,
}: PageMetadataInput): Metadata {
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
