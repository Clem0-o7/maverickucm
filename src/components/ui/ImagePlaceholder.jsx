import { ImageIcon } from 'lucide-react';

/**
 * Stand-in for any image we don't have a real asset for yet.
 * Shows the exact prompt to hand to an image generator so it can be
 * dropped in later — just swap this component out for a real <img>.
 */
export default function ImagePlaceholder({ prompt, className = '', ratio = 'aspect-[4/3]' }) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden rounded-lg border-2 border-dashed border-slate/40 bg-slate-light/60 ${className}`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
        <ImageIcon className="h-6 w-6 text-slate-dark" strokeWidth={1.5} />
        <p className="font-mono text-[10px] uppercase tracking-wide text-slate-dark">
          Image placeholder
        </p>
        <p className="max-w-xs text-xs italic text-ink-faint">{prompt}</p>
      </div>
    </div>
  );
}
