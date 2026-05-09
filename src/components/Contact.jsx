import { useState } from 'react';
import { Mail, Phone, MapPin, Send, GitBranch, Globe, Share2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const SOCIAL_LINKS = [
  { icon: GitBranch, href: 'https://github.com',   label: 'GitHub' },
  { icon: Globe,     href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Share2,    href: 'https://twitter.com',  label: 'Twitter' },
];

/**
 * GlassInput — minimal glass input with glow-on-focus
 */
function GlassInput({ id, label, type = 'text', as = 'input', ...props }) {
  const baseClass = `w-full bg-transparent pt-5 pb-2 px-0 font-sans text-sm text-on-surface 
    border-b border-outline-variant focus:border-primary focus:outline-none 
    transition-colors duration-200 placeholder-transparent peer`;

  return (
    <div className="relative">
      {as === 'textarea' ? (
        <textarea id={id} className={`${baseClass} resize-none`} placeholder={label} rows={4} {...props} />
      ) : (
        <input id={id} type={type} className={baseClass} placeholder={label} {...props} />
      )}
      <label
        htmlFor={id}
        className="absolute top-2 left-0 text-xs font-sans text-on-surface-variant
          peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm
          peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary
          transition-all duration-200 pointer-events-none"
      >
        {label}
      </label>
    </div>
  );
}

/**
 * Contact Section
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with an email API (Resend, SendGrid, etc.)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-section px-6" aria-label="Contact section">
      <div className="max-w-container mx-auto flex flex-col gap-14">

        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something"
          subtitle="Whether you have a project in mind, want to explore a collaboration, or just want to say hi — my inbox is always open."
          center
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left — contact details */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {[
              { icon: Mail,    text: 'alex@example.com',    label: 'Email' },
              { icon: Phone,   text: '+1 (555) 000-0000',   label: 'Phone' },
              { icon: MapPin,  text: 'San Francisco, CA',   label: 'Location' },
            ].map(({ icon: Icon, text, label }) => (
              <div key={label} className="glass rounded-xl p-6 flex items-center gap-4 hover:scale-[1.02] transition-all duration-300">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="label-caps text-on-surface-variant text-[0.65rem] mb-0.5">{label}</p>
                  <p className="font-sans text-sm text-on-surface">{text}</p>
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="glass rounded-xl p-6">
              <p className="label-caps text-on-surface-variant text-[0.65rem] mb-4">Find Me Online</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-on-surface-variant hover:text-primary hover:scale-110 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="lg:col-span-3 glass rounded-xl p-glass">
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center">
                  <Send size={28} className="text-tertiary" />
                </div>
                <h3 className="font-display font-medium text-h3 text-on-surface tracking-wide">Message Sent!</h3>
                <p className="font-sans text-sm text-on-surface-variant">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
                <div className="grid sm:grid-cols-2 gap-8">
                  <GlassInput
                    id="name"
                    label="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <GlassInput
                    id="email"
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <GlassInput
                  id="subject"
                  label="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
                <GlassInput
                  id="message"
                  label="Your Message"
                  as="textarea"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button
                  id="contact-submit"
                  type="submit"
                  className="self-start inline-flex items-center gap-2 px-7 py-3 rounded font-sans font-medium text-sm text-on-primary bg-primary hover:bg-primary/90 transition-all duration-200 shadow-glow-primary"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
