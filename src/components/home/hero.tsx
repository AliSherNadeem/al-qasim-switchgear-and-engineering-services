import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

// Temporary stock placeholders until real project photography is available.
const heroImages = [
  {
    src: "/images/hero-section/hero-image-1.jpg",
    alt: "Labeled industrial control panel with wiring and circuit breakers",
  },
  {
    src: "/images/hero-section/hero-image-2.jpg",
    alt: "Row of circuit breakers with hazard labels inside an electrical panel",
  },
  {
    src: "/images/hero-section/hero-image-3.jpg",
    alt: "Electrician testing wiring inside a control panel with a multimeter",
  },
  {
    src: "/images/hero-section/hero-image-4.jpg",
    alt: "Outdoor high-voltage power transformer substation equipment",
  },
  {
    src: "/images/hero-section/hero-image-5.jpg",
    alt: "Electricity transmission towers against a sunset sky",
  },
  {
    src: "/images/hero-section/hero-image-6.jpg",
    alt: "High voltage danger warning sign on switchgear equipment",
  },
  {
    src: "/images/hero-section/hero-image-7.jpg",
    alt: "Close-up of an industrial control panel switch bank with circuit labels",
  },
];

export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden sm:h-[80vh] lg:h-[88vh]">
      <div className="absolute inset-0 flex w-max animate-marquee">
        {[...heroImages, ...heroImages].map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative h-full w-[85vw] shrink-0 sm:w-[45vw] lg:w-[32vw]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === heroImages.length}
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 85vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />

      <div className="relative flex h-full items-end">
        <Container className="pb-12 sm:pb-16 lg:pb-20">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Al-Qasim Switch Gear and Engineering Services
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            Engineering and manufacturing reliable switchgear and electrical
            solutions for industrial and commercial projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="h-11 px-6">
              <Link href="/products">View Our Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 border-white/40 bg-white/5 px-6 text-white hover:bg-white/15 hover:text-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
