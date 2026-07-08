import { Link } from 'react-router-dom';

const VARIANTS = {
  primary: 'bg-primary-gradient text-white shadow-glow-sm hover:shadow-glow hover:scale-105',
  secondary: 'bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10',
  dark: 'bg-surface-bright text-white hover:bg-surface-dim',
  outline: 'border border-line text-ink hover:bg-white/5',
  ghost: 'text-ink hover:bg-white/5',
};

/**
 * Renders a <Link> if `to` is given, otherwise a <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  to,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded px-6 py-3 font-body text-sm font-bold uppercase tracking-wide transition-all duration-300 ${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
