import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="h-full transition-all duration-200 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-green-500">
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center opacity-55" />
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="relative object-contain"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <CardDescription>{product.shortDescription}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
