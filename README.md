# Maverick UcM Institute

A highly-polished, modern single-page web application built for the **Maverick UcM Institute** and its students. It serves as a sleek digital storefront to showcase high-quality board-exam coaching (Class 10 & 12), highlight student success stories, and seamlessly drive prospective students to download the official mobile app for enrollment.

The platform is designed with a premium "Triple-Black" aesthetic, glassmorphism UI elements, and highly dynamic animations to provide a world-class first impression.

## 🛠️ Technology Stack
- **Frontend Framework:** React + Vite
- **Styling:** Tailwind CSS (Custom Triple-Black & Red theme)
- **Icons:** Lucide React
- **Routing:** React Router v6

---

## 📝 Content Management (No Coding Required)

The platform is architected so that non-technical staff can easily update the core website content without touching complex UI code. All the text, pricing, course data, and contact information live in isolated files within the `src/data/` directory.

### 1. Managing Courses & Mentors (`src/data/courses.js`)
This is the central nervous system of your course catalog. Every course shown on the homepage and the individual course pages pulls from this single array. 
- **To add a course:** Duplicate an existing course block in the `courses` array.
- **To update pricing/seats:** Modify the `feeOriginal`, `feeDiscounted`, or `seatsLeft` properties.
- **To add/edit mentors:** Modify the `mentors` array inside a specific course object. You can update mentor names, bios, subjects, images, and lecture plan PDFs directly here.

### 2. Managing Testimonials (`src/data/testimonials.js`)
This file controls the "Results Room" section on the homepage. 
- You can add or remove student reviews here.
- It perfectly supports YouTube Shorts! Just paste the YouTube video ID into the `youtubeId` field, and the platform will automatically handle the modal video player.

### 3. Managing Contact Information (`src/data/contact.js`)
This file controls the footer links, physical address, email, and the WhatsApp direct-message routing.
- Changing the `phone` field automatically updates the destination number for the "Send via WhatsApp" button in the footer.
- You can also easily update social media links (YouTube, Instagram) here.

*(Note: The old `src/data/faculty.js` has been deprecated and safely merged directly into `courses.js` for easier management).*

---

## 🚀 Running the Project Locally

### 1. Install Dependencies
Make sure you have Node.js installed, then run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The site will instantly spin up on `http://localhost:5173` with ultra-fast Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
This generates highly optimized, minified static files in the `dist/` directory, ready to be deployed to any modern static hosting provider like Vercel, Netlify, or Cloudflare Pages.

---

## 📂 Project Structure

```
src/
  assets/           # Static images (logos, mockups)
  data/             # Easy-to-edit content files (courses, testimonials, contact)
  components/
    layout/         # Navbar, Footer, App Layout
    ui/             # Reusable design system elements (Buttons, Badges, Cards)
    home/           # Homepage sections (Hero, CoursesPreview, Testimonials)
    courses/        # Reusable Course UI cards
  pages/            # Full page views (Home, About, CourseDetail)
  App.jsx           # React Router definitions
  main.jsx          # Application entry point
```

---

*Built with precision for the next generation of top-scoring students.*
