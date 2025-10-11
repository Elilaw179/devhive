import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HomeContact() {
  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-top-8 duration-1000 ease-in-out">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Let's turn your idea into a reality. We'd love to hear from you.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
