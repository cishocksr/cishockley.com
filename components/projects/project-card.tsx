"use client"

import React, { FC } from "react"
import { motion } from "framer-motion"
import { Star, CheckCircle, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useFadeInUpVariants } from "@/lib/motion/hooks"
import type { IconProps as SVGIconProps } from "@/components/icons/tech"
import { cn } from "@/lib/utils"
import { Project, ProjectStatus } from "@/types/project"
import { ProjectImage } from "./project-image"
import { ProjectHeader } from "./project-header"
import { ProjectBody } from "./project-body"

/**
 * Type-safe mapping of project status to badge configuration.
 */
type StatusConfig = {
  icon: FC<SVGIconProps>
  color: string
  bg: string
}

const statusConfig: Record<ProjectStatus, StatusConfig> = {
  completed: {
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/20",
  },
  "in-progress": {
    icon: Clock,
    color: "text-yellow-600",
    bg: "bg-yellow-100 dark:bg-yellow-900/20",
  },
  planned: {
    icon: Star,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/20",
  },
}

export interface ProjectCardProps {
  project: Project
  index?: number
}

export const ProjectCard: FC<ProjectCardProps> = React.memo(
  ({ project, index = 0 }) => {
    const variants = useFadeInUpVariants()
    const status = project.status || "completed"
    const { icon: StatusIcon, color, bg } = statusConfig[status]

    return (
      <article
        aria-labelledby={`project-title-${project.id}`}
        className="group"
      >
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <Card className="h-full overflow-hidden border-2 border-transparent hover:border-accent/20 transition-all duration-300">
            <div className="relative">
              <ProjectImage project={project} />

              {/* Status Badge (decorative) */}
              <div
                aria-hidden="true"
                className={cn(
                  "absolute top-3 left-3 flex items-center space-x-1 px-2 py-1 rounded-full",
                  bg
                )}
              >
                <StatusIcon className={cn("h-3 w-3", color)} />
                <span className={cn("text-xs font-medium", color)}>
                  {status.replace("-", " ")}
                </span>
              </div>

              {/* Featured Badge (decorative) */}
              {project.featured && (
                <div aria-hidden="true" className="absolute top-3 right-3">
                  <Badge className="bg-accent text-accent-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}
            </div>

            <ProjectHeader project={project} />
            <ProjectBody project={project} />
          </Card>
        </motion.div>
      </article>
    )
  }
)
