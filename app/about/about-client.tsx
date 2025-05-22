"use client";

import Image from "next/image";
import SkillsMarquee from "@/components/skills-marquee";
import { PageWrapper } from "@/components/ui/animation-provider";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import StructuredData from "@/components/structured-data";
import { generatePersonJsonLd } from "@/lib/jsonld/about";

export default function AboutPageClient() {
  return (
    <PageWrapper>
      <StructuredData data={generatePersonJsonLd() ?? {}} />

      <main
        className="container py-12 px-4"
        role="main"
        aria-labelledby="about-heading"
      >
        <h1 id="about-heading" className="sr-only">
          About Chris Shockley
        </h1>
        <h1 className="text-4xl font-serif font-bold mb-6">About Me</h1>

        <div className="grid gap-12 md:grid-cols-[2fr_1fr] lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <p className="text-lg mb-6 text-muted-foreground max-w-prose">
              I'm Chris Shockley — a Software Developer, U.S. Navy Veteran, and
              passionate problem solver. My journey has taken me from managing
              operations under pressure to building scalable full-stack
              applications that solve real-world problems.
            </p>
            <p className="text-lg mb-6 text-muted-foreground max-w-prose">
              I'm currently enrolled in the Java Developer Bootcamp at Tech
              Elevator, completing over 800 hours of intensive training in Java,
              Spring Boot, SQL, and PostgreSQL. I’ve built full-stack apps with
              Vue.js and REST APIs, practiced Agile methodologies, and applied
              TDD with JUnit in real-world projects.
            </p>
            <p className="text-lg mb-6 text-muted-foreground max-w-prose">
              At Amazon, I’ve optimized fulfillment processes, mentored
              associates, and improved team productivity by over 40%. Before
              that, I led operations at Starbucks, maintaining service
              excellence during pandemic surges and handling $2K+ daily in
              transactions.
            </p>
            <p className="text-lg mb-6 text-muted-foreground max-w-prose">
              As a developer, I specialize in building intuitive, accessible
              applications using tools like Next.js, PostgreSQL, Tailwind CSS,
              and Framer Motion. My portfolio includes a dynamic guestbook app
              and a live Pathfinder Visualizer that renders BFS/DFS algorithms
              in real time.
            </p>
            <p className="text-lg mb-6 text-muted-foreground max-w-prose">
              I'm deeply motivated by continuous learning and believe in
              creating software that empowers people. Whether it's improving
              user experience or mentoring others, I'm here to build solutions
              that make a difference.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild className="flex items-center gap-2">
                <a
                  href="https://drive.google.com/file/d/19AAPzDc09v0wbHsjYfvuuoengx9oM0Mn/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2"
              >
                <a href="mailto:cishockleysr@gmail.com">
                  <Mail size={16} />
                  Contact Me
                </a>
              </Button>
            </div>

            <h2 className="text-2xl font-serif font-bold mt-10 mb-4">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">Java Developer Bootcamp</h3>
                <p className="text-muted-foreground">
                  Tech Elevator • Apr 2024 – Present
                </p>
                <p className="text-muted-foreground text-sm max-w-prose">
                  800+ hours of training in Java, Spring Boot, Vue.js, SQL, REST
                  APIs, and test-driven development using Agile practices.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-bold mt-10 mb-4">
              Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium">Process Assistant</h3>
                <p className="text-muted-foreground">
                  Amazon • Jun 2021 – Present
                </p>
                <p className="mt-2 text-muted-foreground max-w-prose">
                  Led and mentored a team of 10 associates, optimized workflows
                  increasing efficiency by 40%, and resolved high-priority
                  escalations reducing downtime by 25%.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Shift Supervisor</h3>
                <p className="text-muted-foreground">
                  Starbucks • Jul 2017 – Jan 2021
                </p>
                <p className="mt-2 text-muted-foreground max-w-prose">
                  Managed operations and staff, maintained inventory accuracy,
                  and ensured service quality during pandemic-related surges
                  with a reduced team.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="relative w-72 md:w-full max-w-md border-2 border-accent/20 rounded-lg shadow-md overflow-hidden">
                <div className="pt-[125%] relative">
                  <Image
                    src="/images/profile-photo.jpeg"
                    alt="Chris Shockley"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Contact</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:cishockleysr@gmail.com"
                    className="underline hover:text-accent"
                  >
                    cishockleysr@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Location:</strong> Cleveland, OH
                </p>
                <p>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/cishocksr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-accent"
                  >
                    github.com/cishocksr
                  </a>
                </p>
                <p>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://linkedin.com/in/christopherishockley"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-accent"
                  >
                    linkedin.com/in/christopherishockley
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold mb-6 text-center">
            Skills & Technologies
          </h2>
          <SkillsMarquee />
        </div>
      </main>
    </PageWrapper>
  );
}
