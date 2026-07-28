export const siteConfig = {
  name: "Al-Qasim Switch Gear and Engineering Services",
  nameLines: ["Al-Qasim Switch Gear", "and Engineering Services"] as const,
  description:
    "Al-Qasim Switch Gear and Engineering Services designs and manufactures reliable switchgear and electrical engineering solutions for industrial and commercial projects.",
  phone: {
    display: "+92 300 1234567",
    href: "tel:+923001234567",
  },
  address: "Street ABC, City",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/923001234567",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];
