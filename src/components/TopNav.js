import { Link } from "react-router-dom";
import AccountBtns from "./AccountBtns";
import Logo from "./Logo";

const TopNav = () => {
  return (
    <nav className="topNav">
      <Logo />
      <ul className="topNavLinks">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/details/666"}>Job</Link>
        </li>
        <li>
          <Link to={"/jobs"}>Explore</Link>
        </li>
        <li>
          <Link to={"/categories"}>Category</Link>
        </li>
        <li>
          Pages
          <ul className="pagesDropDown">
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={"/pricing"}>Pricing</Link>
            </li>
            <li>
              <Link to={"/error"}>Error 404</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </li>
      </ul>
      <AccountBtns
        candidateText={"Login/Sign up"}
        employerText={"Post a job"}
      />
    </nav>
  );
};

export default TopNav;
