export interface CoreValueEvent {
  id: string
  year: string
  title: string
  value: string
  description: string
}

export const coreValues: CoreValueEvent[] = [
  {
    id: "starbucks-2015",
    year: "2015",
    title: "Starbucks Supervisor",
    value: "Empathy",
    description: "Developed people skills and team-first leadership.",
  },
  {
    id: "amazon-2020",
    year: "2020",
    title: "Amazon PA",
    value: "Customer Obsession",
    description: "Led with operational excellence and ownership.",
  },
  {
    id: "bootcamp-2023",
    year: "2023",
    title: "Bootcamp Grad",
    value: "Curiosity",
    description: "Dedicated to solving real-world problems through code.",
  },
  {
    id: "portfolio-2025",
    year: "2025",
    title: "Portfolio + Projects",
    value: "Craftsmanship",
    description: "Committed to writing clean, scalable software.",
  },
]
