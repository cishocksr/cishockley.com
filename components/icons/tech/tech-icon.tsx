"use client"

import React from "react"
import techIcons from "./index" // your existing map

export interface TechIconProps {
  /** Human-friendly name, e.g. "React", "next.js", "Tailwind CSS" */
  name: string
  /** Pixel size (both width & height) */
  size?: number
  /** Extra CSS classes to pass through */
  className?: string
}

/**
 * Looks up the right SVG component from your techIcons map,
 * normalizing the key (lowercase, strip spaces/dots).
 */
export default function TechIcon({
  name,
  size = 24,
  className = "",
}: TechIconProps) {
  // normalize the name to your keys, e.g. "Tailwind CSS" → "tailwindcss"
  const key = name.toLowerCase().replace(/[\s.]+/g, "")
  const Icon = techIcons[key]

  if (!Icon) {
    // --- FALLBACK: render up to 2-letter initials inside a circle ---
    const initials = name
      .split(/[\s\.-]+/)
      .map((w) => w[0]?.toUpperCase())
      .join("")
      .slice(0, 2)

    return (
      <div
        style={{ width: size, height: size }}
        className={`flex items-center justify-center rounded-full bg-gray-200 text-xs font-bold ${className}`}
        title={name}
      >
        {initials}
      </div>
    )
  }

  return <Icon width={size} height={size} className={className} title={name} />
}
