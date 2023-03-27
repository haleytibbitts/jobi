import { Link } from "react-router-dom";
import AccountBtns from "./AccountBtns";
import Logo from "./Logo";
import { useState } from "react";

const TopNav = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className="topNav">
      <Logo />
      <div className="links">
        <ul className="topNavLinks">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/jobs/47617afd-c5aa-4d3a-a3f3-70e8598aa514"}>Job</Link>
          </li>
          <li>
            <Link to={"/jobs"}>Explore</Link>
          </li>
          <li>
            <Link to={"/categories"}>Category</Link>
          </li>
          <li>
            <button onClick={handleDropDown}>Pages</button>
            <ul
              className="pagesDropDown"
              style={dropDown ? { display: "flex" } : { display: "none" }}
            >
              <li>
                <Link to={"/about-us"} onClick={handleDropDown}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/pricing"} onClick={handleDropDown}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to={"/error"} onClick={handleDropDown}>
                  Error 404
                </Link>
              </li>
              <li>
                <Link to={"/blog"} onClick={handleDropDown}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"/contact"} onClick={handleDropDown}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <AccountBtns
          candidateText={"Login/Sign up"}
          employerText={"Post a job"}
        />
      </div>
    </nav>
  );
};

export default TopNav;
