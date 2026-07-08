import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import ImagePlaceholder from '../ui/ImagePlaceholder';

export default function Testimonials() {
  return (
    <section className="border-b border-line bg-ink grain">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <span className="roll-code text-cream/70">Results room</span>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-extrabold text-paper sm:text-5xl">
          Their admit cards. Their words.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-md border border-white/10 bg-white/[0.04] p-5"
            >
              <Quote className="h-5 w-5 text-red" />
              <p className="mt-3 flex-1 text-sm text-paper/80">{t.quote}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <ImagePlaceholder prompt={t.imagePrompt} ratio="aspect-square" className="!w-12 shrink-0 rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-paper">{t.name}</p>
                  <p className="text-xs text-paper/50">{t.grade}</p>
                </div>
                <span className="ml-auto font-mono text-sm font-bold text-red">{t.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
