import { courses } from '../data/courses';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';

export default function About() {
  const allMentors = courses.flatMap(c => c.mentors || []);
  const uniqueMentors = Array.from(new Map(allMentors.map(m => [m.id, m])).values());

  return (
    <>
      <section className="border-b border-line bg-paper-dim">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="roll-code text-red">Our story</span>
              <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
                Started by a teacher who was tired of watching students memorise.
              </h1>
              <p className="mt-5 text-ink-soft">
                Maverick UcM Institute started in 2017 in a single classroom, with one mentor and
                nineteen Class 10 students. The idea was simple: teach the exam, but teach it
                properly — concepts first, shortcuts never. Nine years later, that classroom has
                become a full Class 10 and 12 coaching program, but the rule hasn't changed.
              </p>
              <p className="mt-4 text-ink-soft">
                We stayed narrow on purpose. No competitive-exam-only batches, no adult upskilling
                courses, no distraction from the two years that decide a student's next big step.
              </p>
            </div>
            <ImagePlaceholder
              prompt="Flat illustration of a small classroom with a teacher at a whiteboard covered in equations, charcoal and red color palette, warm background, no text on the whiteboard"
              ratio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <span className="roll-code text-slate-dark">Faculty</span>
        <h2 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
          The mentors behind the marksheets.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {uniqueMentors.map((f) => (
            <div key={f.id} className="border-t-2 border-ink pt-5">
              {f.image ? (
                <div className="aspect-square w-full overflow-hidden rounded-md bg-surface-dim">
                  <img src={f.image} alt={f.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ) : (
                <ImagePlaceholder prompt="Mentor Placeholder" ratio="aspect-square" className="rounded-md" />
              )}
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{f.name}</h3>
              <p className="text-sm font-semibold text-red">{f.subject}</p>
              <p className="mt-2 text-sm text-ink-faint">{f.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
