import { Users, ArrowUpRight } from 'lucide-react';
import AdmitCard from '../ui/AdmitCard';
import Badge from '../ui/Badge';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import Button from '../ui/Button';

export default function CourseCard({ course }) {
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
    imagePrompt,
    featured,
  } = course;

  const seatsLow = seatsLeft / seatsTotal <= 0.25;

  return (
    <AdmitCard
      rollCode={`MUI/${grade}/${id.slice(-4).toUpperCase()}`}
      status={featured ? 'Popular batch' : seatsLow ? 'Filling fast' : null}
      statusVariant={featured ? 'red' : 'slate'}
      className="flex h-full flex-col"
    >
      <ImagePlaceholder prompt={imagePrompt} ratio="aspect-[16/10]" className="mb-5" />

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

      <div className="mt-auto flex items-end justify-between border-t border-line pt-4 mt-5">
        <div>
          <p className="font-mono text-xs text-ink-faint line-through">₹{feeOriginal.toLocaleString('en-IN')}</p>
          <p className="font-display text-2xl font-extrabold text-red">
            ₹{feeDiscounted.toLocaleString('en-IN')}
          </p>
        </div>
        <Button to={`/courses/${slug}`} variant="dark" className="!px-4 !py-2.5">
          Details
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </AdmitCard>
  );
}
