import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Al-Qasim Switch Gear and Engineering Services and our commitment to reliable switchgear and electrical engineering solutions.",
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        About Us
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
        Al-Qasim Switch Gear and Engineering Services is committed to
        delivering dependable switchgear and engineering solutions, built on
        technical expertise and a focus on quality.
      </p>
    </Container>
  );
}
