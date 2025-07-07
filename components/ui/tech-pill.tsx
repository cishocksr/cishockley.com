"use client"

import TechBrandIcon from "@/components/icons/tech/tech-brand-icon"
import React, { FC } from "react"

export const TechPill: FC<{ tech: string }> = ({ tech }) => (
  <div
    role="listitem"
    aria-label={tech}
    className="flex items-center gap-1 px-2 py-1 bg-secondary/50 rounded-md text-xs"
  >
    <TechBrandIcon name={tech} size={14} className="shrink-0" />
    <span>{tech}</span>
  </div>
)
