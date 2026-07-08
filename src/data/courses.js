/**
 * =============================================================================
 *  COURSES.JS — the ONE file that controls every course on the site.
 * =============================================================================
 *  This is intentionally the single source of truth. To add, remove, or edit
 *  a course, you only ever need to touch this file — no other component
 *  needs to change.
 *
 *  HOW TO ADD A COURSE
 *  --------------------
 *  1. Copy the COURSE_TEMPLATE object below.
 *  2. Paste it into the `courses` array.
 *  3. Fill in the fields. `id` and `slug` must be unique.
 *  4. Save. It will automatically appear on the Home page preview,
 *     the /courses listing, and get its own /courses/:slug detail page.
 *
 *  HOW TO REMOVE A COURSE
 *  -----------------------
 *  Delete its object from the `courses` array (or set `active: false`
 *  to hide it without deleting it).
 *
 *  HOW TO EDIT A COURSE
 *  ----------------------
 *  Just change the field values in place.
 *
 *  Only two grade levels are supported by design: "10" and "12".
 * =============================================================================
 */

// ---- Reference template (not rendered — just copy/paste this shape) -------
// eslint-disable-next-line no-unused-vars
const COURSE_TEMPLATE = {
  id: 'unique-id',                 // string, unique, no spaces
  slug: 'unique-url-slug',         // string, unique, used in the URL
  active: true,                    // set false to hide without deleting
  grade: '10',                     // '10' | '12'
  stream: null,                    // e.g. 'Science (PCM)', 'Commerce' — 12th only, else null
  board: 'CBSE / ICSE / State Boards',
  title: 'Course Title',
  tagline: 'One line that sells the batch.',
  subjects: ['Subject A', 'Subject B'],
  duration: '11 months',
  mode: 'Live Online + Recorded',
  batchStarts: 'Jul 2026',
  seatsTotal: 60,
  seatsLeft: 12,
  feeOriginal: 24999,
  feeDiscounted: 16999,
  rating: 4.8,
  studentsEnrolled: 1200,
  highlights: ['Highlight one', 'Highlight two', 'Highlight three'],
  imagePrompt:
    'Describe the placeholder image you want generated for this course card',
  featured: false,
  lecturePlanPdf: '/pdfs/course-lecture-plan.pdf', // path to downloadable lecture plan PDF
};

export const courses = [
  {
    id: 'c10-cbse-complete',
    slug: 'class-10-cbse-complete-batch',
    active: true,
    grade: '10',
    stream: null,
    board: 'CBSE',
    title: 'Class 10 — CBSE Complete Batch',
    tagline: 'Every subject, one timetable, zero gaps before boards.',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English'],
    duration: '11 months',
    mode: 'Live Online + Recorded',
    batchStarts: 'Jul 2026',
    seatsTotal: 80,
    seatsLeft: 23,
    feeOriginal: 22999,
    feeDiscounted: 15999,
    rating: 4.8,
    studentsEnrolled: 2140,
    highlights: [
      'Chapter-wise tests after every unit',
      'Board-pattern mock exams from October',
      'Daily doubt-solving window',
    ],
    imagePrompt:
      'Flat vector illustration of an Indian student at a desk with an open notebook and a glowing tablet, board-exam admit card visible on the desk, red and charcoal palette, warm off-white background',
    featured: true,
    lecturePlanPdf: '/pdfs/class-10-cbse-complete-lecture-plan.pdf',
  },
  {
    id: 'c10-foundation-jee-neet',
    slug: 'class-10-foundation-jee-neet',
    active: true,
    grade: '10',
    stream: null,
    board: 'CBSE / ICSE',
    title: 'Class 10 — Foundation for JEE & NEET',
    tagline: 'Board scores today, competitive-exam instincts for tomorrow.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    duration: '11 months',
    mode: 'Live Online + Recorded',
    batchStarts: 'Jul 2026',
    seatsTotal: 60,
    seatsLeft: 9,
    feeOriginal: 27999,
    feeDiscounted: 19999,
    rating: 4.7,
    studentsEnrolled: 860,
    highlights: [
      'NTSE / Olympiad-style problem sets',
      'Concept-first teaching, not shortcuts',
      'Early exposure to JEE/NEET question formats',
    ],
    imagePrompt:
      'Flat vector illustration of a beaker, compass, and calculator arranged on a desk with a red ribbon bookmark, minimal charcoal and slate palette',
    featured: false,
    lecturePlanPdf: '/pdfs/class-10-foundation-jee-neet-lecture-plan.pdf',
  },
  {
    id: 'c12-science-pcm',
    slug: 'class-12-science-pcm',
    active: true,
    grade: '12',
    stream: 'Science (PCM)',
    board: 'CBSE',
    title: 'Class 12 — Science (PCM)',
    tagline: 'Boards and JEE, prepared side by side, not one after another.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English Core'],
    duration: '10 months',
    mode: 'Live Online + Recorded',
    batchStarts: 'Jul 2026',
    seatsTotal: 70,
    seatsLeft: 17,
    feeOriginal: 34999,
    feeDiscounted: 24999,
    rating: 4.9,
    studentsEnrolled: 1580,
    highlights: [
      'Numerical-heavy problem practice every week',
      'JEE Main-pattern test series included',
      'College application & counselling guidance',
    ],
    imagePrompt:
      'Flat vector illustration of a graphing calculator, protractor, and a physics circuit diagram on graph paper, red accent line, charcoal ink tones',
    featured: true,
    lecturePlanPdf: '/pdfs/class-12-science-pcm-lecture-plan.pdf',
  },
  {
    id: 'c12-science-pcb',
    slug: 'class-12-science-pcb',
    active: true,
    grade: '12',
    stream: 'Science (PCB)',
    board: 'CBSE',
    title: 'Class 12 — Science (PCB)',
    tagline: 'Every diagram, every reaction, exam-ready by December.',
    subjects: ['Physics', 'Chemistry', 'Biology', 'English Core'],
    duration: '10 months',
    mode: 'Live Online + Recorded',
    batchStarts: 'Jul 2026',
    seatsTotal: 70,
    seatsLeft: 21,
    feeOriginal: 34999,
    feeDiscounted: 24999,
    rating: 4.8,
    studentsEnrolled: 1340,
    highlights: [
      'NEET-pattern test series included',
      'Labelled-diagram practice sheets weekly',
      'NCERT line-by-line coverage',
    ],
    imagePrompt:
      'Flat vector illustration of a microscope, DNA helix motif, and a labelled biology diagram notebook, slate and red palette, clean warm background',
    featured: false,
    lecturePlanPdf: '/pdfs/class-12-science-pcb-lecture-plan.pdf',
  },
  {
    id: 'c12-commerce',
    slug: 'class-12-commerce',
    active: true,
    grade: '12',
    stream: 'Commerce',
    board: 'CBSE',
    title: 'Class 12 — Commerce',
    tagline: 'Accounts that balance, economics that makes sense.',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'English Core'],
    duration: '10 months',
    mode: 'Live Online + Recorded',
    batchStarts: 'Jul 2026',
    seatsTotal: 60,
    seatsLeft: 26,
    feeOriginal: 28999,
    feeDiscounted: 19999,
    rating: 4.7,
    studentsEnrolled: 990,
    highlights: [
      'Ledger-to-final-accounts practice sets',
      'Case-study based Business Studies prep',
      'CA Foundation orientation session included',
    ],
    imagePrompt:
      'Flat vector illustration of a ledger book, calculator, and rising bar-chart on a clipboard, red and charcoal palette, warm off-white background',
    featured: false,
    lecturePlanPdf: '/pdfs/class-12-commerce-lecture-plan.pdf',
  },
  {
    id: 'c12-humanities',
    slug: 'class-12-humanities',
    active: true,
    grade: '12',
    stream: 'Humanities',
    board: 'CBSE',
    title: 'Class 12 — Humanities',
    tagline: 'For students who ask "why", not just "what".',
    subjects: ['History', 'Political Science', 'Geography', 'English Core'],
    duration: '10 months',
    mode: 'Live Online + Recorded',
    batchStarts: 'Jul 2026',
    seatsTotal: 50,
    seatsLeft: 31,
    feeOriginal: 24999,
    feeDiscounted: 17999,
    rating: 4.6,
    studentsEnrolled: 610,
    highlights: [
      'Map-work and diagram practice for Geography',
      'Answer-writing workshops for long questions',
      'Current-affairs linked Political Science sessions',
    ],
    imagePrompt:
      'Flat vector illustration of an open atlas, a fountain pen, and a stack of essay-answer sheets, slate and red palette, minimal warm background',
    featured: false,
    lecturePlanPdf: '/pdfs/class-12-humanities-lecture-plan.pdf',
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
