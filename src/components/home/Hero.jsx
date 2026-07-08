import { ArrowRight } from 'lucide-react';
import AdmitCard from '../ui/AdmitCard';
import CountUp from '../ui/CountUp';
import { stats } from '../../data/stats';

const [resultStat, studentsStat, scorersStat] = stats;

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        {/* Left: copy */}
        <div>
          <span className="roll-code text-red">Class 10 &amp; 12 · CBSE Board Coaching</span>
          <h1 className="mt-4 font-display text-5xl font-black leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            Board exams aren&apos;t
            <br />
            a gamble. <span className="text-red">They&apos;re a</span>
            <br />
            <span className="text-red">Maverick&apos;s</span> game.
          </h1>
          <p className="mt-6 max-w-md text-base text-ink-soft">
            Weekly chapter tests, doubt-solving that doesn&apos;t make you wait, and mentors who
            track your progress like it&apos;s their own report card. Built only for Class 10 and
            12 — nothing else pulls our focus.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-sm bg-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-red-dark"
            >
              Explore Class 10
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Explore Class 12
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right: signature "result card" */}
        <div className="relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0">
          <AdmitCard
            rollCode="MUI/2026/RESULT"
            status="Promoted with distinction"
            statusVariant="red"
            variant="ink"
          >
            <p className="roll-code text-cream/70">Board Result — March 2026</p>
            <p className="mt-6 font-display text-7xl font-black text-paper">
              <CountUp value={resultStat.value} decimals={1} suffix={resultStat.suffix} />
            </p>
            <p className="mt-1 text-sm text-paper/60">Average score across Class 10 &amp; 12</p>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-5">
              <div>
                <p className="font-display text-2xl font-bold text-paper">
                  <CountUp value={studentsStat.value} suffix={studentsStat.suffix} />
                </p>
                <p className="text-xs text-paper/60">{studentsStat.label}</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-paper">
                  <CountUp value={scorersStat.value} suffix={scorersStat.suffix} />
                </p>
                <p className="text-xs text-paper/60">{scorersStat.label}</p>
              </div>
            </div>
          </AdmitCard>
          <div
            className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-md border-2 border-red/30 sm:-bottom-6 sm:-right-6"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
