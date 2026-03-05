'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import ProjectCard from '@/app/projects/components/project-card';
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
  VARIANTS_HERO_CONTAINER,
  VARIANTS_HERO_ITEM,
} from '@/components/motion';
import { SkillsSection } from '@/components/skills';
import Typewriter from '@/components/typewriter';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/config/social';

type FeaturedProject = {
  slug: string;
  title: string;
  description?: string;
  tags?: string[];
  status: 'planning' | 'in-progress' | 'completed';
  githubLink?: string;
  projectUrl?: string;
  image?: string;
};

type RecentPost = {
  slug: string;
  permalink: string;
  title: string;
  description?: string;
  tags?: string[];
  date: string;
};

type HomeContentProps = {
  featuredProjects: FeaturedProject[];
  recentPosts: RecentPost[];
};

export default function HomeContent({
  featuredProjects,
  recentPosts,
}: HomeContentProps) {
  return (
    <div className='flex flex-col'>
      {/* Hero Section */}
      <section className='container-section flex min-h-[80vh] max-w-6xl flex-col items-center justify-center py-20 text-center'>
        <motion.div
          className='mb-6'
          variants={VARIANTS_HERO_CONTAINER}
          initial='hidden'
          animate='visible'
        >
          <motion.p
            variants={VARIANTS_HERO_ITEM}
            className='mb-2 text-xl text-muted-foreground md:text-2xl'
          >
            Hey, I&apos;m Chris &mdash;
          </motion.p>
          <motion.div variants={VARIANTS_HERO_ITEM}>
            <Typewriter
              phrases={[
                'I build modern web apps.',
                'I served in the U.S. Navy.',
                'I bring communities together.',
                'I contribute to open source.',
                'I craft great user experiences.',
              ]}
              typingSpeed={70}
              deletingSpeed={50}
              pauseDuration={2500}
              className='min-h-[2.75rem] text-4xl font-bold bg-linear-to-r from-primary-deep via-primary to-accent bg-clip-text text-transparent md:min-h-[4rem] md:text-5xl lg:text-6xl'
            />
          </motion.div>
          <motion.p
            variants={VARIANTS_HERO_ITEM}
            className='mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl'
          >
            Full-stack developer with a focus on user experience and clean code.
          </motion.p>
        </motion.div>

        <motion.div
          className='flex flex-wrap justify-center gap-4'
          variants={VARIANTS_HERO_ITEM}
        >
          <Button
            size='lg'
            asChild
            className='bg-accent text-accent-foreground hover:bg-accent/90'
          >
            <Link href='/projects'>
              View My Work
              <FiArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
          <Button
            size='lg'
            variant='outline'
            asChild
            className='border-accent text-accent hover:bg-accent hover:text-accent-foreground'
          >
            <Link href='/contact'>Get In Touch</Link>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className='mt-8 flex gap-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.name === 'Email' ? undefined : '_blank'}
                rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                className='text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm'
              >
                <Icon className='h-6 w-6' />
              </a>
            );
          })}
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className='border-t border-border bg-muted/50 py-20'>
          <div className='container-section max-w-7xl'>
            <AnimateIn className='mb-12 text-center'>
              <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
                Featured Projects
              </h2>
              <p className='text-lg text-muted-foreground'>
                Some of my recent work
              </p>
            </AnimateIn>

            <StaggerContainer className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {featuredProjects.map((project) => (
                <StaggerItem key={project.slug}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    status={project.status}
                    githubLink={project.githubLink}
                    projectUrl={project.projectUrl}
                    image={project.image}
                    slug={project.slug}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimateIn className='mt-12 text-center' delay={0.3}>
              <Button
                variant='outline'
                asChild
                className='bg-accent text-accent-foreground hover:bg-accent/90'
              >
                <Link href='/projects'>
                  View All Projects
                  <FiArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* Recent Blog Posts Section */}
      {recentPosts.length > 0 && (
        <section className='border-t border-border py-20'>
          <div className='container-section max-w-7xl'>
            <AnimateIn className='mb-12 text-center'>
              <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
                Latest Posts
              </h2>
              <p className='text-lg text-muted-foreground'>
                Thoughts on development, learning, and more
              </p>
            </AnimateIn>

            <StaggerContainer className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {recentPosts.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link
                    href={post.permalink}
                    className='group block rounded-lg border-l-4 border-l-primary border border-border p-6 transition-all hover:border-l-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                    aria-label={`Read article: ${post.title}`}
                  >
                    <h3 className='mb-2 text-xl font-semibold group-hover:text-primary transition-colors'>
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className='mb-3 text-muted-foreground'>
                        {post.description}
                      </p>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <div className='mb-3 flex flex-wrap gap-1.5'>
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className='rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className='flex items-center justify-between text-sm text-muted-foreground'>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className='transition-transform group-hover:translate-x-1'>
                        →
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimateIn className='mt-12 text-center' delay={0.3}>
              <Button variant='outline' asChild>
                <Link href='/blog'>
                  View All Posts
                  <FiArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      <section className='border-t border-border bg-muted/30 py-20'>
        <AnimateIn className='container-section max-w-5xl text-center'>
          <SkillsSection />
        </AnimateIn>
      </section>

      {/* CTA Section */}
      <section className='bg-linear-to-br from-primary to-accent py-20'>
        <AnimateIn className='container-section max-w-4xl text-center'>
          <h2 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
            Let&apos;s Work Together
          </h2>
          <p className='mb-8 text-lg text-white/80'>
            I&apos;m always open to discussing new projects, opportunities, or
            how I can help bring your ideas to life.
          </p>
          <Button
            size='lg'
            asChild
            className='bg-white text-primary hover:bg-white/90'
          >
            <Link href='/contact'>
              Get In Touch
              <FiArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </AnimateIn>
      </section>
    </div>
  );
}
