import { FaLinkedin, FaGithub } from "react-icons/fa";
import { profile } from "../../data/profile";

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <div className="animate-fadeInUp">
            <h1 className="hero-title">Hi, I'm {profile.name}</h1>
            <h2 className="hero-role">{profile.role}</h2>
            <p className="hero-subtitle">
              Full-stack developer with hands-on experience building 3 web applications using
              HTML, CSS, JavaScript, React, Node.js, and Express.js, with REST APIs and
              PostgreSQL database concepts.
            </p>

            <div className="hero-contact">
              <p className="contact-info">
                <span className="contact-item">📞 {profile.phone}</span>
                <span className="contact-separator">|</span>
                <span className="contact-item">✉️ {profile.email}</span>
              </p>
              <p className="location-info">📍 {profile.location}</p>
            </div>

            <div className="hero-cta">
              <a
                href={profile.resume.url}
                download={profile.resume.downloadName}
                className="cta-button primary"
              >
                📄 Download Resume
              </a>
              <a href="#contact" className="cta-button secondary">
                💼 Hire Me
              </a>
            </div>

            <div className="social-links">
              <a
                href={profile.social.linkedin}
                className="social-link animate-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ animationDelay: "0.2s" }}
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href={profile.social.github}
                className="social-link animate-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ animationDelay: "0.4s" }}
              >
                <FaGithub size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
