import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/products/product-card";
import { products } from "@/lib/products";

export function ProductsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Our Products
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            A look at the panels and equipment we build for industrial and
            commercial projects.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg" className="h-11 px-6">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
