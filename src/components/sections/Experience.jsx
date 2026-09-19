import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaCode,
  FaAward,
} from "react-icons/fa";
import useInView from "../../hooks/useInView";
import { experiences } from "../../data/experience";
import { scrollToSection } from "../../utils/scrollToSection";

function Experience() {
  const [sectionRef, isVisible] = useInView();

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <p
          className="text-center mb-5"
          style={{
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}
        >
          Hands-on experience building full-stack projects, backed by ongoing M.Tech coursework.
        </p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-item ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="company-logo">
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div className="experience-info">
                    <h3 className="job-title">{exp.title}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                    <div className="job-meta">
                      <span className="duration">
                        <FaCalendarAlt className="me-2" />
                        {exp.period}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt className="me-2" />
                        {exp.location}
                      </span>
                      <span className="job-type">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <p className="job-description">{exp.description}</p>

                <div className="experience-content">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <h5 className="content-title">
                        <FaBriefcase className="me-2" />
                        Key Focus
                      </h5>
                      <ul className="responsibilities-list">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-lg-6 mb-4">
                      <h5 className="content-title">
                        <FaAward className="me-2" />
                        Highlights
                      </h5>
                      <ul className="achievements-list">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="technologies-used">
                    <h5 className="content-title">
                      <FaCode className="me-2" />
                      Technologies & Topics
                    </h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="experience-cta mt-5">
          <div className="cta-card">
            <h3>Ready to Build Something Together</h3>
            <p>
              I'm actively looking for opportunities where I can contribute to real-world
              full-stack projects. Let's discuss how I can help with your next idea.
            </p>
            <button
              className="cta-button"
              onClick={() => scrollToSection("contact")}
            >
              <FaUsers className="me-2" />
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;