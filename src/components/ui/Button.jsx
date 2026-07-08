import { Link } from 'react-router-dom';

const VARIANTS = {
  primary: 'bg-red text-paper hover:bg-red-dark',
  dark: 'bg-ink text-paper hover:bg-ink-soft',
  outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-paper',
  ghost: 'text-ink hover:bg-paper-dim',
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide transition-colors duration-150 ${VARIANTS[variant]} ${className}`;

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
