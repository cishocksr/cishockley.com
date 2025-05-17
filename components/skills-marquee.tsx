"use client"

import { useEffect, useRef } from "react"
import TechBrandIcon from "@/components/tech-brand-icon"

// Sample skills data
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "CI/CD",
  "Jest",
  "React Testing Library",
  "Responsive Design",
  "Accessibility",
  "Performance Optimization",
  "AWS",
  "Docker",
  "Kubernetes",
  "Redux",
  "React Query",
  "Prisma",
  "Vercel",
]

export default function SkillsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marqueeElement = marqueeRef.current
    if (!marqueeElement) return

    const scrollWidth = marqueeElement.scrollWidth
    const containerWidth = marqueeElement.clientWidth

    if (scrollWidth <= containerWidth) return

    let animationId: number
    let position = 0

    const animate = () => {
      position -= 0.5

      // Reset position when all items have scrolled
      if (Math.abs(position) >= scrollWidth / 2) {
        position = 0
      }

      if (marqueeElement) {
        marqueeElement.style.transform = `translateX(${position}px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Duplicate the skills array to create a seamless loop
  const marqueeSkills = [...skills, ...skills]

  return (
    <div className="overflow-hidden py-6 relative">
      <div ref={marqueeRef} className="flex gap-4 whitespace-nowrap">
        {marqueeSkills.map((skill, index) => (
          <div key={`${skill}-${index}`} className="p-3 bg-secondary rounded-md">
            <TechBrandIcon name={skill} size={28} />
          </div>
        ))}
      </div>
    </div>
  )
}
