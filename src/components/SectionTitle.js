import clsx from 'clsx';

export default function SectionTitle({
  label,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignment = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <div
      className={clsx('mb-10 flex flex-col gap-2', alignment[align], className)}
    >
      {label && (
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--subtext)]">
          {label}
        </p>
      )}

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-[var(--secondary)]">{highlight}</span>
          </>
        )}
      </h2>

      {subtitle && (
        <p
          className={clsx(
            'text-[var(--subtext)] text-base leading-relaxed max-w-xl mt-1',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
