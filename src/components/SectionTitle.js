export default function SectionTitle({ title, subtitle, align = 'center' }) {
  const alignment = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <div className={`mb-12 flex flex-col gap-2 ${alignment[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--subtext)] max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
