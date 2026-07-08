import { useState } from 'react';
import { Quote, Play, X } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <section className="border-b border-line bg-surface-dim grain">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <span className="roll-code text-ink-soft">Results room</span>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-extrabold text-ink sm:text-5xl">
            Their admit cards. Their words.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col glass-card p-6 cursor-pointer group hover:border-primary/50 transition-colors duration-300"
                onClick={() => setActiveVideo(t)}
              >
                <Quote className="h-5 w-5 text-red" />
                <p className="mt-4 flex-1 text-sm text-ink-soft italic leading-relaxed">"{t.quote}"</p>
                
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  <div>
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-faint mt-0.5">{t.detail}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-colors">
                    <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-[400px] bg-surface rounded-xl overflow-hidden shadow-glow">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-red transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative w-full aspect-[9/16] bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
                title={`Testimonial from ${activeVideo.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <div className="p-4 bg-surface border-t border-line">
              <p className="font-bold text-ink text-lg">{activeVideo.name}</p>
              <p className="text-sm text-ink-soft">{activeVideo.detail}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
