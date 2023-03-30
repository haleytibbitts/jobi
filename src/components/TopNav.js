import { Link } from "react-router-dom";
import AccountBtns from "./AccountBtns";
import Logo from "./Logo";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const TopNav = () => {
  const [dropDown, setDropDown] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleHamburger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <nav className="topNav">
      <Logo />
      <button className="hamburger" onClick={handleHamburger}>
        <GiHamburgerMenu />
      </button>
      <div
        className="links"
        style={
          window.innerWidth < 1025
            ? isBurgerOpen
              ? { display: "flex" }
              : { display: "none" }
            : null
        }
      >
        <ul className="topNavLinks">
          <li>
            <Link to={"/"} onClick={handleHamburger}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/jobs/47617afd-c5aa-4d3a-a3f3-70e8598aa514"}
              onClick={handleHamburger}
            >
              Job
            </Link>
          </li>
          <li>
            <Link to={"/jobs"} onClick={handleHamburger}>
              Explore
            </Link>
          </li>
          <li>
            <Link to={"/categories"} onClick={handleHamburger}>
              Category
            </Link>
          </li>
          <li>
            <button onClick={handleDropDown}>Pages</button>
            <ul
              className="pagesDropDown"
              style={dropDown ? { display: "flex" } : { display: "none" }}
            >
              <li>
                <Link
                  to={"/about-us"}
                  onClick={() => {
                    handleDropDown();
                    handleHamburger();
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/pricing"}
                  onClick={() => {
                    handleDropDown();
                    handleHamburger();
                  }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to={"/error"}
                  onClick={() => {
                    handleDropDown();
                    handleHamburger();
                  }}
                >
                  Error 404
                </Link>
              </li>
              <li>
                <Link
                  to={"/blog"}
                  onClick={() => {
                    handleDropDown();
                    handleHamburger();
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  onClick={() => {
                    handleDropDown();
                    handleHamburger();
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <AccountBtns
          candidateText={"Login/Sign up"}
          employerText={"Post a job"}
          style={isBurgerOpen ? { display: "block" } : { display: "none" }}
          onClick={handleHamburger}
        />
      </div>
    </nav>
  );
};

export default TopNav;
