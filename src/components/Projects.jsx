import { useState } from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import SectionHeading from './SectionHeading';

const FILTERS = ['All', 'Frontend', 'Full-Stack', 'Design', 'Open Source'];

const PROJECTS = [
  {
    id: 'proj-1',
    title: 'Luminary Design System',
    category: 'Design',
    tags: ['Figma', 'Storybook', 'React', 'Tokens'],
    description:
      'A comprehensive design system powering 4 products with 120+ components, automated token pipelines, and a live documentation site.',
    color: 'from-[#cae6ff] to-[#d5bffe]',
    accent: '#1c648e',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Aether Analytics',
    category: 'Full-Stack',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Recharts'],
    description:
      'Real-time business intelligence dashboard with 30+ chart types, row-level security, and sub-100ms query response times.',
    color: 'from-[#d5bffe] to-[#93f993]',
    accent: '#67558c',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'GlassUI Library',
    category: 'Open Source',
    tags: ['React', 'Tailwind', 'TypeScript', 'Rollup'],
    description:
      'An open-source glassmorphism component library with 50+ accessible components and 4k weekly npm downloads.',
    color: 'from-[#93f993] to-[#cae6ff]',
    accent: '#006e20',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 'proj-4',
    title: 'NovaBlog CMS',
    category: 'Full-Stack',
    tags: ['Node.js', 'GraphQL', 'MongoDB', 'React'],
    description:
      'Headless CMS platform for technical writers with MDX support, AI-powered drafting, and edge-cached delivery.',
    color: 'from-[#90cdfd] to-[#d5bffe]',
    accent: '#1c648e',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 'proj-5',
    title: 'Swipe Finance',
    category: 'Frontend',
    tags: ['React Native', 'Expo', 'Reanimated', 'Plaid API'],
    description:
      'Personal finance mobile app with gesture-driven interactions, real-time transaction sync, and biometric auth.',
    color: 'from-[#d5bffe] to-[#cae6ff]',
    accent: '#67558c',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 'proj-6',
    title: 'Void Portfolio Template',
    category: 'Frontend',
    tags: ['Astro', 'Tailwind', 'Framer Motion', 'SEO'],
    description:
      'Free portfolio template boilerplate with Lighthouse score 100 across all categories; used by 800+ developers.',
    color: 'from-[#93f993] to-[#d5bffe]',
    accent: '#006e20',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

/**
 * ProjectCard — glass card for a single project
 */
function ProjectCard({ id, title, category, tags, description, color, accent, github, live }) {
  return (
    <article
      id={id}
      className="glass rounded-xl overflow-hidden hover:shadow-glass-lg hover:scale-[1.02] transition-all duration-300 flex flex-col group"
    >
      {/* Color band */}
      <div className={`h-1.5 bg-gradient-to-r ${color}`} />

      <div className="p-glass flex flex-col gap-4 flex-1">
        {/* Meta */}
        <div className="flex items-center justify-between">
          <span
            className="glass-chip rounded-full px-3 py-0.5 text-[0.65rem] font-sans font-semibold uppercase tracking-widest"
            style={{ color: accent }}
          >
            {category}
          </span>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub`}
              className="w-7 h-7 rounded-full glass flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <GitBranch size={13} />
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live site`}
              className="w-7 h-7 rounded-full glass flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-medium text-h3 text-on-surface leading-tight tracking-wide">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm text-on-surface-variant leading-relaxed flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((t) => (
            <span
              key={t}
              className="glass-chip rounded-full px-2.5 py-0.5 text-[0.7rem] font-sans text-on-surface-variant"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/**
 * Projects Section
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-section px-6" aria-label="Projects section">
      <div className="max-w-container mx-auto flex flex-col gap-12">

        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          subtitle="A curated selection of projects that best represent the range and depth of my work — from design systems to full-stack products."
        />

        {/* Filter pills */}
        <div className="flex flex-wrap gap-3" role="tablist" aria-label="Project filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              id={`filter-${f.toLowerCase().replace(' ', '-')}`}
              role="tab"
              aria-selected={activeFilter === f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full font-sans font-medium text-sm transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-primary text-on-primary shadow-glow-primary'
                  : 'glass text-on-surface-variant hover:text-primary hover:bg-white/60'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded font-sans font-medium text-sm text-primary glass hover:bg-white/60 transition-all duration-200"
          >
            <GitBranch size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
