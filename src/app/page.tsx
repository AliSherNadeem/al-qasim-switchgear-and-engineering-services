import { Container } from "@/components/layout/container";

export default function HomePage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Al-Qasim Switch Gear and Engineering Services
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
        Engineering and manufacturing reliable switchgear and electrical
        solutions for industrial and commercial projects.
      </p>
    </Container>
  );
}
