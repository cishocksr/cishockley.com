"use client";

import { useState } from "react";
import TechBrandIcon from "@/components/tech-brand-icon";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      <TooltipProvider>
        <div
          className="flex gap-4 whitespace-nowrap will-change-transform animate-marquee
          hover:[animation-play-state:paused]"
          onTouchStart={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState =
              "paused";
          }}
          onTouchEnd={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState =
              "running";
          }}
        >
          {marqueeSkills.map((skill, i) => (
            <motion.div
              key={`${skill}-${i}`}
              className="p-3 bg-secondary rounded-md flex flex-col items-center min-w-[5rem] sm:min-w-[6rem] md:min-w-[7rem]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <TechBrandIcon name={skill} size={28} />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p className="text-sm">{skill}</p>
                </TooltipContent>
              </Tooltip>
              <span className="text-xs mt-1 text-center">{skill}</span>
            </motion.div>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}
