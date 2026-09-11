import PropTypes from 'prop-types';

export function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0-.01-3.38 1.69 1.69 0 0 0 .01 3.38m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function LineIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.019 9.607.391.084.922.258 1.057.592.121.302.079.775.039 1.08l-.171 1.028c-.053.316-.245 1.237 1.084.675 1.33-.563 7.18-4.229 9.8-7.234 1.464-1.611 2.172-3.398 2.172-5.128zm-14.77 2.37h-2.19c-.318 0-.576-.258-.576-.576V7.485c0-.318.258-.576.576-.576.318 0 .576.258.576.576v4.037h1.614c.318 0 .576.258.576.576 0 .318-.258.576-.576.576zm3.336-.576c0 .318-.258.576-.576.576-.318 0-.576-.258-.576-.576V7.485c0-.318.258-.576.576-.576.318 0 .576.258.576.576v4.613zm4.568.576h-2.19c-.318 0-.576-.258-.576-.576V7.485c0-.318.258-.576.576-.576.318 0 .576.258.576.576v4.037h1.614c.318 0 .576.258.576.576 0 .318-.258.576-.576.576zm3.766-3.461c0 .318-.258.576-.576.576h-1.614v.848h1.614c.318 0 .576.258.576.576 0 .318-.258.576-.576.576h-2.19c-.318 0-.576-.258-.576-.576V7.485c0-.318.258-.576.576-.576h2.19c.318 0 .576.258.576.576 0 .318-.258.576-.576.576h-1.614v.848h1.614c.318 0 .576.258.576.576z" />
    </svg>
  );
}

const iconPropTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

GithubIcon.propTypes = iconPropTypes;
LinkedinIcon.propTypes = iconPropTypes;
FacebookIcon.propTypes = iconPropTypes;
InstagramIcon.propTypes = iconPropTypes;
LineIcon.propTypes = iconPropTypes;

export const SOCIAL_PROFILES = [
  {
    color: '#181717',
    hoverClass: 'hover:text-[#181717] hover:border-[#181717]/40 hover:bg-black/5',
    href: 'https://github.com/pichaya-big',
    icon: GithubIcon,
    name: 'GitHub',
  },
  {
    color: '#0077b5',
    hoverClass: 'hover:text-[#0077b5] hover:border-[#0077b5]/40 hover:bg-[#0077b5]/5',
    href: 'https://www.linkedin.com/in/pichaya-santhuenkaew-6a2944409/',
    icon: LinkedinIcon,
    name: 'LinkedIn',
  },
  {
    color: '#1877f2',
    hoverClass: 'hover:text-[#1877f2] hover:border-[#1877f2]/40 hover:bg-[#1877f2]/5',
    href: 'https://www.facebook.com/share/1BrqmE5njj/?mibextid=wwXIfr',
    icon: FacebookIcon,
    name: 'Facebook',
  },
  {
    color: '#e4405f',
    hoverClass: 'hover:text-[#e4405f] hover:border-[#e4405f]/40 hover:bg-[#e4405f]/5',
    href: 'https://www.instagram.com/s.pichaya_big?stkn=Ym9idGVyMHNwdDhq&utm_source=qr',
    icon: InstagramIcon,
    name: 'Instagram',
  },
  {
    color: '#06c755',
    hoverClass: 'hover:text-[#06c755] hover:border-[#06c755]/40 hover:bg-[#06c755]/5',
    href: 'https://line.me/ti/p/JsBcjkV59S',
    icon: LineIcon,
    name: 'LINE',
  },
];
