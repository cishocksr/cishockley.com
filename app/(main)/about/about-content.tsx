'use client';

import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
  VARIANTS_HERO_CONTAINER,
  VARIANTS_HERO_ITEM,
} from '@/components/motion';
import { Button } from '@/components/ui/button';

export default function AboutPageClient() {
  return (
    <section className='mx-auto max-w-5xl space-y-20 px-4 py-12 md:py-20'>
      {/* Hero Section with Photo */}
      <motion.div
        className='grid items-start gap-12 md:grid-cols-[2fr_1fr]'
        variants={VARIANTS_HERO_CONTAINER}
        initial='hidden'
        animate='visible'
      >
        <motion.div variants={VARIANTS_HERO_ITEM} className='space-y-6'>
          <h1 className='bg-linear-to-r from-primary-deep via-primary to-primary-deep bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
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
        <motion.div variants={VARIANTS_HERO_ITEM} className='mx-auto'>
          <div className='relative'>
            <div className='absolute inset-0 rounded-2xl bg-linear-to-br from-primary via-accent to-primary opacity-50 blur-2xl' />
            <div className='relative overflow-hidden rounded-2xl border-4 border-background shadow-2xl'>
              <Image
                src='/images/profile.jpeg'
                alt='Chris Shockley'
                width={384}
                height={500}
                className='w-full max-w-sm object-cover'
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Philosophy Section */}
      <AnimateIn className='space-y-6 rounded-2xl border border-border bg-linear-to-br from-primary/5 to-accent/5 p-8 shadow-lg'>
        <h2 className='text-3xl font-bold'>My Philosophy</h2>

        <div className='space-y-4 text-lg leading-relaxed text-foreground/80'>
          <p>
            I believe the best software is <strong>invisible</strong>-it just
            works, feels natural, and gets out of the way so users can focus on
            what matters to them.
          </p>
          <p>
            I&apos;m constantly learning, whether it&apos;s diving deep into new
            frameworks, contributing to open source, or exploring how emerging
            technologies can solve real-world problems.
          </p>
        </div>
      </AnimateIn>

      {/* What I'm About Section */}
      <div className='space-y-6'>
        <AnimateIn>
          <h2 className='text-3xl font-bold'>What I&apos;m About</h2>
        </AnimateIn>

        <StaggerContainer className='grid gap-6 sm:grid-cols-2'>
          <StaggerItem className='rounded-xl border border-border bg-card p-6 shadow-lg'>
            <h3 className='mb-3 text-xl font-semibold'>🚀 Continuous Growth</h3>
            <p className='text-muted-foreground'>
              Every day is a chance to learn something new. I actively seek out
              challenges that push me beyond my comfort zone.
            </p>
          </StaggerItem>

          <StaggerItem className='rounded-xl border border-border bg-card p-6 shadow-lg'>
            <h3 className='mb-3 text-xl font-semibold'>🤝 Collaboration</h3>
            <p className='text-muted-foreground'>
              The best solutions come from diverse perspectives. I thrive in
              environments where ideas are freely shared and built upon.
            </p>
          </StaggerItem>

          <StaggerItem className='rounded-xl border border-border bg-card p-6 shadow-lg'>
            <h3 className='mb-3 text-xl font-semibold'>🌱 Purpose-Driven</h3>
            <p className='text-muted-foreground'>
              Technology is a tool for positive change. I&apos;m drawn to
              projects that make a meaningful difference in people&apos;s lives.
            </p>
          </StaggerItem>

          <StaggerItem className='rounded-xl border border-border bg-card p-6 shadow-lg'>
            <h3 className='mb-3 text-xl font-semibold'>🎨 Design Thinking</h3>
            <p className='text-muted-foreground'>
              Fascinated by the intersection of design and engineering. Good UX
              isn&apos;t just about looks-it&apos;s about understanding human
              behavior.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* CTA Section */}
      <AnimateIn className='rounded-2xl border-2 border-primary/50 bg-linear-to-br from-primary/5 to-accent/5 p-8 text-center shadow-lg'>
        <h2 className='mb-4 text-2xl font-bold'>Let&apos;s Connect</h2>
        <p className='mb-6 text-lg text-foreground/80'>
          I&apos;m always open to interesting conversations and opportunities.
        </p>

        <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
          <Button
            size='lg'
            asChild
            className='bg-accent text-accent-foreground hover:scale-105 hover:shadow-xl'
          >
            <Link href='/contact'>
              <Mail className='h-5 w-5' />
              Get in Touch
            </Link>
          </Button>
          <Button
            size='lg'
            asChild
            variant='outline'
            className='border-accent text-accent hover:scale-105 hover:shadow-xl'
          >
            <Link href='/projects'>View My Work</Link>
          </Button>
        </div>
      </AnimateIn>
    </section>
  );
}
