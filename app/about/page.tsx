import Image from "next/image"
import SkillsMarquee from "@/components/skills-marquee"
import { PageWrapper } from "@/components/ui/animation-provider"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn about Chris Shockley's background, skills, and experience as a software developer and veteran.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Chris Shockley | Software Developer",
    description: "Learn about Chris Shockley's background, skills, and experience as a software developer and veteran.",
    url: "/about",
    type: "profile",
    images: [
      {
        url: "/images/profile-photo.jpeg",
        width: 800,
        height: 600,
        alt: "Chris Shockley",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="container py-12 px-4">
        <h1 className="text-4xl font-serif font-bold mb-6">About Me</h1>

        <div className="grid gap-12 md:grid-cols-[2fr_1fr] lg:gap-16 items-start">
          <div>
            <p className="text-lg mb-6 text-muted-foreground">
              Hello! I'm a passionate developer with expertise in building modern web applications. With a background in
              both frontend and backend development, I enjoy creating seamless user experiences with clean, efficient
              code.
            </p>

            <p className="text-lg mb-6 text-muted-foreground">
              I'm a veteran who served in the military for several years, where I developed strong leadership skills,
              discipline, and the ability to work under pressure. These experiences have shaped my approach to
              problem-solving and teamwork in the tech industry.
            </p>

            <p className="text-lg mb-6 text-muted-foreground">
              As a philosopher at heart, I'm constantly exploring new ideas and perspectives. I believe in the power of
              technology to improve lives and create meaningful connections. My goal is to build applications that are
              not only functional but also thoughtful and accessible.
            </p>

            <p className="text-lg mb-6 text-muted-foreground">
              When I'm not coding, you can find me reading philosophy books, hiking in nature, or experimenting with new
              technologies. I'm always open to new opportunities and collaborations, so feel free to reach out!
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="flex items-center gap-2">
                <Download size={16} />
                Download Resume
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail size={16} />
                Contact Me
              </Button>
            </div>

            <h2 className="text-2xl font-serif font-bold mt-10 mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">University of Technology • 2015-2019</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Full Stack Web Development Bootcamp</h3>
                <p className="text-muted-foreground">Code Academy • 2020</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-bold mt-10 mb-4">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium">Senior Frontend Developer</h3>
                <p className="text-muted-foreground">Tech Solutions Inc. • 2021-Present</p>
                <p className="mt-2 text-muted-foreground">
                  Leading frontend development for enterprise applications, implementing best practices, and mentoring
                  junior developers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Full Stack Developer</h3>
                <p className="text-muted-foreground">Digital Innovations • 2019-2021</p>
                <p className="mt-2 text-muted-foreground">
                  Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with design
                  and product teams to deliver high-quality software.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="relative w-72 md:w-full max-w-md border-2 border-accent/20 rounded-lg shadow-md overflow-hidden">
                {/* Using a fixed aspect ratio container to prevent cropping */}
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
                  <strong>Email:</strong> chris@example.com
                </p>
                <p>
                  <strong>Location:</strong> San Francisco, CA
                </p>
                <p>
                  <strong>GitHub:</strong> github.com/chrisshockley
                </p>
                <p>
                  <strong>LinkedIn:</strong> linkedin.com/in/chrisshockley
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold mb-6 text-center">Skills & Technologies</h2>
          <SkillsMarquee />
        </div>
      </div>
    </PageWrapper>
  )
}
