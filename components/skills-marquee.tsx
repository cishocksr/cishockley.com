"use client";

import TechBrandIcon from "@/components/tech-brand-icon";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "CI/CD",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "AWS",
  "Redux",
  "Jest",
  "Prisma",
  "Vercel",
];

export default function SkillsMarquee() {
  const marqueeSkills = [...skills, ...skills]; // Repeat for loop

  return (
    <div className="overflow-hidden py-6 relative" aria-hidden="true">
      <div className="flex gap-4 whitespace-nowrap will-change-transform animate-marquee hover:[animation-play-state:paused]">
        {marqueeSkills.map((skill, i) => (
          <div
            key={`${skill}-${i}`}
            className="p-3 bg-secondary rounded-md flex flex-col items-center w-20"
          >
            <TechBrandIcon name={skill} size={28} />
            <span className="text-xs mt-1 text-center">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
