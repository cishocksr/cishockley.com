// types/project.ts

/**
 * The status of a project, driving the status badge config.
 */
export type ProjectStatus = "completed" | "in-progress" | "planned"

/**
 * A single project entry, used everywhere from data-fetching to the card UI.
 */
export interface Project {
  /** Unique identifier */
  id: string

  /** Heading */
  title: string

  /** Short description */
  description: string

  /** URL or static import for a screenshot */
  image?: string

  /** Tags for tech row */
  technologies: string[]

  /** Optional live demo link */
  liveUrl?: string

  /** Optional GitHub repo link */
  githubUrl?: string

  /** Optional category label */
  category?: string

  /** Which status badge to show */
  status: ProjectStatus

  /** Whether to add a “Featured” badge */
  featured?: boolean

  /** Optional key bullet points shown under “Key Features” */
  highlights?: string[]
}
