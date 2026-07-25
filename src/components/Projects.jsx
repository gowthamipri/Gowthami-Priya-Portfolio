import "./Projects.css";

import campusShare from "../assets/campusshare.png";
import aiPlatform from "../assets/aicareerplatform.png";
import eeg from "../assets/eeg.png";

function Projects() {
  const projects = [
    {
      title: "Campus Share",
      image: campusShare,
      description:
        "A college item sharing platform where students can lend and borrow academic resources efficiently through a secure borrowing and lending system.",
      tech: "React • Spring Boot • MySQL",
      github: "https://github.com/gowthamipri/CampusShare",
      demo: "/campusshare.mp4",
    },
    {
      title: "AI Career Platform",
      image: aiPlatform,
      description:
        "An AI-powered career platform that helps users build ATS-friendly resumes, discover jobs, and receive personalized career guidance.",
      tech: "React • Node.js • AI",
      github: "https://github.com/gowthamipri/ai-platform",
      demo: "/aicareerplatform.mp4",
    },
    {
      title: "Graph-Based EEG Classification",
      image: eeg,
      description:
        "A Graph Neural Network model for EEG motor imagery classification designed for Brain-Computer Interface applications.",
      tech: "Python • Deep Learning • GNN",
      github: "#",
      demo: "/eeg.mp4",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Major Projects</h2>

      <p className="subtitle">
        Here are some of the projects I have developed using modern technologies.
      </p>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;