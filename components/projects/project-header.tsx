import type { FC } from "react"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types/project"

interface ProjectHeaderProps {
  project: Project
}

export const ProjectHeader: FC<ProjectHeaderProps> = ({ project }) => (
  <div className="p-4">
    <h3 className="text-xl font-serif font-bold group-hover:text-accent transition-colors">
      {project.title}
    </h3>
    {project.category && (
      <Badge variant="outline" className="w-fit text-xs mt-1">
        {project.category}
      </Badge>
    )}
  </div>
)
