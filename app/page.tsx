"use client"

import { Suspense } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import TypewriterComponent from "@/components/typewriter"
import { motion } from "framer-motion"
import Image from "next/image"
import FeaturedPosts from "@/components/featured-posts"
import FeaturedProjects from "@/components/featured-projects"
// Import is kept but commented out until testimonials are available
// import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container px-4 py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl font-serif font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-accent">Chris Shockley</span>
            </h1>
            <div className="flex items-center text-2xl md:text-3xl font-medium">
              I'm a <TypewriterComponent words={["Developer", "Veteran", "Philosopher"]} className="text-accent ml-2" />
            </div>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
              Building digital experiences that make a difference. Focused on creating accessible, user-friendly
              applications with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="/guestbook"
                className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90"
                aeria-label="Sign guestbook"
              >
                Sign Guestbook <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent/10 hover:text-accent"
                aeria-label="View projects"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] overflow-hidden rounded-full border-4 border-secondary">
              <Image
                src="/images/profile.png"
                alt="Developer profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Commented out until testimonials are available 
      <motion.section
        className="py-12 md:py-16 bg-background"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="container px-4">
          <h2 className="text-3xl font-serif font-bold tracking-tighter mb-8 text-center">What People Say</h2>
          <Testimonials />
        </div>
      </motion.section>
      */}

      {/* Featured Projects Section */}
      <motion.section
        className="bg-card py-12 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="container px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-bold tracking-tighter">Featured Projects</h2>
            <Link href="/projects" className="text-accent hover:text-accent/80 inline-flex items-center">
              View all projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading projects...</div>}>
            <FeaturedProjects />
            </Suspense>
        </div>
      </motion.section>

      {/* Featured Blog Posts */}
      <motion.section
        className="py-12 md:py-24 bg-background"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="container px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-bold tracking-tighter">Latest Articles</h2>
            <Link href="/blog" className="text-accent hover:text-accent/80 inline-flex items-center">
              View all posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading blog posts...</div>}>
             <FeaturedPosts />
            </Suspense>
          
        </div>
      </motion.section>
    </main>
  )
}
