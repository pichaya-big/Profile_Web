import { GitBranch, Globe, Mail } from 'lucide-react';

/**
 * Footer
 * Minimal glass footer with nav links, social icons, and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/30" role="contentinfo">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <a href="#hero" className="font-display font-semibold text-lg text-primary tracking-wide hover:opacity-75 transition-opacity">
            Alex<span className="text-secondary">.</span>
          </a>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="label-caps text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { icon: GitBranch, href: 'https://github.com',   label: 'GitHub' },
              { icon: Globe,     href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail,      href: 'mailto:alex@example.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-on-surface-variant hover:text-primary hover:scale-110 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-on-surface-variant">
            © {year} Alex Morgan. All rights reserved.
          </p>
          <p className="font-sans text-xs text-on-surface-variant">
            Built with{' '}
            <span className="text-primary font-medium">React</span> +{' '}
            <span className="text-secondary font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
