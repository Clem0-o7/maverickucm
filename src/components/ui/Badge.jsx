const VARIANTS = {
  red: 'bg-red-light text-red-dark',
  slate: 'bg-slate-light text-slate-dark',
  ink: 'bg-ink text-cream',
  outline: 'border border-line text-ink-faint',
};

export default function Badge({ children, variant = 'red', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
