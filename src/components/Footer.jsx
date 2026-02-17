import "./Footer.css";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer-name">Kelsey Korenromp</div>
    <div className="footer-socials">
      <a
        href="mailto:Kelsey.kelstudio@gmail.com"
        className="social-icon"
        aria-label="Email"
      >
        <IoMailOutline size={28} />
      </a>
      <a
        href="https://www.instagram.com/kelstudio.nl/"
        className="social-icon"
        aria-label="Instagram"
      >
        <FaInstagram size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/kelsey-korenromp-82388a204/"
        className="social-icon"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn size={28} />
      </a>
    </div>
  </footer>
);

export default Footer;
