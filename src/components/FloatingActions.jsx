import { useState } from 'react';
import { MessageCircle, X, FileText } from 'lucide-react';

/**
 * FloatingActions
 * Fixed glass FAB group — "Contact Me" + "Resume" CTAs
 * (persists across all scroll positions)
 */
export default function FloatingActions() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="fixed bottom-8 right-6 z-50 flex flex-col items-end gap-3"
      aria-label="Quick actions"
    >
      {/* Expanded mini-fabs */}
      <div
        className={`flex flex-col items-end gap-3 transition-[opacity,transform] duration-300 ${
          expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href="#contact"
          onClick={() => setExpanded(false)}
          id="fab-contact"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-strong hover:bg-white/70 transition-[background-color] duration-200 text-sm font-sans font-medium text-primary shadow-glass"
        >
          <MessageCircle size={15} />
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          id="fab-resume"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-strong hover:bg-white/70 transition-[background-color] duration-200 text-sm font-sans font-medium text-secondary shadow-glass"
        >
          <FileText size={15} />
          Resume
        </a>
      </div>

      {/* Main FAB */}
      <button
        id="fab-main"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-label={expanded ? 'Close quick actions' : 'Open quick actions'}
        className="w-14 h-14 rounded-full glass-strong flex items-center justify-center text-primary shadow-glass-lg hover:scale-110 transition-transform duration-200 will-change-transform"
      >
        <span
          className={`transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`}
        >
          {expanded ? <X size={22} /> : <MessageCircle size={22} />}
        </span>
      </button>
    </div>
  );
}
