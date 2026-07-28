import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
} from "@/components/icons/social-icons";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { name: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { name: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { name: "WhatsApp", href: siteConfig.social.whatsapp, Icon: WhatsappIcon },
];

export function TopBar() {
  return (
    <div className="bg-background">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="shrink-0 leading-tight font-black text-heading">
          {siteConfig.nameLines.map((line) => (
            <span key={line} className="block text-base sm:text-xl md:text-2xl lg:text-3xl">
              {line}
            </span>
          ))}
        </Link>

        <div className="flex items-center gap-4 text-secondary-foreground sm:gap-6">
          <div className="hidden items-center gap-4 text-sm font-medium md:flex">
            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.phone.display}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4" aria-hidden="true" />
              {siteConfig.address}
            </span>
          </div>

          <div className="flex items-center gap-3">
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
      </Container>
    </div>
  );
}
