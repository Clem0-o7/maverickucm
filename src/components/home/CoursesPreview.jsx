import { getActiveCourses } from '../../data/courses';
import CourseCard from '../courses/CourseCard';

export default function CoursesPreview() {
  const courses = getActiveCourses();

  return (
    <section id="courses" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <span className="roll-code text-red">Our Batches</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
            Only two grades. All of our attention.
          </h2>
          <p className="mt-4 text-ink-faint">
            We only teach Class 10 and Class 12 — no side offerings to dilute the focus.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
