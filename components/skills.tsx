import { motion } from 'motion/react';
import { TRANSITION_SECTION, VARIANTS_SECTION } from '@/components/motion';

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
];

const currentlyLearning = [
  'Advanced TypeScript Patterns',
  'System Design',
  'Docker & Kubernetes',
];

// Gradient styles for different categories
const categoryGradients = {
  frontend:
    'from-[oklch(var(--skill-royal-from))]   to-[oklch(var(--skill-royal-to))]',
  backend:
    'from-[oklch(var(--skill-burgundy-from))] to-[oklch(var(--skill-burgundy-to))]',
  database:
    'from-[oklch(var(--skill-crimson-from))]  to-[oklch(var(--skill-crimson-to))]',
  tools:
    'from-[oklch(var(--skill-steel-from))]    to-[oklch(var(--skill-steel-to))]',
};

const categoryColors = {
  frontend:
    'bg-[oklch(var(--skill-royal-from)/0.12)]    text-[oklch(var(--skill-royal-to))]    border-[oklch(var(--skill-royal-from)/0.25)]',
  backend:
    'bg-[oklch(var(--skill-burgundy-from)/0.12)] text-[oklch(var(--skill-burgundy-to))] border-[oklch(var(--skill-burgundy-from)/0.25)]',
  database:
    'bg-[oklch(var(--skill-crimson-from)/0.12)]  text-[oklch(var(--skill-crimson-to))]  border-[oklch(var(--skill-crimson-from)/0.25)]',
  tools:
    'bg-[oklch(var(--skill-steel-from)/0.12)]    text-[oklch(var(--skill-steel-to))]    border-[oklch(var(--skill-steel-from)/0.25)]',
};

export function SkillsSection() {
  return (
    <motion.section
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
      className='space-y-8'
    >
      <div className='space-y-2'>
        <h2 className='text-2xl font-bold tracking-tight'>Technical Skills</h2>
        <p className='text-muted-foreground'>
          Technologies I use to build modern, scalable web applications
        </p>
      </div>

      {/* Gradient Badge Cloud */}
      <div className='relative'>
        <div className='flex flex-wrap justify-center gap-3 sm:justify-start'>
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
              <span className='relative z-10'>{skill.name}</span>

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
      <div className='flex flex-wrap justify-center gap-4 pt-4 sm:justify-start'>
        <div className='flex items-center gap-2'>
          <div className='h-3 w-3 rounded-full bg-gradient-to-r from-[oklch(var(--skill-royal-from))] to-[oklch(var(--skill-royal-to))]' />

          <span className='text-sm text-muted-foreground'>Frontend</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='h-3 w-3 rounded-full bg-gradient-to-r from-[oklch(var(--skill-burgundy-from))] to-[oklch(var(--skill-burgundy-to))]' />

          <span className='text-sm text-muted-foreground'>Backend</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='h-3 w-3 rounded-full bg-gradient-to-r from-[oklch(var(--skill-crimson-from))] to-[oklch(var(--skill-crimson-to))]' />

          <span className='text-sm text-muted-foreground'>Database</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='h-3 w-3 rounded-full bg-gradient-to-r from-[oklch(var(--skill-steel-from))] to-[oklch(var(--skill-steel-to))]' />

          <span className='text-sm text-muted-foreground'>
            Tools & Practices
          </span>
        </div>
      </div>

      {/* Currently Learning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='relative overflow-hidden rounded-2xl border-2 border-dashed border-accent/30 bg-accent/5 p-6'
      >
        <div className='absolute -top-8 -right-8 text-8xl opacity-10'>📚</div>
        <h3 className='mb-4 flex items-center gap-2 text-lg font-semibold text-foreground'>
          <span className='text-2xl'>🌱</span>
          Currently Learning
        </h3>
        <div className='flex flex-wrap gap-3'>
          {currentlyLearning.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              className='inline-block rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow-md'
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
