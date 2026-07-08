import { ArrowDown, PhoneCall } from 'lucide-react';
import { contactInfo } from '../../data/contact';

export default function CTASection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-8 glass-card p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl tracking-tightest">
              Admissions for the 2026&ndash;27 batch are open.
            </h2>
            <p className="mt-3 text-ink-soft">
              Seats are limited on purpose — every mentor tracks a fixed set of students, not a
              crowd.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 bg-primary-gradient shadow-glow-sm hover:shadow-glow hover:scale-105"
            >
              Browse batches
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10"
            >
              Talk to a mentor
              <PhoneCall className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
