import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    id: "project-1",
    title: "Project Innovate",
    description: "A mobile-first platform for collaborative project management, designed for agile teams.",
    tags: ["Mobile", "UI/UX"],
    imageId: "project-1-image"
  },
  {
    id: "project-2",
    title: "DataStream API",
    description: "A high-performance REST API for real-time data analytics and business intelligence.",
    tags: ["Backend", "API"],
    imageId: "project-2-image"
  },
  {
    id: "project-3",
    title: "ConnectSphere",
    description: "A responsive social networking web app with a focus on community building and engagement.",
    tags: ["Web", "UI/UX"],
    imageId: "project-3-image"
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-in fade-in slide-in-from-top-8 duration-1000 ease-in-out">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Portfolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We take pride in our work. Here are some of our recent projects.
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
                <Card className="overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                  {projectImage && (
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="aspect-video w-full object-cover"
                      data-ai-hint={projectImage.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
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
        
      </div>
    </section>
  );
}
