import {
  Code2,
  FileJson,
  Database,
  Globe,
  Server,
  Layers,
  Cpu,
  PenTool,
  Palette,
  Workflow,
  Boxes,
  Braces,
  Fingerprint,
  Gauge,
  GitBranch,
  Cloud,
  Cog,
  TestTube,
  LayoutGrid,
  Eye,
  Zap,
  Container,
  Sailboat,
  Atom,
  Leaf,
  FileType,
  BarChart,
  Repeat,
  Webhook,
} from "lucide-react"

type TechIconProps = {
  name: string
  className?: string
  size?: number
}

export default function TechIcon({ name, className = "", size = 16 }: TechIconProps) {
  const iconProps = {
    className,
    size,
  }

  // Convert name to lowercase for case-insensitive matching
  const tech = name.toLowerCase()

  // Map technology names to their respective icons
  switch (tech) {
    // Languages
    case "javascript":
      return <FileJson {...iconProps} />
    case "typescript":
      return <FileType {...iconProps} />
    case "python":
      return <Boxes {...iconProps} />
    case "java":
      return <Coffee {...iconProps} />
    case "c#":
    case "csharp":
      return <Braces {...iconProps} />
    case "php":
      return <FileType {...iconProps} />
    case "ruby":
      return <Gem {...iconProps} />
    case "go":
      return <Sailboat {...iconProps} />
    case "rust":
      return <Cog {...iconProps} />

    // Frontend
    case "react":
      return <Atom {...iconProps} />
    case "vue.js":
    case "vue":
      return <Layers {...iconProps} />
    case "angular":
      return <Webhook {...iconProps} />
    case "svelte":
      return <Zap {...iconProps} />
    case "next.js":
    case "nextjs":
      return <Globe {...iconProps} />
    case "html":
      return <Code2 {...iconProps} />
    case "css":
      return <Palette {...iconProps} />
    case "tailwind":
    case "tailwind css":
      return <Wind {...iconProps} />
    case "bootstrap":
      return <LayoutGrid {...iconProps} />
    case "sass":
    case "scss":
      return <Palette {...iconProps} />

    // Backend
    case "node.js":
    case "nodejs":
      return <Server {...iconProps} />
    case "express":
      return <Server {...iconProps} />
    case "django":
      return <Server {...iconProps} />
    case "flask":
      return <Beaker {...iconProps} />
    case "spring":
      return <Leaf {...iconProps} />
    case "laravel":
      return <Server {...iconProps} />
    case "asp.net":
      return <Server {...iconProps} />

    // Databases
    case "mongodb":
      return <Database {...iconProps} />
    case "postgresql":
    case "postgres":
      return <Database {...iconProps} />
    case "mysql":
      return <Database {...iconProps} />
    case "sqlite":
      return <Database {...iconProps} />
    case "redis":
      return <Database {...iconProps} />
    case "firebase":
      return <Flame {...iconProps} />
    case "supabase":
      return <Database {...iconProps} />
    case "prisma":
      return <Database {...iconProps} />

    // DevOps & Tools
    case "git":
      return <GitBranch {...iconProps} />
    case "github":
      return <GitBranch {...iconProps} />
    case "docker":
      return <Container {...iconProps} />
    case "kubernetes":
    case "k8s":
      return <Container {...iconProps} />
    case "aws":
      return <Cloud {...iconProps} />
    case "azure":
      return <Cloud {...iconProps} />
    case "gcp":
      return <Cloud {...iconProps} />
    case "vercel":
      return <Triangle {...iconProps} />
    case "netlify":
      return <Cloud {...iconProps} />
    case "ci/cd":
      return <Repeat {...iconProps} />

    // Testing
    case "jest":
      return <TestTube {...iconProps} />
    case "cypress":
      return <TestTube {...iconProps} />
    case "testing library":
      return <TestTube {...iconProps} />
    case "mocha":
      return <TestTube {...iconProps} />

    // Other
    case "graphql":
      return <Workflow {...iconProps} />
    case "rest api":
    case "api":
      return <Webhook {...iconProps} />
    case "redux":
      return <BarChart {...iconProps} />
    case "webpack":
      return <Package {...iconProps} />
    case "vite":
      return <Zap {...iconProps} />
    case "accessibility":
      return <Eye {...iconProps} />
    case "performance":
      return <Gauge {...iconProps} />
    case "security":
      return <Fingerprint {...iconProps} />
    case "seo":
      return <Search {...iconProps} />
    case "responsive design":
      return <Smartphone {...iconProps} />
    case "pwa":
      return <Smartphone {...iconProps} />
    case "web components":
      return <Layers {...iconProps} />
    case "jamstack":
      return <Layers {...iconProps} />
    case "mdx":
      return <FileText {...iconProps} />
    case "cms":
      return <FileText {...iconProps} />
    case "ai":
      return <Cpu {...iconProps} />
    case "machine learning":
      return <Cpu {...iconProps} />
    case "web3":
      return <Workflow {...iconProps} />
    case "blockchain":
      return <Link {...iconProps} />
    case "design":
      return <PenTool {...iconProps} />
    case "figma":
      return <PenTool {...iconProps} />
    case "sketch":
      return <PenTool {...iconProps} />
    case "adobe xd":
      return <PenTool {...iconProps} />
    case "photoshop":
      return <Image {...iconProps} />
    case "illustrator":
      return <PenTool {...iconProps} />

    // Default
    default:
      return <Code2 {...iconProps} />
  }
}

// Additional icons not included in the imports
function Coffee({ className = "", size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  )
}

function Gem({ className = "", size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  )
}

function Wind({ className = "", size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}

function Beaker({ className = "", size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  )
}

function Flame({ className = "", size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}

function Triangle({ className = "", size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    </svg>
  )
}

function Package({ className = "", size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.29 7 12 12l8.71-5M12 22V12" />
    </svg>
  )
}

function Search({ className = "", size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function Smartphone({ className = "", size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}

function FileText({ className = "", size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}

function Link({ className = "", size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

function Image({ className = "", size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}
