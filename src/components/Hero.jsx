import { useEffect, useRef } from 'react';
import { GitBranch, Globe, Mail, ArrowDown } from 'lucide-react';

/**
 * Hero Section
 * Full-viewport opening section with animated headline, subtitle,
 * social links, and scroll CTA.
 */
export default function Hero() {
  const heroRef = useRef(null);

  // Parallax tilt effect on mousemove — rAF-throttled to avoid per-event repaints
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    el.style.willChange = 'transform';
    let rafId = null;
    let latestX = 0, latestY = 0;

    const handleMove = (e) => {
      latestX = e.clientX;
      latestY = e.clientY;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const cx = globalThis.innerWidth / 2;
        const cy = globalThis.innerHeight / 2;
        const dx = (latestX - cx) / cx;
        const dy = (latestY - cy) / cy;
        el.style.transform = `perspective(800px) rotateY(${dx * 2}deg) rotateX(${-dy * 2}deg)`;
        rafId = null;
      });
    };

    const handleLeave = () => {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
    };

    globalThis.addEventListener('mousemove', handleMove, { passive: true });
    globalThis.addEventListener('mouseleave', handleLeave);
    return () => {
      globalThis.removeEventListener('mousemove', handleMove);
      globalThis.removeEventListener('mouseleave', handleLeave);
      if (rafId) cancelAnimationFrame(rafId);
      el.style.willChange = 'auto';
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-section"
      aria-label="Hero section"
    >
      <div className="max-w-container mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text Content */}
        <div className="flex flex-col gap-6 animate-fade-up">
          {/* Label */}
          <span className="label-caps text-primary inline-flex items-center gap-2">
            <span className="w-6 h-px bg-primary" aria-hidden="true"></span>
            Creative Engineer
          </span>

          {/* Headline */}
          <h1 className="font-display font-light text-[clamp(2.5rem,6vw,3.5rem)] leading-[1.2] tracking-wider text-on-surface">
            Crafting{' '}
            <span className="text-gradient font-medium">Digital</span>
            <br />
            Experiences
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
            Full-stack developer & UI designer passionate about building products
            that live at the intersection of <em>technical excellence</em> and{' '}
            <em>beautiful design</em>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              id="hero-cta-projects"
              href="#projects"
              className="px-7 py-3 rounded font-sans font-medium text-sm text-on-primary bg-primary hover:bg-primary/90 transition-all duration-200 shadow-glow-primary"
            >
              View Projects
            </a>
            <a
              id="hero-cta-contact"
              href="#contact"
              className="px-7 py-3 rounded font-sans font-medium text-sm text-primary glass hover:bg-white/60 transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-2">
            {[
              { icon: GitBranch, href: 'https://github.com', label: 'GitHub' },
              { icon: Globe, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full glass text-on-surface-variant hover:text-primary hover:scale-110 transition-[transform,color] duration-200 will-change-transform"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — Glass Avatar Card */}
        <div className="flex justify-center lg:justify-end">
          <div
            ref={heroRef}
            className="relative w-72 h-72 md:w-80 md:h-80 transition-transform duration-200 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-container via-secondary-container to-tertiary-container opacity-60 blur-xl animate-float" />

            {/* Glass avatar frame */}
            <div className="absolute inset-4 rounded-full glass flex items-center justify-center overflow-hidden">
              {/* Avatar initials fallback */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#cae6ff] to-[#d5bffe] flex items-center justify-center">
                <span className="font-display font-light text-5xl text-primary/80 tracking-wider select-none">
                  AM
                </span>
              </div>
            </div>

            {/* Floating badge 1 */}
            <div className="absolute -bottom-4 -left-6 px-4 py-2 rounded-full glass animate-float shadow-glass" style={{ animationDelay: '1s' }}>
              <span className="label-caps text-primary text-[0.65rem]">Open to Work</span>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -top-2 -right-4 px-4 py-2 rounded-full glass animate-float shadow-glass" style={{ animationDelay: '2s' }}>
              <span className="label-caps text-secondary text-[0.65rem]">5+ Years Exp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-surface-variant hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <span className="label-caps text-[0.65rem]">Scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
