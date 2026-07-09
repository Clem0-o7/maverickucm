/**
 * =============================================================================
 *  COURSES.JS — the ONE file that controls every course on the site.
 * =============================================================================
 *  To add a new course, copy an object below, fill in the fields, and save.
 *  It will automatically appear on the home page and get its own detail page.
 *
 *  Course images go in: public/courses/<slug>/
 *  Place a cover.jpg (or .png) there and set `image` to the path.
 * =============================================================================
 */

export const courses = [
  {
    id: 'c10-pcmb',
    slug: 'class-10-pcmb',
    active: true,
    grade: '10',
    stream: null,
    board: 'CBSE',
    title: 'TITAN Batch - PCMB',
    tagline: 'Physics, Chemistry, Mathematics & Biology — everything you need for boards.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    duration: '11 months',
    mode: 'Live Online + Recorded',
    batchStarts: 'Jul 2026',
    seatsTotal: 80,
    seatsLeft: 23,
    feeDiscounted: 4999,
    feeOriginal: 9999,
    rating: 4.8,
    studentsEnrolled: 2140,
    highlights: [
      {
        title: 'Live Lectures by Top Faculties',
        description: 'Interactive live classes taught by experienced subject experts',
      },
      {
        title: 'Daily Practice Problems (DPPs)',
        description: 'Curated daily problem sets to reinforce every topic',
      },
      {
        title: 'Regular Tests',
        description: 'Scheduled assessments to track progress and readiness',
      },
      {
        title: '1:1 Guidance',
        description: 'Personal mentorship and doubt-clearing support',
      },
      {
        title: 'Telegram Group for Doubt Support',
        description: 'Round-the-clock peer and faculty support channel',
      },
    ],
    image: '/courses/class-10/cover.jpg',
    featured: true,
    mentors: [
      {
        id: 'f1',
        name: 'Dr.K.Karthick Sir',
        subject: 'Physics',
        bio: '15+ Years Exp',
        image: '/staffs/physics.jpg',
        coursePlanPdf: '/pdfs/class-10-physics-plan.pdf',
      },
      {
        id: 'f2',
        name: 'Saravanan Sir',
        subject: 'Chemistry',
        bio: '10+ Years Exp',
        image: '/staffs/chemistry.jpeg',
        coursePlanPdf: '/pdfs/class-10-chemistry-plan.pdf',
      },
      {
        id: 'f3',
        name: 'Rethik Raj Sir',
        subject: 'Mathematics',
        bio: '3+ Years Exp',
        image: '/staffs/math.jpg',
        coursePlanPdf: '/pdfs/class-10-maths-plan.pdf',
      },
      {
        id: 'f4',
        name: 'Mangalam Mam',
        subject: 'Biology',
        bio: '10+ Years Exp',
        image: '/staffs/bio.jpg',
        coursePlanPdf: '/pdfs/class-10-biology-plan.pdf',
      }
    ],
  },
];

// ---- Small helpers used across the app (keep alongside the data) ----------

export const getActiveCourses = () => courses.filter((c) => c.active);

export const getCoursesByGrade = (grade) =>
  getActiveCourses().filter((c) => c.grade === grade);

export const getCourseBySlug = (slug) =>
  courses.find((c) => c.slug === slug && c.active);

export const getFeaturedCourses = () =>
  getActiveCourses().filter((c) => c.featured);
