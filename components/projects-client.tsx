"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Search } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import TechIcon from "@/components/tech-icon";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
};

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const searchContent = `${project.title} ${
      project.description
    } ${project.technologies.join(" ")}`.toLowerCase();
    return searchContent.includes(searchQuery.toLowerCase());
  });

  return (
    <>
      {/* Search Input */}
      <div className="relative max-w-md mb-10">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search projects by name, description, or technology..."
          className="pl-8 border-clay/20 dark:border-slate/30"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Project Cards Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden flex flex-col h-full border-clay/20 dark:border-slate/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Project Content */}
            <CardContent className="flex-1 p-6">
              <h3 className="text-xl font-serif font-bold mb-2 text-charcoal dark:text-foreground">
                {project.title}
              </h3>
              <p className="text-slate dark:text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="p-2 bg-secondary/50 dark:bg-secondary/30 rounded-md hover:bg-secondary/80 dark:hover:bg-secondary/50 transition-colors"
                  >
                    <TechIcon
                      name={tech}
                      size={24}
                      className="text-navy dark:text-primary"
                    />
                  </div>
                ))}
              </div>
            </CardContent>

            {/* Footer Links */}
            <CardFooter className="flex justify-between p-6 pt-0">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-slate hover:text-navy dark:text-muted-foreground dark:hover:text-primary transition-colors"
              >
                <Github className="mr-1 h-4 w-4" />
                Code
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-slate hover:text-navy dark:text-muted-foreground dark:hover:text-primary transition-colors"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* No results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2 text-charcoal dark:text-foreground">
            No projects found
          </h3>
          <p className="text-slate dark:text-muted-foreground">
            Try adjusting your search query to find what you're looking for.
          </p>
        </div>
      )}
    </>
  );
}
