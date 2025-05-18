import { projects } from "@/content/projects"

export function generateProjectJsonLd(baseUrl = "https://cshockley.com") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "SoftwareSourceCode",
      position: index + 1,
      name: project.title,
      description: project.description,
      codeRepository: project.githubUrl,
      programmingLanguage: {
        "@type": "ComputerLanguage",
        name: project.technologies.join(", "),
      },
      image: `${baseUrl}${project.image}`,
      url: project.liveUrl,
    })),
  }
}
