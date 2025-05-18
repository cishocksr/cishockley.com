import { generateProjectJsonLd } from "@/lib/jsonld/projects";
import { projects } from "@/content/projects";
import ProjectsClient from "@/components/projects-client";
import Script from "next/script";

export const generateMetadata = async () => ({
  title: "Projects",
  description:
    "Explore Chris Shockley's portfolio of web development projects...",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Chris Shockley",
    description: "Explore Chris Shockley's portfolio...",
    url: "/projects",
    type: "website",
  },
});

export default function ProjectsPage() {
  const jsonLd = generateProjectJsonLd();

  return (
    <>
      <Script
        id="json-ld-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container py-12 px-4">
        <h1 className="text-4xl font-serif font-bold mb-6 text-charcoal dark:text-foreground">
          Projects
        </h1>
        <p className="text-slate dark:text-muted-foreground text-lg mb-8 max-w-3xl">
          A collection of my recent projects. Each project is built with a focus
          on solving real problems and implementing best practices.
        </p>
        <ProjectsClient projects={projects} />
      </div>
    </>
  );
}
