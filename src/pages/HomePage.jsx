import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import { scrollToSection } from "../utils/scrollToSection";

const HomePage = () => {
  const { hash } = useLocation();

  // Handle links like "/#projects" (from the navbar, footer, or a project page's
  // "Back to Projects" link) - react-router doesn't scroll to hashes on its own.
  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => scrollToSection(hash.slice(1)));
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </>
  );
};

export default HomePage;
