import "./Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>K Gowthami Priya</h2>

        <p>
          AI & ML Student | Java Full Stack Developer
        </p>

        <div className="footer-icons">

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

        <a href="#home" className="top-btn">
          <FaArrowUp />
        </a>

        <p className="copyright">
          © 2026 K Gowthami Priya. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;