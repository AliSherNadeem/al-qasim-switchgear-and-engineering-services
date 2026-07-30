import { Hero } from "@/components/home/hero";
import { ServicesSection } from "@/components/home/services-section";
import { AboutSection } from "@/components/home/about-section";
import { ClientsSection } from "@/components/home/clients-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ClientsSection />
    </>
  );
}
