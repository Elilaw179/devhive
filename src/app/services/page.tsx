import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Monitor, Server, Palette } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Crafting intuitive and high-performance native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: Monitor,
    title: "Web Development",
    description: "Building responsive, fast, and secure web applications with modern frameworks and technologies.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Designing and implementing scalable, robust backend systems and APIs to power your applications.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, user-centric designs that provide engaging and seamless user experiences.",
  },
];

export default function ServicesPage() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a wide range of digital solutions to bring your ideas to life.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="text-center transition-all hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
