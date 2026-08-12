import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ProductImagePlaceholder } from "@/components/products/product-image-placeholder";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];

  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="h-full transition-all duration-200 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-green-500">
        <div className="relative aspect-[4/3] overflow-hidden">
          {image ? (
            <>
              <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center opacity-55" />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="relative object-contain p-4"
              />
            </>
          ) : (
            <ProductImagePlaceholder className="absolute inset-0 rounded-none border-0" />
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <CardDescription>{product.shortDescription}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
