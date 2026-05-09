import SectionHeading from './SectionHeading';
import { MapPin, Calendar } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 'exp-1',
    role: 'Senior Frontend Engineer',
    company: 'Vercel',
    period: '2023 – Present',
    location: 'Remote',
    type: 'Full-time',
    color: '#1c648e',
    highlights: [
      'Led the re-architecture of the dashboard UI, reducing bundle size by 42%.',
      'Defined and enforced design-token pipelines across 6 product teams.',
      'Mentored 4 junior engineers, running weekly code review sessions.',
      'Shipped 3 major feature launches with zero P0 incidents.',
    ],
  },
  {
    id: 'exp-2',
    role: 'UI/UX Engineer',
    company: 'Stripe',
    period: '2021 – 2023',
    location: 'San Francisco, CA',
    type: 'Full-time',
    color: '#67558c',
    highlights: [
      'Designed and built the Stripe Elements redesign (used by 4M+ developers).',
      'Established the "Motion Budget" accessibility standard for animations.',
      'Collaborated with Research to run 30+ usability studies.',
      'Built an internal a11y audit CLI tool adopted company-wide.',
    ],
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer',
    company: 'Notion',
    period: '2019 – 2021',
    location: 'Remote',
    type: 'Full-time',
    color: '#006e20',
    highlights: [
      'Contributed core editor performance improvements (20ms → 4ms render time).',
      'Built the public API explorer and code embed experience.',
      'Shipped the i18n infrastructure for 15 language localizations.',
    ],
  },
  {
    id: 'exp-4',
    role: 'Design Engineer Intern',
    company: 'Figma',
    period: 'Summer 2018',
    location: 'San Francisco, CA',
    type: 'Internship',
    color: '#1c648e',
    highlights: [
      'Prototyped the initial "Interactive Components" feature concept.',
      'Built 3 internal tooling utilities still in use by the design team.',
    ],
  },
];

/**
 * Experience Section — vertical timeline
 */
export default function Experience() {
  return (
    <section id="experience" className="py-section px-6" aria-label="Experience section">
      <div className="max-w-container mx-auto flex flex-col gap-12">

        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          subtitle="Building products people love at world-class companies — from scrappy startups to design-led giants."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div
            className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px hidden lg:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(28,100,142,0.2), transparent)' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                id={exp.id}
                className={`relative grid lg:grid-cols-2 gap-6 lg:gap-12 items-start ${
                  idx % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Timeline dot — desktop */}
                <div
                  className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 border-white z-10"
                  style={{ background: exp.color }}
                  aria-hidden="true"
                />

                {/* Card — alternate sides on desktop */}
                <div
                  className={`glass rounded-xl p-glass hover:shadow-glass-lg hover:scale-[1.01] transition-[transform,box-shadow] duration-300 will-change-transform ${
                    idx % 2 !== 0 ? 'lg:col-start-2' : ''
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display font-medium text-h3 text-on-surface tracking-wide">
                        {exp.role}
                      </h3>
                      <p
                        className="font-sans font-semibold text-sm mt-0.5"
                        style={{ color: exp.color }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="glass-chip rounded-full px-3 py-1 text-[0.65rem] font-sans font-semibold label-caps shrink-0"
                      style={{ color: exp.color }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-5 text-xs text-on-surface-variant font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2 text-sm text-on-surface-variant font-sans leading-relaxed"
                      >
                        <span
                          className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: exp.color }}
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Empty col for alternating layout on desktop */}
                {idx % 2 !== 0 && <div className="hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
