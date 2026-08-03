import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Al-Qasim Switch Gear Manufacturing and Engineering Services.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
        Reach out to us using the details below, or send a message using the
        form.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[2/3] w-full max-w-sm">
          <Image
            src="/images/contact-us.jpg"
            alt="Wiring inside an Al-Qasim Switch Gear control panel"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="rounded-xl object-cover"
          />
        </div>

        <div>
          <ContactForm />

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
              <dd className="font-medium text-foreground">
                {siteConfig.address}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Container>
  );
}
