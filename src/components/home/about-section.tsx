import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section className="bg-muted/40 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            About Us
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/images/about-us.jpg"
              alt="Inside an Al-Qasim Switch Gear control panel, showing wiring and control components"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="rounded-xl object-cover"
            />
          </div>

          <div>
            <p className="text-base text-muted-foreground sm:text-lg">
              Al-Qasim Switch Gear and Engineering Services manufactures and
              installs switchgear and control panels for industrial and
              commercial sites. We design, build, and install every panel
              ourselves, led by our CEO, {siteConfig.ceo.name}.
            </p>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Our work covers low voltage distribution panels, main LT
              panels, automatic changeover systems, power factor correction,
              and PLC based control panels. On most projects we handle the
              job from initial design through to wiring, testing, and final
              installation, so the same team is responsible for it from
              start to finish.
            </p>
            <Button asChild size="lg" className="mt-6 h-11 px-6">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
