import { education } from "../../data/education";
import { projects } from "../../data/projects";
import { certifications } from "../../data/certifications";

const About = () => {
  // Counts come from the data files so they can't drift out of date.
  const stats = [
    { value: projects.length, label: "Projects Built" },
    { value: certifications.length, label: "Certifications" },
    { value: "10+", label: "Technologies" },
    { value: 2, label: "Degrees Pursued" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="section-title text-center">About Me</h2>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="about-content">
                  <p className="about-description">
                    I'm a full-stack developer (fresher) with hands-on experience building web
                    applications using HTML, CSS, JavaScript, React, Node.js, and Express.js,
                    with REST APIs and basic PostgreSQL database concepts.
                  </p>

                  <p className="about-description">
                    Backed by an engineering background in Electronics & Communication and
                    ongoing M.Tech coursework. Quick learner, comfortable working across the
                    stack from UI to backend logic to database.
                  </p>

                  <div className="education-info">
                    <h4>Education</h4>

                    {education.map((item) => (
                      <div key={item.id} className="education-item">
                        <h5>{item.title}</h5>
                        <p>{item.detail}</p>
                        <span className="education-meta">{item.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="about-stats">
                  {stats.map((stat) => (
                    <div key={stat.label} className="stat-item">
                      <h4 className="stat-number">{stat.value}</h4>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
