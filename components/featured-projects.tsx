import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import TechIcon from "@/components/tech-icon";
import Image from "next/image";
import type { Project } from "@/types";

type Props = {
  projects?: Project[];
};

export default function FeaturedProjects({ projects }: Props) {
  const featured = (projects ?? []).slice(0, 2);

  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {featured.map((project) => (
        <Card
          key={project.slug}
          className="overflow-hidden flex flex-col h-full border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <CardContent className="flex-1 p-6">
            <h3 className="text-xl font-serif font-bold mb-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="p-2 bg-secondary/50 rounded-md hover:bg-secondary/80 transition-colors"
                >
                  <TechIcon name={tech} size={24} className="text-accent" />
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-6 pt-0">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="mr-1 h-4 w-4" />
              Code
            </Link>
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <ExternalLink className="mr-1 h-4 w-4" />
              Live Demo
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
