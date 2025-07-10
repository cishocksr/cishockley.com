// components/FeaturedProjectsClient.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import techIcons, {
  type IconKey,
  type IconProps,
} from "@/components/icons/tech"
import type { Project } from "@/types/project"

export default function FeaturedProjectsClient({
  projects,
}: {
  projects: Project[]
}) {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const imageUrl =
          typeof project.image === "string" &&
          project.image.startsWith("/images/")
            ? project.image
            : "/images/default-project.png"

        return (
          <Card
            key={project.id}
            className="group border-l-4 border-[#626262] dark:border-[#B7B7B7]
                       transition-all hover:shadow-md hover:-translate-y-1"
          >
            {/* ─── IMAGE WITH OVERLAY ────────────────────────────────────── */}
            <div className="relative h-48 w-full overflow-hidden">
              {/* the image itself */}
              <Image
                src={imageUrl}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover transition-filter duration-300
                           filter group-hover:blur-sm"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* overlayed icons, hidden until hover */}
              <div
                className="absolute inset-0 flex items-center justify-center gap-6
                           bg-black bg-opacity-30
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-300"
              >
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-8 w-8 text-white hover:text-accent" />
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live site for ${project.title}`}
                  >
                    <ExternalLink className="h-8 w-8 text-white hover:text-accent" />
                  </Link>
                )}
              </div>
            </div>

            {/* ─── CONTENT & TECH ROW ───────────────────────────────────── */}
            <CardContent className="flex-1 p-6">
              <h3 className="text-xl font-serif font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {project.technologies.length > 0 && (
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  {project.technologies.map((tech) => {
                    if (!(tech in techIcons)) return null
                    const IconComponent = techIcons[
                      tech as IconKey
                    ] as React.FC<IconProps>
                    return (
                      <motion.div
                        key={tech}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        className="p-1 rounded-md bg-muted/40 hover:bg-muted
                                   transition-transform duration-300 hover:scale-105"
                      >
                        <IconComponent className="h-5 w-5" title={tech} />
                      </motion.div>
                    )
                  })}
                </motion.div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
