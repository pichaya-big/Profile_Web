import { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',  href: '#contact' },
];

/**
 * Navbar
 * Floating glass nav dock — highest blur (40px) per design system.
 * Hides/shows on scroll direction; mobile hamburger included.
 */
export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActive(href);
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-container mx-auto px-6 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-semibold text-lg text-primary tracking-wide hover:opacity-75 transition-opacity"
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          Pichaya<span className="text-secondary">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`label-caps transition-colors duration-200 hover:text-primary ${
                  active === href ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/Resume_Pichaya.pdf"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg font-sans font-medium text-sm text-primary glass hover:bg-white/70 hover:shadow-glass hover:scale-105 active:scale-95 transition-all duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText size={15} />
          <span>Resume</span>
          <ArrowUpRight size={14} className="opacity-70" />
        </a>

        {/* Mobile hamburger */}
        <button
          id="nav-mobile-toggle"
          className="md:hidden p-2 rounded-md text-on-surface-variant hover:text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden glass-strong border-t border-white/20 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`label-caps transition-colors duration-200 block py-1 hover:text-primary ${
                  active === href ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="/Resume_Pichaya.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-sans font-medium text-sm text-on-primary bg-primary hover:bg-primary/90 shadow-glow-primary active:scale-[0.98] transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <FileText size={16} />
              <span>Resume</span>
              <ArrowUpRight size={15} className="opacity-80" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

