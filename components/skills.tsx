import { motion } from 'motion/react'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/lib/motion'

const skills = [
    // Frontend
    { name: 'React', category: 'frontend', proficiency: 95 },
    { name: 'Next.js', category: 'frontend', proficiency: 90 },
    { name: 'TypeScript', category: 'frontend', proficiency: 90 },
    { name: 'JavaScript', category: 'frontend', proficiency: 95 },
    { name: 'Tailwind CSS', category: 'frontend', proficiency: 95 },
    { name: 'HTML5', category: 'frontend', proficiency: 95 },
    { name: 'CSS3', category: 'frontend', proficiency: 90 },
    { name: 'Framer Motion', category: 'frontend', proficiency: 85 },

    // Backend
    { name: 'Node.js', category: 'backend', proficiency: 85 },
    { name: 'Express', category: 'backend', proficiency: 80 },
    { name: 'Java', category: 'backend', proficiency: 75 },
    { name: 'RESTful APIs', category: 'backend', proficiency: 90 },
    { name: 'Server Actions', category: 'backend', proficiency: 85 },

    // Database
    { name: 'PostgreSQL', category: 'database', proficiency: 85 },
    { name: 'Supabase', category: 'database', proficiency: 90 },
    { name: 'MongoDB', category: 'database', proficiency: 80 },
    { name: 'SQL', category: 'database', proficiency: 85 },

    // Tools
    { name: 'Git', category: 'tools', proficiency: 95 },
    { name: 'GitHub', category: 'tools', proficiency: 95 },
    { name: 'Vercel', category: 'tools', proficiency: 90 },
    { name: 'VS Code', category: 'tools', proficiency: 95 },
    { name: 'npm/pnpm', category: 'tools', proficiency: 90 },
    { name: 'Agile', category: 'tools', proficiency: 85 },
    { name: 'CI/CD', category: 'tools', proficiency: 80 },
    { name: 'Responsive Design', category: 'tools', proficiency: 95 },
]

const currentlyLearning = [
    'Advanced TypeScript Patterns',
    'System Design',
    'Docker & Kubernetes',
]

// Gradient styles for different categories
const categoryGradients = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-purple-500 to-pink-500',
    database: 'from-green-500 to-emerald-500',
    tools: 'from-orange-500 to-red-500',
}

const categoryColors = {
    frontend:
        'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20',
    backend:
        'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20',
    database:
        'bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20',
    tools:
        'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20',
}

export function SkillsSection() {
    return (
        <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="space-y-8"
        >
            <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Technologies I use to build modern, scalable web applications
                </p>
            </div>

            {/* Gradient Badge Cloud */}
            <div className="relative">
                <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.02,
                                ease: 'easeOut',
                            }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                            className={`relative rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:shadow-lg ${categoryColors[skill.category as keyof typeof categoryColors]} `}
                        >
                            <span className="relative z-10">{skill.name}</span>

                            {/* Hover glow effect */}
                            <motion.div
                                className={`absolute inset-0 rounded-full bg-gradient-to-r ${categoryGradients[skill.category as keyof typeof categoryGradients]} opacity-0`}
                                whileHover={{ opacity: 0.1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Category Legend */}
            <div className="flex flex-wrap justify-center gap-4 pt-4 sm:justify-start">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        Frontend
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        Backend
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        Database
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        Tools & Practices
                    </span>
                </div>
            </div>

            {/* Currently Learning */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative overflow-hidden rounded-2xl border-2 border-dashed border-purple-300/50 bg-gradient-to-br from-purple-50 to-pink-50 p-6 dark:border-purple-700/50 dark:from-purple-950/20 dark:to-pink-950/20"
            >
                <div className="absolute -top-8 -right-8 text-8xl opacity-10">📚</div>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    <span className="text-2xl">🌱</span>
                    Currently Learning
                </h3>
                <div className="flex flex-wrap gap-3">
                    {currentlyLearning.map((item, index) => (
                        <motion.span
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                            className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow-md"
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    )
}
