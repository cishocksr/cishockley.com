import type { Project } from "@/types/project"

// your static array (or JSON import, or fetched at build time)
const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js…",
    image: "/placeholder.svg?width=500&height=300",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    featured: true,
    status: "completed",
    highlights: [
      "User authentication",
      "Payment processing integration",
      "Admin dashboard",
    ],
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates…",
    image: "/placeholder.svg?width=500&height=300",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/johndoe/task-manager",
    featured: true,
    status: "in-progress",
    highlights: [
      "Drag-and-drop tasks",
      "Team collaboration",
      "Real-time notifications",
    ],
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
