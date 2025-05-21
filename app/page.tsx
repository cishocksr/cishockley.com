import { getAllPosts } from "@/lib/mdx";
import { getAllProjects } from "@/lib/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TypewriterComponent from "@/components/typewriter";
import Image from "next/image";
import FeaturedPosts from "@/components/featured-posts";
import FeaturedProjects from "@/components/featured-projects";
import StructuredData from "@/components/structured-data";
import { generateWebsiteJsonLd } from "@/lib/jsonld/home";

export default async function Home() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <main className="flex flex-col min-h-screen">
      <StructuredData data={generateWebsiteJsonLd()} />

      {/* Hero Section */}
      <section className="container px-4 py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-serif font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-accent">Chris Shockley</span>
            </h1>
            <div className="flex items-center text-2xl md:text-3xl font-medium">
              <span className="mr-1">I'm a</span>
              <TypewriterComponent
                words={["Developer", "Veteran", "Philosopher"]}
                className="font-bold text-primary"
                cursorClassName="text-primary animate-blink"
                typingSpeed={100}
                deletingSpeed={40}
                pauseDuration={1200}
              />
            </div>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
              Building digital experiences that make a difference. Focused on
              creating accessible, user-friendly applications with modern
              technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="/guestbook"
                className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90"
                aria-label="Sign guestbook"
              >
                Sign Guestbook <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent/10 hover:text-accent"
                aria-label="View projects"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] overflow-hidden rounded-full border-4 border-secondary">
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

      {/* Featured Projects Section */}
      <section className="bg-card py-12 md:py-24">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-bold tracking-tighter">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-accent hover:text-accent/80 inline-flex items-center"
            >
              View all projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <FeaturedProjects projects={projects} />
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-bold tracking-tighter">
              Latest Articles
            </h2>
            <Link
              href="/blog"
              className="text-accent hover:text-accent/80 inline-flex items-center"
            >
              View all posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <FeaturedPosts posts={posts} />
        </div>
      </section>
    </main>
  );
}
