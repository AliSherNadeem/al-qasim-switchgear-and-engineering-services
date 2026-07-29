import type { Metadata } from "next";
import { Phone, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Al-Qasim Switch Gear and Engineering Services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
        Reach out to us using the details below.
      </p>
      <dl className="mt-8 flex flex-col gap-4 text-base">
        <div className="flex items-center gap-3">
          <dt>
            <Phone className="size-5 text-primary" aria-hidden="true" />
            <span className="sr-only">Phone</span>
          </dt>
          <dd>
            <a
              href={siteConfig.phone.href}
              className="font-medium text-foreground hover:text-primary"
            >
              {siteConfig.phone.display}
            </a>
          </dd>
        </div>
        <div className="flex items-center gap-3">
          <dt>
            <MapPin className="size-5 text-primary" aria-hidden="true" />
            <span className="sr-only">Address</span>
          </dt>
          <dd className="font-medium text-foreground">{siteConfig.address}</dd>
        </div>
      </dl>
    </Container>
  );
}
