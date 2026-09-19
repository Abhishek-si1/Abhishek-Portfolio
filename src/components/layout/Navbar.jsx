import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MdOutlineDarkMode,
  MdLightMode,
  MdHome,
  MdPerson,
  MdCode,
  MdWork,
  MdEmail,
} from "react-icons/md";
import { FaGithub, FaLinkedin, FaCertificate, FaProjectDiagram } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
import useActiveSection from "../../hooks/useActiveSection";
import { scrollToSection } from "../../utils/scrollToSection";
import { profile } from "../../data/profile";

const PRIMARY_ITEMS = [
  { id: "home", icon: MdHome, label: "Home" },
  { id: "about", icon: MdPerson, label: "About" },
  { id: "skills", icon: MdCode, label: "Skills" },
  { id: "projects", icon: FaProjectDiagram, label: "Projects" },
];

const SECONDARY_ITEMS = [
  { id: "experience", icon: MdWork, label: "Experience" },
  { id: "certifications", icon: FaCertificate, label: "Certifications" },
  { id: "contact", icon: MdEmail, label: "Contact" },
];

const SECTION_IDS = [...PRIMARY_ITEMS, ...SECONDARY_ITEMS].map((item) => item.id);

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { darkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useActiveSection(SECTION_IDS, pathname);
  const [isScrolled, setIsScrolled] = useState(false);

  const isProjectDetailPage = pathname.startsWith("/project/");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (sectionId) => {
    if (pathname !== "/") {
      // Not on the home page: navigate there; HomePage scrolls to the hash.
      navigate({ pathname: "/", hash: `#${sectionId}` });
      return;
    }
    if (scrollToSection(sectionId)) setActiveSection(sectionId);
  };

  const isActive = (id) => !isProjectDetailPage && activeSection === id;

  const renderNavButton = ({ id, icon: Icon, label }) => (
    <button
      key={id}
      className={`nav-icon-minimal ${isActive(id) ? "active" : ""}`}
      onClick={() => goToSection(id)}
      title={label}
      aria-label={label}
      aria-current={isActive(id) ? "true" : undefined}
    >
      <Icon size={18} />
    </button>
  );

  return (
    <nav className={`modern-navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo - scrolls to Home */}
        <button
          className={`nav-icon-minimal logo-minimal ${isActive("home") ? "active" : ""}`}
          onClick={() => goToSection("home")}
          title={`${profile.name} - ${profile.role}`}
          aria-label="Home"
        >
          <img src={profile.logoUrl} alt={profile.name} className="navbar-logo-minimal" />
        </button>

        {PRIMARY_ITEMS.map(renderNavButton)}

        <div className="navbar-divider"></div>

        {SECONDARY_ITEMS.map(renderNavButton)}

        {/* Social links */}
        <a
          href={profile.social.github}
          className="nav-icon-minimal social-link"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <FaGithub size={16} />
        </a>

        <a
          href={profile.social.linkedin}
          className="nav-icon-minimal social-link"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={16} />
        </a>

        <div className="navbar-divider"></div>

        {/* Theme toggle */}
        <button
          className={`nav-icon-minimal theme-toggle-minimal ${darkMode ? "dark-active" : "light-active"}`}
          onClick={toggleTheme}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <div className="theme-icon-container">
            {darkMode ? (
              <MdLightMode size={18} className="theme-icon" />
            ) : (
              <MdOutlineDarkMode size={18} className="theme-icon" />
            )}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
