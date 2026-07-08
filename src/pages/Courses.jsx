import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActiveCourses } from '../data/courses';
import CourseCard from '../components/courses/CourseCard';
import CourseFilter from '../components/courses/CourseFilter';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const gradeParam = searchParams.get('grade');
  const [active, setActive] = useState(gradeParam === '10' || gradeParam === '12' ? gradeParam : 'all');

  useEffect(() => {
    if (gradeParam === '10' || gradeParam === '12') setActive(gradeParam);
  }, [gradeParam]);

  const handleChange = (id) => {
    setActive(id);
    if (id === 'all') setSearchParams({});
    else setSearchParams({ grade: id });
  };

  const courses = useMemo(() => {
    const all = getActiveCourses();
    if (active === 'all') return all;
    return all.filter((c) => c.grade === active);
  }, [active]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <span className="roll-code text-red">Our Batches</span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold text-ink sm:text-5xl">
        Every batch we run, in one place.
      </h1>
      <p className="mt-4 max-w-xl text-ink-faint">
        We only teach Class 10 and Class 12 — no side offerings to dilute the focus. Pick a
        board, pick a stream, see the seats left.
      </p>

      <div className="mt-8">
        <CourseFilter active={active} onChange={handleChange} />
      </div>

      {courses.length === 0 ? (
        <p className="mt-16 text-ink-faint">No batches match that filter right now.</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  );
}
