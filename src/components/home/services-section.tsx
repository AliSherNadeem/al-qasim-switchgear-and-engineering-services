import { Factory, ShieldCheck, Wrench } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/container";

const services = [
  {
    icon: Factory,
    title: "Panel Manufacturing",
    description:
      "We design and build switchgear and control panels in our own workshop, built around what each project needs rather than off the shelf.",
  },
  {
    icon: Wrench,
    title: "Installation",
    description:
      "We install every panel we build on site ourselves, from wiring and connections through to final testing before handover.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description:
      "We service and troubleshoot panels after installation, so equipment keeps running and any faults get fixed quickly.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Our Services
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            From design to installation, we handle the work ourselves at
            every stage of a project.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-2 border-green-500/30 ring-0 transition-all duration-200 hover:scale-105 hover:border-green-500 hover:shadow-md"
            >
              <CardHeader>
                <service.icon
                  className="size-8 text-primary"
                  aria-hidden="true"
                />
                <CardTitle className="mt-3 text-lg">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
