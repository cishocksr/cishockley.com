import type { Project } from "@/types";
import path from "path";
import fs from "fs/promises";
import allProjects from "@/content/projects.json";


const PROJECTS_PATH = path.join(process.cwd(), "content/projects.json");

export async function getAllProjects(): Promise<Project[]> {
  const file = await fs.readFile(PROJECTS_PATH, "utf-8");
  return JSON.parse(file);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return (allProjects as Project[]).filter((p) => p.featured);
}