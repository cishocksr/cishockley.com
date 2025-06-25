import type { Project } from "@/types/project"

// your static array (or JSON import, or fetched at build time)
const projects: Project[] = [
  {
    id: "1",
    title: "Pathfinder",
    description: "A visual representation of the BFS and DFS algorithms.",
    image: "/images/projects/pathfinder-visualizer-thumbnail.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://algo-pathfinder.vercel.app/",
    githubUrl: "https://github.com/cishocksr/Algo-Pathfinder",
    featured: true,
    status: "completed",
    highlights: [
      "Visualizes BFS and DFS algorithms",
      "Interactive grid for setting start/end points and walls",
      "Step-by-step animation of pathfinding process",
    ],
  },
  {
    id: "2",
    title: "Portfolio of Chris Shockley",
    description:
      "A personal portfolio website showcasing projects, skills, and experience.",
    image: "/images/projects/portfolio-thumbnail.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://cishockley.com",
    githubUrl: "https://github.com/cishocksr/cishockley.com",
    featured: true,
    status: "in-progress",
    // highlights: [
    //   "Drag-and-drop tasks",
    //   "Team collaboration",
    //   "Real-time notifications",
    // ],
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
