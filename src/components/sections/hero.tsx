import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative py-24 sm:py-32 md:py-40">
       <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-primary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
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
