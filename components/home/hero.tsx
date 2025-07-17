"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import TypewriterComponent from "@/components/typewriter"

export default function Hero() {
  return (
    <section className="container px-4 py-12 md:py-24 lg:py-32">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tighter leading-tight mb-4">
            Hi, I'm <span className="text-accent">Chris Shockley</span>
          </h1>

          <div className="flex items-center text-2xl md:text-3xl font-medium text-foreground">
            <span className="mr-2">I'm a</span>
            <TypewriterComponent
              words={["Developer", "Veteran", "Philosopher"]}
              className="font-bold text-primary"
              cursorClassName="text-primary animate-blink"
              typingSpeed={100}
              deletingSpeed={40}
              pauseDuration={1200}
            />
          </div>

          <p className="text-foreground/80 text-lg md:text-xl max-w-[600px] leading-relaxed">
            Building digital experiences that make a difference. Focused on
            creating accessible, user-friendly applications with modern
            technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link
              href="/guestbook"
              className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow transition-transform duration-300 hover:scale-105"
              aria-label="Sign guestbook"
            >
              Sign Guestbook <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-accent/10 hover:text-accent"
              aria-label="View projects"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] overflow-hidden rounded-full border-4 border-secondary shadow-lg">
            <Image
              src="/images/profile.png"
              alt="Developer profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
