import SectionHeading from './SectionHeading';
import { Code2, Palette, Layers, Cpu, Database, Globe } from 'lucide-react';

const BIO_STATS = [
  { value: '5+',  label: 'Years Experience' },
  { value: '40+', label: 'Projects Shipped' },
  { value: '15+', label: 'Happy Clients' },
  { value: '3',   label: 'Open Source Libs' },
];

const PASSIONS = [
  { icon: Code2,    title: 'Clean Code',     desc: 'Obsessed with readable, maintainable architecture.' },
  { icon: Palette,  title: 'Design Systems', desc: 'Building scalable, consistent visual languages.' },
  { icon: Layers,   title: 'Performance',    desc: 'Squeezing every millisecond out of the critical path.' },
  { icon: Cpu,      title: 'AI Integration', desc: 'Weaving intelligence into everyday user flows.' },
  { icon: Database, title: 'Data Pipelines', desc: 'ETL, streaming, and making data products people love.' },
  { icon: Globe,    title: 'Web Standards',  desc: 'A11y, SEO, and the open web as a first-class concern.' },
];

/**
 * About Section
 * Bio narrative, stat counters, and passion tiles.
 */
export default function About() {
  return (
    <section id="about" className="py-section px-6" aria-label="About section">
      <div className="max-w-container mx-auto flex flex-col gap-16">

        {/* Heading */}
        <SectionHeading
          eyebrow="About Me"
          title="Hello, I'm Pichaya."
          subtitle="A full-stack engineer turned design-system architect. I build the things that live between
          the API response and the user's smile — responsive interfaces, component libraries, and
          the invisible glue that makes software feel effortless."
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BIO_STATS.map(({ value, label }) => (
            <div
              key={label}
              className="glass rounded-xl p-8 flex flex-col gap-1 hover:bg-white/60 transition-[transform,box-shadow,background-color] duration-300 will-change-transform group"
            >
              <span className="font-display font-light text-4xl text-gradient">{value}</span>
              <span className="label-caps text-on-surface-variant group-hover:text-primary transition-colors">{label}</span>
            </div>
          ))}
        </div>

        {/* Passions grid */}
        <div>
          <h3 className="font-display font-medium text-h3 text-on-surface mb-8 tracking-wide">
            What I Care About
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PASSIONS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass rounded-xl p-glass flex gap-4 items-start hover:scale-[1.02] hover:shadow-glass-lg transition-[transform,box-shadow] duration-300 will-change-transform"
              >
                <div className="shrink-0 w-10 h-10 rounded-md flex items-center justify-center bg-primary/10">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-sm text-on-surface mb-1">{title}</h4>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
