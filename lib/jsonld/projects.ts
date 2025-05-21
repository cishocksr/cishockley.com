import type { Project } from "@/types";

export function generateProjectJsonLd(projects: Project[]) {
  if (!projects?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "SoftwareSourceCode",
      position: index + 1,
      name: project.title,
      url: project.liveUrl,
    })),
  };
}
