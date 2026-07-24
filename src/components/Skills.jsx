import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Core Java", "Python"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      skills: ["Spring Boot"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Firebase"],
    },
    {
      title: "Operating Systems",
      skills: ["Windows", "Linux"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "Areas of Interest",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Cloud Computing",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>

      <p className="subtitle">
        Technologies, programming languages, and tools I use to develop modern
        software applications.
      </p>

      <div className="skills-wrapper">
        {skillCategories.map((category, index) => (
          <div className="skill-section" key={index}>
            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;