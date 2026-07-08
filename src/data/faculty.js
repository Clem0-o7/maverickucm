/**
 * Faculty data. Each faculty member has a `courseIds` array that links them
 * to courses in courses.js by course `id`. This is used to display
 * instructors on each individual course detail page.
 */
export const faculty = [
  {
    id: 'f1',
    name: 'Vikram Sethi',
    subject: 'Mathematics',
    bio: '14 years teaching Class 10–12 Mathematics. Ex-Head of Department at a Delhi CBSE school.',
    imagePrompt:
      'Placeholder professional headshot illustration of an Indian male teacher in his 40s, flat style, charcoal blazer, red tie accent',
    courseIds: ['c10-cbse-complete', 'c10-foundation-jee-neet', 'c12-science-pcm'],
  },
  {
    id: 'f2',
    name: 'Dr. Meera Nair',
    subject: 'Biology',
    bio: 'PhD in Zoology. Specializes in NEET-pattern diagram-based teaching for Class 12 PCB.',
    imagePrompt:
      'Placeholder professional headshot illustration of an Indian female teacher in her 30s, flat style, slate blouse, warm background',
    courseIds: ['c12-science-pcb', 'c10-foundation-jee-neet'],
  },
  {
    id: 'f3',
    name: 'Arjun Kapoor',
    subject: 'Physics',
    bio: '10 years of experience simplifying numericals for both board exams and JEE Main.',
    imagePrompt:
      'Placeholder professional headshot illustration of an Indian male teacher in his 30s, flat style, charcoal shirt, red accent detail',
    courseIds: ['c12-science-pcm', 'c12-science-pcb', 'c10-foundation-jee-neet'],
  },
  {
    id: 'f4',
    name: 'Priya Bhatt',
    subject: 'Commerce & Economics',
    bio: 'Chartered Accountant turned educator. Runs the CA Foundation orientation sessions.',
    imagePrompt:
      'Placeholder professional headshot illustration of an Indian female teacher in her 40s, flat style, slate blazer, warm background',
    courseIds: ['c12-commerce', 'c12-humanities'],
  },
];

/** Get faculty for a specific course by course id */
export const getFacultyForCourse = (courseId) =>
  faculty.filter((f) => f.courseIds.includes(courseId));
