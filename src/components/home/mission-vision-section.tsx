import Image from "next/image";
import { Container } from "@/components/layout/container";

export function MissionVisionSection() {
  return (
    <section id="mission-vision" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Our Mission &amp; Vision
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-5 md:gap-14">
          <div className="flex flex-col gap-4 md:order-2 md:col-span-3">
            <p className="text-base text-muted-foreground sm:text-lg">
              We design and build switchgear and control panels that hold up
              on site, and we handle every project ourselves, from the first
              drawing through wiring, testing, and installation. Nothing gets
              passed on to another workshop or another team.
            </p>
            <p className="text-base text-muted-foreground sm:text-lg">
              We want to be the company that industrial and commercial
              clients in Shorkot City and across Pakistan turn to first for
              panel manufacturing and installation, on the strength of work
              that keeps running long after we leave the site.
            </p>
          </div>

          <div className="relative mx-auto aspect-[3/2] w-full max-w-sm md:order-1 md:col-span-2">
            <Image
              src="/images/our-mission.jpg"
              alt="Open control panel showing PLC modules, terminal blocks, and labeled wiring built by Al-Qasim Switch Gear"
              fill
              sizes="(min-width: 768px) 30vw, 70vw"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
