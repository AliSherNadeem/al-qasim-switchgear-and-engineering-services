import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { socialLinks } from "@/lib/social-links";
import { siteConfig } from "@/lib/site-config";

export function TopBar() {
  return (
    <div className="bg-background">
      <Container className="flex flex-col items-start gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={128}
            height={128}
            priority
            className="h-11 w-11 shrink-0 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
          />
          <span className="leading-tight font-black text-heading">
            {siteConfig.nameLines.map((line) => (
              <span
                key={line}
                className="block text-base sm:text-xl md:text-2xl lg:text-3xl"
              >
                {line}
              </span>
            ))}
          </span>
        </Link>

        <div className="flex flex-col items-start gap-2 text-secondary-foreground sm:items-end">
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
            >
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.phone.display}
            </a>

            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="transition-opacity hover:opacity-80"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <span className="hidden items-start gap-1.5 text-right text-sm font-medium md:flex">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {siteConfig.address}
          </span>
        </div>
      </Container>
    </div>
  );
}
