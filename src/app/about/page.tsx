import Image from "next/image";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Learn about Al-Qasim Switch Gear Manufacturing and Engineering Services, based in Shorkot City, and the panels we manufacture and install.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        About Us
      </h1>

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

        <div className="flex flex-col gap-4 text-base text-muted-foreground sm:text-lg">
          <p>
            Al-Qasim Switch Gear Manufacturing and Engineering Services is an
            electrical and mechanical engineering company providing
            switchgear and control panel services to industrial and
            commercial sectors.
          </p>
          <p>
            Al-Qasim Switch Gear Manufacturing and Engineering Services is
            engaged in designing, manufacturing, erecting, testing, and
            commissioning switchgear and control panels for these projects.
            We design each panel around what a project actually needs, build
            it in our own workshop, and install it on site ourselves rather
            than passing the work on to someone else.
          </p>
          <p>
            Our work covers low voltage distribution panels, main LT panels,
            automatic changeover systems, power factor correction, MCC
            panels, and PLC based control panels. On most projects we handle
            the job from
            initial panel design through to wiring, testing, and final
            installation, so the same team is responsible for it from start
            to finish.
          </p>
          <p>
            The company is led by our CEO, {siteConfig.ceo.name}, who
            oversees the engineering and manufacturing side of every project
            we take on. We are based in Shorkot City, Punjab, and take on
            work across Pakistan.
          </p>
        </div>
      </div>
    </Container>
  );
}
