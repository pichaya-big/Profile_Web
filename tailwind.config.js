/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:            '#1c648e',
        'on-primary':       '#ffffff',
        'primary-container':'#7cb9e8',
        'secondary':        '#67558c',
        'on-secondary':     '#ffffff',
        'secondary-container': '#d5bffe',
        'tertiary':         '#006e20',
        'on-tertiary':      '#ffffff',
        'tertiary-container':'#64c868',
        surface:            '#f7f9fb',
        'surface-variant':  '#e0e3e5',
        'on-surface':       '#191c1e',
        'on-surface-variant':'#41484e',
        background:         '#f7f9fb',
        'on-background':    '#191c1e',
        outline:            '#71787f',
        'outline-variant':  '#c0c7cf',
        error:              '#ba1a1a',
        'on-error':         '#ffffff',
        // Brand Override aliases
        'aero':             '#7CB9E8',
        'purple':           '#B19CD9',
        'mint':             '#98FF98',
      },
      fontFamily: {
        sans:     ['Inter', 'sans-serif'],
        display:  ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'h1':   ['3.5rem',  { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '300' }],
        'h2':   ['2.25rem', { lineHeight: '1.3', letterSpacing: '0.02em', fontWeight: '400' }],
        'h3':   ['1.5rem',  { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
        'body-lg':['1.125rem',{ lineHeight: '1.7', letterSpacing: '0.01em' }],
        'body-md':['1rem',    { lineHeight: '1.6', letterSpacing: '0' }],
        'label-caps':['0.75rem',{ lineHeight: '1', letterSpacing: '0.15em', fontWeight: '600' }],
      },
      borderRadius: {
        sm:   '0.25rem',
        DEFAULT:'0.5rem',
        md:   '0.75rem',
        lg:   '1rem',
        xl:   '1.5rem',
        full: '9999px',
      },
      spacing: {
        'gutter': '24px',
        'section': '80px',
        'glass': '32px',
      },
      maxWidth: {
        'container': '1200px',
      },
      backdropBlur: {
        'glass': '20px',
        'nav':   '40px',
        'chip':  '8px',
      },
      boxShadow: {
        'glass': '0 20px 40px rgba(0,0,0,0.04)',
        'glass-lg': '0 30px 60px rgba(0,0,0,0.08)',
        'glow-primary': '0 0 30px rgba(28,100,142,0.15)',
      },
      animation: {
        'blob': 'blob 12s infinite alternate ease-in-out',
        'blob-slow': 'blob 18s infinite alternate-reverse ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '33%':  { transform: 'translate(40px, -60px) scale(1.1)' },
          '66%':  { transform: 'translate(-30px, 40px) scale(0.9)' },
          '100%': { transform: 'translate(20px, -20px) scale(1.05)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
