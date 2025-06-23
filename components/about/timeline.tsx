import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useFadeInUpVariants, useGrowVariants } from "@/lib/motion/hooks"

export type CoreValueEvent = {
  year: string
  title: string
  value: string
  description: string
}

export default function CoreValuesTimeline({
  events,
  className = "",
}: {
  events: CoreValueEvent[]
  className?: string
}) {
  const grow = useGrowVariants() // animates the line
  const fade = useFadeInUpVariants() // animates items

  return (
    <motion.ol
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={cn("relative space-y-10 pl-6", className)}
    >
      <motion.span
        variants={grow}
        className="absolute left-0 top-0 h-full w-px bg-zinc-300 dark:bg-zinc-700 origin-top"
        aria-hidden="true"
      />
      {events.map((event) => (
        <motion.li
          key={`${event.year}-${event.title}`}
          variants={fade}
          transition={{ delay: events.indexOf(event) * 0.1 }}
          className="relative pl-6"
        >
          <span
            className="absolute left-0 top-1 w-3 h-3 bg-accent rounded-full border-2 border-background"
            aria-hidden="true"
          />
          <div className="flex items-baseline gap-3 text-sm font-medium text-muted-foreground mb-1">
            <time dateTime={event.year}>{event.year}</time>
            <h3 className="italic">{event.title}</h3>
          </div>
          <span className="inline-block text-xs mt-2 px-2 py-1 rounded-full bg-muted text-muted-foreground uppercase tracking-wide">
            {event.value}
          </span>
          <p className="mt-2 text-sm text-foreground leading-relaxed">
            {event.description}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  )
}
