import "./Hero.css";
import profile from "../assets/photo.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Left Section */}
      <div className="hero-text">

        <h4 className="hello">👋 Hello, I'm</h4>

        <h1>
          K Gowthami <span>Priya</span>
        </h1>

        <h2>Artificial Intelligence & Machine Learning Student</h2>

        <p>
          Passionate about building intelligent software solutions using
          <strong> Java Full Stack Development</strong>,
          <strong> Artificial Intelligence</strong>,
          <strong> Machine Learning</strong>, and
          <strong> Web Development</strong>. I enjoy creating responsive,
          scalable, and user-friendly applications that solve real-world
          problems.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          <a
            href="/gowthami_etnotech_Resume.pdf"
            download="K_Gowthami_Priya_Resume.pdf"
            className="resume-btn"
          >
            📄 Download Resume
          </a>

          <a
            href="#contact"
            className="contact-btn"
          >
            📩 Contact Me
          </a>

        </div>

        {/* Skills */}
        <div className="hero-skills">

          <span>Java</span>

          <span>React</span>

          <span>Spring Boot</span>

          <span>MySQL</span>

          <span>AI</span>

          <span>Machine Learning</span>

        </div>

        {/* Statistics */}

       <div className="hero-stats">
  <div className="stat-box">
    <h3>9.16</h3>
    <p>CGPA</p>
  </div>

  <div className="stat-box">
    <h3>8+</h3>
    <p>Projects</p>
  </div>

  <div className="stat-box">
    <h3>3</h3>
    <p>Internships</p>
  </div>

  <div className="stat-box">
    <h3>10+</h3>
    <p>Certifications</p>
  </div>
</div>

      </div>

      {/* Right Section */}

      <div className="hero-image">

        <img
          src={profile}
          alt="K Gowthami Priya"
        />

      </div>

    </section>
  );
}

export default Hero;