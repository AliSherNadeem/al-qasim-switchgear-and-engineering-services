import { products } from "@/lib/products";

// Set NEXT_PUBLIC_SITE_URL to the real production domain when deploying.
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  name: "Al-Qasim Switch Gear and Engineering Services",
  nameLines: ["Al-Qasim Switch Gear", "and Engineering Services"] as const,
  description:
    "Al-Qasim Switch Gear and Engineering Services designs and manufactures reliable switchgear and electrical engineering solutions for industrial and commercial projects.",
  phone: {
    display: "0319 1247525",
    href: "tel:+923191247525",
  },
  address:
    "Multan road opposite to Bloom park society, Shorkot City, District Jhang.",
  ceo: {
    title: "CEO",
    name: "Engineer Sarfraz Ahmad",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/923001234567",
    tiktok: "https://www.tiktok.com",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "#" },
  { label: "Contact Us", href: "/contact" },
];

// Items without a real page yet use "#" as a static placeholder href,
// per instruction not to create new routes for these until content exists.
export const footerNav = {
  links: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Vision / Mission / Quality Policy", href: "#" },
    { label: "Valuable Clients", href: "#" },
    { label: "Certification", href: "#" },
    { label: "Contact Us", href: "/contact" },
    { label: "Feedback Form", href: "#" },
  ] satisfies NavItem[],
  products: products.map((product) => ({
    label: product.name,
    href: "#",
  })) satisfies NavItem[],
} as const;
