import { useState } from 'react';
import { Users, ArrowUpRight, X, Smartphone } from 'lucide-react';
import AdmitCard from '../ui/AdmitCard';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function CourseCard({ course }) {
  const [showModal, setShowModal] = useState(false);
  const {
    id,
    grade,
    stream,
    title,
    tagline,
    subjects,
    seatsLeft,
    seatsTotal,
    feeOriginal,
    feeDiscounted,
    slug,
    image,
    featured,
  } = course;

  const seatsLow = seatsLeft / seatsTotal <= 0.25;

  return (
    <>
      <AdmitCard
        rollCode={`MUI/${grade}/${id.slice(-4).toUpperCase()}`}
        status={featured ? 'Popular batch' : seatsLow ? 'Filling fast' : null}
        statusVariant={featured ? 'red' : 'slate'}
        className="flex h-full flex-col"
      >
        {image && (
          <div className="mb-5 aspect-[16/10] overflow-hidden rounded-sm bg-paper-dim">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        <div className="mb-3 flex flex-wrap gap-2">
          <Badge variant="red">Class {grade}</Badge>
          {stream && <Badge variant="slate">{stream}</Badge>}
        </div>

        <h3 className="font-display text-2xl font-bold leading-tight text-ink">{title}</h3>
        <p className="mt-1.5 text-sm text-ink-faint">{tagline}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {subjects.map((s) => (
            <li key={s} className="rounded-sm border border-line px-2 py-1 text-xs text-ink-soft">
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-1.5 text-xs text-ink-faint">
          <Users className="h-3.5 w-3.5" />
          <span>
            {seatsLeft} of {seatsTotal} seats left
          </span>
        </div>

        <div className="mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-line pt-4 mt-5">
          <div>
            <p className="font-mono text-xs text-ink-faint line-through">₹{feeOriginal.toLocaleString('en-IN')}</p>
            <p className="font-display text-3xl sm:text-2xl font-extrabold text-red">
              ₹{feeDiscounted.toLocaleString('en-IN')}
            </p>
          </div>
          <div className="flex w-full sm:w-auto flex-col sm:flex-row sm:items-center gap-2 mt-4 sm:mt-0">
            <Button to={`/courses/${slug}`} variant="dark" className="w-full sm:w-auto justify-center !px-3 sm:!px-4 !py-3 sm:!py-2.5 text-sm">
              Details
            </Button>
            <Button variant="primary" className="w-full sm:w-auto justify-center !px-3 sm:!px-4 !py-3 sm:!py-2.5 text-sm" onClick={() => setShowModal(true)}>
              Enroll Now
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </Button>
          </div>
        </div>
      </AdmitCard>

      {/* Enrollment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md bg-surface border border-line rounded-xl overflow-hidden shadow-glow">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full text-ink-soft hover:text-ink hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-light/20 text-red mb-6">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink">Ready to join?</h3>
              <p className="mt-4 text-ink-soft">
                All our enrollments and live classes are handled exclusively through the Maverick UcM mobile app to ensure the best learning experience.
              </p>
              
              <div className="mt-8 space-y-4">
                <a
                  href="https://play.google.com/store/apps/details?id=co.diy.osbwj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full rounded-lg bg-primary-gradient px-6 py-4 font-bold text-white shadow-glow-sm hover:shadow-glow transition-all hover:-translate-y-1"
                >
                  Download App on Google Play
                </a>
                <p className="text-xs text-ink-faint">
                  Download the app, create your account, and you can purchase this batch directly from the store!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
