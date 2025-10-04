import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative py-24 sm:py-32 md:py-40">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid-primary/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)] dark:bg-grid-primary/[0.2]"></div>
      </div>
      <div className="container relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Building ideas
          <br />
          <span className="text-primary">into reality.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
          DevHive is your partner in building powerful, scalable, and beautiful applications that solve real-world problems and drive business success.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
