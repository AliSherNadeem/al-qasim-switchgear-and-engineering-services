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
            src="/logo.png?v=2"
            alt={siteConfig.name}
            width={128}
            height={128}
            priority
            className="h-11 w-11 shrink-0 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
          />
          <span className="font-heading leading-tight font-bold text-heading">
            {siteConfig.nameLines.map((line) => (
              <span
                key={line}
                className="block text-base sm:text-lg md:text-xl lg:text-2xl"
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

            <div className="flex items-center">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex size-11 items-center justify-center transition-opacity hover:opacity-80"
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
