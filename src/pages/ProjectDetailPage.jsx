import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaClock,
  FaTag,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";
import { getProjectBySlug } from "../data/projects";
import { hasUrl } from "../utils/hasUrl";
import NotFoundPage from "./NotFoundPage";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  // Unknown slug: show a proper 404 instead of silently redirecting home.
  if (!project) return <NotFoundPage />;

  return (
    <div className="project-detail-page">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link to="/#projects" className="back-link">
                <FaArrowLeft /> Back to Projects
              </Link>

              <div className="project-hero-content">
                <div className="project-meta-info">
                  <span className="project-duration">
                    <FaClock /> {project.duration}
                  </span>
                  <span className={`project-category-badge ${project.category.toLowerCase()}`}>
                    <FaTag /> {project.category}
                  </span>
                </div>

                <h1 className="project-hero-title">{project.title}</h1>
                <p className="project-hero-description">{project.overview}</p>

                <div className="project-hero-actions">
                  {hasUrl(project.liveUrl) && (
                    <a
                      href={project.liveUrl}
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {hasUrl(project.githubUrl) && (
                    <a
                      href={project.githubUrl}
                      className="btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}
                  {project.blogUrl && (
                    <a
                      href={project.blogUrl}
                      className="btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Read Blog
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="project-showcase">
        <div className="container">
          <div className="project-image-container">
            <img
              src={project.image}
              alt={project.title}
              className="project-showcase-image"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="project-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Overview */}
              <div className="content-section">
                <h2>Project Overview</h2>
                <p className="project-detailed-description">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Architecture */}
              {project.architecture && (
                <div className="content-section">
                  <h2>Architecture</h2>
                  <div className="architecture-grid">
                    {Object.entries(project.architecture).map(([key, value]) => (
                      <div key={key} className="architecture-item">
                        <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                        <p>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="content-section">
                <h2>Key Features</h2>
                <div className="features-grid">
                  {project.keyFeatures.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <FaCheckCircle className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="content-section">
                <h2>My Responsibilities</h2>
                <ul className="responsibilities-detailed">
                  {project.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              {project.challenges && (
                <div className="content-section">
                  <h2>Challenges & Solutions</h2>
                  <div className="challenges-list">
                    {project.challenges.map((item, index) => (
                      <div key={index} className="challenge-item">
                        <h4>Challenge:</h4>
                        <p>{item.challenge}</p>
                        <h4>Solution:</h4>
                        <p>{item.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-lg-4">
              {/* Project Info Sidebar */}
              <div className="project-sidebar">
                {/* Tech Stack */}
                <div className="sidebar-section">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags-detailed">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag-detailed">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Metrics */}
                {project.metrics && (
                  <div className="sidebar-section">
                    <h3>Project Metrics</h3>
                    <div className="metrics-list">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="metric-item">
                          <FaChartLine className="metric-icon" />
                          <div>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</strong>
                            <p>{value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Links (hidden when the project has none yet) */}
                {(hasUrl(project.liveUrl) || hasUrl(project.githubUrl) || project.blogUrl) && (
                  <div className="sidebar-section">
                    <h3>Project Links</h3>
                    <div className="project-links-sidebar">
                      {hasUrl(project.liveUrl) && (
                        <a
                          href={project.liveUrl}
                          className="sidebar-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                      {hasUrl(project.githubUrl) && (
                        <a
                          href={project.githubUrl}
                          className="sidebar-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub /> Source Code
                        </a>
                      )}
                      {project.blogUrl && (
                        <a
                          href={project.blogUrl}
                          className="sidebar-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt /> Read Blog
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;