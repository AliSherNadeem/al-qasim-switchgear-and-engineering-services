import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/products/product-card";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse switchgear and electrical engineering products from Al-Qasim Switch Gear and Engineering Services.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Products
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
        A look at the panels and equipment we build for industrial and
        commercial projects.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </Container>
  );
}
