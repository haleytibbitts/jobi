import logo from "../assets/logo.svg";
import AccountBtns from "./AccountBtns";

const TopNav = () => {
  return (
    <nav className="topNav">
      <div className="logo">
        <img src={logo} alt="Jobi Logo" />
        <h1>jobi</h1>
      </div>
      <ul className="topNavLinks">
        <li>Home</li>
        <li>Job</li>
        <li>Explore</li>
        <li>Category</li>
        <li>
          Pages
          <ul className="pagesDropDown">
            <li>About Us</li>
            <li>Pricing</li>
            <li>Error 404</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </li>
      </ul>
      <AccountBtns seekerText={"Login/Sign up"} mgrText={"Post a job"} />
    </nav>
  );
};

export default TopNav;
