import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HomeAbout() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  return (
    <section id="about-home" className="py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000 ease-in-out">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground">
              At DevHive, we are more than just developers; we are architects of the digital future. Our mission is to empower businesses with robust, scalable, and elegant software solutions that drive growth and innovation.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center animate-in fade-in slide-in-from-right-8 duration-1000 ease-in-out">
            {aboutImage && (
              <Card className="overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105">
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
