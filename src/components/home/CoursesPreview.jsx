import { getActiveCourses } from '../../data/courses';
import CourseCard from '../courses/CourseCard';

export default function CoursesPreview() {
  const courses = getActiveCourses();

  return (
    <section id="courses" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-red-600 sm:text-4xl">
            Our Batches
          </h2>
          {/* <h2 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
            Absolute Focus. One Grade.
          </h2>
          <p className="mt-4 text-ink-faint">
            We are currently dedicating all our resources to Class 10 — no side offerings to dilute our focus.
          </p> */}
        </div>

        <div className={`mt-12 grid grid-cols-1 gap-8 ${courses.length === 1 ? 'max-w-md mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
