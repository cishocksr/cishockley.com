// lib/projects.ts
export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
  status?: "In Progress" | "Completed" | "Planned"
}

// your static array (or JSON import, or fetched at build time)
const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and blog posts, built with modern web technologies.",
    image: "/images/projects/portfolio-thumbnail.png",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/johndoe/portfolio",
    liveUrl: "https://johndoe-portfolio.vercel.app",
    featured: false,
    status: "In Progress",
  },
  {
    id: "",
    title: "Chat Application",
    description:
      "Real-time chat application with multiple rooms, file sharing, and emoji support.",
    image: "/images/projects/pathfinder-visualizer-thumbnail.png",
    technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/johndoe/chat-app",
    liveUrl: "https://chat-app-demo.vercel.app",
    featured: false,
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
