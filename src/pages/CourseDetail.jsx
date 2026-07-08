import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Clock, Calendar, Users, MonitorPlay, ChevronLeft, Download } from 'lucide-react';
import { getCourseBySlug } from '../data/courses';
import { getFacultyForCourse } from '../data/faculty';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import Badge from '../components/ui/Badge';
import AdmitCard from '../components/ui/AdmitCard';
import Button from '../components/ui/Button';

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);
  const [enrolled, setEnrolled] = useState(false);

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
    imagePrompt,
    lecturePlanPdf,
  } = course;

  const instructors = getFacultyForCourse(id);

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

          <ImagePlaceholder prompt={imagePrompt} ratio="aspect-[16/8]" className="mt-8" />

          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold text-ink">Subjects covered</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {subjects.map((s) => (
                <li key={s} className="rounded-sm border border-line bg-paper-dim px-3 py-1.5 text-sm text-ink-soft">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold text-ink">What's included</h2>
            <ul className="mt-4 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-ink-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lecture Plan PDF Download */}
          {lecturePlanPdf && (
            <div className="mt-10 rounded-md border-2 border-dashed border-line bg-paper-dim p-6">
              <h2 className="font-display text-2xl font-bold text-ink">Lecture Plan</h2>
              <p className="mt-2 text-sm text-ink-faint">
                Download the detailed lecture plan for this batch to see the full syllabus breakdown,
                week-by-week schedule, and topic sequence.
              </p>
              <a
                href={lecturePlanPdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-ink-soft"
              >
                <Download className="h-4 w-4" />
                Download Lecture Plan (PDF)
              </a>
            </div>
          )}

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
                  <div key={f.id} className="flex gap-4 rounded-md border border-line bg-paper-dim p-4">
                    <ImagePlaceholder
                      prompt={f.imagePrompt}
                      ratio="aspect-square"
                      className="!w-20 !h-20 shrink-0 rounded-md"
                    />
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-bold text-ink">{f.name}</h3>
                      <p className="text-sm font-semibold text-red">{f.subject}</p>
                      <p className="mt-1 text-sm text-ink-faint">{f.bio}</p>
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
              <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">Course fee</p>
              <p className="mt-1 font-mono text-sm text-ink-faint line-through">
                ₹{feeOriginal.toLocaleString('en-IN')}
              </p>
              <p className="font-display text-4xl font-extrabold text-red">
                ₹{feeDiscounted.toLocaleString('en-IN')}
              </p>
              <p className="mt-1 text-xs text-ink-faint">one-time, full course access</p>

              <div className="mt-6">
                {enrolled ? (
                  <div className="rounded-sm border border-red/30 bg-red-light px-4 py-3 text-sm font-semibold text-red-dark">
                    Enrollment successful! Download the app to access your batch.
                  </div>
                ) : (
                  <Button variant="primary" className="w-full" onClick={() => setEnrolled(true)}>
                    Enroll now
                  </Button>
                )}
              </div>

              <p className="mt-4 text-center text-xs text-ink-faint">
                {seatsLeft} of {seatsTotal} seats remaining
              </p>
            </AdmitCard>
          </div>
        </div>
      </div>
    </section>
  );
}
