import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { footerNav, siteConfig } from "@/lib/site-config";
import { socialLinks } from "@/lib/social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:flex lg:flex-row lg:flex-wrap lg:gap-x-24 lg:gap-y-10 lg:py-12">
        <div className="sm:col-span-2 lg:col-span-1 lg:max-w-xs lg:shrink-0">
          <Link href="/" className="flex flex-col items-start">
            <Image
              src="/logo.png?v=2"
              alt={siteConfig.name}
              width={128}
              height={128}
              className="size-16 shrink-0 sm:size-24 lg:size-32"
            />
            <span className="leading-tight font-black">
              {siteConfig.nameLines.map((line) => (
                <span key={line} className="block text-lg">
                  {line}
                </span>
              ))}
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-xs text-primary-foreground/80">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Footer links" className="lg:shrink-0">
          <h2 className="text-sm font-bold tracking-wide text-primary-foreground uppercase">
            Links
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {footerNav.links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer products" className="lg:shrink-0">
          <h2 className="text-sm font-bold tracking-wide text-primary-foreground uppercase">
            Products
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {footerNav.products.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:max-w-xs lg:shrink-0">
          <h2 className="text-sm font-bold tracking-wide text-primary-foreground uppercase">
            Contact
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/80">
            <li>
              <span className="block text-xs font-semibold tracking-wide text-primary-foreground/60 uppercase">
                {siteConfig.ceo.title}
              </span>
              {siteConfig.ceo.name}
            </li>
            <li>
              <a
                href={siteConfig.phone.href}
                className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.phone.display}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
          <div className="mt-5 -ml-2.5 flex items-center">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex size-11 items-center justify-center transition-opacity hover:opacity-80"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-primary-foreground/15">
        <Container className="flex items-center justify-center py-6 text-center text-sm text-primary-foreground/70">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
