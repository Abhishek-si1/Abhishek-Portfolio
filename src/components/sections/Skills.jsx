import useInView from "../../hooks/useInView";
import { skills, FALLBACK_SKILL_ICON } from "../../data/skills";

function Skills() {
  const [sectionRef, isVisible] = useInView();

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Full-Stack Development Skills</h2>
        <p
          className="text-center mb-5"
          style={{
            color: "var(--text-secondary)",
            maxWidth: "700px",
            margin: "0 auto 3rem",
          }}
        >
          Comprehensive expertise in frontend, backend, databases, and modern web technologies
        </p>

        <div className="skills-grid-unified">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-item-unified ${isVisible ? "animate-fadeInUp" : ""}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="skill-icon-container">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="skill-icon"
                  loading="lazy"
                  onError={(e) => {
                    // guard so a broken fallback doesn't retrigger onError forever
                    if (e.currentTarget.src !== FALLBACK_SKILL_ICON) {
                      e.currentTarget.src = FALLBACK_SKILL_ICON;
                    }
                  }}
                />
              </div>
              <div className="skill-info">
                <p className="skill-name">{skill.name}</p>
                <span className={`skill-category-tag ${skill.category.toLowerCase()}`}>
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
