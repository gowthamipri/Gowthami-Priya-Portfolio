import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Get In Touch</h2>

      <p className="subtitle">
        Feel free to connect with me for internships, projects or collaborations.
      </p>

      <div className="contact-container">

        <div className="contact-card">

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>kgowthamipriya00@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhone className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 9347001613</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Location</h4>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>

        </div>

        <div className="social-card">

          <h3>Connect With Me</h3>

          <div className="social-links">

            <a
              href="https://github.com/gowthamipri"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/k-gowthami-priya"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;