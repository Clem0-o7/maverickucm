/**
 * Faculty data. Each faculty member has a `courseIds` array that links them
 * to courses in courses.js by course `id`. This is used to display
 * instructors on each individual course detail page.
 */
export const faculty = [
  {
    id: 'f1',
    name: 'Karthick Sir',
    subject: 'Physics',
    bio: 'Renowned expert in conceptual physics with over 10 years of experience simplifying complex topics for Class 10.',
    image: null,
    coursePlanPdf: '/pdfs/class-10-physics-plan.pdf',
    courseIds: ['c10-pcmb'],
  },
  {
    id: 'f2',
    name: 'Anjali Sharma',
    subject: 'Chemistry',
    bio: 'Expert at breaking down chemical equations and reactions into simple, easy-to-remember concepts.',
    image: null,
    coursePlanPdf: '/pdfs/class-10-chemistry-plan.pdf',
    courseIds: ['c10-pcmb'],
  },
  {
    id: 'f3',
    name: 'Vikram Sethi',
    subject: 'Mathematics',
    bio: '14 years teaching Mathematics. Focuses on strong logical foundations and quick problem-solving techniques.',
    image: null,
    coursePlanPdf: '/pdfs/class-10-maths-plan.pdf',
    courseIds: ['c10-pcmb'],
  },
  {
    id: 'f4',
    name: 'Dr. Meera Nair',
    subject: 'Biology',
    bio: 'PhD in Zoology. Specializes in diagram-based teaching and making Biology highly scoring.',
    image: null,
    coursePlanPdf: '/pdfs/class-10-biology-plan.pdf',
    courseIds: ['c10-pcmb'],
  }
];

/** Get faculty for a specific course by course id */
export const getFacultyForCourse = (courseId) =>
  faculty.filter((f) => f.courseIds.includes(courseId));
