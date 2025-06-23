import type { FC } from "react"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TechBrandIcon from "../icons/tech/tech-brand-icon"
import type { Project } from "@/types/project"
import { TechPill } from "../ui/tech-pill"

interface ProjectBodyProps {
  project: Project
}

export const ProjectBody: FC<ProjectBodyProps> = ({ project }) => (
  <CardContent className="space-y-4 flex flex-col flex-1">
    <p className="text-muted-foreground line-clamp-3">{project.description}</p>

    {project.highlights && project.highlights.length > 0 && (
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Key Features:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          {project.highlights.slice(0, 3).map((highlight, i) => (
            <li key={i} className="flex items-start gap-2">
              <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    )}

    <div className="space-y-2 mt-auto">
      <h4 className="text-sm font-medium">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {project.technologies.length ? (
          project.technologies.map((tech) => (
            <TechPill key={`${project.id}-${tech}`} tech={tech} />
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No tech listed</p>
        )}
      </div>
    </div>
  </CardContent>
)
