import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "project-1",
    title: "Project Innovate",
    tags: ["Mobile", "UI/UX"],
    imageId: "project-1-image",
     link:"#"
  },
  {
    id: "project-2",
    title: "DataStream API",
    tags: ["Backend", "API"],
    imageId: "project-2-image",
     link:"#"
  },
  {
    id: "project-3",
    title: "B2TRENDZ-Latest Music&Movies",
    tags: ["Web", "UI/UX"],
    imageId: "project-3-image",
    link:"https://www.b2trendz.com/"
  },
];

export function HomeProjects() {
  return (
    <section id="projects-home" className="py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-top-8 duration-1000 ease-in-out">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the solutions we've crafted for our clients.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <div
                key={project.id}
                className="animate-in fade-in slide-in-from-top-12 duration-1000 ease-in-out"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'backwards' }}
              >
                <Card className="overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                  {projectImage && (
                   <a href={project.link} 
                     target="_blank" 
                     rel="noopener noreferrer">

                     <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="aspect-video w-full object-cover"
                      data-ai-hint={projectImage.imageHint}
                    />
                   </a>
                  )}
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center animate-in fade-in slide-in-from-top-16 duration-1000 ease-in-out">
            <Button asChild size="lg" variant="outline">
                <Link href="/projects">
                    View Our Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
