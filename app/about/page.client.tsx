"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { coreValues } from "@/data/core-values"
import { skills } from "@/data/skills"
import { Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFadeInUpVariants, useScaleInVariants } from "@/lib/motion/hooks"

import SkillsMarquee from "@/components/about/skills-marquee"

import CoreValuesTimeline from "@/components/about/timeline"

export default function AboutPageClient() {
  const fadeInUp = useFadeInUpVariants()
  const scaleIn = useScaleInVariants()

  return (
    <section className="container max-w-5xl py-12 md:py-20 space-y-16">
      {/* SEO Structured Data */}
      {/* <StructuredData data={generatePersonJsonLd()} /> */}

      {/* Top Section: Image + Bio */}
      <div className="grid gap-10 md:grid-cols-[2fr_1fr] items-start">
        <motion.div
          variants={fadeInUp}
          className="space-y-6"
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-serif font-bold">
            About Me
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            I’m Chris Shockley, a U.S. Navy veteran turned software developer
            with a love for clean code, complex systems, and creative solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I bring discipline from military service, people-first leadership
            from Amazon, and a philosophical approach to technology that drives
            innovation and empathy in every product I build.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="mailto:hello@cshockley.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="relative
            w-full
            aspect-[3/4]
            max-w-[300px]   
           border-4 
           border-accent
            shadow-md
            mx-auto
          "
          variants={scaleIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/profile-photo.jpeg"
            alt="Chris Shockley"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Core Values Timeline */}
      <section>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My Journey & Core Values</h2>
          {/* Pass imported data */}
          <CoreValuesTimeline events={coreValues} />
        </motion.div>

        {/* Skills Marquee */}
        <motion.div
          className="mt-12 overflow-hidden"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Pass imported skills */}
          <SkillsMarquee skills={skills} />
        </motion.div>
      </section>
    </section>
  )
}
