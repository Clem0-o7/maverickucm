# Maverick UcM Institute

A Class 10 & 12 board-exam coaching site, built with Vite + React + Tailwind CSS,
with Clerk for authentication. Theme colors are pulled directly from the
Maverick UcM logo: red, charcoal, slate, and cream.

## 1. Install

```bash
npm install
```

## 2. Set up Clerk authentication

1. Create a free account at [clerk.com](https://dashboard.clerk.com) and create an application.
2. Copy your **Publishable key** from the Clerk dashboard.
3. Copy the example env file and paste your key in:

   ```bash
   cp .env.example .env
   ```

   ```
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
   ```

4. That's it — sign in, sign up, the user menu, and the protected `/dashboard`
   route all work out of the box once the key is set.

## 3. Run it

```bash
npm run dev
```

## 4. Managing courses (the important part)

Every course on the site — the ones on the homepage, the `/courses` page,
and each course's own detail page — comes from **one file**:

```
src/data/courses.js
```

To add a course, copy the `COURSE_TEMPLATE` object at the top of that file
into the `courses` array and fill in the fields. To remove one, delete its
object (or set `active: false` to hide it without deleting). To edit one,
change its fields directly. Nothing else in the codebase needs to change —
every page reads from this same array.

Only two grade levels are supported by design, matching the brief: `grade: '10'`
and `grade: '12'` (12th also has an optional `stream`, e.g. `'Science (PCM)'`,
`'Commerce'`, `'Humanities'`).

Two related files follow the exact same pattern if you want to edit them:

- `src/data/testimonials.js` — student quotes shown in the "Results room" section
- `src/data/faculty.js` — the team shown on the About page

## 5. Placeholder images

No stock photography was available for this build, so every image slot is a
dashed placeholder box (`<ImagePlaceholder />`) that shows the exact prompt
to hand to an image generator, e.g.:

> Flat vector illustration of a student at a desk with an open notebook...

Once you've generated an image:

1. Drop the file into `src/assets/` (e.g. `src/assets/course-pcm.jpg`).
2. Import it at the top of the relevant file: `import pcmImg from '../assets/course-pcm.jpg'`.
3. Swap `<ImagePlaceholder prompt={...} />` for `<img src={pcmImg} alt="..." className="..." />`.

For course-specific images, the prompt lives on the course object itself
(`imagePrompt` field in `src/data/courses.js`), so you can also just add an
`image` field there and branch on it in `CourseCard.jsx` / `CourseDetail.jsx`.

## 6. Project structure

```
src/
  assets/           logo + any generated images
  data/             courses.js, testimonials.js, faculty.js, stats.js
  components/
    layout/         Navbar, Footer, Layout
    ui/             Button, Badge, AdmitCard, ImagePlaceholder, CountUp
    home/           Hero, WhyUs, CoursesPreview, Testimonials, CTASection
    courses/        CourseCard, CourseFilter
    auth/           ProtectedRoute
  pages/            one file per route
  App.jsx           route definitions
  main.jsx          Clerk + Router setup
```

## 7. Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy it anywhere that serves static files
(Vercel, Netlify, Cloudflare Pages, etc.). Remember to set the
`VITE_CLERK_PUBLISHABLE_KEY` environment variable on whichever platform you
deploy to, and add your production domain in the Clerk dashboard.
