import { ClipboardCheck, MessageCircleQuestion, FileClock, Send } from 'lucide-react';

const FEATURES = [
  {
    icon: ClipboardCheck,
    title: 'Chapter test, every chapter',
    body: 'No unit ends without a test. Gaps get caught in October, not in the exam hall.',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Doubts closed within 24 hours',
    body: 'Post a doubt after class and a subject mentor answers it before the next one starts.',
  },
  {
    icon: FileClock,
    title: 'Board-pattern mocks from October',
    body: 'Full-length, exam-timed mocks marked to the actual board marking scheme.',
  },
  {
    icon: Send,
    title: 'A report, sent to parents monthly',
    body: 'Attendance, test scores, and mentor notes — not just a login link nobody checks.',
  },
];

export default function WhyUs() {
  return (
    <section className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <span className="roll-code text-slate-dark">Why Maverick UcM</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
            The parts of coaching that actually move a score.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="border-t-2 border-ink pt-5">
              <Icon className="h-7 w-7 text-red" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-ink-faint">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
