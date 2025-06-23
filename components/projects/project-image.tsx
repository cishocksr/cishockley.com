import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import type { FC } from "react"
import type { Project } from "@/types/project"

interface ProjectImageProps {
  project: Project
}

export const ProjectImage: FC<ProjectImageProps> = ({ project }) => {
  return (
    <div className="relative h-48 overflow-hidden">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={`Screenshot of ${project.title}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live`}
            >
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30">
                <ExternalLink className="h-5 w-5 text-white" />
              </div>
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30">
                <Github className="h-5 w-5 text-white" />
              </div>
            </Link>
          )}
        </div>
      </div>
      {/* Status badge and featured badge can remain in ProjectImage or be extracted further */}
    </div>
  )
}
