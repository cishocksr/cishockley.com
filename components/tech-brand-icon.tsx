import { FC, SVGProps } from "react";
import ReactIcon from "@/icons/brands/react";
import TypeScriptIcon from "@/icons/brands/typescript";
import JavaScriptIcon from "@/icons/brands/react";
// import NextJsIcon from "@/icons/brands/nextjs"
// import TailwindIcon from "@/icons/brands/tailwind"

type TechBrandIconProps = {
  name: string;
  size?: number;
  className?: string;
};

const icons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  react: ReactIcon,
  "react.js": ReactIcon,
  typescript: TypeScriptIcon,
  ts: TypeScriptIcon,
  javascript: JavaScriptIcon,
  js: JavaScriptIcon,
  // "next.js": NextJsIcon,
  // nextjs: NextJsIcon,
  // tailwind: TailwindIcon,
  // "tailwind css": TailwindIcon,
};

export default function TechBrandIcon({
  name,
  size = 32,
  className = "",
}: TechBrandIconProps) {
  const tech = name.toLowerCase();
  const Icon = icons[tech];

  if (Icon) {
    return <Icon className={className} width={size} height={size} />;
  }

  // Fallback
  return (
    <div
      className={`flex items-center justify-center border text-xs font-medium text-muted-foreground rounded bg-background ${className}`}
      style={{ width: size, height: size }}
      title={name}
    >
      {name[0].toUpperCase()}
    </div>
  );
}
