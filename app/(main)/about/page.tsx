'use client';

import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPageClient() {
  return (
    <section className='mx-auto max-w-5xl space-y-20 px-4 py-12 md:py-20'>
      {/* Hero Section with Photo */}
      <div className='grid items-start gap-12 md:grid-cols-[2fr_1fr]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
          <h1 className='bg-gradient-to-r from-primary-deep via-primary to-primary-deep bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
            About Me
          </h1>

          <div className='space-y-4 text-lg leading-relaxed text-foreground/80'>
            <p>
              I&apos;m <strong>Chris Shockley</strong>, a U.S. Navy veteran
              turned software developer with a passion for creating meaningful
              digital experiences.
            </p>
            <p>
              My journey into tech wasn&apos;t traditional, but that&apos;s what
              makes it uniquely mine. From managing network systems in the Navy
              to building full-stack web applications, I&apos;ve always been
              drawn to solving complex problems and helping people through
              technology.
            </p>
            <p>
              What drives me isn&apos;t just writing code—it&apos;s the{' '}
              <strong>impact</strong> that code can have. Whether it&apos;s a
              nonprofit getting a website redesign at a hackathon or a user
              experiencing a seamless interface, I believe technology should
              serve people, not the other way around.
            </p>
          </div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mx-auto'
        >
          <div className='relative'>
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary opacity-50 blur-2xl' />
            <div className='relative overflow-hidden rounded-2xl border-4 border-background shadow-2xl'>
              <Image
                src='/images/profile.jpeg'
                alt='Chris Shockley'
                width={384}
                height={500}
                className='w-full max-w-sm object-cover'
                priority
                unoptimized
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Philosophy Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='space-y-6 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 shadow-lg'
      >
        <h2 className='text-3xl font-bold'>My Philosophy</h2>

        <div className='space-y-4 text-lg leading-relaxed text-foreground/80'>
          <p>
            I believe the best software is <strong>invisible</strong>—it just
            works, feels natural, and gets out of the way so users can focus on
            what matters to them.
          </p>
          <p>
            I&apos;m constantly learning, whether it&apos;s diving deep into new
            frameworks, contributing to open source, or exploring how emerging
            technologies can solve real-world problems.
          </p>
        </div>
      </motion.div>

      {/* What I'm About Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='space-y-6'
      >
        <h2 className='text-3xl font-bold'>What I&apos;m About</h2>

        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='rounded-xl border border-border bg-card p-6 shadow-lg'>
            <h3 className='mb-3 text-xl font-semibold'>🚀 Continuous Growth</h3>
            <p className='text-muted-foreground'>
              Every day is a chance to learn something new. I actively seek out
              challenges that push me beyond my comfort zone.
            </p>
          </div>

          <div className='rounded-xl border border-border bg-card p-6 shadow-lg'>
            <h3 className='mb-3 text-xl font-semibold'>🤝 Collaboration</h3>
            <p className='text-muted-foreground'>
              The best solutions come from diverse perspectives. I thrive in
              environments where ideas are freely shared and built upon.
            </p>
          </div>

          <div className='rounded-xl border border-border bg-card p-6 shadow-lg'>
            <h3 className='mb-3 text-xl font-semibold'>🌱 Purpose-Driven</h3>
            <p className='text-muted-foreground'>
              Technology is a tool for positive change. I&apos;m drawn to
              projects that make a meaningful difference in people&apos;s lives.
            </p>
          </div>

          <div className='rounded-xl border border-border bg-card p-6 shadow-lg'>
            <h3 className='mb-3 text-xl font-semibold'>🎨 Design Thinking</h3>
            <p className='text-muted-foreground'>
              Fascinated by the intersection of design and engineering. Good UX
              isn&apos;t just about looks—it&apos;s about understanding human
              behavior.
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center shadow-lg'
      >
        <h2 className='mb-4 text-2xl font-bold'>Let&apos;s Connect</h2>
        <p className='mb-6 text-lg text-foreground/80'>
          I&apos;m always open to interesting conversations and opportunities.
        </p>

        <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 font-medium text-primary-foreground shadow-lg transition hover:scale-105 hover:shadow-xl'
          >
            <Mail className='h-5 w-5' />
            Get in Touch
          </Link>

          <Link
            href='/projects'
            className='inline-flex items-center gap-2 rounded-lg border-2 border-border bg-card px-6 py-3 font-medium text-foreground shadow-lg transition hover:scale-105 hover:bg-muted'
          >
            View My Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
