// Single source of truth for personal / contact details.
// Change something here once instead of hunting through components.
const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Abhishek Singh",
  role: "Full-Stack Developer",
  location: "Bhopal, Madhya Pradesh",
  email: "abhisheksingh283420@gmail.com",
  phone: "+91 74704 68795",
  phoneHref: "tel:+917470468795",
  resume: {
    url: `${BASE}resume.pdf`,
    downloadName: "Abhishek_Singh_Resume.pdf",
  },
  logoUrl: `${BASE}logo.svg`,
  social: {
    github: "https://github.com/Abhishek-si1",
    linkedin: "https://www.linkedin.com/in/abhishek-singh-4511813bb",
  },
};
