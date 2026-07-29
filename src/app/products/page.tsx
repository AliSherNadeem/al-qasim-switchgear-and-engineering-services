import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

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
        Our full product catalog is coming soon.
      </p>
    </Container>
  );
}
