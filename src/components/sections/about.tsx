import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "../ui/card";

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              About DevHive Digital Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              At DevHive, we are more than just developers; we are architects of the digital future. Our mission is to empower businesses with robust, scalable, and elegant software solutions that drive growth and innovation.
            </p>
            <p className="text-muted-foreground">
              Our team consists of passionate experts in mobile and web development, backend systems, and user-centric UI/UX design. We thrive on transforming complex challenges into seamless digital experiences, ensuring every project we undertake not only meets but exceeds client expectations.
            </p>
          </div>
          <div className="flex justify-center">
            {aboutImage && (
              <Card className="overflow-hidden rounded-xl shadow-2xl transition-all hover:scale-105">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={450}
                  data-ai-hint={aboutImage.imageHint}
                  className="object-cover"
                />
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
