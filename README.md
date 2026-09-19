# Abhishek Singh — Portfolio

[![CI](https://github.com/Abhishek-si1/Abhishek-Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Abhishek-si1/Abhishek-Portfolio/actions/workflows/ci.yml)

A responsive single-page portfolio built with **React 19 + Vite**, with a hero, about/education, skills, projects (with detail pages), experience, certifications and a working contact form.

**Live demo:** _coming soon_ · **LinkedIn:** [abhishek-singh](https://www.linkedin.com/in/abhishek-singh-4511813bb) · **GitHub:** [Abhishek-si1](https://github.com/Abhishek-si1)

## Features

- Dark / light theme (follows the system setting, remembers your choice)
- Project cards plus a detail page per project (`/project/:slug`) with architecture, features and challenges
- Contact form that sends real emails through EmailJS (no backend needed)
- Downloadable resume, scroll-spy navigation, scroll-triggered fade-in animations
- Custom cursor on desktop (disabled on touch devices and for `prefers-reduced-motion`)

## Tech stack

| Area    | Tools                                                          |
| ------- | -------------------------------------------------------------- |
| UI      | React 19, React Router 7, React Icons                          |
| Styling | Bootstrap 5 (grid/utilities) + custom CSS with theme variables |
| Build   | Vite 6                                                         |
| Email   | EmailJS                                                        |
| Quality | ESLint, GitHub Actions (lint + build on every push/PR)         |

## Project structure

```
src/
├── components/
│   ├── layout/      Navbar, Footer, CursorFollower, ScrollToTop
│   └── sections/    Hero, About, Skills, Projects, Experience, Certifications, Contact
├── pages/           HomePage, ProjectDetailPage, NotFoundPage
├── hooks/           useInView, useTheme, useActiveSection
├── data/            profile, education, skills, projects, experience, certifications
├── utils/           scrollToSection, hasUrl
├── styles/          index.css (theme tokens + base), app.css (component styles)
├── App.jsx          Router + layout
└── main.jsx         Entry point
```

Content lives in `src/data/` — you rarely need to touch a component to update the site.

## Getting started

Requires **Node.js 18+**.

```bash
git clone https://github.com/Abhishek-si1/Abhishek-Portfolio.git
cd Abhishek-Portfolio
npm install
cp .env.example .env     # then fill in your EmailJS values (see below)
npm run dev              # http://localhost:5173
```

| Script            | What it does                       |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server               |
| `npm run build`   | Production build into `dist/`      |
| `npm run preview` | Serve the production build locally |
| `npm run lint`    | Run ESLint                         |

## Contact form (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com/), add an email service, and create a template using the variables `{{name}}`, `{{email}}`, `{{phone}}`, `{{subject}}`, `{{message}}`.
2. Put the three values in `.env`:

   ```
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```

3. In the EmailJS dashboard, restrict **allowed origins** to your site's domain. (Vite bundles `VITE_*` values into the public JS, and EmailJS public keys are designed to be public — the allow-list is what protects your quota.)

## Updating content

| To change…                                  | Edit                                    |
| ------------------------------------------- | --------------------------------------- |
| Name, contact details, social links, resume | `src/data/profile.js`                   |
| Projects (and their detail pages)           | `src/data/projects.js`                  |
| Skills                                      | `src/data/skills.js`                    |
| Experience timeline                         | `src/data/experience.js`                |
| Education list (About section)              | `src/data/education.js`                 |
| Certifications                              | `src/data/certifications.js`            |
| Theme colours                               | CSS variables in `src/styles/index.css` |

Replace the resume by overwriting `public/resume.pdf`.

## License

[MIT](LICENSE)
