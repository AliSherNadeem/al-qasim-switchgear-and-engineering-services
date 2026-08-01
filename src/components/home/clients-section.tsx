import { Container } from "@/components/layout/container";

// Placeholder slots until real client names/logos are provided.
const PLACEHOLDER_CLIENT_COUNT = 6;

export function ClientsSection() {
  return (
    <section id="clients" className="scroll-mt-24 bg-muted/40 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Our Valuable Clients
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            We have worked with clients across a range of industries.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: PLACEHOLDER_CLIENT_COUNT }).map((_, index) => (
            <div
              key={index}
              className="flex aspect-[3/2] items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30"
            >
              <span className="text-sm text-muted-foreground">
                Client Logo
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
