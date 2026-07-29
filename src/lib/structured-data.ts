import { siteConfig } from "@/lib/site-config";

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
