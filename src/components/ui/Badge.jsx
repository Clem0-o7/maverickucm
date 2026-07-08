const VARIANTS = {
  red: 'bg-red-light text-primary border border-primary/20',
  slate: 'bg-white/5 text-ink-soft border border-white/10',
  ink: 'bg-ink text-paper',
  outline: 'border border-line text-ink-faint',
};

export default function Badge({ children, variant = 'red', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-body text-xs font-semibold tracking-wide ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
