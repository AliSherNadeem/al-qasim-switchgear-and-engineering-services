import { siteConfig } from "@/lib/site-config";
import type { Product } from "@/lib/products";

export function getProductJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((image) => `${siteConfig.url}${image.src}`),
    brand: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function getProductBreadcrumbJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteConfig.url}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${siteConfig.url}/products/${product.slug}`,
      },
    ],
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo.png`,
    logo: `${siteConfig.url}/logo.png`,
    telephone: siteConfig.phone.href.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Multan Road, opposite Bloom Park Society",
      addressLocality: "Shorkot City",
      addressRegion: "Jhang",
      addressCountry: "PK",
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
    ],
  };
}
