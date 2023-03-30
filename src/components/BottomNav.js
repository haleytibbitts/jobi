import Logo from "./Logo";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="btmNav">
      <div className="wrapper">
        <ul className="outer">
          <li>
            <Logo />
          </li>
          <li className="links">
            <h2>Links</h2>
            <ul>
              <Link to={"/pricing"}>
                <li>Pricing</li>
              </Link>
              <Link to={"/about-us"}>
                <li>About us</li>
              </Link>
              <Link to={"/careers"}>
                <li>Careers</li>
              </Link>
              <Link to={"/blog"}>
                <li>Blog</li>
              </Link>
            </ul>
          </li>
          <li>
            <h2>Products</h2>
            <ul>
              <Link to={"/tour"}>
                <li>Take the tour</li>
              </Link>
              <Link to={"/chat"}>
                <li>Live chat</li>
              </Link>
              <Link to={"/self-service"}>
                <li>Self-service</li>
              </Link>
              <Link to={"/mobile"}>
                <li>Mobile</li>
              </Link>
              <Link to={"/collaboration"}>
                <li>Collaboration</li>
              </Link>
              <Link to={"/reviews"}>
                <li>Reviews</li>
              </Link>
            </ul>
          </li>
          <li>
            <h2>Legal</h2>
            <ul>
              <Link to={"/terms"}>
                <li>Terms of use</li>
              </Link>
              <Link to={"/terms"}>
                <li>Terms & conditions</li>
              </Link>
              <Link to={"/privacy"}>
                <li>Privacy</li>
              </Link>
              <Link to={"/cookies"}>
                <li>Cookie policy</li>
              </Link>
            </ul>
          </li>
          <li className="newsletter">
            <h2>Newsletter</h2>
            <p>Join & get important new regularly</p>
            <form>
              <label htmlFor="newsletterInput" className="hidden">
                Enter your email
              </label>
              <input
                type="email"
                name="newsletterInput"
                id="newsletterInput"
                placeholder="Enter your email"
              />
              <button>Send</button>
            </form>
            <p>We only send interesting and relevant emails.</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BottomNav;
