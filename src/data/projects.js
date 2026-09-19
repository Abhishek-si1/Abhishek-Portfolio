// Project content shown in the Projects section and on /project/:slug pages.
// Leave `liveUrl` / `githubUrl` as "" to hide those buttons instead of showing a dead link.
// Replace the Unsplash placeholder `image` with your own screenshot, e.g. put
// public/projects/expense-tracker.png in the repo and use
// `${import.meta.env.BASE_URL}projects/expense-tracker.png`.
export const projects = [
  {
    id: 1,
    slug: "expense-tracker",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop",
    title: "Expense Tracker — Personal Finance Dashboard",
    description:
      "A full-stack expense tracking dashboard with transaction logging, category management, and monthly budgets.",
    duration: "2025",
    techStack:
      "React, TypeScript, Vite, Node.js, Express.js, PostgreSQL, Prisma, Recharts",
    overview:
      "A full-stack personal finance dashboard for logging transactions, managing categories and monthly budgets, and visualizing spending trends.",
    detailedDescription: `
      Built a full-stack expense tracking dashboard with transaction logging, category management, and monthly budgets.

      Key Features:
      • Transaction logging with category management
      • Monthly budget tracking
      • Analytics and visualizations built with Recharts to surface spending trends
      • Type-safe database access via Prisma ORM + PostgreSQL
    `,
    architecture: {
      frontend: "React + TypeScript, built with Vite",
      backend: "Node.js + Express.js REST API",
      database: "PostgreSQL via Prisma ORM",
    },
    keyFeatures: [
      "Transaction logging and category management",
      "Monthly budgets",
      "Spending-trend analytics and charts with Recharts",
      "Type-safe database access with Prisma",
    ],
    responsibilities: [
      "Built a full-stack expense tracking dashboard with transaction logging, category management, and monthly budgets",
      "Implemented analytics and visualizations using Recharts to surface spending trends",
      "Used Prisma ORM with PostgreSQL for type-safe database access",
    ],
    challenges: [
      {
        challenge: "Keeping spending analytics accurate as transactions change",
        solution:
          "Derived chart data from Prisma queries at request time rather than caching stale aggregates, so Recharts always reflects the current transaction set",
      },
      {
        challenge: "Type safety across the frontend/backend boundary",
        solution:
          "Used TypeScript on the frontend and Prisma's generated types on the backend to keep transaction and budget shapes consistent end to end",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Recharts",
    ],
    liveUrl: "", // TODO: add the deployed demo URL (leave "" to hide the button)
    githubUrl: "", // TODO: add this project's own repository URL (leave "" to hide the button)
    featured: true,
    category: "Full-Stack",
  },

  {
    id: 2,
    slug: "ecommerce-platform",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product browsing, filtering, and cart/order management for customer, seller, and admin roles.",
    duration: "2025",
    techStack: "React, Vite, Node.js, Express.js, PostgreSQL, Sequelize",
    overview:
      "A full-stack e-commerce platform with product browsing and filtering, cart/order management, and role-based access for customers, sellers, and admins.",
    detailedDescription: `
      Developed a full-stack e-commerce platform with product browsing, filtering, and cart/order management.

      Key Features:
      • Product browsing and filtering
      • Cart and order management
      • Authentication with role-based access control (customer, seller, admin)
      • REST APIs built with Express.js, data modeled with Sequelize
    `,
    architecture: {
      frontend: "React, built with Vite",
      backend: "Node.js + Express.js REST API with role-based access control",
      database: "PostgreSQL via Sequelize ORM",
    },
    keyFeatures: [
      "Product browsing and filtering",
      "Cart and order management",
      "Role-based access control for customer, seller, and admin roles",
      "REST APIs modeled with Sequelize",
    ],
    responsibilities: [
      "Developed a full-stack e-commerce platform with product browsing, filtering, and cart/order management",
      "Implemented authentication and role-based access control (RBAC) for customer, seller, and admin roles",
      "Built REST APIs with Express.js and modeled data using Sequelize",
    ],
    challenges: [
      {
        challenge: "Enforcing different permissions for customer, seller, and admin roles",
        solution:
          "Centralized role checks in Express middleware so every route validates the requester's role before touching order or product data",
      },
      {
        challenge: "Keeping cart/order state consistent under concurrent updates",
        solution:
          "Used Sequelize transactions when creating orders so stock and cart updates commit together or not at all",
      },
    ],
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
    ],
    liveUrl: "", // TODO: add the deployed demo URL (leave "" to hide the button)
    githubUrl: "", // TODO: add this project's own repository URL (leave "" to hide the button)
    featured: true,
    category: "Full-Stack",
  },

  {
    id: 3,
    slug: "appointment-booking-system",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    title: "Appointment Booking System",
    description:
      "A scheduling application for appointment creation, availability management, and admin oversight, with double-booking prevention.",
    duration: "2025",
    techStack: "React, Vite, Node.js, Express.js, PostgreSQL, Sequelize",
    overview:
      "A scheduling application for creating appointments, managing availability, and giving admins oversight — with backend safeguards against double-booking.",
    detailedDescription: `
      Built a scheduling application for appointment creation, availability management, and admin oversight.

      Key Features:
      • Appointment creation and availability management
      • Double-booking prevention via backend validation and database constraints
      • Email confirmations
      • Input validation across the booking flow
    `,
    architecture: {
      frontend: "React, built with Vite",
      backend: "Node.js + Express.js REST API",
      database: "PostgreSQL via Sequelize with constraints preventing double-booking",
    },
    keyFeatures: [
      "Appointment creation and availability management",
      "Double-booking prevention",
      "Email confirmations",
      "Input validation across the booking flow",
    ],
    responsibilities: [
      "Built a scheduling application for appointment creation, availability management, and admin oversight",
      "Solved double-booking prevention using backend validation and database constraints",
      "Implemented email confirmations and input validation across the booking flow",
    ],
    challenges: [
      {
        challenge: "Preventing double-booking under simultaneous requests",
        solution:
          "Added a database-level unique/exclusion constraint on time slots in addition to application-level checks, so a race condition can't slip two bookings through",
      },
      {
        challenge: "Keeping availability accurate across time zones and admin overrides",
        solution:
          "Validated appointment windows server-side against stored availability records rather than trusting client-submitted times",
      },
    ],
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
    ],
    liveUrl: "", // TODO: add the deployed demo URL (leave "" to hide the button)
    githubUrl: "", // TODO: add this project's own repository URL (leave "" to hide the button)
    featured: true,
    category: "Full-Stack",
  },

  {
    id: 4,
    slug: "issue-bug-tracker",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    title: "Issue/Bug Tracker (In Progress)",
    description:
      "A lightweight issue-tracking application supporting projects, issues, priorities, assignees, and status workflows.",
    duration: "2025 — In Progress",
    techStack: "React, Redux, TypeScript, Node.js, Express.js, PostgreSQL",
    overview:
      "A lightweight issue-tracking application for managing projects, issues, priorities, assignees, and status workflows, currently under active development.",
    detailedDescription: `
      Building a lightweight issue-tracking application supporting projects, issues, priorities, assignees, and status workflows.

      In progress:
      • Redux for complex application state management
      • Kanban-style board view with labels, filters, and due dates
    `,
    architecture: {
      frontend: "React + TypeScript with Redux for state management",
      backend: "Node.js + Express.js REST API",
      database: "PostgreSQL",
    },
    keyFeatures: [
      "Projects, issues, priorities, and assignees",
      "Status workflows",
      "Redux-managed application state",
      "Kanban-style board view with labels, filters, and due dates (in progress)",
    ],
    responsibilities: [
      "Building a lightweight issue-tracking application supporting projects, issues, priorities, assignees, and status workflows",
      "Implementing Redux for complex application state management",
      "Working toward a Kanban-style board view with labels, filters, and due dates",
    ],
    challenges: [
      {
        challenge: "Managing complex, interrelated state (issues, filters, board position)",
        solution:
          "Introduced Redux to centralize issue and filter state instead of threading props through nested board components",
      },
    ],
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    liveUrl: "", // TODO: add the deployed demo URL (leave "" to hide the button)
    githubUrl: "", // TODO: add this project's own repository URL (leave "" to hide the button)
    featured: true,
    category: "In Progress",
  },
];

export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};
