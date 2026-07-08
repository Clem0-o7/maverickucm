import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Clock, Calendar, Users, MonitorPlay, ChevronLeft, Download, X, Smartphone } from 'lucide-react';
import { getCourseBySlug } from '../data/courses';
import Badge from '../components/ui/Badge';
import AdmitCard from '../components/ui/AdmitCard';
import Button from '../components/ui/Button';

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);
  const [showModal, setShowModal] = useState(false);

  if (!course) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-ink">Batch not found</h1>
        <p className="mt-3 text-ink-faint">
          That course may have been removed or renamed.
        </p>
        <Button to="/" variant="dark" className="mt-6">
          <ChevronLeft className="h-4 w-4" />
          Back to home
        </Button>
      </section>
    );
  }

  const {
    id,
    grade,
    stream,
    board,
    title,
    tagline,
    subjects,
    duration,
    mode,
    batchStarts,
    seatsTotal,
    seatsLeft,
    feeOriginal,
    feeDiscounted,
    highlights,
    image,
    mentors = [],
  } = course;

  const instructors = mentors;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Link to="/" className="inline-flex items-center gap-1 text-sm font-semibold text-ink-faint hover:text-ink">
        <ChevronLeft className="h-4 w-4" />
        Back to home
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-2">
            <Badge variant="red">Class {grade}</Badge>
            {stream && <Badge variant="slate">{stream}</Badge>}
            <Badge variant="outline">{board}</Badge>
          </div>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-lg text-ink-faint">{tagline}</p>

          {/* Course image */}
          {image && (
            <div className="mt-8 aspect-[16/8] overflow-hidden rounded-xl bg-surface-dim">
              <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
            </div>
          )}

          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold text-ink">Subjects covered</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {subjects.map((s) => (
                <li key={s} className="rounded border border-line bg-surface-dim px-3 py-1.5 text-sm text-ink-soft">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Batch Features */}
          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold text-ink">Batch Features</h2>
            <div className="mt-6 space-y-5">
              {highlights.map((h) => (
                <div key={typeof h === 'string' ? h : h.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                  <div>
                    {typeof h === 'string' ? (
                      <p className="text-ink-soft">{h}</p>
                    ) : (
                      <>
                        <p className="font-semibold text-ink">{h.title}</p>
                        <p className="mt-0.5 text-sm text-ink-faint">{h.description}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>



          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
            <div>
              <Clock className="h-5 w-5 text-slate-dark" />
              <p className="mt-2 text-sm font-semibold text-ink">{duration}</p>
              <p className="text-xs text-ink-faint">Duration</p>
            </div>
            <div>
              <MonitorPlay className="h-5 w-5 text-slate-dark" />
              <p className="mt-2 text-sm font-semibold text-ink">{mode}</p>
              <p className="text-xs text-ink-faint">Mode</p>
            </div>
            <div>
              <Calendar className="h-5 w-5 text-slate-dark" />
              <p className="mt-2 text-sm font-semibold text-ink">{batchStarts}</p>
              <p className="text-xs text-ink-faint">Batch starts</p>
            </div>
            <div>
              <Users className="h-5 w-5 text-slate-dark" />
              <p className="mt-2 text-sm font-semibold text-ink">
                {seatsLeft}/{seatsTotal}
              </p>
              <p className="text-xs text-ink-faint">Seats left</p>
            </div>
          </div>

          {/* Course Instructors */}
          {instructors.length > 0 && (
            <div className="mt-10 border-t border-line pt-8">
              <span className="roll-code text-slate-dark">Instructors</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink">
                The mentors for this batch
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {instructors.map((f) => (
                  <div key={f.id} className="flex gap-4 glass-card p-4">
                    {f.image ? (
                      <img
                        src={f.image}
                        alt={f.name}
                        className="w-20 h-20 shrink-0 rounded object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex w-20 h-20 shrink-0 items-center justify-center rounded bg-surface-bright text-ink-faint font-display text-2xl font-bold">
                        {f.name.charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-bold text-ink">{f.name}</h3>
                      <div className="mt-1 inline-flex items-center rounded-full px-2 py-0.5 bg-red-light text-primary text-xs font-semibold tracking-wide">
                        Specialist: {f.subject}
                      </div>
                      <p className="mt-2 text-sm text-ink-faint">{f.bio}</p>
                      {f.coursePlanPdf && (
                        <a
                          href={f.coursePlanPdf}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary hover:text-white transition-colors"
                        >
                          <Download className="h-3.5 w-3.5" />
                           {f.subject} Lecture Plan
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar admit card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <AdmitCard rollCode={`MUI/${grade}/${id.slice(-4).toUpperCase()}`} eyebrow="ENROLLMENT">
              <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">Batch Price</p>
              <p className="mt-1 font-mono text-sm text-ink-faint line-through">
                ₹{feeOriginal.toLocaleString('en-IN')}
              </p>
              <p className="font-display text-4xl font-extrabold text-red">
                ₹{feeDiscounted.toLocaleString('en-IN')}/-
              </p>
              <p className="mt-1 text-xs text-ink-faint">one-time, full course access</p>

                <Button variant="primary" className="w-full" onClick={() => setShowModal(true)}>
                  Enroll now
                </Button>

              <p className="mt-4 text-center text-xs text-ink-faint">
                {seatsLeft} of {seatsTotal} seats remaining
              </p>
            </AdmitCard>
          </div>
        </div>
      </div>

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
    </section>
  );
}
