import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getProductBySlug, products } from "@/lib/products";
import type { ProductImage } from "@/lib/products";
import {
  getProductBreadcrumbJsonLd,
  getProductJsonLd,
} from "@/lib/structured-data";
import { buildPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return buildPageMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    image: {
      url: product.images[0].src,
      alt: product.images[0].alt,
    },
  });
}

function ImageGallery({
  images,
  className,
}: {
  images: ProductImage[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "min-w-0 flex flex-wrap justify-center gap-4 md:justify-start",
        className
      )}
    >
      {images.map((image) => (
        <div
          key={image.src}
          className="relative aspect-[4/3] w-[calc(50%-0.5rem)] shrink-0 overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center opacity-55" />
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 20vw, 45vw"
            className="relative object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const index = products.findIndex((item) => item.slug === product.slug);
  const reversed = index % 2 === 1;

  // When there are exactly two images per paragraph, pair each pair of
  // images with its own paragraph instead of showing one combined gallery.
  const useChunkedLayout =
    product.images.length > 2 &&
    product.images.length === product.paragraphs.length * 2;

  return (
    <Container className="py-16 sm:py-20">
      <JsonLd data={getProductJsonLd(product)} />
      <JsonLd data={getProductBreadcrumbJsonLd(product)} />

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/products">Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="mt-8 text-3xl font-bold tracking-tight sm:mt-10 sm:text-4xl">
        {product.name}
      </h1>

      {useChunkedLayout ? (
        <div className="mt-8 flex flex-col gap-16 sm:mt-10">
          {product.paragraphs.map((paragraph, rowIndex) => {
            const rowReversed = reversed !== (rowIndex % 2 === 1);
            const imageChunk = product.images.slice(
              rowIndex * 2,
              rowIndex * 2 + 2
            );

            return (
              <div
                key={paragraph}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14"
              >
                <ImageGallery
                  images={imageChunk}
                  className={rowReversed ? "md:order-2" : "md:order-1"}
                />
                <p
                  className={cn(
                    "text-base text-muted-foreground sm:text-lg",
                    rowReversed ? "md:order-1" : "md:order-2"
                  )}
                >
                  {paragraph}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 items-center gap-10 sm:mt-10 md:grid-cols-2 md:gap-14">
          <ImageGallery
            images={product.images}
            className={reversed ? "md:order-2" : "md:order-1"}
          />
          <div
            className={cn(
              "flex flex-col gap-4 text-base text-muted-foreground sm:text-lg",
              reversed ? "md:order-1" : "md:order-2"
            )}
          >
            {product.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}
