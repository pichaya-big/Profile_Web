import SectionHeading from './SectionHeading';

/**
 * Chip / Tag pill component
 */
function Chip({ label }) {
  return (
    <span className="glass-chip rounded-full px-3 py-1 text-xs font-sans font-medium text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors duration-200 cursor-default">
      {label}
    </span>
  );
}

/**
 * Skill category card
 */
function SkillCategory({ title, color, skills, icon }) {
  return (
    <div className="glass rounded-xl p-glass flex flex-col gap-5 hover:shadow-glass-lg hover:scale-[1.01] transition-[transform,box-shadow] duration-300 will-change-transform">
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-md flex items-center justify-center text-white text-base font-bold"
          style={{ background: color }}
        >
          {icon}
        </div>
        <h3 className="font-sans font-medium text-sm text-on-surface">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => <Chip key={s} label={s} />)}
      </div>
    </div>
  );
}

/**
 * Proficiency bar item
 */
function ProficiencyBar({ label, level }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between text-xs font-sans text-on-surface-variant">
        <span>{label}</span>
        <span>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-surface-variant overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

const SKILL_CATEGORIES = [
  {
    color: '#1c648e',
    icon: '⚡',
    skills: ['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Web Components', 'Angular'],
    title: 'Frontend',
  },
  {
    color: '#67558c',
    icon: '🔧',
    skills: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Prisma', 'APS.NET', 'NestJS'],
    title: 'Backend',
  },
  {
    color: '#006e20',
    icon: '🎨',
    skills: ['Figma', 'Design Systems', 'Glassmorphism', 'Motion Design', 'Stitch'],
    title: 'Design',
  },
  {
    color: '#1c648e',
    icon: '☁️',
    skills: ['Docker', 'CI/CD', 'Nginx', 'GitHub Actions'],
    title: 'DevOps & Cloud',
  },
];

const PROFICIENCIES = [
  { label: 'React / Next.js', level: 95 },
  { label: 'TypeScript', level: 90 },
  { label: 'Node.js', level: 88 },
  { label: 'UI/UX Design', level: 82 },
  { label: 'DevOps', level: 75 },
  { label: 'Machine Learning', level: 90 },
];

/**
 * Skills Section
 */
export default function Skills() {
  return (
    <section id="skills" className="py-section px-6" aria-label="Skills section">
      <div className="max-w-container mx-auto flex flex-col gap-14">

        <SectionHeading
          eyebrow="Expertise"
          title="Skills & Technologies"
          subtitle="A curated stack refined through years of shipping production software — from pixel-perfect UIs to distributed backend systems."
          center
        />

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((cat) => (
            <SkillCategory key={cat.title} {...cat} />
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="glass rounded-xl p-glass md:p-10">
          <h3 className="font-sans font-medium text-sm text-on-surface mb-8">Core Proficiency</h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {PROFICIENCIES.map((p) => (
              <ProficiencyBar key={p.label} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
