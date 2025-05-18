"use client";

import TechBrandIcon from "@/components/tech-brand-icon";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "CI/CD",
  "Jest",
  "React Testing Library",
  "Responsive Design",
  "Accessibility",
  "Performance Optimization",
  "AWS",
  "Docker",
  "Kubernetes",
  "Redux",
  "React Query",
  "Prisma",
  "Vercel",
];

export default function SkillsMarquee() {
  const marqueeSkills = [...skills, ...skills];

  return (
    <div className="overflow-hidden py-6 relative" aria-hidden="true">
      <div className="flex gap-4 whitespace-nowrap will-change-transform animate-marquee hover:[animation-play-state:paused]">
        {marqueeSkills.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="p-3 bg-secondary rounded-md"
          >
            <TechBrandIcon name={skill} size={28} />
          </div>
        ))}
      </div>
    </div>
  );
}
