import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footerLinks">
          <a href="">Privacy & Terms.</a>
          <a href="">Contact Us</a>
        </div>
        <p>Copyright ©2023 jobi inc.</p>
        <ul className="socials">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaPinterestP />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
