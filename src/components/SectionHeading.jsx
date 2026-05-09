/**
 * SectionHeading
 * Reusable section title with label-caps eyebrow + h2 headline.
 *
 * Props:
 *  - eyebrow  {string}  — uppercase small label above the heading
 *  - title    {string}  — main heading text
 *  - subtitle {string}  — optional body paragraph beneath
 *  - center   {boolean} — center align (default: left)
 */
export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  const align = center ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 ${align}`}>
      {eyebrow && (
        <span className={`label-caps text-primary inline-flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
          <span className="w-5 h-px bg-primary" />
          {eyebrow}
          <span className="w-5 h-px bg-primary" />
        </span>
      )}
      <h2 className="font-display font-normal text-h2 text-on-surface leading-[1.3] tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
