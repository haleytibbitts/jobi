import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footerLinks">
          <Link to="/terms">Privacy & Terms.</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <p>Copyright ©2023 jobi inc.</p>
        <ul className="socials">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="facebook"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="pinterest"
            >
              <FaPinterestP />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
