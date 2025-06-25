"use client"
import { useState, useMemo, useCallback } from "react"
import { useReducedMotion } from "framer-motion"
import TechBrandIcon from "@/components/icons/tech/tech-brand-icon"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"

export default function SkillsMarquee({ skills }: { skills: string[] }) {
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduce = useReducedMotion()
  const doubled = useMemo(() => [...skills, ...skills], [skills])
  const marqueeClass = shouldReduce || isPaused ? "" : "animate-marquee"

  const pause = useCallback(() => setIsPaused(true), [])
  const resume = useCallback(() => setIsPaused(false), [])

  return (
    <div className="overflow-hidden py-6 relative">
      <TooltipProvider>
        <ul
          role="list"
          className={`flex gap-4 whitespace-nowrap will-change-transform ${marqueeClass}`}
          onPointerEnter={pause}
          onPointerLeave={resume}
          onFocus={pause}
          onBlur={resume}
        >
          {doubled.map((skill, i) => (
            <li key={`${skill}-${i}`} className="inline-block">
              <div className="p-3 bg-secondary rounded-md flex flex-col items-center min-w-[6rem] md:min-w-[7rem] hover:shadow-md transition-transform">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <TechBrandIcon name={skill} size={32} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span className="text-sm">{skill}</span>
                  </TooltipContent>
                </Tooltip>
                <p className="text-xs mt-1 text-center">{skill}</p>
              </div>
            </li>
          ))}
        </ul>
      </TooltipProvider>
    </div>
  )
}
