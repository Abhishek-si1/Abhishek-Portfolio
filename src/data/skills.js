// Skills grid data. Icons come from the devicon CDN: https://devicon.dev
const devicon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

export const FALLBACK_SKILL_ICON = devicon("devicon");

export const skills = [
  // Frontend
  { name: "HTML5", category: "Frontend", src: devicon("html5") },
  { name: "CSS3", category: "Frontend", src: devicon("css3") },
  { name: "JavaScript", category: "Frontend", src: devicon("javascript") },
  { name: "React", category: "Frontend", src: devicon("react") },

  // Backend
  { name: "Node.js", category: "Backend", src: devicon("nodejs") },
  { name: "Express.js", category: "Backend", src: devicon("express") },
  { name: "REST APIs", category: "Backend", src: devicon("postman") },

  // Database
  { name: "PostgreSQL", category: "Database", src: devicon("postgresql") },
  { name: "SQL", category: "Database", src: devicon("mysql") },

  // Tools
  { name: "Git", category: "Tools", src: devicon("git") },
  { name: "GitHub", category: "Tools", src: devicon("github") },
  { name: "VS Code", category: "Tools", src: devicon("vscode") },
];
