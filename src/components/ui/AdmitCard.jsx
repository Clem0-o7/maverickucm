/**
 * AdmitCard — the site's signature visual motif.
 *
 * Every coaching institute talks about "results". Maverick UcM leans into
 * the one artifact every board-exam student actually recognises: the
 * admit card / hall ticket. This wrapper gives that perforated-stub,
 * roll-number look to course cards, the hero result card, and testimonials.
 */
export default function AdmitCard({
  rollCode,
  eyebrow = 'MAVERICK UcM INSTITUTE',
  status,
  statusVariant = 'red', // 'red' | 'slate'
  variant = 'paper', // 'paper' | 'ink'
  className = '',
  children,
}) {
  const isInk = variant === 'ink';

  return (
    <div
      className={`admit-card ${isInk ? 'admit-card-ink bg-paper-dim' : 'bg-paper'} pl-5 ${className}`}
    >
      <div
        className={`flex items-center justify-between border-b px-5 py-2.5 ${
          isInk ? 'border-line/60' : 'border-line'
        }`}
      >
        <span className="roll-code text-ink-faint">
          {eyebrow}
        </span>
        {/* {rollCode && (
          <span className="roll-code text-ink-faint">
            {rollCode}
          </span>
        )} */}
      </div>

      <div className="px-5 py-5">{children}</div>

      {status && (
        <div
          className={`absolute right-4 top-11 -rotate-3 rounded-sm px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide shadow-stamp ${
            statusVariant === 'red' ? 'bg-red text-white' : 'bg-slate-dark text-white'
          }`}
        >
          {status}
        </div>
      )}
    </div>
  );
}
