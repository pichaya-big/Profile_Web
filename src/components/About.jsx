import SectionHeading from './SectionHeading';
import { Code2, Brain, Cloud, Server, MessageSquare, ShieldCheck } from 'lucide-react';

const BIO_STATS = [
  { value: '1+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Shipped' },
  { value: '15+', label: 'Happy Clients' },
  // { value: '3',   label: 'Open Source Libs' },
];

const PASSIONS = [
  { icon: Brain, title: 'AI Architectures', desc: 'Orchestrating custom multi-agent systems and specialized knowledge bots.' },
  { icon: Code2, title: 'Full-Stack Web', desc: 'Building end-to-end, responsive applications with seamless user experiences.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Deploying scalable and reliable environments to power intensive workloads.' },
  { icon: Server, title: 'Infrastructure', desc: 'Designing robust foundational architectures and automated deployment pipelines.' },
  { icon: MessageSquare, title: 'Seamless Integration', desc: 'Connecting intelligent systems into platforms like LINE for frictionless workflows.' },
  { icon: ShieldCheck, title: 'Secure Engineering', desc: 'Protecting codebases with strict access controls and secure repository management.' },
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
          subtitle="I am a versatile software engineer passionate about transforming complex business challenges into streamlined technological solutions. By combining my expertise in Artificial Intelligence, Full-Stack Web Development, and Cloud Infrastructure, I oversee the entire software lifecycle. Whether it is building intelligent systems that can process specialized organizational knowledge or deploying them securely to the web, I focus on delivering scalable and practical results."
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
