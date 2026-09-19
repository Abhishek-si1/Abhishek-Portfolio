import { useLocation, useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import { scrollToSection } from "../../utils/scrollToSection";
import { profile } from "../../data/profile";

const FOOTER_NAV_MAIN = ["home", "about", "skills", "projects"];
const FOOTER_NAV_MORE = ["experience", "certifications", "contact"];
const FOOTER_TECH = ["React", "Node.js", "Express.js", "PostgreSQL", "JavaScript", "HTML5", "CSS3", "Git"];

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // On the home page scroll; from a project page go home and let HomePage scroll to the hash.
  const goToSection = (sectionId) => {
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate({ pathname: "/", hash: `#${sectionId}` });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          {/* Brand + Description */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-logo">&lt;Abhishek /&gt;</h5>
            <p className="footer-description">
              Full-Stack Developer passionate about building web apps with
              React, Node.js, Express.js, and PostgreSQL.
            </p>
            <div className="footer-socials">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-social-link"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-link"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="footer-social-link"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-lg-2 col-md-6 col-6 mb-4">
            <h6 className="footer-heading">Navigation</h6>
            <ul className="footer-links">
              {FOOTER_NAV_MAIN.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => goToSection(id)}
                    className="footer-link-btn"
                  >
                    {capitalize(id)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Navigation */}
          <div className="col-lg-2 col-md-6 col-6 mb-4">
            <h6 className="footer-heading">More</h6>
            <ul className="footer-links">
              {FOOTER_NAV_MORE.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => goToSection(id)}
                    className="footer-link-btn"
                  >
                    {capitalize(id)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Summary */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h6 className="footer-heading">Tech Stack</h6>
            <div className="footer-tech-tags">
              {FOOTER_TECH.map((tech) => (
                <span key={tech} className="footer-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="row align-items-center">
                    <div className="col-12 text-center">
            <p className="footer-copyright">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;