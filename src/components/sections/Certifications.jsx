import { FaExternalLinkAlt, FaCertificate, FaAward } from "react-icons/fa";
import useInView from "../../hooks/useInView";
import { certifications } from "../../data/certifications";

function Certifications() {
  const [sectionRef, isVisible] = useInView();

  return (
    <section id="certifications" className="certifications-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p
          className="text-center mb-5"
          style={{
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}
        >
          Professional certifications that validate my expertise in web development and modern JavaScript.
        </p>

        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`col-lg-6 col-md-6 ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`certification-card ${cert.featured ? 'featured' : ''}`}>
                

                <div className="cert-header">
                  <div className="cert-icon">
                    <img
                      src={cert.icon}
                      alt={cert.provider}
                      className="provider-icon"
                    />
                  </div>
                  <div className="cert-info">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-provider">{cert.provider}</p>
                    <span className="cert-code">{cert.code}</span>
                  </div>
                </div>

                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="cert-footer">
                  <div className="cert-date">
                    <FaCertificate className="me-2" />
                    Issued {cert.issueDate}
                  </div>
                  <a
                    href={cert.verifyUrl}
                    className="verify-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="me-2" />
                    Verify
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;